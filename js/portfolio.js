$(document).ready(function(){


var $grid = $('.grid').packery({
  itemSelector: '.grid-item',
  gutter: 10,
  percentPosition: true
});
// layout Packery after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.packery();
});  

  var controller = new slidebars();
  controller.init();

  $('#menu-button').on('click', function (event){
  event.stopPropagation();
  event.preventDefault();
  controller.toggle("mobile-menu");
  });

    $(window).resize(function(){
        if(window.innerWidth > 950) 
        {
          controller.close();
        }
  });

});


