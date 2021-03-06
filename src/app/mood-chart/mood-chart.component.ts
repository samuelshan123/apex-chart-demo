import { Component, OnInit, ViewChild } from "@angular/core";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  ApexFill,
  ApexMarkers,
  ApexYAxis
} from "ng-apexcharts";

// export type ChartOptions = {
//   series: ApexAxisChartSeries;
//   chart: ApexChart;
//   xaxis: ApexXAxis;
//   dataLabels: ApexDataLabels;
//   grid: ApexGrid;
//   fill: ApexFill;
//   markers: ApexMarkers;
//   yaxis: ApexYAxis;
//   stroke: ApexStroke;
//   title: ApexTitleSubtitle;
// };

@Component({
  selector: 'app-mood-chart',
  templateUrl: './mood-chart.component.html',
  styleUrls: ['./mood-chart.component.scss']
})
export class MoodChartComponent implements OnInit {
  series: ApexAxisChartSeries|any;
  chart: ApexChart|any;
  xaxis: ApexXAxis|any;
  dataLabels: ApexDataLabels|any;
  grid: ApexGrid|any;
  fill: ApexFill|any;
  markers: ApexMarkers|any;
  yaxis: ApexYAxis|any;
  stroke: ApexStroke|any;
  title: ApexTitleSubtitle|any;
 
  // ngOnInit(): void {
  // }
  // ngOnInit(): void {
  // }


  // @ViewChild("chart")
  // chart: ChartComponent;
  // public chartOptions!: Partial<ChartOptions>;

  constructor() {
      
    }
  ngOnInit(): void {
this.initChart()  }

  public initChart(){
    this.series= [
      {
        name: "Likes",
        // data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
        data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 30]
      }
    ],
    this.chart= {
      height: 350,
      type: "line"
    },
    this.stroke={
      width: 1,
      // curve: "smooth"
    }
    this.xaxis= {
      type: "datetime",
      categories: [
        "1/11/2000",
        "2/11/2000",
        "3/11/2000",
        "4/11/2000",
        "5/11/2000",
        "6/11/2000",
        "7/11/2000",
        "8/11/2000",
        "9/11/2000",
        "10/11/2000",
        "11/11/2000",
        "12/11/2000",
        "1/11/2001",
        "2/11/2001",
        "3/11/2001",
        "4/11/2001",
        "5/11/2001",
        "6/11/2001"
      ]
    }
    this.title= {
      text: "Tean Mood",
      align: "left",
      style: {
        fontSize: "16px",
        color: "#666"
      }
    }
    // this.fill={
    //   type: "gradient",
    //   gradient: {
    //     shade: "dark",
    //     gradientToColors: ["#FDD835"],
    //     shadeIntensity: 1,
    //     type: "vertical",
    //     opacityFrom: 1,
    //     opacityTo: 1,
    //     stops: [0, 100, 100, 100]
    //   }
    // }

    this.fill={
      type: "gradient",
      gradient: {
        shade: "dark",
        gradientToColors: ["#FDD835"],
        shadeIntensity: 1,
        type: "vertical",

        opacityFrom: 1,
        opacityTo: 1,

        stops: [0, 100, 100, 100]
      }
    }
    // markers: {
      // size: 4,
      // colors: ["#FFA41B"],
      // strokeColors: "#fff",
      // strokeWidth: 2,
      // hover: {
      //   size: 7
      // }
    // }
   this.yaxis= {
      // min: -10,
      max: 40,
      title: {
        // text: "Engagement"
      }
    }
  }
}

