// load environment variables
require("dotenv").config(); 

// import Express app
const app = require("../app"); 

// use env port or default
const PORT = process.env.PORT || 3002; 

// start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});