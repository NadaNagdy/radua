export interface CommunityDua {
  id: string;
  text: string;
  author: string;
  likes: number;
  category?: string;
  timestamp?: number;
}

export const communityDuas: CommunityDua[] = [
  {
    id: '1',
    text: 'اللهم إني أسألك العافية في الدنيا والآخرة، اللهم إني أسألك العفو والعافية في ديني ودنياي وأهلي ومالي',
    author: 'محمد أحمد',
    likes: 45,
    category: 'دعاء عام',
    timestamp: Date.now()
  },
  {
    id: '2',
    text: 'اللهم اجعل القرآن ربيع قلوبنا ونور صدورنا وجلاء أحزاننا وذهاب همومنا',
    author: 'فاطمة علي',
    likes: 32,
    category: 'دعاء القرآن',
    timestamp: Date.now()
  },
  {
    id: '3',
    text: 'اللهم إني أعوذ بك من الهم والحزن والعجز والكسل والجبن والبخل',
    author: 'عائشة سالم',
    likes: 28,
    category: 'دعاء الحماية',
    timestamp: Date.now()
  },
  {
    id: '4',
    text: 'اللهم إني أسألك علماً نافعاً ورزقاً طيباً وعملاً متقبلاً',
    author: 'يوسف حسن',
    likes: 56,
    category: 'دعاء العلم',
    timestamp: Date.now()
  }
];

export function getCommunityDuas(): CommunityDua[] {
  return communityDuas;
}

export function getCommunityDuaById(id: string): CommunityDua | undefined {
  return communityDuas.find(dua => dua.id === id);
}
