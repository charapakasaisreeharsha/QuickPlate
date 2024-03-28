function performSearch() {
    // Get the search query from the input field
    var query = document.getElementById('searchInput').value.trim();
    
    // Get the selected category
    var category = document.getElementById('searchCategory').value;

    // If the query is not empty
    if (query !== "") {
        // Redirect to the search results page passing the query and category as parameters
        window.location.href = "Oops!!!" + encodeURIComponent(query) + "&category=" + encodeURIComponent(category);
    }
}

document.getElementById('searchInput').addEventListener('input', function() {
    // Get the search query from the input field
    var query = this.value.trim();

    // If the query is not empty
    if (query !== "") {
        // Enable the search button
        document.querySelector('button').disabled = false;
    } else {
        // Disable the search button if the input is empty
        document.querySelector('button').disabled = true;
    }
});

