const express = require("express")
const postRoutes= require('./routes/post.routes.js')
const app =express()


app.get('/',(req,res)=>{
    res.status(200).send("Welconme to the blogify api")
})

app.use('/api/v1/posts',postRoutes)

const PORT =8000
app.listen(PORT,()=>{
    console.log(`Server is ruuning on http://localhost:${PORT}`);
    
})