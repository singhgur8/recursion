// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(targetClass) {

  function matches(item){
      return item === targetClass
  } // used in the iterations to check if there is a match in the array

var result = [];
  var all = document.all;
  for (var i =0; i<all.length; i++){
    var someClass = all[i].className.slice().split(" "); //seperates the classes, if there are multiple
    //and makes an array out of it so iterate through that

    var exists = _.some(someClass,matches); //check to see if target exists in the classes for this func


    if(exists){
      result.push(all[i]);
    }
  }

return result
};
