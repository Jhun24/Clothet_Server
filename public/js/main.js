/**
 * Created by janghunlee on 2017. 9. 2..
 */
$(".logout").click(function(){
    "use strict";
   location.href = "/login";
});

$(".add-content").click(function () {
    $(".popup").css({"display":"block"})
});

$(".x").click(function () {
    $(".popup").css({"display":"none"})
});

$(".ok").click(function () {
    console.log($(".select-category-list").val());

});