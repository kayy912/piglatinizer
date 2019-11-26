$( "document" ).ready(function() { //this helps your jQuery to work. Write all of your JS code in this function.

function isVowel(x) {
         return ("aeiouAEIOU".indexOf(x) !== -1);
}
function piglatinize(oneword) {
     let first = oneword.charAt(0);
    if(isVowel(first)){
        oneword = oneword + "ay" + " ";
     }
     else{
         let first = oneword.charAt(0);
         let rest = oneword.slice(1);
        oneword = rest + first + "ay" + " ";
     }
    return oneword;
}

$("#button").click(function(){
    let input = $(".input").val();

 let words = input.split(" ");
 console.log(words);
  $(".output").text("");
 words.forEach(function(word){
     $(".output").append(piglatinize(word));
 });

});






});









