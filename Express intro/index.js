const express = require('express');

const port = 1122;
const app = express();  // server create 

app.set('view engine', 'ejs');
app.use(express.urlencoded());
let students = [
    {
        id: 101,
        firstname: "Pravesh",
        lastname: "Prajapati",
        gender: "male",
        email: "pravesh@test.in",
        phone: 9874563210
    },
    {
        id: 102,
        firstname: "Ashish",
        lastname: 'Dhola',
        gender: 'male',
        email: 'ashish@test.in',
        phone: 1234567890
    },
    {
        id: 103,
        firstname: "Palak",
        lastname: "Gohel",
        email: "palak@test.in",
        gender: 'female',
        phone: 4567890321
    }
];


app.get('/', (req, res) => {
    res.render('index', { students: students });
})
app.get('/about', (req, res) => {
    res.render('about');
})

app.post('/addStudent', (req, res) => {
    // console.log(req.body);
    const { id, firstname, lastname, email, gender, phone } = req.body;
    const newObj = {
        id: id,
        firstname: firstname,
        lastname: lastname,
        email: email,
        gender: gender,
        phone: phone
    }
    students.push(newObj);
    console.log('New Student Added');
    return res.redirect("/");
});

app.get('/deleteStudent/:id', (req, res) => {
    // console.log(req.params.id);
    const id = req.params.id;
    // filter, splice
    students = students.filter((student) => {
        return student.id != id
    })
    console.log('Record Delete')
    return res.redirect('/');
});

app.get('/editStudent/:id', (req, res)=>{
    const id = req.params.id;
    const studentRecord = students.find((student)=>{
        return student.id == id;
    });
    return res.render('editStudent', {student: studentRecord})
    // console.log(studentRecord);
});

app.post('/editStudent/:id', (req, res)=>{
    const id = req.params.id;
    const { firstname, lastname, email, gender, phone } = req.body;
    students.filter((student)=>{
        if(student.id == id){
            student.id = id;
            student.firstname = firstname;
            student.lastname = lastname;
            student.email = email;
            student.gender = gender;
            student.phone = phone
        }
        return student;
    });

    return res.redirect('/');
})


app.listen(port, (err) => {
    if (err) {
        console.log('Server not start');
    } else {
        console.log(`Server start at http://localhost:${port}`);
    }
});
