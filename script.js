document.getElementById("searchForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const studentName = document.getElementById("studentName").value;
    const searchResults = document.getElementById("searchResults");
    searchResults.innerHTML = `<p>Resultados da pesquisa para "${studentName}":</p>`;
 
});