// // var http = require('http');
// // var dt = require('./modules/dateTime');
// // var url = require('url');
// // var fs = require('fs');
// // var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
// // var q = url.parse(adr, true);
// // var uc = require('upper-case');
// // var rs = fs.createReadStream('newFile1.txt');
// // var events = require('events');
// // var eventEmitter = new events.EventEmitter();
// // var formidable = require('formidable');

// // // rs.on('open', function () {
// // //     console.log("File is open");
// // // });

// // var myEventHandler = function () {
// //     console.log("I hear a scream");
// // };

// // eventEmitter.on('scream', myEventHandler);

// // eventEmitter.emit('scream');

// // // console.log("Host Name:" + q.host);
// // // console.log("Path Name:" + q.pathname);
// // // console.log("Search:" + q.search);
// // // var qdata= q.query;
// // // console.log("Month:" + qdata.month);

// // http.createServer(function(req, res){
// //     if (req.url == '/fileupload') {
// //         var form = new formidable.IncomingForm();
// //         form.parse(req, function (err, fields, files) {
// //             var oldpath = files.filetoupload.path;
// //             var newpath = 'E:/Code/Node/Node_project/uploadedFile/' + oldpath.name;
// //             // fs.rename(oldpath, newpath, function(err) {
// //             //     if (err) throw err;
// //             //     res.write("File uploaded and Moved");
// //             //     res.end();
// //             // });
// //             fs.rename(oldpath, newpath, function (err) {
// //                 if (err) throw err;
// //                 res.write('File uploaded and moved!');
// //                 res.end();
// //               });
        
// //             res.write("File Uploaded");
// //             res.end();
// //         });
// //     } else {
// //         res.writeHead(200, {'Content-Type': 'text/html'});
// //         res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
// //         res.write('<input type="file" name="filetoupload"><br/>');
// //         res.write('<input type="submit">');
// //         res.write('</form>');
// //         return res.end();
// //     }
//     // var q = url.parse(req.url, true);
//     // var filename = "." +q.pathname;
//     // fs.readFile(filename, function(err, data) {
//     //     if(err) {
//     //         res.writeHead(404, {'Content-Type': 'text/html'});
//     //         return res.end(uc("404 Not Found"));
//     //     }
//     //     res.writeHead(200, {'Content-Type': 'text/html'});
//     //     res.write(uc(data));
//     //     return res.end();
//     // });
//     // fs.readFile('test.html', function(err, data) {
//     //     res.writeHead(200, {'Content-Type': 'text/html'});
//     //     res.write(data);
//     //     res.end();
//     // });
//     // fs.appendFile('newFile1.txt', 'This is test file created by append function', function(err, data){
//     //     if (err) throw err;
//     //     console.log('Saved with APPEND');
//     // });
//     // // fs.open('newFile2.txt', 'w', function(err, file) {
//     // //     if (err) throw err;
//     // //     console.log('Saved with OPEN');
//     // // });
//     // fs.writeFile('newFile2.txt', 'Hello Content', function(err) {
//     //     if(err) throw err;
//     //     console.log('Saved with WriteFile');
//     // });
//     // fs.rename('newFile2.txt', 'reNameFile.txt', function(err) {
//     //     if(err) throw err;
//     //     console.log('File Renamed');
//     // });
//     // fs.unlink('newFile2.txt', function(err) {
//     //     if(err) throw err;
//     //     console.log('File Deleted!')
//     // });
//     // res.writeHead(200, {'Content-Type': 'text/html'});
//     // res.write("Hello Node Js and current time is:" +dt.myDateTime() );
//     // // res.write(req.url);
//     // var q = url.parse(req.url, true).query;
//     // var txt = q.year + " " + q.month+ " " + q.day;
//     // res.end(txt);
// // }).listen(8080);

// // var http = require('http');
// // var formidable = require('formidable');
// // var fs = require('fs');

// // http.createServer(function (req, res) {
// //   if (req.url == '/fileupload') {
// //     var form = new formidable.IncomingForm();
// //     form.parse(req, function (err, fields, files) {
// //       var oldpath = files.filetoupload.path;
// //       var newpath = 'E:/Code/Node/Node_project/uploadedFile/' + files.filetoupload.name;
// //       fs.rename(oldpath, newpath, function (err) {
// //         if (err) throw err;
// //         res.write('File uploaded and moved!');
// //         res.end();
// //       });
// //  });
// //   } else {
// //     res.writeHead(200, {'Content-Type': 'text/html'});
// //     res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
// //     res.write('<input type="file" name="filetoupload"><br>');
// //     res.write('<input type="submit">');
// //     res.write('</form>');
// //     return res.end();
// //   }
// // }).listen(8080);

// // var nodemailer = require ('nodemailer');

// // var transporter = nodemailer.createTransport({
// //     service: 'Gmail',
// //     host: 'smtp.gmail.com',
// //     // port: 587,
// //     secure: true,
// //     auth: {
// //         user: 'rocking.akram@gmail.com',
// //         pass: 'swistonrjavasetup1'
// //     }
// // });

// // var mailOptions = {
// //     from: 'rocking.akram@gmail.com',
// //     to: 'aakram1708@gmail.com',
// //     subject: 'Test email from NODE SERVER',
// //     // text: 'This is test email with a text'
// //     html: '<h1>Welcome</h1><p>That was easy!</p>'

// // };

// // transporter.sendMail(mailOptions, function(error, info) {
// //     if (error) {
// //         console.log(error);
// //     } else {
// //         console.log('Email sent: ' +info.response);
// //     }
// // });

// //=================== NODE WITH SQL =================
// // var mysql = require('mysql');

// // var con = mysql.createConnection({
// //   host: "127.0.0.1",
// //   user: "root",
// //   password: "",
// //   database: "mydb"
// // });

// // con.connect(function(err) {
// //   if (err) throw err;
// //   console.log("Connected!");
//   // var sql = "CREATE TABLE products (id INT AUTO_INCREMENT PRIMARY KEY, product_name VARCHAR(255), vendor_name VARCHAR(255))";
//   // var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
//   // var sql = "INSERT INTO customers (name, address) VALUES ('Jenny', '41 New Mexico')"
//   // var sql = "INSERT INTO products (product_name, vendor_name) VALUES ? ";
//   // var values = [
//   //   ['Car', 'Maruti'],
//   //   ['Bike', 'TVS'],
//   //   ['TV', 'Samsung'],
//   //   ['Laptop', 'Apple'],
//   //   ['Washing Machine', 'Samsung'],
//   //   ['Mobile Phone', 'Apple']
//   //   ['Betty', 'Green Grass 1'],
//   //   ['Richard', 'Sky st 331'],
//   //   ['Susan', 'One way 98'],
//   //   ['Vicky', 'Yellow Garden 2'],
//   //   ['Ben', 'Park Lane 38'],
//   //   ['William', 'Central st 954'],
//   //   ['Chuck', 'Main Road 989'],
//   //   ['Viola', 'Sideway 1633']
//   // ];
//   // var sql = "SELECT * FROM customers WHERE address = 'Park Lane 38'";
//   // var sql = "SELECT * FROM customers WHERE address LIKE 'O%'";
//   // var adr = 'Mountain 21';
//   // var sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape(adr);
//   // var sql = 'SELECT * FROM customers WHERE address = ?'
//   // var sql = "SELECT * FROM customers ORDER BY name DESC"
//   // var sql = 'DELETE FROM customers WHERE address = ' + mysql.escape(adr);
//   // var sql = "DROP TABLE IF EXISTS customers_one"
//   // var sql = "UPDATE customers SET address = 'Purana Quila 12' WHERE address = 'Old fort 23'";
//   // var sql = "SELECT * FROM customers LIMIT 2, 5"
//   // var sql = "SELECT  customers.name AS customer, products.product_name AS product FROM customers INNER JOIN products ON customers.id = products.id";
//   // con.query("CREATE DATABASE mydb1", function(err, result) {
//   // con.query(sql, function(err, result, fields) {
//     // if (err) throw err;
//     // console.log("Number of rows instered:" + result.affectedRows);
//     // console.log(result);
//     // console.log("Created")
//     // console.log(fields[0].name);
// //   });
// // });


// //==============NODE WITH MONGODB=============

// var mongo = require('mongodb');
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url , function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
  // dbo.createCollection("products", function(err, result) {
  // var myobj = {name: "Apple Inc", address: "New York"};
  // var myobj = [
  //   { _id: '1',product_id: '101', status: '1' },
  //   { _id: '2',product_id: '102', status: '1' },
  //   { _id: '3',product_id: '103', status: '0' },
  //   { _id: '4',product_id: '104', status: '1' },
  //   { _id: '5',product_id: '105', status: '0' }
  //   { _id: '101', product_name: 'Car'},
  //   { _id: '102', product_name: 'Bike' },
  //   { _id: '103', product_name: 'TV' },
  //   { _id: '104', product_name: 'Cycle' },
  //   { _id: '105', product_name: 'Laptop' },
  //   { _id: '106', product_name: 'Computer' },
  //   { _id: '107', product_name: 'keyboard' },
  //   { _id: '108', product_name: 'Mouse' },
  //   { _id: '109', product_name: 'Wire' },
  //   { _id: '110', product_name: 'Scooty' }
  // ]
  // dbo.collection("products").insertMany(myobj, function(err, res) {
  // dbo.collection("customers").find({}).toArray(function(err, result) {
  // dbo.collection("customers").find({},{ projection: {_id:0, name:1, address:1}}).toArray(function(err, result) {
  // dbo.collection("customers").find({},{ projection: { _id:0, name:1 }}).toArray(function(err, result) {
  // var query = { address : 'Europe'}
  // var query = { address: /^E/};
  // dbo.collection("customers").find(query).toArray(function (err, result) {
  // var mysort = { name: 1 };
  // dbo.collection("customer").find().sort(mysort).toArray(function (err, result) {
  // dbo.collection("customer").deleteOne(query, function (err, result) {
  // dbo.collection("testcollection").drop(function(err, res) {
  // var newValues = { $set: {name: "Seven"} };
  // dbo.collection("customers").updateOne(query, newValues, function(err, result){
  // dbo.collection("customers").find().limit(10).toArray(function (err, result) {
  // dbo.collection('orders').aggregate([
  //   { $lookup: 
  //     {
  //       from: 'products',
  //       localField: 'product_id',
  //       foreignField: '_id',
  //       as: 'orderdetails'
  //     }
  //   }
  // ]).toArray(function(err, result) {
  //   if (err) throw err;
    // console.log("Number of record inserted:" +res.insertedCount);
    // console.log(result);
    // console.log("1 Record deleted"); 
    // console.log(JSON.stringify(result));
    // if(res) console.log("Collection deleted");
  // console.log(result.result.nModified + " document(s) updated ");
  //   db.close();
  // });
  // console.log("Database Created!");
  // db.close();
// });

// Registration form to add users in MongoDB

// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write('<h1>Registration form</h1>');
//   res.write('<form action="submitUser" method="post" enctype="multipart/form-data">');
  
//   res.write('<input type="text" placeholder="Enter Name" id="userName"><br><br>');
//   res.write('<input type="password" placeholder="Enter Password" id="password"><br><br>');
//   res.write('<input type="submit" onclick="chaneSubmit()">');
//   res.write('</form>');
//   res.end();
//   if (req.url == '/submitUser') {
//     var q=document.getElementById("userName").value
//     console.log(q);
//   } else {
//     console.log("Submit not work");
//   }
// }).listen(8080);

var express=require("express");
var bodyParser=require("body-parser"); 
var app = express();
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
const multer = require("multer");
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.set('port', (process.env.PORT || 5000));  
  
// app.use(bodyParser.json()); 
// app.use(express.static('public')); 
// app.use(bodyParser.urlencoded({ 
//     extended: true
// }));
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


// mongoose.connect('mongodb://localhost:27017/testdb');
// mongoose.connect('mongodb://localhost:27017/apidb');
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Database Connected");
}).catch(err => {
    console.log("Database connection fails, Exiting Now.....", err);
    process.exit();
})
var db=mongoose.connection; 
// db.on('error', console.log.bind(console, "connection error")); 
// db.once('open', function(callback){
//     console.log("Connected"); 
// })

// var users = new Schema ({
//   name:
// });





//Cloudnary setup

cloudinary.config({
    cloud_name: 'cloudakram',
    api_key: '489699538844727',
    api_secret: '2MUsLSPAomNM01yRHa8cNMGlrc0'
    });
    const storage = cloudinaryStorage({
    cloudinary: cloudinary,
    folder: "demo",
    allowedFormats: ["jpg", "png"],
    transformation: [{ width: 500, height: 500, crop: "limit" }]
    });
    const parser = multer({ storage: storage });
  
app.post('/sign_up', function(req,res){
    var name = req.body.name; 
    var email =req.body.email; 
    var password = req.body.password; 
  
    var data = { 
        "name": name, 
        "email":email, 
        "password":password
    } 
db.collection('users').insertOne(data,function(err, collection){ 
        if (err) throw err; 
        console.log("Record inserted Successfully"); 
              
    });
    var test = 'fsdf';
    res.render(__dirname + "/public/user_page.html", {test:test});
    return res.redirect('user_page.html'); 
});

app.post('/login', function(req, res) {
    var name = req.body.name; 
    var email =req.body.email; 
    var password = req.body.password; 

    var data = { 
        "name": name, 
        "email":email, 
        "password":password
    }
db.collection('users').findOne({name: name, password: password}, function(err, result) {
    if(err) {
        console.log(err);
    }
    else if(result){
       console.log('Login Success');
       return res.redirect('user_profile.html');
    }
    else {
        console.log('Invalid');
        return res.redirect('/');
    }
  })
});

app.post('/create_post', function(req,res){
    var title = req.body.title; 
    var post =req.body.post; 
    // var password = req.body.password; 
  
    var data = { 
        "name": title, 
        "post": post
    } 
db.collection('posts').insertOne(data,function(err, result){
        if (err) throw err; 
        console.log("Post inserted Successfully"); 
              
    });
    return res.redirect('home.html'); 
});

app.get('/view', function(req, res){
//     var title = req.query["title"]; 
//     var post =req.query["post"];
// db.collection('posts').find({}).toArray(function(err, result) { 
//          console.log(result);
//     });
    // console.log('test for get');
    // res.json({"message": "Hi from get"});
});

app.post('/api/images', parser.single("image"), (req, res) => {
    console.log(req.file) // to see what is returned to you
    const image = {};
    image.url = req.file.url;
    image.id = req.file.public_id;
    Image.create(image) // save image information in database
      .then(newImage => res.json(newImage))
      .catch(err => console.log(err));
  });
  
// app.get('/',function(req,res){
// res.set({
//     'Access-control-Allow-Origin': '*'
//     }); 
// return res.redirect('/'); 
// }).listen(8080) 

app.get('/', function(req, res) {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
    // console.log("Hello");
});

// Require Notes routes
// require('./app/routes/note.routes.js')(app);
require('./routes/note.routes.js')(app);
app.listen(8080, () => {
    console.log("Server is listening on port 8080");
});
  

