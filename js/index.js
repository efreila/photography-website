$(document).ready(function(){
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
