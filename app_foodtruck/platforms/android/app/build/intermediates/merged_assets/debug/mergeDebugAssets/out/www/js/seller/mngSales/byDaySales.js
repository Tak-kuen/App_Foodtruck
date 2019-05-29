/**
 * 
 */

$(document).ready(function(){
	var byDaySalesResultMon = [
		Number($(".byDaySalesResult9").eq(0).val()),
		Number($(".byDaySalesResult10").eq(0).val()),
		Number($(".byDaySalesResult11").eq(0).val())
	];
	var byDaySalesResultTue = [
		Number($(".byDaySalesResult9").eq(1).val()),
		Number($(".byDaySalesResult10").eq(1).val()),
		Number($(".byDaySalesResult11").eq(1).val())
	];
	var byDaySalesResultWed = [
		Number($(".byDaySalesResult9").eq(2).val()),
		Number($(".byDaySalesResult10").eq(2).val()),
		Number($(".byDaySalesResult11").eq(2).val())
	];
	var byDaySalesResultThu = [
		Number($(".byDaySalesResult9").eq(3).val()),
		Number($(".byDaySalesResult10").eq(3).val()),
		Number($(".byDaySalesResult11").eq(3).val())
	];
	var byDaySalesResultFri = [
		Number($(".byDaySalesResult9").eq(4).val()),
		Number($(".byDaySalesResult10").eq(4).val()),
		Number($(".byDaySalesResult11").eq(4).val())
	];
	var byDaySalesResultSat = [
		Number($(".byDaySalesResult9").eq(5).val()),
		Number($(".byDaySalesResult10").eq(5).val()),
		Number($(".byDaySalesResult11").eq(5).val())
	];
	var byDaySalesResultSun = [
		Number($(".byDaySalesResult9").eq(6).val()),
		Number($(".byDaySalesResult10").eq(6).val()),
		Number($(".byDaySalesResult11").eq(6).val())
	];
	
    google.charts.load('current', {'packages':['bar']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

      
      var data = google.visualization.arrayToDataTable([
          ['Year', '전체', '회원', '비회원'],
          ['월요일', byDaySalesResultMon[2], byDaySalesResultMon[1], byDaySalesResultMon[0]],
          ['화요일', byDaySalesResultTue[2], byDaySalesResultTue[1], byDaySalesResultTue[0]],
          ['수요일', byDaySalesResultWed[2], byDaySalesResultWed[1], byDaySalesResultWed[0]],
          ['목요일', byDaySalesResultThu[2], byDaySalesResultThu[1], byDaySalesResultThu[0]],
          ['금요일', byDaySalesResultFri[2], byDaySalesResultFri[1], byDaySalesResultFri[0]],
          ['토요일', byDaySalesResultSat[2], byDaySalesResultSat[1], byDaySalesResultSat[0]],
          ['일요일', byDaySalesResultSun[2], byDaySalesResultSun[1], byDaySalesResultSun[0]]
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