/**
 * 
 */
var list = new Array();
var _uid = null;
var text;
let sock = new SockJS("http://39.127.7.90:8080/m.seorder");
sock.onmessage = onMessage;
sock.onclose = onClose;

// 서버로부터 메시지를 받았을 때
function onMessage(msg) {
}

// 서버와 연결을 끊었을 때
function onClose(evt) {
	$("#data").append("연결 끊김");
}


$(document).ready(function () {

	var email = localStorage['app_id'] + "";
	alert(encodeURI(email));
	var password = localStorage['app_pw'] + "";
	alert(password);
	var truck_code = localStorage['truck_code'] + "";
	alert(truck_code);
	$.ajax({
		type: "post",
		url: "http://39.127.7.90:8080/m.seller/cuorder",
		data: JSON.stringify({
			email: email
		}),
		contentType: 'application/json; charset="UTF-8"',
		success: function (data) {
			var json = JSON.parse(data);
			console.log(json);
			console.log(typeof json);
			var foodlist = $('#foodlist');
			for (var menu in json) {
				console.log(json[menu]);
				var food = $('<div></div>').addClass('foods').appendTo(foodlist)
				var button = $('<button></button>').addClass('btn food').appendTo(food);
				var img_url = json[menu].menu_surl;
				img_url = img_url.replace(/\\/gi, '/');
				img_url = "http://39.127.7.90:8080/resources/img/upload/" + img_url;
				console.log(img_url);
				$('<img>').addClass("btn foodImg").attr('src', img_url).appendTo(button);
				$('<p></p>').text(json[menu].menu_name).appendTo(food);
				$('<p></p>').text(json[menu].unit_price).appendTo(food);
				$('<input>').attr('type', 'hidden').val(json[menu].menu_code).appendTo(food);
			}
		},
		error: function (err) {
			alert(JSON.stringify(err));
		}
	});
	var is = false;
	var alltotal_price = 0;
	$("#foodlist").on('click', "button", function () {
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
				$("#" + k).html("<td>" + list[i].name + "</td><td>" + list[i].amount + "</td><td>" + list[i].total_price + "</td>");
				console.log($("#" + k).html());
				alltotal_price += parseInt(total_price);
				$("#allprice").html(alltotal_price);
				is = true; // 상품이 있기때문에 true 로 바꿔서 추가못하게 함
			}
		}
		if (!is) { // 상품이 없어서 추가하고 어팬드
			var temp = {
				menu_code: menu_code,
				amount: amount,
				total_price: parseInt(total_price),
				name: name
			};
			list.push(temp);
			var k = temp.menu_code;
			alltotal_price += parseInt(temp.total_price);
			$("#allprice").html(alltotal_price);
			$("tbody").append("<tr id='" + k + "'><td>" + temp.name + "</td><td>" + temp.amount + "</td><td>" + temp.total_price + "</td>");
		}
		if (is) { // 초기화
			// alert(is);
			is = false;
		}
	});
	$("#cancle1").click(function () {
		$("tbody").empty();
		var a = $("tbody"); // tebody 태그 없앰;
		alltotal_price = 0;
		$("#allprice").html(alltotal_price);
		list = new Array(); // list초기화
	});
	$("#kakaopay").click(function () {
		if (typeof list[0] == 'undefined') {
			alert("주문목록이업서여");
		} else {
			$("#order").css("display", "none");
			$("#kakaotel").css("display", "block");
			console.log(list);
			//alert("주문등록 완료!");
		}
	});
	$("#cash").click(function () {
		if (typeof list[0] == 'undefined') {
			alert("주문목록이업서여");
		} else {
			$("#order").css("display", "none");
			$("#cashtel").css("display", "block");
			console.log(list);
			//alert("주문등록 완료!");
		}
	});
	$("#card").click(function () {
		if (typeof list[0] == 'undefined') {
			alert("주문목록이업서여");
		} else {
			$("#order").css("display", "none");
			$("#cashtel").css("display", "block");
			console.log(list);
			//alert("주문등록 완료!");
		}
	});

	$("#cashok").click(function () {
		var payment_telephone = $("#cashtelephone").val();
		var date = new Date();
		var year = date.getFullYear().toString().substr(2); var month = date.getMonth() + 1;
		var day = date.getDate(); var hour = date.getHours();
		var minute = date.getMinutes(); var sec = date.getSeconds();
		if ((day + '').length < 2) day = "0" + day;
		if ((month + '').length = 1) month = "0" + month;
		console.log(date.toString());
		var sysdate = year + month + '_' + day + '_' + hour + '_' + minute + '_' + sec;
		for (var a = 0; a < list.length; a++) {
			list[a].seller_email = localStorage['app_id'];
			list[a].payment_class = 1;
			list[a].truck_code = localStorage['truck_code'];
			list[a].payment_telephone = payment_telephone;
			list[a].payed = 'not';
			list[a].payment_regdate = sysdate;
		}
		var regdate=list[0].payment_regdate;
		var forApp = {
			[regdate] : list
		};
		var telephone=list[0].payment_telephone;
		var sendObj = {
			[telephone]:forApp
		};
		sock.send(JSON.stringify(sendObj));
		// $.ajax({
		// 	type: "post",
		// 	url: "http://39.127.7.90:8080/m.pay/insertOrder",
		// 	data: JSON.stringify(list),
		// 	contentType: "application/json; chartset=UTF-8",
		// 	success: function (data) {
		// 		var json = JSON.parse(data);
		// 		alert(json.result);
		// 	},
		// 	error: function (err) {
		// 		alert(JSON.stringify(err));
		// 	}
		// });
		$("#cashtelephone").val("");
		$("tbody").empty();
		var a = $("tbody"); //tebody 태그 없앰;
		alltotal_price = 0;
		$("#allprice").html(alltotal_price);
		list = new Array(); //list초기화
		$("#box").css("scroll", "top");
		$("#order").css("display", "block");
		$("#cashtel").css("display", "none");
	});

	$("#kakaohok").click(function () {
		var payment_telephone = "" + $("#kakaotelephone").val();
		var date = new Date();
		var year = date.getFullYear().toString().substr(2); var month = date.getMonth() + 1;
		var day = date.getDate(); var hour = date.getHours();
		var minute = date.getMinutes(); var sec = date.getSeconds();
		if ((day + '').length < 2) day = "0" + day;
		if ((month + '').length = 1) month = "0" + month;
		console.log(date.toString());
		var sysdate = year + month + '_' + day + '_' + hour + '_' + minute + '_' + sec;

		for (var a = 0; a < list.length; a++) {
			list[a].seller_email = localStorage['app_id'];
			list[a].payment_class = 0;
			list[a].truck_code = localStorage['truck_code'];
			list[a].payment_telephone = payment_telephone;
			list[a].payed = 'not';
			list[a].payment_regdate = sysdate;
		}
		var regdate=list[0].payment_regdate;
		var forApp = {
			[regdate] : list
		};
		var telephone=list[0].payment_telephone;
		var sendObj = {
			[telephone]:forApp
		};
		sock.send(JSON.stringify(sendObj));
		// $.ajax({
		// 	type: "post",
		// 	url: "http://39.127.7.90:8080/m.pay/insertOrder",
		// 	data: JSON.stringify(list),
		// 	contentType: "application/json; chartset=UTF-8",
		// 	success: function (data) {
		// 		var json = JSON.parse(data);
		// 		alert(json.result);
		// 	},
		// 	error: function (err) {
		// 		alert(JSON.stringify(err));
		// 	}
		// });
		$("#kakaotelephone").val("");
		$("tbody").empty();
		var a = $("tbody"); //tebody 태그 없앰;
		alltotal_price = 0;
		$("#allprice").html(alltotal_price);
		list = new Array(); //list초기화
		$("#box").css("scroll", "top");
		$("#order").css("display", "block");
		$("#kakaotel").css("display", "none");
	});
	$("#back").click(function () {
		$("#cashtelephone").val("");
		$("#box").css("scroll", "top");
		$("#order").css("display", "block");
		$("#cashtel").css("display", "none");
	});
	$("#back2").click(function () {
		$("#kakaotelephone").val("");
		$("#box").css("scroll", "top");
		$("#order").css("display", "block");
		$("#kakaotel").css("display", "none");
	});

	$("#kakaocancle").click(function () {
		$("#kakaotelephone").val("");
		$("tbody").empty();
		var a = $("tbody"); //tebody 태그 없앰;
		alltotal_price = 0;
		$("#allprice").html(alltotal_price);
		list = new Array(); //list초기화
		$("#box").css("scroll", "top");
		$("#order").css("display", "block");
		$("#kakaotel").css("display", "none");


	});
	$("#cashcancle").click(function () {
		$("#cashtelephone").val("");
		$("tbody").empty();
		var a = $("tbody"); //tebody 태그 없앰;
		alltotal_price = 0;
		$("#allprice").html(alltotal_price);
		list = new Array(); //list초기화
		$("#box").css("scroll", "top");
		$("#order").css("display", "block");
		$("#cashtel").css("display", "none");
	});


});
