import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";
import * as dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT || 8080;
connectToDatabase().then(() => {
    // app.get("/hello",(req,res,next)=>{
    //     return res.send("HEYYY");
    // })
    app.listen(8080, () => console.log("Server open and conected to database 👍"));
}).catch(err => console.log(err));
//# sourceMappingURL=index.js.map