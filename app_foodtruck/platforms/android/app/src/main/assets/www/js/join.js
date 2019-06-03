//var config = {
//	apiKey : "AIzaSyDgw_gFc9MB7Rc8Z7WjJUOqeWT6YQOqvxU",
//	authDomain : "fir-test-f3fea.firebaseapp.com",
//	databaseURL : "https://fir-test-f3fea.firebaseio.com",
//	projectId : "fir-test-f3fea",
//	storageBucket : "fir-test-f3fea.appspot.com",
//	messagingSenderId : "960564228551"
//};
//firebase.initializeApp(config);
function ck(query) {
	var isTrue = false;
	if (query.email == "") {
		alert("이메일을 입력해주세요");
		isTrue = false;
		return false;
	} else if (query.password == "") {
		alert("비밀번호를 입력하세요");
		isTrue = false;
		return false;
	} else if (query.nickname == "") {
		alert("닉네임을 입력해주세요");
		isTrue = false;
		return false;
	} else if (query.telephone == "") {
		alert("전화번호를 입력해주세요");
		isTrue = false;
		return false;
	}
	if (!isTrue) {
		$.ajax({
			url : "http://39.127.7.90:8080/m.login/",
			type : "post",
			data : JSON.stringify(query),
			contentType:"application/json; chartset=UTF-8",
			success : function(data) {
				if ("email" == data) {
					alert("사용중인 이메일 입니다");
					return false;
				} else if ("nicname" == data) {
					alert("사용중인 닉네임입니다");
					return false;
				} else if("telephone" ==data) {
					alert('등록된 전화번호입니다');
					return false;
				} else {
					
				}
			},error:function(err) {
				alert(JSON.stringify(err));
			}
		});
	return true;	
	}
}
$(function() {
	var init=function() {
		$('#navbar').load("../header/header.html");
	}
	init();
	$('#register').click(function() {
		var nickname=$("#nickname_fd").val();
		alert(nickname);
		var query = {
			email : $('#email').val(),
			nickname : $('#nickname_fd').val(),
			telephone : $('#telephone').val(),
			password:$('#password').val()
		};
		console.log(query);
		ck(query);
		$.ajax({
			type:"post",
			url:"http://39.127.7.90:8080/m.login/insert",
			contentType:"application/json; chartset=UTF-8",
			data:JSON.stringify(query),
			success:function(){
				alert("등록완료");
			},
			error:function(err) {
				alert("파베등록오류 " + JSON.stringify(err));
			}
		});
	});
});
// 원본 소스
//var afterEmailAndNicknameCheck;
//function toggleSignIn() {
//	if(firebase.auth().currentUser) {
//		firebase.auth().signOut();
//	}else {
//		var email=$('#email').val();
//		var password=$('#password').val();
//		if(email.length<4) {
//			alert('이메일을 입력하세요');
//			return;
//		}
//		if(password.length<4) {
//			alert('비밀번호를 입력하세요');
//			return;
//		}
//		firebase.auth().signInWithEmailAndPassword(email,password).catch(function(err) {
//			var errorCode=err.code;
//			var errorMessage=err.message;
//			if(errorCode=='auth/weak-password') {
//				alert('비밀번호 조건을 지켜주세요');
//			}else {
//				alert(errorMessage);
//			}
//			console.log(err);
//			$('#sign-in').disabled=false;
//		});
//	}
//	$('#sign-in').disabled=true;
//}
//function handleSignUp() {
//	var email=$('#email').val();
//	var password=$('#password').val();
//	if(email.length<4) {
//		alert('이메일을 입력하세요');
//		return;
//	}
//	if(password.length<4) {
//		alert('비밀번호를 입력하세요');
//		return;
//	}
//	firebase.auth().createUserWithEmailAndPassword(email,password).catch(function(err) {
//		var errorCode=err.code;
//		var errorMessage=err.message;
//		if(errorCode=='auth/weak-password') {
//			alert('비밀번호 조건을 지켜주세요');
//		}else {
//			alert(errorMessage);
//		}
//		console.log(err);
//	});
//}
//
//function initApp() {
//	firebase.auth().onAuthStateChanged(function(user) {
//		$('#verify-email').disabled=true;
//		if(user) {
//			var displayName=user.displayName;
//			var email=user.email;
//			var emailVerified=user.emailVerified;
//			var photoURL=user.photoURL;
//			var isAnonymous=user.isAnonymous;
//			var uid=user.uid;
//			var providerData=user.providerData;
//			$('#sign-in-status').html('Signed in');
//			$('#sign-in').html('Sign out');
//			$('#account-details').text(JSON.stringify(user,null,' '));
//			if(!emailVerified) {
//				$('#verify-email').disabled=false;
//			}
//		}else {
//			$('#sign-in-status').html('Signed out');
//			$('#sign-in').html('Sign in');
//			$('#account-details').html('null');
//		}
//		$('#sign-in').disabled=false;
//	});
//	
//	$('#sign-in').click(function() {	toggleSignIn();	});
//	$('#sign-up').click(function() {	handleSignUp();	});
//}
//	
//$(function() {
//	initApp();
//});