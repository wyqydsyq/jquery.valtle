jquery.valtle
=============

jQuery input/textarea sexifier

Valtle somewhat emulates the `placeholder` attribute for input elements. It takes the element's `title` value and uses that as a placeholder text. It does not detect `placeholder` support, so should be used _instead of_ the `placeholder` attribute, rather than as well as. The reason for this is for simplicity, speed and good browser support (supports IE 7.0!)


Useage
------------

1. Include `jquery.valtle.js` into your page by whatever method (`<script>` tag, Require.JS etc.) you prefer.
2. Call `$('#selector').valtle();` with a selector to match whatever elements you want it applied to.
3. The values of the `title` attribute on any elements that match the selector will be used as placeholder text.
