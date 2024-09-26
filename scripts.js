// Hadith Data
const hadiths = [
  {
    title: "Hadith 1",
    arabic: "إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ...",
    sharhi: "Wannan Hadith yana nuna muhimmancin niyya a kowanne aiki...",
    ayat: "وَمَا أُمِرُوا إِلَّا لِيَعْبُدُوا اللَّهَ مُخْلِصِينَ لَهُ الدِّينَ..."
  },
  {
    title: "Hadith 2",
    arabic: "الدِّينُ النَّصِيحَةُ...",
    sharhi: "Wannan Hadith yana magana akan nasiha ga Allah da mutane...",
    ayat: "قُلْ إِنَّمَا أَعِظُكُمْ بِوَاحِدَةٍ أَن تَقُومُوا لِلَّهِ..."
  }
  // Add more Hadith here...
];

// Display Hadith List
const hadithList = document.getElementById('hadithList');

hadiths.forEach((hadith, index) => {
  const listItem = document.createElement('li');
  listItem.className = 'list-group-item';
  listItem.textContent = hadith.title;
  listItem.addEventListener('click', () => displayHadith(index));
  hadithList.appendChild(listItem);
});

// Display Hadith Details
function displayHadith(index) {
  const hadithDetails = document.getElementById('hadithDetails');
  document.getElementById('hadithTitle').textContent = hadiths[index].title;
  document.getElementById('hadithArabic').textContent = hadiths[index].arabic;
  document.getElementById('hadithSharhi').textContent = hadiths[index].sharhi;
  document.getElementById('ayatArabic').textContent = hadiths[index].ayat;
  hadithDetails.style.display = 'block';
}
