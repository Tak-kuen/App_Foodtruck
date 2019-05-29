<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>내 문의내역</title>
<jsp:include page="../header/header.jsp"></jsp:include>
<link rel="stylesheet" href="<c:url value="/resources/css/help/myQuestion.css"/>"/>
</head>
<body>
<div>
	<section class="display-inline">
		<h3>문의번호</h3>
		<article>0000000000</article>
		<article>0000000000</article>
		<article>0000000000</article>
<%-- 		<c:forEach var="item" items="${list}" step=1>
    		${item.num}
		</c:forEach> --%>
	</section>
	<section class="display-inline">
		<h3>제목</h3>
		<article>배고파요</article>
		<article>아이디를 변경하고 싶어요</article>
		<article>자동로그인은 어떻게 하나요?</article>
<%-- 		<c:forEach var="item" items="${list}" step=1>
    		${item.title}
		</c:forEach> --%>
	</section>
	<section class="display-inline">
		<h3>등록일</h3>
		<article>2019-01-22</article>
		<article>2019-01-12</article>
		<article>2019-01-02</article>
<%-- 		<c:forEach var="item" items="${list}" step=1>
    		${item.regDate}
		</c:forEach> --%>
	</section>
	<section class="display-inline">
		<h3>답변일</h3>
		<article>2019-01-25</article>
		<article>2019-01-13</article>
		<article>2019-01-04</article>
<%-- 		<c:forEach var="item" items="${list}" step=1>
    		${item.resDate}
		</c:forEach> --%>
	</section>
	<section class="display-inline">
		<h3>상태</h3>
		<article>대기</article>
		<article>답변완료</article>
		<article>답변완료</article>
<%-- 		<c:forEach var="item" items="${list}" step=1>
    		${item.status}
		</c:forEach> --%>
	</section>
	<footer>
	${result}
	</footer>
</div>
</body>
</html>