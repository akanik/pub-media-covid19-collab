var lastUpdated = 'May 5, 2020, 9:00 p.m';
var casesFile = 'data/ca-covid-data.csv';
var dateFormat = '%m/%d/%Y';
var stateName = 'California';

//Values that will help your tracker look good when people search and share
var meta_title = stateName+' COVID-19 County Tracker';
var meta_twitter = '@OVReSRC';
var meta_url = 'https://laist.com/projects/2020/coronavirus-tracker/california.html';
var meta_image = 'https://www.capradio.org/media/12251118/coronatrackertwitter.jpg';
var meta_description = 'EXPLORE: COVID-19-related cases and deaths in your county, as well as a risk assessment for your county’s population.';
var meta_author = 'California Regional News Hub';
var meta_organization = 'California Public Media COVID-19 Tracker';
var meta_org_logo = 'https://media.npr.org/assets/img/2019/06/17/nprlogo_rgb_whiteborder_custom-7c06f2837fb5d2e65e44de702968d1fdce0ce748-s800-c85.png';
var ga_id = '';

//Content tha tis specific to your state's tracker
var dataSources = `
        <p>Current data on confirmed cases of COVID-19 and deaths due to the disease is provided by <a href="https://github.com/datadesk/california-coronavirus-data" target="_blank">the LA Times</a>. Historical data from the beginning of the pandemic through April 20, 2020 collected by Big Local News, USA Facts & staff from CapRadio, KQED and KPCC. This tracker will be updated every morning with the LA Times' data update from the previous night.</p>
        <p>While Alameda County and the city of Berkeley report their number of cases and deaths separately, we have added Berkeley’s totals into Alameda County’s totals for this data. Additionally, while Sutter and Yuba counties are one combined health jurisdiction, they sometimes report their data jointly, we have reported them separately here.</p>
        <p>The data presented here only includes cases in which a person has tested positive for COVID-19, but it may be lower than the actual number of infected people in a community due to a lack of testing. Not every county updates its numbers daily, so these totals reflect the latest numbers as of our last data collection.</p>
        <p>As counties report cases when test results come in, some of the increases in counties’ cases in one day could be due to many pending results coming in rather than many people coming down with symptoms in one day.</p>
      `;
