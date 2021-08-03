const express = require('express');
const app = express();
app.use(express.json({ extended: false }));


app.post('/bfhl', (req, res) => {
    console.log("Request:", req.body);
    var array = req.body.array;
    var even = [];
    var odd = [];

    // for (var i = 0; i < array.length; i++) {
    //     finalArray.push(Number(array[i]));
    // }
    // var flag_isFloat = false;
    // for (var i = 0; i < finalArray.length; i++) {
    //     if (!Number.isInteger(finalArray[i])) {
    //         flag_isFloat = true;
    //     }
    //     console.log(finalArray[i], flag_isFloat);
    //     if (flag_isFloat)
    //         break;
    // }
    var count1 = 0;
    var ansh_check_it = array.map((num) => {
        if (num % 2 == 0) {
            count1 = 0;
        }
    })


    floatArray = array;
    var flag_isNumeric = array.filter(function (num) {
        return isNaN(num);
    }).length > 0;


    var finalArray = [];

    for (var i = 0; i < array.length; i++) {
        finalArray.push(Number(array[i]));
    }
    var flag_isFloat = false;
    for (var i = 0; i < finalArray.length; i++) {
        if (!Number.isInteger(finalArray[i])) {
            flag_isFloat = true;
        }
        console.log(finalArray[i], flag_isFloat);
        if (flag_isFloat)
            break;
    }

    if (!flag_isNumeric && !flag_isFloat) {
        array.map((num) => {
            if (!(parseInt(num) % 2))
                even.push(parseInt(num));
            else
                odd.push(parseInt(num));
        })

        res.send({
            "is_success": true,
            "user_id": "Ansh_Shrivastava09111999",
            "odd": odd,
            "even": even
        })
    }
    else {
        res.send({
            "is_success": false,
            "user_id": "Ansh_Shrivastava09111999"
        })
    }
})

app.use('/', (req, res) => {
    res.send("Kindly, use /bfhl as an end-point and POST method");
})

const PORT = process.env.PORT || 5056;
app.listen(PORT, () => console.log('API is running on http://localhost:8080/bfhl'));
