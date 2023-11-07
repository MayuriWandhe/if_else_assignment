import { Component, OnInit } from '@angular/core';
// import * as Highcharts from 'highcharts/highstock';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  // chartOptions : any;
  // highcharts: typeof Highcharts = Highcharts;
  

  //   chartConstructor: string = 'chart'; // optional string, defaults to 'chart'
  //   chartOptions: Highcharts.Options = {  
  //     series: [{
  //     data: [1, 2, 3],
  //     type: 'line'
  //   }]
  // }; // required
  //   chartCallback: Highcharts.ChartCallbackFunction = function (chart) { 
      
  //     } // optional function, defaults to null
  //   updateFlag: boolean = false; // optional boolean
  //   oneToOneFlag: boolean = true; // optional boolean, defaults to false
  //   runOutsideAngular: boolean = false; // optional boolean, defaults to false





  // Highcharts: typeof Highcharts = Highcharts;
  // chartOptions: Highcharts.Options = {
  //   series: [{
  //     data: [1, 2, 3],
  //     type: 'line'
  //   }]
  // };

  constructor() { }

  ngOnInit(): void {
    // this.lineChart()
  }


  // lineChart(){
  //   this.chartOptions = {
  //     chart : {
  //       type : 'splice'
  //     },
  //     title : {
  //       text : 'Monthly avg temp'
  //     },
  //     subtitle : {
  //       text : 'Source: WorldClimate.com'
  //     },
  //     xAxis : {
  //       categories : [
  //         'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'
  //       ]
  //     },
  //     yAxis : {
  //       title : {
  //         text : 'Temp ℃'
  //       }
  //     },
  //     tooltips : {
  //       valuesuffix : ' ℃'
  //     },
  //     series : this.chartData
  //   }

  // }
  

  // chartData = [
  //   {
  //     name : 'A',
  //     data : [7.0, 6.9, 9.5, 14.5]
  //   },
  //   {
  //     name : 'B',
  //     data : [-0.2, 0.8, 7.5, 11.5]
  //   },
  //   {
  //     name : 'C',
  //     data : [-0.9, 0.6, 3.5, 7.5]
  //   },
  //   {
  //     name : 'D',
  //     data : [3.9, 5.9, 9.10, 4.5]
  //   }
  // ]

}
