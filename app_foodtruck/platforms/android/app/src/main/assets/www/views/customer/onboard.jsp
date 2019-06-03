<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>당신의 푸드트럭</title>
<jsp:include page="../header/header.jsp"></jsp:include>
<link rel="stylesheet" href="<c:url value ="/resources/css/customercss/onboard.css"/>"/>
</head>
<body>
<div id="with" class = "col">
		<h1 style="text-align:center; margin-top:10px;">탑승중인 트럭</h1><br>
		<div class="album py-5 bg-light">
		<div class="container">
		<div class="row">
		<c:forEach var="i" items="${onboard}">
		<div class="col-md-4">
		<div class="card mb-4 shadow-sm">
		<svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail">
		<rect width="100%" height="100%" fill="#55595c"></rect>
		<text x="50%" y="50%" fill="#eceeef" dy=".3m">Thumbnail</text>
		</svg>
		<div class="card-body">
		<p class="card-text">
			${i.brandname}
			${i.onboard_date}
		</p>
		<div class="d-flex justify-content-between align-items-center">
		<div class="btn-group">
		<button type="button" class="btn btn-sm btn-outline-secondary">상세정보</button>
		<button type="button" class="btn btn-sm btn-outline-secondary">하차</button>
		
		</div>
		</div>
		</div>
		</div>
		</div>
		</c:forEach>
		
	

		
		</div>
		</div>

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

</div>
</body>
</html>