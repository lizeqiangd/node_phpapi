var http= require('http');
var querystring=require('querystring');
var events= require('events');
var emitter=new events.EventEmitter();
/**
 * This is a simple php api caller base on event dispatch model.
 * var phpapi=require('PhpApi');
 * phpapi.on('data',function (data){console.log(data);})
 * phpapi.on('error',function(e){console.log(e);})
 * phpapi.setApiPath('/zweitehorizont/api/system/system_info.php');
 * phpapi.setHost('google.com');
 * phpapi.callApi({msg:'test object'});
 * 
 * @author:Lizeqiangd 
 * @create:2015.03.04
 */
var req 
var postData = {};
var options = {
  hostname: 'bilibili.moe',
  port: 80,
  path: '/',
  method: 'POST'
};

function callPHP(){
  options.headers={
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': querystring.stringify(postData).length
  }
  var req = http.request(options, function(res) {
    res.setEncoding('utf8');
    res.on('data', function (chunk) { 
      emitter.emit('data',chunk);
    });
  });
  req.on('error',function(e){emitter.emit('error',e)});
  req.write(querystring.stringify(postData));
  req.end();
}
exports.setHost=function(hostname){
  options.hostname=hostname;
}
exports.setApiPath = function (path) {
  options.path=path;
}
exports.callApi=function (obj){
  postData=obj;
  callPHP();
}
exports.on=function (event_name,event_handle){
  emitter.on(event_name,event_handle);
}