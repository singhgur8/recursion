// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:


//converts

var stringifyJSON = function(obj) {
var str = "";


if (typeof obj === 'number' || obj === null || obj === true || obj === false){
  str += obj
}
else if (typeof obj === 'string' ){
  str += '"' + obj + '"'
}
else if ( Array.isArray(obj)){ // means its an array
  str += '['

  if (obj.length === 0){

  }
  else{
    for (var i =0; i<obj.length; i++){

      str += stringifyJSON(obj[i]) + ","
    }
    str = str.slice(0,str.length-1);
  }
  str += ']'
}
else if(typeof obj === 'function' || obj === undefined){
  return "{}"
}
else{
  var str = "{"
  if (Object.keys(obj).length === 0){

  }
  else {
    for(var i=0; i <Object.keys(obj).length;i++){
      if(typeof Object.keys(obj)[i] === 'function' || Object.values(obj)[i] === undefined){
        return "{}"
      }

      var str1 = '"'+ (stringifyJSON(Object.keys(obj)[i])) + '"'
      //need to check if it is double quoted... then slice from 1 to second to last
        if (str1[0] === '"') {
          str1 = str1.slice(1,str1.length-1)
        }

      var str2 = ':'
      var str3 = '"' + (stringifyJSON(Object.values(obj)[i])) + '"'
      if (str3[0] === '"') {
        str3 = str3.slice(1,str3.length-1)
      }

      var str4 =  ','

      str += str1 + str2 + str3 + str4
    } // basically if the thing returning already has its own " " around it then these are not needed, i could slice
    str = str.slice(0,str.length-1);
  }

  str+= "}"
}




return str;

};
