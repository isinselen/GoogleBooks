const express = require('express');
const path = require("path");
const app = express();
const db = require("./model/Books")
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

mongoose.connect('mongodb://localhost/googlebooks', { useNewUrlParser: true });

//Routes

/// Get all the books saved
app.get("/api/books", (req,res)=>{
    db.find({})
      .then((dbBooks)=>{
        res.json(dbBooks);
      })
      .catch((err)=> {
          res.json(err)
      })
})
/// Delete books
app.delete("/api/books/:id", (req,res)=>{
    db.findByIdAndDelete(req.params.id)
      .then((result)=>{
          res.json(result);
      })
      .catch((err)=>{
          console.log(err)
          res.json(err)
      })
     
})
/// Add book to DB
app.post("/api/books", (req, res)=>{
    const newBooks = req.body;
    db.create(newBooks)
        .then((dbNewBook) => {
            res.json(dbNewBook);
        })
        .catch((err) => {
            res.json(err)
        })
})



app.get("*", (req,res) => {
    res.sendFile(path.join(__dirname,"./client/build/index.html"));
}) 


app.listen(PORT, () => {
    console.log(`API server now on PORT ${PORT}!`)
})

