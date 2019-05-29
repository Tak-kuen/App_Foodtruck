<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<jsp:include page="../header/header.jsp"></jsp:include>
<link rel="stylesheet" href="<c:url value ="/resources/css/customercss/customercss.css"/>"/>
<script>
	$(document).ready(function() {
		$(".review").click(function() {
			location.href = "/project/customer/review";
		});
		$(".callList").click(function() {
			location.href = "/project/customer/callList";
		});
		$(".goodbyeForm").click(function() {
			location.href = "/project/customer/goodbyeForm";
		});
		$(".onboard").click(function() {
			location.href = "/project/customer/onboard";
		});
		$(".onSale").click(function() {
			location.href = "/project/customer/onSale";
		});
		$(".cusInfo").click(function() {
			location.href = "/project/customer/cusInfo";
		});
		$(".myQuestion").click(function() {
			location.href = "/project/help/myQuestion";
		});
	});
</script>

<div>
	<div id="title" class="col">

		<button id="container3" class="text onboard col btn btn-default"><h4>탑승트럭</h4><img src="/project/resources/image/onboard.svg" class="img2"></button>
		<button id="container3" class="text onSale col btn btn-default"><h4>운행중인트럭</h4><img src="/project/resources/image/onSale.svg" class="img2"></button>
		<button id="container3" class="text review col btn btn-default" ><h4>리뷰 및 평점</h4><img src="/project/resources/image/review.svg" class="img2"></button>
		<button id="container3" class="text callList col btn btn-default"><h4>호출내역</h4><img src="/project/resources/image/callList.svg" class="img2"></button>
	</div>
	<div id="title2" class="col">
		<button id="container2" class="text2 cusInfo col btn btn-default"><h4>회원 정보 관리</h4><img src="/project/resources/image/cusInfo.svg" class="img1"></button>
		<button id="container2" class="text2 col myQuestion btn btn-default"><h4>1:1문의 내역</h4><img src="/project/resources/image/myQuestion.svg" class="img1"></button>
		<button id="container2" class="text2 goodbyeForm col btn btn-default"><h4>회원탈퇴</h4><img src="/project/resources/image/goodbyeForm.svg" class="img1"></button>
	</div>
</div>

