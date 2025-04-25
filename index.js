const express = require('express')
const app = express()
app.set('view engine', 'pug')

app.get('/about', (req, res)=>{
    res.render('about', {name: 'fahad'})
})

app.listen(3000, ()=>{console.log('Server Started');
})