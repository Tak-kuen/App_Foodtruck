<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<jsp:include page="../../header/header.jsp"></jsp:include>
<style>
#cuorder, #seorder{
margin-top:13%;
display: inline-block;
width: 15em;
height: 13em;
}
#button{
margin :0 auto;
width:100%;
text-align: center;
}
</style>
<div class="container">
	<div class="row">
		<div class="col-md-3">
			<jsp:include page="../sideMenuBar/sideMenuBar.jsp"></jsp:include>
		</div>
		<div class="col-md-9">
			<div id="button">
				<a href="cuorder"><button id="cuorder" >현장 고객용</button></a>
				<a href="seorder"><button id="seorder" >현장 상인용</button></a>
			</div>
		</div>
	</div>
</div>