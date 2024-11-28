const express = require('express');
const port = 1111;
const path = require('path');
const app = express();

app.set("view engine", 'ejs');
app.set("views", path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));


const validate = (req, res, next) =>{
    // console.log(req.query);
    if(req.query.age >=18){
        next();
    }else{
        return res.redirect('/');
        // return res.end('Sorry Your age is below 18.')
    }
}

// app.use(validate);       // application level

app.get('/', (req, res)=>{
    return res.render('index');
})
app.get('/home', validate, (req, res)=>{
    return res.render('home');
})
app.get('/about', (req, res)=>{
    return res.render('about');
})

app.listen(port, ()=>{
    console.log(`Server start at http://localhost:${port}`);
})

