$ = jQuery

$.fn.extend
  NRTooltip: (options) ->
    settings =
      delay: false
      elements: false
      
    settings = $.extend settings, options
    return @each () ->
      new NRTooltip this, settings

class NRTooltip
  constructor: (@element, @settings) ->
    if $('.NRTooltip').length == 0
      $('body').append('<div class="NRTooltip"><span></span><div class="NRTooltip_tip"></div></div>')
    if @settings.elements
      @elements = @settings.elements
      $(@element).delegate(@elements, "mouseover", (e) ->
        showTip(e)
      )
      $(@element).delegate(@elements, "mouseout", (e) ->
        hideTip(e)
      )
    else 
      $(@element).mouseover (e) -> 
        showTip(e)
      $(@element).mouseout (e) ->
        hideTip(e)
        
    showTip = (e) ->
      elem = $(e.target)
      position = elem.offset()
      data = $(elem).data('tooltip')
      if data
        $('.NRTooltip span').html(data)
        $('.NRTooltip').addClass('visible')

        position.top -= $('.NRTooltip').outerHeight() + 6
        position.left += elem.outerWidth()/2 - $('.NRTooltip').outerWidth()/2
        $('.NRTooltip').offset(position)
  
    hideTip = (e) ->
      $('.NRTooltip').removeClass('visible')