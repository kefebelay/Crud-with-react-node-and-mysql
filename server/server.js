import express from "express"
import mysql from "mysql"
import cors from 'cors'

const app = express();

const db = mysql.createConnection({
    host:'localhost',
    user:"root",
    database:"test",
    password:''
})

app.use(express.json())
app.use(cors())

app.get('/', (req, res)=>{
   res.json("hello")
})
app.get('/books', (req, res)=>{
    db.query('select * from books', (err, result)=>{
        if(err){console.log(err)}
        res.json(result)
    })
    
})
app.post('/books', (req, res)=>{
    const q = 'insert into books (`title`, `desc`, `price`,`cover`) values (?)';
    const values = [
       req.body.title,
        req.body.desc,
        req.body.price,
        req.body.cover
    ]

    db.query(q,[values],(err,data)=>{
        if(err){return res.json(err)}
        res.json("book has been created")
    })
})

app.delete('/books/:id', (req,res)=>{
    const bookId = req.params.id;
    const q = "delete from books where id = ?";

    db.query(q,[bookId], (err,data)=>{
        if(err){return res.json(err)}
        res.json("book has been Deleted")
    })
})
app.put('/books/:id', (req,res)=>{
    const bookId = req.params.id;
    const q = "update books set `title` = ?,`desc` = ?, `price` = ?, `cover` = ? where id = ?";
    const value = [
        req.body.title,
        req.body.desc,
        req.body.price,
        req.body.cover
    ]

    db.query(q,[...value, bookId], (err,data)=>{
        if(err){return res.json(err)}
        res.json("book has been Updated")
    })
})



app.listen(3001, ()=>{
    console.log("server running on 3001")
})
