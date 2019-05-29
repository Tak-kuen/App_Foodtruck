<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<jsp:include page="../../header/header.jsp"></jsp:include>
<link rel="stylesheet" href="<c:url value="/resources/css/seller/sideMenuBar/sideMenuBar.css"/>">
<script type="text/javascript" src="<c:url value="/resources/js/seller/sideMenu.js"/>"></script>
<title>Insert title here</title>
</head>
<body>
				<ul>
					<li class="menu"><a href="/project/seller/">메인</a></li>
					<li class="menu"><a href="/project/seller/menu">메뉴 등록</a></li>
					<li class="menu"><a href="/project/seller/location">위치 등록</a></li>
					<li class="menu"><a href="/project/seller/event">이벤트 관리</a></li>
					<li class="menu"><a href="/project/seller/psgpush">탑승자 알림 관리</a></li>
					<li class="menu"><a href="/project/seller/callmanage">푸드트럭 호출 관리</a></li>
					<li class="menu"><a href="/project/seller/order">주문관리창</a></li> 
					<li class="menu"><a href="/project/seller/layout">레이아웃</a>
						<ul class="hide">
							<li><a>타입 A</a></li>
							<li><a>타입 B</a></li>
						</ul>
					</li>
				</ul>
</body>
</html>