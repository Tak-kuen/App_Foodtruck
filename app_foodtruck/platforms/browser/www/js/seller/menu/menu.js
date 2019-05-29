/**
 * 
 */

$(document).ready(function(){
	$(".menut").click(function(){
		var current = $(this).css("background-color");
		if(current == "rgb(128, 128, 128)") {
			$(this).css("background-color", "");
		} else {
			$(this).css("background-color", "gray");
		}
	});
	
	$("#addMenu").click(function(){
		var popupX = (window.screen.width / 2) - (430 / 2);
		var popupY = (window.screen.height / 2) - (600 / 2);
		
		window.open("addMenu", "addMenu", "width=430, height=460, left=" + popupX + "," + "top=" + popupY);
	});
	
	$("#delMenu").click(function(){
		$("#delMenu").toggle(); // 삭제 show
		
		$(".delChk").toggle(); // 체크박스 show
		$("#chkAllMenu").toggle(); // 전체선택 show
		$("#unchkAllMenu").toggle(); // 전체해제 show
		$("#goBack").toggle(); // 취소 show
		$("#delMenu2").toggle(); // 삭제2 show
		
		$("#addMenu").toggle(); // 메뉴등록  hide

		// show/hide 시, 전체선택과 전체해제 버튼의 padding을 다음과 같이 설정
		$("#chkAllMenu").css("padding", "6px 9px");
		$("#unchkAllMenu").css("padding", "6px 9px");
		$("#goBack").css("padding", "6px 9px");
		$("#delMenu2").css("padding", "6px 9px");
	});
	
	$("#delMenu2").click(function(){
		var checked = $('input:checkbox[name=delChk]:checked').length;
		
		if(checked == 0) {
			alert("선택된 메뉴가 없습니다.\n삭제할 메뉴를 선택해 주세요!");
		}
	});

	$("#chkAllMenu").click(function(){
		$(".delChk").prop("checked", true);
		$(".status").addClass("selected");
		$(".status").text("선택됨");
	});

	$("#unchkAllMenu").click(function unchkAllMenu(){
		$(".delChk").prop("checked", false);
		$(".status").removeClass("selected");
		$(".status").text("선택해제됨");
	});
	
	$("#goBack").click(function(){
		$(".delChk").prop("checked", false);
		$(".status").removeClass("selected");
		$(".status").text("선택해제됨");
		
		$("#delMenu").toggle(); // 삭제 show
		
		$(".delChk").toggle(); // 체크박스 hide
		$("#chkAllMenu").toggle(); // 전체선택 hide
		$("#unchkAllMenu").toggle(); // 전체해제 hide
		$("#goBack").toggle(); // 취소 hide
		$("#delMenu2").toggle(); // 삭제2 hide
		
		$("#addMenu").toggle(); // 메뉴등록 show
	});
	
	$("input:checkbox").on('click', function(){
		if($(this).prop('checked')) {
			$(this).siblings().addClass("selected");
			$(this).siblings().text("선택됨");
		} else {
			$(this).siblings().removeClass("selected");
			$(this).siblings().text("선택해제됨");
		}
	});
	
	$(".imgBox").click(function(){
		var popupX = (window.screen.width / 2) - (430 / 2);
		var popupY = (window.screen.height / 2) - (600 / 2);
		
		window.open("editMenu", "editMenu", "width=430, height=460, left=" + popupX + "," + "top=" + popupY);
	});
});

$(function () {	
	tab('#tab',0);	
});

function tab(e, num){
    var num = num || 0;
    var menu = $(e).children();
    var con = $(e+'_con').children();
    var select = $(menu).eq(num);
    var i = num;

    select.addClass('on');
    con.eq(num).show();
    con.eq(num).find('*').not(".delChk").css("display", "inline-block");
    // 왜??

    menu.click(function(){
        if(select!==null){
            select.removeClass("on");
            con.eq(i).hide();
        }
        
        select = $(this);
        i = $(this).index();
        
        select.addClass('on');
        con.eq(i).show();
        con.eq(i).find('*').not(".delChk").css("display", "inline-block");
        
        if($(".delChk").css("display") == "none") {
        	$(".delChk").css("display", "none");
        } else {
        	$(".delChk").css("display", "inline-block");
        }
       $(".menuBox").scrollTop(0);
    });
}