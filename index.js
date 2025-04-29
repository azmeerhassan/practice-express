const express = require('express')
const { check, validationResult } = require('express-validator')
const app = express()

app.use(express.json())

app.post('/form',[
    check('name').isLength({ min:3 }).withMessage('Must be atleast 3 characters'),
    check('email').custom(email=>{
        if(alreadyHaveEmail(email)){
            return Promise.reject('Email already exists');
            
        }}),
    check('age').isNumeric().withMessage('Must be a positive number')
], (req, res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty())
        return res.status(422).json({errors: errors.array()})

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