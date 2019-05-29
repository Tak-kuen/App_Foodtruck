<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>당신의 푸드트럭</title>
<jsp:include page="../header/header.jsp"></jsp:include>
<link rel="stylesheet" href="<c:url value ="/resources/css/customercss/callListdetail.css"/>"/>
<script>
$(document).ready(function(){
$('#pop_bt').click(function() {
    $('#pop').show();
   });

   $('#close').click(function() {
    $('#pop').hide();
   });
});
</script>
</head>
<body>
<h1>호출요청 상세정보</h1>
<div id="with" class="col">
<div id="width" class="col">
<h3>요청날짜: 2019.02.28</h3>
</div>
<div id="height1" class="col">
<div id="head1" class="col">요청정보</div>
<div id="content1" class="col">
<br>
<h4>행사장명: 달성공원 페스티벌</h4><br>
<h4>행사일: 2019.03.02</h4><br>
<h4>행사시간: 10:00 ~ 18:00</h4><br>
<h4> 행사장소: 대구 중구 달성공원로 35 달성공원</h4><br>
<h4>푸드트럭 섭외비용: 20만원</h4><br>
<h4>추가요구사항: 10대에서 30대이하 남녀들이 많을 것으로 예상하고 락페스티벌입니다.</h4>
</div>
</div>
<div id="height2" class="col">
<div id="head2" class="col">푸드트럭 정보</div>
<div id="content2" class="col">
<div class="text col">
<h4>복현 맛짱 트럭</h4>
<h4>(010-5689-7845)</h4>
</div>
</div>
</div>
<div id="height3" class="col">
<div id="head3" class="col">진행상태</div>
<div id="content3" class="col">
<br>
<h5>결제방식: 무통장입금</h5>
<h5>가상계좌번호:</h5>
<h5>대구은행 
508-5456465-23</h5>
<h6>5일 이내에 입금하지 않을 시 자동으로 취소됩니다.</h6>
<div class="button col">
<button id="pop_bt" class="bt1">인수확인</button>
<div id="pop" style="display:none;">
				<div style="height:370px">
				<p>푸드트럭이 배달장소에 도착 시</p>
				<p>확인버튼을 눌러주세요.</p>
					<br>
					<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">

  <ol class="carousel-indicators">
    <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
  </ol>
  
				</div>
				<div class="btn1">
				<button id="close">확인</button>
				<button id="close">취소</button>
			</div>
			</div>
			</div>
</div>
</div>
</div>
</div>
</body>
</html>