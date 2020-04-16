# Public Media COVID-19 Collaboration

This is a working document.

## Using the app

All app files are in the `app` directory

Each state gets its own directory.

Example directory is `STATE`.

Here is a description of each file contained within `STATE`, its purpose and how to repurpose it for your own state:

First off, duplicated the `STATE` directory and rename it with your state's name.

### `app-custom.js` file
This file holds information specific to your newsroom's version of the app. It is an example of using manually updated data.

### `app-nytimes.js` file
This file holds information specific to your newsroom's version of the app. It is an example of using New York Times updated data.

### `data` directory
If you are using manually updated data, this is where you would put your data files. If you  keep the name of the current datafile consistent (ex: ca-covid-data.csv), you will not need to update the `app-custom.js` filename reference every time you update the data. There is also an archive directory that can hold the past data files if you choose to save them.

### `index.html` file
This is the app codebase. There is only one line in here that you will need to update in order to correctly reference your app's javascript file, either `app-custom.js` or `app-nytimes.js`. This file is meant to be embedded within the hosts website as it does not register a new pageview for your website.

### `index-ga.html` file
This the same as the `index.html` file except it _does_ register a Google Analytics pageview.


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