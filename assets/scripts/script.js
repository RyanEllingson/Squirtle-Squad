const startEl = document.getElementById("start-city");
const endEl = document.getElementById("end-city");
const midDest1El = document.getElementById("mid-dest-1");
const midDest2El = document.getElementById("mid-dest-2");
const midDest3El = document.getElementById("mid-dest-3");
const midDest4El = document.getElementById("mid-dest-4");
const midDest5El = document.getElementById("mid-dest-5");
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
// Get the breweries at the starting location
const getBreweriesAtStartLocation = () => {
    queryURL = "https://api.openbrewerydb.org/breweries?by_city=" + startLocation;
    axios.get(queryURL)
    .then(function(response){
        console.log(response.data);
    });
}
// Get the breweries at the ending location
const getBreweriesAtEndLocation = () => {
    queryURL = "https://api.openbrewerydb.org/breweries?by_city=" + endLocation;
    axios.get(queryURL)
    .then(function(response){
        console.log(response.data);
    });
}