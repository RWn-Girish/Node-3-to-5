const express = require('express');

const port = 8001;
const app = express();
const db = require("./config/dbConnection");

app.set("view engine", "ejs");
app.use(express.urlencoded());

app.get("/", async (req, res) => {
    const data = await db.query(`select * from users order by id asc`);
    // console.log(data.rows);
    return res.render("index", { users: data.rows });
})

app.post("/addUser", async (req, res) => {
    // console.log(req.body);
    const { id, firstname, lastname, email, phone } = req.body;
    // let newUser = await db.query(`insert into users (id, firstname, lastname, email, phone) values(${Number(id)}, '${firstname}', '${lastname}', '${email}', '${phone}')`)
    let newUser = await db.query(`insert into users (id, firstname, lastname, email, phone) values($1, $2, $3, $4, $5)`, [Number(id), firstname, lastname, email, phone])
    if (newUser) {
        return res.redirect("/");
    } else {
        console.log("Error!!!!");
    }
});

app.get("/deleteUser/:id", async(req, res) => {
    const id = req.params.id;
    // console.log(id);
    let deleteData = await db.query(`delete from users where id = $1`, [Number(id)]);
    if(deleteData){
        return res.redirect("/");
    }else{
        console.log("Error!!!!");
    }

})

app.get("/editUser/:id", async (req, res) => {
    const id = req.params.id;
    const data = await db.query(`select * from users where id = $1`, [Number(id)])
    // console.log(data.rows[0])
    return res.render("editUser", {user : data.rows[0]})
})

app.post("/editUser/:id", async (req, res) => {
    const id = req.params.id;
    const { firstname, lastname, email, phone } = req.body;
    const data = await db.query(`update users set firstname= $1, lastname = $2, email = $3, phone = $4 where id = $5`,[firstname, lastname, email, phone, Number(id)] )
    // console.log(data.rows[0])
    if(data){
        return res.redirect("/")
    }else{
        console.log("Error!!!!");
        return res.redirect("back");
    }
})


app.listen(port, () => {
    console.log(`Server start at http://localhost:8001`);
})