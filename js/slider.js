    var slideWidth = 300; 

    $('.slidewrapper').width($('.slidewrapper').children().length * slideWidth);

    $('#next_slide').click(nextSlide);
    $('#prev_slide').click(prevSlide);

function nextSlide(){
    var currentSlide=parseInt($('.slidewrapper').data('current'));
    currentSlide++;

    if(currentSlide>=$('.slidewrapper').children().length)
    {
        $('.slidewrapper').css('left',-(currentSlide-2)*slideWidth);  
        $('.slidewrapper').append($('.slidewrapper').children().first().clone()); 
        $('.slidewrapper').children().first().remove();
        currentSlide--;                        
    }

    $('.slidewrapper').animate({left: -currentSlide*slideWidth},300).data('current',currentSlide);
}
function prevSlide(){
    var currentSlide=parseInt($('.slidewrapper').data('current'));
    currentSlide--;
    if(currentSlide<0)
    {
        $('.slidewrapper').css('left',-(currentSlide+2)*slideWidth);  
        $('.slidewrapper').prepend($('.slidewrapper').children().last().clone()); 
        $('.slidewrapper').children().last().remove();
        currentSlide++;   
    }
    $('.slidewrapper').animate({left: -currentSlide*slideWidth},300).data('current',currentSlide);
}




			var link = document.querySelector(".header_user-block__login");
			var popup = document.querySelector(".popup_login");
			var overlay = document.querySelector(".popup_overlay");
			var close = document.querySelector(".popup_login__close");
			link.addEventListener("click", function(event) {
				event.preventDefault(".header_user-block__show");
				popup.classList.add("popup_login__show");
				overlay.classList.add("popup_overlay__show")
			});
			close.addEventListener("click", function() {
				popup.classList.remove("popup_login__show");
				overlay.classList.remove("popup_overlay__show");
			});
			overlay.addEventListener("click", function() {
				popup.classList.remove("popup_login__show");
				overlay.classList.remove("popup_overlay__show");
			})

