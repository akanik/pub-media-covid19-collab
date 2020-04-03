var _$main_1 = {};
"use strict";

//Values that will help your tracker look good when people search and share
var meta_title = 'West Virginia COVID-19 County Tracker';
var meta_twitter = '@OVReSRC';
var meta_url = 'https://local.wfpl.org/covid19/west-virginia.html';
var meta_image = 'https://local.wfpl.org/covid19/assets/wv-covid-app-art.jpg';
var meta_description = 'EXPLORE: COVID-19-related cases and deaths in your county, as well as a risk assessment for your county’s population.';
var meta_author = 'Alexandra Kanik';
var meta_organization = 'Louisville Public Media';
var meta_org_logo = 'https://louisvillepublicmedia.org/wp-content/uploads/2018/08/lpm-logo-big-2018.png';
var embedded = false;
var ga_id = 'UA-32037403-12';

//Content tha tis specific to your state's tracker
var banner_image = 'assets/wv-covid-header.jpg';
var data_sources = `
      <p>Age data provided by the 2018 5 year American Community Survey. Disease data are from 2014 and are provided by the <a href="http://ghdx.healthdata.org/us-data" target="_blank">Institute for Health Metrics and Evaluation's Global Health Data Exchange</a></p>
      <p>As of March 31, 2020, case and death data for West Virginia counties are compiled from the <a href="https://dhhr.wv.gov/COVID-19/Pages/default.aspx" target='_blank'>West Virginia Department of Health and Human Services daily COVID-19 data release</a>.</p>
      <p>Case/death data for West Virginia are updated every evening by the state. Daily update times may vary.</p>
      <p>Case data may be lower than the actual number of infected people in a community due to a lack of testing or delayed reporting.</p> 
      <p>As counties report cases when test results come in, some of the increases in counties’ cases in one day could be due to many pending results coming in rather than many people coming down with symptoms in one day.</p>
      `;
      
var lastUpdated = 'April 2, 6:00 p.m.';
var casesFile = 'assets/data/2020-04-02-West-Virginia-export.csv';
var stateFips = '54';
var stateName = 'West Virginia';
var statePop = 1829054;
var dateFormat = "%Y-%m-%d";
  
