<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta charset="UTF-8">
<title>당신의 푸드트럭</title>
<%-- <jsp:include page="../header/header.jsp"></jsp:include> --%>
<style>
#with{
	margin-top: 200px;
	margin-left:450px;
	width: 1000px;
	height: 650px;
	border: 1px solid darkgray;
}
img{
	width: 100px;
	height: 100px;
	margin-top: 20px;
	margin-left: 450px;
}
#check{
	width:1000px;
	height:300px;
	background-color: #E6E6E6;
}
h1,h2{
	text-align: center;
}
button{
	
}
</style>
</head>
<body>
<div id="with">
<img src='${pageContext.request.contextPath}/resources/image/text.png'>
<p style="margin-top:20px; text-align: center; font-size:50px;"><span style="color: #0080FF;">회원가입</span>이 완료되었습니다.</p>
<div id="check">
<br>
<h1>당신의 푸드트럭의 회원이 되신것을 환영합니다!</h1>
<h2>당신이 원하는 푸드트럭을 이용해보세요!</h2>
<div>
<a href="/project/rehome"><button style="margin-top:50px; margin-left: 300px; height: 60px; width:200px;">첫 화면</button></a>
<a href="/project/login"><button style="margin-left: 10px; height: 60px; width:200px;">로그인</button></a>
</div>
</div>
</div>
</body>
</html>