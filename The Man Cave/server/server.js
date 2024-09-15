const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const path = require('path')

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const userFilePath = path.join('@/assets/json', 'user.json')

// Function to read existing users from the JSON file
const readUsers = () => {
  const data = fs.readFileSync(userFilePath, 'utf8')
  return JSON.parse(data)
}

// Function to write updated users to the JSON file
const writeUsers = (users) => {
  fs.writeFileSync(userFilePath, JSON.stringify(users, null, 2))
}

// API route to handle form submission
app.post('/submit-form', (req, res) => {
  const newUser = {
    id: 3, // Using timestamp as a simple unique ID
    email: req.body.email,
    password: req.body.password,
    fullname: req.body.fullname,
    contactNumber: req.body.contactNumber,
    institution: req.body.institution || 'NA',
    type: req.body.type || 'User'
  }

  const users = readUsers()
  users.push(newUser)
  writeUsers(users)

  res.status(200).send({ message: 'User data saved successfully!' })
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
