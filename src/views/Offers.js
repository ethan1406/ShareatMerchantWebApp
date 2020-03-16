import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  currentdate,
  currentWeek,
  changeName,
  dateValue
} from "../container/Layout/utils/helpers";

const Offers = props => {
  const [formData, setFormData] = useState({});
  let rem = [];
  const getMerchant = async () => {
    console.log(dateValue());
    const data = await axios.get(`/5b346f48d585fb0e7d3ed3fc/${dateValue()}`);
    setFormData({ ...formData, ...data });
  };
  useEffect(() => {
    getMerchant();
  }, []);

  const VisitorsData = () => {
    var tabValue = props.tabValue ? props.tabValue : "day";
    var visitors = formData.data
      ? formData.data[tabValue].map(ele => {
          if (ele.date === changeName(tabValue)) {
            if (ele.rewards) {
              ele.rewards.map(res => {
                rem.push(res.rewards.reward);
              });
              return false;
            }
            return false;
          } else {
            rem = [0, 0, 0, 0];
          }
        })
      : "";
  };
  VisitorsData();
  let i = 0;
  const tabsHtml = formData.data
    ? formData.data.rewards.map(ele => {
        ++i;
        return (
          <div key={ele.pointsRequired} className="row mb-3 offer-row">
            <div className="col-md-12">
              <div className="d-flex p-2 border rounded align-items-center flex-column flex-md-row">
                <div className="offer-detail text-left col-md-7">
                  <span className="d-block">{ele.reward}</span>
                  <span className="text-muted">
                    Valid Monday thru Friday 3:00pm to 9:00pm
                  </span>
                  <span className="d-block text-green">
                    <i className="fas fa-circle"></i> Active
                  </span>
                </div>
                <div className="point-sent col-md-1">
                  <span className="text-muted">{ele.pointsRequired} Sent</span>
                </div>
                <div className="redeem col-md-2 text-md-center">
                  <span className="text-muted">
                    {ele["total lifetime redemptions"]} Redeemed
                  </span>
                </div>
                <div className="col-md-2">
                  <span className="text-green font-weight-bold">
                    {rem[i - 1]}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })
    : "";

  return <div className="container">{tabsHtml}</div>;
};

export default Offers;
