const express = require('express');
const bodyParser = require('body-parser');
const doctorRoutes = require('./routes/DoctorRoutes');


const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Coding Challenge REST API');
  });

const PORT=3001;
app.listen(PORT,()=>{

    console.log(`Server is running on port:http://localhost:3001`);
});

app.use('/doctors', doctorRoutes);
