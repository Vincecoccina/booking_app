import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.get('/', (req, res) => {
    res.send("Hello from backend")
})

const PORT = process.env.PORT || 3330
app.listen(PORT, () => console.log(`Backend Connected on port ${PORT}`))
