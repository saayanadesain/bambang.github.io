// $(document).ready(function() {
//   $('#autoWidth').lightSlider({
//       autoWidth:true,
//       loop:true,
//       onSliderLoad: function() {
//           $('#autoWidth').removeClass('cS-hidden');
//       }
//   });
// });

$(document).ready(function() {
    var autoplaySlider = $('#autoplay').lightSlider({
        autoWidth:true,
        auto:true,
        loop:true,
        pauseOnHover: true,
        onBeforeSlide: function (el) {
            $('#current').text(el.getCurrentSlideCount());
        }
    });
    $('#total').text(autoplaySlider.getTotalSlideCount());
});

$(document).ready(function(){
  $(".content").slice(0, 12).show();
  $("#loadMore").on("click", function(e){
    e.preventDefault();
    $(".content:hidden").slice(0, 12).slideDown();
    if($(".content:hidden").length == 0) {
      $("#loadMore").text("No Content").addClass("noContent");
    }
  });

})
