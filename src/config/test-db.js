const pool=require('./db');///importing db.js (here we imported that instead of writing it again)
async function testConnection(){
    try{
        const result=await pool.query("SELECT NOW()");
        console.log("Database connected successfully");
        console.log(result.rows[0])

    }catch(error){
        console.log("the database connection failed:", error.message)
    }finally{
        await pool.end();
    }
    
}
testConnection();