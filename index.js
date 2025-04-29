const express = require('express')
const app = express()

app.use(express.json())

app.post('/form',[
    check('name').isLength({ min:3 }).trim().escape(),
    check('email').isEmail().normalizeEmail(),
    check('age').isNumeric().trim().escape()
], (req, res)=>{

    const name = req.body.name
    const email = req.body.email
    const age = req.body.age

    res.status(200).json({
        message: 'Form submitted successfully',
        data: { name, email, age }
    })
})

app.listen(3000, ()=>console.log('Server Started')
)