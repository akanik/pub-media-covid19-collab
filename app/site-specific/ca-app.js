var lastUpdated = 'April 14, 2020, 6:40 p.m';
var casesFile = 'assets/data/2020-04-14-California-export.csv';
var stateFips = '06';
var stateName = 'California';
var statePop = 39148760;
var dateFormat = '%m/%d/%Y';

//Values that will help your tracker look good when people search and share
var meta_title = 'California COVID-19 County Tracker';
var meta_twitter = '@OVReSRC';
var meta_url = 'https://laist.com/projects/2020/coronavirus-tracker/california.html';
var meta_image = 'https://www.capradio.org/media/12251118/coronatrackertwitter.jpg';
var meta_description = 'EXPLORE: COVID-19-related cases and deaths in your county, as well as a risk assessment for your county’s population.';
var meta_author = 'California Regional News Hub';
var meta_organization = 'California Public Media COVID-19 Tracker';
var meta_org_logo = 'https://media.npr.org/assets/img/2019/06/17/nprlogo_rgb_whiteborder_custom-7c06f2837fb5d2e65e44de702968d1fdce0ce748-s800-c85.png';
var ga_id = '';

//Content tha tis specific to your state's tracker
var banner_image = 'assets/ca-covid-header.jpg';
var data_sources = `
      <p>Age data provided by the 2018 American Community Survey. Disease data provided by the <a href="http://ghdx.healthdata.org/us-data" target="_blank">Institute for Health Metrics and Evaluation's Global Health Data Exchange</a></p>
        <p>As of March 23, 2020, case and death data for California counties is collected by hand by reporters for CapRadio, KQED and KPCC from each public health department or county’s individual site each evening. We update the data daily at 7 or 8 p.m, and many jurisdictions post in the late afternoon. Historic data is provided by Big Local News & USA Facts.</p>
        <p>While Alameda County and the city of Berkeley report their number of cases and deaths separately, we have added Berkeley’s totals into Alameda County’s totals for this data. Additionally, while Sutter and Yuba counties are one combined health jurisdiction, they sometimes report their data jointly, we have reported them separately here.</p>
        <p>The data presented here only includes cases in which a person has tested positive for COVID-19, but it may be lower than the actual number of infected people in a community due to a lack of testing. Not every county updates its numbers daily, so these totals reflect the latest numbers as of our last data collection. Some counties report all people who have tested positive in the county, whether or not the person is a resident of the county.</p>
        <p>As counties report cases when test results come in, some of the increases in counties’ cases in one day could be due to many pending results coming in rather than many people coming down with symptoms in one day.</p>
      `;
