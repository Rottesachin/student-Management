const express=require("express")
const app=express();


const PORT=3000;
const studentRoutes = require("./routes/studentRoutes");
app.use(express.json());
app.use("/api/students", studentRoutes);

app.get('/',(req,res)=>{
    res.send("Welcome to student managent Api")

})
app.get("/api/health", (req, res) => {
    res.json({
        message: "Backend server is running successfully!",
        status: "OK"
    });
});
app.listen(PORT,()=>{
    console.log(`the server is running ${PORT}`)
})