const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
app.get('/', (req, res) => res.redirect('title'));
app.get('/home', (req, res) => res.render('pages/home'));
app.get('/title', (req, res) => res.render('pages/title'));
app.get('/gameover', (req, res) => res.render('pages/gameover'));