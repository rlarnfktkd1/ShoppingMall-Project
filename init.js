import app from "./app";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 1234;

const handleListening = () => console.log(`http://localhost:${PORT}`);

app.listen(PORT, handleListening);