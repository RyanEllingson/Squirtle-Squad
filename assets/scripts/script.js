const destEl = document.querySelector(".search-js");
const buttonEl = document.getElementById("button");
let queryURL;

buttonEl.addEventListener("click",function() {
    const startLocation = startEl.value;
    const endLocation = endEl.value;
    const midDest1 = midDest1El.value;
    const midDest2 = midDest2El.value;
    const midDest3 = midDest3El.value;
    const midDest4 = midDest4El.value;
    const midDest5 = midDest5El.value;
    //  perform mapquest call for selected locations
    //  display brewery information
    //  display map
});
// Get the breweries at the a certain location
const getBreweries = (currentLocation) => {
    queryURL = "https://api.openbrewerydb.org/breweries?by_city=" + currentLocation;
    axios.get(queryURL)
    .then(function(response){
        console.log(response.data);
    });
}
