const express = require('express');
const cors = require('cors');
const app = express();
const {clear} = require('./data_controller/deta_controller')

app.use(express.json());
app.use(cors());
app.use('/',require('./routes/deta_roots'));

app.listen(5000,()=>{
    clear();
    console.log('server start on port 5000')
});