$(document).ready(function () {


    $('.list-tabs ul li').click(function (e) { 
        e.preventDefault();
        $('.list-tabs ul li a').removeClass('active')
        $(this).find('a').addClass('active')
        var index = $(this).index()
        $('.tab-content .tab').hide()
       $('.tab-content .tab').eq(index).show()    
    });

});

