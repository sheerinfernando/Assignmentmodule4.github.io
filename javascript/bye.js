(function (window)
{
    var bye={}
    bye.speak=function (name) {
      var speakWord = "Good Bye";
    console.log(speakWord + " " + name);
  }
window.bye=bye
})(window);