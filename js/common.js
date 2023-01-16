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
	
	$('.sub_btn_move').click(function(){
		var cl_name = "."+this.dataset.scroll;
		var boxOffset = $(cl_name).offset().top-150;
		
		$('html,body').animate({
			scrollTop:boxOffset
		})
	});
	
	if($(".bxslider").length > 0){
		$('.bxslider.auto-bx').bxSlider({
			controls: false
			, auto: true
			, pause: 2500
		});
		$('.bxslider.bx-vertical').bxSlider({
			auto: true,
			mode: 'vertical',
			pager: false,
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
});