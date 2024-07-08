const express = require('express');

const app = express();
//Middleware when you send a request from client side to convert that request into json format we need to use this app.use(express.json());
app.use(express.json());


//CUSTOM middleware
const loggerMiddleware = (request, response, next) => {
    console.log(`${new Date().toDateString()} ${request.method} ${request.url}`)
    next();//Call the the next middleware
}
//app.use(loggerMiddleware) it inticates it will call for all the API's 
//app.use(loggerMiddleware);
const users = [
    { id: 1, name: "Senthil" },
    { id: 2, name: "Anand" },
    { id: 3, name: "Ganesan" },
];
//GET response
app.get('/user', loggerMiddleware, (request, response) => {
    response.status(200).json(users);
})
//POST call 
app.post('/post', (request, response) => {
    console.log(request.body)
    response.send(request.body)
})

app.post('/users', (request, response) => {
    const newUser = request.body;
    const userId = users.length + 1
    newUser.id = userId;
    users.push(newUser);
    response.status(201).json({ message: "New user has been created successfully!!!", user: newUser });
    console.log("Whole Users", users);
});

// payment

//const notAllowedStrings = ['R', 'r'];
const cardUsers = [];
app.post('/payment', (request, response) => {
    const paymentRequestbody = request.body;
    if (paymentRequestbody.user.startsWith('R') || paymentRequestbody.user.startsWith('r')) {
        response.status(400).json({ message: "this user is not allowed to the payment", user: paymentRequestbody.user })
    } else {
        console.log("Request payload from the client side", paymentRequestbody);
        cardUsers.push(paymentRequestbody);
        console.log("Request payload from the client side", paymentRequestbody);
        response.status(200).json({ message: "Good to proceed with payment mode", user: paymentRequestbody })
    }
});


//DELETE API CALL

app.delete('/user/:id', (request, response) => {
    const userId = parseInt(request.params.id);
    //find the user with id
    console.log("users", users, "userId", userId);
    const userIndex = users.findIndex((user) => { return user.id === userId });
    console.log("userIndex", userIndex);
    if (userIndex === -1) {
        return response.status(404).json({
            message: "User not found!!!"
        })
    }
    users.splice(userIndex, 1);
    response.status(200).json({
        message: "user deleted successfully!!!"
    })

})

//You can pass parameter for the GET call by using the params 
app.get("/validate-number", (request, response) => {        
    const numberRequestbody = parseInt(request.query.number);    
    if(numberRequestbody < 0){
      response.status(400).json('Invalid positive integer')
    } else {
        response.status(200).json('Success!')
    }
  });

const PORT = 8000;
//Server is listening in PORT no 8000
app.listen(PORT, () => {
    console.log(`server is running in port no ${PORT}`);
});