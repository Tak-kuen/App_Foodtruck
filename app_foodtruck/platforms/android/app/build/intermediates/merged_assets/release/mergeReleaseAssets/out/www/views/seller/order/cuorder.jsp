<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<title>주문관리</title>
<link rel="stylesheet"
	href="<c:url value="/resources/css/bootstrap.min.css"/>">
<link rel="stylesheet"
	href="<c:url value="/resources/css/news/news.css"/>" />
<!-- <script type="text/javascript"
	src="<c:url value="/resources/js/jquery.min.js"/>"></script>
<script src="http://cdn.jsdelivr.net/sockjs/0.3.4/sockjs.min.js"></script>
<script>
let sock = new SockJS("<c:url value="/project/echo"/>");
sock.onmessage = onMessage;
sock.onclose = onClose;

// 메시지 전송
function sendMessage() {
	sock.send(JSON.stringify(list));
}

// 서버로부터 메시지를 받았을 때
function onMessage(msg) {
}

// 서버와 연결을 끊었을 때
function onClose(evt) {
	$("#data").append("연결 끊김");
}
var list = new Array();
	$(document).ready(function() {
				var is = false;
				var alltotal_price = 0;
				$("#foodlist").on('click',"button",function() {
							//var a=$(this).find('p');
							var a = $(this);
							//var name = a.html();
							var name = a.next().html();
							var total_price = a.nextAll().eq(1).html();
							var menu_code = a.nextAll().eq(2).val();
							var amount = 1;
							//클릭한 상품이 현재 목록에 있는지 확인
							for (var i = 0; i < list.length; i++) {
								if (list[i].menu_code == menu_code) { //있으면 수량만 더하기 
									list[i].amount += 1;
									list[i].total_price = list[i].amount * total_price;
									var k = list[i].menu_code;
									//해당 값 수정
									console.log($("#" + k).html());
									$("#" + k).html("<td>"+list[i].name+"</td><td>"+list[i].amount+"</td><td>"+ list[i].total_price+"</td>");
									console.log($("#" + k).html());
									alltotal_price += parseInt(total_price);
									$("#allprice").html(alltotal_price);
									is = true; // 상품이 있기때문에 true 로 바꿔서 추가못하게 함
								}
							}
							if (!is) { //상품이 없어서 추가하고 어팬드
								var temp = {
									menu_code : menu_code,
									amount : amount,
									total_price : parseInt(total_price),
									name : name
								}
								list.push(temp);
								var k = temp.menu_code;
								alltotal_price += parseInt(temp.total_price);
								$("#allprice").html(total_price);
								$("tbody").append("<tr id='"+k+"'><td>" + temp.name+ "</td><td>" + temp.amount+ "</td><td>" + temp.total_price + "</td>");
				
							}
							if (is) { //초기화
								//alert(is);
								is = false;
							}
						});
				$("#cancle1").click(function() {
					$("tbody").empty();
					var a = $("tbody"); //tebody 태그 없앰;
					alltotal_price = 0;
					$("#allprice").html(alltotal_price);
					list = new Array(); //list초기화
				});
				$("#kakaopay").click(function() {
					console.log(list);
					$("#order").css("display","none");
					$("#kakaotel").css("display","block");
					console.log(JSON.parse(JSON.stringify(list)));
					if (typeof list[0] == 'undefined') {
						alert("주문목록이업서여");
					} else {
						for(var a in list) {
							list[a].payment_class=0;
							list[a].truck_code='${sessionScope.seller.truck_code}';
							list[a].payment_telephone='010-1111-4875';
						}
						console.log(list);
						sendMessage();
					}
				});
				$("#cash").click(function() {
					console.log(list);
					$("#order").css("display","none");
					$("#cashtel").css("display","block");
					if (typeof list[0] == 'undefined') {
						alert("주문목록이업서여");
					} else {
						for(var a in list) {
							list[a].payment_class=1;
							list[a].truck_code='${sessionScope.seller.truck_code}';
							list[a].payment_telephone='010-1111-4875';
						}
						console.log(list);
						sendMessage();
						alert("현금결제 총 결제금액" + allprice);
					}

				});
				
				$("#card").click(function() {
					$("#order").css("display","none");
					$("#cashtel").css("display","block");
					console.log(list);
					if (typeof list[0] == 'undefined') {
						alert("주문목록이업서여");
					} else {
						for(var a in list) {
							list[a].payment_class=2;
							list[a].truck_code='${sessionScope.seller.truck_code}';
							list[a].payment_telephone='010-1111-4875';
						}
						console.log(list);
						sendMessage();
						alert("카드결제 총 결제금액" + allprice);
					}

				});
				$("#back").click(function() {
					$("#box").css("scroll","top");
					$("#order").css("display","block");
					$("#cashtel").css("display","none");
				});
				$("#back2").click(function() {
					$("#box").css("scroll","top");
					$("#order").css("display","block");
					$("#kakaotel").css("display","none");
				});
			});
</script> -->
<script type="text/javascript" src="<c:url value="/resources/js/jquery.min.js"/>"></script>
<script type="text/javascript" src="<c:url value="/resources/js/jquery.ajax-cross-origin.min.js"/>"></script>
<script src="https://www.gstatic.com/firebasejs/5.9.3/firebase.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.8.4/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.8.4/firebase-auth.js"></script>
<script
	src="https://www.gstatic.com/firebasejs/5.9.3/firebase-database.js"></script>
</head>
<style>
#logo {
	text-align: center;
	font-weight: bold;
	font-size: 290%;
}

div a {
	color: rgb(255, 94, 24);
}

#box {
	border: 2px solid;
	border-radius: 10px;
	color: rgb(255, 94, 24);
	width: 90%;
	height: 1100px;
	margin: 0 auto;
	margin-top: 40px;
}

#box2 {
	border: 2px solid;
	color: rgb(255, 94, 24);
	width: 85%;
	height: 650px;
	margin: 0 auto;
	position: relative;
	margin-top: 70px;
	overflow: auto;
	-ms-overflow-style: none;
}

#box2::-webkit-scrollbar {
	display: none;
}

#box3::-webkit-scrollbar {
	display: none;
}

#box3 {
	border: 2px solid;
	color: rgb(255, 94, 24);
	width: 85%;
	height: 200px;
	margin: 0 auto;
	position: relative;
	margin-top: 20px;
	overflow: auto;
	-ms-overflow-style: none;
}

#click {
	background-color: rgb(255, 94, 24);
	color: white;
	width: 49.8%;
	float: left;
}

#click2 {
	background-color: rgb(255, 94, 24);
	color: white;
	width: 49.8%;
	float: right;
}

#click3 {
	width: 95%;
	text-align: center;
	margin: 0 auto;
}

.c1 {
	background-color: rgb(255, 94, 24);
	color: white;
	width: 22%;
	height: 50px;
	font-size: 120%;
	margin-top: 5px;
}

.food {
	width: 50%;
	height: 250px;
}

#foodlist {
	text-align: center;
	margin: 0 auto;
	margin-top: 30px;
}
.panel-title {
	padding-top: 1%;
	margin-left: 7.2%;
}
h3 {
	
}
</style>
<body>
	<input type="hidden" id="sessionEmail"
		value="${sessionScope.sessionid.email}">
	<input type="hidden" id="sessionPw"
		value="${sessionScope.sessionid.password}">
	<input type="hidden" id="sessionTruckCode"
		value="${sessionScope.seller.truck_code}">
	<input type="hidden" id="orderTarget"
		value="${requestScope.orderTarget}">
	<input type="hidden" id="ref">
	<div id="cuorder">
		<div id="logo">
			<a href="/project/rehome">현재 푸드트럭</a>
		</div>
		<div>
			<div id="box">
				<button id="click" class="btn">food</button>
				<button id="click2" class="btn">drink</button>
				<div id="order">
					<div id="box2">
						<div id="foodlist">
							<c:forEach var="s" items="${menulist}">
								<button class="btn food"></button>
								<p>${s.menu_name }</p>
								<p>${s.unit_price }</p>
								<input type="hidden" value="${s.menu_code }">
							</c:forEach>
						</div>
					</div>
					<h3 class="panel-title">주문목록</h3>
					<div id="box3" class="">
						<table class="table table-hover" id="">
							<thead>
								<tr>
									<th style="width: 30%">이름</th>
									<th style="width: 40%">수량</th>
									<th style="width: 30%">가격</th>
								</tr>
							</thead>
							<tbody>
							</tbody>
						</table>
					</div>
					<div style="text-align: right; margin-right: 10%;">
						<span style="font-size: 30px;">총 가격:</span><span
							style="font-size: 30px" id="allprice">0</span>
					</div>
					<div id="click3">
						<button id="card" class="btn c1">카드결제</button>
						<button id="cash" class="btn c1">현금결제</button>
						<button id="kakaopay" class="btn c1">카카오페이</button>
						<button id="cancle1" class="btn c1">취소</button>
					</div>
				</div>
				<div id="cashtel"style="display: none; text-align: center; width: 100%; margin-top: 50%; height: 50%;">
				<div style="display: inline-block; width: 90%; height: 35%;">
					<h3 style="">주문받으실 전화번호를 입력해주세요</h3>
					<input id="cashtelephone" type="tel" style="width: 100%;"><br>
					<button id="cashok" class="btn c1">확인</button>
					<button id="cashcancle" class="btn c1">취소</button>
					<button id="back" class="btn c1">주문추가</button>
				</div>
			</div>
			<div id="kakaotel"style="display: none; text-align: center; width: 100%; margin-top: 50%; height: 50%;">
				<div style="display: inline-block; width: 90%; height: 35%;">
					<h3 style="">주문받으실 전화번호를 입력해주세요</h3>
					<input id="kakaotelephone" type="tel" style="width: 100%;"><br>
					<button id="kakaohok" class="btn c1">확인</button>
					<button id="kakaocancle" class="btn c1">취소</button>
					<button id="back2" class="btn c1">주문추가</button>
				</div>
			</div>
			</div>
		</div>
	</div>
	<div id="seorder"></div>
	<script>
		var config = {
			apiKey : "AIzaSyDgw_gFc9MB7Rc8Z7WjJUOqeWT6YQOqvxU",
			authDomain : "fir-test-f3fea.firebaseapp.com",
			databaseURL : "https://fir-test-f3fea.firebaseio.com",
			projectId : "fir-test-f3fea",
			storageBucket : "fir-test-f3fea.appspot.com",
			messagingSenderId : "960564228551"
		};
		firebase.initializeApp(config);
		var _uid = null;
		var text;
		var email = '${sessionScope.sessionid.email}';
		console.log(email);
		var password = '${sessionScope.sessionid.password}';
		console.log(password);
		firebase.auth().signInWithEmailAndPassword(email, password);
	</script>
	<script type="text/javascript"
		src="<c:url value="/resources/js/seller/order.js"/>"></script>
</body>
</html>
