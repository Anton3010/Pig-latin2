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
  if (/\d/.test(word)){
    return(word);
  } else if (/^[aeiou]/.test(word)){
    return(word + "way")
  } else if  (/^[^aeioqu]{0,}qu/.test(word)) {
    var match = /^[^aeioqu]{0,}qu/.exec(word)[0];
    return(word.slice(match.length) + match + "ay")
  } else if ( /^[^aeiouy]{1,}/.test(word)){
    var match = /^[^aeiouy]{1,}/.exec(word)[0];
    console.log(match);
    return(word.slice(match.length) + match + "ay")
  } else if (/^y/.test(word)) {
    return(word.slice(1,) + 'y' + "ay")
  }
}
