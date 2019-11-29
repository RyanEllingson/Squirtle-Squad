// Select all the input fields with the class name of "search-js"
const destEls = document.querySelectorAll(".search-js");
// Select the submit button
const buttonEl = document.getElementById("button");
const mapEl = document.getElementById("map-img");
const stateSymbols = ["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"];
const stateNames = ["alabama","alaska","arizona","arkansas","california","colorado","connecticut","delaware","florida","georgia","hawaii","idaho","illinois","indiana","iowa","kansas","kentucky","louisiana","maine","maryland","massachusetts","michigan","minnesota","mississippi","missouri","montana","nebraska","nevada","new_hampshire","new_jersey","new_york","north_carolina","north_dakota","ohio","oklahoma","oregon","pennsylvania","rhode_island","south_carolina","south_dakota","tennessee","texas","utah","vermont","virginia","washington","west_virginia","wisconsin","wyoming"];

// Function transforms state symbol returned by mapquest to state name understandable by brewery API
function convertState(stateAbbv) {
    return stateNames[stateSymbols.indexOf(stateAbbv)];
}

// Function that will grab all the input values from the destEls array
function getLocationInputs(){
    let locationArray = [];
    for (let i = 0; i < destEls.length; i++) {
        const currentDest = destEls[i].value;
        if (currentDest !== "") {
            // Extract city name from user input and use in brewery get request
            let queryURL = "http://www.mapquestapi.com/search/v2/radius?key=QE84xF6fPwGPtqLDtyk7AmK1dcKhwF5g&maxMatches=1&origin=" + currentDest;
            axios.get(queryURL)
            .then(function(response) {
                console.log(response);
                const cityState = [response.data.origin.adminArea5,convertState(response.data.origin.adminArea3)];
                // Call getBreweries function to get the breweries at the current destination in the array
                getBreweries(cityState); 
            })
          

            locationArray.push(currentDest);
        } 
    }
    getRoute(locationArray);
}

// Add event listener to the submit button and when clicked run the getLocationInputs function
buttonEl.addEventListener("click", getLocationInputs);

// Function that will find all the breweries at a certain location by using openBreweryDB's API
function getBreweries(currentLocation) {
    const city = currentLocation[0];
    const state = currentLocation[1];
    let queryURL = "https://api.openbrewerydb.org/breweries?by_city=" + city + "&by_state=" + state;
    axios.get(queryURL)
    .then(function(response){
        console.log(response.data);
    });       
}


function getRoute(locations) {
    let locationString = "";
    for (i=0; i<locations.length; i++) {
        locationString = locationString + "'" + locations[i] + "'";
        if (i<locations.length -1) {
            locationString = locationString + ",";
        }
    }
    locationString = locationString.replace(/\s+/g, '');
    const queryURL = "https://www.mapquestapi.com/directions/v2/optimizedroute?key=QE84xF6fPwGPtqLDtyk7AmK1dcKhwF5g&json={'locations':[" + locationString + "]}";
    axios.get(queryURL)
    .then(function(response) {
        console.log(response);
        const mapURL = "https://www.mapquestapi.com/staticmap/v5/map?key=QE84xF6fPwGPtqLDtyk7AmK1dcKhwF5g&session=" + response.data.route.sessionId;
        mapEl.setAttribute("src",mapURL);
    });
}
