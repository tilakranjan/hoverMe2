$(document).ready(function(){

    //for animate css
    $.fn.extend({
        animateCss: function (animationName) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            this.addClass('animated ' + animationName).one(animationEnd, function() {
                $(this).removeClass('animated ' + animationName);
            });
        }
    });

    $(".hover_me").unbind();
    $(".hover_me").hover(function(){
        $('.hover_more').animateCss('rubberBand');
    });

    $(".more_likes").unbind();
    $(".more_likes").hover(function(){
        $(this).children().animateCss('bounce');
    });

    $('.more_likes').click(function(){
        var imgLoc = 'assets/img/icon_';
        var ans_reaction = $(this).data('reaction');
        var ans_id = $(this).parent().parent().data("ans_id");
        var this_one = this;
        console.log('Answer Reaction: '+ans_reaction);

        imgLoc = imgLoc + ans_reaction + '.png';
        console.log('Img Loc: '+imgLoc);
        $(this_one).parent().parent().children('.current_like').attr('src', imgLoc);
    });
});