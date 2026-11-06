import express from "express"

const app = express();
const PORT = 5000;


app.get("/api/cookie/set", (req, res) => {
    res.cookie("theme", "dar", { httpOnly: true, maxAge: 60 * 60 * 100 })
    res.json({
        message: "Cookie Set"
    })
})
app.listen(PORT, () => {
    console.log(`Server Started: http:/localhost:${PORT}`)
})