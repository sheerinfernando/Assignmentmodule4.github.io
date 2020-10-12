(function (window){
    var hello={}

hello.speak=function(name) {
  var speakWord = "Hello";
    console.log(speakWord + " " + name);
  }
window.hello=hello
})(window);