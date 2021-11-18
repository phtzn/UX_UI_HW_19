console.log ("Your index.js file is loaded correcty!");

$(".cfhimage").on('mouseenter mouseleave', function () {
    $(this).find('.cfhimage').fadeToggle(100);
});