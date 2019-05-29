<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<link rel="stylesheet" href="<c:url value="/resources/css/bootstrap.min.css"/>">
<style>
.carousel-item {
	height: 65vh;
	min-height: 350px;
	background: no-repeat center center scroll;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
}

#top-right {
	text-align: right;
}

#top-right {
	margin-top: 50px;
	margin-left: 26%;
}

.test{
	margin-bottom: 90px;
}
</style>
<!-- Navigation -->
<div class="test">
<nav
	class="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
	<div class="container">
		<a class="navbar-brand" href="/project/rehome">당신의 푸드트럭!</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse"
			data-target="#navbarResponsive" aria-controls="navbarResponsive"
			aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarResponsive">
			<ul class="navbar-nav ml-auto">

				<li class="nav-item active"><a class="nav-link" href="#">서비스소개
						<span class="sr-only">(current)</span>
				</a></li>
				<li class="nav-item"><a class="nav-link" href="/project/search">트럭검색</a></li>
				<li class="nav-item"><a class="nav-link" href="/project/announce">모집공고</a></li>
				<li class="nav-item"><a class="nav-link" href="#">앱 다운로드</a></li>
				<li class="nav-item"><a class="nav-link" href="/project/help">고객센터</a></li>
			</ul>
			<div id="top-right">
				<c:if test="${sessionid == null}">
				<span id="login" class="badge badge-light"><a href="/project/login">로그인</a></span>
				<span class="badge badge-light"><a href="/project/login/register">회원가입</a></span>
				</c:if>
				<%-- <c:if test="${sessionid != null}"> --%>
				<c:if test="${not empty sessionScope.sessionid}">
					<span id="" class="badge badge-light"><a href="#">${sessionScope.sessionid.m_name}님</a></span>
					<span id="" class="badge badge-light"><a href="/project/customer">마이페이지</a></span>
					<span id="" class="badge badge-light"><a href="#">로그아웃</a></span>
				</c:if>
			</div>
		</div>

	</div>
</nav>
</div>
<script type="text/javascript" src="<c:url value="/resources/js/jquery.min.js"/>"></script>
<script type="text/javascript" src="<c:url value="/resources/js/bootstrap.min.js"/>"></script>

