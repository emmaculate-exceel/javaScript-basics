// AN ARRAY OF SEARCH HISTORY / OR A LOCAL STORAGE
let searchData = [];

// GET THE SELECTED ITEM WTIH THE SPECIFIED ID AND
document.getElementById("toggle").addEventListener("click", function() {
let searchInput = document.getElementById("searchBar").value;

// PERFORM ACTION ON THE CLICK OF THE SEARCH ICON
searchRec(searchInput);

//CONSOLE IT TO THE LOG
console.log(searchRec);

});

function searchRec(searchInput) {
    let search = {
        searchHistory: searchInput
    };
    
// ADD THE FUNCTIION TO THE LIST OF ARRAYS
    searchData.push(search);
};
