document.querySelectorAll('.navigation a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelectorAll('.content').forEach(function(content) {
            content.classList.remove('active');
        });
        document.querySelector(event.target.getAttribute('href')).classList.add('active');
    });
});
