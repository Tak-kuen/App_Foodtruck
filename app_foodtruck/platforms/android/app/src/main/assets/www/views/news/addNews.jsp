
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
	href="<c:url value="/resources/css/news/addNews.css"/>"/>
<script type="text/javascript"
	src="<c:url value="/resources/js/jquery.min.js"/>"></script>
<script type="text/javascript"
	src="<c:url value="/resources/js/bootstrap.min.js"/>"></script>

<script>

function historyBack(){
	history.back();
	
	
}
function ck(){
	
	var x = false;
	var title = $("#titles").val();
	var content = $("#content").val();
	
	if (title == ""){
		alert("제목을 입력하세요.");
		x = false;
		return x;
	}else if(content == "") {
		alert("내용을 입력하세요.");
		x = false;
		return x;
	}else{
		x = true;
		return true;
	}
	
} 

</script>



</head>
<body>
	<div id="title" class="card-header">
		<p id="title2">푸드트럭NEWS</p>
	</div>
	<form id="all" action="/project/news/addNews" method="post" onsubmit="return ck();" onreset="historyBack();" >
		<div id="box">
			<div class="form-group">
				<label for="exampleInputEmail1">제목</label> <input name="post_title" id="titles" type="text"
					class="form-control">
			</div>
			<div class="form-group">
				<label for="exampleFormControlTextarea1">내용</label>
				<textarea name="post_content"  id="content" class="form-control" id="exampleFormControlTextarea1" rows="12"></textarea>
				
			</div>		
			
			<input id="d" type="submit" class="btn" value="등록">
			<input id="dd" type="reset" class="btn" value="취소">
			</div>
	</form>
	
	

</body>
</html>