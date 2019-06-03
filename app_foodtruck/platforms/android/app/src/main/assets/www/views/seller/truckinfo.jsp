<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<jsp:include page="../../header/header.jsp"></jsp:include>
<script>
$(document).ready(function(){
	
});
</script>

트럭정보 수정<br>
푸드트럭 사진<br>
평일영업시간 <input type="time" value="${sessionScope.seller.hours }" /> <button>수정</button><br>
주말영업시간 <input type="text" value="${sessionScope.seller.hours }"/> <button>수정</button><br>
은행명 <input type="text" value="${sessionScope.seller.bank }"/><br>
계좌번호 <input type="text" value="${sessionScope.seller.account }"/><br>
트럭이름 <input type="text" value="${sessionScope.seller.brandname }"/><br>
결제수단 <br>
카카오<input type="checkbox" value="1"> 카드<input type="checkbox" value="3"> 현금<input type="checkbox" value="5">
<c:set var ="pay" value="${sessionScope.seller.paytype }"></c:set>
<c:if test="${pay==9 }"></c:if>








