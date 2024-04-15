const express = require("express")
const mysql = require("mysql")
const cors = require("cors")
const app=express()
app.use(cors())
const db=mysql.createConnection({
    host:"localhost",
    user:'root',
    password:'',
    database:'bharatpol'
})
app.get('/',(req,res)=>{
    return res.json("hi hello")
})
app.get("/states",(req,res)=>{
  const sql="SELECT * FROM states";
  db.query(sql,(err,data)=>{
    if(err) return res.json(err);
    return res.json(data)
  })
})
app.get("/constituencies",(req,res)=>{
  const sql="SELECT * FROM constituencies";
  db.query(sql,(err,data)=>{
    if(err) return res.json(err);
    return res.json(data)
  })
})
app.get("/candidates",(req,res)=>{
  const sql="SELECT * FROM candidates";
  db.query(sql,(err,data)=>{
    if(err) return res.json(err);
    return res.json(data)
  })
})


app.listen(8080,()=>{console.log("db running")})