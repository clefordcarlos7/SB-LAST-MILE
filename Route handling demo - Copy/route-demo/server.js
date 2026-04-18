// Step 2.1: Import Express
const express = require("express");

// Create app
const app = express();

// Port
const PORT = 3000;


/* =========================
   Step 4.1: Logger Middleware
========================= */
app.use((req, res, next) => {
    console.log("Method:", req.method);
    console.log("URL:", req.url);
    next();
});


/* =========================
   Step 2.2: Root Route
========================= */
app.get("/", (req, res) => {
    res.send("Welcome to Route Handling!");
});


/* =========================
   Step 2.3: About Route
========================= */
app.get("/about", (req, res) => {
    res.send("<h1>About Us</h1>");
});


/* =========================
   Step 3.1: Dynamic Route (:id)
========================= */
app.get("/products/:id", (req, res) => {
    const id = req.params.id;
    res.send("Viewing Product ID: " + id);
});


/* =========================
   Step 3.2: Query Route
========================= */
app.get("/search", (req, res) => {
    const term = req.query.q;
    res.send("Searching for: " + term);
});


/* =========================
   Step 5.1: 404 Handler
========================= */
app.use((req, res) => {
    res.status(404).send("Page Not Found");
});


/* =========================
   Start Server
========================= */
app.listen(PORT, () => {http://localhost:3000
    console.log(`Server running on http://localhost:${PORT}`);
});