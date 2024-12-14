// Create web server
// 1. Import express module
// 2. Create instance of express
// 3. Create a route for GET request to '/' path
// 4. Create a route for POST request to '/' path
// 5. Create a route for PUT request to '/' path
// 6. Create a route for DELETE request to '/' path
// 7. Start the server
// 8. Test the server using curl

// 1. Import express module
const express = require('express');
const bodyParser = require('body-parser');

// 2. Create instance of express
const app = express();

// 3. Create a route for GET request to '/' path
app.get('/', (req, res) => {
    res.send('GET request to the homepage');
});

// 4. Create a route for POST request to '/' path
app.post('/', (req, res) => {
    res.send('POST request to the homepage');
});

// 5. Create a route for PUT request to '/' path
app.put('/', (req, res) => {
    res.send('PUT request to the homepage');
});

// 6. Create a route for DELETE request to '/' path
app.delete('/', (req, res) => {
    res.send('DELETE request to the homepage');
});

// 7. Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

// 8. Test the server using curl
// curl -X GET http://localhost:3000
// curl -X POST http://localhost:3000
// curl -X PUT http://localhost:3000
// curl -X DELETE http://localhost:3000