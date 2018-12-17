// custom select///
$(function() {
  jcf.replaceAll();
});
$(document).ready(function() {
	$('.custom-file-input').on('change',function(){
	  $(this).next('.custom-file-label').addClass("selected").html($(this).val());
	})
});

// for ie home full-article height
var userAgent, ieReg, ie;
userAgent = window.navigator.userAgent;
ieReg = /msie|Trident.*rv[ :]*11\./gi;
ie = ieReg.test(userAgent);

if(ie) {
  $(".article_fix_ie_js").each(function () {
    var $container = $(this),hld = $container.wrap("<div class='ie_article_holder'></div>");
  });
}