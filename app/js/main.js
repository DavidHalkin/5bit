// custom select///
$(function() {
  jcf.replaceAll();
});
$(document).ready(function() {


});

// for ie object-fit
var userAgent, ieReg, ie;
userAgent = window.navigator.userAgent;
ieReg = /msie|Trident.*rv[ :]*11\./gi;
ie = ieReg.test(userAgent);

// if(ie) {
//   $(".article_fix_ie_js").each(function () {
//     var $container = $(this),
//         imgUrl = $container.find("img").wrap("<div class='ie-holder'></div>").prop("src");
//     if (imgUrl) {
//       $container.find(".ie-holder").css("background", 'url(' + imgUrl + ')').addClass("custom-object-fit");
//     }
//   });
// }


if(ie) {
  $(".article_fix_ie_js").each(function () {
    var $container = $(this),hld = $container.wrap("<div class='ie_article_holder'></div>");
  });
}