/**
 * 
 */
//	var index = 1;

	function digit_check(evt){
    var code = evt.which?evt.which:event.keyCode;
	    if(code < 48 || code > 57){
	        return false;
	    }
	}

	function showDiscResult(disc) {
		var discount = $(disc).val();
		var price = $(disc).prev().val();
		var discResult = price - discount;
		$(disc).next().val(discResult);
		
		if(discResult < 0) {
			alert("할인액은 단가를 초과할 수 없습니다.");
			$(disc).val("");
			$(disc).next().val(price);
		}
	}
	
	function changeAttr(selectTag) {
		var selectVal = $(selectTag).val();
		
		if(selectVal != "" && selectVal != null && selectVal != undefined){
			var unit_price = $('#'+selectVal).val();
			$(selectTag).next().val(unit_price);
			$(selectTag).next().next().next().val(unit_price);
			$(selectTag).next().next().attr("disabled", false);
		}else {
			$(selectTag).next().val("");
			$(selectTag).next().next().val("");
			$(selectTag).next().next().next().val("");
			$(selectTag).next().next().attr("disabled", true);
		}
	}

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
//		$(div).children("select").attr("id", "selectMenu"+index);
//		index++;
	}
	
	function add_item2(){
		// pre_set 에 있는 내용을 읽어와서 처리..
		var div = document.createElement('div');
		div.innerHTML = document.getElementById('pre_set2').innerHTML;
		document.getElementById('field2').appendChild(div);
//		$(div).children("select").attr("id", "selectMenu"+index);
//		index++;
	}

	function remove_item(obj){
		// obj.parentNode 를 이용하여 삭제
		document.getElementById('field').removeChild(obj.parentNode);
	}
	
	function remove_item2(obj){
		// obj.parentNode 를 이용하여 삭제
		document.getElementById('field2').removeChild(obj.parentNode);
	}
	
	function alerttest(){
		alert("a");
	}
	
	$(document).ready(function(){
		
		var isAddDefault=false;
		var isEditDefault=false;
		
		$("#previewId").mouseenter(function(){
			$("#imgControlBox").fadeIn();
			$("#noImage,#defaultImg,#prev_previewId").css("position", "relative");
			$("#noImage,#defaultImg,#prev_previewId").css("top", "-50px");
		});
		
		$("#previewId").mouseleave(function(){
			$("#imgControlBox").fadeOut(200);
			setTimeout(function() {
				$("#noImage,#defaultImg,#prev_previewId").css("top", "0");
			}, 200);
			
/*			var opacityVal;
			var checkOpacity =
				setInterval(function() {
					opacityVal = $("#imgControlBox").css("opacity");
					if(opacityVal == 0) {
						$("#noImage").css("top", "0");		
					clearInterval(checkOpacity);
					}
				}, 0);
*/
		});
		
		$("#previewId2").mouseenter(function(){
			$("#imgControlBox2").fadeIn();
			$("#noImage2,#defaultImg2,#prev_previewId2").css("position", "relative");
			$("#noImage2,#defaultImg2,#prev_previewId2").css("top", "-50px");
		});
		
		$("#previewId2").mouseleave(function(){
			$("#imgControlBox2").fadeOut(200);
			setTimeout(function() {
				$("#noImage2,#defaultImg2,#prev_previewId2").css("top", "0");
			}, 200);
		});
		
		$("#setDefaultBtn").click(function(){
			$("#defaultImg").css("display", "");
			$("#noImage").css("display", "none");
			$("#uploadImg").val("");
			$("#prev_previewId").remove();
			isAddDefault=true;
			
			setTimeout(function() {
				alert("기본이미지로 변경되었습니다.");
			}, 1);
		});
		
		$("#setDefaultBtn2").click(function(){
			$("#defaultImg2").css("display", "");
			$("#noImage2").css("display", "none");
			$("#uploadImg2").val("");
			$("#prev_previewId2").remove();
			isEditDefault=true;
			setTimeout(function() {
				alert("기본이미지로 변경되었습니다.");
			}, 1);
		});
		
		$("#delUploadImg").click(function(){
			var chkImg = $("#noImage").css("display");
			
			$("#defaultImg").css("display", "none");
			$("#noImage").css("display", "");
			$("#uploadImg").val("");
			$("#prev_previewId").remove();
			
			if(chkImg == "none"){
				setTimeout(function() {
					alert("업로드된 이미지가 삭제되었습니다.");
				}, 1);
			} else {
				alert("삭제할 이미지가 존재하지 않습니다.");
			}
		});
		
		$("#delUploadImg2").click(function(){
			var chkImg = $("#noImage2").css("display");
			
			$("#defaultImg2").css("display", "none");
			$("#noImage2").css("display", "");
			$("#uploadImg2").val("");
			$("#prev_previewId2").remove();
			
			if(chkImg == "none"){
				setTimeout(function() {
					alert("업로드된 이미지가 삭제되었습니다.");
				}, 1);
			} else {
				alert("삭제할 이미지가 존재하지 않습니다.");
			}
		});
		
		$("#cancelAdd").click(function(){
			$("form").each(function(){
				this.reset();
				// input type="file"의 경우, IE10을 제외한 모든 브라우저에서 지원
				// IE10에서는 reset 된 것처럼 보이지만, submit 할 경우 해당 파일이 전송되는 버그 발생 
				$("#noImage").css("display", "");
				$("#prev_previewId").remove();
			});
		});
		
		$("#cancelEdit").click(function(){
			$("form").each(function(){
				this.reset();
				// input type="file"의 경우, IE10을 제외한 모든 브라우저에서 지원
				// IE10에서는 reset 된 것처럼 보이지만, submit 할 경우 해당 파일이 전송되는 버그 발생 
				$("#noImage2").css("display", "");
				$("#prev_previewId2").remove();
			});
		});
		
		tab('#tab',0);
		
		$(".imgUploadBtn").click(function(){
			document.getElementById("uploadImg").click();
		});
		
		$(".imgUploadBtn2").click(function(){
			document.getElementById("uploadImg2").click();
		});
		
		$("#addEventBtn").click(function(){
			
			
			
			var files = $("#uploadImg")[0].files;
			var file = files[0];
			
			var eventName = $("#eventName").val(); // 이벤트명
			var beginDate = new Date($("#beginDate").val()).getTime(); // 이벤트 시작일
			var endDate = new Date($("#endDate").val()).getTime(); // 이벤트 종료일
			var target = $("#target").val(); // 이벤트 대상
			console.log(beginDate);
			
			
			var eventMenuNum = $("#field").children().length; // 이벤트 메뉴의 개수
			var menuCode = new Array(); // 메뉴코드 배열
			var discount = new Array(); // 할인액 배열
			
			for(var i=0; i<eventMenuNum; i++) {
				menuCode[i] = $("#field").children().eq(i).children().eq(0).val(); // 메뉴코드를 배열에 추가
				discount[i] = $("#field").children().eq(i).children().eq(2).val(); // 할인액을 배열에 추가
			}
			
			var details = $("#details").val(); // 이벤트 상세내용
			
			// 이벤트 결제수단 코드 생성
			var payment1 = $("#pCash").prop("checked"); // 현금 결제에 대한 true/false 값
			var payment2 = $("#pCard").prop("checked"); // 카드 결제에 대한 true/false 값
			var payment3 = $("#pKakao").prop("checked"); // 카카오페이 결제에 대한 true/false 값
			
			// true=1, false=0
			var pResult1 = payment1 ? "1" : "0";
			var pResult2 = payment2 ? "1" : "0";
			var pResult3 = payment3 ? "1" : "0";
			
			// true/false 1,0 조합
			var payment = pResult1 + pResult2 + pResult3; // 이벤트 결제수단 (코드)
			
			var duplicate = $('input[name="duplicate"]:checked').val(); // 이벤트 중복적용 여부(0 또는 1)
			
			var formData = new FormData();
			formData.append("file", file);
			formData.append("event_name", eventName);
			formData.append("event_start", beginDate);
			formData.append("event_end", endDate);
			formData.append("event_target", target);
			formData.append("menuCode[]", menuCode);
			formData.append("discount[]", discount);
			formData.append("event_content", details);
			formData.append("event_payment", payment);
			formData.append("event_combinable", duplicate);
			
			$.ajax({
				type: "post",
				url: "event",
//				data: {
//					"event_name": eventName,
//					"event_start": beginDate,
//					"event_end": endDate,
//					"event_target": target,
//					"menuCode[]": menuCode,
//					"discount[]": discount,
//					"event_content": details,
//					"event_payment": payment,
//					"event_combinable": duplicate
//				},
				data:formData,
	            processData: false,
	            contentType: false,
				success: function(data){
					 alert("success");
					 $('#layer1').hide();
				}
			});
			setTimeout(function() {
				location.href="/seller/event";
			},500);
//			alert("이벤트가 등록되었습니다.");
		});
		
		$("#editEventBtn").click(function(){
//			alert("이벤트가 수정되었습니다.");
		});
		
		$(".delete").click(function(){
			var eventCode = $(this).parent().next().val();
			var eventName = $(this).parent().next().next().next().text();
			var delCheck = confirm(eventName + " 을(를) 정말 삭제하시겠습니까?");
			
			if(delCheck) {
				$.ajax({
					type: "post",
					url: "delEvent",
					data: {
						"eventCode": eventCode
					},
					success: function(data) {
						location.reload();
						alert("삭제가 완료되었습니다.");
					},
					error: function(data) {
						alert("errror: 삭제 실패");
					}
				});
			} else {
				alert("삭제가 취소되었습니다.");
			}
		});
		
		$(".edit").click(function(){
			var eventCode = $(this).parent().parent().next().val();
			$.ajax({
				type: "post",
				url: "editEvent",
				data: {
					"eventCode": eventCode
				},
				success: function(data) {
					
				},
				error: function(data) {
					alert("errror");
				}
			});
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
				$("#defaultImg").css("display", "none");
				

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
	
	function previewImage2(targetObj, previewId) {
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
				
				$("#noImage2").css("display", "none");
				$("#defaultImg2").css("display", "none");

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
