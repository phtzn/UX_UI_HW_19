console.log ("Your index.js file is loaded correcty!");

$(".sideimg").on('mouseenter mouseleave',function() {
    $(this).find('.cfhimage').fadeToggle(100);
});