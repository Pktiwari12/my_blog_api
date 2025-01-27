import app from "./app.js";
console.log(process.env.PORT);
const port = process.env.PORT;
app.listen(port , ()=>{
    console.log(`The server is listening on port ${port}`);
})

