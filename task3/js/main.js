$(document).ready(function () {

    $('.toggle-info').on('click', function () {
       var blockInfo = $(this).parents('.message').children('.info');
       var style = $(blockInfo).css('display');
       console.log(style);

       if($(blockInfo).css('display') == 'none') {
           $(blockInfo).show();
       } else {
           $(blockInfo).hide();
       }
    });

    $(document).mouseup(function (e) {
        var blockInfo = $('.info');
        if (blockInfo.has(e.target).length === 0){
            blockInfo.hide();
        }
    });
    

});
