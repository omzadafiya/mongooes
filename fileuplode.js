const express = require('express');
const multer = require('multer');
const app = express();

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, callback) {
            callback(null, "image")
        },
        filename: function (req, file, callback) {
            callback(null, file.fieldname + "-" + Date.now() + ".jpg")
        }
    })
}).single("user_file");

app.post("/uplode", upload, (req, resp) => {
    resp.send("file upload")
});
app.post("/uplodeTest", upload, (req, resp) => {
    resp.send("file upload")
});

app.listen(4000);