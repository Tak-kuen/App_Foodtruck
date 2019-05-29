<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>허가구역 안내</title>
<jsp:include page="../header/header.jsp"></jsp:include>
<link rel="stylesheet" href="<c:url value="/resources/css/bootstrap.min.css"/>">
<link rel="stylesheet" href="<c:url value="/resources/css/announce/modifyArea.css"/>" /> 
<script type="text/javascript" src="<c:url value="/resources/js/jquery.min.js"/>"></script>
<script type="text/javascript" src="<c:url value="/resources/js/bootstrap.min.js"/>"></script>
</head>
<body>
	<div id="title" class="card-header">
		<p id="title2">허가구역 안내</p>
	</div>
	<form id="all" action="/project/area/modifyArea" method="post" >
	<div id="box">
		<div class="form-group">
			<input type="hidden"  name="post_code" value="${areaspecificcontent.post_code}">
			<label for="exampleInputEmail1">제목</label>
			<textarea name="post_title" class="form-control" id="exampleFormControlTextarea1"
				rows="1"> ${areaspecificcontent.post_title} </textarea>
		</div>
		<div class="form-group">
			<label for="exampleFormControlTextarea1">내용</label>
			<textarea name="post_content" class="form-control" id="exampleFormControlTextarea1"
				rows="12">${areaspecificcontent.post_content} </textarea>
		</div>
		<input id="success" type="submit" class="btn" value="완료">
		<input type="button" id="d" type="reset" class="btn" value="취소" onClick="history.go(-1)" >
		</div>
	</form>
</body>
</html>