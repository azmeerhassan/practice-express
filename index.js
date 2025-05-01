const express = require('express')
const app = express()
const users = require('./MOCK_DATA (1).json')

app.get('/api/users', (req,res)=>{
    return res.json(users)
})

app.post('/api/users', (req, res)=>{
    return res.json({status: "pending"})
})

app.route('/api/users/:id')
.get((req, res)=>{
    const id = Number(req.params.id)
    const user = users.find((user)=> user.id ===id)
    return res.json(user)
})
.patch((req, res)=>{
    return res.json({status: "pending"})
})
.delete((req, res)=>{
    return res.json({status: "pending"})
})

app.listen(3000, ()=>console.log('Server Started')
)