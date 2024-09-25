// Function to navigate to the corresponding Hadith page
document.querySelectorAll('.list-group-item').forEach(function(item, index) {
    item.addEventListener('click', function(event) {
        event.preventDefault();  // Prevent the default anchor click behavior

        // Create the URL based on the clicked hadith index (1-based index)
        const hadithPage = `hadith${index + 1}.html`;

        // Redirect to the appropriate hadith page
        window.location.href = hadithPage;
    });
});
