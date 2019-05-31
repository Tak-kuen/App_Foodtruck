<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>메뉴등록</title>
<link rel="stylesheet" href="<c:url value="/resources/css/seller/menu/addMenu.css"/>"/>
<script type="text/javascript" src="<c:url value="/resources/js/jquery.min.js"/>"></script>
<script type="text/javascript" src="<c:url value="/resources/js/seller/menu/addMenu.js"/>"></script>
</head>
<body>
	<div class="addMenuTitle">
		<h2>메뉴등록</h2>
	</div>
	<form action="" method="post" enctype="multipart/form-data">
		<table class="addMenuTable">
			<tr>
				<td class="itemName">이미지</td>
				<td>
					<input type="file" id="filename" name="filename" onchange="previewImage(this,'previewId'); fileCheck(this);" accept=".jpg, .jpeg, .png, .gif, .bmp" required/>
				</td>
			</tr>
				
			<tr>
				<td class="itemName"></td>
				<td>
					<div id="previewId">
						<img id="noImage" src="${pageContext.request.contextPath}/resources/image/icon/noimage.png"/>
					</div>
				</td>
			</tr>
			<tr>
				<td class="itemName"><label>카테고리</label></td>
				<td>
					<select name="category" required>
						<option value="" selected>카테고리</option>
						<option value="c1">카테고리A</option>
						<option value="c2">카테고리B</option>
						<option value="c3">카테고리C</option>
						<option value="c4">카테고리D</option>
						<option value="c5">카테고리E</option>
					</select>
				</td>
			</tr>
			<tr>
				<td class="itemName"><label for="menuName">메뉴명</label></td>
				<td><input id="menuName" class="inputText" type="text" name="menuName" required/></td>
			</tr>
			<tr>
				<td class="itemName"><label for="unitPrice">가격(원)</label></td>
				<td><input id="unitPrice" class="inputText" type="text" name="unitPrice" required/></td>
			</tr>
			<tr> <!-- 여기부터 -->
				<td class="itemName" valign="top"><label class="labelStyle" for="details">상세내용</label></td>
				<td><textarea id="details" name="details" required onFocus="clearMessage(this.form);" onKeyUp="checkByte(this.form);">내용을 입력해 주세요.
					</textarea>
					<div class="showByte">
						<input type="text" name="messagebyte" value="0" size="1" maxlength="2" readonly>
						<font color="#000000">/ 1000 byte</font>
					</div>
				</td>
			</tr> <!-- 여기까지 검토할 것 -->
			<tr>
				<td colspan="2">
					<div class="btns">
						<input type="submit" value="등록">
						<button id="cancelBtn">취소</button>
					</div>
				</td>
			</tr>
		</table>
	</form>
</body>
</html>