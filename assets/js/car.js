$(document).ready(function (){
    var exImg = ['the3_grey', 'the3_darkblue', 'the3_red', 'the3_silver'];
    $('.car_color .exbtn li button').on('click', function (){
        var tgIdx = $(this).parent().index();
        console.log(tgIdx,exImg[tgIdx]);
        $('.excar img').attr({src: '../assets/images/car/' + exImg[tgIdx] + '.png'});

    });
});

$(document).ready(function (){
    var inImg = ['the7_inwhite', 'the7_inred', 'the7_indarkbrown', 'the7_inkaki'];
    $('.car_color .inbtn li button').on('click', function (){
        var tgIdx = $(this).parent().index();
        console.log(tgIdx,inImg[tgIdx]);
        $('.incar img').attr({src: '../assets/images/car/' + inImg[tgIdx] + '.jpg'});

    });
});
