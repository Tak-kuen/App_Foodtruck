<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<jsp:include page="../../header/header.jsp"></jsp:include>
<div class="container">
		<div class="row">
			<div class="col-md-3">
				<jsp:include page="../sideMenuBar/sideMenuBar.jsp"></jsp:include>
			</div>
			<div class="col-md-9">레이아웃 content</div>
			<input type="text" name="text" id="text"/>
			<input type="button" id="pushSend" value="푸시 보내기">
		</div>
</div>
<script>
$('#pushSend').click(function() {
	$.ajax({
		type:"post",
		url:"/pushTest",
		data:{text:$('#text').val()},
		success:function(data) {
			console.log(data);
		},error:function(err) {
			console.log(err);
		}
	});
});
</script>
