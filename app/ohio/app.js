var lastUpdated = '';
var casesFile = 'https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-counties.csv';
var dateFormat = '%Y-%m-%d';
var stateName = 'Ohio';

//Values that will help your tracker look good when people search and share
var meta_title = stateName+' COVID-19 County Tracker';
var meta_twitter = '@OVReSRC';
var meta_url = 'https://local.wfpl.org/covid19/ohio.html';
var meta_image = 'https://local.wfpl.org/covid19/assets/oh-covid-app-art.jpg';
var meta_description = 'EXPLORE: COVID-19-related cases and deaths in your county, as well as a risk assessment for your county’s population.';
var meta_author = 'Alexandra Kanik';
var meta_organization = 'Louisville Public Media';
var meta_org_logo = 'https://louisvillepublicmedia.org/wp-content/uploads/2018/08/lpm-logo-big-2018.png';
var ga_id = 'UA-32037403-12';

//Content tha tis specific to your state's tracker
 var dataSources = `
      <p>As of April 27, 2020, case and death data for Ohio counties are provided by the New York Times county dataset. Read more <a href="https://github.com/nytimes/covid-19-data" target="_blank">about the data and potential caveats here</a>.</p>
      <p>The data presented here only includes cases in which a person has tested positive for COVID-19, but it may be lower than the actual number of infected people in a community due to a lack of testing.</p> 
      <p>As counties report cases when test results come in, some of the increases in counties’ cases in one day could be due to many pending results coming in rather than many people coming down with symptoms in one day.</p>
      `;
  