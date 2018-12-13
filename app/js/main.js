
$(document).ready(function(){
    $(".mob_btn_js").click(function(){
        $(".header_sidebar").toggleClass("active");
    });
    $('.home_slider').owlCarousel({
        margin:0,
        nav:true,
        items:1
    });
    // owl double 

  var sync1 = $("#sync1");
  var sync2 = $("#sync2");
  var slidesPerPage = 4; //globaly define number of elements per page
  var syncedSecondary = true;

  sync1.owlCarousel({
    items : 1,
    slideSpeed : 2000,
    nav: true,
    autoplay: true,
    dots: false,
    loop: false,
    responsiveRefreshRate : 200,
    navText: ['<i class="icon ico28"></i>','<i class="icon ico29"></i>'],
  }).on('changed.owl.carousel', syncPosition);

  sync2
    .on('initialized.owl.carousel', function () {
      sync2.find(".owl-item").eq(0).addClass("current");
    })
    .owlCarousel({
    // items : 5,
    dots: false,
    margin: 17,
    nav: false,
    smartSpeed: 200,
    slideSpeed : 500,
    slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
    responsiveRefreshRate : 100,
    responsiveClass:true,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:4
        },
        1000:{
            items:5
        }
    }
  }).on('changed.owl.carousel', syncPosition2);

  function syncPosition(el) {
    //if you set loop to false, you have to restore this next line
    var current = el.item.index;
    
    //if you disable loop you have to comment this block
    // var count = el.item.count-1;
    // var current = Math.round(el.item.index - (el.item.count/2) - .5);
    
    // if(current < 0) {
    //   current = count;
    // }
    // if(current > count) {
    //   current = 0;
    // }
    
    //end block

    sync2
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = sync2.find('.owl-item.active').length - 1;
    var start = sync2.find('.owl-item.active').first().index();
    var end = sync2.find('.owl-item.active').last().index();
    
    if (current > end) {
      sync2.data('owl.carousel').to(current, 100, true);
    }
    if (current < start) {
      sync2.data('owl.carousel').to(current - onscreen, 100, true);
    }
  }
  
  function syncPosition2(el) {
    if(syncedSecondary) {
      var number = el.item.index;
      sync1.data('owl.carousel').to(number, 100, true);
    }
  }
  
  sync2.on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).index();
    sync1.data('owl.carousel').to(number, 300, true);
  });




});
// for ie object-fit
var userAgent, ieReg, ie;
userAgent = window.navigator.userAgent;
ieReg = /msie|Trident.*rv[ :]*11\./gi;
ie = ieReg.test(userAgent);

if(ie) {
  $(".item_cover").each(function () {
    var $container = $(this),
        imgUrl = $container.find("img").wrap("<div class='ie_holder'></div>").prop("src");
    if (imgUrl) {
      $container.find(".ie_holder").css("background", 'url(' + imgUrl + ')').addClass("custom_object_fit");
    }
  });
}

$(document).ready(function() {


});