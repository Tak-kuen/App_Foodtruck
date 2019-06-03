<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>당신의 푸드트럭</title>
<jsp:include page="../header/header.jsp"></jsp:include>
<link rel="stylesheet" href="<c:url value ="/resources/css/customercss/goodbye.css"/>"/>
<script>
$(document).ready(function() {
	$(".main").click(function(){
		location.href="/project/";
	});
});
</script>
</head>
<body>
<div id="with" class="col no-padding">
<div class="cool col no-padding">
<img src='${pageContext.request.contextPath}/resources/image/text.png'>
</div>
<p><span>회원탈퇴</span>가 완료되었습니다.</p>
<div id="check" class="col">
<br>
<h1>그 동안 당신의 푸드트럭을 이용해주셔서 감사합니다.</h1>
<h2>보다 나은 서비스로 찾아뵙겠습니다.</h2>
<div id="button" >
<button class="btn btn-info main">첫 화면</button>
</div>
</div>
</div>

</body>
</html>