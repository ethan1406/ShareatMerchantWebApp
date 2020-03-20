import React, { Component } from "react";
import CanvasJSReact from "./assets/canvasjs.react";
import { getStartDay, getEndDay } from "../utils/helpers";
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

    return value;
  };
  render() {
    const data = { ...this.chart };
    let dd = [];
    let dd2 = [];
    let dd3 = [];
    let dd4 = [];
    let labelVal = "";
    const tabvalue = this.props.tabValue;

    if (this.props.type == "rewards") {
      const dayData = this.props.chartData
        ? this.props.chartData.map(ele => {
            if (tabvalue === "week") {
              var week = ele.date.split(" ")[0];
              var year = ele.date.split(" ")[1];

              labelVal =
                getStartDay(week, year) + " ~ " + getEndDay(week, year);
            } else {
              labelVal = ele.date;
            }

            if (ele.rewards) {
              dd.push({
                label: labelVal,
                y: ele.rewards[0].redemptions,
                color: this.props.color1,
                name: ele.rewards[0].reward
              });
              if (ele.rewards[1]) {
                dd2.push({
                  label: labelVal,
                  y: ele.rewards[1].redemptions,
                  color: this.props.color2,
                  name: ele.rewards[1].reward
                });
              } else {
                dd2.push({
                  label: labelVal,
                  y: 0,
                  color: this.props.color2,
                  name: ""
                });
              }

              if (ele.rewards[2]) {
                dd3.push({
                  label: labelVal,
                  y: ele.rewards[2].redemptions,
                  color: this.props.color3,
                  name: ele.rewards[2].reward
                });
              } else {
                dd3.push({
                  label: labelVal,
                  y: 0,
                  color: this.props.color3,
                  name: ""
                });
              }

              if (ele.rewards[3]) {
                dd4.push({
                  label: labelVal,
                  y: ele.rewards[3].redemptions,
                  color: this.props.color4,
                  name: ele.rewards[3].reward
                });
              } else {
                dd4.push({
                  label: labelVal,
                  y: 0,
                  color: this.props.color4,
                  name: ""
                });
              }
            }
          })
        : "";
    } else {
      const dayData = this.props.chartData
        ? this.props.chartData.map(ele => {
            if (tabvalue === "week") {
              var week = ele.date.split(" ")[0];
              var year = ele.date.split(" ")[1];

              labelVal =
                getStartDay(week, year) + " ~ " + getEndDay(week, year);
            } else {
              labelVal = ele.date;
            }
            dd.push({
              label: labelVal,
              y: ele["returning customer"],
              color: this.props.color1,
              name: "returning customer"
            });
            dd2.push({
              label: labelVal,
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
        // title: this.props.yaxis
        gridThickness: 0
      },
      toolTip: {
        shared: true,
        reversed: true
      },
      height: 170,
      width: 480,
      toolTip: {
        content: "{name}: {y}"
      },
      axisX: {
        interval: 1,
        intervalType: "day"
      },
      dataPointWidth: 30,
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
