var config = {
	apiKey : "AIzaSyDgw_gFc9MB7Rc8Z7WjJUOqeWT6YQOqvxU",
	authDomain : "fir-test-f3fea.firebaseapp.com",
	databaseURL : "https://fir-test-f3fea.firebaseio.com",
	projectId : "fir-test-f3fea",
	storageBucket : "fir-test-f3fea.appspot.com",
	messagingSenderId : "960564228551"
};
firebase.initializeApp(config);
function ck() {
	var isTrue = false;
	if (fr.email.value == "") {
		alert("이메일을 입력해주세요");
		isTrue = false;
		return false;
	} else if (fr.password.value == "") {
		alert("비밀번호를 입력하세요");
		isTrue = false;
		return false;
	} else if (fr.nickname.value == "") {
		alert("닉네임을 입력해주세요");
		isTrue = false;
		return false;
	} else if (fr.telephone.value == "") {
		alert("전화번호를 입력해주세요");
		isTrue = false;
		return false;
	}
	if (!isTrue) {
		var query = {
			email : fr.email.value,
			nickname : fr.nickname.value,
			telephone : fr.telephone.value
		}
		console.log(query);
		$.ajax({
			url : "/project/login/idck",
			type : "get",
			data : query,
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
					firebase.auth().createUserWithEmailAndPassword(fr.email.value,fr.password.value).catch(function(err) {
						var errorCode=err.code;
						var errorMessage=err.message;
						if(errorCode=='auth/weak-password') {
							alert('비밀번호 조건을 지켜주세요');
							return false;
						}else {
							alert(errorMessage);
							return false;
						}
						console.log(err);
					});
					$("#target").attr('onsubmit', 'true');
					$('#target').submit();
				}

			}
		});
		
	}
	return false;
}
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