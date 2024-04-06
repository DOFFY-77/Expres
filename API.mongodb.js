
const express = require('express');
const app = express();
const PORT = 3000;
app. use(express.json());

// 1- Get api
app.get("/", (req, res) => {
console.log("GET Request Successfull!");
res.send("Get Req Successfully initiated");
});

// 2- Put api
app.put("/put", (req, res) => {
console.log("PUT REQUEST SUCCESSFUL");
console.log(req.body) ;
res.send('Data Update Request Recieved' );
});

// 3- Post api
app.post("/post", (req, res) => {
    console.log("POST REQUEST SUCCESSFUL");
    console.log(req.body);
    res.send('Data POST Request Recieved');
});

// 4- Delete api
app.delete("/delete", (req, res) => {
    console.log("DELETE REQUEST SUCCESSFUL");
    console.log(req.body);
    res.send('Data DELETE Request Recieved');
});


app.listen(PORT, () => {
console.log(`Server established at ${PORT}` );
})


