const port = 5000;
let express = require('express');
let mongoose = require('mongoose');
const app = express()
let cors = require('cors');
let bodyParser = require('body-parser');

const tab = require("./db_models/Tables");
const createError = require('http-errors');

const mongourl = "mongodb://127.0.0.1:27017/tables_DB";

mongoose.connect(mongourl, { useNewUrlParser: true, useUnifiedTopology: true },()=>{
  console.log("Connection to mongodb success")
},e=>{console.log(e)});

app.use(cors());
app.use(bodyParser.json());


app.use(bodyParser.urlencoded({
  extended: true
}));


app.post('/put_in_db',(req,res)=>{
  console.log("Im in server");
  console.log(req.body);
  tab.create(req.body,(err,data)=>{
    if(err){
        console.log(err);
        return next(err);
    } else {
      console.log(data);
      res.json(data); // send the response once with res.json
    }
})

}); // <-- added closing curly brace

// app.get('/get_from_db', (req, res) => {
//   tab.find((error, data) => {
//     if (error) {
//         return next(error)
//     } else {
//         res.json(data)
//     }
// })
// });


app.get('/get_counts', (req, res) => {
  tab.aggregate([
    {
      $group: {
        _id: "$data",
        count: { $sum: 1 }
      }
    }
  ], (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});



app.get('/',(req,res)=>{
  res.send("hello test");
});

app.get('/',(req,res)=>{
  res.send("hello");
});

app.use((req, res, next) => {
  next(createError(404));
});

app.listen(port, () => {
  console.log("Server started on port "+port);
});
