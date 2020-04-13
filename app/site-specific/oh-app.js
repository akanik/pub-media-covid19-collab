var lastUpdated = 'April 12, 2:00 p.m.*';
var casesFile = 'assets/data/2020-04-12-Ohio-export.csv';
var stateFips = '39';
var stateName = 'Ohio';
var statePop = 11641879;
var dateFormat = '%Y-%m-%d';

//Values that will help your tracker look good when people search and share
var meta_title = 'Ohio COVID-19 County Tracker';
var meta_twitter = '@OVReSRC';
var meta_url = 'https://local.wfpl.org/covid19/ohio.html';
var meta_image = 'https://local.wfpl.org/covid19/assets/oh-covid-app-art.jpg';
var meta_description = 'EXPLORE: COVID-19-related cases and deaths in your county, as well as a risk assessment for your county’s population.';
var meta_author = 'Alexandra Kanik';
var meta_organization = 'Louisville Public Media';
var meta_org_logo = 'https://louisvillepublicmedia.org/wp-content/uploads/2018/08/lpm-logo-big-2018.png';
var ga_id = 'UA-32037403-12';

//Content tha tis specific to your state's tracker
var banner_image = 'assets/oh-covid-header.jpg';
var data_sources = `
      <p>Age data provided by the 2018 5 year American Community Survey. Disease data are from 2014 and are provided by the <a href="http://ghdx.healthdata.org/us-data" target="_blank">Institute for Health Metrics and Evaluation's Global Health Data Exchange</a></p>
      <p>*Case and death data for Ohio counties are compiled from the <a href="https://coronavirus.ohio.gov/wps/portal/gov/covid-19/home/dashboard" target='_blank'>Ohio Department of Health daily COVID-19 data release</a>. Case data for Ohio are one day behind. Data for yesterday are updated today at 2 p.m. ET on a daily basis.</p>
      <p>In their data disclaimer, ODH notes: "All data displayed is preliminary and subject to change as more information is reported to ODH. Trends are based on the date of illness onset. If onset date is unknown, the earliest known date associated with the case is used as a substitute for the date of illness onset."</p>
      <p>Preliminary case data may be lower than the actual number of infected people in a community due to a lack of testing or delayed reporting.</p> 
      <p>As counties report cases when test results come in, some of the increases in counties’ cases in one day could be due to many pending results coming in rather than many people coming down with symptoms in one day.</p>
      `;
  