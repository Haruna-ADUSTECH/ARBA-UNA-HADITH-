// Function to dynamically load the hadith details
function loadHadithDetails(hadithNumber) {
    // Define the hadith data (this is a sample; you'll need to add all 40 Hadith details here)
    const hadiths = {
        1: {
            title: "Hadith 1: إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ",
            arabic: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى...",
            sharhi: "Lallai dukkan ayyuka suna dogara da niyya, kuma kowane mutum yana da abin da ya yi niyya. Wannan hadisin ya nuna muhimmancin niyya da kuduri a kowane aiki, musamman ayyukan ibada.",
            ayat: "﴿ إِنَّمَا نَحْنُ نَبْلُوكُم بِالشَّرِّ وَالْخَيْرِ فِتْنَةً ﴾ - Surah Al-Anbiya (21:35)"
        },
        2: {
            title: "Hadith 2: دُعَاءٌ كَمَا نَدْعُوكُمْ",
            arabic: "دُعَاءٌ كَمَا نَدْعُوكُمْ فَإِنَّ اللّهَ أَحَقُّ أَنْ يُجَابَ لَهُ...",
            sharhi: "Manzon Allah (SAW) ya nuna cewa addu'a wani muhimmin sashi ne na ibada, kuma Allah ne mafi cancanta a tsarkake.",
            ayat: "﴿ وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ ﴾ - Surah Al-Baqarah (2:186)"
        },
        // Add remaining hadiths here up to 40
    };

    // Get the hadith details based on the number clicked
    const hadith = hadiths[hadithNumber];

    if (hadith) {
        // Update the HTML content with the selected hadith details
        document.querySelector('.hadith-title').textContent = hadith.title;
        document.querySelector('.arabic-text').textContent = hadith.arabic;
        document.querySelector('.hausa-text').textContent = hadith.sharhi;
        document.querySelector('.ayat-text').textContent = hadith.ayat;

        // Show the hadith details section
        document.querySelector('.hadith-details').style.display = 'block';
    } else {
        alert("Hadith not found!");
    }
}

// Add event listeners to all hadith links
document.querySelectorAll('.list-group-item').forEach(function(item, index) {
    item.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the link from navigating
        loadHadithDetails(index + 1); // Load the corresponding hadith (1-based index)
    });
});
