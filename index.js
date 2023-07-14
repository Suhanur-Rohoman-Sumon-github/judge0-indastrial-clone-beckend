const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const  generateFile  = require('./genaretFile');
const exicuteCpp = require('./exicuteCpp')
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
    // to call the genarete file funtion there and send two arguments 
    const filePath = await generateFile(language,code)
    // to call the exicute cpp file there and show the cde output
    const output = await exicuteCpp(filePath)
    res.send({filePath,output});
});

app.listen(port, () => {
    console.log(`the code container is running on port ${port}`);
});
