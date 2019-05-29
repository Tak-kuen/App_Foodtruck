/**
 * 
 */

var config = {
	apiKey : "AIzaSyDgw_gFc9MB7Rc8Z7WjJUOqeWT6YQOqvxU",
	authDomain : "fir-test-f3fea.firebaseapp.com",
	databaseURL : "https://fir-test-f3fea.firebaseio.com",
	projectId : "fir-test-f3fea",
	storageBucket : "fir-test-f3fea.appspot.com",
	messagingSenderId : "960564228551"
};
firebase.initializeApp(config);
//파이어베이스 초기화
//메시징 객체 검색
const messaging=firebase.messaging();
//발급받은 키 등록
messaging.usePublicVapidKey("BGnZtMwCwypcubHTRV0hbuYboQe1afzxwdQ2PdbTrGu67_yXf6vmuIxZGZxCNPG9ApyS7g0XicBFjxeiyxQ4oXw");
navigator.serviceWorker.register('/firebase-messaging-sw.js').then(function(registartion){
  messaging.requestPermission().then(function(){
       console.log('요청 허용');
       return messaging.getToken();
    })
    .then(function(token){
       console.log(token);
       $('#forToken').html(token);
       $.ajax({
    	  type:"post",
    	  data:{token:token},
    	  url:"/pushToken",
    	  success:function(data) {
    		  console.log(data);
    	  },error:function(err) {
    		  console.log(err);
    	  }
       });
    })
    .catch(function(err){
       console.log('요청 거절');
    });
});
//푸쉬 권한 요청
//messaging.requestPermission().then(function() {
//	console.log('Notification permission granted.');
//}).catch(function(err) {
//	console.log('Unable to get permission to notify,',err);
//});
//
////권한요청에 대한 토큰 검색
//messaging.getToken().then(function(currentToken) {
//	if(currentToken) {
//		sendTokenToServer(currentToken);
//		updateUIForPushEnabled(currentToken);
//		console.log(currentToken);
//	}else{
//		console.log('No Instance ID token available. Request permission to generate one.');
//		updateUIForPushPermissionRequired();
//		setTokenSentToServer(false);
//	}
//}).catch(function(err) {
//	console.log('An error occurred while retrieving token.',err);
//	showToken('Error retrieving Instance ID token.',err);
//	setTokenSentToServer(false);
//});
//
////토근 새로고침 모니터링
//messaging.onTokenRefresh(function() {
//	messaging.getToken().then(function(refreshedToken) {
//		console.log('Token refreshed.');
//		console.log(refreshedToken);
//	    // Indicate that the new Instance ID token has not yet been sent to the
//	    // app server.
//		setTokenSentToServer(false);
//	    // Send Instance ID token to app server.
//		sendTokenToServer(refreshedToken);
//	    // ...
//	}).catch(function(err) {
//		console.log('Unable to retrieve refreshed token ', err);
//		showToken('Unable to retrieve refreshed token ', err);
//	});
//});
//
//messaging.requestPermission().then(function() {
//	console.log("Notification permission granted.");
//}).catch(function(err) {
//	console.log('Unable to get permission to notify.',err);
//});
messaging.onMessage(function(payload) {
	console.log('Message received. ',payload);
});
$('#forPush').click(function() {
});

