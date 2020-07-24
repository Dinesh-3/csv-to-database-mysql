const db = require('./database/mysql.js')
const express = require("express")
const app = express();
const csv = require('csvtojson');
const multer = require('multer');
const path = require('path');

const uploadStorage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./uploads');
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    }
});

let uploads = multer({storage:uploadStorage});

app.get('/upload',(req,res) => res.sendFile(path.join(__dirname,'./views/index.html')))

app.post('/upload',uploads.single('csv'),(req,res)=>{
    csv().fromFile(req.file.path)
    .then((jsonData) => {
        let sql = 'INSERT INTO products SET ?';
        jsonData.forEach(data => {
            db.query(sql, data, (err, result) => {
                if(err){
                    res.send("Given csv file already inserted !!!");
                    console.log(err);
                }else{
                    console.log(result);
                }}
            )}
        )})
        res.send('Data stored successfully');        
    });
PORT = 3000
app.listen(PORT,() => console.log(`Server is running on port : ${PORT}`));

