var app = require('express')();
// var cors = require('cors')
var http = require('http').Server(app);

app.use(function (req, res, next) {
    var allowedOrigins = ['https://calm-meadow-51226.herokuapp.com/'];
    var origin = req.headers.origin;
    if (allowedOrigins.indexOf(origin) > -1) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});
var io = require('socket.io')(http,{
  path: '/getData',
  serveClient: false,
  // below are engine.IO options
  pingInterval: 10000,
  pingTimeout: 5000,
  cookie: false
});

// var io = require('socket.io')(http);
var port = process.env.PORT || 8000;


// app.get('/getData', function(req,res){
//   io.on('connection', function(socket){
//   socket.on('chat message', function(msg){
//     io.emit('chat message', msg);
//   });
// });
// });
app.get('/', function(req, res){
  console.log('req. comes')
  res.sendFile(__dirname + '/views/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
