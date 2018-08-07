$(function() {

 var rotator = $('#rotator');
 var container = $(document);
 var viewport = $(window);

 var images = 30;
 var imageHeight = 32400 / images;
 var scrollHeight = container.height() - viewport.height() + imageHeight;
 var step = images / scrollHeight;

 viewport.scroll(function(event) {

   var x = -Math.floor(step * viewport.scrollTop()) * imageHeight;
   rotator.css('background-position', x + 'px 0');

 });

});
