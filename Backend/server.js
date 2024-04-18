const express = require("express")
const mysql = require("mysql")
const cors = require("cors")
const app=express()
app.use(cors())
const db=mysql.createConnection({
    host:"localhost",
    user:'root',
    password:'',
    database:'bharatpol',

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
app.post("/candidates/add", (req,res)=>{
  
  
 const candidateName= req.body.candidateName
  const partyName=req.body.partyName
  const partyLogo=req.body.partyLogo
  const candidatePhoto=req.body.candidatePhoto
  const candidateSummary=req.body.candidateSummary
  const constituencyName=req.body.constituencyName

  const quer = "INSERT INTO candidates (stateName,constituencyName,candidateName,partyName,partyLogo,candidatePhoto,candidateSummary) VALUES (?,?,?,?,?,?,?)"
  const values={
    stateName,
   candidateName,
   constituencyName,
    partyName,
    partyLogo,
    candidatePhoto,
    candidateSummary,
  }
  console.log(values);
  db.query(quer,[stateName,candidateName,constituencyName,partyName, partyLogo,candidatePhoto,candidateSummary],(err,data)=>{
  // db.query(query, [req.body.name, req.body.state,req.body.party,req.body.symbol,req.body.image,req.body.about,req.body.constituency],(err,data)=>{
    if(err) return res.json(err);
    return console.log(res.json(data))
  })
})

app.listen(8080,()=>{console.log("db running")})