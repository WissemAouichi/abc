import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { OCCUPANCY_DATA } from "src/app/demodata/sample-data";

declare const Plotly;
@Component({
    selector: 'plotly-line',
    templateUrl:'plotly-line.component.html'
})

export class PlotlyLineComponent implements OnInit{
    @ViewChild('myDiv',{static:false}) myDivContainer!:ElementRef;
    myDiv: any;
    
    constructor(){}
    
    ngOnInit(){
        this.myDiv={
            data: [
              {
                x: ['2019-01-01 22:23:00','2019-01-02 22:23:00','2019-01-03 22:23:00','2019-01-04 22:23:00','2019-01-05 22:23:00','2019-01-06 22:23:00','2019-01-07 22:23:00','2019-01-08 22:23:00','2019-01-09 22:23:00','2019-01-10 22:23:00','2019-01-11 22:23:00','2019-01-12 22:23:00','2019-01-13 22:23:00','2019-01-14 22:23:00','2019-01-15 22:23:00','2019-01-16 22:23:00','2019-01-17 22:23:00','2019-01-18 22:23:00','2019-01-19 22:23:00','2019-01-20 22:23:00','2019-01-21 22:23:00','2019-01-22 22:23:00','2019-01-23 22:23:00','2019-01-24 22:23:00','2019-01-25 22:23:00','2019-01-26 22:23:00','2019-01-27 22:23:00','2019-01-28 22:23:00','2019-01-29 22:23:00','2019-01-30 22:23:00','2019-01-31 22:23:00','2019-02-01 22:23:00','2019-02-02 22:23:00','2019-02-03 22:23:00','2019-02-04 22:23:00','2019-02-05 22:23:00','2019-02-06 22:23:00','2019-02-07 22:23:00','2019-02-08 22:23:00','2019-02-09 22:23:00','2019-02-10 22:23:00','2019-02-11 22:23:00','2019-02-12 22:23:00','2019-02-13 22:23:00','2019-02-14 22:23:00','2019-02-15 22:23:00','2019-02-16 22:23:00','2019-02-17 22:23:00','2019-02-18 22:23:00','2019-02-19 22:23:00','2019-02-20 22:23:00','2019-02-21 22:23:00','2019-02-22 22:23:00','2019-02-23 22:23:00','2019-02-24 22:23:00','2019-02-25 22:23:00','2019-02-26 22:23:00','2019-02-27 22:23:00','2019-02-28 22:23:00','2019-03-01 22:23:00','2019-03-02 22:23:00','2019-03-03 22:23:00','2019-03-04 22:23:00','2019-03-05 22:23:00','2019-03-06 22:23:00','2019-03-07 22:23:00','2019-03-08 22:23:00','2019-03-09 22:23:00','2019-03-10 22:23:00','2019-03-11 22:23:00','2019-03-12 22:23:00','2019-03-13 22:23:00','2019-03-14 22:23:00','2019-03-15 22:23:00','2019-03-16 22:23:00','2019-03-17 22:23:00','2019-03-18 22:23:00','2019-03-19 22:23:00','2019-03-20 22:23:00','2019-03-21 22:23:00','2019-03-22 22:23:00','2019-03-23 22:23:00','2019-03-24 22:23:00','2019-03-25 22:23:00','2019-03-26 22:23:00','2019-03-27 22:23:00','2019-03-28 22:23:00','2019-03-29 22:23:00','2019-03-30 22:23:00','2019-03-31 22:23:00','2019-04-01 22:23:00','2019-04-02 22:23:00','2019-04-03 22:23:00','2019-04-04 22:23:00','2019-04-05 22:23:00','2019-04-06 22:23:00','2019-04-07 22:23:00','2019-04-08 22:23:00','2019-04-09 22:23:00','2019-04-10 22:23:00','2019-04-11 22:23:00','2019-04-12 22:23:00','2019-04-13 22:23:00','2019-04-14 22:23:00','2019-04-15 22:23:00','2019-04-16 22:23:00','2019-04-17 22:23:00','2019-04-18 22:23:00','2019-04-19 22:23:00','2019-04-20 22:23:00','2019-04-21 22:23:00','2019-04-22 22:23:00','2019-04-23 22:23:00','2019-04-24 22:23:00','2019-04-25 22:23:00','2019-04-26 22:23:00','2019-04-27 22:23:00','2019-04-28 22:23:00','2019-04-29 22:23:00','2019-04-30 22:23:00','2019-05-01 22:23:00','2019-05-02 22:23:00','2019-05-03 22:23:00','2019-05-04 22:23:00','2019-05-05 22:23:00','2019-05-06 22:23:00','2019-05-07 22:23:00','2019-05-08 22:23:00','2019-05-09 22:23:00','2019-05-10 22:23:00','2019-05-11 22:23:00','2019-05-12 22:23:00','2019-05-13 22:23:00','2019-05-14 22:23:00','2019-05-15 22:23:00','2019-05-16 22:23:00','2019-05-17 22:23:00','2019-05-18 22:23:00','2019-05-19 22:23:00','2019-05-20 22:23:00','2019-05-21 22:23:00','2019-05-22 22:23:00','2019-05-23 22:23:00','2019-05-24 22:23:00','2019-05-25 22:23:00','2019-05-26 22:23:00','2019-05-27 22:23:00','2019-05-28 22:23:00','2019-05-29 22:23:00','2019-05-30 22:23:00','2019-05-31 22:23:00','2019-06-01 22:23:00','2019-06-02 22:23:00','2019-06-03 22:23:00','2019-06-04 22:23:00','2019-06-05 22:23:00','2019-06-06 22:23:00','2019-06-07 22:23:00','2019-06-08 22:23:00','2019-06-09 22:23:00','2019-06-10 22:23:00','2019-06-11 22:23:00','2019-06-12 22:23:00','2019-06-13 22:23:00','2019-06-14 22:23:00','2019-06-15 22:23:00','2019-06-16 22:23:00','2019-06-17 22:23:00','2019-06-18 22:23:00','2019-06-19 22:23:00','2019-06-20 22:23:00','2019-06-21 22:23:00','2019-06-22 22:23:00','2019-06-23 22:23:00','2019-06-24 22:23:00','2019-06-25 22:23:00','2019-06-26 22:23:00','2019-06-27 22:23:00','2019-06-28 22:23:00','2019-06-29 22:23:00','2019-06-30 22:23:00','2019-07-01 22:23:00','2019-07-02 22:23:00','2019-07-03 22:23:00','2019-07-04 22:23:00','2019-07-05 22:23:00','2019-07-06 22:23:00','2019-07 22:23:00','2019-07-08 22:23:00','2019-07-09 22:23:00','2019-07-10 22:23:00','2019-07-11 22:23:00','2019-07-12 22:23:00','2019-07-13 22:23:00','2019-07-14 22:23:00','2019-07-15 22:23:00','2019-07-16 22:23:00','2019-07-17 22:23:00','2019-07-18 22:23:00','2019-07-19 22:23:00','2019-07-20 22:23:00','2019-07-21 22:23:00','2019-07-22 22:23:00','2019-07-23 22:23:00','2019-07-24 22:23:00','2019-07-25 22:23:00','2019-07-26 22:23:00','2019-07-27 22:23:00','2019-07-28 22:23:00','2019-07-29 22:23:00','2019-07-30 22:23:00','2019-07-31 22:23:00','2019-08-01 22:23:00','2019-08-01 22:23:00','2019-08-02 22:23:00','2019-08-03 22:23:00','2019-08-04 22:23:00','2019-08-05 22:23:00','2019-08-06 22:23:00','2019-08-07 22:23:00','2019-08-08 22:23:00','2019-08-09 22:23:00','2019-08-10 22:23:00','2019-08-11 22:23:00','2019-08-12 22:23:00','2019-08-13 22:23:00','2019-08-14 22:23:00','2019-08-15 22:23:00','2019-08-16 22:23:00','2019-08-17 22:23:00','2019-08-18 22:23:00','2019-08-19 22:23:00','2019-08-20 22:23:00','2019-08-21 22:23:00','2019-08-22 22:23:00','2019-08-23 22:23:00','2019-08-24 22:23:00','2019-08-25 22:23:00','2019-08-26 22:23:00','2019-08-27 22:23:00','2019-08-28 22:23:00','2019-08-29 22:23:00','2019-08-30 22:23:00'],
                y: [100,100,100,99,100,100,100,100,100,100,100,100,98,100,100,97,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,99,100,100,100,100,100,100,100,100,98,100,100,97,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,99,100,100,100,100,100,100,100,100,98,100,100,97,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,99,100,100,100,100,100,100,100,100,98,100,100,97,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,99,100,100,100,100,100,100,100,100,98,100,100,97,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,99,100,100,100,100,100,100,100,100,98,100,100,97,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,99,100,100,100,100,100,100,100,100,98,100,100,97,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,99,100,100,100,100,100,100,100,100,98,100,100,97,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100],
                type:'scatter',
                name: 'Capacity',
                mode: "markers+lines"
              },
              {
                x: ['2019-01-01 22:23:00','2019-01-02 22:23:00','2019-01-03 22:23:00','2019-01-04 22:23:00','2019-01-05 22:23:00','2019-01-06 22:23:00','2019-01-07 22:23:00','2019-01-08 22:23:00','2019-01-09 22:23:00','2019-01-10 22:23:00','2019-01-11 22:23:00','2019-01-12 22:23:00','2019-01-13 22:23:00','2019-01-14 22:23:00','2019-01-15 22:23:00','2019-01-16 22:23:00','2019-01-17 22:23:00','2019-01-18 22:23:00','2019-01-19 22:23:00','2019-01-20 22:23:00','2019-01-21 22:23:00','2019-01-22 22:23:00','2019-01-23 22:23:00','2019-01-24 22:23:00','2019-01-25 22:23:00','2019-01-26 22:23:00','2019-01-27 22:23:00','2019-01-28 22:23:00','2019-01-29 22:23:00','2019-01-30 22:23:00','2019-01-31 22:23:00','2019-02-01 22:23:00','2019-02-02 22:23:00','2019-02-03 22:23:00','2019-02-04 22:23:00','2019-02-05 22:23:00','2019-02-06 22:23:00','2019-02-07 22:23:00','2019-02-08 22:23:00','2019-02-09 22:23:00','2019-02-10 22:23:00','2019-02-11 22:23:00','2019-02-12 22:23:00','2019-02-13 22:23:00','2019-02-14 22:23:00','2019-02-15 22:23:00','2019-02-16 22:23:00','2019-02-17 22:23:00','2019-02-18 22:23:00','2019-02-19 22:23:00','2019-02-20 22:23:00','2019-02-21 22:23:00','2019-02-22 22:23:00','2019-02-23 22:23:00','2019-02-24 22:23:00','2019-02-25 22:23:00','2019-02-26 22:23:00','2019-02-27 22:23:00','2019-02-28 22:23:00','2019-03-01 22:23:00','2019-03-02 22:23:00','2019-03-03 22:23:00','2019-03-04 22:23:00','2019-03-05 22:23:00','2019-03-06 22:23:00','2019-03-07 22:23:00','2019-03-08 22:23:00','2019-03-09 22:23:00','2019-03-10 22:23:00','2019-03-11 22:23:00','2019-03-12 22:23:00','2019-03-13 22:23:00','2019-03-14 22:23:00','2019-03-15 22:23:00','2019-03-16 22:23:00','2019-03-17 22:23:00','2019-03-18 22:23:00','2019-03-19 22:23:00','2019-03-20 22:23:00','2019-03-21 22:23:00','2019-03-22 22:23:00','2019-03-23 22:23:00','2019-03-24 22:23:00','2019-03-25 22:23:00','2019-03-26 22:23:00','2019-03-27 22:23:00','2019-03-28 22:23:00','2019-03-29 22:23:00','2019-03-30 22:23:00','2019-03-31 22:23:00','2019-04-01 22:23:00','2019-04-02 22:23:00','2019-04-03 22:23:00','2019-04-04 22:23:00','2019-04-05 22:23:00','2019-04-06 22:23:00','2019-04-07 22:23:00','2019-04-08 22:23:00','2019-04-09 22:23:00','2019-04-10 22:23:00','2019-04-11 22:23:00','2019-04-12 22:23:00','2019-04-13 22:23:00','2019-04-14 22:23:00','2019-04-15 22:23:00','2019-04-16 22:23:00','2019-04-17 22:23:00','2019-04-18 22:23:00','2019-04-19 22:23:00','2019-04-20 22:23:00','2019-04-21 22:23:00','2019-04-22 22:23:00','2019-04-23 22:23:00','2019-04-24 22:23:00','2019-04-25 22:23:00','2019-04-26 22:23:00','2019-04-27 22:23:00','2019-04-28 22:23:00','2019-04-29 22:23:00','2019-04-30 22:23:00','2019-05-01 22:23:00','2019-05-02 22:23:00','2019-05-03 22:23:00','2019-05-04 22:23:00','2019-05-05 22:23:00','2019-05-06 22:23:00','2019-05-07 22:23:00','2019-05-08 22:23:00','2019-05-09 22:23:00','2019-05-10 22:23:00','2019-05-11 22:23:00','2019-05-12 22:23:00','2019-05-13 22:23:00','2019-05-14 22:23:00','2019-05-15 22:23:00','2019-05-16 22:23:00','2019-05-17 22:23:00','2019-05-18 22:23:00','2019-05-19 22:23:00','2019-05-20 22:23:00','2019-05-21 22:23:00','2019-05-22 22:23:00','2019-05-23 22:23:00','2019-05-24 22:23:00','2019-05-25 22:23:00','2019-05-26 22:23:00','2019-05-27 22:23:00','2019-05-28 22:23:00','2019-05-29 22:23:00','2019-05-30 22:23:00','2019-05-31 22:23:00','2019-06-01 22:23:00','2019-06-02 22:23:00','2019-06-03 22:23:00','2019-06-04 22:23:00','2019-06-05 22:23:00','2019-06-06 22:23:00','2019-06-07 22:23:00','2019-06-08 22:23:00','2019-06-09 22:23:00','2019-06-10 22:23:00','2019-06-11 22:23:00','2019-06-12 22:23:00','2019-06-13 22:23:00','2019-06-14 22:23:00','2019-06-15 22:23:00','2019-06-16 22:23:00','2019-06-17 22:23:00','2019-06-18 22:23:00','2019-06-19 22:23:00','2019-06-20 22:23:00','2019-06-21 22:23:00','2019-06-22 22:23:00','2019-06-23 22:23:00','2019-06-24 22:23:00','2019-06-25 22:23:00','2019-06-26 22:23:00','2019-06-27 22:23:00','2019-06-28 22:23:00','2019-06-29 22:23:00','2019-06-30 22:23:00','2019-07-01 22:23:00','2019-07-02 22:23:00','2019-07-03 22:23:00','2019-07-04 22:23:00','2019-07-05 22:23:00','2019-07-06 22:23:00','2019-07 22:23:00','2019-07-08 22:23:00','2019-07-09 22:23:00','2019-07-10 22:23:00','2019-07-11 22:23:00','2019-07-12 22:23:00','2019-07-13 22:23:00','2019-07-14 22:23:00','2019-07-15 22:23:00','2019-07-16 22:23:00','2019-07-17 22:23:00','2019-07-18 22:23:00','2019-07-19 22:23:00','2019-07-20 22:23:00','2019-07-21 22:23:00','2019-07-22 22:23:00','2019-07-23 22:23:00','2019-07-24 22:23:00','2019-07-25 22:23:00','2019-07-26 22:23:00','2019-07-27 22:23:00','2019-07-28 22:23:00','2019-07-29 22:23:00','2019-07-30 22:23:00','2019-07-31 22:23:00','2019-08-01 22:23:00','2019-08-01 22:23:00','2019-08-02 22:23:00','2019-08-03 22:23:00','2019-08-04 22:23:00','2019-08-05 22:23:00','2019-08-06 22:23:00','2019-08-07 22:23:00','2019-08-08 22:23:00','2019-08-09 22:23:00','2019-08-10 22:23:00','2019-08-11 22:23:00','2019-08-12 22:23:00','2019-08-13 22:23:00','2019-08-14 22:23:00','2019-08-15 22:23:00','2019-08-16 22:23:00','2019-08-17 22:23:00','2019-08-18 22:23:00','2019-08-19 22:23:00','2019-08-20 22:23:00','2019-08-21 22:23:00','2019-08-22 22:23:00','2019-08-23 22:23:00','2019-08-24 22:23:00','2019-08-25 22:23:00','2019-08-26 22:23:00','2019-08-27 22:23:00','2019-08-28 22:23:00','2019-08-29 22:23:00','2019-08-30 22:23:00'],
                y: [41,78,48,42,28,23,23,30,93,14,32,36,10,75,58,78,50,7,24,50,42,25,39,17,38,88,62,52,44,72,75,41,78,47,42,28,23,23,30,93,14,32,36,10,75,58,78,50,7,24,50,42,25,39,17,38,88,62,52,41,78,48,42,28,23,23,30,93,14,32,36,10,75,58,78,50,7,24,50,42,25,39,17,38,88,62,52,44,72,75,41,78,48,42,28,23,23,30,93,14,32,36,10,75,58,78,50,7,24,50,42,25,39,17,38,88,62,52,44,72,41,78,48,42,28,23,23,30,93,14,32,36,10,75,58,78,50,7,24,50,42,25,39,17,38,88,62,52,44,72,75,41,78,48,42,28,23,23,30,93,14,32,36,10,75,58,78,50,7,24,50,42,25,39,17,38,88,62,52,44,72,41,78,48,42,28,23,23,30,93,14,32,36,10,75,58,78,50,7,24,50,42,25,39,17,38,88,62,52,44,72,75,41,78,48,42,28,23,23,30,93,14,32,36,10,75,58,78,50,7,24,50,42,25,39,17,38,88,62,52,44,72,75],
                type:'scatter',
                name: 'Occupancy',
                mode: "markers+lines"
              },
            ],
            layout: {
              xaxis: {
                autorange: true,
                range: ['2015-02-17', '2017-02-16'],
                rangeselector: {buttons: [
                    {
                      count: 1,
                      label: '1m',
                      step: 'month',
                      stepmode: 'backward'
                    },
                    {
                      count: 6,
                      label: '6m',
                      step: 'month',
                      stepmode: 'backward'
                    },
                    {step: 'all'}
                  ]},
                rangeslider: {range: ['2019-01-01', '2019-09-01']},
                type: 'date'
              },
              yaxis: {
                autorange: true,
                range: [26.8700008333, 138.870004167],
                type: 'linear'
              }
            }
        };
    }
    ngAfterViewInit() {
        Plotly.newPlot(
            this.myDivContainer.nativeElement,
            this.myDiv.data,
            this.myDiv.layout,
            this.myDiv.config
        );
    }
}