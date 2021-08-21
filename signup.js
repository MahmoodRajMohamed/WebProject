

// const blog = new Blog({
//     name : "String",
//     description : "String",
//     lunch : "String"
// });

const signin = function(){

    const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://mahmood:12345@cluster0.dsh2j.mongodb.net/SignUp?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => console.log("success"))
.catch((err) => console.log("failed"));

const Schema = new mongoose.Schema({
    name : String,
    email : String,
    password : String
    
});

const Blog = mongoose.model("signup", Schema);

    let userName = document.getElementById("Username").value;
    let eMail = document.getElementById("E-mail").value;
    let password = document.getElementById("Password").value;
    const blog = new Blog({
        name : userName ,
        email : eMail,
        password : password
    });

    blog.save().then((result) => console.log("Inserted Successfully")) .catch((err) => console.log("Failsed to insert"));
}

// Blog.find().then((result) => console.log(result)).catch((err) => console.log("failed"));
