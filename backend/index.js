const express = require("express");
const app = express();
const fs = require("fs");
const upload = require("./middleware/file");
const cors = require("cors");
const path = require("path");
const mime = require("mime");
const port = 8000;

app.use(cors());
// app.get("/download", (req, res) => {
//     try{
        
//   const filePath = `myUploads/file.csv`;

//   const filename = path.basename(filePath);
  
//   const mimetype = mime.lookup(filePath);


//   res.setHeader("Content-disposition", "attachment; filename=" + filename);
//   res.setHeader("Content-type", mimetype);

//   const filestream = fs.createReadStream(filePath);
//   filestream.pipe(res);

//     }catch(e){
//         console.error(e)
//     }
  
// });
app.get("/download", (req, res) => { 
    console.log("object");
    const filePath =`myUploads/consumer.csv`;
    res.download(
        filePath, 
        "file.csv", // Remember to include file extension
        (err) => {
            if (err) {
                res.send({
                    error : err,
                    msg   : "Problem downloading the file"
                })
            }
    });
});
app.post("/upload", upload.single("upload-data"));

app.listen(port, () => {
  console.log(`port listening at ${port}`);
});
