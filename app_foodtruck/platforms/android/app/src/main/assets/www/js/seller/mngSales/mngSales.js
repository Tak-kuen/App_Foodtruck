/**
 * 
 */

var chartDrowFun = {

	chartDrow : function() {
		var chartData = '';

		// 날짜형식 변경하고 싶으시면 이 부분 수정하세요.
		var chartDateformat = 'yyyy년MM월dd일';
		// 라인차트의 라인 수
		var chartLineCount = 10;
		// 컨트롤러 바 차트의 라인 수
		var controlLineCount = 10;

		function drawDashboard() {

			var data = new google.visualization.DataTable();
			// 그래프에 표시할 컬럼 추가
			data.addColumn('datetime', '날짜');
			data.addColumn('number', '남성');
			data.addColumn('number', '여성');
			data.addColumn('number', '전체');

			// 그래프에 표시할 데이터
			var dataRow = [];
			
			var curYear4 = $("#curYear4").val(); // 현재 연도
			var curMonth = $("#curMonth").val(); // 현재 월
			var days; // 일수
			
			// 각 월에 대한 일수 계산
			switch(curMonth){
			case "01":
			case "03":
			case "05":
			case 07:
			case 08:
			case 10:
			case 12:
				days = 31;
				break;
			case 04:
			case 06:
			case 09:
			case 11:
				days= 30;
				break;
			case 02:
				if((curYear4%4==0 && curYear4%100!=0) || (curYear4%4==0 && curYear4%100==0 && curYear4%400==0)) {
					// 현재 연도가
					// 4로 나누어 떨어지되 100으로 나누어 떨어지지 않거나
					// 4로 나누어 떨어지고, 100으로도 나누어 떨어지지만, 400으로도 나누어 떨어지면
					// 윤년(2월이 윤달(29일))
					days = 29;
				} else if(curYear4%4==0 && curYear4%100==0 && curYear4%400!=0) {
					// 4로 나누어 떨어지고, 100으로도 나누어 떨어지는데, 400으로는 나누어 떨어지지 않으면
					// 평년(2월이 평달(28일))
					days = 28;
				}
				break;
			}
			
			console.log(days);

			for (var i = 1; i <= days; i++) { // 랜덤 데이터 생성
				var total = 1;
				console.log(total);
				dataRow = [ new Date('2017', '0', i), total ];
				data.addRow(dataRow);
			}

			var chart = new google.visualization.ChartWrapper({
				chartType : 'LineChart',
				containerId : 'lineChartArea', // 라인 차트 생성할 영역
				options : {
					isStacked : 'percent',
					focusTarget : 'category',
					height : 500,
					width : '100%',
					legend : {
						position : "top",
						textStyle : {
							fontSize : 13
						}
					},
					pointSize : 5,
					tooltip : {
						textStyle : {
							fontSize : 12
						},
						showColorCode : true,
						trigger : 'both'
					},
					hAxis : {
						format : chartDateformat,
						gridlines : {
							count : chartLineCount,
							units : {
								years : {
									format : [ 'yyyy년' ]
								},
								months : {
									format : [ 'MM월' ]
								},
								days : {
									format : [ 'dd일' ]
								},
								hours : {
									format : [ 'HH시' ]
								}
							}
						},
						textStyle : {
							fontSize : 12
						}
					},
					vAxis : {
						minValue : 100,
						viewWindow : {
							min : 0
						},
						gridlines : {
							count : -1
						},
						textStyle : {
							fontSize : 12
						}
					},
					animation : {
						startup : true,
						duration : 1000,
						easing : 'in'
					},
					annotations : {
						pattern : chartDateformat,
						textStyle : {
							fontSize : 15,
							bold : true,
							italic : true,
							color : '#871b47',
							auraColor : '#d799ae',
							opacity : 0.8,
							pattern : chartDateformat
						}
					}
				}
			});

			var control = new google.visualization.ControlWrapper({
				controlType : 'ChartRangeFilter',
				containerId : 'controlsArea', // control bar를 생성할 영역
				options : {
					ui : {
						chartType : 'LineChart',
						chartOptions : {
							chartArea : {
								'width' : '60%',
								'height' : 80
							},
							hAxis : {
								'baselineColor' : 'none',
								format : chartDateformat,
								textStyle : {
									fontSize : 12
								},
								gridlines : {
									count : controlLineCount,
									units : {
										years : {
											format : [ 'yyyy년' ]
										},
										months : {
											format : [ 'MM월' ]
										},
										days : {
											format : [ 'dd일' ]
										},
										hours : {
											format : [ 'HH시' ]
										}
									}
								}
							}
						}
					},
					filterColumnIndex : 0
				}
			});

			var date_formatter = new google.visualization.DateFormat({
				pattern : chartDateformat
			});
			date_formatter.format(data, 0);

			var dashboard = new google.visualization.Dashboard(document
					.getElementById('Line_Controls_Chart'));
			window.addEventListener('resize', function() {
				dashboard.draw(data);
			}, false); // 화면 크기에 따라 그래프 크기 변경
			dashboard.bind([ control ], [ chart ]);
			dashboard.draw(data);

		}
		google.charts.setOnLoadCallback(drawDashboard);

	}
}

$(document).ready(function() {
	google.charts.load('current', {
		'packages' : [ 'line', 'controls' ]
	});
	chartDrowFun.chartDrow(); // chartDrow() 실행
});