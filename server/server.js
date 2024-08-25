const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoute');


dotenv.config();

const app = express();
const PORT = process.env.PORT;

//middlewares

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use('/api/users', userRoutes);
app.use('/',(req, res) => {
    res.send('Hello Server is Running');
})

const runServer =async () => {
    try {
        await connectDB();
        app.listen(PORT, (err) => {
            if(err)
                console.log(`Error: ${err.message}`);
            else 
                console.log(`App is Runnging or the Port =${PORT}`);
        }); 
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
};

runServer();