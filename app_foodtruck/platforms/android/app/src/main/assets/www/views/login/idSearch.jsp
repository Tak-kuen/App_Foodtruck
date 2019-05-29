<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>BootStrap</title>
<link rel="stylesheet"href="<c:url value="/resources/css/bootstrap.min.css"/>">
<link rel="stylesheet" href="<c:url value="/resources/css/login/idSearch.css"/>">
<style>

</style>
<script type="text/javascript"
	src="<c:url value="/resources/js/jquery.min.js"/>"></script>
<script type="text/javascript"
	src="<c:url value="/resources/js/bootstrap.min.js"/>"></script>

<script>
	$(document).ready(function() {
		$("#next").click(function() {
			var nickname = $("#nickname").val();
			var telephone =$("#telephone").val();
			
			if(ck()){
				query = {
					nickname : nickname,
					telephone:telephone
				}
				$.ajax({
					type:"get",
					url:"/project/login/idSearchck",
					data:query,
					success:function(data){
						if(data == "false"){
							alert("존재하는 아이디가 없습니다.");
						}
						else {
							$("#searchid").text(data);
							$("#idsearch").css("display", "none");
							$("#idsearch1").css("display", "block"); 
							
						}
					}
					
				});
			}
			
	
		});
	});
function ck(){
	var istrue = false;
	var name = $("#name").val();
	var pnumber =$("#pnumber").val();

	if (name == "") {
		alert("이름을 입력하시오.");
		istrue = false;
		return istrue;
	}else if(pnumber == ""){
		alert("전화 번호를 입력하세요");
		istrue = false;
		return istrue;
	}else{
		istrue = true;
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
			<div id="title" class="card-header">아이디찾기</div>
			<div id="login_box">
				<div class="form-group">
					<input type="text" class="form-control" id="nickname" placeholder="닉네임">
				</div>
				<div style="display: block" class="form-group">
					<input type="text" class="form-control test" id="telephone"
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
			<div id="title" class="card-header">아이디찾기</div>
			<div id="result"class="form-group">
				<label for="exampleFormControlTextarea1" id="searchid">보유중인 아이디</label>
				
			</div>
			<div id="pwnext" style="display: inline-block;">
				<a href="/project/login/passSearch"><button id="button"
						type="button" class="btn">비밀번호찾기</button></a>
			</div>

			<div id="loginnext" style="display: inline-block;">
				<a href="/project/login"><button id="button1" type="button"
						class="btn">로그인하기</button></a>
			</div>
		</form>
	</div>
</body>
</html>