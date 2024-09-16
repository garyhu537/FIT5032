<template>
    <div>
      <h1>Books with ISBN > 1000, Ordered by ISBN, limited to 3</h1>
      <ul>
        <li v-for="book in books" :key="book.id">
          {{ book.name }} - ISBN: {{ book.isbn }}
          <button @click="deleteBook(book)">Delete</button>
          <button @click="editBook(book)">Edit</button>
        </li>
      </ul>
      <div v-if="editingBook">
      <h2>Edit Book</h2>
      <form @submit.prevent="updateBook">
        <label for="name">Name</label>
        <input type="text" v-model="editingBook.name" required />

        <label for="isbn">ISBN</label>
        <input type="number" v-model="editingBook.isbn" required />

        <button type="submit">Update Book</button>
      </form>
    </div>
    </div>

    
  </template>
  
  <script>
  import { ref, onMounted } from 'vue'
  import db from '../firebase/init.js'
  import { collection, query, where, getDocs, orderBy, limit, doc, deleteDoc, updateDoc } from 'firebase/firestore'
  
  export default {
    setup() {
      const books = ref([])
      const editingBook = ref(null)
  
      const fetchBooks = async () => {
        try {
          const q = query(collection(db, 'books'), where('isbn', '>', 1000), orderBy('isbn'), limit(3))
          const querySnapshot = await getDocs(q)
          const bookArray = []
          querySnapshot.forEach((doc) => {
            bookArray.push({ id: doc.id, ...doc.data() })
          })
          books.value = bookArray
        } catch (error) {
          console.error('Error fetching books ', error)
        }
      }
  
      const deleteBook = async (book) => {
        try {
          await deleteDoc(doc(db, 'books', book.id))
          alert('Book deleted successfully')
        } catch (error) {
          console.error('Error deleting book: ', error)
        }
      }

      const editBook = (book) => {
        editingBook.value = { ...book } // clone the book to avoid direct mutation
        }

      const updateBook = async () => {
      try {
        const bookRef = doc(db, 'books', editingBook.value.id)
        await updateDoc(bookRef, {
          name: editingBook.value.name,
          isbn: editingBook.value.isbn
        })
        alert('Book updated successfully')
        editingBook.value = null
      } catch (error) {
        console.error('Error updating book: ', error)
      }
    }
  
      onMounted(() => {
        fetchBooks()
      })
  
      return {
        books,
        editingBook,
        deleteBook,
        editBook,
        updateBook
      }
    }
  }
  </script>