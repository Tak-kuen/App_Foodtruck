<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>당신의 푸드트럭</title>
<jsp:include page="../header/header.jsp"></jsp:include>
<link rel="stylesheet"
	href="<c:url value ="/resources/css/truck/truckinfo.css"/>" />
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=9df56b013af05d5db1fb3350de0a4265"></script>
<script type="text/javascript">

	$(document).ready(function() {
		$("#call").click(function() {
			location.href = "/project/truck/callForm";
		});
		$("#btn1").click(function() {
			$("#menu").css("visibility", "visible");
			$("#review, #truckinfo, #location, #event").css("visibility", "hidden");

		});
		$("#btn2").click(function() {
			$("#review").css("visibility","visible");
			$("#menu, #truckinfo, #location, #event").css("visibility","hidden");

		});
		$("#btn3").click(function() {
			$("#truckinfo").css("visibility","visible");
			$("#review, #menu, #location, #event").css("visibility","hidden");

		});
		$("#btn4").click(function() {
			$("#location").css("visibility","visible");
			$("#review, #truckinfo, #menu, #event").css("visibility","hidden");
			/* $("#location").show();
			$("#review, #truckinfo, #menu, #event").hide(); */

		});
		$("#btn5").click(function() {
			$("#event").css("visibility","visible");
			$("#review, #truckinfo, #location, #menu").css("visibility", "hidden");

		});
		$("#ride").click(function() {
			var check;

			if ($(this).text() == '탑승하기') {
				$(this).text('탑승중');
			} else {
				var truckname = $("#truckname").text();
				check = confirm(truckname + "을 하차하시겠습니까?");
				if (check == true) {
					$(this).text('탑승하기');
				}
			}
		});
		$(".star_rating a").click(function() {
			$(this).parent().children("a").removeClass("on");
			$(this).addClass("on").prevAll("a").addClass("on");
			return false;
		});
		$("#creatbtn").click(function(){
			$("#reviewwhole").show();
			$("#creatbtncancle").show();
			$("#creatbtn").hide();
		});
		$("#creatbtncancle").click(function(){
			$("#reviewwhole").hide();
			$("#creatbtncancle").hide();
			$("#creatbtn").show();
		});
	
	});
	

</script>
</head>
<body>
	<div id="with" class="col">
		<div id="height" class="col">
			<div style="float: left;" class="col">
				<img
					src='${pageContext.request.contextPath}/resources/image/food1.png'>
				<div id="cross">
					<br>
					<h1 id="truckname">${tlist.brandname }</h1>
					<br>
					<button id="ride">탑승하기</button>
					<button id="call">호출하기</button>
				</div>
			</div>
			<div id="btngroup"
				style="margin: 0 auto; margin-top: 200px; text-align: center;" class="col">
				<button id="btn1" class="col-md-2">메뉴</button>
				<button id="btn2" class="col-md-2">리뷰 및 평점</button>
				<button id="btn3" class="col-md-2">트럭 정보</button>
				<button id="btn4" class="col-md-2">실시간 위치</button>
				<button id="btn5" class="col-md-2">이벤트</button>
			</div>
			<div id="menu" class="container">
				<div class="row">
					<div  class="col-md-3">
						<img class="img"
							src='${pageContext.request.contextPath}/resources/image/food1.png'>
						<div class="menuname"><br> 핫도그 <br> 3000원</div>
					</div>
					<div class="col-md-3">
						<img class="img"
							src='${pageContext.request.contextPath}/resources/image/don.jpg'>
						<div class="menuname"><br> 돈까스 <br> 5000원</div>
					</div>
					<div class="col-md-3">
						<img class="img"
							src='${pageContext.request.contextPath}/resources/image/food2.jpg'>
						<div class="menuname"><br> 핫도그 <br> 3000원</div>
					</div>
					<div  class="col-md-3">
						<img class="img"
							src='${pageContext.request.contextPath}/resources/image/food2.jpg'>
						<div class="menuname"><br> 핫도그 <br> 3000원</div>
					</div>
					<div class="col-md-3">
						<img class="img"
							src='${pageContext.request.contextPath}/resources/image/food3.jpg'>
						<div class="menuname"><br> 핫도그 <br> 3000원</div>
					</div>
					<div class="col-md-3">
						<img class="img"
							src='${pageContext.request.contextPath}/resources/image/food1.png'>
						<div class="menuname"><br> 핫도그 <br> 3000원</div>
					</div>
					
				</div>

			</div>


			<div id="review" style="visibility:hidden;">
				<div class="col-md-12">
					<div id="creatbtngroup">
						<button id="creatbtn">리뷰작성하기</button>
						<button id="creatbtncancle" style="display:none;">리뷰작성취소</button>
					</div>
					<div>
						<h4>이거슨 닭인가!! 치킨인가!!<span style="color: red;">닭치고닭꼬치</span></h4>
						<h5 style="color: blue;">4</h5>
						<p class="star_rating">
							<a href="#" class="on">★</a>
							<a href="#" class="on">★</a> 
							<a href="#" class="on">★</a>
							<a href="#" class="on">★</a>
							<a href="#">★</a>
						</p>
					</div>
				</div>
				<div id="reviewwhole" class="col-md-12" style="display: none;">
				<div id="star" class="col">
				<div id="starcontent">
				<h6>평점을 매겨주세요.</h6>
				<p class="star_rating">
							<a href="#">★</a>
							<a href="#">★</a> 
							<a href="#">★</a>
							<a href="#">★</a>
							<a href="#">★</a>
						</p>
						</div>
				</div>
				<input id="reviewcotent" placeholder="리뷰를 작성해주세요."></input>
				<div id="reviewbtn">
				<button id="credit">확인</button>
				<button id="imageplus">사진첨부</button>
				</div>

				</div>
			
				<div class="col-md-12">
				
				<div class="reviewbar">
				<p style="line-height: 10px;">tmst7****님 &nbsp;&nbsp;  1hour ago</p>
				</div>
				<div class="reviewbar2">
				<p>평점
							<a class="on">★</a>
							<a class="on">★</a> 
							<a class="on">★</a>
							<a class="on">★</a>
							<a>★</a>
						</p>
							</div>
							<div id="content">
							<p>너무 맛있어요!!! JMT!!!!! 다시 사먹을만한 맛!!! 추천해영~~!!!</p>
							</div>	
							
						
				</div>
				<div class="col-md-12">
				
				<div class="reviewbar">
				<p style="line-height: 10px;">788oyuu****님 &nbsp;&nbsp;  7days ago</p>
				</div>
				<div class="reviewbar2">
				<p>평점
							<a class="on">★</a>
							<a class="on">★</a> 
							<a class="on">★</a>
							<a class="on">★</a>
							<a>★</a>
						</p>
							</div>
							<div id="content">
							<p>줄서서 먹을만한 집은 아닌듯..</p>
							</div>	
							
						
				</div>
				<div class="col-md-12">
				
				<div class="reviewbar">
				<p style="line-height: 10px;">BSEg****님 &nbsp;&nbsp;  1month ago</p>
				</div>
				<div class="reviewbar2">
				<p>평점
							<a class="on">★</a>
							<a class="on">★</a> 
							<a class="on">★</a>
							<a>★</a>
							<a>★</a>
						</p>
							</div>
							<div id="content">
							<p>그닥 맛있진 않네요. 그냥저냥 먹을만 해요....</p>
							</div>	
							
						
				</div>
	</div>


			<div id="truckinfo" style="visibility:hidden;">
				<div id="truckinfohead">
				<div id="truckruntime">
					<h3>트럭정보</h3>
				</div>
				<div id="cacheinfo">
					<h3>결제정보</h3>
				</div>
				<div id="managerinfo">
					<h3>사업자정보</h3>
				</div>
				</div>
				<div id="truckinfobody">
				<div id="truckruntime1"><h3>영업시간: ${tlist.hours }</h3></div>
				<div id="cacheinfo1"><h3>결제수단: 현금, 카드, 모바일페이 ${tlist.paytype }</h3></div>
				<div id="managerinfo1"><h3>상호명: ${tlist.brandname}
					<br>사업자등록번호 ${tlist.crn }</h3>
				</div>
				</div>
			</div>
			<div id="location" style="visibility:hidden;">
			<div id="map" >
				<%-- <jsp:include page="location.jsp"></jsp:include> --%>
			</div>  
			<script>
		var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
		mapOption = {
			center : new daum.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
			level : 3
		// 지도의 확대 레벨
		};

		var map = new daum.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

		// 마커가 표시될 위치입니다 
		var markerPosition = new daum.maps.LatLng(33.450701, 126.570667);

		// 마커를 생성합니다
		var marker = new daum.maps.Marker({
			position : markerPosition
		});

		// 마커가 지도 위에 표시되도록 설정합니다
		marker.setMap(map);

		// 아래 코드는 지도 위의 마커를 제거하는 코드입니다
		// marker.setMap(null);
	</script>
	<div id="locationdetail" style="text-align:left;">
		지하철<br>
		-1호선을 타고 월평역에서 하차하여 약 20분정도 걸어오셔야 합니다.
		<br>
		<br>


		버스<br>
-유성구청 정류장(도보1분거리) : 간선104, 지석121, <br> 
-마을5한빛아파트 정류장(도보5분거리) : 간선105, 115, 지선117, 급행1002,<br> 
-마을1유림공원 정류장(도보10분거리) : 간선102, 106, 108, 113, 706



		
	</div>
	</div>
			<div id="event" style="visibility:hidden;">
			<div id="eventborder">
				 <div id="eventbody">
				 	<img id="eventimage" src='${pageContext.request.contextPath}/resources/image/food10.PNG'>
				 </div>
				 <div id="eventcontent">
				 <br>
				 	<h2><span style="color: #C90000;">4월은 꼬치의 계절!</span></h2><br>
				 	<h5><span style="color: #FF0000;">더욱 커진 닭다리살의 꼬치를 지금 만나보세요!</span> </h5><br>
				 	<h6><span style="color: #FF0000;">2019.04.06 ~ 04.30</span></h6><br>
				 </div>
 			</div>
 			<div id="eventborder">
				 <div id="eventbody">
				 	<img id="eventimage" src='${pageContext.request.contextPath}/resources/image/food101.jpg'>
				 </div>
				 <div id="eventcontent">
				 <br>
				 	<h2><span style="color: #C90000;">NEW 떡볶이와 닭꼬치를 한번에!</span></h2><br>
				 	<h5><span style="color: #FF0000;">더욱 커진 닭다리살과 디지게 매운 떡볶이를 한번에 만나보세요!</span> </h5><br>
				 	<h6><span style="color: #FF0000;">2019.04.06 ~ 04.30</span></h6><br>
				 </div>
 			</div>
		</div>
	</div>
	</div>
	<script>
	var markerPosition  = new daum.maps.LatLng(33.450701, 126.570667); 

	// 이미지 지도에 표시할 마커입니다
	// 이미지 지도에 표시할 마커는 Object 형태입니다
	var marker = {
	    position: markerPosition
	};

	var staticMapContainer  = document.getElementById('map'), // 이미지 지도를 표시할 div  
	    staticMapOption = { 
	        center: new daum.maps.LatLng(33.450701, 126.570667), // 이미지 지도의 중심좌표
	        level: 3, // 이미지 지도의 확대 레벨
	        marker: marker // 이미지 지도에 표시할 마커 
	    };    

	// 이미지 지도를 생성합니다
	var map = new daum.maps.StaticMap(staticMapContainer, staticMapOption);
	
	</script>
	
</body>
</html>
