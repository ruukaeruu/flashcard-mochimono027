import honImage from './assets/hon.png';
import keshigomuImage from './assets/keshigomu.png';
import enpitsuImage from './assets/enpitsu.png';
import hasamiImage from './assets/hasami.png';
import jogiImage from './assets/jogi.png';
import serotepuImage from './assets/serotepu.png';
import hotchikisuImage from './assets/hotchikisu.png';
import jishoImage from './assets/jisho.png';
import kabanImage from './assets/kaban.png';
import kasaImage from './assets/kasa.png';
import kagiImage from './assets/kagi.png';
import tokeiImage from './assets/tokei.png';
import saifuImage from './assets/saifu.png';
import keitaiImage from './assets/keitai.png';
import reizoukoImage from './assets/reizoko.png';
import makuraImage from './assets/makura.png';
import nabeImage from './assets/nabe.png';
import panchiImage from './assets/panchi.png';
import suitoImage from './assets/suito.png';
import makaImage from './assets/maka.png';
import React, { useState, useEffect } from 'react';
import { Volume2, RotateCw, Home, BookOpen, Trophy, ChevronLeft, ChevronRight, Shuffle } from 'lucide-react';

// Data flashcard berdasarkan kartu cetak Anda
const flashcardData = [
  {
    id: 1,
    image: enpitsuImage,
    hiragana: 'えんぴつ',
    romaji: 'enpitsu',
    indonesian: 'Pensil',
    example: 'えんぴつを かして ください。',
    exampleTranslation: 'Tolong pinjamkan pensil.',
    category: 'alat-tulis'
  },
  {
    id: 2,
    image: hasamiImage,
    hiragana: 'はさみ',
    romaji: 'hasami',
    indonesian: 'Gunting',
    example: 'はさみは わたしの です。',
    exampleTranslation: 'Gunting ini milik saya.',
    category: 'alat-tulis'
  },
  {
    id: 3,
    image: jogiImage,
    hiragana: 'じょうぎ',
    romaji: 'jōgi',
    indonesian: 'Penggaris',
    example: 'やまださんに じょうぎを かりました。',
    exampleTranslation: 'Saya meminjam penggaris dari Yamada-san.',
    category: 'alat-tulis'
  },
  {
    id: 4,
    image: keshigomuImage,
    hiragana: 'けしゴム',
    romaji: 'keshigomu',
    indonesian: 'Penghapus',
    example: 'けしゴムを わすれました。かりても いいですか。',
    exampleTranslation: 'Saya lupa penghapus. Bolehkah meminjam?',
    category: 'alat-tulis'
  },
  {
    id: 5,
    image: makaImage,
    hiragana: 'マーカー',
    romaji: 'mākā',
    indonesian: 'Spidol',
    example: 'この マーカーを つかっても いいですか。',
    exampleTranslation: 'Bolehkah menggunakan spidol ini?',
    category: 'alat-tulis'
  },
  {
    id: 6,
    image: hotchikisuImage,
    hiragana: 'ホッチキス',
    romaji: 'hotchikisu',
    indonesian: 'Stapler',
    example: 'たなかさんの ホッチキスを かりています。',
    exampleTranslation: 'Saya sedang meminjam stapler Tanaka-san.',
    category: 'alat-tulis'
  },
  {
    id: 7,
    image: panchiImage,
    hiragana: 'パンチ',
    romaji: 'panchi',
    indonesian: 'Perforator',
    example: 'せんせいの パンチを かりても いいですか。',
    exampleTranslation: 'Bolehkah meminjam perforator guru?',
    category: 'alat-tulis'
  },
  {
    id: 8,
    image: serotepuImage,
    hiragana: 'セロテープ',
    romaji: 'serōtēpu',
    indonesian: 'Selotip',
    example: 'ともだちに セロテープを かしました。',
    exampleTranslation: 'Saya meminjamkan selotip kepada teman.',
    category: 'alat-tulis'
  },
  {
    id: 9,
    image: kabanImage,
    hiragana: 'かばん',
    romaji: 'kaban',
    indonesian: 'Tas',
    example: 'これは わたしの かばんです。',
    exampleTranslation: 'Ini adalah tas saya.',
    category: 'kepemilikan'
  },
  {
    id: 10,
    image: honImage,
    hiragana: 'ほん',
    romaji: 'hon',
    indonesian: 'Buku',
    example: 'この ほんは たなかさんの です。',
    exampleTranslation: 'Buku ini milik Tanaka-san.',
    category: 'kepemilikan'
  },
  {
    id: 11,
    image: keitaiImage,
    hiragana: 'けいたい',
    romaji: 'keitai',
    indonesian: 'Handphone',
    example: 'あなたの けいたいは どこですか。',
    exampleTranslation: 'Di mana handphone kamu?',
    category: 'kepemilikan'
  },
  {
    id: 12,
    image: saifuImage,
    hiragana: 'さいふ',
    romaji: 'saifu',
    indonesian: 'Dompet',
    example: 'わたしの さいふは かばんの なかに あります。',
    exampleTranslation: 'Dompet saya ada di dalam tas.',
    category: 'kepemilikan'
  },
  {
    id: 13,
    image: jishoImage,
    hiragana: 'じしょ',
    romaji: 'jisho',
    indonesian: 'Kamus',
    example: 'この じしょは だれの ですか。',
    exampleTranslation: 'Kamus ini milik siapa?',
    category: 'kepemilikan'
  },
  {
    id: 14,
    image: kasaImage,
    hiragana: 'かさ',
    romaji: 'kasa',
    indonesian: 'Payung',
    example: 'きょうは かさが ひつようです。',
    exampleTranslation: 'Hari ini payung diperlukan.',
    category: 'kepemilikan'
  },
  {
    id: 15,
    image: tokeiImage,
    hiragana: 'とけい',
    romaji: 'tokei',
    indonesian: 'Jam Tangan',
    example: 'あたらしい とけいを かいました。',
    exampleTranslation: 'Saya membeli jam tangan baru.',
    category: 'kepemilikan'
  },
  {
    id: 16,
    image: suitoImage,
    hiragana: 'すいとう',
    romaji: 'suitō',
    indonesian: 'Botol Minum',
    example: 'すいとうを わすれました。',
    exampleTranslation: 'Saya lupa membawa botol minum.',
    category: 'kepemilikan'
  },
  {
    id: 17,
    image: kagiImage,
    hiragana: 'かぎ',
    romaji: 'kagi',
    indonesian: 'Kunci',
    example: 'かぎは どこに ありますか。',
    exampleTranslation: 'Kunci ada di mana?',
    category: 'kepemilikan'
  },
  {
    id: 18,
    image: reizoukoImage,
    hiragana: 'れいぞうこ',
    romaji: 'reizōko',
    indonesian: 'Kulkas',
    example: 'はは の れいぞうこは おおきいです。',
    exampleTranslation: 'Kulkas ibu besar.',
    category: 'rumah'
  },
  {
    id: 19,
    image: makuraImage,
    hiragana: 'まくら',
    romaji: 'makura',
    indonesian: 'Bantal',
    example: 'これは おとうとの まくらです。',
    exampleTranslation: 'Ini adalah bantal adik laki-laki.',
    category: 'rumah'
  },
  {
    id: 20,
    image: nabeImage,
    hiragana: 'なべ',
    romaji: 'nabe',
    indonesian: 'Panci',
    example: 'おばあさんは なべで りょうりを します。',
    exampleTranslation: 'Nenek memasak dengan panci.',
    category: 'rumah'
  }
];

// Quiz questions
const generateQuizQuestions = () => {
  const shuffled = [...flashcardData].sort(() => Math.random() - 0.5).slice(0, 10);
  return shuffled.map(card => {
    const wrongAnswers = flashcardData
      .filter(c => c.id !== card.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
    const allAnswers = [card, ...wrongAnswers]
      .sort(() => Math.random() - 0.5);
    
   return {
  image: card.image,
  questionText: card.indonesian, // pertanyaan adalah arti bahasa Indonesia
  correct: card.hiragana,        // jawaban benar adalah hiragana
  options: allAnswers.map(a => ({
    text: a.hiragana,
    romaji: a.romaji,
    isCorrect: a.id === card.id,
  })),
};
  });
};

function App() {
  const [page, setPage] = useState('home');
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [learnedCards, setLearnedCards] = useState([]);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showQuizResult, setShowQuizResult] = useState(false);

  const currentCard = flashcardData[currentCardIndex];
  const progress = (learnedCards.length / flashcardData.length) * 100;

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    utterance.rate = 0.8;
    window.speechSynthesis.speak(utterance);
  };

  const nextCard = () => {
    setIsFlipped(false);
    setCurrentCardIndex((prev) => (prev + 1) % flashcardData.length);
  };

  const prevCard = () => {
    setIsFlipped(false);
    setCurrentCardIndex((prev) => (prev - 1 + flashcardData.length) % flashcardData.length);
  };

  const randomCard = () => {
    setIsFlipped(false);
    const randomIndex = Math.floor(Math.random() * flashcardData.length);
    setCurrentCardIndex(randomIndex);
  };

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
    if (!isFlipped && !learnedCards.includes(currentCard.id)) {
      setLearnedCards([...learnedCards, currentCard.id]);
    }
  };

  const startQuiz = () => {
    setQuizQuestions(generateQuizQuestions());
    setCurrentQuizIndex(0);
    setQuizScore(0);
    setSelectedAnswer(null);
    setShowQuizResult(false);
    setPage('quiz');
  };

  const handleAnswerSelect = (option) => {
    if (selectedAnswer) return;
    
    setSelectedAnswer(option);
    if (option.isCorrect) {
      setQuizScore(quizScore + 10);
    }
    
    setTimeout(() => {
      if (currentQuizIndex < quizQuestions.length - 1) {
        setCurrentQuizIndex(currentQuizIndex + 1);
        setSelectedAnswer(null);
      } else {
        setShowQuizResult(true);
      }
    }, 1500);
  };

  const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
        <div className="text-6xl mb-4">🎴</div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">もちもの</h1>
        <h2 className="text-xl text-gray-600 mb-6">Digital Flashcard</h2>
        
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl p-6 mb-6">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold">{flashcardData.length}</div>
              <div className="text-sm">Kata Benda</div>
            </div>
            <div>
              <div className="text-3xl font-bold">3</div>
              <div className="text-sm">Mode Belajar</div>
            </div>
            <div>
              <div className="text-3xl font-bold">{learnedCards.length}</div>
              <div className="text-sm">Dipelajari</div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => setPage('learn')}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl transition flex items-center justify-center gap-2"
          >
            <BookOpen size={20} />
            Mode Belajar
          </button>
          <button
            onClick={startQuiz}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 rounded-xl transition flex items-center justify-center gap-2"
          >
            <Trophy size={20} />
            Mode Kuis
          </button>
          <button
            onClick={() => setPage('progress')}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 rounded-xl transition flex items-center justify-center gap-2"
          >
            <Trophy size={20} />
            Progress Saya
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-600">Created by</p>
          <p className="text-lg font-semibold text-gray-800">🌸 Rangga Dwi Saputra 🌸</p>
          <p className="text-xs text-gray-500 mt-1">Pengembangan Bahan Ajar Bahasa Jepang</p>
        </div>
      </div>
    </div>
  );

  const LearnPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-6">
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={() => setPage('home')}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
            >
              <Home size={20} />
              <span>Kembali</span>
            </button>
            <div className="text-sm font-semibold text-gray-600">
              Kartu {currentCardIndex + 1}/{flashcardData.length}
            </div>
          </div>

          <div className="mb-6">
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-xs text-gray-600 mt-1 text-center">
              {learnedCards.length} dari {flashcardData.length} kartu dipelajari
            </p>
          </div>

          <div
            className="relative w-full aspect-[3/4] cursor-pointer mb-6"
            onClick={toggleFlip}
            style={{ perspective: '1000px' }}
          >
            <div
              className={`absolute w-full h-full transition-transform duration-500`}
              style={{
                transformStyle: 'preserve-3d',
                transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
              }}
            >
              {/* Front */}
              <div
                className="absolute w-full h-full bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-xl flex flex-col items-center justify-center p-8"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <div className="mb-6 flex justify-center">
  <img src={currentCard.image} alt={currentCard.indonesian} className="w-32 h-32 object-contain" />
</div>
                <div className="text-4xl font-bold text-white mb-2">{currentCard.hiragana}</div>
                <div className="text-xl text-blue-100">({currentCard.romaji})</div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    speak(currentCard.hiragana);
                  }}
                  className="mt-6 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition"
                >
                  <Volume2 size={24} />
                </button>
                <p className="text-sm text-blue-100 mt-6">Klik untuk melihat arti</p>
              </div>

              {/* Back */}
              <div
                className="absolute w-full h-full bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl shadow-xl flex flex-col items-center justify-center p-8"
                style={{
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)'
                }}
              >
                <div className="text-3xl font-bold text-white mb-4">{currentCard.indonesian}</div>
                <div className="bg-white/20 rounded-xl p-4 w-full">
                  <p className="text-white text-lg mb-2">{currentCard.example}</p>
                  <p className="text-green-100 text-sm">{currentCard.exampleTranslation}</p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-green-100">
                  <RotateCw size={16} />
                  <span className="text-sm">Klik untuk kembali</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between gap-3">
            <button
              onClick={prevCard}
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 rounded-xl transition flex items-center justify-center gap-2"
            >
              <ChevronLeft size={20} />
              Sebelumnya
            </button>
            <button
              onClick={randomCard}
              className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl transition flex items-center justify-center gap-2"
            >
              <Shuffle size={20} />
              Acak
            </button>
            <button
              onClick={nextCard}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition flex items-center justify-center gap-2"
            >
              Selanjutnya
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const QuizPage = () => {
    if (showQuizResult) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">おつかれさま！</h2>
            <p className="text-gray-600 mb-6">Kuis Selesai!</p>
            
            <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-xl p-8 mb-6">
              <div className="text-5xl font-bold mb-2">{quizScore}</div>
              <div className="text-lg">dari 100 poin</div>
              <div className="text-sm mt-2 opacity-90">
                {quizScore >= 80 ? '素晴らしい！(Luar biasa!)' : 
                 quizScore >= 60 ? 'よくできました！(Bagus!)' : 
                 'がんばって！(Semangat!)'}
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={startQuiz}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition"
              >
                Coba Lagi
              </button>
              <button
                onClick={() => setPage('home')}
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 rounded-xl transition"
              >
                Kembali ke Home
              </button>
            </div>
          </div>
        </div>
      );
    }

    const currentQuestion = quizQuestions[currentQuizIndex];

    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100 p-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-6">
            <div className="flex justify-between items-center mb-6">
              <button
                onClick={() => setPage('home')}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
              >
                <Home size={20} />
                <span>Kembali</span>
              </button>
              <div className="text-sm font-semibold text-gray-600">
                Soal {currentQuizIndex + 1}/{quizQuestions.length}
              </div>
            </div>

            <div className="text-center mb-8">
              <div className="inline-block bg-gradient-to-r from-green-500 to-teal-600 text-white px-6 py-2 rounded-full mb-4">
                Score: {quizScore}
              </div>
            </div>

            <div className="text-center mb-8 mt-6">

            <img
            src={currentQuestion.image}
            alt={currentQuestion.indonesian}
            className="w-32 h-32 object-contain mx-auto mb-6"
            />

              <p className="text-xl text-gray-700 font-semibold">
                Apa bahasa Jepang dari "{currentQuestion.questionText}"?
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(option)}
                  disabled={selectedAnswer !== null}
                  className={`p-4 rounded-xl font-semibold text-lg transition ${
                    selectedAnswer === null
                      ? 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                      : selectedAnswer === option
                      ? option.isCorrect
                        ? 'bg-green-500 text-white'
                        : 'bg-red-500 text-white'
                      : option.isCorrect
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  <div>{option.text}</div>
                  <div className="text-sm opacity-80">({option.romaji})</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ProgressPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-6">
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={() => setPage('home')}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
            >
              <Home size={20} />
              <span>Kembali</span>
            </button>
            <h2 className="text-xl font-bold text-gray-800">Progress Saya</h2>
          </div>

          <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl p-6 mb-6">
            <div className="text-center mb-4">
              <div className="text-5xl font-bold">{Math.round(progress)}%</div>
              <div className="text-lg mt-2">Progres Pembelajaran</div>
            </div>
            <div className="h-3 bg-white/30 rounded-full overflow-hidden">
              <div
                className="h-full bg-white transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-blue-600">{learnedCards.length}</div>
              <div className="text-sm text-gray-600 mt-1">Kartu Dipelajari</div>
            </div>
            <div className="bg-green-50 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-green-600">{flashcardData.length - learnedCards.length}</div>
              <div className="text-sm text-gray-600 mt-1">Kartu Tersisa</div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="font-semibold text-gray-800 mb-4">📚 Daftar Kata yang Dipelajari:</h3>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {flashcardData.map((card) => (
                <div
                  key={card.id}
                  className={`flex items-center justify-between p-3 rounded-lg ${
                    learnedCards.includes(card.id)
                      ? 'bg-green-50 border border-green-200'
                      : 'bg-gray-50 border border-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <img
  src={card.image}
  alt={card.indonesian}
  className="w-12 h-12 object-contain mr-3"
/>

                    <div>
                      <div className="font-semibold text-gray-800">{card.hiragana}</div>
                      <div className="text-sm text-gray-600">{card.indonesian}</div>
                    </div>
                  </div>
                  {learnedCards.includes(card.id) && (
                    <span className="text-green-600 font-semibold">✓</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 rounded-xl border border-yellow-200">
            <p className="text-sm text-gray-700 text-center">
              💡 <strong>Tips:</strong> Pelajari semua kartu untuk mencapai 100%!
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  useEffect(() => {
    if (page === 'quiz' && quizQuestions.length === 0) {
      setQuizQuestions(generateQuizQuestions());
    }
  }, [page]);

  return (
    <div>
      {page === 'home' && <HomePage />}
      {page === 'learn' && <LearnPage />}
      {page === 'quiz' && <QuizPage />}
      {page === 'progress' && <ProgressPage />}
    </div>
  );
}

export default App;
