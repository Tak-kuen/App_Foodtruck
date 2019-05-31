<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<jsp:include page="../../header/header.jsp"></jsp:include>
<link rel="stylesheet" href="<c:url value="/resources/css/seller/menu/menu.css"/>"/>
<head>
<title>메뉴관리</title>
<script type="text/javascript" src="<c:url value="/resources/js/seller/menu/menu.js"/>"></script>
</head>
<body>
<div class="container">
	<div class="row">
		<div class="col-md-3">
			<jsp:include page="../sideMenuBar/sideMenuBar.jsp"></jsp:include>
		</div>
			<div class="col-xs-10 col-md-7 menuBox">
			<div class="container">
				<div class="row">
					<c:forEach var="i" begin="1" end="${menuNum}">
							<div class="col-md-3 menuf">
								<div class="menut">
								<div class="imgBox">
									<img class="img editMenu" src="${pageContext.request.contextPath}/resources/image/icon/food.png"/>
								</div>
								<div>메뉴명 ${i}</div>
								<div>가격 ${i}</div>
								<div class="delChk">
									<input type="checkbox" name="delChk" id="${i}" class="delChk" value="${i}"/>
									<div class="status" style="display:inline-block">선택해제됨</div>
								</div>
								</div>
							</div>
					</c:forEach>
				</div>
			</div>
		</div>
		<div class="col-xs-2 btnBox">
			<button id="addMenu" class="user-btn">등록</button>
			<button id="chkAllMenu" class="user-btn hideBtn">전체선택</button>
			<button id="unchkAllMenu" class="user-btn hideBtn">전체해제</button>
			<button id="delMenu" class="user-btn">삭제</button>
			<button id="delMenu2" class="user-btn hideBtn">삭제</button>
			<button id="goBack" class="user-btn hideBtn">취소</button>
		</div>
	</div>
</div>
</body>