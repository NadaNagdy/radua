import { categoryDuas } from '@/lib/duas';
import DuaCard from '@/components/dua-card';
import { FloatingStars, DecorativeDivider, CrescentMoon } from '@/components/islamic-decorations';

export default function LaylatAlQadrPage() {
  const duas = categoryDuas.filter(dua => dua.category === 'laylat-al-qadr');
  
  return (
    <div className="min-h-screen bg-hero-gradient pt-24 pb-16 px-4">
      <FloatingStars />
      <div className="container mx-auto max-w-4xl text-center animate-fade-in">
        <CrescentMoon className="w-16 h-16 text-gold mx-auto mb-4" />
        <h1 className="font-amiri text-4xl text-cream mb-4">أدعية ليلة القدر</h1>
        <DecorativeDivider className="mb-12" />
        
        <div className="space-y-6 text-left">
          {duas.length > 0 ? (
            duas.map((dua, index) => (
              <DuaCard
                key={dua.id}
                title={`دعاء ليلة القدر ${index + 1}`}
                dua={dua.text}
                showActions={true}
              />
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-cream/60 text-lg font-amiri">
                اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي
              </p>
              <p className="text-gold/60 text-sm mt-4">
                دعاء ليلة القدر المأثور
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
