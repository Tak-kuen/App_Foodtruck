<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Bootstrap Product list for Ecommerce Website</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link rel="stylesheet" href="<c:url value="/resources/css/seller/order/seorder.css"/>">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.9.3/firebase.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.8.4/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.8.4/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.9.3/firebase-database.js"></script>
</head>
<body>
	<div class="wrap">
	</div>
	<button id="test">테스트</button>
	<input type="hidden" id="bfss" value="">
</body>
<script>
var first=true;
var config = {
	apiKey : "AIzaSyDgw_gFc9MB7Rc8Z7WjJUOqeWT6YQOqvxU",
	authDomain : "fir-test-f3fea.firebaseapp.com",
	databaseURL : "https://fir-test-f3fea.firebaseio.com",
	projectId : "fir-test-f3fea",
	storageBucket : "fir-test-f3fea.appspot.com",
	messagingSenderId : "960564228551"
};
firebase.initializeApp(config);
var _uid='${requestScope._uid}';
console.log(_uid);
var beforeSnapshot='';

var forDblist=new Array();
var list =[];
var isChecked=false;
function pay(a){
	var result = confirm('결제확인하시겠습니까?');
	if (result) {
		var parent_node=$('#'+a).parent();
//		console.log(parent_node.html());
//		console.log('===========');
//		console.log(parent_node.children().eq(1).html());
		var payment_list=parent_node.children().eq(1);
		//console.log(a.html());
		$("#"+a).css("background-color", "red");
		var telephone = $("#"+a).next().val();
		var truckcode = $("#"+a).next().next().val();
		telephone=telephone.substr(1);
		telephone=telephone.substr(0,telephone.length-1);
//		console.log(telephone +'//' + truckcode);
		var pay_length=payment_list.children().length;
		console.log(pay_length);
		for(var i=0; i<pay_length;i++) {
			//<p>닭강정2 1 3400 과 hidden 두개</p>
			var menucode=payment_list.children().eq(i);
			var menu_code=menucode.find('.insert_menu_code');
			var payment_class=menu_code.next();
			var total_price=menu_code.prev();
			var amount=total_price.prev();
			var pay_list={
					truck_code:truckcode,
					payment_telephone:telephone,
					menu_code:menu_code.val(),
					payment_class:parseInt(payment_class.val()),
					total_price:parseInt(total_price.text()),
					amount:parseInt(amount.text())
			};
			list.push(pay_list);
		}
		console.log(list);
 		$.ajax({
			type:"POST",
			url:"/project/pay/insertPayment",
			data:JSON.stringify(list),
			contentType:"application/json;charset=UTF-8",
			traditional:true,
			success:function(data) {
				console.log('success');
			},error:function(err) {
				console.log(err);
			}
		});
 		isChecked=true;
	}
}
function release(a) {
	var released = confirm("출고확인하시겠습니까?");
	if(released && isChecked) {
		var telephone = $("#"+a).next().val();
		telephone=telephone.substr(1);
		telephone=telephone.substr(0,telephone.length-1);
		var truckcode = $("#"+a).next().next().val();
		var date = new Date();
		var year=date.getFullYear().toString().substr(2);	var month=date.getMonth()+1;
		var day=date.getDate();	var hour=date.getHours();
		var minute=date.getMinutes(); var sec=date.getSeconds();
		if((day+'').length<2)	day="0"+day;
		if((month+'').length=1)	month="0"+month;
		console.log(date.toString());
		var sysdate=year+month+day+"";
		var parent_node=$('#'+a).parent();
		var payment_list=parent_node.children().eq(1);
		var menucode=payment_list.children().eq(0);
		var menu_code=menucode.find('.insert_menu_code');
		var payment_class=menu_code.next();
		var data={
				truck_code : truckcode,
				payment_telephone : telephone,
				payment_code: sysdate,
				payment_class: parseInt(payment_class.val()) 
		};
		$.ajax({
			type:"POST",
			url:"/project/pay/updatePayment",
			data:JSON.stringify(data),
			contentType:"application/json;charset=UTF-8",
			traditional:true,
			success:function(data) {
				console.log('success');
			},error:function(err) {
				console.log(err);
			}
		});
		var delref=firebase.database().ref('/PaymentTest2/'+ _uid +'/'+telephone+'/'+a);
		delref.remove();
	}else if(!isChecked) {
		alert("결제확인을 먼저 하십시오");
	}
}

$(function() {
	var isfirst = true;
	var ref=firebase.database().ref('/PaymentTest2/'+ _uid +'/').limitToFirst(15);
	ref.once('value').then(function(snapshot) {
		first=false;
	}).catch(function(err) {
		console.log(err.errorMessage);
	});
	var index;
	ref.on('value',function(snapshot) {
		if(isfirst){
			var result=snapshot.val();
			for(var menus in result) {
				console.log('=====결과를 전화번호별로 구분=====');
				console.log(menus);
				console.log(result[menus]);
				var orderList=result[menus];
				
				for(var order in orderList) {
					console.log('=======전화번호별 거래내용들을 보여줌(같은번호로 했을떄 한개만)=======');
					console.log(orderList[order]);//전화번호별 거래내역
					console.log("'"+order+"'");//전화번호
					var order_index=order_index=orderList[order].length;//한사람당 주문한 제품개수
					console.log(order_index);
					$('.wrap').append('<div id="list" class="list" style=""><div class="head"><h4>'+orderList[order][0].payment_telephone+'</h4><span class="num">01</span> <span class="">주문시간</span><div style="margin-top: 15%;"><span>경과시간</span></div></div><div id="'+orderList[order][0].payment_telephone+'" class="menu"style="height: 140px; overflow-y: scroll; overflow-x: hidden;"></div><button id="'+order+'"  onclick="pay(\''+order+'\')" class="pay">결제확인</button><input type="hidden" value="\''+orderList[order][0].payment_telephone+'\'"><input type="hidden" value="${sessionScope.seller.truck_code }"><button class="release" onclick="release(\''+order+'\')">출고확인</button></div>');			
					if(order_index >1) {
						for(var i=0;i<order_index;i++) {			
							$('#'+orderList[order][0].payment_telephone+'').append('<p><span>'+orderList[order][i].name+'</span>&nbsp;<span>'+orderList[order][0].amount+'</span>&nbsp;<span>'+orderList[order][i].total_price+'</span><input type="hidden" class="insert_menu_code" value="'+orderList[order][i].menu_code+'"><input type="hidden" class="insert_payment_class" value="'+orderList[order][i].payment_class+'"></p>');
/* 							$('.menu').append('<span class="orderInfo">'+orderList[order][i].total_price+'</span><br/>');
							$('.menu').append('<span class="orderInfo">'+orderList[order][i].payment_telephone+'</span><br/>'); */
						}	
					}else{
						$('#'+orderList[order][0].payment_telephone+'').append('<p><span>'+orderList[order][i].name+'</span>&nbsp;<span>'+orderList[order][0].amount+'</span>&nbsp;<span>'+orderList[order][i].total_price+'</span><input type="hidden" class="insert_menu_code" value="'+orderList[order][i].menu_code+'"><input type="hidden" class="insert_payment_class" value="'+orderList[order][i].payment_class+'"></p>');
/* 						$('.menu').append('<span class="orderInfo">'+orderList[order][0].total_price+'</span><br/>');
						$('.menu').append('<span class="orderInfo">'+orderList[order][0].payment_telephone+'</span><br/>');	 */
					}
					break;
				}		
			}
			isfirst=false;
		}else{
			$('.wrap').html("");
			var result=snapshot.val();
			for(var menus in result) {
				console.log('=====결과를 전화번호별로 구분=====');
				console.log(menus);
				console.log(result[menus]);
				var orderList=result[menus];
				
				for(var order in orderList) {
					console.log('=======전화번호별 거래내용들을 보여줌(같은번호로 했을떄 한개만)=======');
					console.log(orderList[order]);//전화번호별 거래내역
					console.log(order);//전화번호
					var order_index=order_index=orderList[order].length;//한사람당 주문한 제품개수
					
					console.log(order_index);
					$('.wrap').append('<div id="list" class="list" style=""><div class="head"><h4>'+orderList[order][0].payment_telephone
							+'</h4><span class="num">01</span> <span class="">주문시간</span><div style="margin-top: 15%;"><span>경과시간</span></div></div><div id="'
							+orderList[order][0].payment_telephone
							+'" class="menu"style="height: 140px; overflow-y: scroll; overflow-x: hidden;"></div><button id="'+order
							+'"  onclick="pay(\''+order+'\')" class="pay">결제확인</button><input type="hidden" value="\''
							+orderList[order][0].payment_telephone+'\'"><input type="hidden" value="${sessionScope.seller.truck_code }"><button class="release"  onclick="release(\''+order+'\')">출고확인</button></div>');
					if(order_index >1) {
						for(var i=0;i<order_index;i++) {
							$('#'+orderList[order][0].payment_telephone+'').append('<p><span>'+orderList[order][i].name+'</span>&nbsp;<span>'+orderList[order][0].amount+'</span>&nbsp;<span>'+orderList[order][i].total_price+'</span><input type="hidden" class="insert_menu_code" value="'+orderList[order][i].menu_code+'"><input type="hidden" class="insert_payment_class" value="'+orderList[order][i].payment_class+'"></p>');
/* 							$('.menu').append('<span class="orderInfo">'+orderList[order][i].total_price+'</span><br/>');
							$('.menu').append('<span class="orderInfo">'+orderList[order][i].payment_telephone+'</span><br/>'); */
						}	
					}else{
						$('#'+orderList[order][0].payment_telephone+'').append('<p><span>'+orderList[order][i].name+'</span>&nbsp;<span>'+orderList[order][0].amount+'</span>&nbsp;<span>'+orderList[order][i].total_price+'</span><input type="hidden" class="insert_menu_code" value="'+orderList[order][i].menu_code+'"><input type="hidden" class="insert_payment_class" value="'+orderList[order][i].payment_class+'"></p>');
/* 						$('.menu').append('<span class="orderInfo">'+orderList[order][0].total_price+'</span><br/>');
						$('.menu').append('<span class="orderInfo">'+orderList[order][0].payment_telephone+'</span><br/>');	 */
					}
					break;
				}		
			}
		}
	});
});
</script>
</html>
