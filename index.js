const express = require("express");
const cors = require("cors");
const connDb = require("./mongoose/db.con");
const router = require("./router");


const app = express();
const PORT = 4000;


// database connection 
connDb()


/* ---------- MIDDLEWARE ---------- */

// Enable CORS (allow all origins)
app.use(cors());

// Parse JSON body
app.use(express.json());

// Parse URL encoded data (optional but recommended)
app.use(express.urlencoded({ extended: true }));

// Router set 
app.use(router)

/* ---------- ROUTES ---------- */

// Health check
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 Server running"
  });
});



/* ---------- SERVER ---------- */
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
