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
