<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<title>푸드트럭NEWS</title>
<jsp:include page="../header/header.jsp"></jsp:include>
<link rel="stylesheet"
   href="<c:url value="/resources/css/bootstrap.min.css"/>">
<link rel="stylesheet" href="<c:url value="/resources/css/news/news.css"/>"/>

<script type="text/javascript"
   src="<c:url value="/resources/js/jquery.min.js"/>"></script>
<script>
   $(document).ready(function(){
      $('.boardTitle').on('click', function(){
      var a = $(this);
      var postCode= a.next().val();//next td 다음에 나오는 것을 지칭함 , val은 next에 해당하는 val에 해당하는 값
      
      /* query ={
            post_code : postCode
      }
      $.ajax({
         type:"post",
         url:"/project/news/specificck",
         data:query,
         success:function(data){
            //location.href="/project/news/specific";
            
         }//get 방식 주소치는거랑 똑같음
      }); */
      $(location).attr('href','/project/news/specificck?post_code='+postCode);
      });
      
   });

</script>
</head>

<body>
   <div id="title" class="card-header">
      <p>푸드트럭NEWS</p>
   </div>
      <div id="searchall">
         <nav class="navbar navbar-light bg-light">
               <form class="form-inline" >
               <input id="searchbox" class="form-control mr-sm-2" type="search"
                  placeholder="Search" aria-label="Search">
               
               <button id="searchbutton"type="button" class="btn">검색</button>
               <a href="/project/news/addNews"><button id="pageadd"type="button" class="btn" >등록</button></a>
            </form>
         </nav>
         
      </div>
   
   
      <div id="table">
      <table class="table">
         <thead>
            <tr>
               <th>제목</th>
               <th>등록일</th>
               <th>조회수</th>
            </tr>
         </thead>
         <tbody>
         <c:forEach var="i" items="${postList}">
         <tr>
            <td class="boardTitle" >${i.post_title }</td>
            <input type="hidden" value="${i.post_code }">
            <td>${i.post_regdate}</td>
            <td>${i.post_visit}</td>
         </tr>
         </c:forEach>
         </tbody>
      </table>
   </div>
      <div id="nextall">
         <nav id="next" aria-label="Page navigation example">
            <ul class="pagination">
               <li class="page"><a class="page-link" href="#"> <span>«</span></a></li>
               <li class="page-item"><a class="page-link" href="#"><span>1</span></a></li>
               <li class="page-item"><a class="page-link" href="#"><span>2</span></a></li>
               <li class="page-item"><a class="page-link" href="#"><span>3</span></a></li>
               <li class="page-item"><a class="page-link" href="#"><span>4</span></a></li>
               <li class="page-item"><a class="page-link" href="#"><span>5</span></a></li>
               <li class="page-item"><a class="page-link" href="#"><span>»</span></a></li>
               
         
            </ul>
         </nav>

      </div>
</body>
</html>