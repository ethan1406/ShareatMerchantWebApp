import React from "react";
import DefaultFooter from "../container/Layout/DefaultFooter";
import DefaultHeader from "../container/Layout/DefaultHeader";
import Layout from "../container/Layout/Layout";
import { Analytics } from 'aws-amplify';

class Home extends React.Component {
  
  async componentDidMount() {
	try {
		await Analytics.record({ name: 'viewAnalytics', attributes: {user_group: 'Merchant'}});
	} catch (err) {
		console.log(err)
	}
  }

  render() {
	return (
	    <div>
	      <DefaultHeader />
	      <Layout />
	      <DefaultFooter />
	    </div>
	  );
  } 
};

export default Home;
