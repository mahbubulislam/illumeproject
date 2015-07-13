$(document).ready(function(){
    
    $('a.carousel-left').on('click',function(event){
       
    event.preventDefault();
    $('#imageCarousel').carousel('prev');
    });
    
    
       $('a.carousel-right').on('click',function(event){
       
    event.preventDefault();
    $('#imageCarousel').carousel('next');
    });
    
       
    });

