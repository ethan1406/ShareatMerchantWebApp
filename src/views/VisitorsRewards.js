import React, { Component } from "react";
import axios from "axios";
import Offers from "./Offers";
import VisitorsCharts from "../container/Layout/Charts/VisitorsCharts";
import {
  currentdate,
  currentWeek,
  changeName,
  dateValue,
  yesterdayDate,
  changeYesterday,
  getMondayOfCurrentWeek,
  getSundayOfCurrentWeek,
  getEndDay,
  getStartDay
} from "../container/Layout/utils/helpers";

import { Auth } from 'aws-amplify'
import {baseUrl} from '../Constants'

class VisitorsRewards extends Component {
  state = {
    start: 0,
    end: 6,
    data: [],
    nData: []
  };

  async componentDidMount() {
    try {
      const user = await Auth.currentSession();
      console.log(user.accessToken.payload.sub);
      const {data} = await axios.get(`${baseUrl}/${user.accessToken.payload.sub}/${dateValue()}`);
        this.setState({ data: data, tabValue: "day" }, () => {
          this.mainData();
          this.visitorsPeriod();
          this.rewardsPeriod();
      });
    } catch (err) {
      console.log(err);
    }
  }

  mainData() {
    let newData = [];
    let startno = this.state.start;
    let endno = this.state.end;
    let tabValue = this.state.tabValue;
    let data = this.state.data;
    if (data[tabValue]) {
      if (data[tabValue].length < endno) {
        endno = data[tabValue].length - 1;
      }
    }

    for (let i = endno; i >= startno; i--) {
      const aa = this.state.data
        ? newData.push(
            this.state.data[tabValue] ? this.state.data[tabValue][i] : ""
          )
        : "";
    }
    
    const currentData = this.state.data[this.state.tabValue]
    var shouldDisabled = "0"
    if (currentData != undefined) {
      if (currentData.length > this.state.end) {
        shouldDisabled = "1"
      }
    } 

    this.setState(
      {
        nData: newData,
        disabled: shouldDisabled
      },
      () => ""
    );
  }

  tabLink(e) {
    const currentData = this.state.data[this.state.tabValue]
    var shouldDisabled = "0"
    if (currentData != undefined) {
      if (currentData.length > this.state.end) {
        shouldDisabled = "1"
      }
    } 

    this.setState(
      {
        ...this.state.data,
        tabValue: e.target.value,
        start: 0,
        end: 6,
        disabled: shouldDisabled
      },
      () => {
        this.mainData();
        this.visitorsPeriod();
        this.rewardsPeriod();
      }
    );
  }
  MoveLeft(e) {
    let tabValue = this.state.tabValue;
    let vale = this.state.end + 7;
    this.setState(
      {
        start: this.state.start + 7,
        end: this.state.end + 7
      },
      () => {
        this.mainData();
      }
    );
  }

  MoveRight(e) {
    let tabValue = this.state.tabValue;
    this.setState(
      {
        start:
          this.state.start == "0" ? this.state.start : this.state.start - 7,
        end: this.state.start == "0" ? this.state.end : this.state.end - 7
      },
      () => this.mainData()
    );
  }

  visitorsPeriod() {
    let thisperiod = 0;
    let lastperiod = 0;
    let percentage = 0;
    let tabValue = this.state.tabValue;
    let status = 1;

    if (this.state.data[tabValue] != undefined) {
      this.state.data[tabValue].map(ele => {
      if (ele.date === changeName(tabValue)) {
        thisperiod = ele["returning customer"] + ele["new customers"];
      } else if (ele.date === changeYesterday(tabValue)) {
        lastperiod = ele["returning customer"] + ele["new customers"];
      }
      });
    }
    
    if (thisperiod - lastperiod > 0) {
      percentage = parseInt(
        ((thisperiod - lastperiod) / (thisperiod + lastperiod)) * 100
      );
    } else if (thisperiod - lastperiod < 0) {
      let checkval = thisperiod - lastperiod;
      status = Math.sign(checkval);
      percentage = parseInt(
        ((lastperiod - thisperiod) / (thisperiod + lastperiod)) * 100
      );
    } else {
      percentage = 0;
    }

    this.setState(
      {
        thisperiodVis: thisperiod,
        lastperiodVis: lastperiod,
        perVis: percentage,
        status: status
      },
      () => ""
    );
  }

  rewardsPeriod() {
    let thisperiod = 0;
    let lastperiod = 0;
    let percentage = 0;
    let curRew = 0;
    let prevRew = 0;
    let perRew = 0;
    let status = 1;
    let tabValue = this.state.tabValue;

    if (this.state.data[tabValue] != undefined) {
      this.state.data[tabValue].map(ele => {
      if (ele.date === changeName(tabValue)) {
        if (ele.rewards) {
          let value = 0;
          ele.rewards.map(rslt => {
            value = value + rslt.redemptions;
          });
          curRew = value;
        }
      } else if (ele.date === changeYesterday(tabValue)) {
        if (ele.rewards) {
          let value = 0;
          ele.rewards.map(rslt => {
            value = value + rslt.redemptions;
          });
          prevRew = value;
        }
       }
      });
    }

    if (curRew - prevRew > 0) {
      perRew = parseInt(((curRew - prevRew) / (curRew + prevRew)) * 100);
    } else if (curRew - prevRew < 0) {
      let checkval = curRew - prevRew;
      status = Math.sign(checkval);
      perRew = parseInt(((prevRew - curRew) / (curRew + prevRew)) * 100);
    } else {
      perRew = 0;
    }
    //status = Math.sign(perRew);
    this.setState(
      {
        thisperiodRew: curRew,
        lastperiodRew: prevRew,
        perRew: perRew,
        statusRew: status
      },
      () => ""
    );
  }

  render() {
    const { data } = this.state;

    return data ? (
      <div>
        <section className="profile-details pt-5">
          <div className="container">
            <div className="row pt-3">
              <div className="col-md-12">
                <a className="text-muted float-sm-left py-2 pr-2 d-block text-center">
                  <i
                    className={`fa fa-angle-left mr-2 ${
                      this.state.disabled == "0" ? "disabled" : ""
                    }`}
                    aria-hidden="true"
                    onClick={e => this.MoveLeft(e)}
                  ></i>

                  <i
                    className={`fa fa-angle-right ml-2  ${
                      this.state.start == "0" ? "disabled" : ""
                    }`}
                    aria-hidden="true"
                    onClick={e => this.MoveRight(e)}
                  ></i>
                </a>
                <ul
                  className="nav nav-pills mb-3 mx-4 border rounded d-flex"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item">
                    <input
                      className="nav-link active border-right"
                      id="pills-home-tab"
                      data-toggle="pill"
                      href="#pills-day"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                      value="day"
                      onClick={e => this.tabLink(e)}
                    />
                  </li>
                  <li className="nav-item">
                    <input
                      className="nav-link border-right rounded-0"
                      id="pills-profile-tab"
                      data-toggle="pill"
                      href="#pills-week"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                      value="week"
                      onClick={e => this.tabLink(e)}
                    />
                  </li>
                  <li className="nav-item">
                    <input
                      className="nav-link"
                      id="pills-contact-tab"
                      data-toggle="pill"
                      href="#pills-month"
                      role="tab"
                      aria-controls="pills-contact"
                      aria-selected="false"
                      value="month"
                      onClick={e => this.tabLink(e)}
                    />
                  </li>
                </ul>
                <div className="tab-content pt-4 pt-md-0" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-day"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                  >
                    <div className="col-md-12 mb-4">
                      <div className="row">
                        <h4 className="text-orange">Visitors</h4>
                      </div>
                      <div className="row justify-content-between chart_section">
                        <div className="col-md-5 col-12 border rounded mb-4">
                          <div className="visitors-section">
                            <VisitorsCharts
                              chartData={this.state.nData}
                              color1="#ffae42"
                              color2="#78dbff"
                              yaxis="Returing Payments"
                              type="visitors"
                              tabValue={this.state.tabValue}
                            />
                          </div>
                        </div>
                        <div className="col-md-5 col-12 border rounded mb-4">
                          <div className="duration-section d-flex h-100 align-items-center px-4">
                            <div className="current-period d-flex align-items-center border-right">
                              <div className="current-value">
                                <span className="d-block text-center">
                                  {this.state.thisperiodVis}
                                </span>
                                <span className="d-block text-muted text-center">
                                  This Period
                                </span>
                              </div>
                              {this.state.status == "1" ? (
                                <div className="value-diffence text-green">
                                  <i className="fas fa-caret-up fa-2x"></i>
                                  <span>{this.state.perVis}%</span>
                                </div>
                              ) : (
                                <div className="value-diffence text-red">
                                  <i className="fas fa-caret-down fa-2x"></i>
                                  <span>{this.state.perVis}%</span>
                                </div>
                              )}
                            </div>
                            <div className="last-period">
                              <span className="d-block text-center">
                                {this.state.lastperiodVis}
                              </span>
                              <span className="d-block text-muted text-center">
                                Last Period
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="row">
                        <h4 className="text-orange">Rewards</h4>
                      </div>
                      <div className="row justify-content-between chart_section">
                        <div className="col-md-5 col-12 border rounded mb-4">
                          <div className="rewards-section">
                            <VisitorsCharts
                              chartData={this.state.nData}
                              tabValue={this.state.tabValue}
                              color1="#f9a5ff"
                              color2="#80aaff"
                              color3="#ff7a7a"
                              color4="#8510d8"
                              type="rewards"
                              yaxis="Shareat Payments"
                            />
                          </div>
                        </div>
                        <div className="col-md-5 col-12 border rounded mb-4">
                          <div className="duration-section d-flex h-100 align-items-center px-4">
                            <div className="current-period d-flex align-items-center border-right">
                              <div className="current-value">
                                <span className="d-block text-center">
                                  {this.state.thisperiodRew}
                                </span>
                                <span className="d-block text-muted text-center">
                                  This Period
                                </span>
                              </div>
                              {this.state.statusRew == "1" ? (
                                <div className="value-diffence text-green">
                                  <i className="fas fa-caret-up fa-2x"></i>
                                  <span>{this.state.perRew}%</span>
                                </div>
                              ) : (
                                <div className="value-diffence text-red">
                                  <i className="fas fa-caret-down fa-2x"></i>
                                  <span>{this.state.perRew}%</span>
                                </div>
                              )}
                            </div>
                            <div className="last-period">
                              <span className="d-block text-center">
                                {this.state.lastperiodRew}
                              </span>
                              <span className="d-block text-muted text-center">
                                Last Period
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-week"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                  >
                    <div className="col-md-12 mb-4">
                      <div className="row">
                        <h4 className="text-orange">Visitors</h4>
                      </div>
                      <div className="row justify-content-between chart_section">
                        <div className="col-md-5 col-12 border rounded mb-4">
                          <div className="visitors-section">
                            <VisitorsCharts
                              chartData={this.state.nData}
                              color1="#ffae42"
                              color2="#78dbff"
                              yaxis="Returing Payments"
                              type="visitors"
                              tabValue={this.state.tabValue}
                            />
                          </div>
                        </div>
                        <div className="col-md-5 col-12 border rounded mb-4">
                          <div className="duration-section d-flex h-100 align-items-center px-4">
                            <div className="current-period d-flex align-items-center border-right">
                              <div className="current-value">
                                <span className="d-block text-center">
                                  {this.state.thisperiodVis}
                                </span>
                                <span className="d-block text-muted text-center">
                                  This Period
                                </span>
                              </div>
                              {this.state.status == "1" ? (
                                <div className="value-diffence text-green">
                                  <i className="fas fa-caret-up fa-2x"></i>
                                  <span>{this.state.perVis}%</span>
                                </div>
                              ) : (
                                <div className="value-diffence text-red">
                                  <i className="fas fa-caret-down fa-2x"></i>
                                  <span>{this.state.perVis}%</span>
                                </div>
                              )}
                            </div>
                            <div className="last-period">
                              <span className="d-block text-center">
                                {this.state.lastperiodVis}
                              </span>
                              <span className="d-block text-muted text-center">
                                Last Period
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="row">
                        <h4 className="text-orange">Rewards</h4>
                      </div>
                      <div className="row justify-content-between chart_section">
                        <div className="col-md-5 border rounded mb-4">
                          <div className="rewards-section">
                            <VisitorsCharts
                              chartData={this.state.nData}
                              tabValue={this.state.tabValue}
                              color1="#f9a5ff"
                              color2="#80aaff"
                              color3="#ff7a7a"
                              color4="#8510d8"
                              type="rewards"
                              yaxis="Shareat Payments"
                            />
                          </div>
                        </div>
                        <div className="col-md-5 border rounded mb-4">
                          <div className="duration-section d-flex h-100 align-items-center px-4">
                            <div className="current-period d-flex align-items-center border-right">
                              <div className="current-value">
                                <span className="d-block text-center">
                                  {this.state.thisperiodRew}
                                </span>
                                <span className="d-block text-muted text-center">
                                  This Period
                                </span>
                              </div>
                              {this.state.statusRew == "1" ? (
                                <div className="value-diffence text-green">
                                  <i className="fas fa-caret-up fa-2x"></i>
                                  <span>{this.state.perRew}%</span>
                                </div>
                              ) : (
                                <div className="value-diffence text-red">
                                  <i className="fas fa-caret-down fa-2x"></i>
                                  <span>{this.state.perRew}%</span>
                                </div>
                              )}
                            </div>
                            <div className="last-period">
                              <span className="d-block text-center">
                                {this.state.lastperiodRew}
                              </span>
                              <span className="d-block text-muted text-center">
                                Last Period
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-month"
                    role="tabpanel"
                    aria-labelledby="pills-contact-tab"
                  >
                    <div className="col-md-12 mb-4">
                      <div className="row">
                        <h4 className="text-orange">Visitors</h4>
                      </div>
                      <div className="row justify-content-between chart_section">
                        <div className="col-md-5 border rounded mb-4">
                          <div className="visitors-section">
                            <VisitorsCharts
                              chartData={this.state.nData}
                              color1="#ffae42"
                              color2="#78dbff"
                              yaxis="Returing Payments"
                              type="visitors"
                              tabValue={this.state.tabValue}
                            />
                          </div>
                        </div>
                        <div className="col-md-5 border rounded mb-4">
                          <div className="duration-section d-flex h-100 align-items-center px-4">
                            <div className="current-period d-flex align-items-center border-right">
                              <div className="current-value">
                                <span className="d-block text-center">
                                  {this.state.thisperiodVis}
                                </span>
                                <span className="d-block text-muted text-center">
                                  This Period
                                </span>
                              </div>
                              {this.state.status == "1" ? (
                                <div className="value-diffence text-green">
                                  <i className="fas fa-caret-up fa-2x"></i>
                                  <span>{this.state.perVis}%</span>
                                </div>
                              ) : (
                                <div className="value-diffence text-red">
                                  <i className="fas fa-caret-down fa-2x"></i>
                                  <span>{this.state.perVis}%</span>
                                </div>
                              )}
                            </div>
                            <div className="last-period">
                              <span className="d-block text-center">
                                {this.state.lastperiodVis}
                              </span>
                              <span className="d-block text-muted text-center">
                                Last Period
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="row">
                        <h4 className="text-orange">Rewards</h4>
                      </div>
                      <div className="row justify-content-between chart_section">
                        <div className="col-md-5 border rounded mb-4">
                          <div className="rewards-section">
                            <VisitorsCharts
                              chartData={this.state.nData}
                              tabValue={this.state.tabValue}
                              color1="#f9a5ff"
                              color2="#80aaff"
                              color3="#ff7a7a"
                              color4="#8510d8"
                              type="rewards"
                              yaxis="Shareat Payments"
                            />
                          </div>
                        </div>
                        <div className="col-md-5 border rounded mb-4">
                          <div className="duration-section d-flex h-100 align-items-center px-4">
                            <div className="current-period d-flex align-items-center border-right">
                              <div className="current-value">
                                <span className="d-block text-center">
                                  {this.state.thisperiodRew}
                                </span>
                                <span className="d-block text-muted text-center">
                                  This Period
                                </span>
                              </div>
                              {this.state.statusRew == "1" ? (
                                <div className="value-diffence text-green">
                                  <i className="fas fa-caret-up fa-2x"></i>
                                  <span>{this.state.perRew}%</span>
                                </div>
                              ) : (
                                <div className="value-diffence text-red">
                                  <i className="fas fa-caret-down fa-2x"></i>
                                  <span>{this.state.perRew}%</span>
                                </div>
                              )}
                            </div>
                            <div className="last-period">
                              <span className="d-block text-center">
                                {this.state.lastperiodRew}
                              </span>
                              <span className="d-block text-muted text-center">
                                Last Period
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="offer-section py-5">
          <Offers fullData={this.state.data} tabValue={this.state.tabValue} />
        </section>
      </div>
    ) : (
      ""
    );
  }
}

export default VisitorsRewards;
