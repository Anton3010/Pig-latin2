$(document).ready(function() {
 $("#form1").submit(function(event){
   event.preventDefault();
   var words = $("#sentence").val().split(" ");
   var results = [];
   words.forEach(function(word){
     var pigLatinWord = pigLatin(word)
     results.push(pigLatinWord)
   });
   $(".result").text(results.join(" "));
 });


});

var pigLatin = function(word){
  var isNumber = isNaN(parseInt(word));
  if (isNumber === false) {
    return word
  } else if(word[0] === "a" || word[0] === "e" || word[0] === "i" || word[0] === "o" || word[0] === "u" || word[0] === "A" | word[0] === "E" | word[0] === "I" | word[0] === "O" | word[0] === "U") {
    return word + "way"
  } else {
    var count = 0;
    for(var index = 1; index < word.length; index++){
      if (word[index] === "u" && word[index-1] === "q"){
        count = index+1;
        break;
      }
      else if (word[index] === "a" || word[index] === "e" || word[index] === "i" || word[index] === "o" || word[index] === "u" || word[index] === "A" | word[index] === "E" | word[index] === "I" | word[index] === "O" | word[index] === "U" || word[index] === "y") {
        count = index;
        break;
      }
    }
    return word.slice(count, count.length) + word.slice(0, count) + "ay"
  }


  //return(word)

}
