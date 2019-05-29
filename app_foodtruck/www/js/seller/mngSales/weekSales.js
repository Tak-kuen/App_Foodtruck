/**
 * 
 */

$(document).ready(function(){
	var mCashSalesWeek = Number($("#mCashSalesWeek").val());
	var nCashSalesWeek = Number($("#nCashSalesWeek").val());
	var totalCashSalesWeek = Number($("#totalCashSalesWeek").val());
	var mCardSalesWeek = Number($("#mCardSalesWeek").val());
	var nCardSalesWeek = Number($("#nCardSalesWeek").val());
	var totalCardSalesWeek = Number($("#totalCardSalesWeek").val());
	var mKakaoSalesWeek = Number($("#mKakaoSalesWeek").val());
	var nKakaoSalesWeek = Number($("#nKakaoSalesWeek").val());
	var totalKakaoSalesWeek = Number($("#totalKakaoSalesWeek").val());
	var mTotalSalesWeek = Number($("#mTotalSalesWeek").val());
	var nTotalSalesWeek = Number($("#nTotalSalesWeek").val());
	var totalSalesWeek = Number($("#totalSalesWeek").val());
	
    google.charts.load('current', {'packages':['bar']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

      
      var data = google.visualization.arrayToDataTable([
          ['Year', '전체', '회원', '비회원'],
          ['합계', totalSalesWeek, mTotalSalesWeek, nTotalSalesWeek],
          ['현금', totalCashSalesWeek, mCashSalesWeek, nCashSalesWeek],
          ['카드', totalCardSalesWeek, mCardSalesWeek, nCardSalesWeek],
          ['카카오페이', totalKakaoSalesWeek, mKakaoSalesWeek, nKakaoSalesWeek]
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