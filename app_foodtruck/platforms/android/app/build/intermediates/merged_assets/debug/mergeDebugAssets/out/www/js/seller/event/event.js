/**
 * 
 */
	$(function () {	
		tab('#tab',0);	
	});

	function tab(e, num){
	    var num = num || 0;
	    var menu = $(e).children();
	    var con = $(e+'_con').children();
	    var select = $(menu).eq(num);
	    var i = num;

	    select.addClass('on');
	    con.eq(num).show();
	    con.eq(num).find('*').css("display", "inline-block");

	    menu.click(function(){
	        if(select!==null){
	            select.removeClass("on");
	            con.eq(i).hide();
	        }

	        select = $(this);
	        i = $(this).index();

	        select.addClass('on');
	        con.eq(i).show();
	        con.eq(i).find('*').css("display", "inline-block");
	        $(".eventBox").scrollTop(0);
	    });
	}
	
	//-- textarea에 입력바이트 수를 계산

	var clearChk=true;
	var limitByte = 1000; //바이트의 최대크기, limitByte 를 초과할 수 없음

	// textarea에 마우스가 클릭되었을때 초기 메시지를 클리어
	function clearMessage(frm){

	  if(clearChk){ 
	    frm.details.value="";
	    clearChk=false;
	  }

	}

	// textarea에 입력된 문자의 바이트 수를 체크
	function checkByte(frm) {
	   
	        var totalByte = 0;
	        var message = frm.details.value;

	        for(var i =0; i < message.length; i++) {
	                var currentByte = message.charCodeAt(i);
	                if(currentByte > 128) totalByte += 2;
		else totalByte++;
	        }
	        frm.messagebyte.value = totalByte;

	        if(totalByte > limitByte) {
	                alert( limitByte+"바이트까지 전송가능합니다.");
		frm.details.value = message.substring(0,limitByte);
	        }
	}
	
	// 딤처리 팝업 레이어(시작)
	function layer_popup(el) {

		var $el = $(el); //레이어의 id를 $el 변수에 저장
		var isDim = $el.prev().hasClass('dimBg'); //dimmed 레이어를 감지하기 위한 boolean 변수

		isDim ? $('.dim-layer').fadeIn() : $el.fadeIn();

		var $elWidth = ~~($el.outerWidth()), $elHeight = ~~($el.outerHeight()), docWidth = $(
				document).width(), docHeight = $(document).height();

		// 화면의 중앙에 레이어를 띄운다.
		if ($elHeight < docHeight || $elWidth < docWidth) {
			$el.css({
				marginTop : -$elHeight / 2,
				marginLeft : -$elWidth / 2
			})
		} else {
			$el.css({
				top : 0,
				left : 0
			});
		}

		$el.find('button.btn-layerClose').click(function() {
			isDim ? $('.dim-layer').fadeOut() : $el.fadeOut(); // 닫기 버튼을 클릭하면 레이어가 닫힌다.
			return false;
		});

		$('.layer .dimBg').click(function() {
			$('.dim-layer').fadeOut();
			return false;
		});
	}
	// 딤처리 팝업 레이어(끝)
	
	// 딤처리 팝업 레이어(시작)
	function layer_popup2(el) {

		var $el = $(el); //레이어의 id를 $el 변수에 저장
		var isDim = $el.prev().hasClass('dimBg2'); //dimmed 레이어를 감지하기 위한 boolean 변수

		isDim ? $('.dim-layer2').fadeIn() : $el.fadeIn();

		var $elWidth = ~~($el.outerWidth()), $elHeight = ~~($el.outerHeight()), docWidth = $(
				document).width(), docHeight = $(document).height();

		// 화면의 중앙에 레이어를 띄운다.
		if ($elHeight < docHeight || $elWidth < docWidth) {
			$el.css({
				marginTop : -$elHeight / 2,
				marginLeft : -$elWidth / 2
			})
		} else {
			$el.css({
				top : 0,
				left : 0
			});
		}

		$el.find('button.btn-layerClose').click(function() {
			isDim ? $('.dim-layer2').fadeOut() : $el.fadeOut(); // 닫기 버튼을 클릭하면 레이어가 닫힌다.
			return false;
		});

		$('.layer .dimBg2').click(function() {
			$('.dim-layer2').fadeOut();
			return false;
		});
	}
	// 딤처리 팝업 레이어(끝)
	
	// 메뉴 input 추가
	function add_item(){
		// pre_set 에 있는 내용을 읽어와서 처리..
		var div = document.createElement('div');
		div.innerHTML = document.getElementById('pre_set').innerHTML;
		document.getElementById('field').appendChild(div);
	}

	function remove_item(obj){
		// obj.parentNode 를 이용하여 삭제
		document.getElementById('field').removeChild(obj.parentNode);
	}
	
	$(document).ready(function(){
		$(".imgUploadBtn").click(function(){
			document.getElementById("uploadImg").click();
		});
		
		$("#addEventBtn").click(function(){
			alert("이벤트가 등록되었습니다.");
		});
		
		$("#editEventBtn").click(function(){
			alert("이벤트가 수정되었습니다.");
		});
		
		$(".delete").click(function(){
			var eventName = $(this).parent().next().next().text();
			var delCheck = confirm(eventName + " 을(를) 정말 삭제하시겠습니까?");
		});
		
		$(".deleteEventDiv").click(function(){
			//var eventName = $(this).parent().next().next().text();
			var delCheck = confirm(" 을(를) 정말 삭제하시겠습니까?");
		});
		
		// 딤처리 팝업 레이어(시작)
		$('.btn-example').click(function() {
			var $href = $(this).attr('href');
			layer_popup($href);
		});
		// 딤처리 팝업 레이어(끝)
		
		// 딤처리 팝업 레이어(시작)
		$('.btn-example2').click(function() {
			var $href = $(this).attr('href');
			layer_popup2($href);
		});
		// 딤처리 팝업 레이어(끝)
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
				img.style.width = '400px'; // 기본 설정된 div의 안에 뿌려지는 효과를 주기 위해서 div 크기와 같은 크기로 지정
				img.style.height = '300px';

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