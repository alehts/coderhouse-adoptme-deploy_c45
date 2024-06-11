import express from "express";
const router = express.Router()

router.get("/", (req, res) => {
    res.render('index', {})
})


router.get("/test-user", (req, res) => {
    let testUser = {
        first_name: "Hilda",
        last_name: "Martinez",
        email: 'hilda@gmail.com'
    }
    res.render("users", { user: testUser })
})


export default router