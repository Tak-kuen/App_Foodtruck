/*$(document).ready(function(){
	alert("?");
	var a= $("#sessione").val();
	if(a=!null){
	$.ajax({
		type:"post",
		url:"/login/pointck",
		data:{
			email:a
		},
		success:function(data){
			if(data.point==$("#sessionp")){
				alert("같음");
			}else{
				alert(data.point);
				alert($("#sessionp"));
			}
		}
	});
	}
});*/