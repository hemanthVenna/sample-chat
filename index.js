var app = require('express')();
var cors = require('cors')
var http = require('http').Server(app);

app.use(function(request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// var io = require('socket.io')(http,{
//   path: '/getData',
//   serveClient: false,
//   // below are engine.IO options
//   pingInterval: 10000,
//   pingTimeout: 5000,
//   cookie: false
// });

var io = require('socket.io')(http);
// io.path('/getData')
var port = process.env.PORT || 5000;

// app.get('/getData', function(req,res){
//   console.log("get data response");
//   res.send('you are in getDAta');
// })


// app.get('/getData', function(req,res){
//   io.on('connection', function(socket){
//   socket.on('chat message', function(msg){
//     io.emit('chat message', msg);
//   });
// });
// });
app.get('/', function(req, res){
  console.log('hello world');
  res.send("success")
  // res.sendFile(__dirname + '/views/index.html');
});

// io.on('connection', function(socket){
//   socket.on('chat message', function(msg){
//     io.emit('chat message', msg);
//   });
// });

http.listen(port, function(){
  console.log('listening on *:' + port);
});
