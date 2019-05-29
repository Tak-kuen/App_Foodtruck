<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<html>
<head>
<meta charset="UTF-8">
<title>당신의 푸드트럭</title>
<jsp:include page="../header/header.jsp"></jsp:include>
<link rel="stylesheet" href="<c:url value ="/resources/css/customercss/callList.css"/>"/>

</head>
<body>
	<div id="with" class="col">
		<h1>호출내역</h1><br>
		<table class="table table-hover" class="col">
			<tr>
				<th>푸드트럭명</th>
				<th>위치</th>
				<th>행사명</th>
				<th>행사일정</th>
				<th>시간</th>
				<th>신청일</th>
				<th>입금현황</th>
			</tr>
			<tbody>
			<c:forEach var="i" items="${CallList}">
				<tr>
					<td>${i.name}</td>
					<td>${i.place}</td>
					<td>${i.festival_name}</td>
					<td>${i.festival_date}</td>
					<td>${i.start_time} ~ ${i.end_time}</td>
					<td>${i.reporting_date}</td>
					<td>${i.progress}</td>									
				</tr>
</c:forEach>
				
			</tbody>
				
		</table>
	</div>
<div class="sunjae">
	<nav aria-label="Page navigation example" id="nav" class="sg" >
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        <span class="sr-only"></span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
        <span class="sr-only"></span>
      </a>
    </li>
  </ul>
</nav>
</div>
</body>
</html>