var main = function() {
  "use strict";
  $(".comment-input button").on("click", function (event) {
      var $new_comment;
      
  if ($(".comment-input input").val() !== "" ){
  var comment_text = $(".comment-input input").val();

        $new_comment=$("<p>").text(comment_text);
     $(".comments").append($new_comment);
     $(".comment-input input").val("");
     $(".comment-input input).on("keypress", function (event) {
         
}
   });
 };

$(document).ready(main);
  
