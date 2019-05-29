/**
 * 
 */
$(document).ready(function() {
	$("#cancelBtn").click(function() {
		window.close();
	});
});

function previewImage(targetObj, previewId) {

	var preview = document.getElementById(previewId); // div id
	var ua = window.navigator.userAgent;

	if (ua.indexOf("MSIE") > -1) {// ie일때

		targetObj.select();

		try {
			var src = document.selection.createRange().text; // get file full
			// path
			var ie_preview_error = document.getElementById("ie_preview_error_"
					+ previewId);

			if (ie_preview_error) {
				preview.removeChild(ie_preview_error); // error가 있으면 delete
			}

			var img = document.getElementById(previewId); // 이미지가 뿌려질 곳

			img.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"
					+ src + "', sizingMethod='scale')"; // 이미지 로딩, sizingMethod는 div에 맞춰서 사이즈를 자동조절 하는 역할
		} catch (e) {
			if (!document.getElementById("ie_preview_error_" + previewId)) {
				var info = document.createElement("<p>");
				info.id = "ie_preview_error_" + previewId;
				info.innerHTML = "a";
				preview.insertBefore(info, null);
			}
		}
	} else { // ie가 아닐때
		var files = targetObj.files;
		for (var i = 0; i < files.length; i++) {

			var file = files[i];

			var imageType = /image.*/; // 이미지 파일일 경우에만 뿌려줌
			if (!file.type.match(imageType))
				continue;

			var prevImg = document.getElementById("prev_" + previewId); // 이전에 미리보기가 있다면 삭제
			if (prevImg) {
				preview.removeChild(prevImg);
			}
			
			$("#noImage").css("display", "none");

			var img = document.createElement("img"); // 크롬은 div에 이미지가 뿌려지지 않기 때문에 자식 Element를 생성
			img.id = "prev_" + previewId;
			img.classList.add("obj");
			img.file = file;
			img.style.width = '250px'; // 기본 설정된 div의 안에 뿌려지는 효과를 주기 위해서 div 크기와 같은 크기로 지정
			img.style.height = '250px';

			preview.appendChild(img);

			if (window.FileReader) { // FireFox, Chrome, Opera 확인
				var reader = new FileReader();
				reader.onloadend = (function(aImg) {
					return function(e) {
						aImg.src = e.target.result;
					};
				})(img);
				reader.readAsDataURL(file);
			} else { // safari is not supported FileReader
				// alert('not supported FileReader');
				if (!document.getElementById("sfr_preview_error_" + previewId)) {
					var info = document.createElement("p");
					info.id = "sfr_preview_error_" + previewId;
					info.innerHTML = "not supported FileReader";
					preview.insertBefore(info, null);
				}
			}
		}
	}
}

function fileCheck(obj) {
	pathpoint = obj.value.lastIndexOf('.');
	filepoint = obj.value.substring(pathpoint+1,obj.length);
	filetype = filepoint.toLowerCase();
	
	if(filetype=='jpg' || filetype=='jpeg' || filetype=='png' || filetype=='gif' ||  filetype=='bmp') {
		// 정상적인 이미지 확장자 파일일 경우
	
	} else {
		alert('이미지 파일만 선택할 수 있습니다.');
		parentObj  = obj.parentNode
		node = parentObj.replaceChild(obj.cloneNode(true),obj);
		
		//return false;
		location.reload();
	}
	
	if(filetype=='bmp') {
		upload = confirm('BMP 파일은 웹상에서 사용하기엔 적절한 이미지 포맷이 아닙니다.\n그래도 계속 하시겠습니까?');
		if(!upload) //return false;
			location.reload();
	}
}