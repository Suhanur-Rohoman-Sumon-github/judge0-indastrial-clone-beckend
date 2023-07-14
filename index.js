const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('vai cola suru hoise pera nai');
});

app.post('/run', async (req, res) => {
    const { language='cpp', code } = req.body;
    if(code === undefined){
        res.status(400).send({sucsees :false, eror:'empty code body'})
    }
    res.send({ language, code });
});

app.listen(port, () => {
    console.log(`the code container is running on port ${port}`);
});
