//Content that is specific to your state's tracker

// If using NYTimes data, comment out the following
//var lastUpdated = 'April 8, 5:30 p.m.';
//var casesFile = 'data/st-covid-data.csv';
//var dateFormat = '%Y-%m-%d';

// If using NYTimes data, uncomment the following
var lastUpdated = '';
var casesFile = 'https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-counties.csv';
var dateFormat = '%Y-%m-%d';

var stateName = 'Nevada'; 
var dataSources = `
      <p>Data are provided by the New York Times county dataset. Read more <a href="https://github.com/nytimes/covid-19-data" target="_blank">about the data and potential caveats here</a>.</p>
      `;

//Values that will help your tracker look good when people search and share
var meta_title = stateName+' COVID-19 County Tracker';
var meta_twitter = '@CapRadioNews';
var meta_url = 'https://projects.capradio.org/nevada-coronavirus-tracker';
var meta_image = 'https://www.capradio.org/media/12250452/022820coronavirustest-r.jpg';
var meta_description = 'EXPLORE: COVID-19-related cases and deaths in your county, as well as a risk assessment for your county’s population.';
var meta_author = 'Emily Zentner';
var meta_organization = 'CapRadio';
var meta_org_logo = 'https://www.capradio.org/media/12252041/capradio_logo_horz_rgb.svg';
var ga_id = 'UA-32037403-12';
