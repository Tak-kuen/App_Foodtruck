$(function() {
    if(!localStorage['app_task_init']){
        localStorage['app_task_init']="true";
        localStorage['app_task_cnt']=0;
    }
    $('.BtnAdd').click(function() {
        var input=window.prompt('일정을 입력하세요');
        if(!input) return false;
        var cnt=parseInt(localStorage['app_task_cnt']);
        var item=$('<div></div>').addClass('Task').attr('data-id',cnt);
        $('<p></p>').text(input).appendTo(item);

        //method chaining 을 통한 속성값 주입
        $('<input/>').attr('type','button').addClass('BtnEdit').val('수정하기').appendTo(item);
        $('<input/>').attr('type','button').addClass('BtnDel').val('삭제하기').appendTo(item);
        item.appendTo($('.TaskWrap'));

        localStorage['app_task_'+cnt] = input;
        cnt++;
        console.log(cnt +"//" + typeof cnt);
        localStorage['app_task_cnt'] = cnt;
    });

    function Redraw() {
        var cnt=parseInt(localStorage['app_task_cnt']);
        $('.TaskWrap').empty();
        for(var i=0;i<cnt;i++) {
            var savedData=localStorage['app_task_' + i];
            if(!savedData) continue;
            var item=$('<div></div>').addClass('Task').attr('data-id',i);
            $('<p></p>').text(savedData).appendTo(item);
    
            //method chaining 을 통한 속성값 주입
            $('<input/>').attr('type','button').addClass('BtnEdit').val('수정하기').appendTo(item);
            $('<input/>').attr('type','button').addClass('BtnDel').val('삭제하기').appendTo(item);
            item.appendTo($('.TaskWrap'));
        }
    }
    Redraw();
    $('.BtnInit').click(function() {
        if(window.confirm('일정을 초기화하시겠습니까?')) {
            $('.TaskWrap').empty();
            var cnt=parseInt(localStorage['app_task_cnt']);
            for(var i=0;i<cnt;i++) localStorage.removeItem("app_task_" +i);
            localStorage['app_task_cnt']=0;
        }
    });
    $(document.body).on('click','.BtnDel',function() {
        if(window.confirm('삭제하시겠습니까?')) {
            var id=$(this).parent().attr('data-id');
            $(this).parent().remove();
            localStorage.removeItem('app_task_'+id);
            console.log(id);
        }
    });
    $(document.body).on('click','.BtnEdit',function() {
        var newInput = window.prompt('수정할 내용');
        if(!newInput) return false;
        var id=$(this).parent().attr('data-id');
        $('div[data-id='+id+'] > p').text(newInput);
        localStorage['app_task_' +id]=newInput;
    });
});