$( "document" ).ready(function() { //this helps your jQuery to work. Write all of your JS code in this function.

function isVowel(x) {
         return ("aeiouAEIOU".indexOf(x) !== -1);
}
$("#button").click(function(){
    let word = $(".input").val();
    let first = word.charAt(0);
    if(isVowel(first)){
        word = word + "ay";
     }
     else{

     }
 $(".output").text(word);
});






});
