

const s = '12px';
const k = "16px";
const O = "4.17px"

$('*').hover((e) => {
    var classN = $(e.target).attr("class").split(' ').slice(0, 1);
    $('path.' + classN).css('stroke-width', s);
    $('rect.' + classN).css('stroke-width', k);
    $("rect, path, text").css('opacity', 0.2);
    $("." + classN, ).css('opacity', 1);
}, (e) => {
    var classN = $(e.target).attr("class").split(' ').slice(0, 1);
    $('path.' + classN).css('stroke-width', O);
    $('rect.' + classN).css('stroke-width', O);
    $("rect, path, text").css('opacity', 1);
});


// $('*').hover((e) => {
//     var classN = $(e.target).attr("class").split(' ').slice(0, 1);
//     $('.' + classN).css('stroke-width', $('.' + classN).css('stroke-width') + s);
//     $('rect.' + classN).css('stroke-width', $('rect.' + classN).css('stroke-width') + k);
// }, (e) => {
//     var classN = $(e.target).attr("class").split(' ').slice(0, 1);
//     $('.' + classN).css('stroke-width', $('.' + classN).css('stroke-width') - s);
//     $('rect.' + classN).css('stroke-width', parseInt($('rect.' + classN).css('stroke-width')) - k + "px");
// });