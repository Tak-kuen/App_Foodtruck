/**
 * 
 */

/**
 * 
 */

$(document).ready(function(){
	var mCashSalesMonth = Number($("#mCashSalesMonth").val());
	var nCashSalesMonth = Number($("#nCashSalesMonth").val());
	var totalCashSalesMonth = Number($("#totalCashSalesMonth").val());
	var mCardSalesMonth = Number($("#mCardSalesMonth").val());
	var nCardSalesMonth = Number($("#nCardSalesMonth").val());
	var totalCardSalesMonth = Number($("#totalCardSalesMonth").val());
	var mKakaoSalesMonth = Number($("#mKakaoSalesMonth").val());
	var nKakaoSalesMonth = Number($("#nKakaoSalesMonth").val());
	var totalKakaoSalesMonth = Number($("#totalKakaoSalesMonth").val());
	var mTotalSalesMonth = Number($("#mTotalSalesMonth").val());
	var nTotalSalesMonth = Number($("#nTotalSalesMonth").val());
	var totalSalesMonth = Number($("#totalSalesMonth").val());
	
    google.charts.load('current', {'packages':['bar']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

      
      var data = google.visualization.arrayToDataTable([
          ['Year', '전체', '회원', '비회원'],
          ['합계', totalSalesMonth, mTotalSalesMonth, nTotalSalesMonth],
          ['현금', totalCashSalesMonth, mCashSalesMonth, nCashSalesMonth],
          ['카드', totalCardSalesMonth, mCardSalesMonth, nCardSalesMonth],
          ['카카오페이', totalKakaoSalesMonth, mKakaoSalesMonth, nKakaoSalesMonth]
      ]);

      var options = {
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017',
        },
        bars: 'vertical',
        vAxis: {format: 'decimal'},
        height: 400,
        colors: ['#1b9e77', '#d95f02', '#7570b3']
      };

      var chart = new google.charts.Bar(document.getElementById('chart_div'));

      chart.draw(data, google.charts.Bar.convertOptions(options));

      var btns = document.getElementById('btn-group');

      btns.onclick = function (e) {

        if (e.target.tagName === 'BUTTON') {
          options.vAxis.format = e.target.id === 'none' ? '' : e.target.id;
          chart.draw(data, google.charts.Bar.convertOptions(options));
        }
      }
    }
});