## Node PHP API
A simple module for node to connect php as api server.

# usage & demo code

    var phpapi=require('PhpApi');
    phpapi.on('data',function (data){console.log(data);})
    phpapi.on('error',function(e){console.log(e);})
    phpapi.setApiPath('/zweitehorizont/api/system/system_info.php');
    phpapi.setHost('google.com');
    phpapi.callApi({msg:'test object'});

# contact 
 email:i#acgs.me (replace # to at)
 