const hadiths = [
  {
    title: "Hadith 1",
    arabic: "إنما الأعمال بالنيات وإنما لكل امرئ ما نوى...",
    sharhi: "Wannan Hadith yana karantar da cewa ayyukan mutane suna bisa ga niyyarsu, domin haka dole ne a tsara niyya mai kyau kafin aikata wani abu.",
    ayat: {
      arabic: "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ...",
      translation: "Allah ba Ya ɗora wa kowa wani abu da ya fi ƙarfin sa. Ga shi abin da ya samu daga alherinsa, kuma ga shi abin da ya yi na sharri (shi zai ɗauka).",
      reference: "Surat Al-Baqarah (2:286)"
    }
  },
  {
    title: "Hadith 2",
    arabic: "الدين النصيحة، قلنا لمن يا رسول الله؟ قال: لله، ولكتابه، ولرسوله، ولأئمة المسلمين، وعامتهم...",
    sharhi: "Wannan Hadith yana nuna cewa addini gina nasihu ne. Nasihu ga Allah, Manzonsa, shugabanni da al'umma.",
    ayat: {
      arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَكُونُوا مَعَ الصَّادِقِينَ...",
      translation: "Yaku waɗanda suka yi imani! Ku ji tsoron Allah, kuma ku kasance tare da masu gaskiya.",
      reference: "Surat At-Tawbah (9:119)"
    }
  },
  {
    title: "Hadith 3",
    arabic: "من كان يؤمن بالله واليوم الآخر فليقل خيرا أو ليصمت...",
    sharhi: "Wannan Hadith yana karantar da cewa duk wanda ya yi imani da Allah da Lahira ya kyautata mu'amala ta hanyar kyautata magana ko yin shiru.",
    ayat: {
      arabic: "وَإِذَا حُيِّيتُم بِتَحِيَّةٍ فَحَيُّوا بِأَحْسَنَ مِنْهَا أَوْ رُدُّوهَا...",
      translation: "Kuma idan aka yi muku sallama, sai ku rama da mafi kyau gare ta, ko kuma ku mayar da ita.",
      reference: "Surat An-Nisa (4:86)"
    }
  },
  {
    title: "Hadith 4",
    arabic: "الظلم ظلمات يوم القيامة...",
    sharhi: "Wannan Hadith yana jan hankali daga aikata zalunci, domin zalunci yana zama duhu a ranar kiyama.",
    ayat: {
      arabic: "وَلَا تَحْسَبَنَّ اللَّهَ غَافِلًا عَمَّا يَعْمَلُ الظَّالِمُونَ...",
      translation: "Kada ka yi tsammanin Allah mai gafala ne daga abin da azzalumai suke aikatawa.",
      reference: "Surat Ibrahim (14:42)"
    }
  },
  {
    title: "Hadith 5",
    arabic: "إن الله لا ينظر إلى صوركم وأموالكم ولكن ينظر إلى قلوبكم وأعمالكم...",
    sharhi: "Wannan Hadith yana karantar da cewa Allah ba ya kallon kamannin mutane ko dukiyarsu, sai dai zuciyarsu da ayyukansu.",
    ayat: {
      arabic: "يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَىٰ وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا...",
      translation: "Ya ku mutane! Hakika Mun halicce ku daga namiji da mace, kuma Mun sanya ku al'ummomi da kabilu domin ku san juna...",
      reference: "Surat Al-Hujurat (49:13)"
    }
  },
  {
    title: "Hadith 6",
    arabic: "إذا مات الإنسان انقطع عمله إلا من ثلاث: صدقة جارية أو علم ينتفع به أو ولد صالح يدعو له...",
    sharhi: "Wannan Hadith yana nuna cewa idan mutum ya mutu, dukkan aikinsa yana yankewa sai dai guda uku: Sadaqa mai gudana, ilimin da ake amfani da shi, da ɗa nagari wanda yake yi masa addu’a.",
    ayat: {
      arabic: "الْمَالُ وَالْبَنُونَ زِينَةُ الْحَيَاةِ الدُّنْيَا...",
      translation: "Dukiya da 'ya'ya suna daga cikin kayan ado na rayuwar duniya...",
      reference: "Surat Al-Kahf (18:46)"
    }
  },
  {
    title: "Hadith 7",
    arabic: "من صلى عليّ واحدة صلى الله عليه بها عشرا...",
    sharhi: "Wannan Hadith yana nuna falalar yin salati ga Manzon Allah, inda Allah zai yi salati sau goma ga wanda ya yi sau daya.",
    ayat: {
      arabic: "إِنَّ اللَّهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ يَا أَيُّهَا الَّذِينَ آمَنُوا صَلُّوا عَلَيْهِ وَسَلِّمُوا تَسْلِيمًا...",
      translation: "Lallai Allah da mala'ikunsa suna yi wa Annabi salati. Ya ku wadanda suka yi imani! Ku yi salati gare shi, ku yi masa sallama.",
      reference: "Surat Al-Ahzab (33:56)"
    }
  },
  {
    title: "Hadith 8",
    arabic: "من حسن إسلام المرء تركه ما لا يعنيه...",
    sharhi: "Wannan Hadith yana karantar da cewa daga kyawun Musulunci shine mutum ya bar abin da ba ya damunsa.",
    ayat: {
      arabic: "وَلَا تَقْفُ مَا لَيْسَ لَكَ بِهِ عِلْمٌ...",
      translation: "Kada ka bi abin da ba ka da ilmi a kansa.",
      reference: "Surat Al-Isra (17:36)"
    }
  },
  {
    title: "Hadith 9",
    arabic: "المرء على دين خليله فلينظر أحدكم من يخالل...",
    sharhi: "Wannan Hadith yana nusar da cewa halin mutum yana bisa ga abokan sa, don haka dole ne ya zaɓi abokansa da kyau.",
    ayat: {
      arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَكُونُوا مَعَ الصَّادِقِينَ...",
      translation: "Ya ku waɗanda suka yi imani! Ku ji tsoron Allah, kuma ku kasance tare da masu gaskiya.",
      reference: "Surat At-Tawbah (9:119)"
    }
  },
  {
    title: "Hadith 10",
    arabic: "من لا يشكر الناس لا يشكر الله...",
    sharhi: "Wannan Hadith yana nuna cewa duk wanda ba ya gode wa mutane, ba zai iya godiya ga Allah ba.",
    ayat: {
      arabic: "وَإِذْ تَأَذَّنَ رَبُّكُمْ لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ...",
      translation: "Kuma lokacin da Ubangijinku Ya yi sanarwa: idan kun gode, hakika zan ƙara muku (ni'ima).",
      reference: "Surat Ibrahim (14:7)"
    }
  },
  {
    title: "Hadith 11",
    arabic: "لا يؤمن أحدكم حتى يحب لأخيه ما يحب لنفسه...",
    sharhi: "Wannan Hadith yana karantar da cewa ba a cika imanin mutum ba har sai ya so wa dan uwansa abin da yake so wa kansa.",
    ayat: {
      arabic: "إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ...",
      translation: "Lallai mumunai 'yan'uwa ne.",
      reference: "Surat Al-Hujurat (49:10)"
    }
  },
  {
    title: "Hadith 12",
    arabic: "لا ضرر ولا ضرار...",
    sharhi: "Wannan Hadith yana nuna cewa babu wani mai cutarwa ko wanda za a cutar da shi a cikin Musulunci.",
    ayat: {
      arabic: "وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ وَلَا تَعَاوَنُوا عَلَى الْإِثْمِ وَالْعُدْوَانِ...",
      translation: "Kuma ku taimaki juna cikin alheri da tsoron Allah, kada ku taimaki juna wajen zunubi da tsaurin kai.",
      reference: "Surat Al-Ma'idah (5:2)"
    }
  },
  {
    title: "Hadith 13",
    arabic: "من كان يؤمن بالله واليوم الآخر فليكرم ضيفه...",
    sharhi: "Wannan Hadith yana nuna cewa duk wanda ya yi imani da Allah da ranar Lahira, ya kyautatawa bakinsa domin wannan daga cikin alheri ne.",
    ayat: {
      arabic: "وَإِذَا حُيِّيتُم بِتَحِيَّةٍ فَحَيُّوا بِأَحْسَنَ مِنْهَا أَوْ رُدُّوهَا...",
      translation: "Kuma idan aka yi muku sallama, ku rama da mafi kyau gare ta ko kuma ku mayar da ita.",
      reference: "Surat An-Nisa (4:86)"
    }
  },
  {
    title: "Hadith 14",
    arabic: "المسلم من سلم المسلمون من لسانه ويده...",
    sharhi: "Wannan Hadith yana karantar da cewa musulmi shi ne wanda sauran musulmi suka tsira daga harshensa da hannunsa.",
    ayat: {
      arabic: "وَقُولُوا لِلنَّاسِ حُسْنًا...",
      translation: "Kuma ku faɗi maganar kirki ga mutane.",
      reference: "Surat Al-Baqarah (2:83)"
    }
  },
  {
    title: "Hadith 15",
    arabic: "لا يؤمن أحدكم حتى يحب لأخيه ما يحب لنفسه...",
    sharhi: "Wannan Hadith yana nuna cewa ba a cika imanin mutum ba har sai ya so wa ɗan uwansa abin da yake so wa kansa.",
    ayat: {
      arabic: "إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ...",
      translation: "Lallai mumunai 'yan'uwa ne.",
      reference: "Surat Al-Hujurat (49:10)"
    }
  },
  {
    title: "Hadith 16",
    arabic: "من لا يرحم لا يُرحم...",
    sharhi: "Wannan Hadith yana nuna cewa duk wanda ba ya jinƙai, ba za a yi masa jinƙai ba.",
    ayat: {
      arabic: "فَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ...",
      translation: "Duk wanda ya yi ƙwarai na alheri, zai gan shi.",
      reference: "Surat Az-Zalzalah (99:7)"
    }
  },
  {
    title: "Hadith 17",
    arabic: "اتق الله حيثما كنت...",
    sharhi: "Wannan Hadith yana karantar da muhimmancin tsoron Allah a kowane lokaci da kowane wuri.",
    ayat: {
      arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَكُونُوا مَعَ الصَّادِقِينَ...",
      translation: "Yaku waɗanda suka yi imani! Ku ji tsoron Allah, kuma ku kasance tare da masu gaskiya.",
      reference: "Surat At-Tawbah (9:119)"
    }
  },
  {
    title: "Hadith 18",
    arabic: "إن الله كتب الإحسان على كل شيء...",
    sharhi: "Wannan Hadith yana nuna cewa Allah Ya wajabta yin alheri a cikin komai, hatta wajen yin kisa ko yanka dabbobi.",
    ayat: {
      arabic: "وَأَحْسِنُوا إِنَّ اللَّهَ يُحِبُّ الْمُحْسِنِينَ...",
      translation: "Ku yi alheri, lallai Allah yana son masu alheri.",
      reference: "Surat Al-Baqarah (2:195)"
    }
  },
  {
    title: "Hadith 19",
    arabic: "إذا لم تستحِ فاصنع ما شئت...",
    sharhi: "Wannan Hadith yana nuna cewa rashin kunya yana kaiwa ga aikata duk wani abu mai cutarwa ko haramun.",
    ayat: {
      arabic: "فَاسْتَحْيُوا مِنَ اللَّهِ حَقَّ الْحَيَاءِ...",
      translation: "Ku ji kunyar Allah da cikakken kunya.",
      reference: "Surat An-Nisa (4:1)"
    }
  },
  {
    title: "Hadith 20",
    arabic: "من سن في الإسلام سنة حسنة فله أجرها وأجر من عمل بها...",
    sharhi: "Wannan Hadith yana karantar da cewa duk wanda ya kirkiro kyakkyawan aiki a cikin Musulunci, zai sami ladan wannan aiki da ladan duk wanda ya aikata shi.",
    ayat: {
      arabic: "مَّن جَاءَ بِالْحَسَنَةِ فَلَهُ عَشْرُ أَمْثَالِهَا...",
      translation: "Duk wanda ya zo da kyakkyawan aiki, zai sami lada goma makamancin sa.",
      reference: "Surat Al-An'am (6:160)"
    }
  },
  {
    title: "Hadith 21",
    arabic: "الحياء شعبة من الإيمان...",
    sharhi: "Wannan Hadith yana nuna cewa kunya tana daga cikin imani, kuma ita ce daga mafi kyawun halaye.",
    ayat: {
      arabic: "وَلِبَاسُ التَّقْوَىٰ ذَٰلِكَ خَيْرٌ...",
      translation: "Kuma tufafin tsoron Allah shi ne mafi alheri.",
      reference: "Surat Al-A'raf (7:26)"
    }
  },
  {
    title: "Hadith 22",
    arabic: "من قتل معاهداً لم يرح رائحة الجنة...",
    sharhi: "Wannan Hadith yana jan hankali kan kisan mutum da ya shigo yarjejeniya da musulmi, domin hakan yana hana wa wanda ya aikata hakan shiga Aljanna.",
    ayat: {
      arabic: "وَلَا تَقْتُلُوا النَّفْسَ الَّتِي حَرَّمَ اللَّهُ إِلَّا بِالْحَقِّ...",
      translation: "Kada ku kashe rai wanda Allah Ya haramta, sai da gaskiya.",
      reference: "Surat Al-Isra (17:33)"
    }
  },
  {
    title: "Hadith 23",
    arabic: "اغتنم خمساً قبل خمس: شبابك قبل هرمك...",
    sharhi: "Wannan Hadith yana karantar da mu yin amfani da ni'imomin da Allah Ya ba mu yayin da muke da su kafin su gushe, kamar matasa, lafiya, da lokacin wadata.",
    ayat: {
      arabic: "فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ...",
      translation: "Ku tunani Ni, zan tuna ku, ku gode min, kada ku yi kafirci gare ni.",
      reference: "Surat Al-Baqarah (2:152)"
    }
  },
  {
    title: "Hadith 24",
    arabic: "من صلى البردين دخل الجنة...",
    sharhi: "Wannan Hadith yana nuna cewa wanda ya tsaya kan sallah biyu mai sanyin safiya da yamma zai shiga Aljanna.",
    ayat: {
      arabic: "وَأَقِيمُوا الصَّلَاةَ...",
      translation: "Kuma ku tsayar da sallah.",
      reference: "Surat Al-Baqarah (2:43)"
    }
  },
  {
    title: "Hadith 25",
    arabic: "إن الله تجاوز لي عن أمتي الخطأ والنسيان...",
    sharhi: "Wannan Hadith yana bayani kan cewa Allah Ya gafarta wa al’ummarsa kuskure, mantuwa, da abin da aka tilasta musu.",
    ayat: {
      arabic: "رَبَّنَا لَا تُؤَاخِذْنَا إِن نَّسِينَا أَوْ أَخْطَأْنَا...",
      translation: "Ya Ubangijinmu, kada ka kamamu da laifi idan mun manta ko mun yi kuskure.",
      reference: "Surat Al-Baqarah (2:286)"
    }
  },
  {
    title: "Hadith 26",
    arabic: "الدين النصيحة...",
    sharhi: "Wannan Hadith yana nuna cewa nasiha ita ce ginshiƙin addini, kuma ya wajaba ga dukkan musulmi su ba da nasiha ga juna da gaskiya da aminci.",
    ayat: {
      arabic: "وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ...",
      translation: "Kuma suna yin wasiyya da gaskiya da haƙuri.",
      reference: "Surat Al-Asr (103:3)"
    }
  },
  {
    title: "Hadith 27",
    arabic: "البينة على المدعي، واليمين على من أنكر...",
    sharhi: "Wannan Hadith yana nuna cewa wanda ya yi da’awa, ya kamata ya kawo shaida, wanda kuma aka yi wa da’awa, ya rantse domin tabbatar da gaskiyarsa.",
    ayat: {
      arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا تَدَايَنتُم بِدَيْنٍ...",
      translation: "Yaku waɗanda suka yi imani! Idan kun yi ɗan bashi zuwa wa'adi, to ku rubuta shi.",
      reference: "Surat Al-Baqarah (2:282)"
    }
  },
  {
    title: "Hadith 28",
    arabic: "ما نهيتكم عنه فاجتنبوه، وما أمرتكم به فأتوا منه ما استطعتم...",
    sharhi: "Wannan Hadith yana nuna cewa wajibi ne mu nisanci duk abin da Allah da Manzonsa suka hana, kuma muyi duk abin da aka umarce mu da shi gwargwadon iyawarmu.",
    ayat: {
      arabic: "فَاتَّقُوا اللَّهَ مَا اسْتَطَعْتُمْ...",
      translation: "Kuyi tsoron Allah gwargwadon iyawarku.",
      reference: "Surat At-Taghabun (64:16)"
    }
  },
  {
    title: "Hadith 29",
    arabic: "من قتل نفسه بشيء عذب به يوم القيامة...",
    sharhi: "Wannan Hadith yana jan hankali akan girman laifin kisan kai ko kashe kansa, wanda zai zama azabar karshe ranar Lahira.",
    ayat: {
      arabic: "وَلَا تَقْتُلُوا أَنفُسَكُمْ...",
      translation: "Kada ku kashe kanku.",
      reference: "Surat An-Nisa (4:29)"
    }
  },
  {
    title: "Hadith 30",
    arabic: "إن الله طيب لا يقبل إلا طيباً...",
    sharhi: "Wannan Hadith yana bayyana cewa Allah mai tsarki ne, kuma ba ya karɓar komai face abin da yake tsarki da halal.",
    ayat: {
      arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا كُلُوا مِن طَيِّبَاتِ مَا رَزَقْنَاكُمْ...",
      translation: "Yaku waɗanda suka yi imani! Ku ci daga cikin halal na abin da muka azurta ku da shi.",
      reference: "Surat Al-Baqarah (2:172)"
    }
  },
  {
    title: "Hadith 31",
    arabic: "من اقتطع حق امرئ مسلم بيمينه فقد أوجب الله له النار...",
    sharhi: "Wannan Hadith yana bayani akan girman laifin wanda ya karɓi hakkin wani da ƙarya ko rantsuwa marar gaskiya, domin Allah Ya ƙaddara masa wuta.",
    ayat: {
      arabic: "وَلَا تَأْكُلُوا أَمْوَالَكُم بَيْنَكُم بِالْبَاطِلِ...",
      translation: "Kada ku ci dukiyarku da zalunci a tsakaninku.",
      reference: "Surat Al-Baqarah (2:188)"
    }
  },
  {
    title: "Hadith 32",
    arabic: "اتقوا النار ولو بشق تمرة...",
    sharhi: "Wannan Hadith yana nuna cewa ya wajaba ga mutum ya tsira daga wuta, ko da ta hanyar ba da abu kaɗan kamar rabin dabino sadaka.",
    ayat: {
      arabic: "فَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ...",
      translation: "Duk wanda ya yi ƙwayar alheri, zai gan shi.",
      reference: "Surat Az-Zalzalah (99:7)"
    }
  },
  {
    title: "Hadith 33",
    arabic: "لو يعطى الناس بدعواهم لادعى رجال دماء قوم وأموالهم...",
    sharhi: "Wannan Hadith yana bayani akan wajabcin kawo hujja ko shaida yayin da ake yi wa wani da’awa, domin kariya daga zamba da ƙarya.",
    ayat: {
      arabic: "وَإِنَّهُ لَحَقٌّ مِثْلَ مَا أَنَّكُمْ تَنطِقُونَ...",
      translation: "Lallai gaskiya ne kamar yadda kuke magana.",
      reference: "Surat Adh-Dhariyat (51:23)"
    }
  },
  {
    title: "Hadith 34",
    arabic: "من كان يؤمن بالله واليوم الآخر فليقل خيراً أو ليصمت...",
    sharhi: "Wannan Hadith yana bayyana cewa wanda ya yi imani da Allah da ranar Lahira, ya kamata ya faɗi abu mai kyau ko kuma yayi shiru domin kaucewa cutarwa.",
    ayat: {
      arabic: "وَقُولُوا لِلنَّاسِ حُسْنًا...",
      translation: "Kuma ku faɗi maganar kirki ga mutane.",
      reference: "Surat Al-Baqarah (2:83)"
    }
  },
  {
    title: "Hadith 35",
    arabic: "لا تزول قدما عبد يوم القيامة حتى يسأل عن أربع...",
    sharhi: "Wannan Hadith yana nuna cewa babu wanda zai tsira ranar kiyama sai bayan an tambaye shi abubuwa hudu: rayuwarsa, iliminsa, dukiyarsa da kuma jikinsa.",
    ayat: {
      arabic: "وَقِفُوهُمْ إِنَّهُم مَّسْئُولُونَ...",
      translation: "Kuma tsayar da su, lallai su tambayewa za su yi.",
      reference: "Surat As-Saffat (37:24)"
    }
  },
  {
    title: "Hadith 36",
    arabic: "من نفس عن مؤمن كربة من كرب الدنيا نفس الله عنه كربة من كرب يوم القيامة...",
    sharhi: "Wannan Hadith yana nuna falalar taimakawa mumini a lokacin damuwarsa, wanda hakan zai sa Allah ya rage masa daga cikin damuwarsa ranar kiyama.",
    ayat: {
      arabic: "وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَى...",
      translation: "Ku taimaki juna kan kyawawa da tsoron Allah.",
      reference: "Surat Al-Ma'idah (5:2)"
    }
  },
  {
    title: "Hadith 37",
    arabic: "كل سلامى من الناس عليه صدقة...",
    sharhi: "Wannan Hadith yana nuna cewa kowane mutum yana da sadaka da ya kamata ya bayar kowace rana, kuma aikin alheri yana matsayin sadaka.",
    ayat: {
      arabic: "وَمَا تُقَدِّمُوا لِأَنفُسِكُم مِّنْ خَيْرٍ تَجِدُوهُ عِندَ اللَّهِ...",
      translation: "Duk abin da kuka aikata na alheri, zaku tarar da shi wajen Allah.",
      reference: "Surat Al-Baqarah (2:110)"
    }
  },
  {
    title: "Hadith 38",
    arabic: "ليس الغنى عن كثرة العرض ولكن الغنى غنى النفس...",
    sharhi: "Wannan Hadith yana nuna cewa dukiya ba ta yawan kaya take ba, amma ta yawaitar gamsuwa da abin da mutum yake da shi.",
    ayat: {
      arabic: "وَمَا أَنفَقْتُم مِّن شَيْءٍ فَهُوَ يُخْلِفُهُ...",
      translation: "Duk abin da kuka ciyar, Allah zai maye muku.",
      reference: "Surat Saba' (34:39)"
    }
  },
  {
    title: "Hadith 39",
    arabic: "من أحب لله وأبغض لله وأعطى لله ومنع لله فقد استكمل الإيمان...",
    sharhi: "Wannan Hadith yana nuna cewa cikar imani yana cikin yin dukkan ayyuka saboda Allah, kamar kaunar wani ko ƙin sa da bayarwa ko hana abu saboda Allah.",
    ayat: {
      arabic: "إِنَّمَا الْمُؤْمِنُونَ الَّذِينَ آمَنُوا بِاللَّهِ وَرَسُولِهِ...",
      translation: "Lallai mumini shine wanda ya yi imani da Allah da Manzonsa.",
      reference: "Surat An-Nur (24:62)"
    }
  },
  {
    title: "Hadith 40",
    arabic: "من كان يؤمن بالله واليوم الآخر فليصل رحمه...",
    sharhi: "Wannan Hadith yana jaddada muhimmancin dangantaka da dangi, kuma cewa duk wanda ya yi imani da Allah da ranar Lahira ya kamata ya kula da danginsa.",
    ayat: {
      arabic: "وَاتَّقُوا اللَّهَ الَّذِي تَسَاءَلُونَ بِهِ وَالْأَرْحَامَ...",
      translation: "Kuyi tsoron Allah wanda kuke tambayarsa, kuma ku kula da zumuncinku.",
      reference: "Surat An-Nisa (4:1)"
    }
  }
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
