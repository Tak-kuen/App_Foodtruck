<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>당신의 푸드트럭</title>
<jsp:include page="../header/header.jsp"></jsp:include>
<link rel="stylesheet" href="<c:url value ="/resources/css/customercss/goodbyeForm.css"/>"/>
<script>
$(document).ready(function() {
	$(".goodbye").click(function(){
		location.href="/project/customer/goodbye";
	});
});
</script>

</head>
<body>
<div id="with" class="col" >
<p class="p1">지금까지 이용해주셔서 감사합니다!</p>
	<p class="p2">탈퇴하시기 전 아래 유의사항을 확인해주세요!</p>
	<div id="drawal"  class="col">
		<h5>#탈퇴 전 유의사항<br><br>
Q. 탈퇴 시 재가입이 가능한가요?<br>
탈퇴 시 3개월간 재가입이 제한됩니다.<br>
아이디/이름 변경 등이 필요한 경우에는 고객센터로 문의주세요.<br>
<br>
<br>
Q. 탈퇴 시 보유한 크레딧은 환불이 되나요?<br>
회사가 무상으로 부여한 크레딧은 환불되지 않습니다.<br>
3개월 후 재가입을 하셔도 다시 생성되지 않습니다.<br>
단, 유상으로 구매하신 크레딧은 규정에 따라 환불됩니다.<br>
<br><br>

Q. 탈퇴 시 보유한 쿠폰은 환불/양도 되나요?<br>
탈퇴 시 보유하신 쿠폰이 있는 경우 해당 쿠폰도 함께 소멸하게 되며,<br>
타인에게 양도가 불가합니다.
</h5>
	</div>
	<div id="check" class="col">
	<P class="p3">당신의 푸드트럭을 탈퇴하시는 이유는 무엇인가요?</P>
	<input id="box" type="checkbox">단순변심&nbsp;&nbsp;&nbsp;
	<input id="box" type="checkbox">자주이용하지않음&nbsp;&nbsp;&nbsp;&nbsp;
	<input id="box" type="checkbox">개인정보/사생활 침해 사례경험<br>
	<input id="box" type="checkbox">찾고자하는 정보가 없음&nbsp;&nbsp;&nbsp;
	<input id="box" type="checkbox" >기타&nbsp;<input id="radius">
	</div>
	<div class="goodbye">
	<button class="btn btn-info">탈퇴확인</button>
	</div>
</div>
</body>
</html>