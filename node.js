const express = require('express');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.listen('3000');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/feedback', (req, res) => {
    res.render('feedback');
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.render('home');
});

app.use((req, res) => { //To show if up program has some error while showing result
    res.status(404).render('404');
})