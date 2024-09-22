const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json())
const PORT = process.env.PORT || 3001;

app.use(cors());

app.post("/bfhl",(req,res)=>{
    
    const data=req.body.data;
    var highest=[];
    const alphabets=[];
    const numbers=[];
    const is_success=true;
    data.forEach((item )=> {
        if (!isNaN(item)) {
            numbers.push(item);
        }else{
            alphabets.push(item);
            if (highest.length === 0 ||item.localeCompare(highest[0]) > 0 ) {
                highest = [item];
            }
        }
    });
    res.json({
        is_success: is_success,
        user_id: "john_doe_17091999",
        email: "john@xyz.com",
        roll_number: "RA2111002010616",
        alphabets: alphabets,
        numbers: numbers,
        highest_alphabet: highest,
    });
})
app.get("/bfhl", (req, res) => {
    res.json({"operation_code":1});
});

app.listen(PORT, () => {
    console.log(`listening on http:/127.0.0.1:${PORT}`);
});