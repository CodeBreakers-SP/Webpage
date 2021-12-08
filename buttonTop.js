mybutton = document.getElementById("button-top");
mybutton.style.display = "none";
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var pixelValue = 500;
  if (document.body.scrollTop > pixelValue || document.documentElement.scrollTop > pixelValue) {
     mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top
function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
//End: Fucntions for Back to Top button *****/
$(document).ready(function(){
    //Create Back to Top Button and append to breadcrumb side bar
    $('<button/>',{
        text: 'Back to Top',
        id: 'button-top',
        on: {
            click: function(){
                topFunction();
            }
        }
    }).appendTo('footer');

});