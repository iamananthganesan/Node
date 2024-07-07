const express = require('express');

const app = express();
//Middleware when you send a request from client side to convert that request into json format we need to use this app.use(express.json());
app.use(express.json());
//GET response
app.get('/', (request, response) => {
    response.send("Get call response from server !!!");
})

app.post('/post', (request, response) => {
    console.log(request.body)
    response.send(request.body)
})


const users = [
    { id: 1, name: "Senthil" },
    { id: 2, name: "Anand" }
]

app.post('/users', (request, response) => {
    const newUser = request.body;
    const userId = users.length + 1
    newUser.id = userId;
    users.push(newUser);
    response.status(201).json({ message: "New user has been created successfully!!!", user: newUser });
    console.log("Whole Users", users);
});

const PORT = 8000;
//Server is listening in PORT no 8000
app.listen(PORT, () => {
    console.log(`server is running in port no ${PORT}`);
});