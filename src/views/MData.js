// import React, { useState, useEffect } from "react";
// import VisitorsCharts from "../container/Layout/Charts/VisitorsCharts";
// import {
//   currentdate,
//   yesterdayDate,
//   dateValue
// } from "../container/Layout/utils/helpers";
// import Offers from "./Offers";

// export default function MData(metData) {
//   let fullData = metData.metData;
//   console.log(fullData);

//   useEffect(() => {
//     console.log(fullData);
//     mainData(fullData);
//   }, []);
//   console.log(fullData);
//   const [form, setForm] = useState({ tabValue: "day" });
//   const [visitorData, setvisitorData] = useState({});
//   const [rewardData, setrewardData] = useState({});
//   //   const [limitedData, setLimitedData] = useState({});

//   let startNo = 0;
//   let endno = 6;
//   let newData = [];

//   const mainData = fullData => {
//     //let tabValue = Data.merchant_data.tabValue;
//     console.log(fullData);
//     setForm({ ...form, ...fullData, tabValue: "day" });
//     console.log(form);
//     // for (let i = startNo; i <= endno; i++) {
//     //   newData.push(Data.merchant_data ? Data.merchant_data[tabValue][i] : "");
//     // }
//   };

//   const tabLink = e => {
//     setForm({
//       ...fullData,
//       tabValue: e.target.value
//     });
//     //VisitorsData();
//   };

//   //   const VisitorsData = () => {
//   //     var tabValue = form.tabValue;

//   //     let totalVisitorsToday = 0;
//   //     let totalVisitorsYesterday = 0;
//   //     let visitorPercent = 0;
//   //     let totalRewardsToday = 0;
//   //     let totalRewardsYesterday = 0;
//   //     let rewardsPercent = 0;

//   //     var visitors = Data.data
//   //       ? Data.data[tabValue].map(ele => {
//   //           if (ele.date === currentdate()) {
//   //             totalVisitorsToday =
//   //               ele["returning customer"] + ele["new customers"];
//   //           }
//   //           if (ele.date === yesterdayDate()) {
//   //             totalVisitorsYesterday =
//   //               ele["returning customer"] + ele["new customers"];
//   //           }
//   //         })
//   //       : "";

//   //     visitorPercent = totalVisitorsToday - totalVisitorsYesterday;

//   //     setvisitorData({
//   //       ...visitorData,
//   //       visitorPercent: visitorPercent,
//   //       totalVisitorsYesterday: totalVisitorsYesterday,
//   //       totalVisitorsToday: totalVisitorsToday
//   //     });

//   //     var rewards = Data.data
//   //       ? Data.data[tabValue].map(ele => {
//   //           if (ele.date === currentdate()) {
//   //             if (ele.rewards) {
//   //               let value = 0;
//   //               ele.rewards.map(dd => {
//   //                 value = value + dd.redemptions;
//   //               });
//   //               totalRewardsToday = value;
//   //             }
//   //           }
//   //           if (ele.date === yesterdayDate()) {
//   //             if (ele.rewards) {
//   //               let value = 0;
//   //               ele.rewards.map(dd => {
//   //                 value = value + dd.redemptions;
//   //               });

//   //               totalRewardsYesterday = value;
//   //             }
//   //           }
//   //         })
//   //       : "";

//   //     rewardsPercent = totalRewardsToday - totalRewardsYesterday;
//   //     //console.log("in");
//   //     setrewardData({
//   //       ...rewardData,
//   //       rewardsPercent: rewardsPercent,
//   //       totalRewardsYesterday: totalRewardsYesterday,
//   //       totalRewardsToday: totalRewardsToday
//   //     });
//   //     //mainData();
//   //   };

//   return (
//     <div>
//       <section className="profile-details pt-5">
//         <div className="container">
//           <div className="row pt-3">
//             <div className="col-md-12">
//               <a
//                 href=""
//                 className="text-muted float-sm-left py-2 pr-2 d-block text-center"
//               >
//                 <i
//                   class="fa fa-angle-left mr-2"
//                   aria-hidden="true"
//                   //onClick={MoveLeft}
//                 ></i>
//                 Day of the Week
//                 <i
//                   class="fa fa-angle-right ml-2"
//                   aria-hidden="true"
//                   //onClick={MoveRight}
//                 ></i>
//               </a>
//               <ul
//                 className="nav nav-pills mb-3 mx-4 border rounded d-flex"
//                 id="pills-tab"
//                 role="tablist"
//               >
//                 <li className="nav-item">
//                   <input
//                     className="nav-link active border-right"
//                     id="pills-home-tab"
//                     data-toggle="pill"
//                     href="#pills-day"
//                     role="tab"
//                     aria-controls="pills-home"
//                     aria-selected="true"
//                     value="day"
//                     onClick={tabLink}
//                   />
//                 </li>
//                 <li className="nav-item">
//                   <input
//                     className="nav-link border-right rounded-0"
//                     id="pills-profile-tab"
//                     data-toggle="pill"
//                     href="#pills-week"
//                     role="tab"
//                     aria-controls="pills-profile"
//                     aria-selected="false"
//                     value="week"
//                     onClick={tabLink}
//                   />
//                 </li>
//                 <li className="nav-item">
//                   <input
//                     className="nav-link"
//                     id="pills-contact-tab"
//                     data-toggle="pill"
//                     href="#pills-month"
//                     role="tab"
//                     aria-controls="pills-contact"
//                     aria-selected="false"
//                     value="month"
//                     onClick={tabLink}
//                   />
//                 </li>
//               </ul>
//               <div className="tab-content pt-4 pt-md-0" id="pills-tabContent">
//                 <div
//                   className="tab-pane fade show active"
//                   id="pills-day"
//                   role="tabpanel"
//                   aria-labelledby="pills-home-tab"
//                 >
//                   <div className="col-md-12 mb-4">
//                     <div className="row">
//                       <h4 className="text-orange">Visitors</h4>
//                     </div>
//                     <div className="row justify-content-between chart_section">
//                       <div className="col-md-5 border rounded mb-4">
//                         <div className="visitors-section">
//                           {/* <VisitorsCharts
//                             chartData={fullData}
//                             color1="#ffae42"
//                             color2="#78dbff"
//                             yaxis="Returing Payments"
//                             type="visitors"
//                             tabValue={form.tabValue}
//                             // limitData={limitedData.data}
//                           /> */}
//                         </div>
//                       </div>
//                       <div className="col-md-5 border rounded mb-4">
//                         <div className="duration-section d-flex h-100 align-items-center px-4">
//                           <div className="current-period d-flex align-items-center border-right">
//                             <div className="current-value">
//                               <span className="d-block text-center">
//                                 {/* {visitorData.totalVisitorsToday} */}
//                               </span>
//                               <span className="d-block text-muted text-center">
//                                 This Period
//                               </span>
//                             </div>
//                             <div className="value-diffence">
//                               <i className="fas fa-caret-up fa-2x"></i>
//                               {/* <span>{visitorData.visitorPercent}%</span> */}
//                             </div>
//                           </div>
//                           <div className="last-period">
//                             <span className="d-block text-center">
//                               {/* {visitorData.totalVisitorsYesterday} */}
//                             </span>
//                             <span className="d-block text-muted text-center">
//                               Last Period
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-md-12">
//                     <div className="row">
//                       <h4 className="text-orange">Rewards</h4>
//                     </div>
//                     <div className="row justify-content-between chart_section">
//                       <div className="col-md-5 border rounded mb-4">
//                         <div className="rewards-section">
//                           {/* <VisitorsCharts
//                             chartData={Data}
//                             // tabValue={Data.tabValue}
//                             // limitData={limitedData.data}
//                             color1="#f9a5ff"
//                             color2="#80aaff"
//                             color3="#ff7a7a"
//                             color4="#8510d8"
//                             type="rewards"
//                             yaxis="Shareat Payments"
//                           /> */}
//                         </div>
//                       </div>
//                       <div className="col-md-5 border rounded mb-4">
//                         <div className="duration-section d-flex h-100 align-items-center px-4">
//                           <div className="current-period d-flex align-items-center border-right">
//                             <div className="current-value">
//                               <span className="d-block text-center">
//                                 {/* {rewardData.totalRewardsToday} */}
//                               </span>
//                               <span className="d-block text-muted text-center">
//                                 This Period
//                               </span>
//                             </div>
//                             <div className="value-diffence">
//                               <i className="fas fa-caret-up fa-2x"></i>
//                               {/* <span>{rewardData.rewardsPercent}%</span> */}
//                             </div>
//                           </div>
//                           <div className="last-period">
//                             <span className="d-block text-center">
//                               {/* {rewardData.totalRewardsYesterday} */}
//                             </span>
//                             <span className="d-block text-muted text-center">
//                               Last Period
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div
//                   className="tab-pane fade"
//                   id="pills-week"
//                   role="tabpanel"
//                   aria-labelledby="pills-profile-tab"
//                 >
//                   <div className="col-md-12 mb-4">
//                     <div className="row">
//                       <h4 className="text-orange">Visitors</h4>
//                     </div>
//                     <div className="row justify-content-between chart_section">
//                       <div className="col-md-5 border rounded mb-4">
//                         <div className="visitors-section">
//                           {/* <VisitorsCharts
//                             chartData={Data}
//                             // limitData={limitedData.data}
//                             color1="#ffae42"
//                             color2="#78dbff"
//                             yaxis="Returing Payments"
//                             type="visitors"
//                             //tabValue={Data.tabValue}
//                           /> */}
//                         </div>
//                       </div>
//                       <div className="col-md-5 border rounded mb-4">
//                         <div className="duration-section d-flex h-100 align-items-center px-4">
//                           <div className="current-period d-flex align-items-center border-right">
//                             <div className="current-value">
//                               <span className="d-block text-center">
//                                 {/* {visitorData.totalVisitorsToday} */}
//                               </span>
//                               <span className="d-block text-muted text-center">
//                                 This Period
//                               </span>
//                             </div>
//                             <div className="value-diffence">
//                               <i className="fas fa-caret-up fa-2x"></i>
//                               {/* <span>{visitorData.visitorPercent}%</span> */}
//                             </div>
//                           </div>
//                           <div className="last-period">
//                             <span className="d-block text-center">
//                               {/* {visitorData.totalVisitorsYesterday} */}
//                             </span>
//                             <span className="d-block text-muted text-center">
//                               Last Period
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-md-12">
//                     <div className="row">
//                       <h4 className="text-orange">Rewards</h4>
//                     </div>
//                     <div className="row justify-content-between chart_section">
//                       <div className="col-md-5 border rounded mb-4">
//                         <div className="rewards-section">
//                           {/* <VisitorsCharts
//                             chartData={Data}
//                             // limitData={limitedData.data}
//                             // tabValue={Data.tabValue}
//                             color1="#f9a5ff"
//                             color2="#80aaff"
//                             color3="#ff7a7a"
//                             color4="#8510d8"
//                             type="rewards"
//                             yaxis="Shareat Payments"
//                           /> */}
//                         </div>
//                       </div>
//                       <div className="col-md-5 border rounded mb-4">
//                         <div className="duration-section d-flex h-100 align-items-center px-4">
//                           <div className="current-period d-flex align-items-center border-right">
//                             <div className="current-value">
//                               <span className="d-block text-center">
//                                 {/* {rewardData.totalRewardsToday} */}
//                               </span>
//                               <span className="d-block text-muted text-center">
//                                 This Period
//                               </span>
//                             </div>
//                             <div className="value-diffence">
//                               <i className="fas fa-caret-up fa-2x"></i>
//                               {/* <span>{rewardData.rewardsPercent}%</span> */}
//                             </div>
//                           </div>
//                           <div className="last-period">
//                             <span className="d-block text-center">
//                               {/* {rewardData.totalRewardsYesterday} */}
//                             </span>
//                             <span className="d-block text-muted text-center">
//                               Last Period
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div
//                   className="tab-pane fade"
//                   id="pills-month"
//                   role="tabpanel"
//                   aria-labelledby="pills-contact-tab"
//                 >
//                   <div className="col-md-12 mb-4">
//                     <div className="row">
//                       <h4 className="text-orange">Visitors</h4>
//                     </div>
//                     <div className="row justify-content-between chart_section">
//                       <div className="col-md-5 border rounded mb-4">
//                         <div className="visitors-section">
//                           {/* <VisitorsCharts
//                             chartData={Data}
//                             // limitData={limitedData.data}
//                             color1="#ffae42"
//                             color2="#78dbff"
//                             yaxis="Returing Payments"
//                             type="visitors"
//                             // tabValue={Data.tabValue}
//                           /> */}
//                         </div>
//                       </div>
//                       <div className="col-md-5 border rounded mb-4">
//                         <div className="duration-section d-flex h-100 align-items-center px-4">
//                           <div className="current-period d-flex align-items-center border-right">
//                             <div className="current-value">
//                               <span className="d-block text-center">
//                                 {/* {visitorData.totalVisitorsToday} */}
//                               </span>
//                               <span className="d-block text-muted text-center">
//                                 This Period
//                               </span>
//                             </div>
//                             <div className="value-diffence">
//                               <i className="fas fa-caret-up fa-2x"></i>
//                               {/* <span>{visitorData.visitorPercent}%</span> */}
//                             </div>
//                           </div>
//                           <div className="last-period">
//                             <span className="d-block text-center">
//                               {/* {visitorData.totalVisitorsYesterday} */}
//                             </span>
//                             <span className="d-block text-muted text-center">
//                               Last Period
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-md-12">
//                     <div className="row">
//                       <h4 className="text-orange">Rewards</h4>
//                     </div>
//                     <div className="row justify-content-between chart_section">
//                       <div className="col-md-5 border rounded mb-4">
//                         <div className="rewards-section">
//                           {/* <VisitorsCharts
//                             chartData={Data}
//                             // tabValue={Data.tabValue}
//                             // limitData={limitedData.data}
//                             color1="#f9a5ff"
//                             color2="#80aaff"
//                             color3="#ff7a7a"
//                             color4="#8510d8"
//                             type="rewards"
//                             yaxis="Shareat Payments"
//                           /> */}
//                         </div>
//                       </div>
//                       <div className="col-md-5 border rounded mb-4">
//                         <div className="duration-section d-flex h-100 align-items-center px-4">
//                           <div className="current-period d-flex align-items-center border-right">
//                             <div className="current-value">
//                               <span className="d-block text-center">
//                                 {/* {rewardData.totalRewardsToday} */}
//                               </span>
//                               <span className="d-block text-muted text-center">
//                                 This Period
//                               </span>
//                             </div>
//                             <div className="value-diffence">
//                               <i className="fas fa-caret-up fa-2x"></i>
//                               {/* <span>{rewardData.rewardsPercent}%</span> */}
//                             </div>
//                           </div>
//                           <div className="last-period">
//                             <span className="d-block text-center">
//                               {/* {rewardData.totalRewardsYesterday} */}
//                             </span>
//                             <span className="d-block text-muted text-center">
//                               Last Period
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className="offer-section py-5">
//         {/* <Offers tabValue={Data.tabValue} /> */}
//       </section>
//     </div>
//   );
// }
