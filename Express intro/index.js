const express = require('express');

const port = 1122;
const app = express();   

app.set('view engine', 'ejs');


app.get('/', (req, res)=>{
    // res.render('index');
    res.render()
})
app.get('/about', (req, res)=>{
    res.render('about');
})


app.listen(port, (err)=>{
    if(err){
        console.log('Server not start');
    }else{
        console.log(`Server start at http://localhost:${port}`);
    }
});
