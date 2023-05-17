import express from 'express';
const app = express();

app.use(express.static('public'));
app.get('/', (req, res) => {
    res.sendFile('index.html')
});

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
