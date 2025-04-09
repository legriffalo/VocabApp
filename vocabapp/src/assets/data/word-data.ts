// vocabularyTypes.ts
export interface VocabularyWord {
    word: string;
    partOfSpeech: "verb" | "noun" | "adjective" | "adverb" | "pronoun" | "preposition" | "interjection" | "conjunction";
    translation: string;
};

export interface WordSets {
    [key: string]: VocabularyWord[];
};

export interface VocabularyData {
    word_sets: WordSets;
};


export const vitalWords: VocabularyData = {
    word_sets: {
        "word_set0": [
            {
                word: "be",
                partOfSpeech: "verb",
                translation: "olla"
            },
            {
                word: "do",
                partOfSpeech: "verb",
                translation: "tehdä"
            }
        ],
        "word_set1": [
            {
                word: "run",
                partOfSpeech: "verb",
                translation: "juosta"
            },
            {
                word: "jump",
                partOfSpeech: "verb",
                translation: "hypätä"
            }
        ]
    }
};

