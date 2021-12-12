const express = require('express');
const mongoose = require('mongoose');
const Blog = require('./models/blog');
const app = express();

const port = process.env.PORT || 3000;

//mogodatabase connection 
const url = 'mongodb+srv://virtualnetwork:mogodatabasepassword@cluster0.rfszu.mongodb.net/netnija?retryWrites=true&w=majority';
mongoose.connect(url)
    .then((result) => app.listen(port))
    .catch((err) => { console.log(err); });
    console.log(`server is running on ${port}`)
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/feedback', (req, res) => {
    res.render('feedback');
});

app.post('/', (req, res) => {
    const blog = new Blog({
        data: req.body
    }).save()
        .then(() => {
            res.render('home');
        })
        .catch((err) => res.send(err));
    console.log(req.body);
});

//To show if up program has some error while showing result
app.use((req, res) => {
    res.status(404).render('404');
})