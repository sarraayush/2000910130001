const express = require('express');

const app = express();


// const bodyparser = require('body-parser');
const numbers = require('./routes/numbers');


app.use(express.json());

app.use(express.urlencoded({ extended: true}));



app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.get('/',(req ,res, next)=>{
    
  console.log("have we reached");
  res.status(200).json({
    message : "Welcome to api , Have a good day!"
  });
});



// User registration



// User login



// start using routes here !

app.use('/numbers' , numbers);


//end using routes here ! 

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});


module.exports = app;









