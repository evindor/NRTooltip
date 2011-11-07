(function() {
  var $, NRTooltip;
  $ = jQuery;
  $.fn.extend({
    NRTooltip: function(options) {
      var settings;
      settings = {
        delay: false,
        elements: false
      };
      settings = $.extend(settings, options);
      return this.each(function() {
        return new NRTooltip(this, settings);
      });
    }
  });
  NRTooltip = (function() {
    function NRTooltip(element, settings) {
      var hideTip, showTip;
      this.element = element;
      this.settings = settings;
      if ($('.NRTooltip').length === 0) {
        $('body').append('<div class="NRTooltip"><span></span><div class="NRTooltip_tip"></div></div>');
      }
      if (this.settings.elements) {
        this.elements = this.settings.elements;
        $(this.element).delegate(this.elements, "mouseover", function(e) {
          return showTip(e);
        });
        $(this.element).delegate(this.elements, "mouseout", function(e) {
          return hideTip(e);
        });
      } else {
        $(this.element).mouseover(function(e) {
          return showTip(e);
        });
        $(this.element).mouseout(function(e) {
          return hideTip(e);
        });
      }
      showTip = function(e) {
        var elem, position;
        elem = $(e.target);
        position = elem.offset();
        $('.NRTooltip span').html($(elem).data('tooltip'));
        $('.NRTooltip').addClass('visible');
        position.top -= $('.NRTooltip').outerHeight() + 6;
        position.left += elem.outerWidth() / 2 - $('.NRTooltip').outerWidth() / 2;
        return $('.NRTooltip').offset(position);
      };
      hideTip = function(e) {
        return $('.NRTooltip').removeClass('visible');
      };
    }
    return NRTooltip;
  })();
}).call(this);
