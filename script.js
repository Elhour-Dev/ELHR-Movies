document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('.search-button').addEventListener('click', e =>  {
        e.preventDefault();
        document.querySelectorAll('h2').forEach(title => {
 
            if (title.textContent.toLowerCase().includes(e.currentTarget.closest(".search").querySelector('.search-bar').value.toLowerCase())) {
                          console.log('dnbfdnbdfnf ndf');
                title.parentElement.style.display = 'block';
            } else {
                title.parentElement.style.display = 'none';
            }
        });

    });
});