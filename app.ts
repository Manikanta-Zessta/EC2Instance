import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Helloo World</h2><h3>Good Morning</h3><h4>Welcome to UNIVERSE')
})

app.listen(5001, () => {
    console.log('connected with port 5001 ')
});