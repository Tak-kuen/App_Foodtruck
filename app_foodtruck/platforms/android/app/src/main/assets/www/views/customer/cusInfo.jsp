<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="../header/header.jsp"></jsp:include>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>당신의 푸드트럭</title>
<script type="text/javascript"
	src="<c:url value="/resources/js/jquery.min.js"/>"></script>
	<script src="http://code.jquery.com/jquery-latest.js"></script>
	<link rel="stylesheet" href="<c:url value ="/resources/css/customercss/cusInfo.css"/>" />
</head>
<body>
	<div id="with" class="col">
		<h1>회원정보</h1>

		<div class="img col">
	<img src="/project/resources/image/customer.svg" class="img2" id="image">
			<button id="pop_bt" class="bt1">프로필수정</button>
			<div id="pop" style="display:none;">
				<div style="height:370px">
					프로필 수정
					<br>
					<div id="slide">
  <input type="radio" name="pos" id="pos1" checked>
  <input type="radio" name="pos" id="pos2">
  <input type="radio" name="pos" id="pos3">
  <input type="radio" name="pos" id="pos4">
  <ul>
    <li><img src="/project/resources/image/customer2.svg" class="img2"></li>
    <li><img src="/project/resources/image/customer3.svg" class="img2"></li>
    <li><img src="/project/resources/image/customer4.svg" class="img2"></li>
    <li><img src="/project/resources/image/customer5.svg" class="img2"></li>
  </ul>
  <p class="pos">
    <label for="pos1"></label>
    <label for="pos2"></label>
    <label for="pos3"></label>
    <label for="pos4"></label>
  </p>
</div>
	<button id="close">적용</button>
	<button id="close">취소</button>
</div>


</div>
				</div>
			
		
		<div class="div2 col">
 			<br> 아이디: BaekSunJae<br> 비밀번호: ***********
 			<button href="#layer1" class="btn-example" >변경</button>

			
				<div class="pop-layer" id="layer1">
					<div class="pop-container">
						<div class="pop-conts">
						아이디:BaekSunJae<br> <input placeholder="현재 비밀번호">
							<input placeholder="새 비밀번호">
							<p>8~64자 영문, 숫자, 특수문자를 조합해주세요.</p>
							<input placeholder="비밀번호 확인"> <br> <br>
							<div class="btn-r">
								<a href="#" class="btn-layerClose">변경</a>
								<a href="#" class="btn-layerClose">취소</a>
							</div>
						</div>
					</div>
				</div>
			<br> 닉네임: 쏜째 <button href="#layer2" class="btn-example" ">변경</button>
			<div class="dim-layer">
				<div class="dimBg"></div>
				<div id="layer2" class="pop-layer">
					<div class="pop-container">
						<div class="pop-conts">
							닉네임:썬째<br> <input placeholder="변경닉네임"> <br>
							<p>사용할 닉네임을 입력해주세요.</p>
							<br> <br>
							<div class="btn-r">
								<a href="#" class="btn-layerClose">변경</a>
								<a href="#" class="btn-layerClose">취소</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<br> 성별: 남<br> 생년월일: 1997.02.11<br> 휴대전화:
			010-5467-8794<br>

		</div>
	</div>
</body>
<script>
	$(document).ready(function() {
						$('.btn-example').click(function() {
							var $href = $(this).attr('href');
							layer_popup($href);
						});
						function layer_popup(el) {

							var $el = $(el); //레이어의 id를 $el 변수에 저장
							var isDim = $el.prev().hasClass('dimBg'); //dimmed 레이어를 감지하기 위한 boolean 변수

							isDim ? $('.dim-layer').fadeIn() : $el.fadeIn();

							var $elWidth = ~~($el.outerWidth()), $elHeight = ~~($el
									.outerHeight()), docWidth = $(document)
									.width(), docHeight = $(document).height();

							// 화면의 중앙에 레이어를 띄운다.
							if ($elHeight < docHeight || $elWidth < docWidth) {
								$el.css({
									marginTop : -$elHeight / 2,
									marginLeft : -$elWidth / 2
								})
							} else {
								$el.css({
									top : 0,
									left : 0
								});
							}

							$el.find('a.btn-layerClose').click(
									function() {
										isDim ? $('.dim-layer').fadeOut() : $el
												.fadeOut(); // 닫기 버튼을 클릭하면 레이어가 닫힌다.
										return false;
									});
							$('.layer .dimBg').click(function() {
								$('.dim-layer').fadeOut();
								return false;
							});
						}
						    $('#pop_bt').click(function() {
						     $('#pop').show();
						     
						    });
						    
						   

						    $('#close').click(function() {
						     $('#pop').hide();
						    });
						    
					});
</script>
</html>