import React, { useState, useEffect } from "react";
import axios from "axios";
import { dateValue } from "../container/Layout/utils/helpers";

const BoilingCrab = () => {
  const [formData, setFormData] = useState({});

  const getMerchant = async () => {
    const data = await axios.get(`/5b346f48d585fb0e7d3ed3fc/${dateValue()}`);
    setFormData({ ...formData, ...data });
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
              <h5 className="mb-0">The Boiling Crab</h5>
              <p className="mb-0 text-muted">
                466 S.Colorade Blvd, Pesdene CA97442
              </p>
              <a href="">Edit Profile</a>
            </div>
          </div>
          <div className="col-md-8">
            <div className="profile-dashboard d-flex justify-content-center px-md-5 flex-column flex-sm-row align-items-center">
              {/* <div className="shareat-payments">
                <span className="d-block">243</span>
                <span className="d-block text-muted text-small">
                  Shareat Payments
                </span>
              </div> */}
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
