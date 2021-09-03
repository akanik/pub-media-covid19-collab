var lastUpdated = '';
var casesFile = 'https://raw.githubusercontent.com/datadesk/california-coronavirus-data/master/cdph-county-cases-deaths.csv';
var dateFormat = '%Y-%m-%d';
var stateName = 'California';

//Values that will help your tracker look good when people search and share
var meta_title = stateName+' COVID-19 County Tracker';
var meta_twitter = '@CapRadioNews';
var meta_url = 'https://projects.capradio.org/california-coronavirus-tracker';
var meta_image = 'https://www.capradio.org/media/12251118/coronatrackertwitter.jpg';
var meta_description = 'EXPLORE: COVID-19-related cases and deaths in your county, as well as a risk assessment for your county’s population.';
var meta_author = 'California Regional News Hub';
var meta_organization = 'California Public Media COVID-19 Tracker';
var meta_org_logo = 'https://media.npr.org/assets/img/2019/06/17/nprlogo_rgb_whiteborder_custom-7c06f2837fb5d2e65e44de702968d1fdce0ce748-s800-c85.png';
var ga_id = '';

//Content tha tis specific to your state's tracker
var dataSources = `
        <p>Data on confirmed cases of COVID-19 and deaths due to the disease is provided by <a href="https://github.com/datadesk/california-coronavirus-data" target="_blank">the LA Times</a>, and is updated as the state releases updated data.</p>
        <p>While Alameda County and the city of Berkeley report their number of cases and deaths separately, as do Los Angeles County and the cities of Long Beach and Pomona, we have included the cities' totals in the counties' totals for this data. Additionally, while Sutter and Yuba counties are one combined health jurisdiction, we have reported their data separately here.</p>
        <p>The data presented here includes the total number of people who were confirmed to have COVID-19 as of that date, but it may be lower than the actual number of infected people in a community due to a lack of testing. Not every county updates its numbers daily, so these totals reflect the latest numbers as of the state's last data collection.</p>
        <p>As counties report cases when test results come in, some of the increases in counties’ cases in one day could be due to many pending results coming in rather than many people coming down with symptoms in one day.</p>
      `;
