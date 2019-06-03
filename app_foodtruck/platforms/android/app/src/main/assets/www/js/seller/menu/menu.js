/**
 * 
 */

$(document).ready(function(){
   $(".menut").click(function(){
      var current = $(this).css("background-color");
      if(current == "rgb(128, 128, 128)") {
         $(this).css("background-color", "");
      } else {
         $(this).css("background-color", "gray");
      }
   });
   
   $("#addMenu").click(function(){
      var popupX = (window.screen.width / 2) - (430 / 2);
      var popupY = (window.screen.height / 2) - (600 / 2);
      
      window.open("addMenu", "addMenu", "width=430, height=460, left=" + popupX + "," + "top=" + popupY);
   });
   
   $("#delMenu").click(function(){
      $("#delMenu").toggle(); // 삭제 show
      
      $(".delChk").toggle(); // 체크박스 show
      $("#chkAllMenu").toggle(); // 전체선택 show
      $("#unchkAllMenu").toggle(); // 전체해제 show
      $("#goBack").toggle(); // 취소 show
      $("#delMenu2").toggle(); // 삭제2 show
      
      $("#addMenu").toggle(); // 메뉴등록 hide

      // show/hide 시, 전체선택과 전체해제 버튼의 padding을 다음과 같이 설정
      $("#chkAllMenu").css("padding", "6px 9px");
      $("#unchkAllMenu").css("padding", "6px 9px");
      $("#goBack").css("padding", "6px 9px");
      $("#delMenu2").css("padding", "6px 9px");
   });
   
   $("#delMenu2").click(function(){
      // var checked2 = $('input:checkbox[name=delChk]:checked').
      // alert("a");
      var checked = $('input:checkbox[name=delChk]:checked').parent('div').prev().children('input[name=menu_code]');
      var checkedimg = $('input:checkbox[name=delChk]:checked').parent('div').prev().find('img');
      
      // var checked2 = $('input:checkbox[name=delChk]:checked')
      
      // var a =$("input:checkbox[name=delChk]:checked").parent("div");
      // alert(a);
      var menu_codes = new Array();
      // console.log(checked.length);
      // alert("ㅋ");
      // console.log(checked[1].prev().find('input').val());
      // alert(checked);
      if(checked.length >= 1) {
         for(var i=0;i<checked.length;i++){
            // console.log($(checked[i]).val());
            // console.log($(checkedimg[i]).attr("src"));
            var surl = $(checkedimg[i]).attr("src").replace("/resources/image/upload/","");
            console.log(surl);
            var url = surl.replace("\\s_","\\");
            console.log(url);
            var object = new Object();
            object.url=url;
            object.surl=surl;
            object.menu_code=($(checked[i]).val());
            menu_codes.push(object);
         }
         $.ajax({
            url:"/seller/delMenuMenu",
            type:"post",
            async :false,
            contentType:"application/json;charset=UTF-8",
            data:JSON.stringify(menu_codes),
            success:function(data){
               // alert(data);
               location.reload();
            }
         });
         console.log(menu_codes);
         console.log(typeof(menu_codes));
      }else{
         alert("선택된 메뉴가 없습니다.\n삭제할 메뉴를 선택해 주세요!");
      }
   });

   $("#chkAllMenu").click(function(){
      var i = $(".on").index() +1;
      // alert(i);
      $(".delChk"+i).prop("checked", true);
      $(".status"+i).addClass("selected");
      $(".status"+i).text("선택됨");
   });

   $("#unchkAllMenu").click(function unchkAllMenu(){
      $(".delChk").prop("checked", false);
      $(".status").removeClass("selected");
      $(".status").text("선택해제됨");
   });
   
   $("#goBack").click(function(){
      $(".delChk").prop("checked", false);
      $(".status").removeClass("selected");
      $(".status").text("선택해제됨");
      
      $("#delMenu").toggle(); // 삭제 show
      
      $(".delChk").toggle(); // 체크박스 hide
      $("#chkAllMenu").toggle(); // 전체선택 hide
      $("#unchkAllMenu").toggle(); // 전체해제 hide
      $("#goBack").toggle(); // 취소 hide
      $("#delMenu2").toggle(); // 삭제2 hide
      
      $("#addMenu").toggle(); // 메뉴등록 show
   });
   
   $("input:checkbox").on('click', function(){
      if($(this).prop('checked')) {
         $(this).siblings().addClass("selected");
         $(this).siblings().text("선택됨");
      } else {
         $(this).siblings().removeClass("selected");
         $(this).siblings().text("선택해제됨");
      }
   });
   
/*
 * $(".imgBox").click(function(){ var popupX = (window.screen.width / 2) - (430 /
 * 2); var popupY = (window.screen.height / 2) - (600 / 2); window.name =
 * "parentForm"; openWin = window.open("editMenu", "editMenu", "width=430,
 * height=460, left=" + popupX + "," + "top=" + popupY);
 * //openWin.("#menuname").val()=$(this).val();
 * 
 * openWin.document.getElementById("menuname").value="1";
 * 
 * 
 * 
 * });
 */
   
   $(".menuf").on("click",".menut",function(){
      var a = $(this);
      
      console.log("------");
      console.log(a.find("div").children().attr('src'));
      console.log(a.find("div").next().html());
      console.log(a.find("div").next().next().html());
      console.log(a.find("div").next().next().next().val());
      console.log(a.find("div").next().next().next().next().next().val());
      console.log("ㅋ");
      // a.find("div").children().addClass("1"); // src
      a.find("div").next().next().next().next().next().addClass("7");
      a.find("div").next().addClass("2"); // 메뉴이름
      a.find("div").next().next().addClass("3"); // 메뉴가격
      a.find("div").next().next().next().addClass("4"); // 메뉴코드
      a.find("div").next().next().next().next().addClass("5"); // 카테고리?
      var popupX = (window.screen.width / 2) - (430 / 2);
      var popupY = (window.screen.height / 2) - (600 / 2);
      window.name = "parentForm";
      openWin = window.open("editMenu", "editMenu", "width=430, height=460, left=" + popupX + "," + "top=" + popupY);
      // openWin.("#menuname").val()=$(this).val();
      
      // openWin.document.getElementById("menuname").value="1";
   });
});

$(function () {   
   tab('#tab',0);   
});

function unckbox(){
   $(".delChk").prop("checked", false);
   $(".status").removeClass("selected");
   $(".status").text("선택해제됨");
}
function tab(e, num){
    var num = num || 0;
    var menu = $(e).children();
    var con = $(e+'_con').children();
    var select = $(menu).eq(num);
    var i = num;

    select.addClass('on');
    con.eq(num).show();
    con.eq(num).find('*').not(".delChk").css("display", "inline-block");
    // 왜??

    menu.click(function(){
        if(select!==null){
            select.removeClass("on");
            con.eq(i).hide();
        }
        
        select = $(this);
        i = $(this).index();
        
        select.addClass('on');
        con.eq(i).show();
        con.eq(i).find('*').not(".delChk").css("display", "inline-block");
        
        if($(".delChk").css("display") == "none") {
           $(".delChk").css("display", "none");
        } else {
           $(".delChk").css("display", "inline-block");
        }
       $(".menuBox").scrollTop(0);
       unckbox();
      
	});
}