<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>푸드트럭 등록</title>
<jsp:include page="../header/header.jsp"></jsp:include>
<link rel="stylesheet"
	href="<c:url value="/resources/css/bootstrap.min.css"/>">
<link rel="stylesheet"
	href="<c:url value="/resources/css/news/specific.css"/>" />
<script type="text/javascript"
	src="<c:url value="/resources/js/jquery.min.js"/>"></script>
<script type="text/javascript"
	src="<c:url value="/resources/js/bootstrap.min.js"/>"></script>
<script>
$(document).ready(function(){
	$("#delete").click(function(){
		var post_code = ${specific.post_code};
		
		var query = {
			 post_code : post_code
		}
		$.ajax({
			url: "/project/news/delete",
			type: "post",
			data: query,
			success : function(data){
				
				location.href="/project/news";
			}
		});
	});
	$("#d").click(function(){
		var post_code = ${specific.post_code};
		/* alert(post_code); */
		
		
		$(location).attr('href','/project/news/modifyNewsck?post_code='+post_code);
		
	});
	
	
});


	
</script>
</head>
<body>
	<div id="title" class="card-header">
		<p id="title2">푸드트럭NEWS</p>
	</div>

	<form id="all" >
		<div id="box">
			<div class="jumbotron">
				<h1 id="titles"class="display-10">${specific.post_title}</h1>
				<hr class="my-4">
				<p>${specific.post_content}</p>
				<p class="lead">
					<input id="d" type="button"   value="수정" class="btn" onClick="">
					<!-- <button id="d" type="submit" class="btn" onClick="">수정</button>  -->
					<button id="delete" class="btn">삭제</button>
					<a href="/project/news"><input id="back" type="button"   value="목록" class="btn" onClick=""></a> 
				</p>
			</div>
		</div>
	</form>





</body>
</html>
