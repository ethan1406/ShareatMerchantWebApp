import React, { useState, useEffect } from "react";
import axios from "axios";
import { dateValue } from "../container/Layout/utils/helpers";
import {baseUrl} from '../Constants'

import { Auth } from 'aws-amplify'

const BoilingCrab = () => {
  const [formData, setFormData] = useState({});

  const getMerchant = async () => {
    try {
      const user = await Auth.currentSession();
      console.log(user.accessToken.payload.sub);
      const data = await axios.get(`${baseUrl}/${user.accessToken.payload.sub}/${dateValue()}`);
      setFormData({ ...formData, ...data });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMerchant();
  }, []);

  return (
    <section className="profile-details pt-5">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-md-4">
            <div className="edit-profile">
              <h5 className="mb-0">{formData.data ? formData.data["name"] : ""}</h5>
              <p className="mb-0 text-muted">
                {formData.data ? formData.data["address"] : ""}
              </p>
            </div>
          </div>
          <div className="col-md-8">
            <div className="profile-dashboard d-flex justify-content-center px-md-5 flex-column flex-sm-row align-items-center">
              <div className="spiltting">
                <span className="d-block">
                  {formData.data ? formData.data["total splits"] : "0"}
                </span>
                <span className="d-block text-muted text-small">Spiltting</span>
              </div>
              <div className="total-visit">
                <span className="d-block">
                  {formData.data ? formData.data["total visits"] : "0"}
                </span>
                <span className="d-block text-muted text-small">
                  Total Visits
                </span>
              </div>
              <div className="total-members">
                <span className="d-block">
                  {formData.data ? formData.data["total members"] : "0"}
                </span>
                <span className="d-block text-muted text-small">
                  Total Members
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoilingCrab;
