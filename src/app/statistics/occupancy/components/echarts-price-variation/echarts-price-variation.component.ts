import { Component } from "@angular/core";
import { EChartsOption } from "echarts";
import PRICE_VARIATION from '../price-variation/Price Variation.json'

@Component({
  selector: 'echarts-price',
  template: `<div echarts [options]="chartOption" class="demo-chart"></div>
    `
})

export class EchartsPriceComponent {
  priceData = PRICE_VARIATION.chartDataTreeSet

  chartOption: EChartsOption = {
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgb(0,0,0)'
    },
    title: {
      left: 'center',
      text: 'Price Variation',
    },
    toolbox: {
      feature: {
        dataZoom: {
          yAxisIndex: 'none'
        },
        restore: {},
        saveAsImage: {}
      }
    },
    xAxis: {

      data: ['2019-01-01', '2019-01-02', '2019-01-03', '2019-01-04', '2019-01-05', '2019-01-06', '2019-01-07', '2019-01-08', '2019-01-09', '2019-01-10', '2019-01-11', '2019-01-12', '2019-01-13', '2019-01-14', '2019-01-15', '2019-01-16', '2019-01-17', '2019-01-18', '2019-01-19', '2019-01-20', '2019-01-21', '2019-01-22', '2019-01-23', '2019-01-24', '2019-01-25', '2019-01-26', '2019-01-27', '2019-01-28', '2019-01-29', '2019-01-30', '2019-01-31', '2019-02-01', '2019-02-02', '2019-02-03', '2019-02-04', '2019-02-05', '2019-02-06', '2019-02-07', '2019-02-08', '2019-02-09', '2019-02-10', '2019-02-11', '2019-02-12', '2019-02-13', '2019-02-14', '2019-02-15', '2019-02-16', '2019-02-17', '2019-02-18', '2019-02-19', '2019-02-20', '2019-02-21', '2019-02-22', '2019-02-23', '2019-02-24', '2019-02-25', '2019-02-26', '2019-02-27', '2019-02-28', '2019-03-01', '2019-03-02', '2019-03-03', '2019-03-04', '2019-03-05', '2019-03-06', '2019-03-07', '2019-03-08', '2019-03-09', '2019-03-10', '2019-03-11', '2019-03-12', '2019-03-13', '2019-03-14', '2019-03-15', '2019-03-16', '2019-03-17', '2019-03-18', '2019-03-19', '2019-03-20', '2019-03-21', '2019-03-22', '2019-03-23', '2019-03-24', '2019-03-25', '2019-03-26', '2019-03-27', '2019-03-28', '2019-03-29', '2019-03-30', '2019-03-31', '2019-04-01', '2019-04-02', '2019-04-03', '2019-04-04', '2019-04-05', '2019-04-06', '2019-04-07', '2019-04-08', '2019-04-09', '2019-04-10', '2019-04-11', '2019-04-12', '2019-04-13', '2019-04-14', '2019-04-15', '2019-04-16', '2019-04-17', '2019-04-18', '2019-04-19', '2019-04-20', '2019-04-21', '2019-04-22', '2019-04-23', '2019-04-24', '2019-04-25', '2019-04-26', '2019-04-27', '2019-04-28', '2019-04-29', '2019-04-30', '2019-05-01', '2019-05-02', '2019-05-03', '2019-05-04', '2019-05-05', '2019-05-06', '2019-05-07', '2019-05-08', '2019-05-09', '2019-05-10', '2019-05-11', '2019-05-12', '2019-05-13', '2019-05-14', '2019-05-15', '2019-05-16', '2019-05-17', '2019-05-18', '2019-05-19', '2019-05-20', '2019-05-21', '2019-05-22', '2019-05-23', '2019-05-24', '2019-05-25', '2019-05-26', '2019-05-27', '2019-05-28', '2019-05-29', '2019-05-30', '2019-05-31', '2019-06-01', '2019-06-02', '2019-06-03', '2019-06-04', '2019-06-05', '2019-06-06', '2019-06-07', '2019-06-08', '2019-06-09', '2019-06-10', '2019-06-11', '2019-06-12', '2019-06-13', '2019-06-14', '2019-06-15', '2019-06-16', '2019-06-17', '2019-06-18', '2019-06-19', '2019-06-20', '2019-06-21', '2019-06-22', '2019-06-23', '2019-06-24', '2019-06-25', '2019-06-26', '2019-06-27', '2019-06-28', '2019-06-29', '2019-06-30', '2019-07-01', '2019-07-02', '2019-07-03', '2019-07-04', '2019-07-05', '2019-07-06', '2019-07-07', '2019-07-08', '2019-07-09', '2019-07-10', '2019-07-11', '2019-07-12', '2019-07-13', '2019-07-14', '2019-07-15', '2019-07-16', '2019-07-17', '2019-07-18', '2019-07-19', '2019-07-20', '2019-07-21', '2019-07-22', '2019-07-23', '2019-07-24', '2019-07-25', '2019-07-26', '2019-07-27', '2019-07-28', '2019-07-29', '2019-07-30', '2019-07-31', '2019-08-01', '2019-08-01', '2019-08-02', '2019-08-03', '2019-08-04', '2019-08-05', '2019-08-06', '2019-08-07', '2019-08-08', '2019-08-09', '2019-08-10', '2019-08-11', '2019-08-12', '2019-08-13', '2019-08-14', '2019-08-15', '2019-08-16', '2019-08-17', '2019-08-18', '2019-08-19', '2019-08-20', '2019-08-21', '2019-08-22', '2019-08-23', '2019-08-24', '2019-08-25', '2019-08-26', '2019-08-27', '2019-08-28', '2019-08-29', '2019-08-30'],
      boundaryGap: false
    },
    yAxis: {
      type: 'value',
      min: 'dataMin'
    },
    dataZoom: [{
      type: 'inside',
      start: 0,
      end: 20
    }, {
      start: 0,
      end: 20
    }],
    series: [
      {
        name: 'Price Decision',
        type: 'line',
        smooth: false,
        symbol: 'none',
        data: this.maplblPriceDecision()
      },
      {
        name: 'Max Price',
        type: 'line',
        color: '#e4e6e8',
        smooth: false,
        symbol: 'none',
        itemStyle: {
          color: "#e4e6e8"
        },
        data: this.maplblMaxPrice(),
        areaStyle: { color: "#e4e6e8" }
      },
      {
        name: 'Min Price',
        type: 'line',
        color: "#FFFF",
        smooth: false,
        symbol: 'none',
        data: this.maplblMinPrice(),
        areaStyle: { color: "#FFFF" }
      },
      {
        name: 'Current Price',
        type: 'line',
        smooth: false,
        symbol: 'none',
        data: this.maplblCurrentPrice()
      },
    ]
  };
  private maplblMaxPrice() {
    let arr = [];
    for (let i = 0; i < this.priceData[0].values.length; i++) {
      arr.push(this.priceData[0].values[i].y)
    }
    return (arr);
  }
  private maplblMinPrice() {
    let arr = [];
    for (let i = 0; i < this.priceData[1].values.length; i++) {
      arr.push(this.priceData[1].values[i].y)
    }
    return (arr);
  }
  private maplblCurrentPrice() {
    let arr = [];
    for (let i = 0; i < this.priceData[3].values.length; i++) {
      arr.push(this.priceData[3].values[i].y)
    }
    return (arr);
  }
  private maplblPriceDecision() {
    let arr = [];
    for (let i = 0; i < this.priceData[4].values.length; i++) {
      arr.push(this.priceData[4].values[i].y)
    }
    return (arr);
  }
}
