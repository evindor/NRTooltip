(function() {
  var $, NRTooltip;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  $ = jQuery;
  $.fn.extend({
    NRTooltip: function(options) {
      var settings;
      settings = {
        correction: {
          top: 0,
          left: 0
        },
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
      showTip = __bind(function(e) {
        var data, elem, position;
        elem = $(e.target);
        position = elem.offset();
        data = $(elem).data('tooltip');
        if (data) {
          $('.NRTooltip span').html(data);
          $('.NRTooltip').addClass('visible');
          position.top -= $('.NRTooltip').outerHeight() + 6 - this.settings.correction.top;
          position.left += elem.outerWidth() / 2 - $('.NRTooltip').outerWidth() / 2 + this.settings.correction.left;
          return $('.NRTooltip').offset(position);
        }
      }, this);
      hideTip = function(e) {
        return $('.NRTooltip').removeClass('visible');
      };
    }
    return NRTooltip;
  })();
}).call(this);
