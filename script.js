// JavaScript for Hadith interaction (Optional for adding dynamic behavior)

// Add a click event to the Hadith list items
document.querySelectorAll('.list-group-item').forEach(function(item) {
    item.addEventListener('click', function() {
        alert('Loading the Hadith details...');
        // This can be enhanced to load hadith dynamically if needed.
    });
});

// Future AJAX example for dynamically loading hadith content
function loadHadith(hadithNumber) {
    fetch(`hadith${hadithNumber}.html`)
        .then(response => response.text())
        .then(data => {
            document.querySelector('.hadith-details').innerHTML = data;
        })
        .catch(error => console.error('Error loading Hadith:', error));
}
