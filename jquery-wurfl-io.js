'use script';

(function($) {
  if("undefined"===typeof $)throw Error("Must load jQuery before jQuery-WURFL-io");
  var protocol="file:"===location.protocol?"http:":location.protocol,
  wurflSlug=function(){for(var b=[],a=0;a<arguments.length;a++)b.push(arguments[a]);return"wurfl-"+b.join("-").replace(/[_\s]+/g,"-").trim().toLowerCase()};
  $('html').addClass('wurfl-not-loaded');
  $.getScript(protocol + '//wurfl.io/wurfl.js')
    .done( function(script, textStatus){
      if(WURFL){
        $('html').addClass(wurflSlug(WURFL.complete_device_name));
        $('html').addClass(wurflSlug(WURFL.form_factor));
        $('html').addClass(wurflSlug('mobile',WURFL.is_mobile));
        $('html').removeClass('wurfl-not-loaded');
      }
    });
}(jQuery));
