<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>당신의 푸드트럭</title>
<jsp:include page="../header/header.jsp"></jsp:include>
<link rel="stylesheet"
	href="<c:url value ="/resources/css/truck/callForm.css"/>" />
<script src="http://dmaps.daum.net/map_js_init/postcode.v2.js"></script>
<script type="text/javascript"
	src="<c:url value="/resources/js/jquery.min.js"/>"></script>
	<script src="http://code.jquery.com/jquery-latest.js"></script>
<script>
	function execPostCode() {
		new daum.Postcode({
			oncomplete : function(data) {
				// 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

				// 도로명 주소의 노출 규칙에 따라 주소를 조합한다.
				// 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
				var fullRoadAddr = data.roadAddress; // 도로명 주소 변수
				var extraRoadAddr = ''; // 도로명 조합형 주소 변수

				// 법정동명이 있을 경우 추가한다. (법정리는 제외)
				// 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
				if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
					extraRoadAddr += data.bname;
				}
				// 건물명이 있고, 공동주택일 경우 추가한다.
				if (data.buildingName !== '' && data.apartment === 'Y') {
					extraRoadAddr += (extraRoadAddr !== '' ? ', '
							+ data.buildingName : data.buildingName);
				}
				// 도로명, 지번 조합형 주소가 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
				if (extraRoadAddr !== '') {
					extraRoadAddr = ' (' + extraRoadAddr + ')';
				}
				// 도로명, 지번 주소의 유무에 따라 해당 조합형 주소를 추가한다.
				if (fullRoadAddr !== '') {
					fullRoadAddr += extraRoadAddr;
				}

				// 우편번호와 주소 정보를 해당 필드에 넣는다.
				console.log(data.zonecode);
				console.log(fullRoadAddr);

				$("[name=addr1]").val(data.zonecode);
				$("[name=addr2]").val(fullRoadAddr);

				/* document.getElementById('signUpUserPostNo').value = data.zonecode; //5자리 새우편번호 사용
				document.getElementById('signUpUserCompanyAddress').value = fullRoadAddr;
				document.getElementById('signUpUserCompanyAddressDetail').value = data.jibunAddress; */
			}
		}).open();
	}
	$(document).ready(function(){
		$("#btn2").click(function(){
			var personname = $("#i1").val();
			var tel = $("#i2").val();
			var festivalname = $("#i3").val();
			var startdate = $("#i4").val();
			var enddate = $("#i4-1").val();
			var starttime = $("#i5").val();
			var endtime = $("#i5-1").val();
			var placenum = $("#i6").val();
			var placeload = $("#i7").val();
			var placedetail = $("#addr3").val();
			var cost = $("#i8").val();
			var content = $("#content").val();
			
			var place = placenum +" " + placeload+ " " + placedetail;
			console.log(place);
			alert(personname);
			console.log(tel+festivalname+startdate+enddate+starttime+endtime+placenum+placeload+placedetail+cost+content);
			$.ajax({
				
			})
		});
		
	 $('#btn1').click(function() {
	     $('#pop').show();
	     
	    });
	    
	    $('#close').click(function() {
	     $('#pop').hide();
	    });
});
	
</script>
</head>
<body>
	<div id="with" class="col">
		<h1>호출요청하기</h1>
		<div id="height" class="col">
			<div id="sg" class="col">
				<h4 id="name">신청자명</h4>

				<h4>휴대전화</h4>

				<h4 id="festivalname">행사장명</h4>

				<h4 id="date">행사일</h4>

				<h4 id="time">행사시간</h4>

				<h4 id="place">행사장소</h4>

				<h4 id="truckcost">푸드트럭 섭외비용</h4>

				<h4 id="pluscontent">추가요구사항</h4>


			</div>

			<div id="sj" class="col">
				<input id="inname" class="form-control">
				<input class="form-control" type="tel" name="tlno" id="intel" placeholder="전화번호 입력" pattern="[0-9]{2,3}-[0-9]{3,4}-[0-9]{3,4}" maxlength="13">
				<input id="inplace" placeholder="행사장명 입력(20자 이내)" class="form-control"> 
				<input id="Startdate" class="form-control" type="date"> ~ <input id="Enddate" class="form-control" type="date"> 
				<input id="Starttime" type="time" class="form-control"> ~ <input id="Endtime" type="time" class="form-control">

				<div id="div3" class="form-group col"> 
					<input id="postnum" class="form-control" placeholder="우편번호" name="addr1" id="addr1" type="text" readonly="readonly">
					<button id="btn3" type="button" class="btn btn-default" onclick="execPostCode();">
						<i class="fa fa-search"></i> 우편번호 찾기</button>
				</div>
				<div id="div1" class="form-group col">
					<input id="loadaddr" class="form-control" placeholder="도로명 주소" name="addr2" id="addr2" type="text" readonly="readonly" />
				</div>
				<div id="div2" class="form-group col">
					<input class="form-control" placeholder="상세주소" name="addr3" id="addrdetail" type="text" />
				</div>
				<input id="cost" class="form-control">
				<textarea id="content" class="form-control" cols="30" rows="5"
					placeholder="관객연령대, 관객 예상수, 행사컨셉 등을 상세히 기술해주세요."></textarea>
			</div>
			<div id="oj">
				<button id="btn1" class="btn btn-default">선수금지불</button>
				
				<button id="btn2" class="btn btn-default">호출요청</button>
				<div id="pop" style="display: none;">
				<div id="gg">
				<div id="oo">
				<h3>결제창</h3>
				</div>
				<div id="radio">
				<input type="radio" value="" name="1">무통장입금
				<br>
				<input type="radio" value="" name="1">계좌이체
				</div>
				<div id="ff">
				<button>확인</button>
				<button id="close">취소</button>
				</div>
				</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>