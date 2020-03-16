import React, { Component } from "react";
import CanvasJSReact from "./assets/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class VisitorsCharts extends Component {
  constructor() {
    super();
    this.toggleDataSeries = this.toggleDataSeries.bind(this);
  }
  toggleDataSeries(e) {
    if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    this.chart.render();
  }
  redemption = num => {
    let value = 0;
    num.map(dd => (value = value + dd.redemptions));
    console.log(value);
    return value;
  };
  render() {
    const data = { ...this.chart };
    const dd = [];
    const dd2 = [];
    const dd3 = [];
    const dd4 = [];
    const tabvalue = this.props.tabValue;

    if (this.props.type == "rewards") {
      const dayData = this.props.chartData
        ? this.props.chartData[tabvalue].map(ele => {
            if (ele.rewards) {
              dd.push({
                label: ele.date,
                y: ele.rewards[0].redemptions,
                color: this.props.color1,
                name: "redemptions"
              });
              dd2.push({
                label: ele.date,
                y: ele.rewards[1].redemptions,
                color: this.props.color2,
                name: "redemptions"
              });
              dd3.push({
                label: ele.date,
                y: ele.rewards[2].redemptions,
                color: this.props.color3,
                name: "redemptions"
              });
              dd4.push({
                label: ele.date,
                y: ele.rewards[3].redemptions,
                color: this.props.color4,
                name: "redemptions"
              });
            }
          })
        : "";
    } else {
      const dayData = this.props.chartData
        ? this.props.chartData[tabvalue].map(ele => {
            dd.push({
              label: ele.date,
              y: ele["returning customer"],
              color: this.props.color1,
              name: "returning customer"
            });
            dd2.push({
              label: ele.date,
              y: ele["new customers"],
              color: this.props.color2,
              name: "new customers"
            });
          })
        : "";
    }

    const options = {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "",
        fontFamily: "verdana"
      },
      axisY: {
        title: this.props.yaxis
      },
      toolTip: {
        shared: true,
        reversed: true
      },
      height: 170,
      width: 800,
      toolTip: {
        content: "{name}: {y}"
      },
      axisX: {
        interval: 1,
        intervalType: "day",
        maximum: 30
      },
      dataPointWidth: 20,
      data: [
        {
          type: "stackedColumn",
          dataPoints: dd
        },
        {
          type: "stackedColumn",
          dataPoints: dd2
        },

        {
          type: "stackedColumn",
          dataPoints: dd3
        },
        {
          type: "stackedColumn",
          dataPoints: dd4
        }
      ]
    };

    return (
      <div>
        <CanvasJSChart options={options} onRef={ref => (this.chart = ref)} />
      </div>
    );
  }
}

export default VisitorsCharts;
