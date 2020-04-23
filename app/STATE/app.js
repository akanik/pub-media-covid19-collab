//Content that is specific to your state's tracker

// If using NYTimes data, comment out the following
//var lastUpdated = 'April 8, 5:30 p.m.';
//var casesFile = 'data/st-covid-data.csv';
//var dateFormat = '%Y-%m-%d';

// If using NYTimes data, uncomment the following
var lastUpdated = '';
var casesFile = 'https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-counties.csv';
var dateFormat = '%Y-%m-%d';

var stateName = 'Florida'; 
var dataSources = `
      <p>Data are provided by the New York Times county dataset. Read more <a href="https://github.com/nytimes/covid-19-data" target="_blank">about the data and potential caveats here</a>.</p>
      `;

//Values that will help your tracker look good when people search and share
var meta_title = stateName+' COVID-19 County Tracker';
var meta_twitter = '@OVReSRC';
var meta_url = 'https://local.wfpl.org/covid19/kentucky-x.html';
var meta_image = 'https://local.wfpl.org/covid19/assets/ky-covid-app-art.jpg';
var meta_description = 'EXPLORE: COVID-19-related cases and deaths in your county, as well as a risk assessment for your county’s population.';
var meta_author = 'Alexandra Kanik';
var meta_organization = 'Louisville Public Media';
var meta_org_logo = 'https://louisvillepublicmedia.org/wp-content/uploads/2018/08/lpm-logo-big-2018.png';
var ga_id = 'UA-32037403-12';
