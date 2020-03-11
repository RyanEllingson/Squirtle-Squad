# Squirtle-Squad

Brew Cruze
![mug logo](https://github.com/RyanEllingson/Squirtle-Squad/blob/master/assets/images/mug.png)

Index:
I) Live site URL
II) Description
III) Usage
IV) Images
V) Installation
    i) CDNs
    ii) APIs
VI) Contributions
VII) Challenges
VIII) Successes
IX) Roadmap
X) Acknowledgements
XI) License


Live site: https://ryanellingson.github.io/Squirtle-Squad/
 
Description
This repository was for creating an application to locate breweries while traveling. This is our first group project for our web development program. The Brew Cruz application will locate breweries in-between a starting location and ending location, with waypoints as an options. The user has the ability to input their current location, final destination and search results will produce a list of breweries (URL included when applicable) that are within those parameters. Additional functionality includes a map identifying the brewery results, turn by turn navigation with zoom capabilities and a responsive interface.
 
Using the app:
To begin using the app, type the cities you would like to visit.  There must be at least 2, may be up to 7, and must be in the order in which you want to visit them.  Click the "Submit" button to generate the MapQuest route and the list of nearby breweries.
![screenshot 1](https://github.com/RyanEllingson/Squirtle-Squad/blob/master/assets/images/screenshot1.JPG)

When the route is generated, a map showing an overview of the route is displayed and a list of turn-by-turn directions is created.  Clicking on any of the individual steps will update the map to show that particular step.
![screenshot 2](https://github.com/RyanEllingson/Squirtle-Squad/blob/master/assets/images/screenshot2.JPG)
![screenshot 3](https://github.com/RyanEllingson/Squirtle-Squad/blob/master/assets/images/screenshot3.JPG)

To get directions to breweries near the cities that were searched for, click the toggle switches next to each of the breweries in the brewery list.  Selected breweries will have the toggle positioned to the left and will be blue.  Once desired breweries have been chosen, click the "Get directions" button.  This will generate a new mapquest route through the cities and passing through each of the breweries selected.
![screenshot 4](https://github.com/RyanEllingson/Squirtle-Squad/blob/master/assets/images/screenshot4.JPG)
![screenshot 5](https://github.com/RyanEllingson/Squirtle-Squad/blob/master/assets/images/screenshot5.JPG)

Not only does the list of breweries allow you to generate a MapQuest route to them, but each brewery item contains a link to that brewery's website.
![screenshot 6](https://github.com/RyanEllingson/Squirtle-Squad/blob/master/assets/images/screenshot6.JPG)
![screenshot 7](https://github.com/RyanEllingson/Squirtle-Squad/blob/master/assets/images/screenshot7.JPG)
 
 
Installation:
No extra installation requirements for the user.
 
CDNs used:
Axios 
https://unpkg.com/axios/dist/axios.min.js

Bulma 
https://cdn.jsdelivr.net/npm/bulma-extensions@4.0.0/dist/js/bulma-extensions.min.js

Lodash
https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.15/lodash.core.js
 
APIs:
Mapquest
search => radius
directions => route optimized
 
Open Brewery Database parameters
City
State
Longitude
Latitude
 
        
Contributions:
For our first group project, we had a team of five members: Jesse Edwards - Project Manager, AyDy Burling - Designer, Samantha Sengsouvanh - Designer, Austin Schlander - Web Developer, Ryan Ellingson - Web Developer.
 
Challenges:
The initial germination of the project proved to be the most difficult. Due to situational constraints (i.e point in curriculum, funding and other lack of resources), we as a group, were limited to select APIs. Consequently, some additional user functionality (referenced further in "roadmap" section) are currently unattainable, thus limiting the scope of the user experience.
 
Utilizing a new CSS framework took some adjustment, concepts such as row and column manipulation as well as getting familiar with the various components. Since Bootstrap 4.4 was our starting reference point, Bulma did not prove to be much different but, as expected, there were some cosmetic differences. The minimal use of lodash in this project was not enough for one to fully form an opinion as far as benefits or lack there of. Lodash is something to look into for future projects.
 
Another hurdle that was ongoing was the manipulation of the API response. This is mainly in regards to combining two data APIs and being able to draw the appropriate functionality from them. An example of this would be generating the list of breweries. Our team of developers had to figure out how to convert the Mapquest location data response (city,state) into a format that the brewery API could recognize.
 
The open source brewery API that we utilized does acknowledge that more data is needed to have a more comprehensive list of breweries in the US and internationally. This, in turn, limits the database available for users. 
 
Mapquest did offer turn by turn navigation, but not real time navigation, something that we as a society have become accustomed to. 
 
Successes:
Our team was able to effectively work in a cohesive and diplomatic manner. With the utilization of Slack as a communication platform, we were able to discuss strengths and weakness of each member and then formally assign tasks via Github. During class hours, we had mini caucus moments to discuss where we were at in our project, any individual setbacks/delays and also ideas about what we wanted to still incorporate. Although the personalities in our group were quite eclectic; the open and accepting environment was pretty much inherent in nature, and this led to the honest discussion of skills and vulnerabilities. It has been a pleasure to see our ideas come to fruition.

Roadmap:
With funding and extra time, additional user features such as, Yelp reviews, Goolge Maps and Air B&B would be included. 
Funding resources could come from commercial advertisements and user donations.  
Our reasoning behind the specific enterprises listed are as follows; Yelp reviews for ratings. Google Maps for real time navigation and different overlay options. AirB&B for overnight options and other recreational activities. Our goal would be to have the user be able to design their vacation/trip in its entirety from our app. 

 
Acknowledgements:
We created this code based on the project requirements by Trilogy Education Services. We have included citations in the form of comments throughout the HTML and JavaScript files.
 
License:
MIT
 
 