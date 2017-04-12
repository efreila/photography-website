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

function validateForm() 
{
    var x, y, z, answer = true;

    x = document.getElementById("email_field").value;
    y = document.getElementById("subject_field").value;
    z = document.getElementById("message_field").value;


    if (x===null || x==="")
    {
      document.getElementById("email_fail").innerHTML = "Email is required.";
      document.getElementById("email_fail").style.display = "inline-block";
      document.getElementById("email_icon").className += "fa fa-times";
      document.getElementById("email_field").style.border = "1px solid red";
      answer = false;
    }

    else
    {
      document.getElementById("email_fail").innerHTML = "";
      document.getElementById("email_fail").style.display = "none";
      document.getElementById("email_icon").className = "";   
      document.getElementById("email_field").style.border = "1px solid #d9dce0"; 
    }

    if (y===null || y==="")
    {
      document.getElementById("subject_fail").innerHTML = "Subject is required.";
      document.getElementById("subject_fail").style.display = "inline-block";
      document.getElementById("subject_icon").className += "fa fa-times";
      document.getElementById("subject_field").style.border = "1px solid red";
      answer = false;
    }

    else
    {
      document.getElementById("subject_fail").innerHTML = "";
      document.getElementById("subject_fail").style.display = "none";
      document.getElementById("subject_icon").className = "";
      document.getElementById("subject_field").style.border = "1px solid #d9dce0"; 
    }

    if (z===null || z==="")
    {
      document.getElementById("message_fail").innerHTML = "Message is required.";
      document.getElementById("message_fail").style.display = "inline-block";
      document.getElementById("message_icon").className += "fa fa-times";
      document.getElementById("message_field").style.border = "1px solid red";
      answer = false;
    }

    else
    {
      document.getElementById("message_fail").innerHTML = "";
      document.getElementById("message_fail").style.display = "none";
      document.getElementById("message_icon").className = "";
      document.getElementById("message_field").style.border = "1px solid #d9dce0"; 
    }

    return answer;
}

