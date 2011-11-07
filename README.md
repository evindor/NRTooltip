#NRTooltip

This is a tiny jQuery plugin for creating tooltips with html5 data attributes.

##Usage
    ...
    <script type="text/javascript" src="jquery.js"></script>
    ...
    <link rel="stylesheet" href="NRTooltip.css" type="text/css">
    <script type="text/javascript" charset="utf-8" src="NRTooltip.js"></script>
    <script type="text/javascript" charset="utf-8">
      $( function() {
  		  $('#demo').NRTooltip();
  		  $('#users').NRTooltip({elements: 'li'});
      });
    </script>
    ...
    <input type="password" id="demo" name="password" data-tooltip="Enter your password" />
    <ul id="users">
      <li data-tooltip="Can add posts">Admin</li>
      <li data-tooltip="Can view posts">Visitor</li>
    </ul>
    

You can use NRTooltip with one element or with a set of elements.