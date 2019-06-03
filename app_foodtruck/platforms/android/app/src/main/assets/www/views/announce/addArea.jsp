<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>허가구역 안내 </title>
<jsp:include page="../header/header.jsp"></jsp:include>
<link rel="stylesheet" href="<c:url value="/resources/css/bootstrap.min.css"/>">
<link rel="stylesheet" href="<c:url value="/resources/css/announce/addArea.css"/>"/>
<script type="text/javascript" src="<c:url value="/resources/js/jquery.min.js"/>"></script>
<script type="text/javascript" src="<c:url value="/resources/js/bootstrap.min.js"/>"></script>
</head>
<body>
	<div id="title" class="card-header">
		<p id="title2">허가구역 추가하기</p>
	</div>
	<form id="all" action="/project/area/addArea" method="post" onsubmit="return ck();" onreset="historyBack();" >
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
<script>
function historyBack()	{	history.back();	}
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
</body>
</html>