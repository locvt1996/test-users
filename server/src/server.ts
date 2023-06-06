import dotenv from "dotenv";
import app from "./app";

dotenv.config({ path: "./config.env" });

// SERVER CONNECT
app.listen(process.env.PORT, () => {
  console.log("App running");
});
