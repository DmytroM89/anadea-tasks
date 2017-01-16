$(document).ready(function () {
   $('.name, .avatar').click(function () {
       if($('.info').css('display') == 'none') {
           $('.info').show();
       } else {
           $('.info').hide();
       }
   });

    

});
