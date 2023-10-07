document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.querySelector('.search');
    const movies = document.querySelectorAll('.main > div');
    const noResultsMessage = document.querySelector('.no-results');

    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const searchTerm = event.target.q.value.toLowerCase();
        let hasResults = false;

        movies.forEach(movie => {
            const title = movie.querySelector('h2').textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                movie.style.display = 'block';
                hasResults = true;
            } else {
                movie.style.display = 'none';
            }
        });

        if (hasResults) {
            noResultsMessage.style.display = 'none';
        } else {
            noResultsMessage.style.display = 'block';
        }
    });
});