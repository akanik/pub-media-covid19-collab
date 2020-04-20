# Public Media COVID-19 Collaboration

This is a working document.

## Get an embed
We’ve already created dashboards for California, Kentucky, Ohio and West Virginia, and we’re in talks with a couple of other public radio stations to make them for a few more states. If you cover a state that we already have a dashboard for, we got you. You can just embed the dashboard on your site.

One option you have is just to create a page in your CMS, write a headline and some intro text and just link out to the tracker. Here are the links for the ones we’ve already created:

- [California](https://laist.com/projects/2020/coronavirus-tracker/california.html)
- [Kentucky](https://local.wfpl.org/covid19/kentucky.html)
- [Ohio](https://local.wfpl.org/covid19/ohio.html)
- [West Virginia](https://local.wfpl.org/covid19/west-virginia.html)

Another option is to use Pym.js to create a responsive iframe. We’ve built this into this app, so you should be able to go into your CMS’s source code, or to inject HTML snippets into your page if you are able, and add this code with the link to the tracker you need inserted:

```
<div id="covid-tracker"></div>
<script type="text/javascript" src="https://pym.nprapps.org/pym.v1.min.js"></script>
<script>
   var pymParent = new pym.Parent('covid-tracker', 'YOUR STATE’S URL TRACKER HERE', {});
</script>
```

You can see an example of this on CapRadio’s site [here](http://www.capradio.org/articles/2020/03/31/track-covid-19-cases-in-california-by-county/).

If your station uses Core Publisher, which doesn’t work well with Pym.js, we have another option for you, which is a regular iframe. Just like with the first two options, write up some intro text and a headline and then insert this code into the page’s HTML:

```
<iframe src="YOUR STATE’S TRACKER URL HERE" height="1500"></iframe>
```

You can see an example of this on KQED’s website [here](https://www.kqed.org/news/11809760/how-many-california-coronavirus-cases-see-latest-numbers-by-county).

## Build your state’s dashboard

If your state isn’t one we’ve already covered, we’ve still got you covered. 

We’ve built our repo in a way that should make it easy for you to create your own tracker. You’ll need to have a place to put and serve code from, like an AWS S3 server. If you don’t have that, reach out to our team on the LCC Slack and we can see what we can work out.

### Step 1: Copy the code 

Our code is hosted here. You can clone the whole repo, but you’ll only need the app directory.

### Step 2: Rename the STATE directory

Once you’ve cloned the repo, go inside of the app directory and find another directory called STATE.Rename that STATE directory to your state’s name.

### Step 3: Adjust state- and newsroom-specific variables

All state- and newsroom-specific variables are located in the **app.js** files.

These lines control how the app sees your data:

`var lastUpdated` will help users know when the app was last updated. If you leave this variable blank (var lastUpdated = '';), the app will pull the most recent date from your data and display that on the app. However, some orgs like to have date and time displayed, so you can manually enter the datetime each time you update the data.

`var casesFile` will tell the app where the data live. This can be a relative path or an absolute path. If you are using custom data, your data will have to follow this template. If you need help constructing historical case and death data, please get in touch with us.

`var dateFormat` will tell the app the format of your date field. By default, the app expects dates like 2020-04-08.

`var stateName` is the capitalized name of the state your app will feature.

`var dataSources` holds notes about the data. If you are using custom data, include any data sources and caveats here. If you are using NYTimes data, leave the text as it is.

You will notice that there are several lines commented out. If you would like to use the NYTimes county dataset, uncomment those lines.

The rest of the lines control how social media sees your version of the app. 

### Step 4: Test your tracker

You’ll need to spin up a local server in order to test your tracker. Here’s how you do it if you’re on a Mac. And for Windows.

### Step 5: Host your files

You should now only need to host the app directory on a publicly accessible server. We use AWS S3 for this.

If you put the app directory in the home directory of your server, the URL for your COVID tracker should be `https://[your-server-url]/app/[your-state-name]/index.html`



## Other documents

Helpful documents in this repo:

- [Dashboard rough sketch](graphics/20200318_covid_roughsketch.jpg)
- [County demographics and COVID-19 risk analysis dataset](data/national-cnty-covid19-risk-analysis.csv)
- [County demographics and COVID-19 risk analysis data dictionary](data/data-dictionary.txt)
- [County demographics and COVID-19 risk analysis script](code/create-cnty-demo-disease.ipynb)

Helpful document outside of this repo:

- [pub media covid-19 resource google spreadsheet](https://docs.google.com/spreadsheets/d/1D8J2RDJSsjT256wzW354ginpd6_Q9mzDv9CuHq6Eqg4/edit?usp=sharing)

## A brief note on issues and branches

In order to keep us organized, we're going to rely heavily on Github built-in functionalty, specifically ISSUES and BRANCHES. 

Every time you go to work on an app feature, you should be working on a different branch that will be rolled into master once completed. 

Each branch should include the name of the issue that it is attempting to satisfy. For example, if issue `#3` relates to creating small multiple charts, your branch name should be something like `3-small-multi`. This way, we can keep track of exactly what branches are supposed to be doing.

If you are working on something that does not yet have an issue, please create an issue so we can track our progress.
