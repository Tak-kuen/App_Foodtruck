<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>BootStrap</title>
<link rel="stylesheet" href="<c:url value="/resources/css/bootstrap.min.css"/>">
<link rel="stylesheet" href="<c:url value="/resources/css/login/passSearch.css"/>">
<style>

</style>	

<script type="text/javascript"src="<c:url value="/resources/js/jquery.min.js"/>"></script>
<script type="text/javascript"src="<c:url value="/resources/js/bootstrap.min.js"/>"></script>
<script>
	$(document).ready(function() {
		$("#next").click(function() {
			var email = $("#mail").val();
			var nickname = $("#name").val();
			var telephone = $("#pnumber").val();
			if(check()){
				query = {
						email : email,
						nickname : nickname,
						telephone : telephone
				}
			$.ajax({
				type:"post",
				url:"/project/login/passSearchck",
				data:query,
				success:function(data){
					if(data == "false"){
						alert("비밀번호를 찾지 못했습니다.")
					}else{
						$("#searchpass").text(data);
						$("#idsearch").css("display", "none");
						$("#idsearch1").css("display", "block");
						
					}
				}
			});
			
			}
		});
		
	});
function check(){
	var empty = false;
	var mail = $("#mail").val();
	var name = $("#name").val();
	var pnumber = $("#pnumber").val();
	
	if (mail == ""){
		alert("아이디를 입력하시오.");
		empty = false;
		return empty;
	}else if (name == ""){
		alert("이름을 입력하시오.");
		empty = false;
		return empty;
	}else if (pnumber == ""){
		alert("전화번호를 입력하시오.");
		empty = false;
		return empty;
	}else{
		empty = true;
		return true;
	}
	
}
	
</script>
</head>

<body>

	<div id="logo">
		<a href="/project/rehome">당신의 푸드트럭</a>
	</div>

	<div id="idsearch">
		<form id="form">
			<div id="title" class="card-header">비밀번호찾기</div>
			<div id="login_box">
				<div class="form-group">
					<input type="text" class="form-control" id="mail" placeholder="아이디">
				</div>
				<div class="form-group">
					<input type="text" class="form-control" id="name" placeholder="닉네임">
				</div>
				<div style="display: block" class="form-group">
					<input type="text" class="form-control test" id="pnumber"
						placeholder="전화번호">
				</div>
				<div class="form-group">
					<button id="next" type="button"
						class="btn">다음</button>
				</div>
			</div>
		</form>
	</div>

	<div id="idsearch1" style="display: none">
		<form id="form1">
			<div id="title" class="card-header">비밀번호찾기</div>
			<div id="result"class="form-group">
				<label for="exampleFormControlTextarea1" id="searchpass">비밀번호</label>
				
			</div>
			

			<div id="loginnext" style="display: inline-block;">
				<a href="/project/login"><button id="button1" type="button"
						class="btn">로그인하기</button></a>
			</div>
		</form>
	</div>
</body>
</html>