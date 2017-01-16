$(document).ready(function () {
   $('.name, .avatar').click(function () {
       if($('.info').css('display') == 'none') {
           $('.info').show();
       } else {
           $('.info').hide();
       }
   });

$(document).mouseup(function (e) {
    var blockInfo = $('.info');
    if (blockInfo.has(e.target).length === 0){
        blockInfo.hide();
    }
});
    

});
