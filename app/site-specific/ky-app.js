var lastUpdated = 'April 13, 5:30 p.m.';
var casesFile = 'assets/data/2020-04-13-Kentucky-export.csv';
var stateFips = '21';
var stateName = 'Kentucky';
var statePop = 4440204;
var dateFormat = '%Y-%m-%d';

//Values that will help your tracker look good when people search and share
var meta_title = 'Kentucky COVID-19 County Tracker';
var meta_twitter = '@OVReSRC';
var meta_url = 'https://local.wfpl.org/covid19/kentucky-x.html';
var meta_image = 'https://local.wfpl.org/covid19/assets/ky-covid-app-art.jpg';
var meta_description = 'EXPLORE: COVID-19-related cases and deaths in your county, as well as a risk assessment for your county’s population.';
var meta_author = 'Alexandra Kanik';
var meta_organization = 'Louisville Public Media';
var meta_org_logo = 'https://louisvillepublicmedia.org/wp-content/uploads/2018/08/lpm-logo-big-2018.png';
var ga_id = 'UA-32037403-12';

//Content tha tis specific to your state's tracker
var banner_image = 'assets/ky-covid-header.jpg';
var data_sources = `
      <p>Age data provided by the 2018 5 year American Community Survey. Disease data are from 2014 and are provided by the <a href="http://ghdx.healthdata.org/us-data" target="_blank">Institute for Health Metrics and Evaluation's Global Health Data Exchange</a></p>
      <p>As of March 28, 2020, case and death data for Kentucky counties are compiled from the Kentucky Governor's office daily COVID-19 data releases and from county health departments.</p>
      <p>Case data are updated daily after the Governor's 5 p.m. new brief.</p>
      <p>Historic data are provided by the <a href="https://github.com/nytimes/covid-19-data" target="_blank">New York Times county dataset</a>.</p>
      <p>The data presented here only includes cases in which a person has tested positive for COVID-19, but it may be lower than the actual number of infected people in a community due to a lack of testing.</p> 
      <p>As counties report cases when test results come in, some of the increases in counties’ cases in one day could be due to many pending results coming in rather than many people coming down with symptoms in one day.</p>
      `;
