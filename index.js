const express = require('express')
const app = express()

app.get('/download', (req, res)=>{
    res.download('./pfp.jpeg.jfif', 'azmeer.jpg', (err)=>{
        if(err)
            console.log(err);
        else
        return
            
    })
})

app.listen(3000, ()=>{console.log('Server Started');
})