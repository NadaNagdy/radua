'use client';

import { useState } from 'react';
import { Volume2, VolumeX, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface DuaCardProps {
  title: string;
  dua: string;
  showActions?: boolean;
}

export default function DuaCard({ title, dua, showActions = false }: DuaCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const speakDua = () => {
    // إيقاف أي قراءة سابقة
    window.speechSynthesis.cancel();

    if (isPlaying && !isPaused) {
      // إيقاف مؤقت
      window.speechSynthesis.pause();
      setIsPaused(true);
      return;
    }

    if (isPaused) {
      // استئناف
      window.speechSynthesis.resume();
      setIsPaused(false);
      return;
    }

    // بدء القراءة
    const utterance = new SpeechSynthesisUtterance(dua);
    
    // إعدادات اللغة العربية
    utterance.lang = 'ar-SA'; // السعودية
    utterance.rate = 0.8; // سرعة القراءة (أبطأ قليلاً)
    utterance.pitch = 1; // نغمة الصوت
    utterance.volume = 1; // مستوى الصوت

    // محاولة اختيار صوت عربي
    const voices = window.speechSynthesis.getVoices();
    const arabicVoice = voices.find(voice => 
      voice.lang.includes('ar') || voice.name.includes('Arabic')
    );
    if (arabicVoice) {
      utterance.voice = arabicVoice;
    }

    utterance.onstart = () => {
      setIsPlaying(true);
      setIsPaused(false);
    };

    utterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
    };

    utterance.onerror = () => {
      setIsPlaying(false);
      setIsPaused(false);
      alert('عذراً، حدث خطأ أثناء القراءة');
    };

    window.speechSynthesis.speak(utterance);
  };

  const stopSpeaking = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setIsPaused(false);
  };

  return (
    <Card className="bg-card-gradient border-gold/20 rounded-3xl overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between p-6">
        <CardTitle className="font-amiri text-2xl text-gold">
          {title}
        </CardTitle>
        
        {showActions && (
          <div className="flex gap-2">
            <Button
              onClick={speakDua}
              variant="ghost"
              size="icon"
              className="text-gold hover:bg-gold/10 rounded-full"
              title={isPlaying ? (isPaused ? "استئناف" : "إيقاف مؤقت") : "استماع"}
            >
              {isPlaying ? (
                isPaused ? <Volume2 className="w-5 h-5" /> : <Pause className="w-5 h-5" />
              ) : (
                <Volume2 className="w-5 h-5" />
              )}
            </Button>

            {isPlaying && (
              <Button
                onClick={stopSpeaking}
                variant="ghost"
                size="icon"
                className="text-red-500 hover:bg-red-500/10 rounded-full"
                title="إيقاف"
              >
                <VolumeX className="w-5 h-5" />
              </Button>
            )}
          </div>
        )}
      </CardHeader>

      <CardContent className="px-10 pb-10 pt-4" dir="rtl">
        <p className="text-2xl font-amiri leading-relaxed text-cream text-right">
          {dua}
        </p>
      </CardContent>
    </Card>
  );
}
