import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  currentdate,
  currentWeek,
  changeName,
  dateValue
} from "../container/Layout/utils/helpers";

const Offers = props => {
  let tabValue = props.tabValue ? props.tabValue : "day";
  let finalValue = 0;

  const tabsHtml = props.fullData.rewards
    ? props.fullData.rewards.map(ele => {
        return (
          <div key={ele.pointsRequired} className="row mb-3 offer-row">
            <div className="col-md-12">
              <div className="d-flex p-2 border rounded align-items-center flex-column flex-md-row">
                <div className="offer-detail text-left col-md-7 col-12">
                  <span className="d-block">{ele.reward}</span>
                  <span className="text-muted">
                    Valid Monday thru Friday 3:00pm to 9:00pm
                  </span>
                  <span className="d-block text-green">
                    <i className="fas fa-circle"></i> Active
                  </span>
                </div>
                <div className="point-sent col-md-1 col-4">
                  <span className="text-muted">{ele.pointsRequired} </span>
                </div>

                <div className="col-md-2 col-4">
                  <span className="text-muted">
                    {props.fullData
                      ? props.fullData[tabValue].map(res => {
                          if (res.date === changeName(tabValue)) {
                            if (res.rewards) {
                              res.rewards.map(rslt => {
                                if (rslt.reward == ele.reward) {
                                  return (finalValue = rslt.redemptions);
                                } else {
                                  return (finalValue = 0);
                                }
                              });
                            }
                          }
                        })
                      : ""}
                    {finalValue}
                  </span>
                </div>
                <div className="redeem col-md-2 col-4 text-md-center">
                  <span className="text-muted">
                    {ele["total lifetime redemptions"]}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })
    : "";

  return (
    <div className="container">
      <div className="row mb-3 heading-title">
        <div className="col-md-12">
          <div className="d-flex p-2  align-items-center flex-column flex-md-row">
            <div className="offer-detail text-left col-md-7 col-12"></div>
            <div className="offer-detail text-center col-md-1 col-4 font-weight-bold">
              Pt Cost
            </div>
            <div className="offer-detail text-center col-md-2 col-4 font-weight-bold">
              Total Redemptions This Period
            </div>
            <div className="offer-detail text-center font-weight-bold col-md-2 col-4">
              Total Lifetime Redemptions
            </div>
          </div>
        </div>
      </div>
      {tabsHtml}
    </div>
  );
};

export default Offers;
