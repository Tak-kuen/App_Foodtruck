/**
 * 
 */
var list = new Array();
$(document).ready(function() {
	var is = false;
	var alltotal_price = 0;
	$("#foodlist").on('click',"button",function() {
		// var a=$(this).find('p');
		var a = $(this);
		// var name = a.html();
		var name = a.next().html();
		var total_price = a.nextAll().eq(1).html();
		var menu_code = a.nextAll().eq(2).val();
		var amount = 1;
		// 클릭한 상품이 현재 목록에 있는지 확인
		for (var i = 0; i < list.length; i++) {
			if (list[i].menu_code == menu_code) { // 있으면
													// 수량만
													// 더하기
				list[i].amount += 1;
				list[i].total_price = list[i].amount * total_price;
				var k = list[i].menu_code;
						// 해당 값 수정
				console.log($("#" + k).html());
				$("#" + k).html("<td>"+list[i].name+"</td><td>"+list[i].amount+"</td><td>"+ list[i].total_price+"</td>");
				console.log($("#" + k).html());
				alltotal_price += parseInt(total_price);
				$("#allprice").html(alltotal_price);
				is = true; // 상품이 있기때문에 true 로 바꿔서 추가못하게 함
			}
		}
		if (!is) { // 상품이 없어서 추가하고 어팬드
			var temp = {
				menu_code : menu_code,
				amount : amount,
				total_price : parseInt(total_price),
				name : name
			};
			list.push(temp);
			var k = temp.menu_code;
			alltotal_price += parseInt(temp.total_price);
			$("#allprice").html(alltotal_price);
			$("tbody").append("<tr id='"+k+"'><td>" + temp.name+ "</td><td>" + temp.amount+ "</td><td>" + temp.total_price + "</td>");
		}
		if (is) { // 초기화
			// alert(is);
			is = false;
		}
	});
	$("#cancle1").click(function() {
		$("tbody").empty();
			var a = $("tbody"); // tebody 태그 없앰;
			alltotal_price = 0;
			$("#allprice").html(alltotal_price);
			list = new Array(); // list초기화
	});
	$("#kakaopay").click(function() {
		if (typeof list[0] == 'undefined') {
			alert("주문목록이업서여");
		} else {
			$("#order").css("display","none");
			$("#kakaotel").css("display","block");
			console.log(list);
			//alert("주문등록 완료!");
		}			
	});
	$("#cash").click(function() {
		if (typeof list[0] == 'undefined') {
			alert("주문목록이업서여");
		} else {
			$("#order").css("display","none");
			$("#cashtel").css("display","block");
			console.log(list);
			//alert("주문등록 완료!");
		}
	});
	$("#card").click(function() {
		if (typeof list[0] == 'undefined') {
			alert("주문목록이업서여");
		} else {
			$("#order").css("display","none");
			$("#cashtel").css("display","block");
			console.log(list);
			//alert("주문등록 완료!");
		}
	});
	
	$("#cashok").click(function(){
		var payment_telephone = $("#cashtelephone").val();
		var date = new Date();
		var year=date.getFullYear().toString().substr(2);	var month=date.getMonth()+1;
		var day=date.getDate();	var hour=date.getHours();
		var minute=date.getMinutes(); var sec=date.getSeconds();
		if((day+'').length<2)	day="0"+day;
		if((month+'').length=1)	month="0"+month;
		console.log(date.toString());
		var sysdate=year+month+'_'+day+'_'+hour+'_'+minute+'_'+sec;
		for(var a=0 ;a< list.length; a++) {
			list[a].payment_class=1;
			list[a].truck_code=$('#sessionTruckCode').val();
			list[a].payment_telephone=payment_telephone;
			firebase.database().ref('PaymentTest2/'+firebase.auth().currentUser.uid+'/'+list[0].payment_telephone +'/'+sysdate+'/'+a).set(list[a]);
		}
		$("#cashtelephone").val("");
		$("tbody").empty();
		var a = $("tbody"); //tebody 태그 없앰;
		alltotal_price = 0;
		$("#allprice").html(alltotal_price);
		list = new Array(); //list초기화
		$("#box").css("scroll","top");
		$("#order").css("display","block");
		$("#cashtel").css("display","none");
	});
	
	$("#kakaohok").click(function(){
		var payment_telephone =""+$("#kakaotelephone").val();
		var date = new Date();
		var year=date.getFullYear().toString().substr(2);	var month=date.getMonth()+1;
		var day=date.getDate();	var hour=date.getHours();
		var minute=date.getMinutes(); var sec=date.getSeconds();
		if((day+'').length<2)	day="0"+day;
		if((month+'').length=1)	month="0"+month;
		console.log(date.toString());
		var sysdate=year+month+'_'+day+'_'+hour+'_'+minute+'_'+sec;
		
		for(var a=0 ;a< list.length; a++) {
			list[a].payment_class=0;
			list[a].truck_code=$('#sessionTruckCode').val();
			list[a].payment_telephone=payment_telephone;
			firebase.database().ref('PaymentTest2/'+firebase.auth().currentUser.uid+'/'+list[0].payment_telephone +'/'+sysdate+'/'+a).set(list[a]);
		}
		$("#kakaotelephone").val("");
		$("tbody").empty();
		var a = $("tbody"); //tebody 태그 없앰;
		alltotal_price = 0;
		$("#allprice").html(alltotal_price);
		list = new Array(); //list초기화
		$("#box").css("scroll","top");
		$("#order").css("display","block");
		$("#kakaotel").css("display","none");
	});
	$("#back").click(function() {
		$("#cashtelephone").val("");
		$("#box").css("scroll","top");
		$("#order").css("display","block");
		$("#cashtel").css("display","none");
	});
	$("#back2").click(function() {
		$("#kakaotelephone").val("");
		$("#box").css("scroll","top");
		$("#order").css("display","block");
		$("#kakaotel").css("display","none");
	});
	
	$("#kakaocancle").click(function() {
		$("#kakaotelephone").val("");
		$("tbody").empty();
		var a = $("tbody"); //tebody 태그 없앰;
		alltotal_price = 0;
		$("#allprice").html(alltotal_price);
		list = new Array(); //list초기화
		$("#box").css("scroll","top");
		$("#order").css("display","block");
		$("#kakaotel").css("display","none");
		
		
	});
	$("#cashcancle").click(function() {
		$("#cashtelephone").val("");
		$("tbody").empty();
		var a = $("tbody"); //tebody 태그 없앰;
		alltotal_price = 0;
		$("#allprice").html(alltotal_price);
		list = new Array(); //list초기화
		$("#box").css("scroll","top");
		$("#order").css("display","block");
		$("#cashtel").css("display","none");
	});
	
	
});