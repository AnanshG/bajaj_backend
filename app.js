
const express = require("express");
const cors = require('cors')
const bodyParser = require("body-parser")


const app = express();

// using cors for cross servers request
app.use(cors())

app.use(bodyParser.json())      // to parse request req body 

// get request
app.get('/bfhl',(req,res) => {
    res.status(200).json({operation_code:1})
})


// post request
app.post('/bfhl',(req,res)=>{
        const { data } = req.body;

        // if data is not valid
        if (!data || !Array.isArray(data)) {
            return res.status(400).json({
                is_success: false,
                message: "Invalid input. Please provide an array of data."
            });
        }
    
        const numbers = [];
        const alphabets = [];
        let highestLowercase = '';
    
        data.forEach(item => {
            if (!isNaN(item)) {
                numbers.push(item);
            } else if (typeof item === 'string') {
                alphabets.push(item);
                if (item === item.toLowerCase() && item > highestLowercase) {
                    highestLowercase = item;
                }
            }
        });
    
        res.json({
            is_success: true,
            user_id: "anansh_gupta_28012003",
            email: "ananshgupta07@gmail.com",
            roll_number: "21CBE10380",
            numbers,
            alphabets,
            highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : []
        });
});
    


app.listen(5000,()=>{
    console.log("Listening to port 5000")
})