function LoadIncludeFile() {
    let _includeElAttr, _includeElContent;
    let _xmlhttp = new XMLHttpRequest();//서버와 상호 작용하는 객체 

    while (document.querySelector("include") != null) {
        let _includeEl = document.querySelector("include");//include 태그 모두 변수에 가져오기
        _includeElAttr = _includeEl.getAttribute("data-href");//i번째 include 태그의 data-href 속성값 변수에 담기

        _xmlhttp.open("GET", _includeElAttr, false);//파일 가져오기
        _xmlhttp.send();//보내기(null)
        _includeElContent = _xmlhttp.responseText;//가져온 파일 변수에 담기

		_includeEl.outerHTML = _includeElContent;//body 태그 변경
    }
}

$(function(){
	LoadIncludeFile();
	if($(".include").length > 0 && $("body").hasClass("main")){
		$(".include a").each(function(){
			$(this).attr("href",$(this).attr("href").replace("../../","./"));
		});
	}

	$('.depth02').hide();
	$('.depth01>li').mouseenter(function () {
		$('.depth02').slideUp();
		$(this).children('.depth02').slideDown();
	});
	$('.depth02').mouseleave(function () {
		$('.depth02').slideUp();
	});

	if($(".bxslider").length > 0){
		$('.bxslider.auto-bx').bxSlider({
			controls: false
			, auto: true
			, pause: 2500
		});
		$('.bxslider.loop').bxSlider({
			minSlides: 3
			, maxSlides: 3
			, slideWidth: 170
			, slideMargin: 10
			, speed: 5000
			, pause: 1000
			, auto: true
			, autoControls: true
			, controls: false
		});
	}

	if($('.calligraphy').length > 0){
		$('.calligraphy').animate({
			top: 0,
			opacity: 1
		},2000);
	}

	if ($(".course").length > 0) {
		$('.course_img div').mouseenter(function(){
			var li = $(this).index();
			$('.course_li li').eq(li).addClass('on');
			$(this).children('img:last-child').animate({
				opacity: 1
			});
		});
		$('.course_img div').mouseleave(function(){
			var li = $(this).index();
			$('.course_li li').eq(li).removeClass('on');
			$(this).children('img:last-child').animate({
				opacity: 0
			});
		});

		$('.course_li li').mouseenter(function(){
			var li = $(this).index();
			$('.course_img div').eq(li).children('img:last-child').animate({
				opacity: 1
			});
			$(this).addClass('on');
		});
		$('.course_li li').mouseleave(function(){
			var li = $(this).index();
			$('.course_img div').eq(li).children('img:last-child').animate({
				opacity: 0
			});
			$(this).removeClass('on');
		});
	}
});