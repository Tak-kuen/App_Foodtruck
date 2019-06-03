/**
 * 
 */

$(document).ready(function(){
	var byTimeSalesResult0 = [
		Number($(".byTimeSalesResult9").eq(0).val()),
		Number($(".byTimeSalesResult10").eq(0).val()),
		Number($(".byTimeSalesResult11").eq(0).val())
	];
	var byTimeSalesResult1 = [
		Number($(".byTimeSalesResult9").eq(1).val()),
		Number($(".byTimeSalesResult10").eq(1).val()),
		Number($(".byTimeSalesResult11").eq(1).val())
	];
	var byTimeSalesResult2 = [
		Number($(".byTimeSalesResult9").eq(2).val()),
		Number($(".byTimeSalesResult10").eq(2).val()),
		Number($(".byTimeSalesResult11").eq(2).val())
	];
	var byTimeSalesResult3 = [
		Number($(".byTimeSalesResult9").eq(3).val()),
		Number($(".byTimeSalesResult10").eq(3).val()),
		Number($(".byTimeSalesResult11").eq(3).val())
	];
	var byTimeSalesResult4 = [
		Number($(".byTimeSalesResult9").eq(4).val()),
		Number($(".byTimeSalesResult10").eq(4).val()),
		Number($(".byTimeSalesResult11").eq(4).val())
	];
	var byTimeSalesResult5 = [
		Number($(".byTimeSalesResult9").eq(5).val()),
		Number($(".byTimeSalesResult10").eq(5).val()),
		Number($(".byTimeSalesResult11").eq(5).val())
	];
	var byTimeSalesResult6 = [
		Number($(".byTimeSalesResult9").eq(6).val()),
		Number($(".byTimeSalesResult10").eq(6).val()),
		Number($(".byTimeSalesResult11").eq(6).val())
	];
	for(var i=0; i<24; i++){

		console.log(Number($(".byTimeSalesResult9").eq(i).val()));
		console.log(Number($(".byTimeSalesResult10").eq(i).val()));
		console.log(Number($(".byTimeSalesResult11").eq(i).val()));
	}
	
	var byTimeSalesResult = new Array(24);
	
	for(var i=0; i<24; i++){
		var temp = new Array();
			temp.push(Number($(".byTimeSalesResult9").eq(i).val()));
			temp.push(Number($(".byTimeSalesResult10").eq(i).val()));
			temp.push(Number($(".byTimeSalesResult11").eq(i).val()));
			console.log(temp);
		byTimeSalesResult.push(temp);
	}
//    google.charts.load('current', {'packages':['bar']});
//    google.charts.setOnLoadCallback(drawChart);
//
//    function drawChart() {
//      
//      var data = google.visualization.arrayToDataTable([
//          ['Year', '전체', '회원', '비회원'],
//          ['월요일', byTimeSalesResultMon[2], byTimeSalesResultMon[1], byTimeSalesResultMon[0]],
//          ['화요일', byTimeSalesResultTue[2], byTimeSalesResultTue[1], byTimeSalesResultTue[0]],
//          ['수요일', byTimeSalesResultWed[2], byTimeSalesResultWed[1], byTimeSalesResultWed[0]],
//          ['목요일', byTimeSalesResultThu[2], byTimeSalesResultThu[1], byTimeSalesResultThu[0]],
//          ['금요일', byTimeSalesResultFri[2], byTimeSalesResultFri[1], byTimeSalesResultFri[0]],
//          ['토요일', byTimeSalesResultSat[2], byTimeSalesResultSat[1], byTimeSalesResultSat[0]],
//          ['일요일', byTimeSalesResultSun[2], byTimeSalesResultSun[1], byTimeSalesResultSun[0]]
//      ]);
//
//      var options = {
//        chart: {
//          title: 'Company Performance',
//          subtitle: 'Sales, Expenses, and Profit: 2014-2017',
//        },
//        bars: 'vertical',
//        vAxis: {format: 'decimal'},
//        height: 400,
//        colors: ['#1b9e77', '#d95f02', '#7570b3']
//      };
//
//      var chart = new google.charts.Bar(document.getElementById('chart_div'));
//
//      chart.draw(data, google.charts.Bar.convertOptions(options));
//
//      var btns = document.getElementById('btn-group');
//
//      btns.onclick = function (e) {
//
//        if (e.target.tagName === 'BUTTON') {
//          options.vAxis.format = e.target.id === 'none' ? '' : e.target.id;
//          chart.draw(data, google.charts.Bar.convertOptions(options));
//        }
//      }
//    }
});