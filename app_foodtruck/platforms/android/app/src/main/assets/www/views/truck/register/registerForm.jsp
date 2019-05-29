<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<div id="all">
		<div id="member" class="card-header">트럭등록</div>
		<div id="container">
			<div id="box" class="row justify-content-center">
				<div class="col-md-6">
					<div id="card" class="card">

						<article class="card-body">
							<form id="target" name="fr" action="/project/truck/insert"
								onsubmit="" method="post">
								<!-- onsubmit="return ck();" -->
								<div class="form-group">
									<label>트럭 상호명</label> <input name="brandname" type="text"
										class="form-control" placeholder="">
								</div>
								<div class="form-group">
									<label>사업자번호</label> <input name="crn" type="text"
										class="form-control" placeholder="">
								</div>
								<div class="form-group">
									<label>트럭번호</label> <input name="trucknum" type="text"
										class="form-control" placeholder="">
								</div>
								<div class="form-group">
									<label>계좌번호</label> <input name="account" type="text"
										class="form-control" placeholder="">
								</div>
								<!--							<div class="form-group">
									<label>비밀번호확인</label> <input id="repasswd" type="password"
										class="form-control" placeholder="">
								</div> -->
								<!-- form-group end.// -->
								<div class="form-group">
									<!-- <button type="submit" class="btn btn-primary btn-block">
										회원가입완료</button> -->
									<input id="register" type="submit" class="btn" value="트럭등록" />
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