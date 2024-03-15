// server.js
// import the required modules
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose  = require('mongoose');
const { title } = require('process');


// create an express app
const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// use the body-parser middleware to parse the request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


// use the session middleware to store the session data
app.use(session({
    secret: 'some secret', // change this to a secure value
    resave: false,
    saveUninitialized: false
  }));

app.get('/', (req,res)=>{
    res.render('main')
})

//routes for layout to be navigated
app.get('/tick', (req,res)=>{
  res.render('tikect', {title: "Tiket part"})
})

app.get('/destination', (req,res)=>{
  res.render('destination', {title: "Tiket part"})
})

app.get('/contact', (req,res)=>{
  res.render('contact', {title: "Tiket part"})
})





//404 route
// app.get('/404',(req,res)=>{
//   res.render('404')
// })
// app.use((req,res)=>{
//   res.redirect('/404')
// })



  

// start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


