var enter_list_row = document.querySelector('.item');
enter_list_row.addEventListener('mousemove', touch, false);

function touch (){    
  $(this).css("background-color" , "#6fa5f6");
  $(this).css("box-shadow" , "10px 10px 5px rgba(0,0,0,0.8)");
}

var leave_list_row = document.querySelector('.item');
leave_list_row.addEventListener('mouseleave', leave, false);


  function leave(){
    $(this).css("background-color" , "#f8f8f8");
    $(this).css("box-shadow" , "none");
  }


$('.slideshow').each(function(){
    
    let slideImgs = $(this).find('img'),
        slideImgsCount = slideImgs.length,
        currentIndex = 0;
    
    slideImgs.eq(currentIndex).fadeIn();
    
    setInterval(showNextSlide, 5000);
    
    function showNextSlide(){
        let nextIndex = (currentIndex + 1) % slideImgsCount;
        console.log(nextIndex)
        slideImgs.eq(currentIndex).fadeOut();
        slideImgs.eq(nextIndex).fadeIn();
        currentIndex = nextIndex;
    }
})