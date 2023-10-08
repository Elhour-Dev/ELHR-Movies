document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.querySelector('.search-button');
    const titles = document.querySelectorAll('h2');
    const noResultsMessage = document.querySelector('.no-results');
    const movieImages = document.querySelectorAll('.imgs');

    searchButton.addEventListener('click', function(e) {
        e.preventDefault();
        const searchValue = document.querySelector('.search-bar').value.toLowerCase();
        let resultsFound = false;

        titles.forEach(title => {
            const movieTitle = title.textContent.toLowerCase();
            const parentElement = title.parentElement;

            if (movieTitle.includes(searchValue)) {
                parentElement.style.display = 'block';
                resultsFound = true;
            } else {
                parentElement.style.display = 'none';
            }
        });

        if (resultsFound) {
            noResultsMessage.style.display = 'none';
        } else {
            noResultsMessage.style.display = 'block';
        }
    });
    movieImages.forEach(image => {
        image.addEventListener('mouseenter', function() {
            image.style.transform = 'scale(1.05)';
        });

        image.addEventListener('mouseleave', function() {
            image.style.transform = 'scale(1)';
        });
    });
});
