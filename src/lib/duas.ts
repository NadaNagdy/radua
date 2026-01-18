export interface CommunityDua {
  id: string;
  text: string;
  author: string;
  likes: number;
  category?: string;
  timestamp?: number;
}

export interface CategoryDua {
  id: string;
  text: string;
  category: string;
  source?: string;
}

export interface Category {
  id: string;
  name: string;
  arabicName: string;
  description: string;
  icon: string;
}

export const categories: Category[] = [
  {
    id: 'general',
    name: 'General',
    arabicName: 'أدعية عامة',
    description: 'أدعية يومية شاملة',
    icon: '🤲'
  },
  {
    id: 'quran',
    name: 'Quran',
    arabicName: 'أدعية قرآنية',
    description: 'أدعية من القرآن الكريم',
    icon: '📖'
  },
  {
    id: 'protection',
    name: 'Protection',
    arabicName: 'أدعية الحماية',
    description: 'أدعية للحفظ والحماية',
    icon: '🛡️'
  },
  {
    id: 'knowledge',
    name: 'Knowledge',
    arabicName: 'أدعية العلم',
    description: 'أدعية طلب العلم',
    icon: '📚'
  }
];

export const categoryDuas: CategoryDua[] = [
  {
    id: '1',
    text: 'اللهم إني أسألك العافية في الدنيا والآخرة',
    category: 'general',
    source: 'حديث شريف'
  },
  {
    id: '2',
    text: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
    category: 'quran',
    source: 'سورة البقرة: 201'
  },
  {
    id: '3',
    text: 'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ',
    category: 'protection',
    source: 'حديث شريف'
  },
  {
    id: '4',
    text: 'رَبِّ زِدْنِي عِلْمًا',
    category: 'knowledge',
    source: 'سورة طه: 114'
  },
  {
    id: '5',
    text: 'اللَّهُمَّ إِنَّكَ عَفُوٌّ كَرِيمٌ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي',
    category: 'laylat-al-qadr',
    source: 'حديث شريف - رواه الترمذي'
  },
  {
    id: '6',
    text: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ وَرَحْمَتِكَ فَإِنَّهُ لَا يَمْلِكُهَا إِلَّا أَنْتَ',
    category: 'laylat-al-qadr',
    source: 'دعاء مأثور'
  },
  {
    id: '7',
    text: 'اللَّهُمَّ اجْعَلْنَا مِنَ الْمَقْبُولِينَ فِي لَيْلَةِ الْقَدْرِ',
    category: 'laylat-al-qadr',
    source: 'دعاء ليلة القدر'
  },
  {
    id: '8',
    text: 'اللَّهُمَّ بَلِّغْنَا لَيْلَةَ الْقَدْرِ وَاجْعَلْنَا مِنَ الْفَائِزِينَ فِيهَا',
    category: 'laylat-al-qadr',
    source: 'دعاء رمضان'
  }
];

export const communityDuas: CommunityDua[] = [
  {
    id: '1',
    text: 'اللهم إني أسألك العافية في الدنيا والآخرة',
    author: 'محمد أحمد',
    likes: 45,
    category: 'دعاء عام',
    timestamp: Date.now()
  },
  {
    id: '2',
    text: 'اللهم اجعل القرآن ربيع قلوبنا',
    author: 'فاطمة علي',
    likes: 32,
    category: 'دعاء القرآن',
    timestamp: Date.now()
  }
];

export function getCommunityDuas(): CommunityDua[] {
  return communityDuas;
}

export function getCommunityDuaById(id: string): CommunityDua | undefined {
  return communityDuas.find(dua => dua.id === id);
}

export function getCategoryDuas(categoryId?: string): CategoryDua[] {
  if (!categoryId) return categoryDuas;
  return categoryDuas.filter(dua => dua.category === categoryId);
}

export function getCategories(): Category[] {
  return categories;
}

export interface DuaItem {
  id: string;
  text: string;
  source?: string;
}

export function getCategoryDuasGrouped(): Record<string, DuaItem[]> {
  const grouped: Record<string, DuaItem[]> = {};
  
  categoryDuas.forEach(dua => {
    if (!grouped[dua.category]) {
      grouped[dua.category] = [];
    }
    grouped[dua.category].push({
      id: dua.id,
      text: dua.text,
      source: dua.source
    });
  });
  
  return grouped;
}

export interface DailyDua {
  id: string;
  title: string;
  arabicTitle: string;
  dua: string;
  transliteration?: string;
  meaning?: string;
  source?: string;
  category?: string;
  timeOfDay?: 'morning' | 'evening' | 'night' | 'anytime';
}

export const dailyDuas: DailyDua[] = [
  {
    id: '1',
    title: 'Morning Dua',
    arabicTitle: 'دعاء الصباح',
    dua: 'أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ',
    transliteration: 'Asbahna wa asbahal-mulku lillah, walhamdu lillah',
    meaning: 'أصبحنا وأصبح الملك لله، والحمد لله',
    source: 'أذكار الصباح',
    category: 'صباح',
    timeOfDay: 'morning'
  },
  {
    id: '2',
    title: 'Evening Dua',
    arabicTitle: 'دعاء المساء',
    dua: 'أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ',
    transliteration: 'Amsayna wa amsal-mulku lillah, walhamdu lillah',
    meaning: 'أمسينا وأمسى الملك لله، والحمد لله',
    source: 'أذكار المساء',
    category: 'مساء',
    timeOfDay: 'evening'
  },
  {
    id: '3',
    title: 'Before Sleep',
    arabicTitle: 'دعاء النوم',
    dua: 'بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا',
    transliteration: 'Bismika Allahumma amutu wa ahya',
    meaning: 'باسمك اللهم أموت وأحيا',
    source: 'أذكار النوم',
    category: 'نوم',
    timeOfDay: 'night'
  },
  {
    id: '4',
    title: 'Upon Waking',
    arabicTitle: 'دعاء الاستيقاظ',
    dua: 'الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ',
    transliteration: 'Alhamdu lillahil-ladhi ahyana ba\'da ma amatana wa ilayhin-nushur',
    meaning: 'الحمد لله الذي أحيانا بعد ما أماتنا وإليه النشور',
    source: 'دعاء الاستيقاظ',
    category: 'صباح',
    timeOfDay: 'morning'
  },
  {
    id: '5',
    title: 'Before Eating',
    arabicTitle: 'دعاء الطعام',
    dua: 'بِسْمِ اللَّهِ',
    transliteration: 'Bismillah',
    meaning: 'باسم الله',
    source: 'سنة نبوية',
    category: 'طعام',
    timeOfDay: 'anytime'
  },
  {
    id: '6',
    title: 'After Eating',
    arabicTitle: 'دعاء بعد الطعام',
    dua: 'الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِينَ',
    transliteration: 'Alhamdu lillahil-ladhi at\'amana wa saqana wa ja\'alana muslimin',
    meaning: 'الحمد لله الذي أطعمنا وسقانا وجعلنا مسلمين',
    source: 'سنة نبوية',
    category: 'طعام',
    timeOfDay: 'anytime'
  }
];

export function getDailyDuas(timeOfDay?: string): DailyDua[] {
  if (!timeOfDay) return dailyDuas;
  return dailyDuas.filter(dua => dua.timeOfDay === timeOfDay || dua.timeOfDay === 'anytime');
}

export function getDailyDuaById(id: string): DailyDua | undefined {
  return dailyDuas.find(dua => dua.id === id);
}
