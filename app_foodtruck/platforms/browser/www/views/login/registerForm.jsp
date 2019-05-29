     <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>당신의 푸드트럭</title>
<link rel="stylesheet" href="<c:url value="/resources/css/bootstrap.min.css"/>">
<link rel="stylesheet" href="<c:url value="/resources/css/login/registerForm.css"/>">

<script type="text/javascript"
	src="<c:url value="/resources/js/jquery.min.js"/>"></script>
<script type="text/javascript"
	src="<c:url value="/resources/js/bootstrap.min.js"/>"></script>
<script defer src="https://code.getmdl.io/1.1.3/material.min.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.9.3/firebase.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.8.4/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.8.4/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.9.3/firebase-database.js"></script>
<script type="text/javascript" src="<c:url value="/resources/js/join.js"/>"></script>
<script>
	
</script>
</head>
<body>

	<div id="logo">
		<a href="/project/rehome">당신의 푸드트럭</a>
	</div>
	<div id="all">
		<div id="member" class="card-header">회원가입</div>
		<div id="container">

			<div id="box" class="row justify-content-center">
				<div class="col-md-6">
					<div id="card" class="card">

						<article class="card-body">
							<form id="target" name="fr" action="/project/login/insert"
								onsubmit="return ck();" method="post">
								<!-- onsubmit="return ck();" -->
								<div class="form-group">
									<label>아이디</label> <input id='email'name="email" type="email"
										class="form-control" placeholder="">
								</div>
								<div class="form-group">
									<label>비밀번호</label> <input id='password' name="password" type="password"
										class="form-control" placeholder="">
								</div>
<!-- 								<div class="form-group">
									<label>비밀번호확인</label> <input id="repasswd" type="password"
										class="form-control" placeholder="">
								</div> -->
								<div class="form-group">
									<label>닉네임</label> <input name="nickname" type="text"
										class="form-control" placeholder="">
								</div>
								<!-- form-row.// -->
								<div class="form-group">
									<label>전화번호</label> <input name="telephone" class="form-control"
										type="tel" placeholder="전화번호입력">
								</div>
								<!-- form-group end.// -->
								<div class="form-group">
									<!-- <button type="submit" class="btn btn-primary btn-block">
										회원가입완료</button> -->
									<input id="register" type="submit"
										class="btn" value="회원가입" />
								</div>
							</form>
						</article>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>
