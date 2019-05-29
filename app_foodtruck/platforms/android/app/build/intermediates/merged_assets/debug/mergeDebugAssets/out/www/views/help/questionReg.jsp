<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>1:1문의</title>
<jsp:include page="../header/header.jsp"></jsp:include>
<link rel="stylesheet" href="<c:url value="/resources/css/help/questionReg.css"/>"/>
<script type="text/javascript" src="<c:url value="/resources/js/help/questionReg.js"/>"></script>
</head>
<body>
<div class="container">
	<div class="row">
		<div class="col-md-12">
			<h3 class="title-padding">1:1 문의</h3>
			<form action="/project/help/questionReg" method="post"></form>
				<div class="form-group">
					<label for="title" class="text-padding-2">제목</label>
					<input type="text" id="title" class="form-control width-control"/>
				</div>
				
				<div class="form-group">
					<label class="text-padding-2">분류</label>
					<select id="sel1" class="form-control form-control-group">
							<option value="1">첫번째</option>
							<option value="2">두번째</option>
							<option value="3">세번째</option>
							<option value="4">네번째</option>
							<option value="5">다섯번째</option>
					</select>
					<select id="sel2"class="form-control form-control-group">
							<option value="1">첫번째</option>
							<option value="2">두번째</option>
							<option value="3">세번째</option>
							<option value="4">네번째</option>
							<option value="5">다섯번째</option>
					</select>
					<select id="sel3"class="form-control form-control-group">
							<option value="1">첫번째</option>
							<option value="2">두번째</option>
							<option value="3">세번째</option>
							<option value="4">네번째</option>
							<option value="5">다섯번째</option>
					</select>
				</div>
				<div class="form-group">
					<label for="content" class="text-padding-2">내용</label>
					<textarea id="textarea" class="form-control width-control textarea-height-control resize"></textarea>
				</div>
				<div class="form-group">
					<label for="email1" class="text-padding-1">이메일</label>
					<input type="email" class="form-control width-control" id="email1" />
					<p class="help-block">답변이 등록되면 이메일로 알림이 발송됩니다.</p>
				</div>
				<div class="buttons">
					<button type="reset" class="btn">리셋</button>
					<button type="submit" class="btn btn-primary" onclick="helpCheck()">등록</button>
					<button class="btn" id="cancel">취소</button>
				</div>
		</div>
	</div>
</div>
<script>
var title=$('#title');
var textarea=$('#textarea');
var email1=$('#email1');
function helpCheck() {
	if(!title.val()) {
		alert('제목을 적어주세요');
		return false;
	}else if(!textarea.val()) {
		alert('문의내용을 작성해주세요');
		return false;
	}else if(!email1.val()) {
		alert('답변받으실 이메일을 적어주세요');
		return false;
	}else {
		alert('완료');
		location.href="/project/help";
	}
}
$(function() {
	$('#cancel').click(function() {
		location.href="/project/help";
	});
	
});
</script>
</body>
</html>