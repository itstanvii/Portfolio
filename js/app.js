$(document).ready(function(){

  function loader() {
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut() {
    setInterval(loader, 50);
}
window.onload = fadeOut;

  $(window).on('scroll',function(){
    var scroll = $(window).scrollTop();
    if(scroll>=50){
      $(".sticky").addClass("stickyadd")
    }else{
      $(".sticky").removeClass("stickyadd")
    }
  });
 

  //progress bars
  var waypoint = new Waypoint({
    element: document.getElementById('exp-id'),
    handler: function() {
      var p = document.querySelectorAll('.progress-bar');
      p[0].setAttribute("style","width:95%;transition:1s all");
      p[1].setAttribute("style","width:85%;transition:1.5s all");
      p[2].setAttribute("style","width:75%;transition:1.7s all");
      p[3].setAttribute("style","width:40%;transition:2s all");
      p[4].setAttribute("style","width:80%;transition:2.3s all");
      p[5].setAttribute("style","width:65%;transition:2.5s all");
      p[6].setAttribute("style","width:50%;transition:2.5s all");
    },
    offset:'90%'
  });

  

 
  


});