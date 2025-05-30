// vocabularyTypes.ts
export interface VocabularyWord {
    word: string;
    partOfSpeech: "verb" | "noun" | "adjective" | "other";
    translation: string;
};

export interface WordSets {
    [key: string]: VocabularyWord[];
    // name:string; data:VocabularyWord[]
};

export type VocabularyData = {
    [key: string]: WordSets;
};


export const vitalWords: VocabularyData = {
    word_sets: {
        "word_set0": [
            {
                "word": "be",
                "partOfSpeech": "verb",
                "translation": "olla"
            },
            {
                "word": "do",
                "partOfSpeech": "verb",
                "translation": "tehdä"
            },
            {
                "word": "have",
                "partOfSpeech": "verb",
                "translation": "omista"
            },
            {
                "word": "get",
                "partOfSpeech": "verb",
                "translation": "saada"
            },
            {
                "word": "go",
                "partOfSpeech": "verb",
                "translation": "mennä"
            },
            {
                "word": "can",
                "partOfSpeech": "verb",
                "translation": "purkittaa"
            },
            {
                "word": "know",
                "partOfSpeech": "verb",
                "translation": "tietää"
            },
            {
                "word": "think",
                "partOfSpeech": "verb",
                "translation": "luulla"
            },
            {
                "word": "want",
                "partOfSpeech": "verb",
                "translation": "haluta"
            },
            {
                "word": "good",
                "partOfSpeech": "adjective",
                "translation": "hyvä"
            },
            {
                "word": "come",
                "partOfSpeech": "verb",
                "translation": "tulla"
            },
            {
                "word": "say",
                "partOfSpeech": "verb",
                "translation": "sanoa"
            },
            {
                "word": "see",
                "partOfSpeech": "verb",
                "translation": "nähdä"
            },
            {
                "word": "like",
                "partOfSpeech": "verb",
                "translation": "pitää, tykätä"
            },
            {
                "word": "look",
                "partOfSpeech": "verb",
                "translation": "katsoa"
            },
            {
                "word": "make",
                "partOfSpeech": "verb",
                "translation": "valmistaa"
            },
            {
                "word": "right",
                "partOfSpeech": "adjective",
                "translation": "oikea"
            },
            {
                "word": "guy",
                "partOfSpeech": "noun",
                "translation": "sälli"
            },
            {
                "word": "take",
                "partOfSpeech": "verb",
                "translation": "ottaa"
            },
            {
                "word": "tell",
                "partOfSpeech": "verb",
                "translation": "kertoa"
            },
            {
                "word": "time",
                "partOfSpeech": "noun",
                "translation": "aika"
            },
            {
                "word": "mean",
                "partOfSpeech": "verb",
                "translation": "tarkoittaa, meinata"
            },
            {
                "word": "man",
                "partOfSpeech": "noun",
                "translation": "mies"
            },
            {
                "word": "little",
                "partOfSpeech": "adjective",
                "translation": "pieni"
            },
            {
                "word": "give",
                "partOfSpeech": "verb",
                "translation": "antaa"
            },
            {
                "word": "need",
                "partOfSpeech": "verb",
                "translation": "tarvita"
            },
            {
                "word": "talk",
                "partOfSpeech": "verb",
                "translation": "puhua"
            },
            {
                "word": "great",
                "partOfSpeech": "adjective",
                "translation": "upea"
            },
            {
                "word": "way",
                "partOfSpeech": "noun",
                "translation": "tie"
            },
            {
                "word": "love",
                "partOfSpeech": "verb",
                "translation": "rakastaa"
            },
            {
                "word": "people",
                "partOfSpeech": "noun",
                "translation": "kansa"
            },
            {
                "word": "work",
                "partOfSpeech": "verb",
                "translation": "työskennellä"
            },
            {
                "word": "thank",
                "partOfSpeech": "verb",
                "translation": "kiitellä"
            },
            {
                "word": "big",
                "partOfSpeech": "adjective",
                "translation": "iso"
            },
            {
                "word": "try",
                "partOfSpeech": "verb",
                "translation": "yrittää"
            },
            {
                "word": "dad",
                "partOfSpeech": "noun",
                "translation": "isä"
            },
            {
                "word": "friend",
                "partOfSpeech": "noun",
                "translation": "ystävä"
            },
            {
                "word": "sure",
                "partOfSpeech": "adjective",
                "translation": "varma"
            }
        ],
        "word_set1": [
            {
                "word": "find",
                "partOfSpeech": "verb",
                "translation": "löytää"
            },
            {
                "word": "boy",
                "partOfSpeech": "noun",
                "translation": "poika"
            },
            {
                "word": "put",
                "partOfSpeech": "verb",
                "translation": "panna"
            },
            {
                "word": "happen",
                "partOfSpeech": "verb",
                "translation": "tapahtua"
            },
            {
                "word": "stop",
                "partOfSpeech": "verb",
                "translation": "pysähtyä"
            },
            {
                "word": "night",
                "partOfSpeech": "noun",
                "translation": "yö"
            },
            {
                "word": "bad",
                "partOfSpeech": "adjective",
                "translation": "huono"
            },
            {
                "word": "leave",
                "partOfSpeech": "verb",
                "translation": "lähteä, poistua"
            },
            {
                "word": "year",
                "partOfSpeech": "noun",
                "translation": "vuosi"
            },
            {
                "word": "hear",
                "partOfSpeech": "verb",
                "translation": "kuulla"
            },
            {
                "word": "use",
                "partOfSpeech": "verb",
                "translation": "käyttää"
            },
            {
                "word": "mom",
                "partOfSpeech": "noun",
                "translation": "äiskä"
            },
            {
                "word": "life",
                "partOfSpeech": "noun",
                "translation": "elämä"
            },
            {
                "word": "nice",
                "partOfSpeech": "adjective",
                "translation": "kiva"
            },
            {
                "word": "new",
                "partOfSpeech": "adjective",
                "translation": "uusi"
            },
            {
                "word": "baby",
                "partOfSpeech": "noun",
                "translation": "vauva"
            },
            {
                "word": "fine",
                "partOfSpeech": "adjective",
                "translation": "hieno"
            },
            {
                "word": "girl",
                "partOfSpeech": "noun",
                "translation": "tyttö"
            },
            {
                "word": "help",
                "partOfSpeech": "verb",
                "translation": "auttaa"
            },
            {
                "word": "believe",
                "partOfSpeech": "verb",
                "translation": "arvella"
            },
            {
                "word": "woman",
                "partOfSpeech": "noun",
                "translation": "nainen"
            },
            {
                "word": "lot",
                "partOfSpeech": "noun",
                "translation": "palsta"
            },
            {
                "word": "start",
                "partOfSpeech": "verb",
                "translation": "aloittaa"
            },
            {
                "word": "home",
                "partOfSpeech": "noun",
                "translation": "koti"
            },
            {
                "word": "meet",
                "partOfSpeech": "verb",
                "translation": "tavata"
            },
            {
                "word": "show",
                "partOfSpeech": "verb",
                "translation": "näyttää"
            },
            {
                "word": "guess",
                "partOfSpeech": "verb",
                "translation": "arvata"
            },
            {
                "word": "old",
                "partOfSpeech": "adjective",
                "translation": "vanha"
            },
            {
                "word": "hell",
                "partOfSpeech": "noun",
                "translation": "helvetti"
            },
            {
                "word": "listen",
                "partOfSpeech": "verb",
                "translation": "kuunnella"
            },
            {
                "word": "minute",
                "partOfSpeech": "noun",
                "translation": "minuutti"
            },
            {
                "word": "eat",
                "partOfSpeech": "verb",
                "translation": "syödä"
            },
            {
                "word": "place",
                "partOfSpeech": "noun",
                "translation": "paikka"
            },
            {
                "word": "bring",
                "partOfSpeech": "verb",
                "translation": "tuoda"
            },
            {
                "word": "money",
                "partOfSpeech": "noun",
                "translation": "raha"
            },
            {
                "word": "person",
                "partOfSpeech": "noun",
                "translation": "henkilö"
            },
            {
                "word": "watch",
                "partOfSpeech": "verb",
                "translation": "katsella"
            },
            {
                "word": "remember",
                "partOfSpeech": "verb",
                "translation": "muistaa"
            },
            {
                "word": "house",
                "partOfSpeech": "noun",
                "translation": "talo"
            }
        ],
        "word_set2": [
            {
                "word": "wrong",
                "partOfSpeech": "adjective",
                "translation": "väärä"
            },
            {
                "word": "kill",
                "partOfSpeech": "verb",
                "translation": "tappaa"
            },
            {
                "word": "school",
                "partOfSpeech": "noun",
                "translation": "koulu"
            },
            {
                "word": "run",
                "partOfSpeech": "verb",
                "translation": "juosta"
            },
            {
                "word": "late",
                "partOfSpeech": "adjective",
                "translation": "myöhäinen"
            },
            {
                "word": "care",
                "partOfSpeech": "verb",
                "translation": "huolehtia"
            },
            {
                "word": "car",
                "partOfSpeech": "noun",
                "translation": "auto"
            },
            {
                "word": "idea",
                "partOfSpeech": "noun",
                "translation": "idea"
            },
            {
                "word": "turn",
                "partOfSpeech": "verb",
                "translation": "kääntää"
            },
            {
                "word": "real",
                "partOfSpeech": "adjective",
                "translation": "aito"
            },
            {
                "word": "happy",
                "partOfSpeech": "adjective",
                "translation": "iloinen"
            },
            {
                "word": "whole",
                "partOfSpeech": "adjective",
                "translation": "kokonainen"
            },
            {
                "word": "job",
                "partOfSpeech": "noun",
                "translation": "duuni"
            },
            {
                "word": "fun",
                "partOfSpeech": "noun",
                "translation": "hupi"
            },
            {
                "word": "problem",
                "partOfSpeech": "noun",
                "translation": "ongelma"
            },
            {
                "word": "break",
                "partOfSpeech": "verb",
                "translation": "särkyä"
            },
            {
                "word": "party",
                "partOfSpeech": "noun",
                "translation": "bileet"
            },
            {
                "word": "buy",
                "partOfSpeech": "verb",
                "translation": "ostaa"
            },
            {
                "word": "room",
                "partOfSpeech": "noun",
                "translation": "huone"
            },
            {
                "word": "family",
                "partOfSpeech": "noun",
                "translation": "perhe"
            },
            {
                "word": "stay",
                "partOfSpeech": "verb",
                "translation": "pysyä"
            },
            {
                "word": "stupid",
                "partOfSpeech": "adjective",
                "translation": "tyhmä"
            },
            {
                "word": "name",
                "partOfSpeech": "noun",
                "translation": "nimi"
            },
            {
                "word": "child",
                "partOfSpeech": "noun",
                "translation": "lapsi"
            },
            {
                "word": "sit",
                "partOfSpeech": "verb",
                "translation": "istua"
            },
            {
                "word": "course",
                "partOfSpeech": "noun",
                "translation": "kurssi"
            },
            {
                "word": "pretty",
                "partOfSpeech": "adjective",
                "translation": "nätti"
            },
            {
                "word": "hold",
                "partOfSpeech": "verb",
                "translation": "pidellä"
            },
            {
                "word": "game",
                "partOfSpeech": "noun",
                "translation": "peli"
            },
            {
                "word": "forget",
                "partOfSpeech": "verb",
                "translation": "unohtaa"
            },
            {
                "word": "own",
                "partOfSpeech": "adjective",
                "translation": "oma"
            },
            {
                "word": "doctor",
                "partOfSpeech": "noun",
                "translation": "tohtori"
            },
            {
                "word": "dollar",
                "partOfSpeech": "noun",
                "translation": "dollari"
            },
            {
                "word": "dog",
                "partOfSpeech": "noun",
                "translation": "koira"
            },
            {
                "word": "funny",
                "partOfSpeech": "adjective",
                "translation": "hassu"
            },
            {
                "word": "hard",
                "partOfSpeech": "adjective",
                "translation": "kova"
            },
            {
                "word": "honey",
                "partOfSpeech": "noun",
                "translation": "hunaja"
            },
            {
                "word": "sex",
                "partOfSpeech": "noun",
                "translation": "seksi"
            },
            {
                "word": "hate",
                "partOfSpeech": "verb",
                "translation": "vihata"
            },
            {
                "word": "head",
                "partOfSpeech": "noun",
                "translation": "pää"
            }
        ],
        "word_set3": [
            {
                "word": "understand",
                "partOfSpeech": "verb",
                "translation": "ymmärtää"
            },
            {
                "word": "movie",
                "partOfSpeech": "noun",
                "translation": "elokuva"
            },
            {
                "word": "worry",
                "partOfSpeech": "verb",
                "translation": "murehtia"
            },
            {
                "word": "cool",
                "partOfSpeech": "adjective",
                "translation": "viileä"
            },
            {
                "word": "marry",
                "partOfSpeech": "verb",
                "translation": "naida"
            },
            {
                "word": "miss",
                "partOfSpeech": "verb",
                "translation": "ikävöidä"
            },
            {
                "word": "pay",
                "partOfSpeech": "verb",
                "translation": "maksella"
            },
            {
                "word": "crazy",
                "partOfSpeech": "adjective",
                "translation": "hullu"
            },
            {
                "word": "change",
                "partOfSpeech": "verb",
                "translation": "vaihtaa"
            },
            {
                "word": "hot",
                "partOfSpeech": "adjective",
                "translation": "kuuma"
            },
            {
                "word": "mother",
                "partOfSpeech": "noun",
                "translation": "äiti"
            },
            {
                "word": "check",
                "partOfSpeech": "verb",
                "translation": "tarkastaa"
            },
            {
                "word": "word",
                "partOfSpeech": "noun",
                "translation": "sana"
            },
            {
                "word": "same",
                "partOfSpeech": "adjective",
                "translation": "samainen"
            },
            {
                "word": "win",
                "partOfSpeech": "verb",
                "translation": "voittaa"
            },
            {
                "word": "walk",
                "partOfSpeech": "verb",
                "translation": "kävellä"
            },
            {
                "word": "father",
                "partOfSpeech": "noun",
                "translation": "isä"
            },
            {
                "word": "story",
                "partOfSpeech": "noun",
                "translation": "tarina"
            },
            {
                "word": "part",
                "partOfSpeech": "noun",
                "translation": "osa"
            },
            {
                "word": "open",
                "partOfSpeech": "verb",
                "translation": "avata"
            },
            {
                "word": "lady",
                "partOfSpeech": "noun",
                "translation": "leidi"
            },
            {
                "word": "read",
                "partOfSpeech": "verb",
                "translation": "lukea"
            },
            {
                "word": "drink",
                "partOfSpeech": "verb",
                "translation": "juoda"
            },
            {
                "word": "sleep",
                "partOfSpeech": "verb",
                "translation": "nukkua"
            },
            {
                "word": "number",
                "partOfSpeech": "noun",
                "translation": "numero"
            },
            {
                "word": "write",
                "partOfSpeech": "verb",
                "translation": "kirjoittaa"
            },
            {
                "word": "morning",
                "partOfSpeech": "noun",
                "translation": "aamu"
            },
            {
                "word": "tomorrow",
                "partOfSpeech": "noun",
                "translation": "huominen"
            },
            {
                "word": "next",
                "partOfSpeech": "adjective",
                "translation": "seuraava"
            },
            {
                "word": "phone",
                "partOfSpeech": "noun",
                "translation": "äänne"
            },
            {
                "word": "eye",
                "partOfSpeech": "noun",
                "translation": "silmä"
            },
            {
                "word": "drive",
                "partOfSpeech": "verb",
                "translation": "ajaa"
            },
            {
                "word": "wife",
                "partOfSpeech": "noun",
                "translation": "vaimo"
            },
            {
                "word": "book",
                "partOfSpeech": "noun",
                "translation": "kirja"
            },
            {
                "word": "throw",
                "partOfSpeech": "verb",
                "translation": "heittää"
            },
            {
                "word": "name",
                "partOfSpeech": "verb",
                "translation": "nimetä"
            },
            {
                "word": "dead",
                "partOfSpeech": "adjective",
                "translation": "kuollut"
            },
            {
                "word": "stand",
                "partOfSpeech": "verb",
                "translation": "seisoa"
            },
            {
                "word": "dinner",
                "partOfSpeech": "noun",
                "translation": "illallinen"
            },
            {
                "word": "hand",
                "partOfSpeech": "noun",
                "translation": "käsi"
            }
        ],
        "word_set4": [
            {
                "word": "television",
                "partOfSpeech": "noun",
                "translation": "televisio"
            },
            {
                "word": "learn",
                "partOfSpeech": "verb",
                "translation": "oppia"
            },
            {
                "word": "town",
                "partOfSpeech": "noun",
                "translation": "kaupunki"
            },
            {
                "word": "beautiful",
                "partOfSpeech": "adjective",
                "translation": "kaunis"
            },
            {
                "word": "date",
                "partOfSpeech": "noun",
                "translation": "treffit"
            },
            {
                "word": "office",
                "partOfSpeech": "noun",
                "translation": "toimisto"
            },
            {
                "word": "hit",
                "partOfSpeech": "verb",
                "translation": "lyödä"
            },
            {
                "word": "save",
                "partOfSpeech": "verb",
                "translation": "säästää"
            },
            {
                "word": "sweet",
                "partOfSpeech": "adjective",
                "translation": "makea"
            },
            {
                "word": "food",
                "partOfSpeech": "noun",
                "translation": "ruoka"
            },
            {
                "word": "send",
                "partOfSpeech": "verb",
                "translation": "lähettää"
            },
            {
                "word": "business",
                "partOfSpeech": "noun",
                "translation": "yritystoiminta"
            },
            {
                "word": "only",
                "partOfSpeech": "adjective",
                "translation": "ainoa"
            },
            {
                "word": "couple",
                "partOfSpeech": "noun",
                "translation": "pari"
            },
            {
                "word": "door",
                "partOfSpeech": "noun",
                "translation": "ovi"
            },
            {
                "word": "parent",
                "partOfSpeech": "noun",
                "translation": "vanhempi"
            },
            {
                "word": "easy",
                "partOfSpeech": "adjective",
                "translation": "helppo"
            },
            {
                "word": "deal",
                "partOfSpeech": "noun",
                "translation": "diili"
            },
            {
                "word": "perfect",
                "partOfSpeech": "adjective",
                "translation": "täydellinen"
            },
            {
                "word": "lie",
                "partOfSpeech": "verb",
                "translation": "valehdella"
            },
            {
                "word": "free",
                "partOfSpeech": "adjective",
                "translation": "vapaa"
            },
            {
                "word": "young",
                "partOfSpeech": "adjective",
                "translation": "nuori"
            },
            {
                "word": "weird",
                "partOfSpeech": "adjective",
                "translation": "ufo"
            },
            {
                "word": "brother",
                "partOfSpeech": "noun",
                "translation": "veli"
            },
            {
                "word": "work",
                "partOfSpeech": "noun",
                "translation": "työ"
            },
            {
                "word": "ball",
                "partOfSpeech": "noun",
                "translation": "pallo"
            },
            {
                "word": "line",
                "partOfSpeech": "noun",
                "translation": "linja"
            },
            {
                "word": "important",
                "partOfSpeech": "adjective",
                "translation": "tärkeä"
            },
            {
                "word": "fall",
                "partOfSpeech": "verb",
                "translation": "kaatua"
            },
            {
                "word": "heart",
                "partOfSpeech": "noun",
                "translation": "sydän"
            },
            {
                "word": "long",
                "partOfSpeech": "adjective",
                "translation": "pitkä"
            },
            {
                "word": "fat",
                "partOfSpeech": "adjective",
                "translation": "lihava"
            },
            {
                "word": "class",
                "partOfSpeech": "noun",
                "translation": "luokka"
            },
            {
                "word": "shoot",
                "partOfSpeech": "verb",
                "translation": "ampua"
            },
            {
                "word": "picture",
                "partOfSpeech": "noun",
                "translation": "kuva"
            },
            {
                "word": "sell",
                "partOfSpeech": "verb",
                "translation": "myydä"
            },
            {
                "word": "side",
                "partOfSpeech": "noun",
                "translation": "ohi"
            },
            {
                "word": "wish",
                "partOfSpeech": "verb",
                "translation": "toivottaa"
            },
            {
                "word": "love",
                "partOfSpeech": "noun",
                "translation": "rakkaus"
            },
            {
                "word": "mind",
                "partOfSpeech": "noun",
                "translation": "mieli"
            }
        ],
        "word_set5": [
            {
                "word": "hair",
                "partOfSpeech": "noun",
                "translation": "hius"
            },
            {
                "word": "cut",
                "partOfSpeech": "verb",
                "translation": "leikata"
            },
            {
                "word": "wedding",
                "partOfSpeech": "noun",
                "translation": "häät"
            },
            {
                "word": "reason",
                "partOfSpeech": "noun",
                "translation": "järki"
            },
            {
                "word": "look",
                "partOfSpeech": "noun",
                "translation": "katse"
            },
            {
                "word": "fuck",
                "partOfSpeech": "verb",
                "translation": "nussia"
            },
            {
                "word": "bed",
                "partOfSpeech": "noun",
                "translation": "sänky"
            },
            {
                "word": "paper",
                "partOfSpeech": "noun",
                "translation": "paperi"
            },
            {
                "word": "different",
                "partOfSpeech": "adjective",
                "translation": "erilainen"
            },
            {
                "word": "catch",
                "partOfSpeech": "verb",
                "translation": "napata"
            },
            {
                "word": "set",
                "partOfSpeech": "verb",
                "translation": "asetella"
            },
            {
                "word": "face",
                "partOfSpeech": "noun",
                "translation": "naama"
            },
            {
                "word": "suck",
                "partOfSpeech": "verb",
                "translation": "imeskellä"
            },
            {
                "word": "special",
                "partOfSpeech": "adjective",
                "translation": "erityinen"
            },
            {
                "word": "stick",
                "partOfSpeech": "verb",
                "translation": "kiinnittyä"
            },
            {
                "word": "question",
                "partOfSpeech": "noun",
                "translation": "kysymys"
            },
            {
                "word": "dude",
                "partOfSpeech": "noun",
                "translation": "jäbä"
            },
            {
                "word": "birthday",
                "partOfSpeech": "noun",
                "translation": "syntymäpäivä"
            },
            {
                "word": "point",
                "partOfSpeech": "noun",
                "translation": "näkökulma"
            },
            {
                "word": "enjoy",
                "partOfSpeech": "verb",
                "translation": "nauttia"
            },
            {
                "word": "fact",
                "partOfSpeech": "noun",
                "translation": "fakta"
            },
            {
                "word": "dance",
                "partOfSpeech": "verb",
                "translation": "tanssia"
            },
            {
                "word": "bar",
                "partOfSpeech": "noun",
                "translation": "baari"
            },
            {
                "word": "wonder",
                "partOfSpeech": "verb",
                "translation": "ihmetellä"
            },
            {
                "word": "joke",
                "partOfSpeech": "noun",
                "translation": "vitsi"
            },
            {
                "word": "relationship",
                "partOfSpeech": "noun",
                "translation": "ihmissuhde"
            },
            {
                "word": "chance",
                "partOfSpeech": "noun",
                "translation": "sattuma"
            },
            {
                "word": "black",
                "partOfSpeech": "adjective",
                "translation": "musta"
            },
            {
                "word": "fight",
                "partOfSpeech": "verb",
                "translation": "tapella"
            },
            {
                "word": "card",
                "partOfSpeech": "noun",
                "translation": "kortti"
            },
            {
                "word": "song",
                "partOfSpeech": "noun",
                "translation": "laulu"
            },
            {
                "word": "coffee",
                "partOfSpeech": "noun",
                "translation": "kahvi"
            },
            {
                "word": "apartment",
                "partOfSpeech": "noun",
                "translation": "huoneisto"
            },
            {
                "word": "back",
                "partOfSpeech": "noun",
                "translation": "selkä"
            },
            {
                "word": "pull",
                "partOfSpeech": "verb",
                "translation": "vetää"
            },
            {
                "word": "box",
                "partOfSpeech": "noun",
                "translation": "laatikko"
            },
            {
                "word": "dream",
                "partOfSpeech": "noun",
                "translation": "unelma"
            },
            {
                "word": "water",
                "partOfSpeech": "noun",
                "translation": "vesi"
            },
            {
                "word": "decide",
                "partOfSpeech": "verb",
                "translation": "päättää"
            },
            {
                "word": "lunch",
                "partOfSpeech": "noun",
                "translation": "puolinen"
            }
        ],
        "word_set6": [
            {
                "word": "cute",
                "partOfSpeech": "adjective",
                "translation": "söpö"
            },
            {
                "word": "close",
                "partOfSpeech": "adjective",
                "translation": "läheinen"
            },
            {
                "word": "bathroom",
                "partOfSpeech": "noun",
                "translation": "kylppäri"
            },
            {
                "word": "show",
                "partOfSpeech": "noun",
                "translation": "näytös"
            },
            {
                "word": "steal",
                "partOfSpeech": "verb",
                "translation": "varastaa"
            },
            {
                "word": "full",
                "partOfSpeech": "adjective",
                "translation": "täysi"
            },
            {
                "word": "company",
                "partOfSpeech": "noun",
                "translation": "yritys"
            },
            {
                "word": "front",
                "partOfSpeech": "noun",
                "translation": "etumus"
            },
            {
                "word": "moment",
                "partOfSpeech": "noun",
                "translation": "hetki"
            },
            {
                "word": "case",
                "partOfSpeech": "noun",
                "translation": "sijamuoto"
            },
            {
                "word": "date",
                "partOfSpeech": "verb",
                "translation": "tapailla"
            },
            {
                "word": "pants",
                "partOfSpeech": "noun",
                "translation": "pöksyt"
            },
            {
                "word": "bitch",
                "partOfSpeech": "noun",
                "translation": "narttu"
            },
            {
                "word": "promise",
                "partOfSpeech": "verb",
                "translation": "luvata"
            },
            {
                "word": "kiss",
                "partOfSpeech": "verb",
                "translation": "pussata"
            },
            {
                "word": "grow",
                "partOfSpeech": "verb",
                "translation": "kasvaa"
            },
            {
                "word": "build",
                "partOfSpeech": "verb",
                "translation": "rakentaa"
            },
            {
                "word": "table",
                "partOfSpeech": "noun",
                "translation": "taulukko"
            },
            {
                "word": "ticket",
                "partOfSpeech": "noun",
                "translation": "lippu"
            },
            {
                "word": "cat",
                "partOfSpeech": "noun",
                "translation": "kissa"
            },
            {
                "word": "sister",
                "partOfSpeech": "noun",
                "translation": "sisko"
            },
            {
                "word": "girlfriend",
                "partOfSpeech": "noun",
                "translation": "tyttöystävä"
            },
            {
                "word": "hat",
                "partOfSpeech": "noun",
                "translation": "hattu"
            },
            {
                "word": "touch",
                "partOfSpeech": "verb",
                "translation": "koskea"
            },
            {
                "word": "beer",
                "partOfSpeech": "noun",
                "translation": "olut"
            },
            {
                "word": "club",
                "partOfSpeech": "noun",
                "translation": "kerho"
            },
            {
                "word": "amaze",
                "partOfSpeech": "verb",
                "translation": "hämmästyttää"
            },
            {
                "word": "gift",
                "partOfSpeech": "noun",
                "translation": "lahja"
            },
            {
                "word": "serious",
                "partOfSpeech": "adjective",
                "translation": "vakava"
            },
            {
                "word": "street",
                "partOfSpeech": "noun",
                "translation": "katu"
            },
            {
                "word": "team",
                "partOfSpeech": "noun",
                "translation": "tiimi"
            },
            {
                "word": "order",
                "partOfSpeech": "verb",
                "translation": "tilata"
            },
            {
                "word": "cry",
                "partOfSpeech": "verb",
                "translation": "itkeä"
            },
            {
                "word": "drop",
                "partOfSpeech": "verb",
                "translation": "tippua"
            },
            {
                "word": "act",
                "partOfSpeech": "verb",
                "translation": "näytellä"
            },
            {
                "word": "seat",
                "partOfSpeech": "noun",
                "translation": "istuin"
            },
            {
                "word": "foot",
                "partOfSpeech": "noun",
                "translation": "jalka"
            },
            {
                "word": "finish",
                "partOfSpeech": "verb",
                "translation": "viimeistellä"
            },
            {
                "word": "gentleman",
                "partOfSpeech": "noun",
                "translation": "herrasmies"
            },
            {
                "word": "point",
                "partOfSpeech": "verb",
                "translation": "osoitella"
            }
        ],
        "word_set7": [
            {
                "word": "blow",
                "partOfSpeech": "verb",
                "translation": "puhaltaa"
            },
            {
                "word": "small",
                "partOfSpeech": "adjective",
                "translation": "pieni"
            },
            {
                "word": "trouble",
                "partOfSpeech": "noun",
                "translation": "ongelma"
            },
            {
                "word": "sing",
                "partOfSpeech": "verb",
                "translation": "laulaa"
            },
            {
                "word": "pass",
                "partOfSpeech": "verb",
                "translation": "ohittaa"
            },
            {
                "word": "beat",
                "partOfSpeech": "verb",
                "translation": "piestä"
            },
            {
                "word": "piece",
                "partOfSpeech": "noun",
                "translation": "pala"
            },
            {
                "word": "shoe",
                "partOfSpeech": "noun",
                "translation": "kenkä"
            },
            {
                "word": "welcome",
                "partOfSpeech": "adjective",
                "translation": "tervetullut"
            },
            {
                "word": "white",
                "partOfSpeech": "adjective",
                "translation": "valkoinen"
            },
            {
                "word": "kick",
                "partOfSpeech": "verb",
                "translation": "potkaista"
            },
            {
                "word": "bag",
                "partOfSpeech": "noun",
                "translation": "kassi"
            },
            {
                "word": "fire",
                "partOfSpeech": "noun",
                "translation": "tuli"
            },
            {
                "word": "early",
                "partOfSpeech": "adjective",
                "translation": "aikainen"
            },
            {
                "word": "excite",
                "partOfSpeech": "verb",
                "translation": "innostaa"
            },
            {
                "word": "wonderful",
                "partOfSpeech": "adjective",
                "translation": "ihana"
            },
            {
                "word": "mouth",
                "partOfSpeech": "noun",
                "translation": "suu"
            },
            {
                "word": "question",
                "partOfSpeech": "verb",
                "translation": "kyseenalaistaa"
            },
            {
                "word": "dear",
                "partOfSpeech": "adjective",
                "translation": "armas"
            },
            {
                "word": "smart",
                "partOfSpeech": "adjective",
                "translation": "fiksu"
            },
            {
                "word": "invite",
                "partOfSpeech": "verb",
                "translation": "kutsua"
            },
            {
                "word": "rest",
                "partOfSpeech": "noun",
                "translation": "lepo"
            },
            {
                "word": "key",
                "partOfSpeech": "noun",
                "translation": "avain"
            },
            {
                "word": "end",
                "partOfSpeech": "noun",
                "translation": "pääty"
            },
            {
                "word": "dress",
                "partOfSpeech": "verb",
                "translation": "pukea"
            },
            {
                "word": "red",
                "partOfSpeech": "adjective",
                "translation": "punainen"
            },
            {
                "word": "laugh",
                "partOfSpeech": "verb",
                "translation": "nauraa"
            },
            {
                "word": "help",
                "partOfSpeech": "noun",
                "translation": "apu"
            },
            {
                "word": "agree",
                "partOfSpeech": "verb",
                "translation": "suostua"
            },
            {
                "word": "machine",
                "partOfSpeech": "noun",
                "translation": "kone"
            },
            {
                "word": "return",
                "partOfSpeech": "verb",
                "translation": "palata"
            },
            {
                "word": "space",
                "partOfSpeech": "noun",
                "translation": "avaruus"
            },
            {
                "word": "mad",
                "partOfSpeech": "adjective",
                "translation": "sekopäinen"
            },
            {
                "word": "truth",
                "partOfSpeech": "noun",
                "translation": "totuus"
            },
            {
                "word": "ice",
                "partOfSpeech": "noun",
                "translation": "jää"
            },
            {
                "word": "follow",
                "partOfSpeech": "verb",
                "translation": "seurata"
            },
            {
                "word": "idiot",
                "partOfSpeech": "noun",
                "translation": "idiootti"
            },
            {
                "word": "rule",
                "partOfSpeech": "noun",
                "translation": "sääntö"
            },
            {
                "word": "need",
                "partOfSpeech": "noun",
                "translation": "tarve"
            },
            {
                "word": "notice",
                "partOfSpeech": "verb",
                "translation": "huomata"
            }
        ],
        "word_set8": [
            {
                "word": "chicken",
                "partOfSpeech": "noun",
                "translation": "kana"
            },
            {
                "word": "ride",
                "partOfSpeech": "verb",
                "translation": "ratsastaa"
            },
            {
                "word": "music",
                "partOfSpeech": "noun",
                "translation": "musiikki"
            },
            {
                "word": "join",
                "partOfSpeech": "verb",
                "translation": "liittyä"
            },
            {
                "word": "ruin",
                "partOfSpeech": "verb",
                "translation": "raunioittaa"
            },
            {
                "word": "war",
                "partOfSpeech": "noun",
                "translation": "sota"
            },
            {
                "word": "screw",
                "partOfSpeech": "verb",
                "translation": "ruuvata"
            },
            {
                "word": "light",
                "partOfSpeech": "noun",
                "translation": "valo"
            },
            {
                "word": "poor",
                "partOfSpeech": "adjective",
                "translation": "köyhä"
            },
            {
                "word": "sense",
                "partOfSpeech": "noun",
                "translation": "aisti"
            },
            {
                "word": "able",
                "partOfSpeech": "adjective",
                "translation": "kykenevä"
            },
            {
                "word": "matter",
                "partOfSpeech": "noun",
                "translation": "aine"
            },
            {
                "word": "secret",
                "partOfSpeech": "noun",
                "translation": "salaisuus"
            },
            {
                "word": "fly",
                "partOfSpeech": "verb",
                "translation": "lentää"
            },
            {
                "word": "top",
                "partOfSpeech": "noun",
                "translation": "yläosa"
            },
            {
                "word": "fair",
                "partOfSpeech": "adjective",
                "translation": "reilu"
            },
            {
                "word": "relax",
                "partOfSpeech": "verb",
                "translation": "rentoutua"
            },
            {
                "word": "boyfriend",
                "partOfSpeech": "noun",
                "translation": "poikaystävä"
            },
            {
                "word": "plan",
                "partOfSpeech": "noun",
                "translation": "suunnitelma"
            },
            {
                "word": "mistake",
                "partOfSpeech": "noun",
                "translation": "virhe"
            },
            {
                "word": "luck",
                "partOfSpeech": "noun",
                "translation": "onni"
            },
            {
                "word": "group",
                "partOfSpeech": "noun",
                "translation": "ryhmä"
            },
            {
                "word": "daughter",
                "partOfSpeech": "noun",
                "translation": "tytär"
            },
            {
                "word": "college",
                "partOfSpeech": "noun",
                "translation": "korkeakoulu"
            },
            {
                "word": "sign",
                "partOfSpeech": "verb",
                "translation": "allekirjoittaa"
            },
            {
                "word": "close",
                "partOfSpeech": "verb",
                "translation": "sulkea"
            },
            {
                "word": "message",
                "partOfSpeech": "noun",
                "translation": "viesti"
            },
            {
                "word": "fault",
                "partOfSpeech": "noun",
                "translation": "siirros"
            },
            {
                "word": "quick",
                "partOfSpeech": "adjective",
                "translation": "nopea"
            },
            {
                "word": "shirt",
                "partOfSpeech": "noun",
                "translation": "paita"
            },
            {
                "word": "attention",
                "partOfSpeech": "noun",
                "translation": "huomio"
            },
            {
                "word": "answer",
                "partOfSpeech": "noun",
                "translation": "vastaus"
            },
            {
                "word": "trust",
                "partOfSpeech": "verb",
                "translation": "luottaa"
            },
            {
                "word": "leg",
                "partOfSpeech": "noun",
                "translation": "jalka"
            },
            {
                "word": "human",
                "partOfSpeech": "adjective",
                "translation": "inhimillinen"
            },
            {
                "word": "star",
                "partOfSpeech": "noun",
                "translation": "tähti"
            },
            {
                "word": "air",
                "partOfSpeech": "noun",
                "translation": "ilma"
            },
            {
                "word": "chair",
                "partOfSpeech": "noun",
                "translation": "tuoli"
            },
            {
                "word": "gun",
                "partOfSpeech": "noun",
                "translation": "pyssy"
            },
            {
                "word": "begin",
                "partOfSpeech": "verb",
                "translation": "alkaa"
            }
        ],
        "word_set9": [
            {
                "word": "death",
                "partOfSpeech": "noun",
                "translation": "kuolema"
            },
            {
                "word": "tree",
                "partOfSpeech": "noun",
                "translation": "puu"
            },
            {
                "word": "boss",
                "partOfSpeech": "noun",
                "translation": "pomo"
            },
            {
                "word": "lucky",
                "partOfSpeech": "adjective",
                "translation": "onnekas"
            },
            {
                "word": "safe",
                "partOfSpeech": "adjective",
                "translation": "turvallinen"
            },
            {
                "word": "cold",
                "partOfSpeech": "adjective",
                "translation": "kylmä"
            },
            {
                "word": "explain",
                "partOfSpeech": "verb",
                "translation": "selittää"
            },
            {
                "word": "video",
                "partOfSpeech": "noun",
                "translation": "video"
            },
            {
                "word": "brain",
                "partOfSpeech": "noun",
                "translation": "aivot"
            },
            {
                "word": "voice",
                "partOfSpeech": "noun",
                "translation": "ääni"
            },
            {
                "word": "cake",
                "partOfSpeech": "noun",
                "translation": "kakku"
            },
            {
                "word": "drink",
                "partOfSpeech": "noun",
                "translation": "juoma"
            },
            {
                "word": "trip",
                "partOfSpeech": "noun",
                "translation": "matka"
            },
            {
                "word": "monkey",
                "partOfSpeech": "noun",
                "translation": "apina"
            },
            {
                "word": "fix",
                "partOfSpeech": "verb",
                "translation": "korjata"
            },
            {
                "word": "entire",
                "partOfSpeech": "adjective",
                "translation": "ehytlaitainen"
            },
            {
                "word": "allow",
                "partOfSpeech": "verb",
                "translation": "sallia"
            },
            {
                "word": "hide",
                "partOfSpeech": "verb",
                "translation": "piilottaa"
            },
            {
                "word": "huge",
                "partOfSpeech": "adjective",
                "translation": "valtava"
            },
            {
                "word": "interesting",
                "partOfSpeech": "adjective",
                "translation": "mielenkiintoinen"
            },
            {
                "word": "fight",
                "partOfSpeech": "noun",
                "translation": "tappelu"
            },
            {
                "word": "roll",
                "partOfSpeech": "verb",
                "translation": "kieriä"
            },
            {
                "word": "grab",
                "partOfSpeech": "verb",
                "translation": "kahmaista"
            },
            {
                "word": "teacher",
                "partOfSpeech": "noun",
                "translation": "opettaja"
            },
            {
                "word": "crap",
                "partOfSpeech": "noun",
                "translation": "skeida"
            },
            {
                "word": "animal",
                "partOfSpeech": "noun",
                "translation": "eläin"
            },
            {
                "word": "burn",
                "partOfSpeech": "verb",
                "translation": "palaa"
            },
            {
                "word": "tough",
                "partOfSpeech": "adjective",
                "translation": "sitkeä"
            },
            {
                "word": "restaurant",
                "partOfSpeech": "noun",
                "translation": "ravintola"
            },
            {
                "word": "tooth",
                "partOfSpeech": "noun",
                "translation": "hammas"
            },
            {
                "word": "marriage",
                "partOfSpeech": "noun",
                "translation": "avioliitto"
            },
            {
                "word": "proud",
                "partOfSpeech": "adjective",
                "translation": "ylpeä"
            },
            {
                "word": "uncle",
                "partOfSpeech": "noun",
                "translation": "setä"
            },
            {
                "word": "push",
                "partOfSpeech": "verb",
                "translation": "työntää"
            },
            {
                "word": "butt",
                "partOfSpeech": "noun",
                "translation": "tumppi"
            },
            {
                "word": "offer",
                "partOfSpeech": "verb",
                "translation": "tarjota"
            },
            {
                "word": "lord",
                "partOfSpeech": "noun",
                "translation": "lordi"
            },
            {
                "word": "feeling",
                "partOfSpeech": "noun",
                "translation": "tunne"
            },
            {
                "word": "suit",
                "partOfSpeech": "noun",
                "translation": "puku"
            },
            {
                "word": "floor",
                "partOfSpeech": "noun",
                "translation": "kerros"
            }
        ],
        "word_set10": [
            {
                "word": "cream",
                "partOfSpeech": "noun",
                "translation": "kerma"
            },
            {
                "word": "naked",
                "partOfSpeech": "adjective",
                "translation": "paljas"
            },
            {
                "word": "list",
                "partOfSpeech": "noun",
                "translation": "lista"
            },
            {
                "word": "ring",
                "partOfSpeech": "noun",
                "translation": "sormus"
            },
            {
                "word": "clean",
                "partOfSpeech": "verb",
                "translation": "siivota"
            },
            {
                "word": "apologize",
                "partOfSpeech": "verb",
                "translation": "pyytää anteeksi"
            },
            {
                "word": "clear",
                "partOfSpeech": "adjective",
                "translation": "selkeä"
            },
            {
                "word": "share",
                "partOfSpeech": "verb",
                "translation": "jakaa"
            },
            {
                "word": "fill",
                "partOfSpeech": "verb",
                "translation": "täyttää"
            },
            {
                "word": "pizza",
                "partOfSpeech": "noun",
                "translation": "pitsa"
            },
            {
                "word": "pretend",
                "partOfSpeech": "verb",
                "translation": "teeskennellä"
            },
            {
                "word": "hospital",
                "partOfSpeech": "noun",
                "translation": "lasaretti"
            },
            {
                "word": "sad",
                "partOfSpeech": "adjective",
                "translation": "surullinen"
            },
            {
                "word": "police",
                "partOfSpeech": "noun",
                "translation": "poliisi"
            },
            {
                "word": "fish",
                "partOfSpeech": "noun",
                "translation": "kala"
            },
            {
                "word": "window",
                "partOfSpeech": "noun",
                "translation": "ikkuna"
            },
            {
                "word": "busy",
                "partOfSpeech": "adjective",
                "translation": "ylösotettu"
            },
            {
                "word": "sign",
                "partOfSpeech": "noun",
                "translation": "merkki"
            },
            {
                "word": "call",
                "partOfSpeech": "noun",
                "translation": "kutsu"
            },
            {
                "word": "pie",
                "partOfSpeech": "noun",
                "translation": "piiras"
            },
            {
                "word": "answer",
                "partOfSpeech": "verb",
                "translation": "vastata"
            },
            {
                "word": "raise",
                "partOfSpeech": "verb",
                "translation": "korottaa"
            },
            {
                "word": "sandwich",
                "partOfSpeech": "noun",
                "translation": "kerrosvoileipä"
            },
            {
                "word": "sale",
                "partOfSpeech": "noun",
                "translation": "myynti"
            },
            {
                "word": "choose",
                "partOfSpeech": "verb",
                "translation": "valita"
            },
            {
                "word": "swear",
                "partOfSpeech": "verb",
                "translation": "kiroilla"
            },
            {
                "word": "boat",
                "partOfSpeech": "noun",
                "translation": "vene"
            },
            {
                "word": "tired",
                "partOfSpeech": "adjective",
                "translation": "väsynyt"
            },
            {
                "word": "smoke",
                "partOfSpeech": "verb",
                "translation": "tupakoida"
            },
            {
                "word": "embarrass",
                "partOfSpeech": "verb",
                "translation": "nolata"
            },
            {
                "word": "band",
                "partOfSpeech": "noun",
                "translation": "bändi"
            },
            {
                "word": "strong",
                "partOfSpeech": "adjective",
                "translation": "vahva"
            },
            {
                "word": "law",
                "partOfSpeech": "noun",
                "translation": "laki"
            },
            {
                "word": "toilet",
                "partOfSpeech": "noun",
                "translation": "vessa"
            },
            {
                "word": "jump",
                "partOfSpeech": "verb",
                "translation": "hyppiä"
            },
            {
                "word": "count",
                "partOfSpeech": "verb",
                "translation": "laskeskella"
            },
            {
                "word": "blue",
                "partOfSpeech": "adjective",
                "translation": "sininen"
            },
            {
                "word": "horrible",
                "partOfSpeech": "adjective",
                "translation": "kamala"
            },
            {
                "word": "shit",
                "partOfSpeech": "noun",
                "translation": "paska"
            },
            {
                "word": "handle",
                "partOfSpeech": "verb",
                "translation": "käsitellä"
            }
        ],
        "word_set11": [
            {
                "word": "wall",
                "partOfSpeech": "noun",
                "translation": "seinä"
            },
            {
                "word": "art",
                "partOfSpeech": "noun",
                "translation": "taide"
            },
            {
                "word": "cover",
                "partOfSpeech": "verb",
                "translation": "peittää"
            },
            {
                "word": "arm",
                "partOfSpeech": "noun",
                "translation": "käsi"
            },
            {
                "word": "simple",
                "partOfSpeech": "adjective",
                "translation": "simppeli"
            },
            {
                "word": "bus",
                "partOfSpeech": "noun",
                "translation": "linja-auto"
            },
            {
                "word": "surprise",
                "partOfSpeech": "verb",
                "translation": "yllättää, yllätys"
            },
            {
                "word": "candy",
                "partOfSpeech": "noun",
                "translation": "karkki"
            },
            {
                "word": "possible",
                "partOfSpeech": "adjective",
                "translation": "mahdollinen"
            },
            {
                "word": "rich",
                "partOfSpeech": "adjective",
                "translation": "rikas"
            },
            {
                "word": "short",
                "partOfSpeech": "adjective",
                "translation": "lyhyt"
            },
            {
                "word": "king",
                "partOfSpeech": "noun",
                "translation": "kuningas"
            },
            {
                "word": "knock",
                "partOfSpeech": "verb",
                "translation": "koputtaa"
            },
            {
                "word": "cookie",
                "partOfSpeech": "noun",
                "translation": "keksi"
            },
            {
                "word": "penis",
                "partOfSpeech": "noun",
                "translation": "pippeli"
            },
            {
                "word": "history",
                "partOfSpeech": "noun",
                "translation": "historia"
            },
            {
                "word": "imagine",
                "partOfSpeech": "verb",
                "translation": "kuvitella"
            },
            {
                "word": "blood",
                "partOfSpeech": "noun",
                "translation": "veri"
            },
            {
                "word": "drug",
                "partOfSpeech": "noun",
                "translation": "lääkeaine"
            },
            {
                "word": "future",
                "partOfSpeech": "noun",
                "translation": "tulevaisuus"
            },
            {
                "word": "prove",
                "partOfSpeech": "verb",
                "translation": "todistaa"
            },
            {
                "word": "evening",
                "partOfSpeech": "noun",
                "translation": "ilta"
            },
            {
                "word": "system",
                "partOfSpeech": "noun",
                "translation": "järjestelmä"
            },
            {
                "word": "age",
                "partOfSpeech": "noun",
                "translation": "ikä"
            },
            {
                "word": "yesterday",
                "partOfSpeech": "noun",
                "translation": "eilinen"
            },
            {
                "word": "jerk",
                "partOfSpeech": "noun",
                "translation": "nytkähdys"
            },
            {
                "word": "bird",
                "partOfSpeech": "noun",
                "translation": "lintu"
            },
            {
                "word": "nose",
                "partOfSpeech": "noun",
                "translation": "nenä"
            },
            {
                "word": "bother",
                "partOfSpeech": "verb",
                "translation": "viitsiä"
            },
            {
                "word": "fan",
                "partOfSpeech": "noun",
                "translation": "tuuletin"
            },
            {
                "word": "letter",
                "partOfSpeech": "noun",
                "translation": "kirje"
            },
            {
                "word": "interested",
                "partOfSpeech": "adjective",
                "translation": "kiinnostunut"
            },
            {
                "word": "pregnant",
                "partOfSpeech": "adjective",
                "translation": "raskaana oleva"
            },
            {
                "word": "destroy",
                "partOfSpeech": "verb",
                "translation": "tuhota"
            },
            {
                "word": "bear",
                "partOfSpeech": "noun",
                "translation": "karhu"
            },
            {
                "word": "milk",
                "partOfSpeech": "noun",
                "translation": "maito"
            },
            {
                "word": "sport",
                "partOfSpeech": "noun",
                "translation": "sportti"
            },
            {
                "word": "conversation",
                "partOfSpeech": "noun",
                "translation": "keskustelu"
            },
            {
                "word": "jacket",
                "partOfSpeech": "noun",
                "translation": "takki"
            }
        ],
        "word_set12": [
            {
                "word": "accept",
                "partOfSpeech": "verb",
                "translation": "hyväksyä"
            },
            {
                "word": "dumb",
                "partOfSpeech": "adjective",
                "translation": "tyhmä"
            },
            {
                "word": "bit",
                "partOfSpeech": "noun",
                "translation": "hitu"
            },
            {
                "word": "mention",
                "partOfSpeech": "verb",
                "translation": "mainita"
            },
            {
                "word": "step",
                "partOfSpeech": "verb",
                "translation": "astella"
            },
            {
                "word": "hungry",
                "partOfSpeech": "adjective",
                "translation": "nälkäinen"
            },
            {
                "word": "situation",
                "partOfSpeech": "noun",
                "translation": "tilanne"
            },
            {
                "word": "lead",
                "partOfSpeech": "verb",
                "translation": "johdattaa"
            },
            {
                "word": "fantastic",
                "partOfSpeech": "adjective",
                "translation": "fantastinen"
            },
            {
                "word": "hole",
                "partOfSpeech": "noun",
                "translation": "reikä"
            },
            {
                "word": "note",
                "partOfSpeech": "noun",
                "translation": "muistiinpano"
            },
            {
                "word": "honest",
                "partOfSpeech": "adjective",
                "translation": "rehellinen"
            },
            {
                "word": "character",
                "partOfSpeech": "noun",
                "translation": "hahmo"
            },
            {
                "word": "holy",
                "partOfSpeech": "adjective",
                "translation": "pyhä"
            },
            {
                "word": "manager",
                "partOfSpeech": "noun",
                "translation": "manageri"
            },
            {
                "word": "lesson",
                "partOfSpeech": "noun",
                "translation": "oppitunti"
            },
            {
                "word": "soul",
                "partOfSpeech": "noun",
                "translation": "sielu"
            },
            {
                "word": "dark",
                "partOfSpeech": "adjective",
                "translation": "tumma"
            },
            {
                "word": "difference",
                "partOfSpeech": "noun",
                "translation": "ero"
            },
            {
                "word": "wine",
                "partOfSpeech": "noun",
                "translation": "viini"
            },
            {
                "word": "road",
                "partOfSpeech": "noun",
                "translation": "tie"
            },
            {
                "word": "calm",
                "partOfSpeech": "verb",
                "translation": "tyyntyä"
            },
            {
                "word": "personal",
                "partOfSpeech": "adjective",
                "translation": "henkilökohtainen"
            },
            {
                "word": "clown",
                "partOfSpeech": "noun",
                "translation": "klovni"
            },
            {
                "word": "computer",
                "partOfSpeech": "noun",
                "translation": "tietokone"
            },
            {
                "word": "horse",
                "partOfSpeech": "noun",
                "translation": "hevonen"
            },
            {
                "word": "mayor",
                "partOfSpeech": "noun",
                "translation": "pormestari"
            },
            {
                "word": "sexy",
                "partOfSpeech": "adjective",
                "translation": "seksikäs"
            },
            {
                "word": "dirty",
                "partOfSpeech": "adjective",
                "translation": "likainen"
            },
            {
                "word": "carry",
                "partOfSpeech": "verb",
                "translation": "kantaa"
            },
            {
                "word": "professor",
                "partOfSpeech": "noun",
                "translation": "professori"
            },
            {
                "word": "bottle",
                "partOfSpeech": "noun",
                "translation": "pullo"
            },
            {
                "word": "cheese",
                "partOfSpeech": "noun",
                "translation": "juusto"
            },
            {
                "word": "summer",
                "partOfSpeech": "noun",
                "translation": "kesä"
            },
            {
                "word": "remind",
                "partOfSpeech": "verb",
                "translation": "muistuttaa"
            },
            {
                "word": "pee",
                "partOfSpeech": "verb",
                "translation": "pissata"
            },
            {
                "word": "angry",
                "partOfSpeech": "adjective",
                "translation": "vihainen"
            },
            {
                "word": "film",
                "partOfSpeech": "noun",
                "translation": "filmi"
            },
            {
                "word": "reach",
                "partOfSpeech": "verb",
                "translation": "ylettyä"
            },
            {
                "word": "shower",
                "partOfSpeech": "noun",
                "translation": "suihku"
            }
        ],
        "word_set13": [
            {
                "word": "cup",
                "partOfSpeech": "noun",
                "translation": "kuppi"
            },
            {
                "word": "camera",
                "partOfSpeech": "noun",
                "translation": "kamera"
            },
            {
                "word": "pain",
                "partOfSpeech": "noun",
                "translation": "kipu"
            },
            {
                "word": "hurry",
                "partOfSpeech": "verb",
                "translation": "kiiruhtaa"
            },
            {
                "word": "desk",
                "partOfSpeech": "noun",
                "translation": "tiski"
            },
            {
                "word": "monster",
                "partOfSpeech": "noun",
                "translation": "hirviö"
            },
            {
                "word": "cop",
                "partOfSpeech": "noun",
                "translation": "jepari"
            },
            {
                "word": "credit",
                "partOfSpeech": "noun",
                "translation": "luotto"
            },
            {
                "word": "prepare",
                "partOfSpeech": "verb",
                "translation": "valmistaa"
            },
            {
                "word": "breakfast",
                "partOfSpeech": "noun",
                "translation": "aamupala"
            },
            {
                "word": "church",
                "partOfSpeech": "noun",
                "translation": "kirkko"
            },
            {
                "word": "hire",
                "partOfSpeech": "verb",
                "translation": "palkata"
            },
            {
                "word": "decision",
                "partOfSpeech": "noun",
                "translation": "päätös"
            },
            {
                "word": "pig",
                "partOfSpeech": "noun",
                "translation": "sika"
            },
            {
                "word": "loser",
                "partOfSpeech": "noun",
                "translation": "häviäjä"
            },
            {
                "word": "robot",
                "partOfSpeech": "noun",
                "translation": "robotti"
            },
            {
                "word": "deep",
                "partOfSpeech": "adjective",
                "translation": "syvä"
            },
            {
                "word": "park",
                "partOfSpeech": "noun",
                "translation": "puisto"
            },
            {
                "word": "chocolate",
                "partOfSpeech": "noun",
                "translation": "suklaa"
            },
            {
                "word": "service",
                "partOfSpeech": "noun",
                "translation": "palvelu"
            },
            {
                "word": "tape",
                "partOfSpeech": "noun",
                "translation": "ääninauha"
            },
            {
                "word": "kitchen",
                "partOfSpeech": "noun",
                "translation": "keittiö"
            },
            {
                "word": "grandpa",
                "partOfSpeech": "noun",
                "translation": "vaari"
            },
            {
                "word": "hero",
                "partOfSpeech": "noun",
                "translation": "sankari"
            },
            {
                "word": "spot",
                "partOfSpeech": "noun",
                "translation": "täplä"
            },
            {
                "word": "yell",
                "partOfSpeech": "verb",
                "translation": "hihkua"
            },
            {
                "word": "awful",
                "partOfSpeech": "adjective",
                "translation": "kaamea"
            },
            {
                "word": "scene",
                "partOfSpeech": "noun",
                "translation": "kulissi"
            },
            {
                "word": "trick",
                "partOfSpeech": "noun",
                "translation": "temppu"
            },
            {
                "word": "asshole",
                "partOfSpeech": "noun",
                "translation": "persläpi"
            },
            {
                "word": "visit",
                "partOfSpeech": "verb",
                "translation": "vierailla, käydä"
            },
            {
                "word": "clean",
                "partOfSpeech": "adjective",
                "translation": "puhdas"
            },
            {
                "word": "second",
                "partOfSpeech": "noun",
                "translation": "sekundantti"
            },
            {
                "word": "chick",
                "partOfSpeech": "noun",
                "translation": "tipu"
            },
            {
                "word": "hall",
                "partOfSpeech": "noun",
                "translation": "sali"
            },
            {
                "word": "fake",
                "partOfSpeech": "adjective",
                "translation": "feikki"
            },
            {
                "word": "forgive",
                "partOfSpeech": "verb",
                "translation": "antaa anteeksi"
            },
            {
                "word": "grade",
                "partOfSpeech": "noun",
                "translation": "aste"
            },
            {
                "word": "cheat",
                "partOfSpeech": "verb",
                "translation": "pettää"
            }
        ],
        "word_set14": [
            {
                "word": "create",
                "partOfSpeech": "verb",
                "translation": "luoda"
            },
            {
                "word": "comfortable",
                "partOfSpeech": "adjective",
                "translation": "viihtyisä"
            },
            {
                "word": "magazine",
                "partOfSpeech": "noun",
                "translation": "aikakauslehti"
            },
            {
                "word": "settle",
                "partOfSpeech": "verb",
                "translation": "sakkauttaa"
            },
            {
                "word": "accident",
                "partOfSpeech": "noun",
                "translation": "onnettomuus"
            },
            {
                "word": "excellent",
                "partOfSpeech": "adjective",
                "translation": "erinomainen"
            },
            {
                "word": "train",
                "partOfSpeech": "noun",
                "translation": "juna"
            },
            {
                "word": "board",
                "partOfSpeech": "noun",
                "translation": "johtokunta"
            },
            {
                "word": "spirit",
                "partOfSpeech": "noun",
                "translation": "henki"
            },
            {
                "word": "cow",
                "partOfSpeech": "noun",
                "translation": "lehmä"
            },
            {
                "word": "building",
                "partOfSpeech": "noun",
                "translation": "rakennus"
            },
            {
                "word": "ear",
                "partOfSpeech": "noun",
                "translation": "korva"
            },
            {
                "word": "ugly",
                "partOfSpeech": "adjective",
                "translation": "ruma"
            },
            {
                "word": "toy",
                "partOfSpeech": "noun",
                "translation": "lelu"
            },
            {
                "word": "strange",
                "partOfSpeech": "adjective",
                "translation": "outo"
            },
            {
                "word": "island",
                "partOfSpeech": "noun",
                "translation": "saari"
            },
            {
                "word": "fit",
                "partOfSpeech": "verb",
                "translation": "mahtua"
            },
            {
                "word": "rock",
                "partOfSpeech": "noun",
                "translation": "kivi"
            },
            {
                "word": "step",
                "partOfSpeech": "noun",
                "translation": "askelma"
            },
            {
                "word": "action",
                "partOfSpeech": "noun",
                "translation": "toiminta"
            },
            {
                "word": "bill",
                "partOfSpeech": "noun",
                "translation": "seteli"
            },
            {
                "word": "field",
                "partOfSpeech": "noun",
                "translation": "pelto"
            },
            {
                "word": "level",
                "partOfSpeech": "noun",
                "translation": "taso"
            },
            {
                "word": "cost",
                "partOfSpeech": "verb",
                "translation": "maksaa"
            },
            {
                "word": "size",
                "partOfSpeech": "noun",
                "translation": "koko"
            },
            {
                "word": "cell",
                "partOfSpeech": "noun",
                "translation": "selli"
            },
            {
                "word": "serve",
                "partOfSpeech": "verb",
                "translation": "tarjoilla"
            },
            {
                "word": "shake",
                "partOfSpeech": "verb",
                "translation": "ravistaa"
            },
            {
                "word": "neck",
                "partOfSpeech": "noun",
                "translation": "kaula"
            },
            {
                "word": "bowl",
                "partOfSpeech": "noun",
                "translation": "kulho"
            },
            {
                "word": "control",
                "partOfSpeech": "noun",
                "translation": "ohjaus"
            },
            {
                "word": "loud",
                "partOfSpeech": "adjective",
                "translation": "kovaääninen"
            },
            {
                "word": "bedroom",
                "partOfSpeech": "noun",
                "translation": "makuuhuone"
            },
            {
                "word": "check",
                "partOfSpeech": "noun",
                "translation": "tsekkaus"
            },
            {
                "word": "draw",
                "partOfSpeech": "verb",
                "translation": "piirtää"
            },
            {
                "word": "guest",
                "partOfSpeech": "noun",
                "translation": "vieras"
            },
            {
                "word": "insane",
                "partOfSpeech": "adjective",
                "translation": "mielipuolinen"
            },
            {
                "word": "fail",
                "partOfSpeech": "verb",
                "translation": "epäonnistua"
            },
            {
                "word": "cook",
                "partOfSpeech": "verb",
                "translation": "kokata"
            },
            {
                "word": "pleasure",
                "partOfSpeech": "noun",
                "translation": "nautinto"
            }
        ],
        "word_set15": [
            {
                "word": "truck",
                "partOfSpeech": "noun",
                "translation": "kuorma-auto"
            },
            {
                "word": "science",
                "partOfSpeech": "noun",
                "translation": "tiede"
            },
            {
                "word": "careful",
                "partOfSpeech": "adjective",
                "translation": "huolellinen"
            },
            {
                "word": "nervous",
                "partOfSpeech": "adjective",
                "translation": "hermostunut"
            },
            {
                "word": "partner",
                "partOfSpeech": "noun",
                "translation": "partneri"
            },
            {
                "word": "scream",
                "partOfSpeech": "verb",
                "translation": "kirkua"
            },
            {
                "word": "pool",
                "partOfSpeech": "noun",
                "translation": "allas"
            },
            {
                "word": "appear",
                "partOfSpeech": "verb",
                "translation": "ilmaantua"
            },
            {
                "word": "silly",
                "partOfSpeech": "adjective",
                "translation": "hupsu"
            },
            {
                "word": "feed",
                "partOfSpeech": "verb",
                "translation": "syöttää"
            },
            {
                "word": "wash",
                "partOfSpeech": "verb",
                "translation": "pestä"
            },
            {
                "word": "stink",
                "partOfSpeech": "verb",
                "translation": "lemuta"
            },
            {
                "word": "tiny",
                "partOfSpeech": "adjective",
                "translation": "pikkiriikkinen"
            },
            {
                "word": "prison",
                "partOfSpeech": "noun",
                "translation": "vankila"
            },
            {
                "word": "cause",
                "partOfSpeech": "verb",
                "translation": "aiheuttaa"
            },
            {
                "word": "photo",
                "partOfSpeech": "noun",
                "translation": "foto"
            },
            {
                "word": "public",
                "partOfSpeech": "adjective",
                "translation": "julkinen"
            },
            {
                "word": "button",
                "partOfSpeech": "noun",
                "translation": "nappi"
            },
            {
                "word": "flower",
                "partOfSpeech": "noun",
                "translation": "kukka"
            },
            {
                "word": "memory",
                "partOfSpeech": "noun",
                "translation": "muisti"
            },
            {
                "word": "own",
                "partOfSpeech": "verb",
                "translation": "omistaa"
            },
            {
                "word": "fast",
                "partOfSpeech": "adjective",
                "translation": "nopea"
            },
            {
                "word": "madam",
                "partOfSpeech": "noun",
                "translation": "matami"
            },
            {
                "word": "blame",
                "partOfSpeech": "verb",
                "translation": "syyttää"
            },
            {
                "word": "tea",
                "partOfSpeech": "noun",
                "translation": "tee"
            },
            {
                "word": "freeze",
                "partOfSpeech": "verb",
                "translation": "jäätyä"
            },
            {
                "word": "sexual",
                "partOfSpeech": "adjective",
                "translation": "seksuaalinen"
            },
            {
                "word": "code",
                "partOfSpeech": "noun",
                "translation": "koodi"
            },
            {
                "word": "celebrate",
                "partOfSpeech": "verb",
                "translation": "juhlistaa, juhlia"
            },
            {
                "word": "price",
                "partOfSpeech": "noun",
                "translation": "hinta"
            },
            {
                "word": "assume",
                "partOfSpeech": "verb",
                "translation": "olettaa"
            },
            {
                "word": "delicious",
                "partOfSpeech": "adjective",
                "translation": "herkullinen"
            },
            {
                "word": "soup",
                "partOfSpeech": "noun",
                "translation": "keitto"
            },
            {
                "word": "waste",
                "partOfSpeech": "verb",
                "translation": "hassata"
            },
            {
                "word": "coat",
                "partOfSpeech": "noun",
                "translation": "pinnoite"
            },
            {
                "word": "doll",
                "partOfSpeech": "noun",
                "translation": "nukke"
            },
            {
                "word": "security",
                "partOfSpeech": "noun",
                "translation": "turva"
            },
            {
                "word": "warm",
                "partOfSpeech": "adjective",
                "translation": "lämmin"
            },
            {
                "word": "football",
                "partOfSpeech": "noun",
                "translation": "jalkapallo"
            }
        ],
        "word_set16": [
            {
                "word": "model",
                "partOfSpeech": "noun",
                "translation": "malli"
            },
            {
                "word": "middle",
                "partOfSpeech": "noun",
                "translation": "puoliväli"
            },
            {
                "word": "shop",
                "partOfSpeech": "verb",
                "translation": "shopata, myymälä"
            },
            {
                "word": "client",
                "partOfSpeech": "noun",
                "translation": "päämies"
            },
            {
                "word": "ground",
                "partOfSpeech": "noun",
                "translation": "maanpinta"
            },
            {
                "word": "project",
                "partOfSpeech": "noun",
                "translation": "hanke"
            },
            {
                "word": "dare",
                "partOfSpeech": "verb",
                "translation": "uskaltaa"
            },
            {
                "word": "episode",
                "partOfSpeech": "noun",
                "translation": "episodi"
            },
            {
                "word": "glass",
                "partOfSpeech": "noun",
                "translation": "lasi"
            },
            {
                "word": "green",
                "partOfSpeech": "adjective",
                "translation": "vihreä"
            },
            {
                "word": "lock",
                "partOfSpeech": "verb",
                "translation": "lukita"
            },
            {
                "word": "straight",
                "partOfSpeech": "adjective",
                "translation": "suora"
            },
            {
                "word": "unbelievable",
                "partOfSpeech": "adjective",
                "translation": "uskomaton"
            },
            {
                "word": "court",
                "partOfSpeech": "noun",
                "translation": "tuomioistuin"
            },
            {
                "word": "experience",
                "partOfSpeech": "noun",
                "translation": "kokemus"
            },
            {
                "word": "final",
                "partOfSpeech": "adjective",
                "translation": "lopullinen"
            },
            {
                "word": "large",
                "partOfSpeech": "adjective",
                "translation": "mittava"
            },
            {
                "word": "salad",
                "partOfSpeech": "noun",
                "translation": "salaatti"
            },
            {
                "word": "belong",
                "partOfSpeech": "verb",
                "translation": "lukeutua"
            },
            {
                "word": "vote",
                "partOfSpeech": "verb",
                "translation": "äänestää"
            },
            {
                "word": "crime",
                "partOfSpeech": "noun",
                "translation": "rikos"
            },
            {
                "word": "meat",
                "partOfSpeech": "noun",
                "translation": "liha"
            },
            {
                "word": "romantic",
                "partOfSpeech": "adjective",
                "translation": "romanttinen"
            },
            {
                "word": "treat",
                "partOfSpeech": "verb",
                "translation": "kohdella"
            },
            {
                "word": "lie",
                "partOfSpeech": "noun",
                "translation": "valhe"
            },
            {
                "word": "taste",
                "partOfSpeech": "verb",
                "translation": "maistaa"
            },
            {
                "word": "weight",
                "partOfSpeech": "noun",
                "translation": "paino"
            },
            {
                "word": "mail",
                "partOfSpeech": "noun",
                "translation": "rengaspanssari"
            },
            {
                "word": "boring",
                "partOfSpeech": "adjective",
                "translation": "mälsä"
            },
            {
                "word": "information",
                "partOfSpeech": "noun",
                "translation": "informaatio"
            },
            {
                "word": "total",
                "partOfSpeech": "adjective",
                "translation": "totaalinen"
            },
            {
                "word": "page",
                "partOfSpeech": "noun",
                "translation": "sivu"
            },
            {
                "word": "sake",
                "partOfSpeech": "noun",
                "translation": "sake"
            },
            {
                "word": "private",
                "partOfSpeech": "adjective",
                "translation": "yksityinen"
            },
            {
                "word": "winner",
                "partOfSpeech": "noun",
                "translation": "voittaja"
            },
            {
                "word": "past",
                "partOfSpeech": "noun",
                "translation": "menneisyys"
            },
            {
                "word": "pen",
                "partOfSpeech": "noun",
                "translation": "kynä"
            },
            {
                "word": "cousin",
                "partOfSpeech": "noun",
                "translation": "serkku"
            },
            {
                "word": "jealous",
                "partOfSpeech": "adjective",
                "translation": "kateellinen"
            }
        ],
        "word_set17": [
            {
                "word": "mess",
                "partOfSpeech": "verb",
                "translation": "sotkea"
            },
            {
                "word": "planet",
                "partOfSpeech": "noun",
                "translation": "planeetta"
            },
            {
                "word": "universe",
                "partOfSpeech": "noun",
                "translation": "universumi"
            },
            {
                "word": "genius",
                "partOfSpeech": "noun",
                "translation": "nero"
            },
            {
                "word": "dangerous",
                "partOfSpeech": "adjective",
                "translation": "vaarallinen"
            },
            {
                "word": "suggest",
                "partOfSpeech": "verb",
                "translation": "ehdottaa"
            },
            {
                "word": "turn",
                "partOfSpeech": "noun",
                "translation": "vuoro"
            },
            {
                "word": "sea",
                "partOfSpeech": "noun",
                "translation": "meri"
            },
            {
                "word": "officer",
                "partOfSpeech": "noun",
                "translation": "upseeri"
            },
            {
                "word": "meal",
                "partOfSpeech": "noun",
                "translation": "ateria"
            },
            {
                "word": "popular",
                "partOfSpeech": "adjective",
                "translation": "suosittu"
            },
            {
                "word": "report",
                "partOfSpeech": "noun",
                "translation": "raportti"
            },
            {
                "word": "flight",
                "partOfSpeech": "noun",
                "translation": "lento"
            },
            {
                "word": "change",
                "partOfSpeech": "noun",
                "translation": "muutos"
            },
            {
                "word": "driver",
                "partOfSpeech": "noun",
                "translation": "kuljettaja"
            },
            {
                "word": "dump",
                "partOfSpeech": "verb",
                "translation": "dumpata"
            },
            {
                "word": "member",
                "partOfSpeech": "noun",
                "translation": "elin"
            },
            {
                "word": "add",
                "partOfSpeech": "verb",
                "translation": "lisätä"
            },
            {
                "word": "confuse",
                "partOfSpeech": "verb",
                "translation": "hämätä"
            },
            {
                "word": "form",
                "partOfSpeech": "noun",
                "translation": "lomake"
            },
            {
                "word": "government",
                "partOfSpeech": "noun",
                "translation": "hallitus"
            },
            {
                "word": "order",
                "partOfSpeech": "noun",
                "translation": "järjestys"
            },
            {
                "word": "continue",
                "partOfSpeech": "verb",
                "translation": "jatkaa"
            },
            {
                "word": "event",
                "partOfSpeech": "noun",
                "translation": "tapahtuma"
            },
            {
                "word": "quiet",
                "partOfSpeech": "adjective",
                "translation": "hiljainen"
            },
            {
                "word": "low",
                "partOfSpeech": "adjective",
                "translation": "matala"
            },
            {
                "word": "breast",
                "partOfSpeech": "noun",
                "translation": "rinta"
            },
            {
                "word": "bank",
                "partOfSpeech": "noun",
                "translation": "pankki"
            },
            {
                "word": "parking",
                "partOfSpeech": "noun",
                "translation": "pysäköinti"
            },
            {
                "word": "ride",
                "partOfSpeech": "noun",
                "translation": "kyyti"
            },
            {
                "word": "wild",
                "partOfSpeech": "adjective",
                "translation": "villi"
            },
            {
                "word": "turkey",
                "partOfSpeech": "noun",
                "translation": "kalkkuna"
            },
            {
                "word": "thought",
                "partOfSpeech": "noun",
                "translation": "ajatus"
            },
            {
                "word": "famous",
                "partOfSpeech": "adjective",
                "translation": "kuuluisa"
            },
            {
                "word": "gold",
                "partOfSpeech": "noun",
                "translation": "kulta"
            },
            {
                "word": "pound",
                "partOfSpeech": "noun",
                "translation": "pauna"
            },
            {
                "word": "skin",
                "partOfSpeech": "noun",
                "translation": "skini"
            },
            {
                "word": "rat",
                "partOfSpeech": "noun",
                "translation": "rotta"
            },
            {
                "word": "tie",
                "partOfSpeech": "noun",
                "translation": "skraga"
            },
            {
                "word": "career",
                "partOfSpeech": "noun",
                "translation": "ura"
            }
        ],
        "word_set18": [
            {
                "word": "juice",
                "partOfSpeech": "noun",
                "translation": "mehu"
            },
            {
                "word": "protect",
                "partOfSpeech": "verb",
                "translation": "suojella"
            },
            {
                "word": "shame",
                "partOfSpeech": "noun",
                "translation": "häpeä"
            },
            {
                "word": "bottom",
                "partOfSpeech": "noun",
                "translation": "pohja"
            },
            {
                "word": "respect",
                "partOfSpeech": "verb",
                "translation": "kunnioittaa"
            },
            {
                "word": "underwear",
                "partOfSpeech": "noun",
                "translation": "alusvaate"
            },
            {
                "word": "meeting",
                "partOfSpeech": "noun",
                "translation": "kokous"
            },
            {
                "word": "sun",
                "partOfSpeech": "noun",
                "translation": "aurinko"
            },
            {
                "word": "bald",
                "partOfSpeech": "adjective",
                "translation": "kalju"
            },
            {
                "word": "plant",
                "partOfSpeech": "noun",
                "translation": "kasvi"
            },
            {
                "word": "towel",
                "partOfSpeech": "noun",
                "translation": "pyyhe"
            },
            {
                "word": "regular",
                "partOfSpeech": "adjective",
                "translation": "säännöllinen"
            },
            {
                "word": "bone",
                "partOfSpeech": "noun",
                "translation": "luu"
            },
            {
                "word": "dig",
                "partOfSpeech": "verb",
                "translation": "kaivaa"
            },
            {
                "word": "fear",
                "partOfSpeech": "noun",
                "translation": "pelko"
            },
            {
                "word": "cancer",
                "partOfSpeech": "noun",
                "translation": "syöpä"
            },
            {
                "word": "discuss",
                "partOfSpeech": "verb",
                "translation": "keskustella"
            },
            {
                "word": "control",
                "partOfSpeech": "verb",
                "translation": "kontrolloida"
            },
            {
                "word": "advice",
                "partOfSpeech": "noun",
                "translation": "neuvo"
            },
            {
                "word": "center",
                "partOfSpeech": "noun",
                "translation": "keskikohta"
            },
            {
                "word": "apple",
                "partOfSpeech": "noun",
                "translation": "omena"
            },
            {
                "word": "holiday",
                "partOfSpeech": "noun",
                "translation": "loma"
            },
            {
                "word": "cash",
                "partOfSpeech": "noun",
                "translation": "käteinen"
            },
            {
                "word": "common",
                "partOfSpeech": "adjective",
                "translation": "yhteinen"
            },
            {
                "word": "crush",
                "partOfSpeech": "noun",
                "translation": "ihastus"
            },
            {
                "word": "mess",
                "partOfSpeech": "noun",
                "translation": "messi"
            },
            {
                "word": "peace",
                "partOfSpeech": "noun",
                "translation": "rauha"
            },
            {
                "word": "warn",
                "partOfSpeech": "verb",
                "translation": "varoittaa"
            },
            {
                "word": "adult",
                "partOfSpeech": "noun",
                "translation": "aikuinen"
            },
            {
                "word": "noise",
                "partOfSpeech": "noun",
                "translation": "melu"
            },
            {
                "word": "bread",
                "partOfSpeech": "noun",
                "translation": "leipä"
            },
            {
                "word": "type",
                "partOfSpeech": "noun",
                "translation": "kirjake"
            },
            {
                "word": "department",
                "partOfSpeech": "noun",
                "translation": "departementti"
            },
            {
                "word": "breathe",
                "partOfSpeech": "verb",
                "translation": "hengittää"
            },
            {
                "word": "classic",
                "partOfSpeech": "adjective",
                "translation": "klassinen"
            },
            {
                "word": "farm",
                "partOfSpeech": "noun",
                "translation": "maatila"
            },
            {
                "word": "disgusting",
                "partOfSpeech": "adjective",
                "translation": "vastenmielinen"
            },
            {
                "word": "tall",
                "partOfSpeech": "adjective",
                "translation": "korkea"
            },
            {
                "word": "taste",
                "partOfSpeech": "noun",
                "translation": "maku"
            },
            {
                "word": "replace",
                "partOfSpeech": "verb",
                "translation": "korvata"
            }
        ],
        "word_set19": [
            {
                "word": "baseball",
                "partOfSpeech": "noun",
                "translation": "baseball"
            },
            {
                "word": "comedy",
                "partOfSpeech": "noun",
                "translation": "komedia"
            },
            {
                "word": "introduce",
                "partOfSpeech": "verb",
                "translation": "esitellä"
            },
            {
                "word": "butter",
                "partOfSpeech": "noun",
                "translation": "voi"
            },
            {
                "word": "sweetheart",
                "partOfSpeech": "noun",
                "translation": "sydänkäpynen"
            },
            {
                "word": "jail",
                "partOfSpeech": "noun",
                "translation": "putka"
            },
            {
                "word": "study",
                "partOfSpeech": "verb",
                "translation": "päntätä"
            },
            {
                "word": "miracle",
                "partOfSpeech": "noun",
                "translation": "miraakkeli"
            },
            {
                "word": "golf",
                "partOfSpeech": "noun",
                "translation": "golf"
            },
            {
                "word": "hook",
                "partOfSpeech": "verb",
                "translation": "kytkeä"
            },
            {
                "word": "stare",
                "partOfSpeech": "verb",
                "translation": "tuijottaa"
            },
            {
                "word": "flag",
                "partOfSpeech": "noun",
                "translation": "lippu"
            },
            {
                "word": "roommate",
                "partOfSpeech": "noun",
                "translation": "kämppis"
            },
            {
                "word": "ship",
                "partOfSpeech": "noun",
                "translation": "laiva"
            },
            {
                "word": "wood",
                "partOfSpeech": "noun",
                "translation": "puu"
            },
            {
                "word": "actor",
                "partOfSpeech": "noun",
                "translation": "näyttelijä"
            },
            {
                "word": "break",
                "partOfSpeech": "noun",
                "translation": "tauko"
            },
            {
                "word": "prize",
                "partOfSpeech": "noun",
                "translation": "palkinto"
            },
            {
                "word": "corner",
                "partOfSpeech": "noun",
                "translation": "nurkka"
            },
            {
                "word": "sneak",
                "partOfSpeech": "verb",
                "translation": "hiipiä"
            },
            {
                "word": "piss",
                "partOfSpeech": "verb",
                "translation": "kusta"
            },
            {
                "word": "pocket",
                "partOfSpeech": "noun",
                "translation": "tasku"
            },
            {
                "word": "queen",
                "partOfSpeech": "noun",
                "translation": "kuningatar"
            },
            {
                "word": "tear",
                "partOfSpeech": "verb",
                "translation": "repiä"
            },
            {
                "word": "lay",
                "partOfSpeech": "verb",
                "translation": "pöydätä"
            },
            {
                "word": "pressure",
                "partOfSpeech": "noun",
                "translation": "paine"
            },
            {
                "word": "rip",
                "partOfSpeech": "verb",
                "translation": "haljeta"
            },
            {
                "word": "assistant",
                "partOfSpeech": "noun",
                "translation": "avustaja"
            },
            {
                "word": "judge",
                "partOfSpeech": "noun",
                "translation": "tuomari"
            },
            {
                "word": "impossible",
                "partOfSpeech": "adjective",
                "translation": "mahdoton"
            },
            {
                "word": "square",
                "partOfSpeech": "noun",
                "translation": "neliö"
            },
            {
                "word": "left",
                "partOfSpeech": "noun",
                "translation": "lyly"
            },
            {
                "word": "grandma",
                "partOfSpeech": "noun",
                "translation": "mummu"
            },
            {
                "word": "pal",
                "partOfSpeech": "noun",
                "translation": "kaveri"
            },
            {
                "word": "smile",
                "partOfSpeech": "verb",
                "translation": "hymyillä"
            },
            {
                "word": "speech",
                "partOfSpeech": "noun",
                "translation": "puhe"
            },
            {
                "word": "handsome",
                "partOfSpeech": "adjective",
                "translation": "komea"
            },
            {
                "word": "safety",
                "partOfSpeech": "noun",
                "translation": "turvallisuus"
            },
            {
                "word": "test",
                "partOfSpeech": "verb",
                "translation": "testata"
            },
            {
                "word": "community",
                "partOfSpeech": "noun",
                "translation": "yhteisö"
            }
        ],
        "word_set20": [
            {
                "word": "beach",
                "partOfSpeech": "noun",
                "translation": "ranta"
            },
            {
                "word": "gym",
                "partOfSpeech": "noun",
                "translation": "kuntosali"
            },
            {
                "word": "disease",
                "partOfSpeech": "noun",
                "translation": "tauti"
            },
            {
                "word": "paint",
                "partOfSpeech": "verb",
                "translation": "maalata"
            },
            {
                "word": "pack",
                "partOfSpeech": "verb",
                "translation": "pakata"
            },
            {
                "word": "customer",
                "partOfSpeech": "noun",
                "translation": "asiakas"
            },
            {
                "word": "healthy",
                "partOfSpeech": "adjective",
                "translation": "terve"
            },
            {
                "word": "invent",
                "partOfSpeech": "verb",
                "translation": "keksiä"
            },
            {
                "word": "princess",
                "partOfSpeech": "noun",
                "translation": "prinsessa"
            },
            {
                "word": "blind",
                "partOfSpeech": "adjective",
                "translation": "sokea"
            },
            {
                "word": "solve",
                "partOfSpeech": "verb",
                "translation": "ratkaista"
            },
            {
                "word": "study",
                "partOfSpeech": "noun",
                "translation": "opiskelu"
            },
            {
                "word": "sweater",
                "partOfSpeech": "noun",
                "translation": "svetari"
            },
            {
                "word": "wet",
                "partOfSpeech": "adjective",
                "translation": "märkä"
            },
            {
                "word": "attack",
                "partOfSpeech": "noun",
                "translation": "hyökkäys"
            },
            {
                "word": "beg",
                "partOfSpeech": "verb",
                "translation": "kerjätä"
            },
            {
                "word": "sugar",
                "partOfSpeech": "noun",
                "translation": "sokeri"
            },
            {
                "word": "weekend",
                "partOfSpeech": "noun",
                "translation": "viikonloppu"
            },
            {
                "word": "sock",
                "partOfSpeech": "noun",
                "translation": "sukka"
            },
            {
                "word": "emergency",
                "partOfSpeech": "noun",
                "translation": "hätä"
            },
            {
                "word": "mood",
                "partOfSpeech": "noun",
                "translation": "tunnelma"
            },
            {
                "word": "peanut",
                "partOfSpeech": "noun",
                "translation": "maapähkinä"
            },
            {
                "word": "stage",
                "partOfSpeech": "noun",
                "translation": "näyttämö"
            },
            {
                "word": "tight",
                "partOfSpeech": "adjective",
                "translation": "tiukka"
            },
            {
                "word": "gum",
                "partOfSpeech": "noun",
                "translation": "ien"
            },
            {
                "word": "moon",
                "partOfSpeech": "noun",
                "translation": "kuu"
            },
            {
                "word": "nature",
                "partOfSpeech": "noun",
                "translation": "luonto"
            },
            {
                "word": "program",
                "partOfSpeech": "noun",
                "translation": "ohjelma"
            },
            {
                "word": "angel",
                "partOfSpeech": "noun",
                "translation": "enkeli"
            },
            {
                "word": "ghost",
                "partOfSpeech": "noun",
                "translation": "haamu"
            },
            {
                "word": "sauce",
                "partOfSpeech": "noun",
                "translation": "kastike"
            },
            {
                "word": "stomach",
                "partOfSpeech": "noun",
                "translation": "vatsa"
            },
            {
                "word": "block",
                "partOfSpeech": "noun",
                "translation": "esto"
            },
            {
                "word": "murder",
                "partOfSpeech": "noun",
                "translation": "murha"
            },
            {
                "word": "speed",
                "partOfSpeech": "noun",
                "translation": "nopeus"
            },
            {
                "word": "mix",
                "partOfSpeech": "verb",
                "translation": "sekoittaa"
            },
            {
                "word": "track",
                "partOfSpeech": "noun",
                "translation": "raide"
            },
            {
                "word": "society",
                "partOfSpeech": "noun",
                "translation": "yhteiskunta"
            },
            {
                "word": "difficult",
                "partOfSpeech": "adjective",
                "translation": "hankala"
            },
            {
                "word": "killer",
                "partOfSpeech": "noun",
                "translation": "tappaja"
            }
        ],
        "word_set21": [
            {
                "word": "lip",
                "partOfSpeech": "noun",
                "translation": "huuli"
            },
            {
                "word": "market",
                "partOfSpeech": "noun",
                "translation": "tori"
            },
            {
                "word": "goodness",
                "partOfSpeech": "noun",
                "translation": "hyvyys"
            },
            {
                "word": "pillow",
                "partOfSpeech": "noun",
                "translation": "tyyny"
            },
            {
                "word": "tie",
                "partOfSpeech": "verb",
                "translation": "solmia"
            },
            {
                "word": "arrive",
                "partOfSpeech": "verb",
                "translation": "saapua"
            },
            {
                "word": "slip",
                "partOfSpeech": "verb",
                "translation": "liukastua"
            },
            {
                "word": "belt",
                "partOfSpeech": "noun",
                "translation": "vyö"
            },
            {
                "word": "museum",
                "partOfSpeech": "noun",
                "translation": "museo"
            },
            {
                "word": "oil",
                "partOfSpeech": "noun",
                "translation": "öljy"
            },
            {
                "word": "press",
                "partOfSpeech": "verb",
                "translation": "painaa"
            },
            {
                "word": "respect",
                "partOfSpeech": "noun",
                "translation": "kunnioitus"
            },
            {
                "word": "airplane",
                "partOfSpeech": "noun",
                "translation": "lentsikka"
            },
            {
                "word": "airport",
                "partOfSpeech": "noun",
                "translation": "lentoasema"
            },
            {
                "word": "contest",
                "partOfSpeech": "noun",
                "translation": "kilpailu"
            },
            {
                "word": "fabulous",
                "partOfSpeech": "adjective",
                "translation": "satumainen"
            },
            {
                "word": "friendship",
                "partOfSpeech": "noun",
                "translation": "ystävyys"
            },
            {
                "word": "national",
                "partOfSpeech": "adjective",
                "translation": "valtakunnallinen"
            },
            {
                "word": "alien",
                "partOfSpeech": "noun",
                "translation": "alieni"
            },
            {
                "word": "dream",
                "partOfSpeech": "verb",
                "translation": "haaveilla"
            },
            {
                "word": "fool",
                "partOfSpeech": "noun",
                "translation": "hölmö"
            },
            {
                "word": "bless",
                "partOfSpeech": "verb",
                "translation": "siunata"
            },
            {
                "word": "swim",
                "partOfSpeech": "verb",
                "translation": "uida"
            },
            {
                "word": "fruit",
                "partOfSpeech": "noun",
                "translation": "hedelmä"
            },
            {
                "word": "roof",
                "partOfSpeech": "noun",
                "translation": "ulkokatto"
            },
            {
                "word": "theory",
                "partOfSpeech": "noun",
                "translation": "teoria"
            },
            {
                "word": "guilty",
                "partOfSpeech": "adjective",
                "translation": "syyllinen"
            },
            {
                "word": "potato",
                "partOfSpeech": "noun",
                "translation": "peruna"
            },
            {
                "word": "sound",
                "partOfSpeech": "noun",
                "translation": "ääni"
            },
            {
                "word": "uncomfortable",
                "partOfSpeech": "adjective",
                "translation": "epämukava"
            },
            {
                "word": "wrap",
                "partOfSpeech": "verb",
                "translation": "kääriä, kietaista"
            },
            {
                "word": "cheap",
                "partOfSpeech": "adjective",
                "translation": "halpa"
            },
            {
                "word": "interview",
                "partOfSpeech": "noun",
                "translation": "haastattelu"
            },
            {
                "word": "perform",
                "partOfSpeech": "verb",
                "translation": "suorittaa"
            },
            {
                "word": "tour",
                "partOfSpeech": "noun",
                "translation": "kiertue"
            },
            {
                "word": "treat",
                "partOfSpeech": "noun",
                "translation": "kepponen"
            },
            {
                "word": "awkward",
                "partOfSpeech": "adjective",
                "translation": "kiusallinen"
            },
            {
                "word": "expensive",
                "partOfSpeech": "adjective",
                "translation": "kallis"
            },
            {
                "word": "purse",
                "partOfSpeech": "noun",
                "translation": "massi"
            }
        ],
        "word_set22": [
            {
                "word": "charge",
                "partOfSpeech": "verb",
                "translation": "ladata"
            },
            {
                "word": "bra",
                "partOfSpeech": "noun",
                "translation": "liivit"
            },
            {
                "word": "brown",
                "partOfSpeech": "adjective",
                "translation": "ruskea"
            },
            {
                "word": "celebrity",
                "partOfSpeech": "noun",
                "translation": "julkkis"
            },
            {
                "word": "double",
                "partOfSpeech": "adjective",
                "translation": "kaksinkertainen"
            },
            {
                "word": "period",
                "partOfSpeech": "noun",
                "translation": "kuukautiset"
            },
            {
                "word": "rent",
                "partOfSpeech": "verb",
                "translation": "vuokrata"
            },
            {
                "word": "chip",
                "partOfSpeech": "noun",
                "translation": "sipsi"
            },
            {
                "word": "language",
                "partOfSpeech": "noun",
                "translation": "kieli"
            },
            {
                "word": "laundry",
                "partOfSpeech": "noun",
                "translation": "pyykki"
            },
            {
                "word": "social",
                "partOfSpeech": "adjective",
                "translation": "sosiaalinen"
            },
            {
                "word": "dress",
                "partOfSpeech": "noun",
                "translation": "mekko"
            },
            {
                "word": "soft",
                "partOfSpeech": "adjective",
                "translation": "pehmeä"
            },
            {
                "word": "apology",
                "partOfSpeech": "noun",
                "translation": "anteeksipyyntö"
            },
            {
                "word": "concert",
                "partOfSpeech": "noun",
                "translation": "konsertti"
            },
            {
                "word": "knife",
                "partOfSpeech": "noun",
                "translation": "veitsi"
            },
            {
                "word": "hilarious",
                "partOfSpeech": "adjective",
                "translation": "hulvaton"
            },
            {
                "word": "blanket",
                "partOfSpeech": "noun",
                "translation": "peitto"
            },
            {
                "word": "comic",
                "partOfSpeech": "adjective",
                "translation": "koominen"
            },
            {
                "word": "leader",
                "partOfSpeech": "noun",
                "translation": "johtaja"
            },
            {
                "word": "local",
                "partOfSpeech": "adjective",
                "translation": "paikallinen"
            },
            {
                "word": "neighborhood",
                "partOfSpeech": "noun",
                "translation": "naapurusto"
            },
            {
                "word": "trap",
                "partOfSpeech": "verb",
                "translation": "pyydystää"
            },
            {
                "word": "bury",
                "partOfSpeech": "verb",
                "translation": "haudata"
            },
            {
                "word": "whore",
                "partOfSpeech": "noun",
                "translation": "portto"
            },
            {
                "word": "cross",
                "partOfSpeech": "verb",
                "translation": "ylittää"
            },
            {
                "word": "tax",
                "partOfSpeech": "noun",
                "translation": "vero"
            },
            {
                "word": "bath",
                "partOfSpeech": "noun",
                "translation": "kylpy"
            },
            {
                "word": "receive",
                "partOfSpeech": "verb",
                "translation": "vastaanottaa"
            },
            {
                "word": "split",
                "partOfSpeech": "verb",
                "translation": "halkoa"
            },
            {
                "word": "soda",
                "partOfSpeech": "noun",
                "translation": "limsa"
            },
            {
                "word": "talent",
                "partOfSpeech": "noun",
                "translation": "talentti"
            },
            {
                "word": "account",
                "partOfSpeech": "noun",
                "translation": "tili"
            },
            {
                "word": "dessert",
                "partOfSpeech": "noun",
                "translation": "mehujää"
            },
            {
                "word": "report",
                "partOfSpeech": "verb",
                "translation": "ilmoittaa, raportoida"
            },
            {
                "word": "weak",
                "partOfSpeech": "adjective",
                "translation": "heikko"
            },
            {
                "word": "cheer",
                "partOfSpeech": "verb",
                "translation": "hurrata"
            },
            {
                "word": "move",
                "partOfSpeech": "noun",
                "translation": "muutto"
            },
            {
                "word": "support",
                "partOfSpeech": "verb",
                "translation": "kannattaa"
            }
        ],
        "word_set23": [
            {
                "word": "research",
                "partOfSpeech": "noun",
                "translation": "tutkimus"
            },
            {
                "word": "tongue",
                "partOfSpeech": "noun",
                "translation": "kieli"
            },
            {
                "word": "pill",
                "partOfSpeech": "noun",
                "translation": "tabletti"
            },
            {
                "word": "snake",
                "partOfSpeech": "noun",
                "translation": "käärme"
            },
            {
                "word": "license",
                "partOfSpeech": "noun",
                "translation": "lisenssi"
            },
            {
                "word": "nut",
                "partOfSpeech": "noun",
                "translation": "pähkinä"
            },
            {
                "word": "health",
                "partOfSpeech": "noun",
                "translation": "terveys"
            },
            {
                "word": "natural",
                "partOfSpeech": "adjective",
                "translation": "luonnollinen"
            },
            {
                "word": "gorgeous",
                "partOfSpeech": "adjective",
                "translation": "hulppea"
            },
            {
                "word": "steak",
                "partOfSpeech": "noun",
                "translation": "pihvi"
            },
            {
                "word": "vagina",
                "partOfSpeech": "noun",
                "translation": "emätin"
            },
            {
                "word": "audience",
                "partOfSpeech": "noun",
                "translation": "yleisö"
            },
            {
                "word": "dance",
                "partOfSpeech": "noun",
                "translation": "tanssi"
            },
            {
                "word": "score",
                "partOfSpeech": "noun",
                "translation": "pistemäärä"
            },
            {
                "word": "sue",
                "partOfSpeech": "verb",
                "translation": "haastaa oikeuteen"
            },
            {
                "word": "artist",
                "partOfSpeech": "noun",
                "translation": "taiteilija"
            },
            {
                "word": "attack",
                "partOfSpeech": "verb",
                "translation": "hyökätä"
            },
            {
                "word": "bean",
                "partOfSpeech": "noun",
                "translation": "papu"
            },
            {
                "word": "attractive",
                "partOfSpeech": "adjective",
                "translation": "viehättävä"
            },
            {
                "word": "breath",
                "partOfSpeech": "noun",
                "translation": "henki"
            },
            {
                "word": "cover",
                "partOfSpeech": "noun",
                "translation": "peite"
            },
            {
                "word": "empty",
                "partOfSpeech": "adjective",
                "translation": "tyhjä"
            },
            {
                "word": "lonely",
                "partOfSpeech": "adjective",
                "translation": "yksinäinen"
            },
            {
                "word": "painting",
                "partOfSpeech": "noun",
                "translation": "maalaus"
            },
            {
                "word": "army",
                "partOfSpeech": "noun",
                "translation": "armeija"
            },
            {
                "word": "avoid",
                "partOfSpeech": "verb",
                "translation": "välttää"
            },
            {
                "word": "gang",
                "partOfSpeech": "noun",
                "translation": "jengi"
            },
            {
                "word": "nerd",
                "partOfSpeech": "noun",
                "translation": "nörtti"
            },
            {
                "word": "slap",
                "partOfSpeech": "verb",
                "translation": "läimäistä"
            },
            {
                "word": "lesbian",
                "partOfSpeech": "noun",
                "translation": "lesbo"
            },
            {
                "word": "outfit",
                "partOfSpeech": "noun",
                "translation": "ulkoasu"
            },
            {
                "word": "adventure",
                "partOfSpeech": "noun",
                "translation": "seikkailu"
            },
            {
                "word": "devil",
                "partOfSpeech": "noun",
                "translation": "paholainen"
            },
            {
                "word": "liar",
                "partOfSpeech": "noun",
                "translation": "valehtelija"
            },
            {
                "word": "nurse",
                "partOfSpeech": "noun",
                "translation": "sairaanhoitaja"
            },
            {
                "word": "pot",
                "partOfSpeech": "noun",
                "translation": "pata"
            },
            {
                "word": "salesman",
                "partOfSpeech": "noun",
                "translation": "myyntimies"
            },
            {
                "word": "slow",
                "partOfSpeech": "adjective",
                "translation": "hidas"
            },
            {
                "word": "smile",
                "partOfSpeech": "noun",
                "translation": "hymy"
            },
            {
                "word": "wallet",
                "partOfSpeech": "noun",
                "translation": "lompakko"
            }
        ],
        "word_set24": [
            {
                "word": "commit",
                "partOfSpeech": "verb",
                "translation": "kommitoida"
            },
            {
                "word": "example",
                "partOfSpeech": "noun",
                "translation": "esimerkki"
            },
            {
                "word": "fake",
                "partOfSpeech": "verb",
                "translation": "feikata"
            },
            {
                "word": "obvious",
                "partOfSpeech": "adjective",
                "translation": "ilmiselvä"
            },
            {
                "word": "pirate",
                "partOfSpeech": "noun",
                "translation": "merirosvo"
            },
            {
                "word": "radio",
                "partOfSpeech": "noun",
                "translation": "radiolähetin"
            },
            {
                "word": "chase",
                "partOfSpeech": "verb",
                "translation": "ajaa takaa"
            },
            {
                "word": "familiar",
                "partOfSpeech": "adjective",
                "translation": "tuttu"
            },
            {
                "word": "homework",
                "partOfSpeech": "noun",
                "translation": "läksy"
            },
            {
                "word": "birth",
                "partOfSpeech": "noun",
                "translation": "syntyminen"
            },
            {
                "word": "favorite",
                "partOfSpeech": "noun",
                "translation": "favoriitti"
            },
            {
                "word": "rub",
                "partOfSpeech": "verb",
                "translation": "hankaantua"
            },
            {
                "word": "sky",
                "partOfSpeech": "noun",
                "translation": "taivas"
            },
            {
                "word": "coach",
                "partOfSpeech": "noun",
                "translation": "valmentaja"
            },
            {
                "word": "deliver",
                "partOfSpeech": "verb",
                "translation": "synnyttää"
            },
            {
                "word": "address",
                "partOfSpeech": "noun",
                "translation": "osoite"
            },
            {
                "word": "lift",
                "partOfSpeech": "verb",
                "translation": "nostaa"
            },
            {
                "word": "round",
                "partOfSpeech": "noun",
                "translation": "paisti"
            },
            {
                "word": "wish",
                "partOfSpeech": "noun",
                "translation": "toive"
            },
            {
                "word": "guard",
                "partOfSpeech": "noun",
                "translation": "vartija"
            },
            {
                "word": "contact",
                "partOfSpeech": "noun",
                "translation": "yhteydenotto"
            },
            {
                "word": "package",
                "partOfSpeech": "noun",
                "translation": "pakkaus"
            },
            {
                "word": "travel",
                "partOfSpeech": "verb",
                "translation": "matkailla"
            },
            {
                "word": "anniversary",
                "partOfSpeech": "noun",
                "translation": "vuosipäivä"
            },
            {
                "word": "cent",
                "partOfSpeech": "noun",
                "translation": "sentti"
            },
            {
                "word": "force",
                "partOfSpeech": "verb",
                "translation": "pakottaa"
            },
            {
                "word": "rest",
                "partOfSpeech": "verb",
                "translation": "levätä"
            },
            {
                "word": "spread",
                "partOfSpeech": "verb",
                "translation": "levitä"
            },
            {
                "word": "ocean",
                "partOfSpeech": "noun",
                "translation": "valtameri"
            },
            {
                "word": "wing",
                "partOfSpeech": "noun",
                "translation": "lokari"
            },
            {
                "word": "alcohol",
                "partOfSpeech": "noun",
                "translation": "alkoholi"
            },
            {
                "word": "crash",
                "partOfSpeech": "verb",
                "translation": "kolaroida"
            },
            {
                "word": "insurance",
                "partOfSpeech": "noun",
                "translation": "vakuutus"
            },
            {
                "word": "row",
                "partOfSpeech": "noun",
                "translation": "rivi"
            },
            {
                "word": "sight",
                "partOfSpeech": "noun",
                "translation": "näkö"
            },
            {
                "word": "trash",
                "partOfSpeech": "noun",
                "translation": "roskaväki"
            },
            {
                "word": "brave",
                "partOfSpeech": "adjective",
                "translation": "rohkea"
            },
            {
                "word": "climb",
                "partOfSpeech": "verb",
                "translation": "kiivetä"
            },
            {
                "word": "earn",
                "partOfSpeech": "verb",
                "translation": "ansaita"
            },
            {
                "word": "impress",
                "partOfSpeech": "verb",
                "translation": "imponoida"
            }
        ],
        "word_set25": [
            {
                "word": "league",
                "partOfSpeech": "noun",
                "translation": "liiga"
            },
            {
                "word": "waste",
                "partOfSpeech": "noun",
                "translation": "jäte"
            },
            {
                "word": "writer",
                "partOfSpeech": "noun",
                "translation": "kirjailija"
            },
            {
                "word": "crowd",
                "partOfSpeech": "noun",
                "translation": "väkijoukko"
            },
            {
                "word": "flip",
                "partOfSpeech": "verb",
                "translation": "pimahtaa"
            },
            {
                "word": "hug",
                "partOfSpeech": "noun",
                "translation": "halaus, halata"
            },
            {
                "word": "drag",
                "partOfSpeech": "verb",
                "translation": "raahata"
            },
            {
                "word": "opinion",
                "partOfSpeech": "noun",
                "translation": "mielipide"
            },
            {
                "word": "spit",
                "partOfSpeech": "verb",
                "translation": "sylkeä"
            },
            {
                "word": "complain",
                "partOfSpeech": "verb",
                "translation": "valitella"
            },
            {
                "word": "interest",
                "partOfSpeech": "noun",
                "translation": "mielenkiinto"
            },
            {
                "word": "mirror",
                "partOfSpeech": "noun",
                "translation": "kuvastin"
            },
            {
                "word": "stripper",
                "partOfSpeech": "noun",
                "translation": "strippari"
            },
            {
                "word": "subject",
                "partOfSpeech": "noun",
                "translation": "aihe"
            },
            {
                "word": "bright",
                "partOfSpeech": "adjective",
                "translation": "kirkas"
            },
            {
                "word": "design",
                "partOfSpeech": "verb",
                "translation": "suunnitella"
            },
            {
                "word": "kidney",
                "partOfSpeech": "noun",
                "translation": "munuainen"
            },
            {
                "word": "result",
                "partOfSpeech": "noun",
                "translation": "tulos"
            },
            {
                "word": "strike",
                "partOfSpeech": "noun",
                "translation": "lakko"
            },
            {
                "word": "corn",
                "partOfSpeech": "noun",
                "translation": "liikavarvas"
            },
            {
                "word": "correct",
                "partOfSpeech": "adjective",
                "translation": "korrekti"
            },
            {
                "word": "grandmother",
                "partOfSpeech": "noun",
                "translation": "isoäiti"
            },
            {
                "word": "nightmare",
                "partOfSpeech": "noun",
                "translation": "painajainen"
            },
            {
                "word": "yellow",
                "partOfSpeech": "adjective",
                "translation": "keltainen"
            },
            {
                "word": "rise",
                "partOfSpeech": "verb",
                "translation": "nousta"
            },
            {
                "word": "doughnut",
                "partOfSpeech": "noun",
                "translation": "donitsi"
            },
            {
                "word": "original",
                "partOfSpeech": "adjective",
                "translation": "alkuperäinen"
            },
            {
                "word": "position",
                "partOfSpeech": "noun",
                "translation": "virka"
            },
            {
                "word": "fool",
                "partOfSpeech": "verb",
                "translation": "narrata"
            },
            {
                "word": "annoy",
                "partOfSpeech": "verb",
                "translation": "Ärsyttää"
            },
            {
                "word": "can",
                "partOfSpeech": "noun",
                "translation": "tölkki"
            },
            {
                "word": "match",
                "partOfSpeech": "noun",
                "translation": "ottelu"
            },
            {
                "word": "play",
                "partOfSpeech": "noun",
                "translation": "näytelmä"
            },
            {
                "word": "traffic",
                "partOfSpeech": "noun",
                "translation": "liikenne"
            },
            {
                "word": "actual",
                "partOfSpeech": "adjective",
                "translation": "varsinainen"
            },
            {
                "word": "banana",
                "partOfSpeech": "noun",
                "translation": "banaani"
            },
            {
                "word": "conference",
                "partOfSpeech": "noun",
                "translation": "konferenssi"
            },
            {
                "word": "lake",
                "partOfSpeech": "noun",
                "translation": "järvi"
            },
            {
                "word": "medical",
                "partOfSpeech": "adjective",
                "translation": "lääketieteellinen"
            }
        ],
        "word_set26": [
            {
                "word": "medicine",
                "partOfSpeech": "noun",
                "translation": "lääke"
            },
            {
                "word": "pray",
                "partOfSpeech": "verb",
                "translation": "rukoilla"
            },
            {
                "word": "shave",
                "partOfSpeech": "verb",
                "translation": "ajaa partansa"
            },
            {
                "word": "bake",
                "partOfSpeech": "verb",
                "translation": "leipoa"
            },
            {
                "word": "option",
                "partOfSpeech": "noun",
                "translation": "optio"
            },
            {
                "word": "creepy",
                "partOfSpeech": "adjective",
                "translation": "karmiva"
            },
            {
                "word": "interrupt",
                "partOfSpeech": "verb",
                "translation": "keskeyttää"
            },
            {
                "word": "library",
                "partOfSpeech": "noun",
                "translation": "kirjasto"
            },
            {
                "word": "rude",
                "partOfSpeech": "adjective",
                "translation": "töykeä"
            },
            {
                "word": "advertisement",
                "partOfSpeech": "noun",
                "translation": "mainos"
            },
            {
                "word": "danger",
                "partOfSpeech": "noun",
                "translation": "vaara"
            },
            {
                "word": "master",
                "partOfSpeech": "noun",
                "translation": "isäntä"
            },
            {
                "word": "propose",
                "partOfSpeech": "verb",
                "translation": "kosia"
            },
            {
                "word": "darling",
                "partOfSpeech": "noun",
                "translation": "rakas"
            },
            {
                "word": "gather",
                "partOfSpeech": "verb",
                "translation": "kokoontua"
            },
            {
                "word": "support",
                "partOfSpeech": "noun",
                "translation": "kannatus"
            },
            {
                "word": "bubble",
                "partOfSpeech": "noun",
                "translation": "kupla"
            },
            {
                "word": "energy",
                "partOfSpeech": "noun",
                "translation": "energia"
            },
            {
                "word": "heavy",
                "partOfSpeech": "adjective",
                "translation": "painava"
            },
            {
                "word": "laser",
                "partOfSpeech": "noun",
                "translation": "laser"
            },
            {
                "word": "manage",
                "partOfSpeech": "verb",
                "translation": "suoriutua"
            },
            {
                "word": "network",
                "partOfSpeech": "noun",
                "translation": "verkosto"
            },
            {
                "word": "weapon",
                "partOfSpeech": "noun",
                "translation": "ase"
            },
            {
                "word": "copy",
                "partOfSpeech": "noun",
                "translation": "kopio"
            },
            {
                "word": "female",
                "partOfSpeech": "adjective",
                "translation": "naispuolinen"
            },
            {
                "word": "park",
                "partOfSpeech": "verb",
                "translation": "pysäköidä"
            },
            {
                "word": "religion",
                "partOfSpeech": "noun",
                "translation": "uskonto"
            },
            {
                "word": "snow",
                "partOfSpeech": "noun",
                "translation": "lumi"
            },
            {
                "word": "version",
                "partOfSpeech": "noun",
                "translation": "versio"
            },
            {
                "word": "bomb",
                "partOfSpeech": "noun",
                "translation": "pommi"
            },
            {
                "word": "clear",
                "partOfSpeech": "verb",
                "translation": "selkiytyä, selkeytyä"
            },
            {
                "word": "faith",
                "partOfSpeech": "noun",
                "translation": "usko"
            },
            {
                "word": "innocent",
                "partOfSpeech": "adjective",
                "translation": "viaton"
            },
            {
                "word": "remove",
                "partOfSpeech": "verb",
                "translation": "poistaa"
            },
            {
                "word": "survive",
                "partOfSpeech": "verb",
                "translation": "selviytyä"
            },
            {
                "word": "bee",
                "partOfSpeech": "noun",
                "translation": "mehiläinen"
            },
            {
                "word": "bride",
                "partOfSpeech": "noun",
                "translation": "morsian"
            },
            {
                "word": "cause",
                "partOfSpeech": "noun",
                "translation": "aiheuttaja"
            },
            {
                "word": "basketball",
                "partOfSpeech": "noun",
                "translation": "koripallo"
            }
        ],
        "word_set27": [
            {
                "word": "downtown",
                "partOfSpeech": "noun",
                "translation": "keskikaupunki"
            },
            {
                "word": "elephant",
                "partOfSpeech": "noun",
                "translation": "norsu"
            },
            {
                "word": "freak",
                "partOfSpeech": "noun",
                "translation": "kummajainen"
            },
            {
                "word": "wipe",
                "partOfSpeech": "verb",
                "translation": "pyyhkiä"
            },
            {
                "word": "bored",
                "partOfSpeech": "adjective",
                "translation": "ikävystynyt"
            },
            {
                "word": "bully",
                "partOfSpeech": "noun",
                "translation": "koulukiusaaja"
            },
            {
                "word": "clock",
                "partOfSpeech": "noun",
                "translation": "kello"
            },
            {
                "word": "massage",
                "partOfSpeech": "noun",
                "translation": "hieronta"
            },
            {
                "word": "shape",
                "partOfSpeech": "noun",
                "translation": "hahmo"
            },
            {
                "word": "skip",
                "partOfSpeech": "verb",
                "translation": "sivuuttaa"
            },
            {
                "word": "strike",
                "partOfSpeech": "verb",
                "translation": "iskeä"
            },
            {
                "word": "dry",
                "partOfSpeech": "adjective",
                "translation": "kuiva"
            },
            {
                "word": "remain",
                "partOfSpeech": "verb",
                "translation": "jäädä"
            },
            {
                "word": "style",
                "partOfSpeech": "noun",
                "translation": "tyyli"
            },
            {
                "word": "surgery",
                "partOfSpeech": "noun",
                "translation": "kirurgia"
            },
            {
                "word": "toe",
                "partOfSpeech": "noun",
                "translation": "varvas"
            },
            {
                "word": "yard",
                "partOfSpeech": "noun",
                "translation": "piha"
            },
            {
                "word": "brilliant",
                "partOfSpeech": "adjective",
                "translation": "briljantti"
            },
            {
                "word": "circle",
                "partOfSpeech": "noun",
                "translation": "ympyrä"
            },
            {
                "word": "duty",
                "partOfSpeech": "noun",
                "translation": "tullimaksu"
            },
            {
                "word": "focus",
                "partOfSpeech": "noun",
                "translation": "polttopiste"
            },
            {
                "word": "lover",
                "partOfSpeech": "noun",
                "translation": "rakastaja"
            },
            {
                "word": "midnight",
                "partOfSpeech": "noun",
                "translation": "keskiyö"
            },
            {
                "word": "describe",
                "partOfSpeech": "verb",
                "translation": "kuvailla"
            },
            {
                "word": "legal",
                "partOfSpeech": "adjective",
                "translation": "laillinen"
            },
            {
                "word": "powerful",
                "partOfSpeech": "adjective",
                "translation": "voimakas"
            },
            {
                "word": "series",
                "partOfSpeech": "noun",
                "translation": "sarja"
            },
            {
                "word": "wire",
                "partOfSpeech": "noun",
                "translation": "linjavika"
            },
            {
                "word": "candle",
                "partOfSpeech": "noun",
                "translation": "kynttilä"
            },
            {
                "word": "diaper",
                "partOfSpeech": "noun",
                "translation": "vaippa"
            },
            {
                "word": "direction",
                "partOfSpeech": "noun",
                "translation": "suunta"
            },
            {
                "word": "divorce",
                "partOfSpeech": "verb",
                "translation": "erota"
            },
            {
                "word": "plastic",
                "partOfSpeech": "noun",
                "translation": "muovi"
            },
            {
                "word": "responsibility",
                "partOfSpeech": "noun",
                "translation": "vastuu"
            },
            {
                "word": "starve",
                "partOfSpeech": "verb",
                "translation": "nälkiintyä"
            },
            {
                "word": "worker",
                "partOfSpeech": "noun",
                "translation": "työläinen"
            },
            {
                "word": "hope",
                "partOfSpeech": "noun",
                "translation": "toivo"
            },
            {
                "word": "separate",
                "partOfSpeech": "verb",
                "translation": "erottaa"
            },
            {
                "word": "emotional",
                "partOfSpeech": "adjective",
                "translation": "tunteellinen"
            },
            {
                "word": "pilot",
                "partOfSpeech": "noun",
                "translation": "lentäjä"
            }
        ],
        "word_set28": [
            {
                "word": "vampire",
                "partOfSpeech": "noun",
                "translation": "vampyyri"
            },
            {
                "word": "attitude",
                "partOfSpeech": "noun",
                "translation": "asenne"
            },
            {
                "word": "balloon",
                "partOfSpeech": "noun",
                "translation": "ilmapallo"
            },
            {
                "word": "exact",
                "partOfSpeech": "adjective",
                "translation": "täsmällinen"
            },
            {
                "word": "hip",
                "partOfSpeech": "noun",
                "translation": "lonkka"
            },
            {
                "word": "pet",
                "partOfSpeech": "noun",
                "translation": "lemmikki"
            },
            {
                "word": "announcement",
                "partOfSpeech": "noun",
                "translation": "julkistus"
            },
            {
                "word": "effect",
                "partOfSpeech": "noun",
                "translation": "tehoste"
            },
            {
                "word": "escape",
                "partOfSpeech": "verb",
                "translation": "karata"
            },
            {
                "word": "golden",
                "partOfSpeech": "adjective",
                "translation": "kultainen"
            },
            {
                "word": "nipple",
                "partOfSpeech": "noun",
                "translation": "nippa"
            },
            {
                "word": "rough",
                "partOfSpeech": "adjective",
                "translation": "karhea"
            },
            {
                "word": "stick",
                "partOfSpeech": "noun",
                "translation": "keppi"
            },
            {
                "word": "architect",
                "partOfSpeech": "noun",
                "translation": "arkkitehti"
            },
            {
                "word": "beauty",
                "partOfSpeech": "noun",
                "translation": "kauneus"
            },
            {
                "word": "official",
                "partOfSpeech": "adjective",
                "translation": "virallinen"
            },
            {
                "word": "practice",
                "partOfSpeech": "verb",
                "translation": "harjoittaa, praktiikka"
            },
            {
                "word": "bug",
                "partOfSpeech": "noun",
                "translation": "ötökkä"
            },
            {
                "word": "crack",
                "partOfSpeech": "verb",
                "translation": "raottaa"
            },
            {
                "word": "half",
                "partOfSpeech": "noun",
                "translation": "puolikas"
            },
            {
                "word": "smoke",
                "partOfSpeech": "noun",
                "translation": "savu"
            },
            {
                "word": "contract",
                "partOfSpeech": "noun",
                "translation": "sopimusasiakirja"
            },
            {
                "word": "scientist",
                "partOfSpeech": "noun",
                "translation": "tieteilijä"
            },
            {
                "word": "set",
                "partOfSpeech": "noun",
                "translation": "setti"
            },
            {
                "word": "shoulder",
                "partOfSpeech": "noun",
                "translation": "olkapää"
            },
            {
                "word": "successful",
                "partOfSpeech": "adjective",
                "translation": "menestynyt"
            },
            {
                "word": "degree",
                "partOfSpeech": "noun",
                "translation": "korkeakoulututkinto"
            },
            {
                "word": "fortune",
                "partOfSpeech": "noun",
                "translation": "tuuri"
            },
            {
                "word": "hit",
                "partOfSpeech": "noun",
                "translation": "osuma"
            },
            {
                "word": "invitation",
                "partOfSpeech": "noun",
                "translation": "kutsut"
            },
            {
                "word": "nail",
                "partOfSpeech": "verb",
                "translation": "naulata"
            },
            {
                "word": "professional",
                "partOfSpeech": "adjective",
                "translation": "ammattimainen"
            },
            {
                "word": "search",
                "partOfSpeech": "noun",
                "translation": "haku"
            },
            {
                "word": "train",
                "partOfSpeech": "verb",
                "translation": "harjoittaa"
            },
            {
                "word": "weather",
                "partOfSpeech": "noun",
                "translation": "sää"
            },
            {
                "word": "alarm",
                "partOfSpeech": "noun",
                "translation": "hälytys"
            },
            {
                "word": "nap",
                "partOfSpeech": "noun",
                "translation": "päiväunet"
            },
            {
                "word": "precious",
                "partOfSpeech": "adjective",
                "translation": "kallisarvoinen"
            },
            {
                "word": "product",
                "partOfSpeech": "noun",
                "translation": "tuote"
            }
        ],
        "word_set29": [
            {
                "word": "role",
                "partOfSpeech": "noun",
                "translation": "rooli"
            },
            {
                "word": "snack",
                "partOfSpeech": "noun",
                "translation": "välipala"
            },
            {
                "word": "sucker",
                "partOfSpeech": "noun",
                "translation": "imijä"
            },
            {
                "word": "tag",
                "partOfSpeech": "noun",
                "translation": "tagi"
            },
            {
                "word": "chew",
                "partOfSpeech": "verb",
                "translation": "pureksia"
            },
            {
                "word": "evidence",
                "partOfSpeech": "noun",
                "translation": "todiste"
            },
            {
                "word": "fantasy",
                "partOfSpeech": "noun",
                "translation": "fantasia"
            },
            {
                "word": "operation",
                "partOfSpeech": "noun",
                "translation": "operaatio"
            },
            {
                "word": "rain",
                "partOfSpeech": "noun",
                "translation": "vesisade"
            },
            {
                "word": "spin",
                "partOfSpeech": "verb",
                "translation": "kierähtää"
            },
            {
                "word": "throat",
                "partOfSpeech": "noun",
                "translation": "nielu"
            },
            {
                "word": "reality",
                "partOfSpeech": "noun",
                "translation": "todellisuus"
            },
            {
                "word": "victim",
                "partOfSpeech": "noun",
                "translation": "uhri"
            },
            {
                "word": "booze",
                "partOfSpeech": "noun",
                "translation": "brenkku"
            },
            {
                "word": "condom",
                "partOfSpeech": "noun",
                "translation": "kondomi"
            },
            {
                "word": "director",
                "partOfSpeech": "noun",
                "translation": "ohjaaja"
            },
            {
                "word": "hunt",
                "partOfSpeech": "verb",
                "translation": "metsästää"
            },
            {
                "word": "menu",
                "partOfSpeech": "noun",
                "translation": "ruokalista"
            },
            {
                "word": "mystery",
                "partOfSpeech": "noun",
                "translation": "mysteeri"
            },
            {
                "word": "regret",
                "partOfSpeech": "verb",
                "translation": "pahoitella"
            },
            {
                "word": "attract",
                "partOfSpeech": "verb",
                "translation": "viehättää"
            },
            {
                "word": "chest",
                "partOfSpeech": "noun",
                "translation": "arkku"
            },
            {
                "word": "dentist",
                "partOfSpeech": "noun",
                "translation": "hammaslääkäri"
            },
            {
                "word": "focus",
                "partOfSpeech": "verb",
                "translation": "keskittyä"
            },
            {
                "word": "illegal",
                "partOfSpeech": "adjective",
                "translation": "laiton"
            },
            {
                "word": "pencil",
                "partOfSpeech": "noun",
                "translation": "lyijykynä"
            },
            {
                "word": "sentence",
                "partOfSpeech": "noun",
                "translation": "tuomio"
            },
            {
                "word": "squeeze",
                "partOfSpeech": "verb",
                "translation": "puristaa"
            },
            {
                "word": "audition",
                "partOfSpeech": "noun",
                "translation": "koe-esiintyminen"
            },
            {
                "word": "lobster",
                "partOfSpeech": "noun",
                "translation": "hummeri"
            },
            {
                "word": "success",
                "partOfSpeech": "noun",
                "translation": "menestys"
            },
            {
                "word": "terrorist",
                "partOfSpeech": "noun",
                "translation": "terroristi"
            },
            {
                "word": "item",
                "partOfSpeech": "noun",
                "translation": "osio"
            },
            {
                "word": "recommend",
                "partOfSpeech": "verb",
                "translation": "suositella"
            },
            {
                "word": "lazy",
                "partOfSpeech": "adjective",
                "translation": "laiska"
            },
            {
                "word": "whale",
                "partOfSpeech": "noun",
                "translation": "valas"
            },
            {
                "word": "zone",
                "partOfSpeech": "noun",
                "translation": "vyöhyke"
            },
            {
                "word": "panic",
                "partOfSpeech": "verb",
                "translation": "panikoida"
            },
            {
                "word": "bachelor",
                "partOfSpeech": "noun",
                "translation": "poikamies"
            },
            {
                "word": "chain",
                "partOfSpeech": "noun",
                "translation": "ketju"
            }
        ],
        "word_set30": [
            {
                "word": "creature",
                "partOfSpeech": "noun",
                "translation": "otus"
            },
            {
                "word": "diamond",
                "partOfSpeech": "noun",
                "translation": "timantti"
            },
            {
                "word": "image",
                "partOfSpeech": "noun",
                "translation": "kuvausjoukko"
            },
            {
                "word": "parade",
                "partOfSpeech": "noun",
                "translation": "paraati"
            },
            {
                "word": "rocket",
                "partOfSpeech": "noun",
                "translation": "raketti"
            },
            {
                "word": "solution",
                "partOfSpeech": "noun",
                "translation": "ratkaisu"
            },
            {
                "word": "cable",
                "partOfSpeech": "noun",
                "translation": "kaapeli"
            },
            {
                "word": "culture",
                "partOfSpeech": "noun",
                "translation": "kulttuuri"
            },
            {
                "word": "garage",
                "partOfSpeech": "noun",
                "translation": "autotalli"
            },
            {
                "word": "male",
                "partOfSpeech": "adjective",
                "translation": "miespuolinen"
            },
            {
                "word": "revenge",
                "partOfSpeech": "noun",
                "translation": "kosto"
            },
            {
                "word": "shrimp",
                "partOfSpeech": "noun",
                "translation": "katkarapu"
            },
            {
                "word": "thin",
                "partOfSpeech": "adjective",
                "translation": "ohut"
            },
            {
                "word": "humiliate",
                "partOfSpeech": "verb",
                "translation": "nöyryyttää"
            },
            {
                "word": "locker",
                "partOfSpeech": "noun",
                "translation": "lukkokaappi"
            },
            {
                "word": "native",
                "partOfSpeech": "adjective",
                "translation": "natiivi"
            },
            {
                "word": "pony",
                "partOfSpeech": "noun",
                "translation": "poni"
            },
            {
                "word": "release",
                "partOfSpeech": "verb",
                "translation": "päästää"
            },
            {
                "word": "stone",
                "partOfSpeech": "noun",
                "translation": "kivi"
            },
            {
                "word": "advantage",
                "partOfSpeech": "noun",
                "translation": "etu"
            },
            {
                "word": "basket",
                "partOfSpeech": "noun",
                "translation": "kori"
            },
            {
                "word": "breakup",
                "partOfSpeech": "noun",
                "translation": "bänks"
            },
            {
                "word": "garden",
                "partOfSpeech": "noun",
                "translation": "puutarha"
            },
            {
                "word": "patient",
                "partOfSpeech": "noun",
                "translation": "potilas"
            },
            {
                "word": "pink",
                "partOfSpeech": "adjective",
                "translation": "vaaleanpunainen"
            },
            {
                "word": "represent",
                "partOfSpeech": "verb",
                "translation": "edustaa"
            },
            {
                "word": "treasure",
                "partOfSpeech": "noun",
                "translation": "aarre"
            },
            {
                "word": "amount",
                "partOfSpeech": "noun",
                "translation": "määrä"
            },
            {
                "word": "newspaper",
                "partOfSpeech": "noun",
                "translation": "aviisi"
            },
            {
                "word": "wind",
                "partOfSpeech": "noun",
                "translation": "tuuli"
            },
            {
                "word": "act",
                "partOfSpeech": "noun",
                "translation": "teko"
            },
            {
                "word": "champion",
                "partOfSpeech": "noun",
                "translation": "mestari"
            },
            {
                "word": "light",
                "partOfSpeech": "verb",
                "translation": "valaista"
            },
            {
                "word": "guitar",
                "partOfSpeech": "noun",
                "translation": "kitara"
            },
            {
                "word": "sensitive",
                "partOfSpeech": "adjective",
                "translation": "arkaluonteinen"
            },
            {
                "word": "heat",
                "partOfSpeech": "noun",
                "translation": "helle"
            },
            {
                "word": "string",
                "partOfSpeech": "noun",
                "translation": "naru"
            },
            {
                "word": "property",
                "partOfSpeech": "noun",
                "translation": "ominaisuus"
            },
            {
                "word": "skill",
                "partOfSpeech": "noun",
                "translation": "taito"
            },
            {
                "word": "walk",
                "partOfSpeech": "noun",
                "translation": "kävely"
            }
        ],
        "word_set31": [
            {
                "word": "lead",
                "partOfSpeech": "noun",
                "translation": "etumatka"
            },
            {
                "word": "pancake",
                "partOfSpeech": "noun",
                "translation": "pannari"
            },
            {
                "word": "slow",
                "partOfSpeech": "verb",
                "translation": "hidastaa"
            },
            {
                "word": "stranger",
                "partOfSpeech": "noun",
                "translation": "muukalainen"
            },
            {
                "word": "charity",
                "partOfSpeech": "noun",
                "translation": "hyväntekeväisyys"
            },
            {
                "word": "freedom",
                "partOfSpeech": "noun",
                "translation": "vapaus"
            },
            {
                "word": "pour",
                "partOfSpeech": "verb",
                "translation": "kaataa"
            },
            {
                "word": "tradition",
                "partOfSpeech": "noun",
                "translation": "perinne"
            },
            {
                "word": "beef",
                "partOfSpeech": "noun",
                "translation": "naudanliha"
            },
            {
                "word": "bite",
                "partOfSpeech": "noun",
                "translation": "puraisu"
            },
            {
                "word": "bullet",
                "partOfSpeech": "noun",
                "translation": "luoti"
            },
            {
                "word": "curious",
                "partOfSpeech": "adjective",
                "translation": "utelias"
            },
            {
                "word": "forest",
                "partOfSpeech": "noun",
                "translation": "metsä"
            },
            {
                "word": "odd",
                "partOfSpeech": "adjective",
                "translation": "kummallinen"
            },
            {
                "word": "repeat",
                "partOfSpeech": "verb",
                "translation": "toistaa"
            },
            {
                "word": "section",
                "partOfSpeech": "noun",
                "translation": "lohko"
            },
            {
                "word": "subway",
                "partOfSpeech": "noun",
                "translation": "metro"
            },
            {
                "word": "choke",
                "partOfSpeech": "verb",
                "translation": "tikahtua"
            },
            {
                "word": "cowboy",
                "partOfSpeech": "noun",
                "translation": "karjapaimen"
            },
            {
                "word": "dirt",
                "partOfSpeech": "noun",
                "translation": "lika"
            },
            {
                "word": "frog",
                "partOfSpeech": "noun",
                "translation": "sammakko"
            },
            {
                "word": "swallow",
                "partOfSpeech": "verb",
                "translation": "nielaista"
            },
            {
                "word": "bacon",
                "partOfSpeech": "noun",
                "translation": "pekoni"
            },
            {
                "word": "clever",
                "partOfSpeech": "adjective",
                "translation": "fiksu"
            },
            {
                "word": "competition",
                "partOfSpeech": "noun",
                "translation": "kisa"
            },
            {
                "word": "lick",
                "partOfSpeech": "verb",
                "translation": "nuolla"
            },
            {
                "word": "mission",
                "partOfSpeech": "noun",
                "translation": "missio"
            },
            {
                "word": "soap",
                "partOfSpeech": "noun",
                "translation": "saippua"
            },
            {
                "word": "tail",
                "partOfSpeech": "noun",
                "translation": "pyrstö"
            },
            {
                "word": "tattoo",
                "partOfSpeech": "noun",
                "translation": "tatuointi"
            },
            {
                "word": "bridge",
                "partOfSpeech": "noun",
                "translation": "silta"
            },
            {
                "word": "detail",
                "partOfSpeech": "noun",
                "translation": "yksityiskohta"
            },
            {
                "word": "diet",
                "partOfSpeech": "noun",
                "translation": "ruokavalio"
            },
            {
                "word": "insult",
                "partOfSpeech": "verb",
                "translation": "solvata"
            },
            {
                "word": "theme",
                "partOfSpeech": "noun",
                "translation": "teema"
            },
            {
                "word": "university",
                "partOfSpeech": "noun",
                "translation": "yliopisto"
            },
            {
                "word": "champagne",
                "partOfSpeech": "noun",
                "translation": "samppanja"
            },
            {
                "word": "charming",
                "partOfSpeech": "adjective",
                "translation": "ihastuttava"
            },
            {
                "word": "compare",
                "partOfSpeech": "verb",
                "translation": "verrata"
            },
            {
                "word": "map",
                "partOfSpeech": "noun",
                "translation": "kartta"
            }
        ],
        "word_set32": [
            {
                "word": "napkin",
                "partOfSpeech": "noun",
                "translation": "lautasliina"
            },
            {
                "word": "punch",
                "partOfSpeech": "noun",
                "translation": "nyrkinisku"
            },
            {
                "word": "challenge",
                "partOfSpeech": "verb",
                "translation": "haastaa"
            },
            {
                "word": "collect",
                "partOfSpeech": "verb",
                "translation": "kerätä"
            },
            {
                "word": "cupcake",
                "partOfSpeech": "noun",
                "translation": "kuppikakku"
            },
            {
                "word": "imagination",
                "partOfSpeech": "noun",
                "translation": "mielikuvitus"
            },
            {
                "word": "joke",
                "partOfSpeech": "verb",
                "translation": "pilailla, vitsailla"
            },
            {
                "word": "script",
                "partOfSpeech": "noun",
                "translation": "komentosarja"
            },
            {
                "word": "whip",
                "partOfSpeech": "verb",
                "translation": "ruoskia, piiskata"
            },
            {
                "word": "left",
                "partOfSpeech": "adjective",
                "translation": "vasen"
            },
            {
                "word": "benefit",
                "partOfSpeech": "noun",
                "translation": "etuus"
            },
            {
                "word": "book",
                "partOfSpeech": "verb",
                "translation": "buukata"
            },
            {
                "word": "citizen",
                "partOfSpeech": "noun",
                "translation": "kansalainen"
            },
            {
                "word": "fart",
                "partOfSpeech": "verb",
                "translation": "pieraista"
            },
            {
                "word": "junk",
                "partOfSpeech": "noun",
                "translation": "roju"
            },
            {
                "word": "magical",
                "partOfSpeech": "adjective",
                "translation": "maaginen"
            },
            {
                "word": "studio",
                "partOfSpeech": "noun",
                "translation": "studio"
            },
            {
                "word": "value",
                "partOfSpeech": "noun",
                "translation": "arvo"
            },
            {
                "word": "wise",
                "partOfSpeech": "adjective",
                "translation": "viisas"
            },
            {
                "word": "suicide",
                "partOfSpeech": "noun",
                "translation": "itsemurha"
            },
            {
                "word": "friendly",
                "partOfSpeech": "adjective",
                "translation": "ystävällinen"
            },
            {
                "word": "claim",
                "partOfSpeech": "verb",
                "translation": "väittää"
            },
            {
                "word": "complicate",
                "partOfSpeech": "verb",
                "translation": "hankaloittaa"
            },
            {
                "word": "generation",
                "partOfSpeech": "noun",
                "translation": "sukupolvi"
            },
            {
                "word": "grave",
                "partOfSpeech": "noun",
                "translation": "hauta"
            },
            {
                "word": "require",
                "partOfSpeech": "verb",
                "translation": "edellyttää"
            },
            {
                "word": "maid",
                "partOfSpeech": "noun",
                "translation": "palvelustyttö"
            },
            {
                "word": "moron",
                "partOfSpeech": "noun",
                "translation": "urpo"
            },
            {
                "word": "necessary",
                "partOfSpeech": "adjective",
                "translation": "tarpeellinen"
            },
            {
                "word": "oven",
                "partOfSpeech": "noun",
                "translation": "uuni"
            },
            {
                "word": "paint",
                "partOfSpeech": "noun",
                "translation": "maali"
            },
            {
                "word": "scratch",
                "partOfSpeech": "verb",
                "translation": "raapia"
            },
            {
                "word": "stain",
                "partOfSpeech": "noun",
                "translation": "tahra"
            },
            {
                "word": "adopt",
                "partOfSpeech": "verb",
                "translation": "adoptoida"
            },
            {
                "word": "brush",
                "partOfSpeech": "verb",
                "translation": "harjata"
            },
            {
                "word": "delivery",
                "partOfSpeech": "noun",
                "translation": "toimitus"
            },
            {
                "word": "disappear",
                "partOfSpeech": "verb",
                "translation": "kadota"
            },
            {
                "word": "elementary",
                "partOfSpeech": "adjective",
                "translation": "elementaarinen"
            }
        ],
        "word_set33": [
            {
                "word": "trap",
                "partOfSpeech": "noun",
                "translation": "pyydys"
            },
            {
                "word": "amazing",
                "partOfSpeech": "adjective",
                "translation": "hämmästyttävä"
            },
            {
                "word": "boot",
                "partOfSpeech": "noun",
                "translation": "saapas"
            },
            {
                "word": "connection",
                "partOfSpeech": "noun",
                "translation": "yhteys"
            },
            {
                "word": "eve",
                "partOfSpeech": "noun",
                "translation": "aatto"
            },
            {
                "word": "happiness",
                "partOfSpeech": "noun",
                "translation": "onni"
            },
            {
                "word": "lifetime",
                "partOfSpeech": "noun",
                "translation": "elinaika"
            },
            {
                "word": "quality",
                "partOfSpeech": "noun",
                "translation": "laatu"
            },
            {
                "word": "agreement",
                "partOfSpeech": "noun",
                "translation": "sopimus"
            },
            {
                "word": "argument",
                "partOfSpeech": "noun",
                "translation": "väittely"
            },
            {
                "word": "carpet",
                "partOfSpeech": "noun",
                "translation": "matto"
            },
            {
                "word": "crisis",
                "partOfSpeech": "noun",
                "translation": "kriisi"
            },
            {
                "word": "design",
                "partOfSpeech": "noun",
                "translation": "muotoilu"
            },
            {
                "word": "drawer",
                "partOfSpeech": "noun",
                "translation": "piirtäjä"
            },
            {
                "word": "loose",
                "partOfSpeech": "adjective",
                "translation": "irrallinen"
            },
            {
                "word": "refuse",
                "partOfSpeech": "verb",
                "translation": "kieltäytyä"
            },
            {
                "word": "risk",
                "partOfSpeech": "noun",
                "translation": "riski"
            },
            {
                "word": "selfish",
                "partOfSpeech": "adjective",
                "translation": "itsekäs"
            },
            {
                "word": "village",
                "partOfSpeech": "noun",
                "translation": "kylä"
            },
            {
                "word": "anger",
                "partOfSpeech": "noun",
                "translation": "viha"
            },
            {
                "word": "bingo",
                "partOfSpeech": "noun",
                "translation": "bingo"
            },
            {
                "word": "bunny",
                "partOfSpeech": "noun",
                "translation": "pupujussi"
            },
            {
                "word": "crawl",
                "partOfSpeech": "verb",
                "translation": "ryömiä"
            },
            {
                "word": "demand",
                "partOfSpeech": "verb",
                "translation": "vaatia"
            },
            {
                "word": "desperate",
                "partOfSpeech": "adjective",
                "translation": "epätoivoinen"
            },
            {
                "word": "elevator",
                "partOfSpeech": "noun",
                "translation": "hissi"
            },
            {
                "word": "goat",
                "partOfSpeech": "noun",
                "translation": "vuohi"
            },
            {
                "word": "murder",
                "partOfSpeech": "verb",
                "translation": "murhata"
            },
            {
                "word": "penny",
                "partOfSpeech": "noun",
                "translation": "killinki"
            },
            {
                "word": "beloved",
                "partOfSpeech": "adjective",
                "translation": "rakastettu"
            },
            {
                "word": "copy",
                "partOfSpeech": "verb",
                "translation": "kopioida"
            },
            {
                "word": "festival",
                "partOfSpeech": "noun",
                "translation": "festivaali"
            },
            {
                "word": "tennis",
                "partOfSpeech": "noun",
                "translation": "tennis"
            },
            {
                "word": "threaten",
                "partOfSpeech": "verb",
                "translation": "uhata"
            },
            {
                "word": "beginning",
                "partOfSpeech": "noun",
                "translation": "alku"
            },
            {
                "word": "cigar",
                "partOfSpeech": "noun",
                "translation": "sikari"
            },
            {
                "word": "dancer",
                "partOfSpeech": "noun",
                "translation": "tanssija"
            },
            {
                "word": "heck",
                "partOfSpeech": "noun",
                "translation": "halvattu"
            },
            {
                "word": "material",
                "partOfSpeech": "noun",
                "translation": "materiaali"
            },
            {
                "word": "chapter",
                "partOfSpeech": "noun",
                "translation": "tuomiokapituli"
            }
        ],
        "word_set34": [
            {
                "word": "chat",
                "partOfSpeech": "verb",
                "translation": "jutella"
            },
            {
                "word": "homeless",
                "partOfSpeech": "adjective",
                "translation": "asunnoton"
            },
            {
                "word": "mark",
                "partOfSpeech": "verb",
                "translation": "merkata"
            },
            {
                "word": "river",
                "partOfSpeech": "noun",
                "translation": "joki"
            },
            {
                "word": "shark",
                "partOfSpeech": "noun",
                "translation": "haikala"
            },
            {
                "word": "strength",
                "partOfSpeech": "noun",
                "translation": "vahvuus"
            },
            {
                "word": "ancient",
                "partOfSpeech": "adjective",
                "translation": "muinainen"
            },
            {
                "word": "collection",
                "partOfSpeech": "noun",
                "translation": "kokoelma"
            },
            {
                "word": "exercise",
                "partOfSpeech": "noun",
                "translation": "harjoitus"
            },
            {
                "word": "include",
                "partOfSpeech": "verb",
                "translation": "sisältää"
            },
            {
                "word": "muffin",
                "partOfSpeech": "noun",
                "translation": "muffini"
            },
            {
                "word": "offense",
                "partOfSpeech": "noun",
                "translation": "hyökkäys"
            },
            {
                "word": "screen",
                "partOfSpeech": "noun",
                "translation": "kuvaruutu"
            },
            {
                "word": "tomato",
                "partOfSpeech": "noun",
                "translation": "tomaatti"
            },
            {
                "word": "cafeteria",
                "partOfSpeech": "noun",
                "translation": "kahvio"
            },
            {
                "word": "crack",
                "partOfSpeech": "noun",
                "translation": "crack"
            },
            {
                "word": "supply",
                "partOfSpeech": "noun",
                "translation": "tarjonta"
            },
            {
                "word": "winter",
                "partOfSpeech": "noun",
                "translation": "talvi"
            },
            {
                "word": "tool",
                "partOfSpeech": "noun",
                "translation": "työkalu"
            },
            {
                "word": "bend",
                "partOfSpeech": "verb",
                "translation": "koukistaa"
            },
            {
                "word": "commitment",
                "partOfSpeech": "noun",
                "translation": "sitoutuminen"
            },
            {
                "word": "disturb",
                "partOfSpeech": "verb",
                "translation": "häiritä"
            },
            {
                "word": "fish",
                "partOfSpeech": "verb",
                "translation": "kalastaa"
            },
            {
                "word": "joy",
                "partOfSpeech": "noun",
                "translation": "ilo"
            },
            {
                "word": "presentation",
                "partOfSpeech": "noun",
                "translation": "esitys"
            },
            {
                "word": "tube",
                "partOfSpeech": "noun",
                "translation": "tuubi"
            },
            {
                "word": "being",
                "partOfSpeech": "noun",
                "translation": "olento"
            },
            {
                "word": "experiment",
                "partOfSpeech": "noun",
                "translation": "koe"
            },
            {
                "word": "jar",
                "partOfSpeech": "noun",
                "translation": "hillopurkki"
            },
            {
                "word": "mint",
                "partOfSpeech": "noun",
                "translation": "rahapaja"
            },
            {
                "word": "physical",
                "partOfSpeech": "adjective",
                "translation": "fyysinen"
            },
            {
                "word": "punish",
                "partOfSpeech": "verb",
                "translation": "rangaista"
            },
            {
                "word": "slut",
                "partOfSpeech": "noun",
                "translation": "lutka"
            },
            {
                "word": "twist",
                "partOfSpeech": "verb",
                "translation": "vääristellä"
            },
            {
                "word": "cap",
                "partOfSpeech": "noun",
                "translation": "lippis"
            },
            {
                "word": "inspire",
                "partOfSpeech": "verb",
                "translation": "inspiroida"
            },
            {
                "word": "main",
                "partOfSpeech": "adjective",
                "translation": "pääasiallinen"
            },
            {
                "word": "panda",
                "partOfSpeech": "noun",
                "translation": "panda"
            },
            {
                "word": "sink",
                "partOfSpeech": "verb",
                "translation": "upota"
            },
            {
                "word": "smooth",
                "partOfSpeech": "adjective",
                "translation": "sileä"
            }
        ],
        "word_set35": [
            {
                "word": "thumb",
                "partOfSpeech": "noun",
                "translation": "peukalo"
            },
            {
                "word": "witness",
                "partOfSpeech": "noun",
                "translation": "todistaja"
            },
            {
                "word": "abandon",
                "partOfSpeech": "verb",
                "translation": "luopua"
            },
            {
                "word": "affect",
                "partOfSpeech": "verb",
                "translation": "tehota"
            },
            {
                "word": "beard",
                "partOfSpeech": "noun",
                "translation": "parta"
            },
            {
                "word": "bucket",
                "partOfSpeech": "noun",
                "translation": "ämpäri"
            },
            {
                "word": "county",
                "partOfSpeech": "noun",
                "translation": "maakunta"
            },
            {
                "word": "poem",
                "partOfSpeech": "noun",
                "translation": "runo"
            },
            {
                "word": "reporter",
                "partOfSpeech": "noun",
                "translation": "reportteri"
            },
            {
                "word": "training",
                "partOfSpeech": "noun",
                "translation": "harjoitus"
            },
            {
                "word": "battery",
                "partOfSpeech": "noun",
                "translation": "patteri"
            },
            {
                "word": "deny",
                "partOfSpeech": "verb",
                "translation": "kiistää"
            },
            {
                "word": "forbid",
                "partOfSpeech": "verb",
                "translation": "kieltää"
            },
            {
                "word": "obsess",
                "partOfSpeech": "verb",
                "translation": "riivata"
            },
            {
                "word": "positive",
                "partOfSpeech": "adjective",
                "translation": "positiivinen"
            },
            {
                "word": "rob",
                "partOfSpeech": "verb",
                "translation": "rosvota, ryöstää, ryövätä"
            },
            {
                "word": "signal",
                "partOfSpeech": "noun",
                "translation": "signaali"
            },
            {
                "word": "solid",
                "partOfSpeech": "adjective",
                "translation": "kiinteä"
            },
            {
                "word": "website",
                "partOfSpeech": "noun",
                "translation": "nettisivusto"
            },
            {
                "word": "century",
                "partOfSpeech": "noun",
                "translation": "senturia"
            },
            {
                "word": "click",
                "partOfSpeech": "verb",
                "translation": "klikata"
            },
            {
                "word": "dump",
                "partOfSpeech": "noun",
                "translation": "kaadanta"
            },
            {
                "word": "effort",
                "partOfSpeech": "noun",
                "translation": "ponnistus"
            },
            {
                "word": "gate",
                "partOfSpeech": "noun",
                "translation": "portti"
            },
            {
                "word": "impression",
                "partOfSpeech": "noun",
                "translation": "vaikutelma"
            },
            {
                "word": "inappropriate",
                "partOfSpeech": "adjective",
                "translation": "asiaton"
            },
            {
                "word": "inspector",
                "partOfSpeech": "noun",
                "translation": "tarkastaja"
            },
            {
                "word": "statement",
                "partOfSpeech": "noun",
                "translation": "lausunto"
            },
            {
                "word": "thrill",
                "partOfSpeech": "verb",
                "translation": "sykähdyttää"
            },
            {
                "word": "wiener",
                "partOfSpeech": "noun",
                "translation": "nakki"
            },
            {
                "word": "challenge",
                "partOfSpeech": "noun",
                "translation": "haaste"
            },
            {
                "word": "grandfather",
                "partOfSpeech": "noun",
                "translation": "isoisä"
            },
            {
                "word": "producer",
                "partOfSpeech": "noun",
                "translation": "tuottaja"
            },
            {
                "word": "witch",
                "partOfSpeech": "noun",
                "translation": "noita-akka"
            },
            {
                "word": "appropriate",
                "partOfSpeech": "adjective",
                "translation": "asianmukainen"
            },
            {
                "word": "coincidence",
                "partOfSpeech": "noun",
                "translation": "yhteensattuma"
            },
            {
                "word": "furniture",
                "partOfSpeech": "noun",
                "translation": "kalusteet"
            },
            {
                "word": "laugh",
                "partOfSpeech": "noun",
                "translation": "naurahdus"
            }
        ],
        "word_set36": [
            {
                "word": "lemon",
                "partOfSpeech": "noun",
                "translation": "sitruuna"
            },
            {
                "word": "load",
                "partOfSpeech": "verb",
                "translation": "kuormata"
            },
            {
                "word": "mock",
                "partOfSpeech": "verb",
                "translation": "pilkata"
            },
            {
                "word": "physics",
                "partOfSpeech": "noun",
                "translation": "fysiikka"
            },
            {
                "word": "stock",
                "partOfSpeech": "noun",
                "translation": "varasto"
            },
            {
                "word": "storm",
                "partOfSpeech": "noun",
                "translation": "myrsky"
            },
            {
                "word": "wheelchair",
                "partOfSpeech": "noun",
                "translation": "pyörätuoli"
            },
            {
                "word": "announce",
                "partOfSpeech": "verb",
                "translation": "kuuluttaa"
            },
            {
                "word": "bagel",
                "partOfSpeech": "noun",
                "translation": "vesirinkeli"
            },
            {
                "word": "cocktail",
                "partOfSpeech": "noun",
                "translation": "cocktail"
            },
            {
                "word": "committee",
                "partOfSpeech": "noun",
                "translation": "komitea"
            },
            {
                "word": "crew",
                "partOfSpeech": "noun",
                "translation": "miehistö"
            },
            {
                "word": "file",
                "partOfSpeech": "noun",
                "translation": "tiedosto"
            },
            {
                "word": "haircut",
                "partOfSpeech": "noun",
                "translation": "tukanleikkuu"
            },
            {
                "word": "loss",
                "partOfSpeech": "noun",
                "translation": "kato"
            },
            {
                "word": "mark",
                "partOfSpeech": "noun",
                "translation": "merkki"
            },
            {
                "word": "salt",
                "partOfSpeech": "noun",
                "translation": "suola"
            },
            {
                "word": "tape",
                "partOfSpeech": "verb",
                "translation": "teipata"
            },
            {
                "word": "ex",
                "partOfSpeech": "noun",
                "translation": "eksä"
            },
            {
                "word": "grape",
                "partOfSpeech": "noun",
                "translation": "rypäle"
            },
            {
                "word": "makeup",
                "partOfSpeech": "noun",
                "translation": "meikki"
            },
            {
                "word": "nation",
                "partOfSpeech": "noun",
                "translation": "kansakunta"
            },
            {
                "word": "block",
                "partOfSpeech": "verb",
                "translation": "tukkia"
            },
            {
                "word": "childhood",
                "partOfSpeech": "noun",
                "translation": "lapsuus"
            },
            {
                "word": "cut",
                "partOfSpeech": "noun",
                "translation": "leikkaus"
            },
            {
                "word": "develop",
                "partOfSpeech": "verb",
                "translation": "kehittyä"
            },
            {
                "word": "race",
                "partOfSpeech": "verb",
                "translation": "kiitää"
            },
            {
                "word": "reference",
                "partOfSpeech": "noun",
                "translation": "viite"
            },
            {
                "word": "shorts",
                "partOfSpeech": "noun",
                "translation": "shortsit"
            },
            {
                "word": "talk",
                "partOfSpeech": "noun",
                "translation": "puhe"
            },
            {
                "word": "therapist",
                "partOfSpeech": "noun",
                "translation": "terapeutti"
            },
            {
                "word": "warm",
                "partOfSpeech": "verb",
                "translation": "lämmitä"
            },
            {
                "word": "accent",
                "partOfSpeech": "noun",
                "translation": "aksentti"
            },
            {
                "word": "avenue",
                "partOfSpeech": "noun",
                "translation": "kujanne"
            },
            {
                "word": "cloud",
                "partOfSpeech": "noun",
                "translation": "pilvi"
            },
            {
                "word": "distance",
                "partOfSpeech": "noun",
                "translation": "välimatka"
            },
            {
                "word": "exhaust",
                "partOfSpeech": "verb",
                "translation": "uuvuttaa"
            },
            {
                "word": "goal",
                "partOfSpeech": "noun",
                "translation": "päämäärä"
            },
            {
                "word": "roll",
                "partOfSpeech": "noun",
                "translation": "rulla"
            },
            {
                "word": "suggestion",
                "partOfSpeech": "noun",
                "translation": "ehdotus"
            }
        ],
        "word_set37": [
            {
                "word": "belief",
                "partOfSpeech": "noun",
                "translation": "uskomus"
            },
            {
                "word": "jury",
                "partOfSpeech": "noun",
                "translation": "raati"
            },
            {
                "word": "reservation",
                "partOfSpeech": "noun",
                "translation": "varaus"
            },
            {
                "word": "spider",
                "partOfSpeech": "noun",
                "translation": "hämähäkki"
            },
            {
                "word": "squirrel",
                "partOfSpeech": "noun",
                "translation": "orava"
            },
            {
                "word": "topic",
                "partOfSpeech": "noun",
                "translation": "aihe"
            },
            {
                "word": "uniform",
                "partOfSpeech": "noun",
                "translation": "virkapuku"
            },
            {
                "word": "violence",
                "partOfSpeech": "noun",
                "translation": "väkivalta"
            },
            {
                "word": "wide",
                "partOfSpeech": "adjective",
                "translation": "laaja"
            },
            {
                "word": "zoo",
                "partOfSpeech": "noun",
                "translation": "eläintarha"
            },
            {
                "word": "bullshit",
                "partOfSpeech": "noun",
                "translation": "paskapuhe"
            },
            {
                "word": "cruel",
                "partOfSpeech": "adjective",
                "translation": "julma"
            },
            {
                "word": "jeans",
                "partOfSpeech": "noun",
                "translation": "farkut"
            },
            {
                "word": "pile",
                "partOfSpeech": "noun",
                "translation": "pinkka"
            },
            {
                "word": "poison",
                "partOfSpeech": "noun",
                "translation": "myrkky"
            },
            {
                "word": "romance",
                "partOfSpeech": "noun",
                "translation": "romanssi"
            },
            {
                "word": "slave",
                "partOfSpeech": "noun",
                "translation": "orja"
            },
            {
                "word": "belly",
                "partOfSpeech": "noun",
                "translation": "maha"
            },
            {
                "word": "booth",
                "partOfSpeech": "noun",
                "translation": "koju"
            },
            {
                "word": "gentle",
                "partOfSpeech": "adjective",
                "translation": "hellävarainen"
            },
            {
                "word": "opera",
                "partOfSpeech": "noun",
                "translation": "ooppera"
            },
            {
                "word": "poster",
                "partOfSpeech": "noun",
                "translation": "juliste"
            },
            {
                "word": "sweep",
                "partOfSpeech": "verb",
                "translation": "lakaista"
            },
            {
                "word": "sword",
                "partOfSpeech": "noun",
                "translation": "miekka"
            },
            {
                "word": "ultimate",
                "partOfSpeech": "adjective",
                "translation": "perimmäinen"
            },
            {
                "word": "debate",
                "partOfSpeech": "noun",
                "translation": "intos"
            },
            {
                "word": "explode",
                "partOfSpeech": "verb",
                "translation": "räjähtää"
            },
            {
                "word": "float",
                "partOfSpeech": "verb",
                "translation": "kellua"
            },
            {
                "word": "kick",
                "partOfSpeech": "noun",
                "translation": "potku"
            },
            {
                "word": "poker",
                "partOfSpeech": "noun",
                "translation": "pokeri"
            },
            {
                "word": "pride",
                "partOfSpeech": "noun",
                "translation": "ylpeys"
            },
            {
                "word": "rain",
                "partOfSpeech": "verb",
                "translation": "sataa"
            },
            {
                "word": "rare",
                "partOfSpeech": "adjective",
                "translation": "harvinainen"
            },
            {
                "word": "title",
                "partOfSpeech": "noun",
                "translation": "titteli"
            },
            {
                "word": "vision",
                "partOfSpeech": "noun",
                "translation": "visio"
            },
            {
                "word": "wrestle",
                "partOfSpeech": "verb",
                "translation": "painia"
            },
            {
                "word": "column",
                "partOfSpeech": "noun",
                "translation": "sarake"
            },
            {
                "word": "connect",
                "partOfSpeech": "verb",
                "translation": "yhdistää"
            },
            {
                "word": "hockey",
                "partOfSpeech": "noun",
                "translation": "hockey"
            },
            {
                "word": "hook",
                "partOfSpeech": "noun",
                "translation": "koukku"
            }
        ],
        "word_set38": [
            {
                "word": "kidnap",
                "partOfSpeech": "verb",
                "translation": "kidnapata"
            },
            {
                "word": "painful",
                "partOfSpeech": "adjective",
                "translation": "kivulias"
            },
            {
                "word": "permission",
                "partOfSpeech": "noun",
                "translation": "lupa"
            },
            {
                "word": "prince",
                "partOfSpeech": "noun",
                "translation": "ruhtinas"
            },
            {
                "word": "process",
                "partOfSpeech": "noun",
                "translation": "prosessi"
            },
            {
                "word": "senator",
                "partOfSpeech": "noun",
                "translation": "senaattori"
            },
            {
                "word": "smash",
                "partOfSpeech": "verb",
                "translation": "nitistää"
            },
            {
                "word": "mean",
                "partOfSpeech": "adjective",
                "translation": "ilkeä"
            },
            {
                "word": "bat",
                "partOfSpeech": "noun",
                "translation": "lepakko"
            },
            {
                "word": "ceremony",
                "partOfSpeech": "noun",
                "translation": "seremonia"
            },
            {
                "word": "declare",
                "partOfSpeech": "verb",
                "translation": "julistautua"
            },
            {
                "word": "helpful",
                "partOfSpeech": "adjective",
                "translation": "avulias"
            },
            {
                "word": "iron",
                "partOfSpeech": "noun",
                "translation": "rauta"
            },
            {
                "word": "picture",
                "partOfSpeech": "verb",
                "translation": "kuvata"
            },
            {
                "word": "print",
                "partOfSpeech": "verb",
                "translation": "tulostaa"
            },
            {
                "word": "rope",
                "partOfSpeech": "noun",
                "translation": "köysi"
            },
            {
                "word": "sail",
                "partOfSpeech": "verb",
                "translation": "purjehtia"
            },
            {
                "word": "sleep",
                "partOfSpeech": "noun",
                "translation": "unihiekka"
            },
            {
                "word": "attend",
                "partOfSpeech": "verb",
                "translation": "osallistua"
            },
            {
                "word": "education",
                "partOfSpeech": "noun",
                "translation": "koulutus"
            },
            {
                "word": "flush",
                "partOfSpeech": "verb",
                "translation": "huuhdella"
            },
            {
                "word": "melt",
                "partOfSpeech": "verb",
                "translation": "sulaa"
            },
            {
                "word": "pardon",
                "partOfSpeech": "verb",
                "translation": "armahtaa"
            },
            {
                "word": "passion",
                "partOfSpeech": "noun",
                "translation": "intohimo"
            },
            {
                "word": "poop",
                "partOfSpeech": "verb",
                "translation": "kakkia"
            },
            {
                "word": "popcorn",
                "partOfSpeech": "noun",
                "translation": "paukkumaissi"
            },
            {
                "word": "pussy",
                "partOfSpeech": "noun",
                "translation": "pimppi"
            },
            {
                "word": "trick",
                "partOfSpeech": "verb",
                "translation": "huijata"
            },
            {
                "word": "zombie",
                "partOfSpeech": "noun",
                "translation": "zombi"
            },
            {
                "word": "ankle",
                "partOfSpeech": "noun",
                "translation": "nilkka"
            },
            {
                "word": "bail",
                "partOfSpeech": "verb",
                "translation": "äyskäröidä"
            },
            {
                "word": "bowling",
                "partOfSpeech": "noun",
                "translation": "keilailu"
            },
            {
                "word": "discount",
                "partOfSpeech": "noun",
                "translation": "alennus"
            },
            {
                "word": "entertainment",
                "partOfSpeech": "noun",
                "translation": "viihde"
            },
            {
                "word": "jazz",
                "partOfSpeech": "noun",
                "translation": "jatsi"
            },
            {
                "word": "kind",
                "partOfSpeech": "adjective",
                "translation": "kiltti"
            },
            {
                "word": "lion",
                "partOfSpeech": "noun",
                "translation": "jalopeura"
            },
            {
                "word": "match",
                "partOfSpeech": "verb",
                "translation": "täsmätä"
            },
            {
                "word": "prayer",
                "partOfSpeech": "noun",
                "translation": "rukoilija"
            },
            {
                "word": "stamp",
                "partOfSpeech": "noun",
                "translation": "leima"
            }
        ],
        "word_set39": [
            {
                "word": "creative",
                "partOfSpeech": "adjective",
                "translation": "luova"
            },
            {
                "word": "expression",
                "partOfSpeech": "noun",
                "translation": "ilmaisu"
            },
            {
                "word": "lock",
                "partOfSpeech": "noun",
                "translation": "lukko"
            },
            {
                "word": "negative",
                "partOfSpeech": "adjective",
                "translation": "negatiivinen"
            },
            {
                "word": "pickle",
                "partOfSpeech": "noun",
                "translation": "suolakurkku"
            },
            {
                "word": "stab",
                "partOfSpeech": "verb",
                "translation": "puukottaa"
            },
            {
                "word": "wave",
                "partOfSpeech": "verb",
                "translation": "heiluttaa"
            },
            {
                "word": "central",
                "partOfSpeech": "adjective",
                "translation": "keskinen"
            },
            {
                "word": "hamburger",
                "partOfSpeech": "noun",
                "translation": "hampurilainen"
            },
            {
                "word": "pudding",
                "partOfSpeech": "noun",
                "translation": "vanukas"
            },
            {
                "word": "slide",
                "partOfSpeech": "verb",
                "translation": "liukua"
            },
            {
                "word": "trophy",
                "partOfSpeech": "noun",
                "translation": "voitonmerkki"
            },
            {
                "word": "damage",
                "partOfSpeech": "noun",
                "translation": "vaurio"
            },
            {
                "word": "decent",
                "partOfSpeech": "adjective",
                "translation": "kelpo"
            },
            {
                "word": "engine",
                "partOfSpeech": "noun",
                "translation": "moottori"
            },
            {
                "word": "ketchup",
                "partOfSpeech": "noun",
                "translation": "ketsuppi"
            },
            {
                "word": "lawn",
                "partOfSpeech": "noun",
                "translation": "nurmikko"
            },
            {
                "word": "place",
                "partOfSpeech": "verb",
                "translation": "asettautua"
            },
            {
                "word": "routine",
                "partOfSpeech": "noun",
                "translation": "rutiini"
            },
            {
                "word": "sand",
                "partOfSpeech": "noun",
                "translation": "hiekka"
            },
            {
                "word": "stretch",
                "partOfSpeech": "verb",
                "translation": "venyttää"
            },
            {
                "word": "whack",
                "partOfSpeech": "verb",
                "translation": "humauttaa, mätkiä"
            },
            {
                "word": "bloody",
                "partOfSpeech": "adjective",
                "translation": "verinen"
            },
            {
                "word": "brand",
                "partOfSpeech": "noun",
                "translation": "tuotemerkki"
            },
            {
                "word": "budget",
                "partOfSpeech": "noun",
                "translation": "budjetti"
            },
            {
                "word": "cabin",
                "partOfSpeech": "noun",
                "translation": "hytti"
            },
            {
                "word": "determine",
                "partOfSpeech": "verb",
                "translation": "ottaa selvää"
            },
            {
                "word": "entertain",
                "partOfSpeech": "verb",
                "translation": "viihdyttää"
            },
            {
                "word": "helmet",
                "partOfSpeech": "noun",
                "translation": "kypärä"
            },
            {
                "word": "jackass",
                "partOfSpeech": "noun",
                "translation": "aasiori"
            },
            {
                "word": "media",
                "partOfSpeech": "noun",
                "translation": "media"
            },
            {
                "word": "motion",
                "partOfSpeech": "noun",
                "translation": "liike"
            },
            {
                "word": "poke",
                "partOfSpeech": "verb",
                "translation": "tökkiä"
            },
            {
                "word": "rule",
                "partOfSpeech": "verb",
                "translation": "hallita"
            },
            {
                "word": "teenager",
                "partOfSpeech": "noun",
                "translation": "teini-ikäinen"
            },
            {
                "word": "turtle",
                "partOfSpeech": "noun",
                "translation": "kilpikonna"
            },
            {
                "word": "visit",
                "partOfSpeech": "noun",
                "translation": "käynti"
            },
            {
                "word": "authority",
                "partOfSpeech": "noun",
                "translation": "auktoriteetti"
            },
            {
                "word": "bleed",
                "partOfSpeech": "verb",
                "translation": "ilmata"
            }
        ],
        "word_set40": [
            {
                "word": "comment",
                "partOfSpeech": "noun",
                "translation": "kommentti"
            },
            {
                "word": "compete",
                "partOfSpeech": "verb",
                "translation": "kilpailla"
            },
            {
                "word": "convention",
                "partOfSpeech": "noun",
                "translation": "konventio"
            },
            {
                "word": "defend",
                "partOfSpeech": "verb",
                "translation": "puolustaa"
            },
            {
                "word": "flash",
                "partOfSpeech": "noun",
                "translation": "väläys"
            },
            {
                "word": "hippie",
                "partOfSpeech": "noun",
                "translation": "hippi"
            },
            {
                "word": "inside",
                "partOfSpeech": "noun",
                "translation": "sisäpuoli"
            },
            {
                "word": "phase",
                "partOfSpeech": "noun",
                "translation": "momentti"
            },
            {
                "word": "puppet",
                "partOfSpeech": "noun",
                "translation": "sätkynukke"
            },
            {
                "word": "reveal",
                "partOfSpeech": "verb",
                "translation": "paljastaa"
            },
            {
                "word": "sharp",
                "partOfSpeech": "adjective",
                "translation": "terävä"
            },
            {
                "word": "wig",
                "partOfSpeech": "noun",
                "translation": "peruukki"
            },
            {
                "word": "command",
                "partOfSpeech": "noun",
                "translation": "komento"
            },
            {
                "word": "dolphin",
                "partOfSpeech": "noun",
                "translation": "delfiini"
            },
            {
                "word": "exit",
                "partOfSpeech": "noun",
                "translation": "uloskäynti"
            },
            {
                "word": "expert",
                "partOfSpeech": "noun",
                "translation": "asiantuntija"
            },
            {
                "word": "grand",
                "partOfSpeech": "adjective",
                "translation": "mahtava"
            },
            {
                "word": "heat",
                "partOfSpeech": "verb",
                "translation": "kuumentaa"
            },
            {
                "word": "industry",
                "partOfSpeech": "noun",
                "translation": "teollisuus"
            },
            {
                "word": "label",
                "partOfSpeech": "noun",
                "translation": "etiketti"
            },
            {
                "word": "limit",
                "partOfSpeech": "noun",
                "translation": "rajoitus"
            },
            {
                "word": "pump",
                "partOfSpeech": "verb",
                "translation": "pumpata"
            },
            {
                "word": "racist",
                "partOfSpeech": "adjective",
                "translation": "rasistinen"
            },
            {
                "word": "swing",
                "partOfSpeech": "noun",
                "translation": "swingi"
            },
            {
                "word": "comedian",
                "partOfSpeech": "noun",
                "translation": "koomikko"
            },
            {
                "word": "fork",
                "partOfSpeech": "noun",
                "translation": "haarukka"
            },
            {
                "word": "magician",
                "partOfSpeech": "noun",
                "translation": "maagikko"
            },
            {
                "word": "murderer",
                "partOfSpeech": "noun",
                "translation": "murhamies"
            },
            {
                "word": "pork",
                "partOfSpeech": "noun",
                "translation": "sianliha"
            },
            {
                "word": "soccer",
                "partOfSpeech": "noun",
                "translation": "jalkapalloilu"
            },
            {
                "word": "wave",
                "partOfSpeech": "noun",
                "translation": "aalto"
            },
            {
                "word": "access",
                "partOfSpeech": "noun",
                "translation": "pääsy"
            },
            {
                "word": "actress",
                "partOfSpeech": "noun",
                "translation": "näyttelijätär"
            },
            {
                "word": "backup",
                "partOfSpeech": "noun",
                "translation": "varmuuskopio"
            },
            {
                "word": "behave",
                "partOfSpeech": "verb",
                "translation": "käyttäytyä"
            },
            {
                "word": "encourage",
                "partOfSpeech": "verb",
                "translation": "kannustaa"
            },
            {
                "word": "flirt",
                "partOfSpeech": "verb",
                "translation": "flirttailla"
            },
            {
                "word": "handicap",
                "partOfSpeech": "noun",
                "translation": "vamma"
            },
            {
                "word": "hose",
                "partOfSpeech": "noun",
                "translation": "letku"
            },
            {
                "word": "incident",
                "partOfSpeech": "noun",
                "translation": "selkkaus"
            }
        ],
        "word_set41": [
            {
                "word": "lost",
                "partOfSpeech": "adjective",
                "translation": "hävinnyt"
            },
            {
                "word": "occasion",
                "partOfSpeech": "noun",
                "translation": "tilaisuus"
            },
            {
                "word": "route",
                "partOfSpeech": "noun",
                "translation": "reitti"
            },
            {
                "word": "confess",
                "partOfSpeech": "verb",
                "translation": "tunnustaa"
            },
            {
                "word": "drown",
                "partOfSpeech": "verb",
                "translation": "hukkua"
            },
            {
                "word": "environment",
                "partOfSpeech": "noun",
                "translation": "ympäristö"
            },
            {
                "word": "legend",
                "partOfSpeech": "noun",
                "translation": "pyhimystarina"
            },
            {
                "word": "production",
                "partOfSpeech": "noun",
                "translation": "tuotanto"
            },
            {
                "word": "threat",
                "partOfSpeech": "noun",
                "translation": "uhka"
            },
            {
                "word": "capital",
                "partOfSpeech": "noun",
                "translation": "pääoma"
            },
            {
                "word": "cruise",
                "partOfSpeech": "noun",
                "translation": "risteily"
            },
            {
                "word": "experience",
                "partOfSpeech": "verb",
                "translation": "kokea"
            },
            {
                "word": "nonsense",
                "partOfSpeech": "noun",
                "translation": "hölynpöly"
            },
            {
                "word": "pepper",
                "partOfSpeech": "noun",
                "translation": "pippuri"
            },
            {
                "word": "phrase",
                "partOfSpeech": "noun",
                "translation": "fraasi"
            },
            {
                "word": "picnic",
                "partOfSpeech": "noun",
                "translation": "eväsretki"
            },
            {
                "word": "privacy",
                "partOfSpeech": "noun",
                "translation": "yksityisyys"
            },
            {
                "word": "self",
                "partOfSpeech": "noun",
                "translation": "itse"
            },
            {
                "word": "shitty",
                "partOfSpeech": "adjective",
                "translation": "paskamainen"
            },
            {
                "word": "smell",
                "partOfSpeech": "noun",
                "translation": "haju"
            },
            {
                "word": "attach",
                "partOfSpeech": "verb",
                "translation": "kiinnittäytyä"
            },
            {
                "word": "coma",
                "partOfSpeech": "noun",
                "translation": "kooma"
            },
            {
                "word": "earring",
                "partOfSpeech": "noun",
                "translation": "korvakoru"
            },
            {
                "word": "fear",
                "partOfSpeech": "verb",
                "translation": "pelätä"
            },
            {
                "word": "ham",
                "partOfSpeech": "noun",
                "translation": "kinkku"
            },
            {
                "word": "pronounce",
                "partOfSpeech": "verb",
                "translation": "ääntää"
            },
            {
                "word": "sample",
                "partOfSpeech": "noun",
                "translation": "otos"
            },
            {
                "word": "victory",
                "partOfSpeech": "noun",
                "translation": "voitto"
            },
            {
                "word": "depressed",
                "partOfSpeech": "adjective",
                "translation": "masentunut"
            },
            {
                "word": "drama",
                "partOfSpeech": "noun",
                "translation": "draama"
            },
            {
                "word": "explanation",
                "partOfSpeech": "noun",
                "translation": "selitys"
            },
            {
                "word": "fate",
                "partOfSpeech": "noun",
                "translation": "sallimus"
            },
            {
                "word": "particular",
                "partOfSpeech": "adjective",
                "translation": "erinäinen"
            },
            {
                "word": "search",
                "partOfSpeech": "verb",
                "translation": "etsiä"
            },
            {
                "word": "cold",
                "partOfSpeech": "noun",
                "translation": "vilu"
            },
            {
                "word": "liquor",
                "partOfSpeech": "noun",
                "translation": "viina"
            },
            {
                "word": "lower",
                "partOfSpeech": "verb",
                "translation": "laskea"
            },
            {
                "word": "miserable",
                "partOfSpeech": "adjective",
                "translation": "surkea"
            },
            {
                "word": "pin",
                "partOfSpeech": "noun",
                "translation": "nuppineula"
            },
            {
                "word": "satisfy",
                "partOfSpeech": "verb",
                "translation": "tyydyttää"
            }
        ],
        "word_set42": [
            {
                "word": "shout",
                "partOfSpeech": "verb",
                "translation": "huutaa"
            },
            {
                "word": "complaint",
                "partOfSpeech": "noun",
                "translation": "kantelu"
            },
            {
                "word": "cool",
                "partOfSpeech": "verb",
                "translation": "viilentää"
            },
            {
                "word": "donate",
                "partOfSpeech": "verb",
                "translation": "lahjoittaa"
            },
            {
                "word": "fur",
                "partOfSpeech": "noun",
                "translation": "turkis"
            },
            {
                "word": "imaginary",
                "partOfSpeech": "adjective",
                "translation": "kuvitteellinen"
            },
            {
                "word": "lemonade",
                "partOfSpeech": "noun",
                "translation": "limonadi"
            },
            {
                "word": "muscle",
                "partOfSpeech": "noun",
                "translation": "lihas"
            },
            {
                "word": "rent",
                "partOfSpeech": "noun",
                "translation": "ränttü"
            },
            {
                "word": "sweat",
                "partOfSpeech": "verb",
                "translation": "hikoilla"
            },
            {
                "word": "tiger",
                "partOfSpeech": "noun",
                "translation": "tiikeri"
            },
            {
                "word": "alcoholic",
                "partOfSpeech": "noun",
                "translation": "alkoholisti"
            },
            {
                "word": "arrest",
                "partOfSpeech": "noun",
                "translation": "pidätys"
            },
            {
                "word": "farmer",
                "partOfSpeech": "noun",
                "translation": "viljelijä"
            },
            {
                "word": "horn",
                "partOfSpeech": "noun",
                "translation": "torvi"
            },
            {
                "word": "human",
                "partOfSpeech": "noun",
                "translation": "inehmo"
            },
            {
                "word": "lamp",
                "partOfSpeech": "noun",
                "translation": "lamppu"
            },
            {
                "word": "orange",
                "partOfSpeech": "adjective",
                "translation": "oranssi"
            },
            {
                "word": "peach",
                "partOfSpeech": "noun",
                "translation": "persikka"
            },
            {
                "word": "roller",
                "partOfSpeech": "noun",
                "translation": "sininärhi"
            },
            {
                "word": "staff",
                "partOfSpeech": "noun",
                "translation": "henkilökunta"
            },
            {
                "word": "text",
                "partOfSpeech": "noun",
                "translation": "teksti"
            },
            {
                "word": "thief",
                "partOfSpeech": "noun",
                "translation": "varas"
            },
            {
                "word": "secret",
                "partOfSpeech": "adjective",
                "translation": "salainen"
            },
            {
                "word": "campus",
                "partOfSpeech": "noun",
                "translation": "kampus"
            },
            {
                "word": "cure",
                "partOfSpeech": "noun",
                "translation": "kuuri"
            },
            {
                "word": "dinosaur",
                "partOfSpeech": "noun",
                "translation": "dinosaurus"
            },
            {
                "word": "dry",
                "partOfSpeech": "verb",
                "translation": "kuivata"
            },
            {
                "word": "location",
                "partOfSpeech": "noun",
                "translation": "sijoituspaikka"
            },
            {
                "word": "open",
                "partOfSpeech": "adjective",
                "translation": "avoin"
            },
            {
                "word": "owner",
                "partOfSpeech": "noun",
                "translation": "omistaja"
            },
            {
                "word": "treatment",
                "partOfSpeech": "noun",
                "translation": "kohtelu"
            },
            {
                "word": "abortion",
                "partOfSpeech": "noun",
                "translation": "abortti"
            },
            {
                "word": "bark",
                "partOfSpeech": "verb",
                "translation": "haukkua"
            },
            {
                "word": "bartender",
                "partOfSpeech": "noun",
                "translation": "baarimikko"
            },
            {
                "word": "brunch",
                "partOfSpeech": "noun",
                "translation": "brunssi"
            },
            {
                "word": "chaos",
                "partOfSpeech": "noun",
                "translation": "kaaos"
            },
            {
                "word": "chief",
                "partOfSpeech": "noun",
                "translation": "päällikkö"
            },
            {
                "word": "chop",
                "partOfSpeech": "noun",
                "translation": "kyljys"
            },
            {
                "word": "dust",
                "partOfSpeech": "noun",
                "translation": "pöly"
            }
        ],
        "word_set43": [
            {
                "word": "lottery",
                "partOfSpeech": "noun",
                "translation": "arvonta"
            },
            {
                "word": "musical",
                "partOfSpeech": "adjective",
                "translation": "musikaalinen"
            },
            {
                "word": "opening",
                "partOfSpeech": "noun",
                "translation": "avajaiset"
            },
            {
                "word": "personality",
                "partOfSpeech": "noun",
                "translation": "persoonallisuus"
            },
            {
                "word": "publish",
                "partOfSpeech": "verb",
                "translation": "julkaista"
            },
            {
                "word": "sausage",
                "partOfSpeech": "noun",
                "translation": "makkara"
            },
            {
                "word": "unfair",
                "partOfSpeech": "adjective",
                "translation": "epäreilu"
            },
            {
                "word": "violent",
                "partOfSpeech": "adjective",
                "translation": "väkivaltainen"
            },
            {
                "word": "wizard",
                "partOfSpeech": "noun",
                "translation": "velho"
            },
            {
                "word": "bush",
                "partOfSpeech": "noun",
                "translation": "puska"
            },
            {
                "word": "fold",
                "partOfSpeech": "verb",
                "translation": "taittaa"
            },
            {
                "word": "height",
                "partOfSpeech": "noun",
                "translation": "korkeus"
            },
            {
                "word": "pass",
                "partOfSpeech": "noun",
                "translation": "kulkulupa"
            },
            {
                "word": "punk",
                "partOfSpeech": "noun",
                "translation": "punkkari"
            },
            {
                "word": "shy",
                "partOfSpeech": "adjective",
                "translation": "ujo"
            },
            {
                "word": "cage",
                "partOfSpeech": "noun",
                "translation": "häkki"
            },
            {
                "word": "colonel",
                "partOfSpeech": "noun",
                "translation": "eversti"
            },
            {
                "word": "courage",
                "partOfSpeech": "noun",
                "translation": "rohkeus"
            },
            {
                "word": "cure",
                "partOfSpeech": "verb",
                "translation": "palvata"
            },
            {
                "word": "emotion",
                "partOfSpeech": "noun",
                "translation": "tunne"
            },
            {
                "word": "fence",
                "partOfSpeech": "noun",
                "translation": "aita"
            },
            {
                "word": "glue",
                "partOfSpeech": "noun",
                "translation": "liima"
            },
            {
                "word": "noodle",
                "partOfSpeech": "noun",
                "translation": "nuudeli"
            },
            {
                "word": "pole",
                "partOfSpeech": "noun",
                "translation": "tanko"
            },
            {
                "word": "refrigerator",
                "partOfSpeech": "noun",
                "translation": "jääkaappi"
            },
            {
                "word": "skull",
                "partOfSpeech": "noun",
                "translation": "pääkallo"
            },
            {
                "word": "taxi",
                "partOfSpeech": "noun",
                "translation": "taksi"
            },
            {
                "word": "touch",
                "partOfSpeech": "noun",
                "translation": "kosketus"
            },
            {
                "word": "airline",
                "partOfSpeech": "noun",
                "translation": "ilmailuyhtiö"
            },
            {
                "word": "background",
                "partOfSpeech": "noun",
                "translation": "tausta"
            },
            {
                "word": "cheek",
                "partOfSpeech": "noun",
                "translation": "poski"
            },
            {
                "word": "count",
                "partOfSpeech": "noun",
                "translation": "kreivi"
            },
            {
                "word": "expense",
                "partOfSpeech": "noun",
                "translation": "kustannus"
            },
            {
                "word": "ladder",
                "partOfSpeech": "noun",
                "translation": "tikkaat"
            },
            {
                "word": "mug",
                "partOfSpeech": "noun",
                "translation": "muki"
            },
            {
                "word": "nickname",
                "partOfSpeech": "noun",
                "translation": "lempinimi"
            },
            {
                "word": "pea",
                "partOfSpeech": "noun",
                "translation": "herne"
            },
            {
                "word": "principal",
                "partOfSpeech": "noun",
                "translation": "reksi"
            },
            {
                "word": "session",
                "partOfSpeech": "noun",
                "translation": "sessio"
            },
            {
                "word": "soldier",
                "partOfSpeech": "noun",
                "translation": "sotilas"
            }
        ],
        "word_set44": [
            {
                "word": "virgin",
                "partOfSpeech": "noun",
                "translation": "neitsyt"
            },
            {
                "word": "wander",
                "partOfSpeech": "verb",
                "translation": "kuljeskella"
            },
            {
                "word": "bump",
                "partOfSpeech": "noun",
                "translation": "muhkura"
            },
            {
                "word": "carrot",
                "partOfSpeech": "noun",
                "translation": "porkkana"
            },
            {
                "word": "chili",
                "partOfSpeech": "noun",
                "translation": "chilipaprika"
            },
            {
                "word": "circus",
                "partOfSpeech": "noun",
                "translation": "sirkus"
            },
            {
                "word": "former",
                "partOfSpeech": "adjective",
                "translation": "entinen"
            },
            {
                "word": "generous",
                "partOfSpeech": "adjective",
                "translation": "antelias"
            },
            {
                "word": "gesture",
                "partOfSpeech": "noun",
                "translation": "ele"
            },
            {
                "word": "promise",
                "partOfSpeech": "noun",
                "translation": "lupaus"
            },
            {
                "word": "prostitute",
                "partOfSpeech": "noun",
                "translation": "ilolintu"
            },
            {
                "word": "shelter",
                "partOfSpeech": "noun",
                "translation": "suoja"
            },
            {
                "word": "technology",
                "partOfSpeech": "noun",
                "translation": "teknologia"
            },
            {
                "word": "agent",
                "partOfSpeech": "noun",
                "translation": "agentti"
            },
            {
                "word": "ability",
                "partOfSpeech": "noun",
                "translation": "kyky"
            },
            {
                "word": "cherry",
                "partOfSpeech": "noun",
                "translation": "kirsikka"
            },
            {
                "word": "discussion",
                "partOfSpeech": "noun",
                "translation": "diskussio"
            },
            {
                "word": "documentary",
                "partOfSpeech": "noun",
                "translation": "dokumenttielokuva"
            },
            {
                "word": "invest",
                "partOfSpeech": "verb",
                "translation": "investoida"
            },
            {
                "word": "jet",
                "partOfSpeech": "noun",
                "translation": "gagaatti"
            },
            {
                "word": "knowledge",
                "partOfSpeech": "noun",
                "translation": "tieto"
            },
            {
                "word": "load",
                "partOfSpeech": "noun",
                "translation": "kuorma"
            },
            {
                "word": "offensive",
                "partOfSpeech": "adjective",
                "translation": "offensiivinen"
            },
            {
                "word": "singer",
                "partOfSpeech": "noun",
                "translation": "laulaja"
            },
            {
                "word": "specific",
                "partOfSpeech": "adjective",
                "translation": "tietty"
            },
            {
                "word": "sin",
                "partOfSpeech": "noun",
                "translation": "synti"
            },
            {
                "word": "grader",
                "partOfSpeech": "noun",
                "translation": "tiehöylä"
            },
            {
                "word": "ant",
                "partOfSpeech": "noun",
                "translation": "muurahainen"
            },
            {
                "word": "bull",
                "partOfSpeech": "noun",
                "translation": "sonni"
            },
            {
                "word": "cleaning",
                "partOfSpeech": "noun",
                "translation": "siivous"
            },
            {
                "word": "dork",
                "partOfSpeech": "noun",
                "translation": "dorka"
            },
            {
                "word": "dummy",
                "partOfSpeech": "noun",
                "translation": "mallinukke"
            },
            {
                "word": "helicopter",
                "partOfSpeech": "noun",
                "translation": "helikopteri"
            },
            {
                "word": "moustache",
                "partOfSpeech": "noun",
                "translation": "räkäjarrut"
            },
            {
                "word": "rate",
                "partOfSpeech": "noun",
                "translation": "aikapalkka"
            },
            {
                "word": "reject",
                "partOfSpeech": "verb",
                "translation": "hylätä"
            },
            {
                "word": "ski",
                "partOfSpeech": "verb",
                "translation": "hiihtää"
            },
            {
                "word": "spy",
                "partOfSpeech": "verb",
                "translation": "vakoilla"
            },
            {
                "word": "stress",
                "partOfSpeech": "noun",
                "translation": "stressi"
            },
            {
                "word": "therapy",
                "partOfSpeech": "noun",
                "translation": "terapia"
            }
        ],
        "word_set45": [
            {
                "word": "travel",
                "partOfSpeech": "noun",
                "translation": "matkustus"
            },
            {
                "word": "upper",
                "partOfSpeech": "adjective",
                "translation": "ylempi"
            },
            {
                "word": "sponge",
                "partOfSpeech": "noun",
                "translation": "sieni"
            },
            {
                "word": "assignment",
                "partOfSpeech": "noun",
                "translation": "toimeksianto"
            },
            {
                "word": "bounce",
                "partOfSpeech": "verb",
                "translation": "bounssata"
            },
            {
                "word": "branch",
                "partOfSpeech": "noun",
                "translation": "oksa"
            },
            {
                "word": "daily",
                "partOfSpeech": "adjective",
                "translation": "päivittäinen"
            },
            {
                "word": "dice",
                "partOfSpeech": "noun",
                "translation": "noppapeli"
            },
            {
                "word": "flatter",
                "partOfSpeech": "verb",
                "translation": "imarrella"
            },
            {
                "word": "form",
                "partOfSpeech": "verb",
                "translation": "muodostaa"
            },
            {
                "word": "fraud",
                "partOfSpeech": "noun",
                "translation": "petos"
            },
            {
                "word": "offer",
                "partOfSpeech": "noun",
                "translation": "tarjous"
            },
            {
                "word": "pit",
                "partOfSpeech": "noun",
                "translation": "monttu"
            },
            {
                "word": "status",
                "partOfSpeech": "noun",
                "translation": "status"
            },
            {
                "word": "stroke",
                "partOfSpeech": "noun",
                "translation": "aivoinfarkti"
            },
            {
                "word": "random",
                "partOfSpeech": "adjective",
                "translation": "sattumanvarainen"
            },
            {
                "word": "blond",
                "partOfSpeech": "adjective",
                "translation": "vaaleaverinen"
            },
            {
                "word": "cube",
                "partOfSpeech": "noun",
                "translation": "kuutio"
            },
            {
                "word": "alley",
                "partOfSpeech": "noun",
                "translation": "kuja"
            },
            {
                "word": "arrange",
                "partOfSpeech": "verb",
                "translation": "järjestää"
            },
            {
                "word": "ditch",
                "partOfSpeech": "verb",
                "translation": "ojittaa"
            },
            {
                "word": "drunk",
                "partOfSpeech": "adjective",
                "translation": "humalainen"
            },
            {
                "word": "edge",
                "partOfSpeech": "noun",
                "translation": "kulma"
            },
            {
                "word": "hostage",
                "partOfSpeech": "noun",
                "translation": "panttivanki"
            },
            {
                "word": "inform",
                "partOfSpeech": "verb",
                "translation": "informoida"
            },
            {
                "word": "likely",
                "partOfSpeech": "adjective",
                "translation": "todennäköinen"
            },
            {
                "word": "mask",
                "partOfSpeech": "noun",
                "translation": "maski"
            },
            {
                "word": "priest",
                "partOfSpeech": "noun",
                "translation": "pappi"
            },
            {
                "word": "shine",
                "partOfSpeech": "verb",
                "translation": "loistaa"
            },
            {
                "word": "shower",
                "partOfSpeech": "verb",
                "translation": "suihkuta"
            },
            {
                "word": "corporation",
                "partOfSpeech": "noun",
                "translation": "korporaatio"
            },
            {
                "word": "dental",
                "partOfSpeech": "adjective",
                "translation": "dentaali"
            },
            {
                "word": "engagement",
                "partOfSpeech": "noun",
                "translation": "kihlaus"
            },
            {
                "word": "ironic",
                "partOfSpeech": "adjective",
                "translation": "ironinen"
            },
            {
                "word": "piano",
                "partOfSpeech": "noun",
                "translation": "piano"
            },
            {
                "word": "scooter",
                "partOfSpeech": "noun",
                "translation": "vespa"
            },
            {
                "word": "silver",
                "partOfSpeech": "noun",
                "translation": "hopea"
            },
            {
                "word": "sort",
                "partOfSpeech": "verb",
                "translation": "lajitella"
            },
            {
                "word": "tragic",
                "partOfSpeech": "adjective",
                "translation": "traaginen"
            },
            {
                "word": "underpants",
                "partOfSpeech": "noun",
                "translation": "alushousut"
            }
        ],
        "word_set46": [
            {
                "word": "cabinet",
                "partOfSpeech": "noun",
                "translation": "kaappi"
            },
            {
                "word": "debt",
                "partOfSpeech": "noun",
                "translation": "velka"
            },
            {
                "word": "global",
                "partOfSpeech": "adjective",
                "translation": "globaali"
            },
            {
                "word": "kindergarten",
                "partOfSpeech": "noun",
                "translation": "lastentarha"
            },
            {
                "word": "mustard",
                "partOfSpeech": "noun",
                "translation": "sinappi"
            },
            {
                "word": "procedure",
                "partOfSpeech": "noun",
                "translation": "menettely"
            },
            {
                "word": "progress",
                "partOfSpeech": "noun",
                "translation": "edistys"
            },
            {
                "word": "scale",
                "partOfSpeech": "noun",
                "translation": "vaaka"
            },
            {
                "word": "select",
                "partOfSpeech": "verb",
                "translation": "valikoida"
            },
            {
                "word": "rib",
                "partOfSpeech": "noun",
                "translation": "kylki"
            },
            {
                "word": "armed",
                "partOfSpeech": "adjective",
                "translation": "aseistettu"
            },
            {
                "word": "backyard",
                "partOfSpeech": "noun",
                "translation": "takapiha"
            },
            {
                "word": "camp",
                "partOfSpeech": "verb",
                "translation": "leiriytyä"
            },
            {
                "word": "capture",
                "partOfSpeech": "verb",
                "translation": "kaapata"
            },
            {
                "word": "cart",
                "partOfSpeech": "noun",
                "translation": "kärry"
            },
            {
                "word": "casino",
                "partOfSpeech": "noun",
                "translation": "kasino"
            },
            {
                "word": "chop",
                "partOfSpeech": "verb",
                "translation": "pilkkoa"
            },
            {
                "word": "cleaner",
                "partOfSpeech": "noun",
                "translation": "siivooja"
            },
            {
                "word": "desert",
                "partOfSpeech": "noun",
                "translation": "aavikko"
            },
            {
                "word": "foreign",
                "partOfSpeech": "adjective",
                "translation": "ulkomaalainen"
            },
            {
                "word": "interview",
                "partOfSpeech": "verb",
                "translation": "haastatella"
            },
            {
                "word": "lean",
                "partOfSpeech": "verb",
                "translation": "nojata"
            },
            {
                "word": "louse",
                "partOfSpeech": "noun",
                "translation": "täi"
            },
            {
                "word": "march",
                "partOfSpeech": "verb",
                "translation": "marssia"
            },
            {
                "word": "novel",
                "partOfSpeech": "noun",
                "translation": "romaani"
            },
            {
                "word": "orange",
                "partOfSpeech": "noun",
                "translation": "appelsiini"
            },
            {
                "word": "sense",
                "partOfSpeech": "verb",
                "translation": "aistia"
            },
            {
                "word": "slice",
                "partOfSpeech": "noun",
                "translation": "siivu"
            },
            {
                "word": "weigh",
                "partOfSpeech": "verb",
                "translation": "punnita"
            },
            {
                "word": "shadow",
                "partOfSpeech": "noun",
                "translation": "vari"
            },
            {
                "word": "accomplish",
                "partOfSpeech": "verb",
                "translation": "saada aikaan"
            },
            {
                "word": "cast",
                "partOfSpeech": "verb",
                "translation": "valaa"
            },
            {
                "word": "curse",
                "partOfSpeech": "noun",
                "translation": "kirous"
            },
            {
                "word": "define",
                "partOfSpeech": "verb",
                "translation": "määritellä"
            },
            {
                "word": "double",
                "partOfSpeech": "verb",
                "translation": "kaksinkertaistaa"
            },
            {
                "word": "fever",
                "partOfSpeech": "noun",
                "translation": "kuume"
            },
            {
                "word": "gig",
                "partOfSpeech": "noun",
                "translation": "keikka"
            },
            {
                "word": "harassment",
                "partOfSpeech": "noun",
                "translation": "ahdistelu"
            },
            {
                "word": "intelligent",
                "partOfSpeech": "adjective",
                "translation": "älykäs"
            },
            {
                "word": "manner",
                "partOfSpeech": "noun",
                "translation": "käytöstapa"
            }
        ],
        "word_set47": [
            {
                "word": "marijuana",
                "partOfSpeech": "noun",
                "translation": "marihuana"
            },
            {
                "word": "operate",
                "partOfSpeech": "verb",
                "translation": "operoida"
            },
            {
                "word": "raise",
                "partOfSpeech": "noun",
                "translation": "korotus"
            },
            {
                "word": "raisin",
                "partOfSpeech": "noun",
                "translation": "rusina"
            },
            {
                "word": "religious",
                "partOfSpeech": "adjective",
                "translation": "uskonnollinen"
            },
            {
                "word": "slide",
                "partOfSpeech": "noun",
                "translation": "liuku"
            },
            {
                "word": "stinky",
                "partOfSpeech": "adjective",
                "translation": "haiseva"
            },
            {
                "word": "adult",
                "partOfSpeech": "adjective",
                "translation": "aikuinen"
            },
            {
                "word": "allergic",
                "partOfSpeech": "adjective",
                "translation": "allerginen"
            },
            {
                "word": "appearance",
                "partOfSpeech": "noun",
                "translation": "ulkomuoto"
            },
            {
                "word": "fireman",
                "partOfSpeech": "noun",
                "translation": "palosotilas"
            },
            {
                "word": "frame",
                "partOfSpeech": "noun",
                "translation": "kehys"
            },
            {
                "word": "hammer",
                "partOfSpeech": "noun",
                "translation": "vasara"
            },
            {
                "word": "naughty",
                "partOfSpeech": "adjective",
                "translation": "tuhma"
            },
            {
                "word": "salary",
                "partOfSpeech": "noun",
                "translation": "palkkaus"
            },
            {
                "word": "signature",
                "partOfSpeech": "noun",
                "translation": "allekirjoitus"
            },
            {
                "word": "bowl",
                "partOfSpeech": "verb",
                "translation": "keilata"
            },
            {
                "word": "border",
                "partOfSpeech": "noun",
                "translation": "raja"
            },
            {
                "word": "curtain",
                "partOfSpeech": "noun",
                "translation": "verho"
            },
            {
                "word": "defeat",
                "partOfSpeech": "verb",
                "translation": "kukistaa"
            },
            {
                "word": "desire",
                "partOfSpeech": "noun",
                "translation": "mielihalu"
            },
            {
                "word": "firework",
                "partOfSpeech": "noun",
                "translation": "ilotulite"
            },
            {
                "word": "habit",
                "partOfSpeech": "noun",
                "translation": "tottumus"
            },
            {
                "word": "lane",
                "partOfSpeech": "noun",
                "translation": "kaista"
            },
            {
                "word": "mighty",
                "partOfSpeech": "adjective",
                "translation": "mahdikas"
            },
            {
                "word": "nanny",
                "partOfSpeech": "noun",
                "translation": "lastenhoitaja"
            },
            {
                "word": "polite",
                "partOfSpeech": "adjective",
                "translation": "kohtelias"
            },
            {
                "word": "political",
                "partOfSpeech": "adjective",
                "translation": "poliittinen"
            },
            {
                "word": "tissue",
                "partOfSpeech": "noun",
                "translation": "nenäliina"
            },
            {
                "word": "triangle",
                "partOfSpeech": "noun",
                "translation": "kolmio"
            },
            {
                "word": "useless",
                "partOfSpeech": "adjective",
                "translation": "turha"
            },
            {
                "word": "visitor",
                "partOfSpeech": "noun",
                "translation": "vierailija"
            },
            {
                "word": "vodka",
                "partOfSpeech": "noun",
                "translation": "vodka"
            },
            {
                "word": "angle",
                "partOfSpeech": "noun",
                "translation": "kulma"
            },
            {
                "word": "anonymous",
                "partOfSpeech": "adjective",
                "translation": "anonyymi"
            },
            {
                "word": "calendar",
                "partOfSpeech": "noun",
                "translation": "kalenteri"
            },
            {
                "word": "dip",
                "partOfSpeech": "noun",
                "translation": "dippikastike"
            },
            {
                "word": "flat",
                "partOfSpeech": "adjective",
                "translation": "litteä"
            },
            {
                "word": "grand",
                "partOfSpeech": "noun",
                "translation": "tonni"
            },
            {
                "word": "identity",
                "partOfSpeech": "noun",
                "translation": "henkilöllisyys"
            }
        ],
        "word_set48": [
            {
                "word": "register",
                "partOfSpeech": "verb",
                "translation": "rekisteröidä"
            },
            {
                "word": "shocking",
                "partOfSpeech": "adjective",
                "translation": "järkyttävä"
            },
            {
                "word": "shopping",
                "partOfSpeech": "noun",
                "translation": "shoppailu"
            },
            {
                "word": "spoon",
                "partOfSpeech": "noun",
                "translation": "lusikka"
            },
            {
                "word": "strawberry",
                "partOfSpeech": "noun",
                "translation": "mansikka"
            },
            {
                "word": "teenage",
                "partOfSpeech": "adjective",
                "translation": "teiniikäinen"
            },
            {
                "word": "thick",
                "partOfSpeech": "adjective",
                "translation": "paksu"
            },
            {
                "word": "counter",
                "partOfSpeech": "noun",
                "translation": "laskuri"
            },
            {
                "word": "carnival",
                "partOfSpeech": "noun",
                "translation": "karnevaali"
            },
            {
                "word": "confirm",
                "partOfSpeech": "verb",
                "translation": "varmentaa"
            },
            {
                "word": "corpse",
                "partOfSpeech": "noun",
                "translation": "kalmo"
            },
            {
                "word": "feature",
                "partOfSpeech": "noun",
                "translation": "toiminto"
            },
            {
                "word": "firm",
                "partOfSpeech": "noun",
                "translation": "firma"
            },
            {
                "word": "fit",
                "partOfSpeech": "noun",
                "translation": "kohtaus"
            },
            {
                "word": "hill",
                "partOfSpeech": "noun",
                "translation": "kunnas"
            },
            {
                "word": "jam",
                "partOfSpeech": "noun",
                "translation": "hillo"
            },
            {
                "word": "local",
                "partOfSpeech": "noun",
                "translation": "paikallinen"
            },
            {
                "word": "party",
                "partOfSpeech": "verb",
                "translation": "bailata"
            },
            {
                "word": "printer",
                "partOfSpeech": "noun",
                "translation": "tulostin"
            },
            {
                "word": "sketch",
                "partOfSpeech": "noun",
                "translation": "luonnos"
            },
            {
                "word": "ski",
                "partOfSpeech": "noun",
                "translation": "suksi"
            },
            {
                "word": "steam",
                "partOfSpeech": "noun",
                "translation": "höyry"
            },
            {
                "word": "toothbrush",
                "partOfSpeech": "noun",
                "translation": "hammasharja"
            },
            {
                "word": "council",
                "partOfSpeech": "noun",
                "translation": "valtuusto"
            },
            {
                "word": "deck",
                "partOfSpeech": "noun",
                "translation": "pakka"
            },
            {
                "word": "dragon",
                "partOfSpeech": "noun",
                "translation": "lohikäärme"
            },
            {
                "word": "election",
                "partOfSpeech": "noun",
                "translation": "vaali"
            },
            {
                "word": "lack",
                "partOfSpeech": "noun",
                "translation": "vajaus"
            },
            {
                "word": "lawsuit",
                "partOfSpeech": "noun",
                "translation": "oikeusjuttu"
            },
            {
                "word": "mysterious",
                "partOfSpeech": "adjective",
                "translation": "salaperäinen"
            },
            {
                "word": "pleasant",
                "partOfSpeech": "adjective",
                "translation": "miellyttävä"
            },
            {
                "word": "pregnancy",
                "partOfSpeech": "noun",
                "translation": "raskaus"
            },
            {
                "word": "reward",
                "partOfSpeech": "noun",
                "translation": "palkkio"
            },
            {
                "word": "risk",
                "partOfSpeech": "verb",
                "translation": "vaarantaa"
            },
            {
                "word": "rose",
                "partOfSpeech": "noun",
                "translation": "ruusu"
            },
            {
                "word": "scientific",
                "partOfSpeech": "adjective",
                "translation": "tieteellinen"
            },
            {
                "word": "tune",
                "partOfSpeech": "noun",
                "translation": "vire"
            },
            {
                "word": "candidate",
                "partOfSpeech": "noun",
                "translation": "kokelas"
            },
            {
                "word": "economy",
                "partOfSpeech": "noun",
                "translation": "talous"
            },
            {
                "word": "fee",
                "partOfSpeech": "noun",
                "translation": "maksu"
            }
        ],
        "word_set49": [
            {
                "word": "flame",
                "partOfSpeech": "noun",
                "translation": "liekki"
            },
            {
                "word": "foundation",
                "partOfSpeech": "noun",
                "translation": "säätiö"
            },
            {
                "word": "joint",
                "partOfSpeech": "noun",
                "translation": "liitos"
            },
            {
                "word": "punishment",
                "partOfSpeech": "noun",
                "translation": "rangaistus"
            },
            {
                "word": "rally",
                "partOfSpeech": "noun",
                "translation": "ralli"
            },
            {
                "word": "reception",
                "partOfSpeech": "noun",
                "translation": "vastaanotto"
            },
            {
                "word": "request",
                "partOfSpeech": "noun",
                "translation": "pyyntö"
            },
            {
                "word": "resist",
                "partOfSpeech": "verb",
                "translation": "pullikoida"
            },
            {
                "word": "schedule",
                "partOfSpeech": "verb",
                "translation": "aikatauluttaa"
            },
            {
                "word": "shock",
                "partOfSpeech": "noun",
                "translation": "shokki"
            },
            {
                "word": "suspect",
                "partOfSpeech": "verb",
                "translation": "uumoilla"
            },
            {
                "word": "union",
                "partOfSpeech": "noun",
                "translation": "unioni"
            },
            {
                "word": "telephone",
                "partOfSpeech": "noun",
                "translation": "puhelin"
            },
            {
                "word": "accuse",
                "partOfSpeech": "verb",
                "translation": "syyllistää"
            },
            {
                "word": "badge",
                "partOfSpeech": "noun",
                "translation": "rintamerkki"
            },
            {
                "word": "barn",
                "partOfSpeech": "noun",
                "translation": "lato"
            },
            {
                "word": "catch",
                "partOfSpeech": "noun",
                "translation": "sieppaus"
            },
            {
                "word": "divide",
                "partOfSpeech": "verb",
                "translation": "jaotella"
            },
            {
                "word": "eternity",
                "partOfSpeech": "noun",
                "translation": "iankaikkisuus"
            },
            {
                "word": "hopeless",
                "partOfSpeech": "adjective",
                "translation": "lohduton"
            },
            {
                "word": "intervention",
                "partOfSpeech": "noun",
                "translation": "interventio"
            },
            {
                "word": "mattress",
                "partOfSpeech": "noun",
                "translation": "patja"
            },
            {
                "word": "millionaire",
                "partOfSpeech": "noun",
                "translation": "miljonääri"
            },
            {
                "word": "observe",
                "partOfSpeech": "verb",
                "translation": "havaita"
            },
            {
                "word": "speaker",
                "partOfSpeech": "noun",
                "translation": "kaiutin"
            },
            {
                "word": "stadium",
                "partOfSpeech": "noun",
                "translation": "stadion"
            },
            {
                "word": "standard",
                "partOfSpeech": "noun",
                "translation": "standardi"
            },
            {
                "word": "syndrome",
                "partOfSpeech": "noun",
                "translation": "oireyhtymä"
            },
            {
                "word": "unhappy",
                "partOfSpeech": "adjective",
                "translation": "onneton"
            },
            {
                "word": "will",
                "partOfSpeech": "noun",
                "translation": "tahto"
            },
            {
                "word": "youth",
                "partOfSpeech": "noun",
                "translation": "nuoruus"
            },
            {
                "word": "admire",
                "partOfSpeech": "verb",
                "translation": "ihastella"
            },
            {
                "word": "ambulance",
                "partOfSpeech": "noun",
                "translation": "ambulanssi"
            },
            {
                "word": "commission",
                "partOfSpeech": "noun",
                "translation": "provikka"
            },
            {
                "word": "crotch",
                "partOfSpeech": "noun",
                "translation": "haaraväli"
            },
            {
                "word": "deer",
                "partOfSpeech": "noun",
                "translation": "peura"
            },
            {
                "word": "fountain",
                "partOfSpeech": "noun",
                "translation": "suihkulähde"
            },
            {
                "word": "immigrant",
                "partOfSpeech": "noun",
                "translation": "maahanmuuttaja"
            },
            {
                "word": "injury",
                "partOfSpeech": "noun",
                "translation": "loukkaantuminen"
            },
            {
                "word": "journal",
                "partOfSpeech": "noun",
                "translation": "diaari"
            }
        ],
        "word_set50": [
            {
                "word": "launch",
                "partOfSpeech": "verb",
                "translation": "lanseerata"
            },
            {
                "word": "medal",
                "partOfSpeech": "noun",
                "translation": "mitali"
            },
            {
                "word": "mile",
                "partOfSpeech": "noun",
                "translation": "kilometri"
            },
            {
                "word": "plant",
                "partOfSpeech": "verb",
                "translation": "istuttaa"
            },
            {
                "word": "semester",
                "partOfSpeech": "noun",
                "translation": "alkupuolisko"
            },
            {
                "word": "worship",
                "partOfSpeech": "verb",
                "translation": "jumaloida"
            },
            {
                "word": "disco",
                "partOfSpeech": "noun",
                "translation": "disko"
            },
            {
                "word": "escape",
                "partOfSpeech": "noun",
                "translation": "pakeneminen"
            },
            {
                "word": "film",
                "partOfSpeech": "verb",
                "translation": "elokuvata"
            },
            {
                "word": "frustrate",
                "partOfSpeech": "verb",
                "translation": "turhauttaa"
            },
            {
                "word": "investment",
                "partOfSpeech": "noun",
                "translation": "panostus"
            },
            {
                "word": "loan",
                "partOfSpeech": "verb",
                "translation": "lainata"
            },
            {
                "word": "protest",
                "partOfSpeech": "verb",
                "translation": "protestoida"
            },
            {
                "word": "seal",
                "partOfSpeech": "verb",
                "translation": "sinetöidä"
            },
            {
                "word": "silent",
                "partOfSpeech": "adjective",
                "translation": "vaitelias"
            },
            {
                "word": "temperature",
                "partOfSpeech": "noun",
                "translation": "lämpötila"
            },
            {
                "word": "testicle",
                "partOfSpeech": "noun",
                "translation": "kives"
            },
            {
                "word": "typical",
                "partOfSpeech": "adjective",
                "translation": "tyypillinen"
            },
            {
                "word": "unusual",
                "partOfSpeech": "adjective",
                "translation": "epätavallinen"
            },
            {
                "word": "approach",
                "partOfSpeech": "verb",
                "translation": "lähestyä"
            },
            {
                "word": "fiance",
                "partOfSpeech": "noun",
                "translation": "morsian"
            },
            {
                "word": "measure",
                "partOfSpeech": "verb",
                "translation": "mitata"
            },
            {
                "word": "modern",
                "partOfSpeech": "adjective",
                "translation": "nykyaikainen"
            },
            {
                "word": "necklace",
                "partOfSpeech": "noun",
                "translation": "kaulakoru"
            },
            {
                "word": "orgasm",
                "partOfSpeech": "noun",
                "translation": "orgasmi"
            },
            {
                "word": "poetry",
                "partOfSpeech": "noun",
                "translation": "runous"
            },
            {
                "word": "reasonable",
                "partOfSpeech": "adjective",
                "translation": "järkevä"
            },
            {
                "word": "run",
                "partOfSpeech": "noun",
                "translation": "juoksu"
            },
            {
                "word": "shift",
                "partOfSpeech": "noun",
                "translation": "työvuoro"
            },
            {
                "word": "straighten",
                "partOfSpeech": "verb",
                "translation": "suoristaa"
            },
            {
                "word": "track",
                "partOfSpeech": "verb",
                "translation": "jäljittää"
            },
            {
                "word": "bench",
                "partOfSpeech": "noun",
                "translation": "penkki"
            },
            {
                "word": "blowjob",
                "partOfSpeech": "noun",
                "translation": "suihinotto"
            },
            {
                "word": "championship",
                "partOfSpeech": "noun",
                "translation": "mestaruusottelu"
            },
            {
                "word": "darkness",
                "partOfSpeech": "noun",
                "translation": "pimeys"
            },
            {
                "word": "diary",
                "partOfSpeech": "noun",
                "translation": "päivyri"
            },
            {
                "word": "figure",
                "partOfSpeech": "noun",
                "translation": "figuuri"
            },
            {
                "word": "guilt",
                "partOfSpeech": "noun",
                "translation": "syyllisyys"
            },
            {
                "word": "intimate",
                "partOfSpeech": "adjective",
                "translation": "intiimi"
            },
            {
                "word": "laughter",
                "partOfSpeech": "noun",
                "translation": "nauru"
            }
        ],
        "word_set51": [
            {
                "word": "lend",
                "partOfSpeech": "verb",
                "translation": "lainoittaa"
            },
            {
                "word": "organization",
                "partOfSpeech": "noun",
                "translation": "järjestö"
            },
            {
                "word": "outside",
                "partOfSpeech": "noun",
                "translation": "ulkopuoli"
            },
            {
                "word": "rice",
                "partOfSpeech": "noun",
                "translation": "riisi"
            },
            {
                "word": "seminar",
                "partOfSpeech": "noun",
                "translation": "seminaari"
            },
            {
                "word": "shape",
                "partOfSpeech": "verb",
                "translation": "muotoilla"
            },
            {
                "word": "sheep",
                "partOfSpeech": "noun",
                "translation": "lammas"
            },
            {
                "word": "sweat",
                "partOfSpeech": "noun",
                "translation": "hiki"
            },
            {
                "word": "vehicle",
                "partOfSpeech": "noun",
                "translation": "menopeli"
            },
            {
                "word": "architecture",
                "partOfSpeech": "noun",
                "translation": "arkkitehtuuri"
            },
            {
                "word": "certain",
                "partOfSpeech": "adjective",
                "translation": "tietty"
            },
            {
                "word": "demon",
                "partOfSpeech": "noun",
                "translation": "demoni"
            },
            {
                "word": "freezer",
                "partOfSpeech": "noun",
                "translation": "pakastin"
            },
            {
                "word": "guide",
                "partOfSpeech": "noun",
                "translation": "opas"
            },
            {
                "word": "harm",
                "partOfSpeech": "noun",
                "translation": "harmi"
            },
            {
                "word": "honk",
                "partOfSpeech": "verb",
                "translation": "tyytätä"
            },
            {
                "word": "install",
                "partOfSpeech": "verb",
                "translation": "asentaa"
            },
            {
                "word": "mascot",
                "partOfSpeech": "noun",
                "translation": "maskotti"
            },
            {
                "word": "massive",
                "partOfSpeech": "adjective",
                "translation": "massiivinen"
            },
            {
                "word": "metal",
                "partOfSpeech": "noun",
                "translation": "metalli"
            },
            {
                "word": "nest",
                "partOfSpeech": "noun",
                "translation": "pesä"
            },
            {
                "word": "praise",
                "partOfSpeech": "verb",
                "translation": "kehua"
            },
            {
                "word": "prescription",
                "partOfSpeech": "noun",
                "translation": "vanhentumisaika"
            },
            {
                "word": "produce",
                "partOfSpeech": "verb",
                "translation": "tuottaa"
            },
            {
                "word": "surround",
                "partOfSpeech": "verb",
                "translation": "ympäröidä"
            },
            {
                "word": "tragedy",
                "partOfSpeech": "noun",
                "translation": "tragiikka"
            },
            {
                "word": "troll",
                "partOfSpeech": "noun",
                "translation": "trolli"
            },
            {
                "word": "tune",
                "partOfSpeech": "verb",
                "translation": "virittää"
            },
            {
                "word": "wagon",
                "partOfSpeech": "noun",
                "translation": "vaunu"
            },
            {
                "word": "whisper",
                "partOfSpeech": "verb",
                "translation": "kuiskata"
            },
            {
                "word": "bind",
                "partOfSpeech": "verb",
                "translation": "sitoa"
            },
            {
                "word": "butterfly",
                "partOfSpeech": "noun",
                "translation": "perhonen"
            },
            {
                "word": "cast",
                "partOfSpeech": "noun",
                "translation": "valu"
            },
            {
                "word": "ceiling",
                "partOfSpeech": "noun",
                "translation": "katto"
            },
            {
                "word": "electricity",
                "partOfSpeech": "noun",
                "translation": "sähkö"
            },
            {
                "word": "exchange",
                "partOfSpeech": "noun",
                "translation": "vaihto"
            },
            {
                "word": "grass",
                "partOfSpeech": "noun",
                "translation": "ruoho"
            },
            {
                "word": "misunderstanding",
                "partOfSpeech": "noun",
                "translation": "väärinkäsitys"
            },
            {
                "word": "rush",
                "partOfSpeech": "noun",
                "translation": "syöksy"
            },
            {
                "word": "solo",
                "partOfSpeech": "noun",
                "translation": "soolo"
            }
        ],
        "word_set52": [
            {
                "word": "syrup",
                "partOfSpeech": "noun",
                "translation": "siirappi"
            },
            {
                "word": "timing",
                "partOfSpeech": "noun",
                "translation": "ajoitus"
            },
            {
                "word": "whistle",
                "partOfSpeech": "noun",
                "translation": "vihellys"
            },
            {
                "word": "knight",
                "partOfSpeech": "noun",
                "translation": "ritari"
            },
            {
                "word": "ballet",
                "partOfSpeech": "noun",
                "translation": "baletti"
            },
            {
                "word": "blade",
                "partOfSpeech": "noun",
                "translation": "terä"
            },
            {
                "word": "celebration",
                "partOfSpeech": "noun",
                "translation": "juhlat"
            },
            {
                "word": "cheesecake",
                "partOfSpeech": "noun",
                "translation": "juustokakku"
            },
            {
                "word": "communicate",
                "partOfSpeech": "verb",
                "translation": "kommunikoida"
            },
            {
                "word": "cough",
                "partOfSpeech": "noun",
                "translation": "yskä"
            },
            {
                "word": "fall",
                "partOfSpeech": "noun",
                "translation": "putous"
            },
            {
                "word": "following",
                "partOfSpeech": "adjective",
                "translation": "jälkeinen"
            },
            {
                "word": "heel",
                "partOfSpeech": "noun",
                "translation": "kantapää"
            },
            {
                "word": "hold",
                "partOfSpeech": "noun",
                "translation": "talon etu"
            },
            {
                "word": "onion",
                "partOfSpeech": "noun",
                "translation": "sipuli"
            },
            {
                "word": "relieve",
                "partOfSpeech": "verb",
                "translation": "huojentaa"
            },
            {
                "word": "saving",
                "partOfSpeech": "noun",
                "translation": "säästö"
            },
            {
                "word": "silence",
                "partOfSpeech": "noun",
                "translation": "hiljaisuus"
            },
            {
                "word": "cinnamon",
                "partOfSpeech": "noun",
                "translation": "kaneli"
            },
            {
                "word": "construction",
                "partOfSpeech": "noun",
                "translation": "rakennustyö"
            },
            {
                "word": "curse",
                "partOfSpeech": "verb",
                "translation": "kirota"
            },
            {
                "word": "frame",
                "partOfSpeech": "verb",
                "translation": "kehystää"
            },
            {
                "word": "imply",
                "partOfSpeech": "verb",
                "translation": "implikoida"
            },
            {
                "word": "soak",
                "partOfSpeech": "verb",
                "translation": "liota"
            },
            {
                "word": "sticker",
                "partOfSpeech": "noun",
                "translation": "tarra"
            },
            {
                "word": "survivor",
                "partOfSpeech": "noun",
                "translation": "selviytyjä"
            },
            {
                "word": "yoga",
                "partOfSpeech": "noun",
                "translation": "jooga"
            },
            {
                "word": "biology",
                "partOfSpeech": "noun",
                "translation": "biologia"
            },
            {
                "word": "carve",
                "partOfSpeech": "verb",
                "translation": "veistää"
            },
            {
                "word": "destiny",
                "partOfSpeech": "noun",
                "translation": "kohtalo"
            },
            {
                "word": "detention",
                "partOfSpeech": "noun",
                "translation": "jälki-istunto"
            },
            {
                "word": "direct",
                "partOfSpeech": "verb",
                "translation": "suunnata"
            },
            {
                "word": "drill",
                "partOfSpeech": "noun",
                "translation": "pora"
            },
            {
                "word": "firm",
                "partOfSpeech": "adjective",
                "translation": "luja"
            },
            {
                "word": "grill",
                "partOfSpeech": "verb",
                "translation": "grillata"
            },
            {
                "word": "potential",
                "partOfSpeech": "adjective",
                "translation": "potentiaalinen"
            },
            {
                "word": "ribbon",
                "partOfSpeech": "noun",
                "translation": "nauha"
            },
            {
                "word": "spaghetti",
                "partOfSpeech": "noun",
                "translation": "spagetti"
            },
            {
                "word": "stuffing",
                "partOfSpeech": "noun",
                "translation": "tilke"
            },
            {
                "word": "accountant",
                "partOfSpeech": "noun",
                "translation": "kirjanpitäjä"
            }
        ],
        "word_set53": [
            {
                "word": "chill",
                "partOfSpeech": "verb",
                "translation": "kylmätä"
            },
            {
                "word": "coaster",
                "partOfSpeech": "noun",
                "translation": "lasinalunen"
            },
            {
                "word": "conditioner",
                "partOfSpeech": "noun",
                "translation": "hoide"
            },
            {
                "word": "cone",
                "partOfSpeech": "noun",
                "translation": "kartio"
            },
            {
                "word": "deaf",
                "partOfSpeech": "adjective",
                "translation": "kuuro"
            },
            {
                "word": "dive",
                "partOfSpeech": "verb",
                "translation": "sukeltaa"
            },
            {
                "word": "error",
                "partOfSpeech": "noun",
                "translation": "kämmi"
            },
            {
                "word": "fly",
                "partOfSpeech": "noun",
                "translation": "kärpänen"
            },
            {
                "word": "mercy",
                "partOfSpeech": "noun",
                "translation": "armeliaisuus"
            },
            {
                "word": "nickel",
                "partOfSpeech": "noun",
                "translation": "nikkeli"
            },
            {
                "word": "object",
                "partOfSpeech": "noun",
                "translation": "esine"
            },
            {
                "word": "scissors",
                "partOfSpeech": "noun",
                "translation": "sakset"
            },
            {
                "word": "smack",
                "partOfSpeech": "verb",
                "translation": "maiskuttaa"
            },
            {
                "word": "suspect",
                "partOfSpeech": "noun",
                "translation": "epäilty"
            },
            {
                "word": "tick",
                "partOfSpeech": "verb",
                "translation": "tikittää"
            },
            {
                "word": "waffle",
                "partOfSpeech": "noun",
                "translation": "vohveli"
            },
            {
                "word": "wicked",
                "partOfSpeech": "adjective",
                "translation": "häijy"
            },
            {
                "word": "wisdom",
                "partOfSpeech": "noun",
                "translation": "viisaus"
            },
            {
                "word": "essay",
                "partOfSpeech": "noun",
                "translation": "essee"
            },
            {
                "word": "delicate",
                "partOfSpeech": "adjective",
                "translation": "herkkä"
            },
            {
                "word": "document",
                "partOfSpeech": "noun",
                "translation": "dokumentti"
            },
            {
                "word": "flute",
                "partOfSpeech": "noun",
                "translation": "huilu"
            },
            {
                "word": "gorilla",
                "partOfSpeech": "noun",
                "translation": "gorilla"
            },
            {
                "word": "groom",
                "partOfSpeech": "noun",
                "translation": "sulhanen"
            },
            {
                "word": "horror",
                "partOfSpeech": "noun",
                "translation": "kauhu"
            },
            {
                "word": "martini",
                "partOfSpeech": "noun",
                "translation": "martini"
            },
            {
                "word": "mud",
                "partOfSpeech": "noun",
                "translation": "muta"
            },
            {
                "word": "reduce",
                "partOfSpeech": "verb",
                "translation": "supistaa"
            },
            {
                "word": "return",
                "partOfSpeech": "noun",
                "translation": "paluu"
            },
            {
                "word": "rod",
                "partOfSpeech": "noun",
                "translation": "tanko"
            },
            {
                "word": "rubber",
                "partOfSpeech": "noun",
                "translation": "kumi"
            },
            {
                "word": "rug",
                "partOfSpeech": "noun",
                "translation": "matto"
            },
            {
                "word": "steer",
                "partOfSpeech": "verb",
                "translation": "ohjata"
            },
            {
                "word": "symbol",
                "partOfSpeech": "noun",
                "translation": "symbooli"
            },
            {
                "word": "thirsty",
                "partOfSpeech": "adjective",
                "translation": "janoinen"
            },
            {
                "word": "traditional",
                "partOfSpeech": "adjective",
                "translation": "perinteinen"
            },
            {
                "word": "try",
                "partOfSpeech": "noun",
                "translation": "kokeilu"
            },
            {
                "word": "succeed",
                "partOfSpeech": "verb",
                "translation": "menestyä"
            },
            {
                "word": "basic",
                "partOfSpeech": "adjective",
                "translation": "perustavanlaatuinen"
            },
            {
                "word": "booty",
                "partOfSpeech": "noun",
                "translation": "ryöstösaalis"
            }
        ],
        "word_set54": [
            {
                "word": "bridesmaid",
                "partOfSpeech": "noun",
                "translation": "kaaso"
            },
            {
                "word": "chore",
                "partOfSpeech": "noun",
                "translation": "puuha"
            },
            {
                "word": "coin",
                "partOfSpeech": "noun",
                "translation": "kolikko"
            },
            {
                "word": "envelope",
                "partOfSpeech": "noun",
                "translation": "kirjekuori"
            },
            {
                "word": "exciting",
                "partOfSpeech": "adjective",
                "translation": "jänskä"
            },
            {
                "word": "living",
                "partOfSpeech": "noun",
                "translation": "eläminen"
            },
            {
                "word": "medication",
                "partOfSpeech": "noun",
                "translation": "lääkitys"
            },
            {
                "word": "organize",
                "partOfSpeech": "verb",
                "translation": "organisoida"
            },
            {
                "word": "overreact",
                "partOfSpeech": "verb",
                "translation": "ylireagoida"
            },
            {
                "word": "press",
                "partOfSpeech": "noun",
                "translation": "puristus"
            },
            {
                "word": "principle",
                "partOfSpeech": "noun",
                "translation": "periaate"
            },
            {
                "word": "rabbi",
                "partOfSpeech": "noun",
                "translation": "rabbi"
            },
            {
                "word": "reward",
                "partOfSpeech": "verb",
                "translation": "palkita"
            },
            {
                "word": "sneeze",
                "partOfSpeech": "verb",
                "translation": "aivastaa"
            },
            {
                "word": "tasty",
                "partOfSpeech": "adjective",
                "translation": "maukas"
            },
            {
                "word": "tobacco",
                "partOfSpeech": "noun",
                "translation": "tupakka"
            },
            {
                "word": "volunteer",
                "partOfSpeech": "noun",
                "translation": "tarjokas"
            },
            {
                "word": "facility",
                "partOfSpeech": "noun",
                "translation": "fasiliteetti"
            },
            {
                "word": "skirt",
                "partOfSpeech": "noun",
                "translation": "hame"
            },
            {
                "word": "grateful",
                "partOfSpeech": "adjective",
                "translation": "kiitollinen"
            },
            {
                "word": "gravity",
                "partOfSpeech": "noun",
                "translation": "painovoima"
            },
            {
                "word": "handle",
                "partOfSpeech": "noun",
                "translation": "kädensija"
            },
            {
                "word": "hay",
                "partOfSpeech": "noun",
                "translation": "heinä"
            },
            {
                "word": "hideous",
                "partOfSpeech": "adjective",
                "translation": "rujo"
            },
            {
                "word": "hobby",
                "partOfSpeech": "noun",
                "translation": "harrastus"
            },
            {
                "word": "lighting",
                "partOfSpeech": "noun",
                "translation": "valaistus"
            },
            {
                "word": "lobby",
                "partOfSpeech": "noun",
                "translation": "aula"
            },
            {
                "word": "lung",
                "partOfSpeech": "noun",
                "translation": "keuhko"
            },
            {
                "word": "musician",
                "partOfSpeech": "noun",
                "translation": "muusikko"
            },
            {
                "word": "plot",
                "partOfSpeech": "noun",
                "translation": "juoni"
            },
            {
                "word": "poison",
                "partOfSpeech": "verb",
                "translation": "myrkyttää"
            },
            {
                "word": "presence",
                "partOfSpeech": "noun",
                "translation": "läsnäolo"
            },
            {
                "word": "relief",
                "partOfSpeech": "noun",
                "translation": "helpotus"
            },
            {
                "word": "resource",
                "partOfSpeech": "noun",
                "translation": "resurssi"
            },
            {
                "word": "sailor",
                "partOfSpeech": "noun",
                "translation": "merimies"
            },
            {
                "word": "sober",
                "partOfSpeech": "adjective",
                "translation": "raitis"
            },
            {
                "word": "sofa",
                "partOfSpeech": "noun",
                "translation": "sohva"
            },
            {
                "word": "switch",
                "partOfSpeech": "noun",
                "translation": "kytkin"
            },
            {
                "word": "toaster",
                "partOfSpeech": "noun",
                "translation": "leivänpaahdin"
            },
            {
                "word": "annual",
                "partOfSpeech": "adjective",
                "translation": "vuosittainen"
            }
        ],
        "word_set55": [
            {
                "word": "bathe",
                "partOfSpeech": "verb",
                "translation": "kylpeä"
            },
            {
                "word": "bully",
                "partOfSpeech": "verb",
                "translation": "kovistella, kiusata"
            },
            {
                "word": "catalog",
                "partOfSpeech": "noun",
                "translation": "kuvasto"
            },
            {
                "word": "cheerleader",
                "partOfSpeech": "noun",
                "translation": "cheerleader"
            },
            {
                "word": "combination",
                "partOfSpeech": "noun",
                "translation": "yhdistymä"
            },
            {
                "word": "combine",
                "partOfSpeech": "verb",
                "translation": "yhdistellä"
            },
            {
                "word": "conclusion",
                "partOfSpeech": "noun",
                "translation": "päätelmä"
            },
            {
                "word": "cotton",
                "partOfSpeech": "noun",
                "translation": "puuvilla"
            },
            {
                "word": "crab",
                "partOfSpeech": "noun",
                "translation": "taskurapu"
            },
            {
                "word": "damage",
                "partOfSpeech": "verb",
                "translation": "vaurioittaa"
            },
            {
                "word": "erase",
                "partOfSpeech": "verb",
                "translation": "Poistaa, kumittaa"
            },
            {
                "word": "fund",
                "partOfSpeech": "noun",
                "translation": "rahasto"
            },
            {
                "word": "hog",
                "partOfSpeech": "verb",
                "translation": "ahnehtia"
            },
            {
                "word": "hurricane",
                "partOfSpeech": "noun",
                "translation": "hurrikaani"
            },
            {
                "word": "mansion",
                "partOfSpeech": "noun",
                "translation": "kartano"
            },
            {
                "word": "motorcycle",
                "partOfSpeech": "noun",
                "translation": "moottoripyörä"
            },
            {
                "word": "pigeon",
                "partOfSpeech": "noun",
                "translation": "kyyhky"
            },
            {
                "word": "politics",
                "partOfSpeech": "noun",
                "translation": "politiikka"
            },
            {
                "word": "proper",
                "partOfSpeech": "adjective",
                "translation": "kunnollinen"
            },
            {
                "word": "qualify",
                "partOfSpeech": "verb",
                "translation": "kelpuuttaa"
            },
            {
                "word": "receptionist",
                "partOfSpeech": "noun",
                "translation": "reseptionisti"
            },
            {
                "word": "recover",
                "partOfSpeech": "verb",
                "translation": "toipua"
            },
            {
                "word": "release",
                "partOfSpeech": "noun",
                "translation": "laukaisija"
            },
            {
                "word": "sarcasm",
                "partOfSpeech": "noun",
                "translation": "sarkasmi"
            },
            {
                "word": "sheriff",
                "partOfSpeech": "noun",
                "translation": "sheriffi"
            },
            {
                "word": "soy",
                "partOfSpeech": "noun",
                "translation": "soija"
            },
            {
                "word": "suspicious",
                "partOfSpeech": "adjective",
                "translation": "epäilyttävä"
            },
            {
                "word": "sweaty",
                "partOfSpeech": "adjective",
                "translation": "hikinen"
            },
            {
                "word": "thigh",
                "partOfSpeech": "noun",
                "translation": "reisi"
            },
            {
                "word": "toxic",
                "partOfSpeech": "adjective",
                "translation": "myrkyllinen"
            },
            {
                "word": "crib",
                "partOfSpeech": "noun",
                "translation": "pinnasänky"
            },
            {
                "word": "amusement",
                "partOfSpeech": "noun",
                "translation": "huvi"
            },
            {
                "word": "backpack",
                "partOfSpeech": "noun",
                "translation": "selkäreppu"
            },
            {
                "word": "confession",
                "partOfSpeech": "noun",
                "translation": "tunnustus"
            },
            {
                "word": "fabric",
                "partOfSpeech": "noun",
                "translation": "kangas"
            },
            {
                "word": "herpes",
                "partOfSpeech": "noun",
                "translation": "herpes"
            },
            {
                "word": "hybrid",
                "partOfSpeech": "noun",
                "translation": "hybridi"
            },
            {
                "word": "prisoner",
                "partOfSpeech": "noun",
                "translation": "vanki"
            }
        ],
        "word_set56": [
            {
                "word": "protection",
                "partOfSpeech": "noun",
                "translation": "suojelu"
            },
            {
                "word": "refresh",
                "partOfSpeech": "verb",
                "translation": "virkistyä"
            },
            {
                "word": "request",
                "partOfSpeech": "verb",
                "translation": "pyytää"
            },
            {
                "word": "type",
                "partOfSpeech": "verb",
                "translation": "konekirjoittaa"
            },
            {
                "word": "vomit",
                "partOfSpeech": "verb",
                "translation": "oksentaa"
            },
            {
                "word": "anus",
                "partOfSpeech": "noun",
                "translation": "peräaukko"
            },
            {
                "word": "babysitter",
                "partOfSpeech": "noun",
                "translation": "lapsenvahti"
            },
            {
                "word": "banner",
                "partOfSpeech": "noun",
                "translation": "banneri"
            },
            {
                "word": "bladder",
                "partOfSpeech": "noun",
                "translation": "rakko"
            },
            {
                "word": "dealer",
                "partOfSpeech": "noun",
                "translation": "diileri"
            },
            {
                "word": "flesh",
                "partOfSpeech": "noun",
                "translation": "liha"
            },
            {
                "word": "hint",
                "partOfSpeech": "noun",
                "translation": "vihje"
            },
            {
                "word": "identify",
                "partOfSpeech": "verb",
                "translation": "identifioida"
            },
            {
                "word": "intimidate",
                "partOfSpeech": "verb",
                "translation": "pelotella"
            },
            {
                "word": "leather",
                "partOfSpeech": "noun",
                "translation": "nahka"
            },
            {
                "word": "list",
                "partOfSpeech": "verb",
                "translation": "luetteloida, listata"
            },
            {
                "word": "madness",
                "partOfSpeech": "noun",
                "translation": "hulluus"
            },
            {
                "word": "mole",
                "partOfSpeech": "noun",
                "translation": "luomi"
            },
            {
                "word": "passionate",
                "partOfSpeech": "adjective",
                "translation": "intohimoinen"
            },
            {
                "word": "post",
                "partOfSpeech": "noun",
                "translation": "posti"
            },
            {
                "word": "program",
                "partOfSpeech": "verb",
                "translation": "ohjelmoida"
            },
            {
                "word": "rap",
                "partOfSpeech": "noun",
                "translation": "rap-musiikki"
            },
            {
                "word": "recent",
                "partOfSpeech": "adjective",
                "translation": "viimeaikainen"
            },
            {
                "word": "satellite",
                "partOfSpeech": "noun",
                "translation": "satelliitti"
            },
            {
                "word": "shampoo",
                "partOfSpeech": "noun",
                "translation": "shampoo"
            },
            {
                "word": "share",
                "partOfSpeech": "noun",
                "translation": "osuus"
            },
            {
                "word": "sink",
                "partOfSpeech": "noun",
                "translation": "lavuaari"
            },
            {
                "word": "sleepy",
                "partOfSpeech": "adjective",
                "translation": "unelias"
            },
            {
                "word": "smug",
                "partOfSpeech": "adjective",
                "translation": "omahyväinen"
            },
            {
                "word": "straw",
                "partOfSpeech": "noun",
                "translation": "pilli"
            },
            {
                "word": "supermarket",
                "partOfSpeech": "noun",
                "translation": "supermarketti"
            },
            {
                "word": "umbrella",
                "partOfSpeech": "noun",
                "translation": "sateenvarjo"
            },
            {
                "word": "wrestler",
                "partOfSpeech": "noun",
                "translation": "painija"
            },
            {
                "word": "bud",
                "partOfSpeech": "noun",
                "translation": "umpu"
            },
            {
                "word": "riot",
                "partOfSpeech": "noun",
                "translation": "hulinointi"
            },
            {
                "word": "chess",
                "partOfSpeech": "noun",
                "translation": "shakki"
            },
            {
                "word": "clip",
                "partOfSpeech": "noun",
                "translation": "klipsi"
            },
            {
                "word": "concept",
                "partOfSpeech": "noun",
                "translation": "käsite"
            },
            {
                "word": "core",
                "partOfSpeech": "noun",
                "translation": "ydin"
            }
        ],
        "word_set57": [
            {
                "word": "destruction",
                "partOfSpeech": "noun",
                "translation": "tuho"
            },
            {
                "word": "eliminate",
                "partOfSpeech": "verb",
                "translation": "eliminoida"
            },
            {
                "word": "invention",
                "partOfSpeech": "noun",
                "translation": "keksintö"
            },
            {
                "word": "marathon",
                "partOfSpeech": "noun",
                "translation": "maratonjuoksu"
            },
            {
                "word": "meaning",
                "partOfSpeech": "noun",
                "translation": "merkitys"
            },
            {
                "word": "paperwork",
                "partOfSpeech": "noun",
                "translation": "paperityö"
            },
            {
                "word": "physical",
                "partOfSpeech": "noun",
                "translation": "terveystarkastus"
            },
            {
                "word": "pitch",
                "partOfSpeech": "noun",
                "translation": "piki"
            },
            {
                "word": "plug",
                "partOfSpeech": "verb",
                "translation": "tulpata"
            },
            {
                "word": "replacement",
                "partOfSpeech": "noun",
                "translation": "vaihtuminen"
            },
            {
                "word": "review",
                "partOfSpeech": "verb",
                "translation": "arvostella"
            },
            {
                "word": "surrender",
                "partOfSpeech": "verb",
                "translation": "antautua"
            },
            {
                "word": "crystal",
                "partOfSpeech": "noun",
                "translation": "kristalli"
            },
            {
                "word": "data",
                "partOfSpeech": "noun",
                "translation": "data"
            },
            {
                "word": "dryer",
                "partOfSpeech": "noun",
                "translation": "kuivain"
            },
            {
                "word": "editor",
                "partOfSpeech": "noun",
                "translation": "muokkaaja"
            },
            {
                "word": "flow",
                "partOfSpeech": "noun",
                "translation": "virta"
            },
            {
                "word": "grace",
                "partOfSpeech": "noun",
                "translation": "armo"
            },
            {
                "word": "harsh",
                "partOfSpeech": "adjective",
                "translation": "ankara"
            },
            {
                "word": "intelligence",
                "partOfSpeech": "noun",
                "translation": "älykkyys"
            },
            {
                "word": "jaw",
                "partOfSpeech": "noun",
                "translation": "leuka"
            },
            {
                "word": "juicy",
                "partOfSpeech": "adjective",
                "translation": "mehukas"
            },
            {
                "word": "lipstick",
                "partOfSpeech": "noun",
                "translation": "huulipuna"
            },
            {
                "word": "male",
                "partOfSpeech": "noun",
                "translation": "uros"
            },
            {
                "word": "medium",
                "partOfSpeech": "adjective",
                "translation": "keskikokoinen"
            },
            {
                "word": "minority",
                "partOfSpeech": "noun",
                "translation": "vähemmistö"
            },
            {
                "word": "payment",
                "partOfSpeech": "noun",
                "translation": "maksusuoritus"
            },
            {
                "word": "scenario",
                "partOfSpeech": "noun",
                "translation": "skenaario"
            },
            {
                "word": "scrub",
                "partOfSpeech": "verb",
                "translation": "jynssätä"
            },
            {
                "word": "thoughtful",
                "partOfSpeech": "adjective",
                "translation": "ajattelevainen"
            },
            {
                "word": "tribe",
                "partOfSpeech": "noun",
                "translation": "heimo"
            },
            {
                "word": "worthless",
                "partOfSpeech": "adjective",
                "translation": "arvoton"
            },
            {
                "word": "retirement",
                "partOfSpeech": "noun",
                "translation": "eläkepäivät"
            },
            {
                "word": "absolute",
                "partOfSpeech": "adjective",
                "translation": "absoluuttinen"
            },
            {
                "word": "adjustment",
                "partOfSpeech": "noun",
                "translation": "säätö"
            },
            {
                "word": "adoption",
                "partOfSpeech": "noun",
                "translation": "adoptointi"
            },
            {
                "word": "burst",
                "partOfSpeech": "verb",
                "translation": "puhkoa"
            },
            {
                "word": "cocoa",
                "partOfSpeech": "noun",
                "translation": "kaakao"
            },
            {
                "word": "dough",
                "partOfSpeech": "noun",
                "translation": "taikina"
            },
            {
                "word": "embrace",
                "partOfSpeech": "verb",
                "translation": "syleillä"
            }
        ],
        "word_set58": [
            {
                "word": "fax",
                "partOfSpeech": "verb",
                "translation": "faksata"
            },
            {
                "word": "foolish",
                "partOfSpeech": "adjective",
                "translation": "narrimainen"
            },
            {
                "word": "locate",
                "partOfSpeech": "verb",
                "translation": "paikantaa"
            },
            {
                "word": "monitor",
                "partOfSpeech": "verb",
                "translation": "monitoroida"
            },
            {
                "word": "moo",
                "partOfSpeech": "verb",
                "translation": "ammua"
            },
            {
                "word": "raccoon",
                "partOfSpeech": "noun",
                "translation": "pesukarhu"
            },
            {
                "word": "sleeve",
                "partOfSpeech": "noun",
                "translation": "hiha"
            },
            {
                "word": "strangle",
                "partOfSpeech": "verb",
                "translation": "kuristaa"
            },
            {
                "word": "sunshine",
                "partOfSpeech": "noun",
                "translation": "auringonpaiste"
            },
            {
                "word": "tickle",
                "partOfSpeech": "verb",
                "translation": "kutittaa"
            },
            {
                "word": "tower",
                "partOfSpeech": "noun",
                "translation": "torni"
            },
            {
                "word": "use",
                "partOfSpeech": "noun",
                "translation": "käyttö"
            },
            {
                "word": "volume",
                "partOfSpeech": "noun",
                "translation": "äänenvoimakkuus"
            },
            {
                "word": "wingman",
                "partOfSpeech": "noun",
                "translation": "siipimies"
            },
            {
                "word": "wonder",
                "partOfSpeech": "noun",
                "translation": "ihme"
            },
            {
                "word": "wuss",
                "partOfSpeech": "noun",
                "translation": "lullukka"
            },
            {
                "word": "constant",
                "partOfSpeech": "adjective",
                "translation": "ainainen"
            },
            {
                "word": "cue",
                "partOfSpeech": "noun",
                "translation": "köö"
            },
            {
                "word": "addition",
                "partOfSpeech": "noun",
                "translation": "lisä"
            },
            {
                "word": "alarm",
                "partOfSpeech": "verb",
                "translation": "hälyttää"
            },
            {
                "word": "bass",
                "partOfSpeech": "noun",
                "translation": "basso"
            },
            {
                "word": "blessing",
                "partOfSpeech": "noun",
                "translation": "siunaus"
            },
            {
                "word": "businessman",
                "partOfSpeech": "noun",
                "translation": "liikemies"
            },
            {
                "word": "classroom",
                "partOfSpeech": "noun",
                "translation": "luokkahuone"
            },
            {
                "word": "clinic",
                "partOfSpeech": "noun",
                "translation": "klinikka"
            },
            {
                "word": "coward",
                "partOfSpeech": "noun",
                "translation": "pelkuri"
            },
            {
                "word": "fist",
                "partOfSpeech": "noun",
                "translation": "nyrkki"
            },
            {
                "word": "giant",
                "partOfSpeech": "noun",
                "translation": "jätti"
            },
            {
                "word": "indicate",
                "partOfSpeech": "verb",
                "translation": "indikoida"
            },
            {
                "word": "ingredient",
                "partOfSpeech": "noun",
                "translation": "ainesosa"
            },
            {
                "word": "instance",
                "partOfSpeech": "noun",
                "translation": "instanssi"
            },
            {
                "word": "insult",
                "partOfSpeech": "noun",
                "translation": "loukkaus"
            },
            {
                "word": "limit",
                "partOfSpeech": "verb",
                "translation": "rajata"
            },
            {
                "word": "mailman",
                "partOfSpeech": "noun",
                "translation": "postinjakaja"
            },
            {
                "word": "massage",
                "partOfSpeech": "verb",
                "translation": "hieroa"
            },
            {
                "word": "meteor",
                "partOfSpeech": "noun",
                "translation": "tähdenlento"
            },
            {
                "word": "mop",
                "partOfSpeech": "verb",
                "translation": "mopata"
            },
            {
                "word": "noble",
                "partOfSpeech": "adjective",
                "translation": "aatelinen"
            },
            {
                "word": "opposite",
                "partOfSpeech": "adjective",
                "translation": "päinvastainen"
            },
            {
                "word": "pajamas",
                "partOfSpeech": "noun",
                "translation": "yöpuku"
            }
        ],
        "word_set59": [
            {
                "word": "print",
                "partOfSpeech": "noun",
                "translation": "printti"
            },
            {
                "word": "ship",
                "partOfSpeech": "verb",
                "translation": "laivata"
            },
            {
                "word": "slutty",
                "partOfSpeech": "adjective",
                "translation": "huorahtava"
            },
            {
                "word": "sniff",
                "partOfSpeech": "verb",
                "translation": "haistaa"
            },
            {
                "word": "spin",
                "partOfSpeech": "noun",
                "translation": "pyörintä"
            },
            {
                "word": "value",
                "partOfSpeech": "verb",
                "translation": "arvostaa"
            },
            {
                "word": "amuse",
                "partOfSpeech": "verb",
                "translation": "hauskuuttaa"
            },
            {
                "word": "ancestor",
                "partOfSpeech": "noun",
                "translation": "esi-isä"
            },
            {
                "word": "attic",
                "partOfSpeech": "noun",
                "translation": "vintti"
            },
            {
                "word": "broccoli",
                "partOfSpeech": "noun",
                "translation": "parsakaali"
            },
            {
                "word": "circumstance",
                "partOfSpeech": "noun",
                "translation": "asianhaara"
            },
            {
                "word": "clothing",
                "partOfSpeech": "noun",
                "translation": "vaatetus"
            },
            {
                "word": "decade",
                "partOfSpeech": "noun",
                "translation": "dekadi"
            },
            {
                "word": "disorder",
                "partOfSpeech": "noun",
                "translation": "häiriö"
            },
            {
                "word": "dungeon",
                "partOfSpeech": "noun",
                "translation": "tyrmä"
            },
            {
                "word": "evolution",
                "partOfSpeech": "noun",
                "translation": "evoluutio"
            },
            {
                "word": "exception",
                "partOfSpeech": "noun",
                "translation": "poikkeus"
            },
            {
                "word": "function",
                "partOfSpeech": "noun",
                "translation": "funktio"
            },
            {
                "word": "glorious",
                "partOfSpeech": "adjective",
                "translation": "loistelias"
            },
            {
                "word": "gossip",
                "partOfSpeech": "noun",
                "translation": "juoru"
            },
            {
                "word": "military",
                "partOfSpeech": "noun",
                "translation": "intti"
            },
            {
                "word": "pan",
                "partOfSpeech": "noun",
                "translation": "pannu"
            },
            {
                "word": "paradise",
                "partOfSpeech": "noun",
                "translation": "paratiisi"
            },
            {
                "word": "pet",
                "partOfSpeech": "verb",
                "translation": "silittää"
            },
            {
                "word": "pinch",
                "partOfSpeech": "verb",
                "translation": "nipistää"
            },
            {
                "word": "pity",
                "partOfSpeech": "noun",
                "translation": "sääli"
            },
            {
                "word": "rotten",
                "partOfSpeech": "adjective",
                "translation": "mätä"
            },
            {
                "word": "similar",
                "partOfSpeech": "adjective",
                "translation": "samankaltainen"
            },
            {
                "word": "stand",
                "partOfSpeech": "noun",
                "translation": "jalusta"
            },
            {
                "word": "tunnel",
                "partOfSpeech": "verb",
                "translation": "tunneloida"
            },
            {
                "word": "vanilla",
                "partOfSpeech": "noun",
                "translation": "vanilja"
            },
            {
                "word": "zip",
                "partOfSpeech": "verb",
                "translation": "vilahtaa"
            },
            {
                "word": "bedtime",
                "partOfSpeech": "noun",
                "translation": "nukkumaanmenoaika"
            },
            {
                "word": "cape",
                "partOfSpeech": "noun",
                "translation": "viitta"
            },
            {
                "word": "crossword",
                "partOfSpeech": "noun",
                "translation": "ristisana"
            },
            {
                "word": "designer",
                "partOfSpeech": "noun",
                "translation": "muotoilija"
            },
            {
                "word": "enormous",
                "partOfSpeech": "adjective",
                "translation": "suunnaton"
            },
            {
                "word": "extreme",
                "partOfSpeech": "adjective",
                "translation": "äärimmäinen"
            },
            {
                "word": "genetic",
                "partOfSpeech": "adjective",
                "translation": "geneettinen"
            },
            {
                "word": "length",
                "partOfSpeech": "noun",
                "translation": "pituus"
            }
        ],
        "word_set60": [
            {
                "word": "lightning",
                "partOfSpeech": "noun",
                "translation": "salama"
            },
            {
                "word": "magic",
                "partOfSpeech": "noun",
                "translation": "taika"
            },
            {
                "word": "magnificent",
                "partOfSpeech": "adjective",
                "translation": "suurenmoinen"
            },
            {
                "word": "marshmallow",
                "partOfSpeech": "noun",
                "translation": "rohtosalkoruusu"
            },
            {
                "word": "meatball",
                "partOfSpeech": "noun",
                "translation": "lihapulla"
            },
            {
                "word": "messy",
                "partOfSpeech": "adjective",
                "translation": "sotkuinen"
            },
            {
                "word": "mount",
                "partOfSpeech": "noun",
                "translation": "jalake"
            },
            {
                "word": "navy",
                "partOfSpeech": "noun",
                "translation": "laivasto"
            },
            {
                "word": "oppose",
                "partOfSpeech": "verb",
                "translation": "opponoida"
            },
            {
                "word": "passenger",
                "partOfSpeech": "noun",
                "translation": "matkustaja"
            },
            {
                "word": "playground",
                "partOfSpeech": "noun",
                "translation": "leikkikenttä"
            },
            {
                "word": "proposal",
                "partOfSpeech": "noun",
                "translation": "ehdotelma"
            },
            {
                "word": "psycho",
                "partOfSpeech": "noun",
                "translation": "psyko"
            },
            {
                "word": "rainforest",
                "partOfSpeech": "noun",
                "translation": "sademetsä"
            },
            {
                "word": "rap",
                "partOfSpeech": "verb",
                "translation": "räpätä"
            },
            {
                "word": "stereotype",
                "partOfSpeech": "noun",
                "translation": "stereotypia"
            },
            {
                "word": "sudden",
                "partOfSpeech": "adjective",
                "translation": "äkillinen"
            },
            {
                "word": "temp",
                "partOfSpeech": "noun",
                "translation": "määräaikainen"
            },
            {
                "word": "urinal",
                "partOfSpeech": "noun",
                "translation": "pisoaari"
            },
            {
                "word": "adjust",
                "partOfSpeech": "verb",
                "translation": "säätää"
            },
            {
                "word": "approval",
                "partOfSpeech": "noun",
                "translation": "hyväksyntä"
            },
            {
                "word": "certificate",
                "partOfSpeech": "noun",
                "translation": "todistus"
            },
            {
                "word": "coach",
                "partOfSpeech": "verb",
                "translation": "valmentaa"
            },
            {
                "word": "complex",
                "partOfSpeech": "adjective",
                "translation": "monimutkainen"
            },
            {
                "word": "contestant",
                "partOfSpeech": "noun",
                "translation": "ottelija"
            },
            {
                "word": "drop",
                "partOfSpeech": "noun",
                "translation": "pisara"
            },
            {
                "word": "era",
                "partOfSpeech": "noun",
                "translation": "maailmankausi"
            },
            {
                "word": "exhibit",
                "partOfSpeech": "noun",
                "translation": "näyttely"
            },
            {
                "word": "fame",
                "partOfSpeech": "noun",
                "translation": "kuuluisuus"
            },
            {
                "word": "gene",
                "partOfSpeech": "noun",
                "translation": "geeni"
            },
            {
                "word": "invisible",
                "partOfSpeech": "adjective",
                "translation": "näkymätön"
            },
            {
                "word": "kitten",
                "partOfSpeech": "noun",
                "translation": "kissanpentu"
            },
            {
                "word": "laptop",
                "partOfSpeech": "noun",
                "translation": "läppäri"
            },
            {
                "word": "maniac",
                "partOfSpeech": "noun",
                "translation": "maanikko"
            },
            {
                "word": "myth",
                "partOfSpeech": "noun",
                "translation": "myytti"
            },
            {
                "word": "needle",
                "partOfSpeech": "noun",
                "translation": "neula"
            },
            {
                "word": "prime",
                "partOfSpeech": "adjective",
                "translation": "priima"
            },
            {
                "word": "puke",
                "partOfSpeech": "verb",
                "translation": "yrjötä, laatata"
            },
            {
                "word": "rating",
                "partOfSpeech": "noun",
                "translation": "luokitus"
            }
        ],
        "word_set61": [
            {
                "word": "reserve",
                "partOfSpeech": "verb",
                "translation": "varata"
            },
            {
                "word": "root",
                "partOfSpeech": "noun",
                "translation": "juuri"
            },
            {
                "word": "round",
                "partOfSpeech": "adjective",
                "translation": "pyöreä"
            },
            {
                "word": "sarcastic",
                "partOfSpeech": "adjective",
                "translation": "sarkastinen"
            },
            {
                "word": "shelf",
                "partOfSpeech": "noun",
                "translation": "hylly"
            },
            {
                "word": "skeleton",
                "partOfSpeech": "noun",
                "translation": "luuranko"
            },
            {
                "word": "submit",
                "partOfSpeech": "verb",
                "translation": "alistua"
            },
            {
                "word": "symptom",
                "partOfSpeech": "noun",
                "translation": "oire"
            },
            {
                "word": "virus",
                "partOfSpeech": "noun",
                "translation": "virus"
            },
            {
                "word": "barrel",
                "partOfSpeech": "noun",
                "translation": "tynnyri"
            },
            {
                "word": "applause",
                "partOfSpeech": "noun",
                "translation": "aplodi"
            },
            {
                "word": "average",
                "partOfSpeech": "adjective",
                "translation": "keskimääräinen"
            },
            {
                "word": "boil",
                "partOfSpeech": "verb",
                "translation": "kiehua"
            },
            {
                "word": "brag",
                "partOfSpeech": "verb",
                "translation": "kehuskella"
            },
            {
                "word": "donkey",
                "partOfSpeech": "noun",
                "translation": "aasi"
            },
            {
                "word": "equal",
                "partOfSpeech": "adjective",
                "translation": "tasavertainen"
            },
            {
                "word": "expand",
                "partOfSpeech": "verb",
                "translation": "laajentua"
            },
            {
                "word": "flu",
                "partOfSpeech": "noun",
                "translation": "lentsu"
            },
            {
                "word": "forehead",
                "partOfSpeech": "noun",
                "translation": "otsa"
            },
            {
                "word": "greet",
                "partOfSpeech": "verb",
                "translation": "tervehtiä"
            },
            {
                "word": "lifestyle",
                "partOfSpeech": "noun",
                "translation": "elämäntapa"
            },
            {
                "word": "outrage",
                "partOfSpeech": "noun",
                "translation": "ilkiteko"
            },
            {
                "word": "pasta",
                "partOfSpeech": "noun",
                "translation": "pasta"
            },
            {
                "word": "practical",
                "partOfSpeech": "adjective",
                "translation": "käytännöllinen"
            },
            {
                "word": "roast",
                "partOfSpeech": "noun",
                "translation": "paahto"
            },
            {
                "word": "salsa",
                "partOfSpeech": "noun",
                "translation": "salsa"
            },
            {
                "word": "shit",
                "partOfSpeech": "verb",
                "translation": "paskoa"
            },
            {
                "word": "shred",
                "partOfSpeech": "verb",
                "translation": "silputa"
            },
            {
                "word": "sloppy",
                "partOfSpeech": "adjective",
                "translation": "huolimaton"
            },
            {
                "word": "spray",
                "partOfSpeech": "noun",
                "translation": "sumute"
            },
            {
                "word": "suitcase",
                "partOfSpeech": "noun",
                "translation": "matkalaukku"
            },
            {
                "word": "tense",
                "partOfSpeech": "adjective",
                "translation": "jännittynyt"
            },
            {
                "word": "valley",
                "partOfSpeech": "noun",
                "translation": "laakso"
            },
            {
                "word": "web",
                "partOfSpeech": "noun",
                "translation": "webbi"
            },
            {
                "word": "appetite",
                "partOfSpeech": "noun",
                "translation": "ruokahalu"
            },
            {
                "word": "association",
                "partOfSpeech": "noun",
                "translation": "yhdistys"
            },
            {
                "word": "bun",
                "partOfSpeech": "noun",
                "translation": "pulla"
            },
            {
                "word": "clubhouse",
                "partOfSpeech": "noun",
                "translation": "klubitalo"
            },
            {
                "word": "critic",
                "partOfSpeech": "noun",
                "translation": "arvostelija"
            },
            {
                "word": "depressing",
                "partOfSpeech": "adjective",
                "translation": "masentava"
            }
        ],
        "word_set62": [
            {
                "word": "discovery",
                "partOfSpeech": "noun",
                "translation": "löytö"
            },
            {
                "word": "effective",
                "partOfSpeech": "adjective",
                "translation": "efektiivinen"
            },
            {
                "word": "excitement",
                "partOfSpeech": "noun",
                "translation": "jännitys"
            },
            {
                "word": "eyebrow",
                "partOfSpeech": "noun",
                "translation": "kulmakarva"
            },
            {
                "word": "fluffy",
                "partOfSpeech": "adjective",
                "translation": "pöyheä"
            },
            {
                "word": "headache",
                "partOfSpeech": "noun",
                "translation": "päänsärky"
            },
            {
                "word": "independent",
                "partOfSpeech": "adjective",
                "translation": "itsenäinen"
            },
            {
                "word": "integrity",
                "partOfSpeech": "noun",
                "translation": "suoraselkäisyys"
            },
            {
                "word": "karma",
                "partOfSpeech": "noun",
                "translation": "karma"
            },
            {
                "word": "lizard",
                "partOfSpeech": "noun",
                "translation": "lisko"
            },
            {
                "word": "poet",
                "partOfSpeech": "noun",
                "translation": "runoilija"
            },
            {
                "word": "relative",
                "partOfSpeech": "noun",
                "translation": "sukulainen"
            },
            {
                "word": "slam",
                "partOfSpeech": "verb",
                "translation": "mojauttaa"
            },
            {
                "word": "suit",
                "partOfSpeech": "verb",
                "translation": "soveltua"
            },
            {
                "word": "testing",
                "partOfSpeech": "noun",
                "translation": "testaus"
            },
            {
                "word": "twist",
                "partOfSpeech": "noun",
                "translation": "käänne"
            },
            {
                "word": "wardrobe",
                "partOfSpeech": "noun",
                "translation": "vaatekaappi"
            },
            {
                "word": "wrist",
                "partOfSpeech": "noun",
                "translation": "ranne"
            },
            {
                "word": "trail",
                "partOfSpeech": "noun",
                "translation": "reitti"
            },
            {
                "word": "bicycle",
                "partOfSpeech": "noun",
                "translation": "polkupyörä"
            },
            {
                "word": "allergy",
                "partOfSpeech": "noun",
                "translation": "allergia"
            },
            {
                "word": "atheist",
                "partOfSpeech": "noun",
                "translation": "ateisti"
            },
            {
                "word": "chamber",
                "partOfSpeech": "noun",
                "translation": "kammio"
            },
            {
                "word": "cheeseburger",
                "partOfSpeech": "noun",
                "translation": "juustohampurilainen"
            },
            {
                "word": "existence",
                "partOfSpeech": "noun",
                "translation": "olemassaolo"
            },
            {
                "word": "gallery",
                "partOfSpeech": "noun",
                "translation": "galleria"
            },
            {
                "word": "instinct",
                "partOfSpeech": "noun",
                "translation": "vaisto"
            },
            {
                "word": "loyal",
                "partOfSpeech": "adjective",
                "translation": "lojaali"
            },
            {
                "word": "maintain",
                "partOfSpeech": "verb",
                "translation": "ylläpitää"
            },
            {
                "word": "maintenance",
                "partOfSpeech": "noun",
                "translation": "kunnossapito"
            },
            {
                "word": "missile",
                "partOfSpeech": "noun",
                "translation": "ohjus"
            },
            {
                "word": "moist",
                "partOfSpeech": "adjective",
                "translation": "kostea"
            },
            {
                "word": "nag",
                "partOfSpeech": "verb",
                "translation": "nalkuttaa"
            },
            {
                "word": "paintball",
                "partOfSpeech": "noun",
                "translation": "värikuula"
            },
            {
                "word": "pattern",
                "partOfSpeech": "noun",
                "translation": "kuosi"
            },
            {
                "word": "physicist",
                "partOfSpeech": "noun",
                "translation": "fyysikko"
            },
            {
                "word": "polish",
                "partOfSpeech": "verb",
                "translation": "kiillottaa"
            },
            {
                "word": "reading",
                "partOfSpeech": "noun",
                "translation": "lukema"
            },
            {
                "word": "slight",
                "partOfSpeech": "adjective",
                "translation": "hienoinen"
            },
            {
                "word": "star",
                "partOfSpeech": "verb",
                "translation": "tähdittää"
            }
        ],
        "word_set63": [
            {
                "word": "temple",
                "partOfSpeech": "noun",
                "translation": "temppeli"
            },
            {
                "word": "torture",
                "partOfSpeech": "noun",
                "translation": "kidutus, rääkätä, kiduttaa"
            },
            {
                "word": "wax",
                "partOfSpeech": "noun",
                "translation": "vaha"
            },
            {
                "word": "wooden",
                "partOfSpeech": "adjective",
                "translation": "puinen"
            },
            {
                "word": "inner",
                "partOfSpeech": "adjective",
                "translation": "sisempi"
            },
            {
                "word": "elf",
                "partOfSpeech": "noun",
                "translation": "haltia"
            },
            {
                "word": "layer",
                "partOfSpeech": "noun",
                "translation": "kerros"
            },
            {
                "word": "cycle",
                "partOfSpeech": "noun",
                "translation": "sykli"
            },
            {
                "word": "decorate",
                "partOfSpeech": "verb",
                "translation": "koristella"
            },
            {
                "word": "definition",
                "partOfSpeech": "noun",
                "translation": "määritelmä"
            },
            {
                "word": "development",
                "partOfSpeech": "noun",
                "translation": "kehitys"
            },
            {
                "word": "discipline",
                "partOfSpeech": "noun",
                "translation": "kuri"
            },
            {
                "word": "ending",
                "partOfSpeech": "noun",
                "translation": "loppu"
            },
            {
                "word": "explosion",
                "partOfSpeech": "noun",
                "translation": "räjähdys"
            },
            {
                "word": "frozen",
                "partOfSpeech": "adjective",
                "translation": "routainen"
            },
            {
                "word": "guard",
                "partOfSpeech": "verb",
                "translation": "vartioida"
            },
            {
                "word": "hack",
                "partOfSpeech": "verb",
                "translation": "hakkeroida"
            },
            {
                "word": "interest",
                "partOfSpeech": "verb",
                "translation": "kiinnostaa"
            },
            {
                "word": "kite",
                "partOfSpeech": "noun",
                "translation": "leija"
            },
            {
                "word": "master",
                "partOfSpeech": "verb",
                "translation": "mestaroida"
            },
            {
                "word": "mortgage",
                "partOfSpeech": "noun",
                "translation": "asuntolaina"
            },
            {
                "word": "pact",
                "partOfSpeech": "noun",
                "translation": "pakti"
            },
            {
                "word": "palace",
                "partOfSpeech": "noun",
                "translation": "palatsi"
            },
            {
                "word": "password",
                "partOfSpeech": "noun",
                "translation": "tunnussana"
            },
            {
                "word": "pledge",
                "partOfSpeech": "noun",
                "translation": "pantti"
            },
            {
                "word": "pond",
                "partOfSpeech": "noun",
                "translation": "lampi"
            },
            {
                "word": "resolution",
                "partOfSpeech": "noun",
                "translation": "resoluutio"
            },
            {
                "word": "rig",
                "partOfSpeech": "verb",
                "translation": "takiloida"
            },
            {
                "word": "sacrifice",
                "partOfSpeech": "verb",
                "translation": "uhrata"
            },
            {
                "word": "sector",
                "partOfSpeech": "noun",
                "translation": "sektori"
            },
            {
                "word": "steam",
                "partOfSpeech": "verb",
                "translation": "höyrytä"
            },
            {
                "word": "sunset",
                "partOfSpeech": "noun",
                "translation": "iltarusko"
            },
            {
                "word": "superior",
                "partOfSpeech": "adjective",
                "translation": "ylempiarvoinen"
            },
            {
                "word": "surgeon",
                "partOfSpeech": "noun",
                "translation": "kirurgi"
            },
            {
                "word": "tease",
                "partOfSpeech": "verb",
                "translation": "härnätä"
            },
            {
                "word": "vegetarian",
                "partOfSpeech": "noun",
                "translation": "kasvissyöjä"
            },
            {
                "word": "wound",
                "partOfSpeech": "noun",
                "translation": "haava"
            },
            {
                "word": "pyramid",
                "partOfSpeech": "noun",
                "translation": "pyramidi"
            }
        ],
        "word_set64": [
            {
                "word": "buffet",
                "partOfSpeech": "noun",
                "translation": "buffet"
            },
            {
                "word": "appeal",
                "partOfSpeech": "verb",
                "translation": "vedota"
            },
            {
                "word": "arrangement",
                "partOfSpeech": "noun",
                "translation": "järjestely"
            },
            {
                "word": "base",
                "partOfSpeech": "noun",
                "translation": "perusta"
            },
            {
                "word": "blues",
                "partOfSpeech": "noun",
                "translation": "blues"
            },
            {
                "word": "closure",
                "partOfSpeech": "noun",
                "translation": "sulkeuma"
            },
            {
                "word": "dramatic",
                "partOfSpeech": "adjective",
                "translation": "dramaattinen"
            },
            {
                "word": "ill",
                "partOfSpeech": "adjective",
                "translation": "sairas"
            },
            {
                "word": "method",
                "partOfSpeech": "noun",
                "translation": "menetelmä"
            },
            {
                "word": "peel",
                "partOfSpeech": "verb",
                "translation": "kuoria"
            },
            {
                "word": "rash",
                "partOfSpeech": "noun",
                "translation": "ihottuma"
            },
            {
                "word": "sacrifice",
                "partOfSpeech": "noun",
                "translation": "uhraus"
            },
            {
                "word": "struggle",
                "partOfSpeech": "verb",
                "translation": "kärsiä"
            },
            {
                "word": "subtle",
                "partOfSpeech": "adjective",
                "translation": "hienovarainen"
            },
            {
                "word": "tension",
                "partOfSpeech": "noun",
                "translation": "kireys"
            },
            {
                "word": "wealthy",
                "partOfSpeech": "adjective",
                "translation": "varakas"
            },
            {
                "word": "rebel",
                "partOfSpeech": "noun",
                "translation": "kapinallinen"
            },
            {
                "word": "aim",
                "partOfSpeech": "verb",
                "translation": "sihdata"
            },
            {
                "word": "chubby",
                "partOfSpeech": "adjective",
                "translation": "pullea"
            },
            {
                "word": "comfort",
                "partOfSpeech": "verb",
                "translation": "lohduttaa"
            },
            {
                "word": "convert",
                "partOfSpeech": "verb",
                "translation": "käännyttää"
            },
            {
                "word": "division",
                "partOfSpeech": "noun",
                "translation": "divisioona"
            },
            {
                "word": "donation",
                "partOfSpeech": "noun",
                "translation": "lahjoitus"
            },
            {
                "word": "edit",
                "partOfSpeech": "verb",
                "translation": "editoida"
            },
            {
                "word": "flash",
                "partOfSpeech": "verb",
                "translation": "vilauttaa"
            },
            {
                "word": "flyer",
                "partOfSpeech": "noun",
                "translation": "lentolehtinen"
            },
            {
                "word": "goods",
                "partOfSpeech": "noun",
                "translation": "tavara"
            },
            {
                "word": "hamster",
                "partOfSpeech": "noun",
                "translation": "hamsteri"
            },
            {
                "word": "honesty",
                "partOfSpeech": "noun",
                "translation": "rehellisyys"
            },
            {
                "word": "ignorant",
                "partOfSpeech": "adjective",
                "translation": "ignorantti"
            },
            {
                "word": "inspiration",
                "partOfSpeech": "noun",
                "translation": "inspiraatio"
            },
            {
                "word": "masturbate",
                "partOfSpeech": "verb",
                "translation": "fäpätä, masturboida"
            },
            {
                "word": "melon",
                "partOfSpeech": "noun",
                "translation": "meloni"
            },
            {
                "word": "metaphor",
                "partOfSpeech": "noun",
                "translation": "metafora"
            },
            {
                "word": "midget",
                "partOfSpeech": "noun",
                "translation": "kääpiö"
            },
            {
                "word": "moral",
                "partOfSpeech": "adjective",
                "translation": "moraalinen"
            },
            {
                "word": "motel",
                "partOfSpeech": "noun",
                "translation": "motelli"
            },
            {
                "word": "participate",
                "partOfSpeech": "verb",
                "translation": "ottaa osaa"
            },
            {
                "word": "quarterback",
                "partOfSpeech": "noun",
                "translation": "pelinrakentaja"
            }
        ],
        "word_set65": [
            {
                "word": "radiation",
                "partOfSpeech": "noun",
                "translation": "säteily"
            },
            {
                "word": "raw",
                "partOfSpeech": "adjective",
                "translation": "raaka"
            },
            {
                "word": "relate",
                "partOfSpeech": "verb",
                "translation": "suhtautua"
            },
            {
                "word": "resident",
                "partOfSpeech": "noun",
                "translation": "asukas"
            },
            {
                "word": "southern",
                "partOfSpeech": "adjective",
                "translation": "eteläinen"
            },
            {
                "word": "sticky",
                "partOfSpeech": "adjective",
                "translation": "tahmea"
            },
            {
                "word": "tin",
                "partOfSpeech": "noun",
                "translation": "säilykepurkki"
            },
            {
                "word": "zoom",
                "partOfSpeech": "verb",
                "translation": "zoomata"
            },
            {
                "word": "spiritual",
                "partOfSpeech": "adjective",
                "translation": "hengellinen"
            },
            {
                "word": "slot",
                "partOfSpeech": "noun",
                "translation": "hahlo"
            },
            {
                "word": "activate",
                "partOfSpeech": "verb",
                "translation": "aktivoida"
            },
            {
                "word": "air",
                "partOfSpeech": "verb",
                "translation": "tuulettaa"
            },
            {
                "word": "briefcase",
                "partOfSpeech": "noun",
                "translation": "salkku"
            },
            {
                "word": "cologne",
                "partOfSpeech": "noun",
                "translation": "kölninvesi"
            },
            {
                "word": "competitive",
                "partOfSpeech": "adjective",
                "translation": "kilpailuhenkinen"
            },
            {
                "word": "cross",
                "partOfSpeech": "noun",
                "translation": "risti"
            },
            {
                "word": "depression",
                "partOfSpeech": "noun",
                "translation": "masennus"
            },
            {
                "word": "extend",
                "partOfSpeech": "verb",
                "translation": "ulottaa"
            },
            {
                "word": "fighter",
                "partOfSpeech": "noun",
                "translation": "sotija"
            },
            {
                "word": "graduation",
                "partOfSpeech": "noun",
                "translation": "valmistuminen"
            },
            {
                "word": "growth",
                "partOfSpeech": "noun",
                "translation": "kasvu"
            },
            {
                "word": "infect",
                "partOfSpeech": "verb",
                "translation": "tartuttaa"
            },
            {
                "word": "latte",
                "partOfSpeech": "noun",
                "translation": "latte"
            },
            {
                "word": "leak",
                "partOfSpeech": "noun",
                "translation": "vuoto"
            },
            {
                "word": "logical",
                "partOfSpeech": "adjective",
                "translation": "looginen"
            },
            {
                "word": "macaroni",
                "partOfSpeech": "noun",
                "translation": "makaroni"
            },
            {
                "word": "olive",
                "partOfSpeech": "noun",
                "translation": "oliivi"
            },
            {
                "word": "ordinary",
                "partOfSpeech": "adjective",
                "translation": "tavallinen"
            },
            {
                "word": "outer",
                "partOfSpeech": "adjective",
                "translation": "ulompi"
            },
            {
                "word": "patient",
                "partOfSpeech": "adjective",
                "translation": "kärsivällinen"
            },
            {
                "word": "peaceful",
                "partOfSpeech": "adjective",
                "translation": "rauhallinen"
            },
            {
                "word": "protocol",
                "partOfSpeech": "noun",
                "translation": "protokolla"
            },
            {
                "word": "realistic",
                "partOfSpeech": "adjective",
                "translation": "realistinen"
            },
            {
                "word": "recital",
                "partOfSpeech": "noun",
                "translation": "resitaali"
            },
            {
                "word": "sabotage",
                "partOfSpeech": "verb",
                "translation": "sabotoida"
            },
            {
                "word": "sparkle",
                "partOfSpeech": "verb",
                "translation": "kipinöidä"
            },
            {
                "word": "tow",
                "partOfSpeech": "verb",
                "translation": "hinata"
            },
            {
                "word": "vulnerable",
                "partOfSpeech": "adjective",
                "translation": "haavoittuva"
            },
            {
                "word": "wolf",
                "partOfSpeech": "noun",
                "translation": "hukka"
            },
            {
                "word": "perfume",
                "partOfSpeech": "verb",
                "translation": "hajustaa"
            }
        ],
        "word_set66": [
            {
                "word": "scar",
                "partOfSpeech": "noun",
                "translation": "arpi"
            },
            {
                "word": "address",
                "partOfSpeech": "verb",
                "translation": "tituloida"
            },
            {
                "word": "assign",
                "partOfSpeech": "verb",
                "translation": "nimittää"
            },
            {
                "word": "autograph",
                "partOfSpeech": "noun",
                "translation": "nimmari"
            },
            {
                "word": "billionaire",
                "partOfSpeech": "noun",
                "translation": "miljardööri"
            },
            {
                "word": "collapse",
                "partOfSpeech": "verb",
                "translation": "romahtaa"
            },
            {
                "word": "conditioning",
                "partOfSpeech": "noun",
                "translation": "ehdollistaminen"
            },
            {
                "word": "consequence",
                "partOfSpeech": "noun",
                "translation": "seuraus"
            },
            {
                "word": "crooked",
                "partOfSpeech": "adjective",
                "translation": "käyrä"
            },
            {
                "word": "cultural",
                "partOfSpeech": "adjective",
                "translation": "kulttuurinen"
            },
            {
                "word": "dating",
                "partOfSpeech": "noun",
                "translation": "seurustelu"
            },
            {
                "word": "examine",
                "partOfSpeech": "verb",
                "translation": "tutkia"
            },
            {
                "word": "fry",
                "partOfSpeech": "verb",
                "translation": "paistaa"
            },
            {
                "word": "hormone",
                "partOfSpeech": "noun",
                "translation": "hormoni"
            },
            {
                "word": "insecure",
                "partOfSpeech": "adjective",
                "translation": "epävarma"
            },
            {
                "word": "intention",
                "partOfSpeech": "noun",
                "translation": "aie"
            },
            {
                "word": "international",
                "partOfSpeech": "adjective",
                "translation": "kansainvälinen"
            },
            {
                "word": "karaoke",
                "partOfSpeech": "noun",
                "translation": "karaoke"
            },
            {
                "word": "maple",
                "partOfSpeech": "noun",
                "translation": "vaahtera"
            },
            {
                "word": "pose",
                "partOfSpeech": "verb",
                "translation": "poseerata"
            },
            {
                "word": "psychiatrist",
                "partOfSpeech": "noun",
                "translation": "psykiatri"
            },
            {
                "word": "repair",
                "partOfSpeech": "noun",
                "translation": "korjaustyö"
            },
            {
                "word": "shotgun",
                "partOfSpeech": "noun",
                "translation": "haulikko"
            },
            {
                "word": "steady",
                "partOfSpeech": "adjective",
                "translation": "vakaa"
            },
            {
                "word": "strategy",
                "partOfSpeech": "noun",
                "translation": "strategia"
            },
            {
                "word": "tempt",
                "partOfSpeech": "verb",
                "translation": "houkuttaa"
            },
            {
                "word": "hood",
                "partOfSpeech": "noun",
                "translation": "huppu"
            },
            {
                "word": "dawn",
                "partOfSpeech": "noun",
                "translation": "aamunkoitto"
            },
            {
                "word": "bathtub",
                "partOfSpeech": "noun",
                "translation": "amme"
            },
            {
                "word": "brutal",
                "partOfSpeech": "adjective",
                "translation": "brutaali"
            },
            {
                "word": "buzz",
                "partOfSpeech": "verb",
                "translation": "surista"
            },
            {
                "word": "campaign",
                "partOfSpeech": "noun",
                "translation": "kampanja"
            },
            {
                "word": "cranky",
                "partOfSpeech": "adjective",
                "translation": "ärtyisä"
            },
            {
                "word": "eternal",
                "partOfSpeech": "adjective",
                "translation": "iankaikkinen"
            },
            {
                "word": "foam",
                "partOfSpeech": "noun",
                "translation": "vaahto"
            },
            {
                "word": "google",
                "partOfSpeech": "verb",
                "translation": "googlata"
            },
            {
                "word": "greedy",
                "partOfSpeech": "adjective",
                "translation": "ahne"
            },
            {
                "word": "lava",
                "partOfSpeech": "noun",
                "translation": "laava"
            },
            {
                "word": "loosen",
                "partOfSpeech": "verb",
                "translation": "irrota"
            },
            {
                "word": "mailbox",
                "partOfSpeech": "noun",
                "translation": "postilaatikko"
            }
        ],
        "word_set67": [
            {
                "word": "naive",
                "partOfSpeech": "adjective",
                "translation": "naiivi"
            },
            {
                "word": "perspective",
                "partOfSpeech": "noun",
                "translation": "perspektiivi"
            },
            {
                "word": "plug",
                "partOfSpeech": "noun",
                "translation": "töpseli"
            },
            {
                "word": "privilege",
                "partOfSpeech": "noun",
                "translation": "etuoikeus"
            },
            {
                "word": "scarf",
                "partOfSpeech": "noun",
                "translation": "kaulaliina"
            },
            {
                "word": "start",
                "partOfSpeech": "noun",
                "translation": "alku"
            },
            {
                "word": "trainer",
                "partOfSpeech": "noun",
                "translation": "kouluttaja"
            },
            {
                "word": "unfortunate",
                "partOfSpeech": "adjective",
                "translation": "epäonninen"
            },
            {
                "word": "update",
                "partOfSpeech": "noun",
                "translation": "päivitys"
            },
            {
                "word": "volcano",
                "partOfSpeech": "noun",
                "translation": "tulivuori"
            },
            {
                "word": "weed",
                "partOfSpeech": "noun",
                "translation": "rikkaruoho"
            },
            {
                "word": "vault",
                "partOfSpeech": "noun",
                "translation": "holvi"
            },
            {
                "word": "permanent",
                "partOfSpeech": "adjective",
                "translation": "pysyvä"
            },
            {
                "word": "gag",
                "partOfSpeech": "noun",
                "translation": "suukapula"
            },
            {
                "word": "balance",
                "partOfSpeech": "verb",
                "translation": "tasapainottaa"
            },
            {
                "word": "bitter",
                "partOfSpeech": "adjective",
                "translation": "karvas"
            },
            {
                "word": "boo",
                "partOfSpeech": "verb",
                "translation": "buuata"
            },
            {
                "word": "comfort",
                "partOfSpeech": "noun",
                "translation": "mukavuus"
            },
            {
                "word": "communist",
                "partOfSpeech": "noun",
                "translation": "kommunisti"
            },
            {
                "word": "criticize",
                "partOfSpeech": "verb",
                "translation": "kritisoida"
            },
            {
                "word": "cutie",
                "partOfSpeech": "noun",
                "translation": "söpöläinen"
            },
            {
                "word": "demonstrate",
                "partOfSpeech": "verb",
                "translation": "demonstroida"
            },
            {
                "word": "dunk",
                "partOfSpeech": "verb",
                "translation": "donkata"
            },
            {
                "word": "edition",
                "partOfSpeech": "noun",
                "translation": "painos"
            },
            {
                "word": "embarrassment",
                "partOfSpeech": "noun",
                "translation": "nolous"
            },
            {
                "word": "extension",
                "partOfSpeech": "noun",
                "translation": "jatke"
            },
            {
                "word": "grind",
                "partOfSpeech": "verb",
                "translation": "jauhaa"
            },
            {
                "word": "hairy",
                "partOfSpeech": "adjective",
                "translation": "karvainen"
            },
            {
                "word": "handy",
                "partOfSpeech": "adjective",
                "translation": "kätevä"
            },
            {
                "word": "humble",
                "partOfSpeech": "adjective",
                "translation": "nöyrä"
            },
            {
                "word": "juggle",
                "partOfSpeech": "verb",
                "translation": "jongleerata"
            },
            {
                "word": "loyalty",
                "partOfSpeech": "noun",
                "translation": "uskollisuus"
            },
            {
                "word": "maestro",
                "partOfSpeech": "noun",
                "translation": "maestro"
            },
            {
                "word": "pee",
                "partOfSpeech": "noun",
                "translation": "pissa"
            },
            {
                "word": "pharmacy",
                "partOfSpeech": "noun",
                "translation": "apteekki"
            },
            {
                "word": "preserve",
                "partOfSpeech": "verb",
                "translation": "säilyttää"
            },
            {
                "word": "settlement",
                "partOfSpeech": "noun",
                "translation": "asutus"
            },
            {
                "word": "trailer",
                "partOfSpeech": "noun",
                "translation": "asuntovaunu"
            },
            {
                "word": "transform",
                "partOfSpeech": "verb",
                "translation": "muuntua"
            },
            {
                "word": "trust",
                "partOfSpeech": "noun",
                "translation": "luottamus"
            }
        ],
        "word_set68": [
            {
                "word": "weekly",
                "partOfSpeech": "adjective",
                "translation": "viikoittainen"
            },
            {
                "word": "blog",
                "partOfSpeech": "noun",
                "translation": "blogi"
            },
            {
                "word": "advise",
                "partOfSpeech": "verb",
                "translation": "neuvoa"
            },
            {
                "word": "altar",
                "partOfSpeech": "noun",
                "translation": "alttari"
            },
            {
                "word": "assembly",
                "partOfSpeech": "noun",
                "translation": "kokoonpano"
            },
            {
                "word": "beaver",
                "partOfSpeech": "noun",
                "translation": "majava"
            },
            {
                "word": "blazer",
                "partOfSpeech": "noun",
                "translation": "bleiseri"
            },
            {
                "word": "conspiracy",
                "partOfSpeech": "noun",
                "translation": "konspiraatio"
            },
            {
                "word": "critical",
                "partOfSpeech": "adjective",
                "translation": "kriittinen"
            },
            {
                "word": "devastated",
                "partOfSpeech": "adjective",
                "translation": "pöyristynyt"
            },
            {
                "word": "disappointment",
                "partOfSpeech": "noun",
                "translation": "pettymys"
            },
            {
                "word": "feather",
                "partOfSpeech": "noun",
                "translation": "sulka"
            },
            {
                "word": "goddess",
                "partOfSpeech": "noun",
                "translation": "jumalatar"
            },
            {
                "word": "housekeeper",
                "partOfSpeech": "noun",
                "translation": "emännöitsijä"
            },
            {
                "word": "immature",
                "partOfSpeech": "adjective",
                "translation": "epäkypsä"
            },
            {
                "word": "janitor",
                "partOfSpeech": "noun",
                "translation": "vaksi"
            },
            {
                "word": "lasagna",
                "partOfSpeech": "noun",
                "translation": "lasagne"
            },
            {
                "word": "penguin",
                "partOfSpeech": "noun",
                "translation": "pingviini"
            },
            {
                "word": "photographer",
                "partOfSpeech": "noun",
                "translation": "valokuvaaja"
            },
            {
                "word": "process",
                "partOfSpeech": "verb",
                "translation": "prosessoida"
            },
            {
                "word": "psychic",
                "partOfSpeech": "adjective",
                "translation": "psyykkinen"
            },
            {
                "word": "quote",
                "partOfSpeech": "noun",
                "translation": "noteeraus"
            },
            {
                "word": "racket",
                "partOfSpeech": "noun",
                "translation": "mellastus"
            },
            {
                "word": "region",
                "partOfSpeech": "noun",
                "translation": "seutu"
            },
            {
                "word": "sew",
                "partOfSpeech": "verb",
                "translation": "ommella"
            },
            {
                "word": "shatter",
                "partOfSpeech": "verb",
                "translation": "pirstoutua"
            },
            {
                "word": "sickness",
                "partOfSpeech": "noun",
                "translation": "sairaus"
            },
            {
                "word": "sidekick",
                "partOfSpeech": "noun",
                "translation": "salkunkantaja"
            },
            {
                "word": "spice",
                "partOfSpeech": "noun",
                "translation": "juustokumina"
            },
            {
                "word": "stir",
                "partOfSpeech": "verb",
                "translation": "hämmentää"
            },
            {
                "word": "structure",
                "partOfSpeech": "noun",
                "translation": "rakenne"
            },
            {
                "word": "tampon",
                "partOfSpeech": "noun",
                "translation": "tamponi"
            },
            {
                "word": "touchdown",
                "partOfSpeech": "noun",
                "translation": "touchdown"
            },
            {
                "word": "pimp",
                "partOfSpeech": "noun",
                "translation": "sutenööri"
            },
            {
                "word": "brief",
                "partOfSpeech": "adjective",
                "translation": "lyhytaikainen"
            },
            {
                "word": "anxiety",
                "partOfSpeech": "noun",
                "translation": "ahdistus"
            },
            {
                "word": "beat",
                "partOfSpeech": "noun",
                "translation": "biitti"
            },
            {
                "word": "buzz",
                "partOfSpeech": "noun",
                "translation": "sirinä"
            },
            {
                "word": "chemistry",
                "partOfSpeech": "noun",
                "translation": "kemia"
            },
            {
                "word": "diabetes",
                "partOfSpeech": "noun",
                "translation": "sokeritauti"
            }
        ],
        "word_set69": [
            {
                "word": "diarrhea",
                "partOfSpeech": "noun",
                "translation": "ripuli"
            },
            {
                "word": "dictionary",
                "partOfSpeech": "noun",
                "translation": "sanakirja"
            },
            {
                "word": "doorman",
                "partOfSpeech": "noun",
                "translation": "järjestyksenvalvoja"
            },
            {
                "word": "exploit",
                "partOfSpeech": "verb",
                "translation": "hyödyntää"
            },
            {
                "word": "fatty",
                "partOfSpeech": "noun",
                "translation": "punkero"
            },
            {
                "word": "fluid",
                "partOfSpeech": "noun",
                "translation": "fluidi"
            },
            {
                "word": "gender",
                "partOfSpeech": "noun",
                "translation": "sukupuoli"
            },
            {
                "word": "glitter",
                "partOfSpeech": "noun",
                "translation": "kimalle"
            },
            {
                "word": "harass",
                "partOfSpeech": "verb",
                "translation": "ahdistella"
            },
            {
                "word": "interfere",
                "partOfSpeech": "verb",
                "translation": "interferoida"
            },
            {
                "word": "irony",
                "partOfSpeech": "noun",
                "translation": "ironia"
            },
            {
                "word": "married",
                "partOfSpeech": "adjective",
                "translation": "nainut"
            },
            {
                "word": "previous",
                "partOfSpeech": "adjective",
                "translation": "edellinen"
            },
            {
                "word": "reminder",
                "partOfSpeech": "noun",
                "translation": "muistutus"
            },
            {
                "word": "rescue",
                "partOfSpeech": "noun",
                "translation": "pelastaminen"
            },
            {
                "word": "rodeo",
                "partOfSpeech": "noun",
                "translation": "rodeo"
            },
            {
                "word": "round",
                "partOfSpeech": "verb",
                "translation": "pyöristää"
            },
            {
                "word": "slippery",
                "partOfSpeech": "adjective",
                "translation": "liukas"
            },
            {
                "word": "smoker",
                "partOfSpeech": "noun",
                "translation": "tupakoija"
            },
            {
                "word": "tap",
                "partOfSpeech": "noun",
                "translation": "napaus"
            },
            {
                "word": "terror",
                "partOfSpeech": "noun",
                "translation": "terrori"
            },
            {
                "word": "villain",
                "partOfSpeech": "noun",
                "translation": "roisto"
            },
            {
                "word": "well",
                "partOfSpeech": "noun",
                "translation": "kaivo"
            },
            {
                "word": "stunt",
                "partOfSpeech": "verb",
                "translation": "kääpiöidä"
            },
            {
                "word": "vomit",
                "partOfSpeech": "noun",
                "translation": "oksennus"
            },
            {
                "word": "accurate",
                "partOfSpeech": "adjective",
                "translation": "paikkansapitävä"
            },
            {
                "word": "ash",
                "partOfSpeech": "noun",
                "translation": "tuhka"
            },
            {
                "word": "authentic",
                "partOfSpeech": "adjective",
                "translation": "autenttinen"
            },
            {
                "word": "basis",
                "partOfSpeech": "noun",
                "translation": "baasis"
            },
            {
                "word": "broken",
                "partOfSpeech": "adjective",
                "translation": "hajonnut"
            },
            {
                "word": "chemical",
                "partOfSpeech": "noun",
                "translation": "kemikaali"
            },
            {
                "word": "commissioner",
                "partOfSpeech": "noun",
                "translation": "komissaari"
            },
            {
                "word": "communication",
                "partOfSpeech": "noun",
                "translation": "viestintä"
            },
            {
                "word": "drive",
                "partOfSpeech": "noun",
                "translation": "draivi"
            },
            {
                "word": "engineer",
                "partOfSpeech": "noun",
                "translation": "insinööri"
            },
            {
                "word": "fax",
                "partOfSpeech": "noun",
                "translation": "faksi"
            },
            {
                "word": "fetch",
                "partOfSpeech": "verb",
                "translation": "noutaa"
            },
            {
                "word": "fried",
                "partOfSpeech": "adjective",
                "translation": "paistettu"
            },
            {
                "word": "godfather",
                "partOfSpeech": "noun",
                "translation": "kummi"
            },
            {
                "word": "harmless",
                "partOfSpeech": "adjective",
                "translation": "harmiton"
            }
        ],
        "word_set70": [
            {
                "word": "hurry",
                "partOfSpeech": "noun",
                "translation": "kiire"
            },
            {
                "word": "milkshake",
                "partOfSpeech": "noun",
                "translation": "pirtelö"
            },
            {
                "word": "negotiate",
                "partOfSpeech": "verb",
                "translation": "neuvotella"
            },
            {
                "word": "notebook",
                "partOfSpeech": "noun",
                "translation": "vihko"
            },
            {
                "word": "prop",
                "partOfSpeech": "noun",
                "translation": "rekvisiitta"
            },
            {
                "word": "quantum",
                "partOfSpeech": "noun",
                "translation": "kvantti"
            },
            {
                "word": "saxophone",
                "partOfSpeech": "noun",
                "translation": "saksofoni"
            },
            {
                "word": "smiley",
                "partOfSpeech": "noun",
                "translation": "hymiö"
            },
            {
                "word": "spaceship",
                "partOfSpeech": "noun",
                "translation": "avaruusalus"
            },
            {
                "word": "stem",
                "partOfSpeech": "noun",
                "translation": "kanta"
            },
            {
                "word": "sting",
                "partOfSpeech": "verb",
                "translation": "kirveltää"
            },
            {
                "word": "trade",
                "partOfSpeech": "noun",
                "translation": "kaupankäynti"
            },
            {
                "word": "urban",
                "partOfSpeech": "adjective",
                "translation": "urbaani"
            },
            {
                "word": "warrior",
                "partOfSpeech": "noun",
                "translation": "soturi"
            },
            {
                "word": "adore",
                "partOfSpeech": "verb",
                "translation": "ihailla"
            },
            {
                "word": "aggressive",
                "partOfSpeech": "adjective",
                "translation": "aggressiivinen"
            },
            {
                "word": "balcony",
                "partOfSpeech": "noun",
                "translation": "parveke"
            },
            {
                "word": "cappuccino",
                "partOfSpeech": "noun",
                "translation": "cappuccino"
            },
            {
                "word": "charm",
                "partOfSpeech": "noun",
                "translation": "charmi"
            },
            {
                "word": "cock",
                "partOfSpeech": "noun",
                "translation": "kulli"
            },
            {
                "word": "fatso",
                "partOfSpeech": "noun",
                "translation": "läskivasara"
            },
            {
                "word": "fiction",
                "partOfSpeech": "noun",
                "translation": "fiktio"
            },
            {
                "word": "headquarters",
                "partOfSpeech": "noun",
                "translation": "pääkallonpaikka"
            },
            {
                "word": "holder",
                "partOfSpeech": "noun",
                "translation": "pidike"
            },
            {
                "word": "ink",
                "partOfSpeech": "noun",
                "translation": "muste"
            },
            {
                "word": "instrument",
                "partOfSpeech": "noun",
                "translation": "instrumentti"
            },
            {
                "word": "liquid",
                "partOfSpeech": "noun",
                "translation": "neste"
            },
            {
                "word": "lump",
                "partOfSpeech": "noun",
                "translation": "paakku"
            },
            {
                "word": "magnet",
                "partOfSpeech": "noun",
                "translation": "magneetti"
            },
            {
                "word": "mail",
                "partOfSpeech": "verb",
                "translation": "postittaa"
            },
            {
                "word": "marketing",
                "partOfSpeech": "noun",
                "translation": "markkinointi"
            },
            {
                "word": "piggy",
                "partOfSpeech": "noun",
                "translation": "possu"
            },
            {
                "word": "pineapple",
                "partOfSpeech": "noun",
                "translation": "ananas"
            },
            {
                "word": "poo",
                "partOfSpeech": "noun",
                "translation": "kakka"
            },
            {
                "word": "porch",
                "partOfSpeech": "noun",
                "translation": "kuisti"
            },
            {
                "word": "predict",
                "partOfSpeech": "verb",
                "translation": "ennustaa"
            },
            {
                "word": "priority",
                "partOfSpeech": "noun",
                "translation": "prioriteetti"
            },
            {
                "word": "ramp",
                "partOfSpeech": "noun",
                "translation": "ramppi"
            },
            {
                "word": "receipt",
                "partOfSpeech": "noun",
                "translation": "kuitti"
            },
            {
                "word": "rusty",
                "partOfSpeech": "adjective",
                "translation": "ruosteinen"
            }
        ],
        "word_set71": [
            {
                "word": "sandal",
                "partOfSpeech": "noun",
                "translation": "sannikas"
            },
            {
                "word": "seize",
                "partOfSpeech": "verb",
                "translation": "vallata"
            },
            {
                "word": "servant",
                "partOfSpeech": "noun",
                "translation": "palvelija"
            },
            {
                "word": "shrink",
                "partOfSpeech": "verb",
                "translation": "kitistyä"
            },
            {
                "word": "significant",
                "partOfSpeech": "adjective",
                "translation": "merkittävä"
            },
            {
                "word": "slaughter",
                "partOfSpeech": "verb",
                "translation": "teurastaa"
            },
            {
                "word": "spine",
                "partOfSpeech": "noun",
                "translation": "ranka"
            },
            {
                "word": "stubborn",
                "partOfSpeech": "adjective",
                "translation": "itsepäinen"
            },
            {
                "word": "stumble",
                "partOfSpeech": "verb",
                "translation": "kompastua"
            },
            {
                "word": "trouble",
                "partOfSpeech": "verb",
                "translation": "vaivata"
            },
            {
                "word": "upset",
                "partOfSpeech": "verb",
                "translation": "pahastuttaa"
            },
            {
                "word": "urgent",
                "partOfSpeech": "adjective",
                "translation": "kiireellinen"
            },
            {
                "word": "veal",
                "partOfSpeech": "noun",
                "translation": "vasikanliha"
            },
            {
                "word": "sewer",
                "partOfSpeech": "noun",
                "translation": "viemäri"
            },
            {
                "word": "driving",
                "partOfSpeech": "noun",
                "translation": "ajo"
            },
            {
                "word": "abort",
                "partOfSpeech": "verb",
                "translation": "abortoida"
            },
            {
                "word": "active",
                "partOfSpeech": "adjective",
                "translation": "aktiivi"
            },
            {
                "word": "aid",
                "partOfSpeech": "noun",
                "translation": "apuneuvo"
            },
            {
                "word": "aspirin",
                "partOfSpeech": "noun",
                "translation": "aspiriini"
            },
            {
                "word": "bakery",
                "partOfSpeech": "noun",
                "translation": "leipomo"
            },
            {
                "word": "bold",
                "partOfSpeech": "adjective",
                "translation": "uskalias"
            },
            {
                "word": "bomb",
                "partOfSpeech": "verb",
                "translation": "pommittaa"
            },
            {
                "word": "brat",
                "partOfSpeech": "noun",
                "translation": "penikka"
            },
            {
                "word": "cemetery",
                "partOfSpeech": "noun",
                "translation": "hautausmaa"
            },
            {
                "word": "cleanse",
                "partOfSpeech": "verb",
                "translation": "puhdistautua"
            },
            {
                "word": "colleague",
                "partOfSpeech": "noun",
                "translation": "kollega"
            },
            {
                "word": "colon",
                "partOfSpeech": "noun",
                "translation": "kaksoispiste"
            },
            {
                "word": "confusion",
                "partOfSpeech": "noun",
                "translation": "hämmennys"
            },
            {
                "word": "congratulate",
                "partOfSpeech": "verb",
                "translation": "onnitella"
            },
            {
                "word": "context",
                "partOfSpeech": "noun",
                "translation": "asiayhteys"
            },
            {
                "word": "demand",
                "partOfSpeech": "noun",
                "translation": "kysyntä"
            },
            {
                "word": "dull",
                "partOfSpeech": "adjective",
                "translation": "tylsä"
            },
            {
                "word": "ego",
                "partOfSpeech": "noun",
                "translation": "ego"
            },
            {
                "word": "fog",
                "partOfSpeech": "noun",
                "translation": "sumu"
            },
            {
                "word": "fuzzy",
                "partOfSpeech": "adjective",
                "translation": "sumea"
            },
            {
                "word": "individual",
                "partOfSpeech": "noun",
                "translation": "yksilö"
            },
            {
                "word": "investigation",
                "partOfSpeech": "noun",
                "translation": "selvitystyö"
            },
            {
                "word": "investor",
                "partOfSpeech": "noun",
                "translation": "sijoittaja"
            },
            {
                "word": "irresponsible",
                "partOfSpeech": "adjective",
                "translation": "vastuuton"
            },
            {
                "word": "knit",
                "partOfSpeech": "verb",
                "translation": "neuloa"
            }
        ],
        "word_set72": [
            {
                "word": "meter",
                "partOfSpeech": "noun",
                "translation": "mittari"
            },
            {
                "word": "oatmeal",
                "partOfSpeech": "noun",
                "translation": "kauraryyni"
            },
            {
                "word": "overcome",
                "partOfSpeech": "verb",
                "translation": "klaarata"
            },
            {
                "word": "plaque",
                "partOfSpeech": "noun",
                "translation": "kyltti"
            },
            {
                "word": "reflect",
                "partOfSpeech": "verb",
                "translation": "heijastaa"
            },
            {
                "word": "relation",
                "partOfSpeech": "noun",
                "translation": "relaatio"
            },
            {
                "word": "seat",
                "partOfSpeech": "verb",
                "translation": "plaseerata"
            },
            {
                "word": "shack",
                "partOfSpeech": "noun",
                "translation": "hökkeli"
            },
            {
                "word": "sincere",
                "partOfSpeech": "adjective",
                "translation": "vilpitön"
            },
            {
                "word": "slice",
                "partOfSpeech": "verb",
                "translation": "viipaloida"
            },
            {
                "word": "theft",
                "partOfSpeech": "noun",
                "translation": "varkaus"
            },
            {
                "word": "unnecessary",
                "partOfSpeech": "adjective",
                "translation": "aiheeton"
            },
            {
                "word": "unpleasant",
                "partOfSpeech": "adjective",
                "translation": "epämiellyttävä"
            },
            {
                "word": "vase",
                "partOfSpeech": "noun",
                "translation": "maljakko"
            },
            {
                "word": "waist",
                "partOfSpeech": "noun",
                "translation": "vyötärö"
            },
            {
                "word": "premiere",
                "partOfSpeech": "noun",
                "translation": "ensi-ilta"
            },
            {
                "word": "thunder",
                "partOfSpeech": "noun",
                "translation": "ukkonen"
            },
            {
                "word": "bizarre",
                "partOfSpeech": "adjective",
                "translation": "omituinen"
            },
            {
                "word": "cliff",
                "partOfSpeech": "noun",
                "translation": "jyrkänne"
            },
            {
                "word": "comb",
                "partOfSpeech": "verb",
                "translation": "kammata"
            },
            {
                "word": "curl",
                "partOfSpeech": "verb",
                "translation": "kihartaa"
            },
            {
                "word": "district",
                "partOfSpeech": "noun",
                "translation": "rajoni"
            },
            {
                "word": "emperor",
                "partOfSpeech": "noun",
                "translation": "keisari"
            },
            {
                "word": "endless",
                "partOfSpeech": "adjective",
                "translation": "loputon"
            },
            {
                "word": "fantasize",
                "partOfSpeech": "verb",
                "translation": "fantasioida"
            },
            {
                "word": "folk",
                "partOfSpeech": "noun",
                "translation": "folk"
            },
            {
                "word": "forward",
                "partOfSpeech": "verb",
                "translation": "huolita"
            },
            {
                "word": "gap",
                "partOfSpeech": "noun",
                "translation": "väli"
            },
            {
                "word": "illusion",
                "partOfSpeech": "noun",
                "translation": "harha"
            },
            {
                "word": "infection",
                "partOfSpeech": "noun",
                "translation": "infektio"
            },
            {
                "word": "influence",
                "partOfSpeech": "noun",
                "translation": "vaikutus"
            },
            {
                "word": "liberal",
                "partOfSpeech": "adjective",
                "translation": "liberaali"
            },
            {
                "word": "monitor",
                "partOfSpeech": "noun",
                "translation": "näyttö"
            },
            {
                "word": "mutual",
                "partOfSpeech": "adjective",
                "translation": "molemminpuolinen"
            },
            {
                "word": "object",
                "partOfSpeech": "verb",
                "translation": "vastustaa"
            },
            {
                "word": "patience",
                "partOfSpeech": "noun",
                "translation": "kärsivällisyys"
            },
            {
                "word": "pickup",
                "partOfSpeech": "noun",
                "translation": "äänipää"
            },
            {
                "word": "portrait",
                "partOfSpeech": "noun",
                "translation": "potretti"
            },
            {
                "word": "rabies",
                "partOfSpeech": "noun",
                "translation": "vesikauhu"
            },
            {
                "word": "relevant",
                "partOfSpeech": "adjective",
                "translation": "relevantti"
            }
        ],
        "word_set73": [
            {
                "word": "satisfaction",
                "partOfSpeech": "noun",
                "translation": "mielihyvä"
            },
            {
                "word": "sponsor",
                "partOfSpeech": "verb",
                "translation": "sponsoroida"
            },
            {
                "word": "steel",
                "partOfSpeech": "noun",
                "translation": "teräs"
            },
            {
                "word": "subtitle",
                "partOfSpeech": "noun",
                "translation": "tekstitys"
            },
            {
                "word": "tackle",
                "partOfSpeech": "verb",
                "translation": "taklata"
            },
            {
                "word": "tacky",
                "partOfSpeech": "adjective",
                "translation": "nahkea"
            },
            {
                "word": "territory",
                "partOfSpeech": "noun",
                "translation": "reviiri"
            },
            {
                "word": "tourist",
                "partOfSpeech": "noun",
                "translation": "turisti"
            },
            {
                "word": "trim",
                "partOfSpeech": "verb",
                "translation": "trimmata"
            },
            {
                "word": "vegan",
                "partOfSpeech": "noun",
                "translation": "vegaani"
            },
            {
                "word": "womb",
                "partOfSpeech": "noun",
                "translation": "kohtu"
            },
            {
                "word": "paw",
                "partOfSpeech": "noun",
                "translation": "käpälä"
            },
            {
                "word": "absence",
                "partOfSpeech": "noun",
                "translation": "poissaolo"
            },
            {
                "word": "acceptable",
                "partOfSpeech": "adjective",
                "translation": "hyväksyttävä"
            },
            {
                "word": "assistance",
                "partOfSpeech": "noun",
                "translation": "avustaminen"
            },
            {
                "word": "back",
                "partOfSpeech": "verb",
                "translation": "peruuttaa"
            },
            {
                "word": "bluff",
                "partOfSpeech": "verb",
                "translation": "bluffata"
            },
            {
                "word": "bribe",
                "partOfSpeech": "verb",
                "translation": "lahjoa"
            },
            {
                "word": "conceive",
                "partOfSpeech": "verb",
                "translation": "kehitellä"
            },
            {
                "word": "diner",
                "partOfSpeech": "noun",
                "translation": "ruokailija"
            },
            {
                "word": "donor",
                "partOfSpeech": "noun",
                "translation": "lahjoittaja"
            },
            {
                "word": "drill",
                "partOfSpeech": "verb",
                "translation": "porata"
            },
            {
                "word": "flow",
                "partOfSpeech": "verb",
                "translation": "virrata"
            },
            {
                "word": "garlic",
                "partOfSpeech": "noun",
                "translation": "valkosipuli"
            },
            {
                "word": "groin",
                "partOfSpeech": "noun",
                "translation": "nivuset"
            },
            {
                "word": "hike",
                "partOfSpeech": "verb",
                "translation": "retkeillä"
            },
            {
                "word": "importance",
                "partOfSpeech": "noun",
                "translation": "tärkeys"
            },
            {
                "word": "intimacy",
                "partOfSpeech": "noun",
                "translation": "intiimiys"
            },
            {
                "word": "inventor",
                "partOfSpeech": "noun",
                "translation": "keksijä"
            },
            {
                "word": "mentor",
                "partOfSpeech": "noun",
                "translation": "mentori"
            },
            {
                "word": "mummy",
                "partOfSpeech": "noun",
                "translation": "muumio"
            },
            {
                "word": "pamphlet",
                "partOfSpeech": "noun",
                "translation": "pamfletti"
            },
            {
                "word": "pause",
                "partOfSpeech": "verb",
                "translation": "tauota"
            },
            {
                "word": "rooster",
                "partOfSpeech": "noun",
                "translation": "kukko"
            },
            {
                "word": "scramble",
                "partOfSpeech": "verb",
                "translation": "könytä"
            },
            {
                "word": "sensation",
                "partOfSpeech": "noun",
                "translation": "sensaatio"
            },
            {
                "word": "shuttle",
                "partOfSpeech": "noun",
                "translation": "sukkula"
            },
            {
                "word": "storm",
                "partOfSpeech": "verb",
                "translation": "myrskytä"
            },
            {
                "word": "tan",
                "partOfSpeech": "verb",
                "translation": "ruskettua"
            },
            {
                "word": "tango",
                "partOfSpeech": "noun",
                "translation": "tango"
            }
        ],
        "word_set74": [
            {
                "word": "unexpected",
                "partOfSpeech": "adjective",
                "translation": "odottamaton"
            },
            {
                "word": "unicorn",
                "partOfSpeech": "noun",
                "translation": "yksisarvinen"
            },
            {
                "word": "unknown",
                "partOfSpeech": "adjective",
                "translation": "tuntematon"
            },
            {
                "word": "useful",
                "partOfSpeech": "adjective",
                "translation": "hyödyllinen"
            },
            {
                "word": "vicious",
                "partOfSpeech": "adjective",
                "translation": "paheellinen"
            },
            {
                "word": "voter",
                "partOfSpeech": "noun",
                "translation": "äänestäjä"
            },
            {
                "word": "warning",
                "partOfSpeech": "noun",
                "translation": "varoitus"
            },
            {
                "word": "writing",
                "partOfSpeech": "noun",
                "translation": "kirjoitus"
            },
            {
                "word": "photograph",
                "partOfSpeech": "noun",
                "translation": "valokuva"
            },
            {
                "word": "animate",
                "partOfSpeech": "verb",
                "translation": "animoida"
            },
            {
                "word": "atmosphere",
                "partOfSpeech": "noun",
                "translation": "ilmakehä"
            },
            {
                "word": "boundary",
                "partOfSpeech": "noun",
                "translation": "raja"
            },
            {
                "word": "cherish",
                "partOfSpeech": "verb",
                "translation": "vaalia"
            },
            {
                "word": "civilization",
                "partOfSpeech": "noun",
                "translation": "sivilisaatio"
            },
            {
                "word": "commander",
                "partOfSpeech": "noun",
                "translation": "komentaja"
            },
            {
                "word": "conquer",
                "partOfSpeech": "verb",
                "translation": "valloittaa"
            },
            {
                "word": "convenience",
                "partOfSpeech": "noun",
                "translation": "kätevyys"
            },
            {
                "word": "cook",
                "partOfSpeech": "noun",
                "translation": "keittäjä"
            },
            {
                "word": "cram",
                "partOfSpeech": "verb",
                "translation": "ahtaa"
            },
            {
                "word": "deadline",
                "partOfSpeech": "noun",
                "translation": "määräaika"
            },
            {
                "word": "dresser",
                "partOfSpeech": "noun",
                "translation": "piironki"
            },
            {
                "word": "elegant",
                "partOfSpeech": "adjective",
                "translation": "elegantti"
            },
            {
                "word": "empire",
                "partOfSpeech": "noun",
                "translation": "imperiumi"
            },
            {
                "word": "grandson",
                "partOfSpeech": "noun",
                "translation": "tyttärenpoika"
            },
            {
                "word": "helpless",
                "partOfSpeech": "adjective",
                "translation": "avuton"
            },
            {
                "word": "hike",
                "partOfSpeech": "noun",
                "translation": "vaellus"
            },
            {
                "word": "identical",
                "partOfSpeech": "adjective",
                "translation": "identtinen"
            },
            {
                "word": "itch",
                "partOfSpeech": "verb",
                "translation": "syyhytä"
            },
            {
                "word": "mannequin",
                "partOfSpeech": "noun",
                "translation": "mannekiini"
            },
            {
                "word": "motivate",
                "partOfSpeech": "verb",
                "translation": "motivoida"
            },
            {
                "word": "passport",
                "partOfSpeech": "noun",
                "translation": "ulkomaanpassi"
            },
            {
                "word": "pharmacist",
                "partOfSpeech": "noun",
                "translation": "apteekkari"
            },
            {
                "word": "planetarium",
                "partOfSpeech": "noun",
                "translation": "planetaario"
            },
            {
                "word": "poisoning",
                "partOfSpeech": "noun",
                "translation": "myrkytys"
            },
            {
                "word": "policeman",
                "partOfSpeech": "noun",
                "translation": "poliisimies"
            },
            {
                "word": "profile",
                "partOfSpeech": "noun",
                "translation": "profiili"
            },
            {
                "word": "robbery",
                "partOfSpeech": "noun",
                "translation": "ryöstö"
            },
            {
                "word": "spontaneous",
                "partOfSpeech": "adjective",
                "translation": "spontaani"
            },
            {
                "word": "stunning",
                "partOfSpeech": "adjective",
                "translation": "tyrmäävä"
            },
            {
                "word": "tab",
                "partOfSpeech": "noun",
                "translation": "välilehti"
            }
        ],
        "word_set75": [
            {
                "word": "toast",
                "partOfSpeech": "verb",
                "translation": "skoolata"
            },
            {
                "word": "tolerate",
                "partOfSpeech": "verb",
                "translation": "sietää"
            },
            {
                "word": "tuxedo",
                "partOfSpeech": "noun",
                "translation": "smokki"
            },
            {
                "word": "wand",
                "partOfSpeech": "noun",
                "translation": "sauva"
            },
            {
                "word": "dimension",
                "partOfSpeech": "noun",
                "translation": "dimensio"
            },
            {
                "word": "affection",
                "partOfSpeech": "noun",
                "translation": "kiintymys"
            },
            {
                "word": "anchor",
                "partOfSpeech": "verb",
                "translation": "ankkuroida"
            },
            {
                "word": "anthropology",
                "partOfSpeech": "noun",
                "translation": "antropologia"
            },
            {
                "word": "atom",
                "partOfSpeech": "noun",
                "translation": "atomi"
            },
            {
                "word": "blend",
                "partOfSpeech": "verb",
                "translation": "blandata"
            },
            {
                "word": "blink",
                "partOfSpeech": "verb",
                "translation": "räpyttää"
            },
            {
                "word": "blonde",
                "partOfSpeech": "noun",
                "translation": "blondi"
            },
            {
                "word": "brochure",
                "partOfSpeech": "noun",
                "translation": "brosyyri"
            },
            {
                "word": "clay",
                "partOfSpeech": "noun",
                "translation": "savi"
            },
            {
                "word": "correction",
                "partOfSpeech": "noun",
                "translation": "korjaus"
            },
            {
                "word": "curly",
                "partOfSpeech": "adjective",
                "translation": "kihara"
            },
            {
                "word": "custody",
                "partOfSpeech": "noun",
                "translation": "huoltajuus"
            },
            {
                "word": "direct",
                "partOfSpeech": "adjective",
                "translation": "suoranainen"
            },
            {
                "word": "diversity",
                "partOfSpeech": "noun",
                "translation": "moninaisuus"
            },
            {
                "word": "dye",
                "partOfSpeech": "verb",
                "translation": "sävyttää"
            },
            {
                "word": "dynamite",
                "partOfSpeech": "noun",
                "translation": "dynamiitti"
            },
            {
                "word": "equation",
                "partOfSpeech": "noun",
                "translation": "yhtälö"
            },
            {
                "word": "exclusive",
                "partOfSpeech": "adjective",
                "translation": "yksinomainen"
            },
            {
                "word": "hoop",
                "partOfSpeech": "noun",
                "translation": "vanne"
            },
            {
                "word": "jealousy",
                "partOfSpeech": "noun",
                "translation": "mustasukkaisuus"
            },
            {
                "word": "kingdom",
                "partOfSpeech": "noun",
                "translation": "kuningaskunta"
            },
            {
                "word": "label",
                "partOfSpeech": "verb",
                "translation": "nimiöidä"
            },
            {
                "word": "lying",
                "partOfSpeech": "noun",
                "translation": "makuu"
            },
            {
                "word": "manipulate",
                "partOfSpeech": "verb",
                "translation": "manipuloida"
            },
            {
                "word": "mechanic",
                "partOfSpeech": "noun",
                "translation": "asentaja"
            },
            {
                "word": "mode",
                "partOfSpeech": "noun",
                "translation": "moodi"
            },
            {
                "word": "oath",
                "partOfSpeech": "noun",
                "translation": "vala"
            },
            {
                "word": "owl",
                "partOfSpeech": "noun",
                "translation": "pöllö"
            },
            {
                "word": "pope",
                "partOfSpeech": "noun",
                "translation": "paavi"
            },
            {
                "word": "reputation",
                "partOfSpeech": "noun",
                "translation": "maine"
            },
            {
                "word": "restore",
                "partOfSpeech": "verb",
                "translation": "entisöidä"
            },
            {
                "word": "rhyme",
                "partOfSpeech": "verb",
                "translation": "rimmata"
            },
            {
                "word": "rum",
                "partOfSpeech": "noun",
                "translation": "rommi"
            },
            {
                "word": "screw",
                "partOfSpeech": "noun",
                "translation": "ruuvi"
            },
            {
                "word": "scrotum",
                "partOfSpeech": "noun",
                "translation": "kivespussi"
            }
        ],
        "word_set76": [
            {
                "word": "spoiler",
                "partOfSpeech": "noun",
                "translation": "pilaaja"
            },
            {
                "word": "superstar",
                "partOfSpeech": "noun",
                "translation": "supertähti"
            },
            {
                "word": "surface",
                "partOfSpeech": "noun",
                "translation": "pinta"
            },
            {
                "word": "tweet",
                "partOfSpeech": "verb",
                "translation": "piipittää"
            },
            {
                "word": "veteran",
                "partOfSpeech": "noun",
                "translation": "veteraani"
            },
            {
                "word": "viewer",
                "partOfSpeech": "noun",
                "translation": "katsoja"
            },
            {
                "word": "wax",
                "partOfSpeech": "verb",
                "translation": "vahata"
            },
            {
                "word": "whine",
                "partOfSpeech": "verb",
                "translation": "valittaa"
            },
            {
                "word": "bait",
                "partOfSpeech": "noun",
                "translation": "syötti"
            },
            {
                "word": "epic",
                "partOfSpeech": "adjective",
                "translation": "eeppinen"
            },
            {
                "word": "execute",
                "partOfSpeech": "verb",
                "translation": "teloittaa"
            },
            {
                "word": "fireplace",
                "partOfSpeech": "noun",
                "translation": "takka"
            },
            {
                "word": "flee",
                "partOfSpeech": "verb",
                "translation": "pakoilla"
            },
            {
                "word": "flood",
                "partOfSpeech": "noun",
                "translation": "tulva"
            },
            {
                "word": "heritage",
                "partOfSpeech": "noun",
                "translation": "perintö"
            },
            {
                "word": "housewife",
                "partOfSpeech": "noun",
                "translation": "kotirouva"
            },
            {
                "word": "lieutenant",
                "partOfSpeech": "noun",
                "translation": "luutnantti"
            },
            {
                "word": "lovable",
                "partOfSpeech": "adjective",
                "translation": "rakastettava"
            },
            {
                "word": "mayonnaise",
                "partOfSpeech": "noun",
                "translation": "majoneesi"
            },
            {
                "word": "microphone",
                "partOfSpeech": "noun",
                "translation": "mikrofoni"
            },
            {
                "word": "nudity",
                "partOfSpeech": "noun",
                "translation": "alastomuus"
            },
            {
                "word": "obligation",
                "partOfSpeech": "noun",
                "translation": "velvoite"
            },
            {
                "word": "obsession",
                "partOfSpeech": "noun",
                "translation": "pakkomielle"
            },
            {
                "word": "patrol",
                "partOfSpeech": "noun",
                "translation": "partio"
            },
            {
                "word": "salty",
                "partOfSpeech": "adjective",
                "translation": "suolainen"
            },
            {
                "word": "schnapps",
                "partOfSpeech": "noun",
                "translation": "snapsi"
            },
            {
                "word": "steroid",
                "partOfSpeech": "noun",
                "translation": "steroidi"
            },
            {
                "word": "stomp",
                "partOfSpeech": "verb",
                "translation": "tallata"
            },
            {
                "word": "survival",
                "partOfSpeech": "noun",
                "translation": "selviytyminen"
            },
            {
                "word": "traitor",
                "partOfSpeech": "noun",
                "translation": "petturi"
            },
            {
                "word": "wait",
                "partOfSpeech": "noun",
                "translation": "odotus"
            },
            {
                "word": "arrival",
                "partOfSpeech": "noun",
                "translation": "saapuminen"
            },
            {
                "word": "bond",
                "partOfSpeech": "noun",
                "translation": "sidos"
            },
            {
                "word": "cattle",
                "partOfSpeech": "noun",
                "translation": "karja"
            },
            {
                "word": "chalk",
                "partOfSpeech": "noun",
                "translation": "liitu"
            },
            {
                "word": "cheater",
                "partOfSpeech": "noun",
                "translation": "petkuttaja"
            },
            {
                "word": "clone",
                "partOfSpeech": "noun",
                "translation": "klooni"
            },
            {
                "word": "cobra",
                "partOfSpeech": "noun",
                "translation": "kobra"
            },
            {
                "word": "contribution",
                "partOfSpeech": "noun",
                "translation": "myötävaikutus"
            },
            {
                "word": "cough",
                "partOfSpeech": "verb",
                "translation": "yskiä"
            }
        ],
        "word_set77": [
            {
                "word": "dip",
                "partOfSpeech": "verb",
                "translation": "dipata"
            },
            {
                "word": "doodle",
                "partOfSpeech": "verb",
                "translation": "riipustella"
            },
            {
                "word": "ease",
                "partOfSpeech": "verb",
                "translation": "helpottua"
            },
            {
                "word": "erection",
                "partOfSpeech": "noun",
                "translation": "erektio"
            },
            {
                "word": "ideal",
                "partOfSpeech": "adjective",
                "translation": "ihanteellinen"
            },
            {
                "word": "lease",
                "partOfSpeech": "noun",
                "translation": "vuokra"
            },
            {
                "word": "legendary",
                "partOfSpeech": "adjective",
                "translation": "legendaarinen"
            },
            {
                "word": "absurd",
                "partOfSpeech": "adjective",
                "translation": "absurdi"
            },
            {
                "word": "advertise",
                "partOfSpeech": "verb",
                "translation": "mainostaa"
            },
            {
                "word": "attraction",
                "partOfSpeech": "noun",
                "translation": "vetonaula"
            },
            {
                "word": "blow",
                "partOfSpeech": "noun",
                "translation": "laaki"
            },
            {
                "word": "brick",
                "partOfSpeech": "noun",
                "translation": "tiili"
            },
            {
                "word": "chilly",
                "partOfSpeech": "adjective",
                "translation": "kolea"
            },
            {
                "word": "classmate",
                "partOfSpeech": "noun",
                "translation": "luokkakaveri"
            },
            {
                "word": "consult",
                "partOfSpeech": "verb",
                "translation": "konsultoida"
            },
            {
                "word": "curiosity",
                "partOfSpeech": "noun",
                "translation": "kuriositeetti"
            },
            {
                "word": "educate",
                "partOfSpeech": "verb",
                "translation": "kouluttaa"
            },
            {
                "word": "educational",
                "partOfSpeech": "adjective",
                "translation": "opetuksellinen"
            },
            {
                "word": "enthusiasm",
                "partOfSpeech": "noun",
                "translation": "innostus"
            },
            {
                "word": "filth",
                "partOfSpeech": "noun",
                "translation": "saasta"
            },
            {
                "word": "fitness",
                "partOfSpeech": "noun",
                "translation": "kuntoilu"
            },
            {
                "word": "forgiveness",
                "partOfSpeech": "noun",
                "translation": "anteeksianto"
            },
            {
                "word": "genitals",
                "partOfSpeech": "noun",
                "translation": "genitaalit"
            },
            {
                "word": "guess",
                "partOfSpeech": "noun",
                "translation": "veikkaus"
            },
            {
                "word": "heroin",
                "partOfSpeech": "noun",
                "translation": "heroiini"
            },
            {
                "word": "household",
                "partOfSpeech": "noun",
                "translation": "kotitalous"
            },
            {
                "word": "infinite",
                "partOfSpeech": "adjective",
                "translation": "ääretön"
            },
            {
                "word": "inject",
                "partOfSpeech": "verb",
                "translation": "injektoida"
            },
            {
                "word": "leaf",
                "partOfSpeech": "noun",
                "translation": "lehti"
            },
            {
                "word": "leap",
                "partOfSpeech": "verb",
                "translation": "loikata, harppaus"
            },
            {
                "word": "link",
                "partOfSpeech": "noun",
                "translation": "linkki"
            },
            {
                "word": "loving",
                "partOfSpeech": "adjective",
                "translation": "rakas"
            },
            {
                "word": "manly",
                "partOfSpeech": "adjective",
                "translation": "miehekäs"
            },
            {
                "word": "masterpiece",
                "partOfSpeech": "noun",
                "translation": "mestariteos"
            },
            {
                "word": "opener",
                "partOfSpeech": "noun",
                "translation": "avaaja"
            },
            {
                "word": "orientation",
                "partOfSpeech": "noun",
                "translation": "suuntautuminen"
            },
            {
                "word": "origin",
                "partOfSpeech": "noun",
                "translation": "alkuperä"
            },
            {
                "word": "orphan",
                "partOfSpeech": "noun",
                "translation": "orpo"
            },
            {
                "word": "penalty",
                "partOfSpeech": "noun",
                "translation": "jäähy"
            }
        ],
        "word_set78": [
            {
                "word": "residence",
                "partOfSpeech": "noun",
                "translation": "residenssi"
            },
            {
                "word": "siren",
                "partOfSpeech": "noun",
                "translation": "sireeni"
            },
            {
                "word": "spank",
                "partOfSpeech": "verb",
                "translation": "pöllyttää"
            },
            {
                "word": "superpower",
                "partOfSpeech": "noun",
                "translation": "supervoima"
            },
            {
                "word": "violin",
                "partOfSpeech": "noun",
                "translation": "viulu"
            },
            {
                "word": "scent",
                "partOfSpeech": "noun",
                "translation": "haju"
            },
            {
                "word": "grip",
                "partOfSpeech": "noun",
                "translation": "pyyry"
            },
            {
                "word": "recorder",
                "partOfSpeech": "noun",
                "translation": "nokkahuilu"
            },
            {
                "word": "acceptance",
                "partOfSpeech": "noun",
                "translation": "hyväksymys"
            },
            {
                "word": "acquaintance",
                "partOfSpeech": "noun",
                "translation": "tuttava"
            },
            {
                "word": "acquire",
                "partOfSpeech": "verb",
                "translation": "hankkia"
            },
            {
                "word": "alternative",
                "partOfSpeech": "noun",
                "translation": "vaihtoehto"
            },
            {
                "word": "applaud",
                "partOfSpeech": "verb",
                "translation": "aplodeerata"
            },
            {
                "word": "capacity",
                "partOfSpeech": "noun",
                "translation": "kapasiteetti"
            },
            {
                "word": "childish",
                "partOfSpeech": "adjective",
                "translation": "lapsellinen"
            },
            {
                "word": "circle",
                "partOfSpeech": "verb",
                "translation": "ympyröidä"
            },
            {
                "word": "comment",
                "partOfSpeech": "verb",
                "translation": "kommentoida"
            },
            {
                "word": "exotic",
                "partOfSpeech": "adjective",
                "translation": "eksoottinen"
            },
            {
                "word": "giggle",
                "partOfSpeech": "verb",
                "translation": "kikattaa"
            },
            {
                "word": "historic",
                "partOfSpeech": "adjective",
                "translation": "historiallinen"
            },
            {
                "word": "limbo",
                "partOfSpeech": "noun",
                "translation": "helvetin esikartano"
            },
            {
                "word": "nurse",
                "partOfSpeech": "verb",
                "translation": "hoitaa"
            },
            {
                "word": "observation",
                "partOfSpeech": "noun",
                "translation": "havainnointi"
            },
            {
                "word": "philosophy",
                "partOfSpeech": "noun",
                "translation": "filosofia"
            },
            {
                "word": "recruit",
                "partOfSpeech": "verb",
                "translation": "rekrytoida"
            },
            {
                "word": "sexuality",
                "partOfSpeech": "noun",
                "translation": "seksuaalisuus"
            },
            {
                "word": "shenanigan",
                "partOfSpeech": "noun",
                "translation": "metku"
            },
            {
                "word": "silk",
                "partOfSpeech": "noun",
                "translation": "silkki"
            },
            {
                "word": "topless",
                "partOfSpeech": "adjective",
                "translation": "yläosaton"
            },
            {
                "word": "trauma",
                "partOfSpeech": "noun",
                "translation": "trauma"
            },
            {
                "word": "unemployed",
                "partOfSpeech": "adjective",
                "translation": "työtön"
            },
            {
                "word": "unlikely",
                "partOfSpeech": "adjective",
                "translation": "epätodennäköinen"
            },
            {
                "word": "update",
                "partOfSpeech": "verb",
                "translation": "päivittää"
            },
            {
                "word": "virginity",
                "partOfSpeech": "noun",
                "translation": "neitsyys"
            },
            {
                "word": "vitamin",
                "partOfSpeech": "noun",
                "translation": "vitamiini"
            },
            {
                "word": "whistle",
                "partOfSpeech": "verb",
                "translation": "viheltää"
            },
            {
                "word": "oral",
                "partOfSpeech": "adjective",
                "translation": "oraalinen"
            },
            {
                "word": "ashtray",
                "partOfSpeech": "noun",
                "translation": "tuhkakuppi"
            },
            {
                "word": "assist",
                "partOfSpeech": "verb",
                "translation": "avustaa"
            },
            {
                "word": "banker",
                "partOfSpeech": "noun",
                "translation": "pankkiiri"
            }
        ],
        "word_set79": [
            {
                "word": "benefit",
                "partOfSpeech": "verb",
                "translation": "hyödyttää"
            },
            {
                "word": "caffeine",
                "partOfSpeech": "noun",
                "translation": "kofeiini"
            },
            {
                "word": "chase",
                "partOfSpeech": "noun",
                "translation": "takaa-ajo"
            },
            {
                "word": "con",
                "partOfSpeech": "noun",
                "translation": "miinuspuoli"
            },
            {
                "word": "container",
                "partOfSpeech": "noun",
                "translation": "umpio"
            },
            {
                "word": "cord",
                "partOfSpeech": "noun",
                "translation": "johto"
            },
            {
                "word": "courthouse",
                "partOfSpeech": "noun",
                "translation": "oikeustalo"
            },
            {
                "word": "criticism",
                "partOfSpeech": "noun",
                "translation": "arvostelu"
            },
            {
                "word": "curb",
                "partOfSpeech": "noun",
                "translation": "reunakiveys"
            },
            {
                "word": "delight",
                "partOfSpeech": "verb",
                "translation": "ilahduttaa"
            },
            {
                "word": "distant",
                "partOfSpeech": "adjective",
                "translation": "kaukainen"
            },
            {
                "word": "erotic",
                "partOfSpeech": "adjective",
                "translation": "eroottinen"
            },
            {
                "word": "eyeball",
                "partOfSpeech": "noun",
                "translation": "silmämuna"
            },
            {
                "word": "freshen",
                "partOfSpeech": "verb",
                "translation": "raikastaa"
            },
            {
                "word": "galaxy",
                "partOfSpeech": "noun",
                "translation": "linnunrata"
            },
            {
                "word": "guardian",
                "partOfSpeech": "noun",
                "translation": "holhooja"
            },
            {
                "word": "highlight",
                "partOfSpeech": "noun",
                "translation": "koroste"
            },
            {
                "word": "hoard",
                "partOfSpeech": "verb",
                "translation": "hamstrata"
            },
            {
                "word": "hygiene",
                "partOfSpeech": "noun",
                "translation": "hygienia"
            },
            {
                "word": "institution",
                "partOfSpeech": "noun",
                "translation": "instituutio"
            },
            {
                "word": "maiden",
                "partOfSpeech": "noun",
                "translation": "neito"
            },
            {
                "word": "membership",
                "partOfSpeech": "noun",
                "translation": "jäsenyys"
            },
            {
                "word": "mild",
                "partOfSpeech": "adjective",
                "translation": "mieto"
            },
            {
                "word": "misery",
                "partOfSpeech": "noun",
                "translation": "kurjuus"
            },
            {
                "word": "mixer",
                "partOfSpeech": "noun",
                "translation": "vatkain"
            },
            {
                "word": "parlor",
                "partOfSpeech": "noun",
                "translation": "salonki"
            },
            {
                "word": "pity",
                "partOfSpeech": "verb",
                "translation": "sääliä"
            },
            {
                "word": "population",
                "partOfSpeech": "noun",
                "translation": "väestö"
            },
            {
                "word": "psychology",
                "partOfSpeech": "noun",
                "translation": "psykologia"
            },
            {
                "word": "risky",
                "partOfSpeech": "adjective",
                "translation": "riskialtis"
            },
            {
                "word": "robber",
                "partOfSpeech": "noun",
                "translation": "ryöstäjä"
            },
            {
                "word": "runner",
                "partOfSpeech": "noun",
                "translation": "juoksija"
            },
            {
                "word": "runway",
                "partOfSpeech": "noun",
                "translation": "kiitorata"
            },
            {
                "word": "scholarship",
                "partOfSpeech": "noun",
                "translation": "stipendi"
            },
            {
                "word": "slim",
                "partOfSpeech": "adjective",
                "translation": "hoikka"
            },
            {
                "word": "swimsuit",
                "partOfSpeech": "noun",
                "translation": "uima-asu"
            },
            {
                "word": "temporary",
                "partOfSpeech": "adjective",
                "translation": "tilapäinen"
            },
            {
                "word": "tequila",
                "partOfSpeech": "noun",
                "translation": "tequila"
            },
            {
                "word": "triple",
                "partOfSpeech": "adjective",
                "translation": "kolminkertainen"
            },
            {
                "word": "urinate",
                "partOfSpeech": "verb",
                "translation": "virtsata"
            }
        ],
        "word_set80": [
            {
                "word": "valid",
                "partOfSpeech": "adjective",
                "translation": "voimassa oleva"
            },
            {
                "word": "crown",
                "partOfSpeech": "noun",
                "translation": "kruunu"
            },
            {
                "word": "floss",
                "partOfSpeech": "verb",
                "translation": "langata"
            },
            {
                "word": "stew",
                "partOfSpeech": "noun",
                "translation": "muhennos"
            },
            {
                "word": "administration",
                "partOfSpeech": "noun",
                "translation": "administraatio"
            },
            {
                "word": "auction",
                "partOfSpeech": "noun",
                "translation": "huutokauppa"
            },
            {
                "word": "billboard",
                "partOfSpeech": "noun",
                "translation": "mainostaulu"
            },
            {
                "word": "bouquet",
                "partOfSpeech": "noun",
                "translation": "kukkakimppu"
            },
            {
                "word": "brainwash",
                "partOfSpeech": "verb",
                "translation": "aivopestä"
            },
            {
                "word": "casting",
                "partOfSpeech": "noun",
                "translation": "valanta"
            },
            {
                "word": "choir",
                "partOfSpeech": "noun",
                "translation": "kuoro"
            },
            {
                "word": "contraction",
                "partOfSpeech": "noun",
                "translation": "synnytyssupistus"
            },
            {
                "word": "creator",
                "partOfSpeech": "noun",
                "translation": "luoja"
            },
            {
                "word": "drain",
                "partOfSpeech": "noun",
                "translation": "dreeni"
            },
            {
                "word": "drip",
                "partOfSpeech": "verb",
                "translation": "pisaroida"
            },
            {
                "word": "espresso",
                "partOfSpeech": "noun",
                "translation": "espresso"
            },
            {
                "word": "essence",
                "partOfSpeech": "noun",
                "translation": "olemus"
            },
            {
                "word": "exclamation",
                "partOfSpeech": "noun",
                "translation": "huudahdus"
            },
            {
                "word": "experimental",
                "partOfSpeech": "adjective",
                "translation": "kokeellinen"
            },
            {
                "word": "faculty",
                "partOfSpeech": "noun",
                "translation": "tiedekunta"
            },
            {
                "word": "female",
                "partOfSpeech": "noun",
                "translation": "naaras"
            },
            {
                "word": "finale",
                "partOfSpeech": "noun",
                "translation": "finaali"
            },
            {
                "word": "flaw",
                "partOfSpeech": "noun",
                "translation": "vika"
            },
            {
                "word": "gallon",
                "partOfSpeech": "noun",
                "translation": "gallona"
            },
            {
                "word": "gardener",
                "partOfSpeech": "noun",
                "translation": "puutarhuri"
            },
            {
                "word": "greasy",
                "partOfSpeech": "adjective",
                "translation": "rasvainen"
            },
            {
                "word": "guide",
                "partOfSpeech": "verb",
                "translation": "opastaa"
            },
            {
                "word": "hammock",
                "partOfSpeech": "noun",
                "translation": "riippumatto"
            },
            {
                "word": "initiative",
                "partOfSpeech": "noun",
                "translation": "aloitekyky"
            },
            {
                "word": "live",
                "partOfSpeech": "adjective",
                "translation": "elävä"
            },
            {
                "word": "liver",
                "partOfSpeech": "noun",
                "translation": "maksa"
            },
            {
                "word": "loan",
                "partOfSpeech": "noun",
                "translation": "laina"
            },
            {
                "word": "military",
                "partOfSpeech": "adjective",
                "translation": "sotilaallinen"
            },
            {
                "word": "mosquito",
                "partOfSpeech": "noun",
                "translation": "hyttynen"
            },
            {
                "word": "mural",
                "partOfSpeech": "noun",
                "translation": "seinämaalaus"
            },
            {
                "word": "orchestra",
                "partOfSpeech": "noun",
                "translation": "soittokunta"
            },
            {
                "word": "orphanage",
                "partOfSpeech": "noun",
                "translation": "orpokoti"
            },
            {
                "word": "pimple",
                "partOfSpeech": "noun",
                "translation": "finni"
            },
            {
                "word": "portal",
                "partOfSpeech": "noun",
                "translation": "portaali"
            },
            {
                "word": "psychological",
                "partOfSpeech": "adjective",
                "translation": "psykologinen"
            }
        ],
        "word_set81": [
            {
                "word": "reckon",
                "partOfSpeech": "verb",
                "translation": "kässätä"
            },
            {
                "word": "recovery",
                "partOfSpeech": "noun",
                "translation": "elpyminen"
            },
            {
                "word": "simulate",
                "partOfSpeech": "verb",
                "translation": "simuloida"
            },
            {
                "word": "simulation",
                "partOfSpeech": "noun",
                "translation": "simulaatio"
            },
            {
                "word": "technical",
                "partOfSpeech": "adjective",
                "translation": "tekninen"
            },
            {
                "word": "tolerance",
                "partOfSpeech": "noun",
                "translation": "sietokyky"
            },
            {
                "word": "wilderness",
                "partOfSpeech": "noun",
                "translation": "erämaa"
            },
            {
                "word": "worm",
                "partOfSpeech": "noun",
                "translation": "mato"
            },
            {
                "word": "trigger",
                "partOfSpeech": "noun",
                "translation": "laukaisin"
            },
            {
                "word": "calf",
                "partOfSpeech": "noun",
                "translation": "vasa"
            },
            {
                "word": "accomplishment",
                "partOfSpeech": "noun",
                "translation": "aikaansaannos"
            },
            {
                "word": "age",
                "partOfSpeech": "verb",
                "translation": "ikääntyä, vanheta"
            },
            {
                "word": "blame",
                "partOfSpeech": "noun",
                "translation": "moite"
            },
            {
                "word": "cabbage",
                "partOfSpeech": "noun",
                "translation": "kaali"
            },
            {
                "word": "cocaine",
                "partOfSpeech": "noun",
                "translation": "kokaiini"
            },
            {
                "word": "colorful",
                "partOfSpeech": "adjective",
                "translation": "sävykäs"
            },
            {
                "word": "controversial",
                "partOfSpeech": "adjective",
                "translation": "kiistanalainen"
            },
            {
                "word": "courtroom",
                "partOfSpeech": "noun",
                "translation": "oikeussali"
            },
            {
                "word": "crispy",
                "partOfSpeech": "adjective",
                "translation": "rapea"
            },
            {
                "word": "delay",
                "partOfSpeech": "verb",
                "translation": "viivästyä"
            },
            {
                "word": "domestic",
                "partOfSpeech": "adjective",
                "translation": "kotimainen"
            },
            {
                "word": "eastern",
                "partOfSpeech": "adjective",
                "translation": "itäinen"
            },
            {
                "word": "exaggerate",
                "partOfSpeech": "verb",
                "translation": "liioitella"
            },
            {
                "word": "exercise",
                "partOfSpeech": "verb",
                "translation": "jumpata"
            },
            {
                "word": "formula",
                "partOfSpeech": "noun",
                "translation": "kaava"
            },
            {
                "word": "hostile",
                "partOfSpeech": "adjective",
                "translation": "vihamielinen"
            },
            {
                "word": "industrial",
                "partOfSpeech": "adjective",
                "translation": "teollinen"
            },
            {
                "word": "intern",
                "partOfSpeech": "noun",
                "translation": "harjoittelija"
            },
            {
                "word": "irrelevant",
                "partOfSpeech": "adjective",
                "translation": "epäoleellinen"
            },
            {
                "word": "knot",
                "partOfSpeech": "noun",
                "translation": "solmu"
            },
            {
                "word": "landlord",
                "partOfSpeech": "noun",
                "translation": "vuokranantaja"
            },
            {
                "word": "leadership",
                "partOfSpeech": "noun",
                "translation": "johtajuus"
            },
            {
                "word": "majesty",
                "partOfSpeech": "noun",
                "translation": "majesteetti"
            },
            {
                "word": "merge",
                "partOfSpeech": "verb",
                "translation": "sulautua"
            },
            {
                "word": "monologue",
                "partOfSpeech": "noun",
                "translation": "monologi"
            },
            {
                "word": "orgy",
                "partOfSpeech": "noun",
                "translation": "orgiat"
            },
            {
                "word": "postpone",
                "partOfSpeech": "verb",
                "translation": "lykätä"
            },
            {
                "word": "rag",
                "partOfSpeech": "noun",
                "translation": "ryysy"
            },
            {
                "word": "registration",
                "partOfSpeech": "noun",
                "translation": "rekisteröinti"
            }
        ],
        "word_set82": [
            {
                "word": "rhythm",
                "partOfSpeech": "noun",
                "translation": "rytmi"
            },
            {
                "word": "screwdriver",
                "partOfSpeech": "noun",
                "translation": "meisseli"
            },
            {
                "word": "selection",
                "partOfSpeech": "noun",
                "translation": "valinta"
            },
            {
                "word": "shell",
                "partOfSpeech": "noun",
                "translation": "laidoitus"
            },
            {
                "word": "stripe",
                "partOfSpeech": "noun",
                "translation": "raita"
            },
            {
                "word": "sunrise",
                "partOfSpeech": "noun",
                "translation": "auringonnousu"
            },
            {
                "word": "toupee",
                "partOfSpeech": "noun",
                "translation": "hiuslisäke"
            },
            {
                "word": "unconscious",
                "partOfSpeech": "adjective",
                "translation": "tajuton"
            },
            {
                "word": "underestimate",
                "partOfSpeech": "verb",
                "translation": "aliarvioida"
            },
            {
                "word": "unique",
                "partOfSpeech": "adjective",
                "translation": "ainutlaatuinen"
            },
            {
                "word": "various",
                "partOfSpeech": "adjective",
                "translation": "useanlainen"
            },
            {
                "word": "vein",
                "partOfSpeech": "noun",
                "translation": "laskimo"
            },
            {
                "word": "witty",
                "partOfSpeech": "adjective",
                "translation": "naseva"
            },
            {
                "word": "worry",
                "partOfSpeech": "noun",
                "translation": "huoli"
            },
            {
                "word": "memorial",
                "partOfSpeech": "noun",
                "translation": "muistomerkki"
            },
            {
                "word": "above",
                "partOfSpeech": "adjective",
                "translation": "ylinen"
            },
            {
                "word": "alcoholic",
                "partOfSpeech": "adjective",
                "translation": "alkoholipitoinen"
            },
            {
                "word": "alert",
                "partOfSpeech": "adjective",
                "translation": "valpas"
            },
            {
                "word": "alike",
                "partOfSpeech": "adjective",
                "translation": "samannäköinen"
            },
            {
                "word": "alternative",
                "partOfSpeech": "adjective",
                "translation": "vaihtoehtoinen"
            },
            {
                "word": "animal",
                "partOfSpeech": "adjective",
                "translation": "eläimellinen"
            },
            {
                "word": "antique",
                "partOfSpeech": "adjective",
                "translation": "antiikkinen"
            },
            {
                "word": "bad,horrible",
                "partOfSpeech": "adjective",
                "translation": "kauhea"
            },
            {
                "word": "bad, evil",
                "partOfSpeech": "adjective",
                "translation": "paha"
            },
            {
                "word": "big, large",
                "partOfSpeech": "adjective",
                "translation": "suuri"
            },
            {
                "word": "bluff",
                "partOfSpeech": "adjective",
                "translation": "jäyhä"
            },
            {
                "word": "bottom",
                "partOfSpeech": "adjective",
                "translation": "alapuolinen"
            },
            {
                "word": "calm",
                "partOfSpeech": "adjective",
                "translation": "tyyni"
            },
            {
                "word": "catholic",
                "partOfSpeech": "adjective",
                "translation": "katolilainen"
            },
            {
                "word": "chemical",
                "partOfSpeech": "adjective",
                "translation": "kemiallinen"
            },
            {
                "word": "chocolate",
                "partOfSpeech": "adjective",
                "translation": "suklaanruskea"
            },
            {
                "word": "commercial",
                "partOfSpeech": "adjective",
                "translation": "kaupallinen"
            },
            {
                "word": "communist",
                "partOfSpeech": "adjective",
                "translation": "kommunistinen"
            },
            {
                "word": "cotton",
                "partOfSpeech": "adjective",
                "translation": "puuvillainen"
            },
            {
                "word": "cover",
                "partOfSpeech": "adjective",
                "translation": "kannellinen"
            },
            {
                "word": "criminal",
                "partOfSpeech": "adjective",
                "translation": "rikollinen"
            },
            {
                "word": "current (event)",
                "partOfSpeech": "adjective",
                "translation": "ajankohtainen"
            },
            {
                "word": "current (current president for an example)",
                "partOfSpeech": "adjective",
                "translation": "nykyinen"
            },
            {
                "word": "cut",
                "partOfSpeech": "adjective",
                "translation": "leikattu"
            },
            {
                "word": "desert",
                "partOfSpeech": "adjective",
                "translation": "aavikkoinen"
            }
        ],
        "word_set83": [
            {
                "word": "difficult, hard",
                "partOfSpeech": "adjective",
                "translation": "vaikea"
            },
            {
                "word": "documentary",
                "partOfSpeech": "adjective",
                "translation": "dokumentaarinen"
            },
            {
                "word": "dumbass",
                "partOfSpeech": "adjective",
                "translation": "tollo"
            },
            {
                "word": "elect",
                "partOfSpeech": "adjective",
                "translation": "vastavalittu"
            },
            {
                "word": "expert",
                "partOfSpeech": "adjective",
                "translation": "taitava"
            },
            {
                "word": "feeling",
                "partOfSpeech": "adjective",
                "translation": "tuntuinen"
            },
            {
                "word": "first",
                "partOfSpeech": "adjective",
                "translation": "yhdes"
            },
            {
                "word": "forward",
                "partOfSpeech": "adjective",
                "translation": "eteenpäinen"
            },
            {
                "word": "foul",
                "partOfSpeech": "adjective",
                "translation": "siivoton"
            },
            {
                "word": "fresh (when talking about a scent for an example)",
                "partOfSpeech": "adjective",
                "translation": "raikas"
            },
            {
                "word": "fresh (not old, when talking about vegetables etc)",
                "partOfSpeech": "adjective",
                "translation": "tuore"
            },
            {
                "word": "german",
                "partOfSpeech": "adjective",
                "translation": "saksalainen"
            },
            {
                "word": "grave",
                "partOfSpeech": "adjective",
                "translation": "totinen"
            },
            {
                "word": "half",
                "partOfSpeech": "adjective",
                "translation": "puoli"
            },
            {
                "word": "homosexual",
                "partOfSpeech": "adjective",
                "translation": "homoseksuaalinen"
            },
            {
                "word": "individual",
                "partOfSpeech": "adjective",
                "translation": "yksilöllinen"
            },
            {
                "word": "iron",
                "partOfSpeech": "adjective",
                "translation": "rautainen"
            },
            {
                "word": "just",
                "partOfSpeech": "adjective",
                "translation": "oikeudenmukainen"
            },
            {
                "word": "last",
                "partOfSpeech": "adjective",
                "translation": "viimeinen"
            },
            {
                "word": "lean",
                "partOfSpeech": "adjective",
                "translation": "laiha"
            },
            {
                "word": "leather",
                "partOfSpeech": "adjective",
                "translation": "nahkainen"
            },
            {
                "word": "leftover",
                "partOfSpeech": "adjective",
                "translation": "jäljelle jäänyt"
            },
            {
                "word": "level",
                "partOfSpeech": "adjective",
                "translation": "tasoinen"
            },
            {
                "word": "liquid",
                "partOfSpeech": "adjective",
                "translation": "nestemäinen"
            },
            {
                "word": "material",
                "partOfSpeech": "adjective",
                "translation": "materiaalinen"
            },
            {
                "word": "minute",
                "partOfSpeech": "adjective",
                "translation": "pienenpieni"
            },
            {
                "word": "mushroom",
                "partOfSpeech": "adjective",
                "translation": "sienimäinen"
            },
            {
                "word": "narrow",
                "partOfSpeech": "adjective",
                "translation": "kapea"
            },
            {
                "word": "navy",
                "partOfSpeech": "adjective",
                "translation": "laivastonsininen"
            },
            {
                "word": "nazi",
                "partOfSpeech": "adjective",
                "translation": "natsilainen"
            },
            {
                "word": "novel",
                "partOfSpeech": "adjective",
                "translation": "uudenlainen"
            },
            {
                "word": "odd (number)",
                "partOfSpeech": "adjective",
                "translation": "pariton"
            },
            {
                "word": "percent",
                "partOfSpeech": "adjective",
                "translation": "prosenttinen"
            },
            {
                "word": "plastic",
                "partOfSpeech": "adjective",
                "translation": "muovinen"
            },
            {
                "word": "present",
                "partOfSpeech": "adjective",
                "translation": "nykyhetkinen"
            },
            {
                "word": "quality",
                "partOfSpeech": "adjective",
                "translation": "laadukas"
            },
            {
                "word": "relative",
                "partOfSpeech": "adjective",
                "translation": "suhteellinen"
            },
            {
                "word": "remote",
                "partOfSpeech": "adjective",
                "translation": "syrjäinen"
            },
            {
                "word": "republican",
                "partOfSpeech": "adjective",
                "translation": "republikaaninen"
            },
            {
                "word": "roast",
                "partOfSpeech": "adjective",
                "translation": "paahdettu"
            }
        ],
        "word_set84": [
            {
                "word": "routine",
                "partOfSpeech": "adjective",
                "translation": "rutiininomainen"
            },
            {
                "word": "sand",
                "partOfSpeech": "adjective",
                "translation": "hiekanruskea"
            },
            {
                "word": "saving",
                "partOfSpeech": "adjective",
                "translation": "vapahtava"
            },
            {
                "word": "second",
                "partOfSpeech": "adjective",
                "translation": "kahdes"
            },
            {
                "word": "separate",
                "partOfSpeech": "adjective",
                "translation": "erillinen"
            },
            {
                "word": "shit",
                "partOfSpeech": "adjective",
                "translation": "kökkö"
            },
            {
                "word": "silver",
                "partOfSpeech": "adjective",
                "translation": "hopea"
            },
            {
                "word": "smoke",
                "partOfSpeech": "adjective",
                "translation": "savunharmaa"
            },
            {
                "word": "something",
                "partOfSpeech": "adjective",
                "translation": "näköinen"
            },
            {
                "word": "state",
                "partOfSpeech": "adjective",
                "translation": "valtiollinen"
            },
            {
                "word": "steel",
                "partOfSpeech": "adjective",
                "translation": "teräksinen"
            },
            {
                "word": "straw",
                "partOfSpeech": "adjective",
                "translation": "oljenkeltainen"
            },
            {
                "word": "third",
                "partOfSpeech": "adjective",
                "translation": "kolmas"
            },
            {
                "word": "under",
                "partOfSpeech": "adjective",
                "translation": "alempi"
            },
            {
                "word": "uniform",
                "partOfSpeech": "adjective",
                "translation": "yhtenäinen"
            },
            {
                "word": "vegan",
                "partOfSpeech": "adjective",
                "translation": "vegaaninen"
            },
            {
                "word": "vegetarian",
                "partOfSpeech": "adjective",
                "translation": "vegetaarinen"
            },
            {
                "word": "virgin",
                "partOfSpeech": "adjective",
                "translation": "neitseellinen"
            },
            {
                "word": "whatsoever",
                "partOfSpeech": "adjective",
                "translation": "minkäänlainen"
            },
            {
                "word": "working (thing)",
                "partOfSpeech": "adjective",
                "translation": "toimiva"
            },
            {
                "word": "working (person)",
                "partOfSpeech": "adjective",
                "translation": "työssäkäyvä"
            },
            {
                "word": "false",
                "partOfSpeech": "adjective",
                "translation": "epäaito"
            },
            {
                "word": "absolute",
                "partOfSpeech": "noun",
                "translation": "absoluutti"
            },
            {
                "word": "abuse",
                "partOfSpeech": "noun",
                "translation": "väärinkäyttö"
            },
            {
                "word": "affect",
                "partOfSpeech": "noun",
                "translation": "affekti"
            },
            {
                "word": "anchor",
                "partOfSpeech": "noun",
                "translation": "ankkuri"
            },
            {
                "word": "and",
                "partOfSpeech": "noun",
                "translation": "ääkköstö"
            },
            {
                "word": "annual",
                "partOfSpeech": "noun",
                "translation": "vuosikirja"
            },
            {
                "word": "appeal",
                "partOfSpeech": "noun",
                "translation": "muutoksenhaku"
            },
            {
                "word": "application (an app)",
                "partOfSpeech": "noun",
                "translation": "sovellus"
            },
            {
                "word": "application (for something)",
                "partOfSpeech": "noun",
                "translation": "hakemus"
            },
            {
                "word": "area (locale)",
                "partOfSpeech": "noun",
                "translation": "alue"
            },
            {
                "word": "area (m²)",
                "partOfSpeech": "noun",
                "translation": "pinta-ala"
            },
            {
                "word": "author",
                "partOfSpeech": "noun",
                "translation": "tekijä"
            },
            {
                "word": "aye",
                "partOfSpeech": "noun",
                "translation": "jaa-ääni"
            },
            {
                "word": "ban",
                "partOfSpeech": "noun",
                "translation": "kielto"
            },
            {
                "word": "bang",
                "partOfSpeech": "noun",
                "translation": "paukaus"
            },
            {
                "word": "bark (sound)",
                "partOfSpeech": "noun",
                "translation": "haukku"
            },
            {
                "word": "bark (on tree)",
                "partOfSpeech": "noun",
                "translation": "puunkuori"
            },
            {
                "word": "behind",
                "partOfSpeech": "noun",
                "translation": "takamus"
            }
        ],
        "word_set85": [
            {
                "word": "beloved",
                "partOfSpeech": "noun",
                "translation": "rakastettu"
            },
            {
                "word": "bend",
                "partOfSpeech": "noun",
                "translation": "mutka"
            },
            {
                "word": "bible",
                "partOfSpeech": "noun",
                "translation": "raamattu"
            },
            {
                "word": "black",
                "partOfSpeech": "noun",
                "translation": "musta"
            },
            {
                "word": "blend",
                "partOfSpeech": "noun",
                "translation": "sekoitus"
            },
            {
                "word": "blind",
                "partOfSpeech": "noun",
                "translation": "umpisilmä"
            },
            {
                "word": "blond",
                "partOfSpeech": "noun",
                "translation": "vaaleaverikkö"
            },
            {
                "word": "blue",
                "partOfSpeech": "noun",
                "translation": "sininen"
            },
            {
                "word": "bluff",
                "partOfSpeech": "noun",
                "translation": "bluffi"
            },
            {
                "word": "body (dead)",
                "partOfSpeech": "noun",
                "translation": "ruumis"
            },
            {
                "word": "body (live)",
                "partOfSpeech": "noun",
                "translation": "vartalo"
            },
            {
                "word": "boo",
                "partOfSpeech": "noun",
                "translation": "buuaus"
            },
            {
                "word": "bother",
                "partOfSpeech": "noun",
                "translation": "vaiva"
            },
            {
                "word": "bounce",
                "partOfSpeech": "noun",
                "translation": "pomppu"
            },
            {
                "word": "brainwash",
                "partOfSpeech": "noun",
                "translation": "aivopesu"
            },
            {
                "word": "breed",
                "partOfSpeech": "noun",
                "translation": "rotu"
            },
            {
                "word": "bribe",
                "partOfSpeech": "noun",
                "translation": "lahjus"
            },
            {
                "word": "brilliant",
                "partOfSpeech": "noun",
                "translation": "briljantti"
            },
            {
                "word": "brush",
                "partOfSpeech": "noun",
                "translation": "harja"
            },
            {
                "word": "bum (person",
                "partOfSpeech": "noun",
                "translation": "pummi"
            },
            {
                "word": "bump (on a road)",
                "partOfSpeech": "noun",
                "translation": "töyssy"
            },
            {
                "word": "burn",
                "partOfSpeech": "noun",
                "translation": "poltto"
            },
            {
                "word": "burst",
                "partOfSpeech": "noun",
                "translation": "puhkeaminen"
            },
            {
                "word": "bust",
                "partOfSpeech": "noun",
                "translation": "rintakuva"
            },
            {
                "word": "calm",
                "partOfSpeech": "noun",
                "translation": "tyyni"
            },
            {
                "word": "campaign (in war)",
                "partOfSpeech": "noun",
                "translation": "sotaretki"
            },
            {
                "word": "capital city",
                "partOfSpeech": "noun",
                "translation": "pääkaupunki"
            },
            {
                "word": "care",
                "partOfSpeech": "noun",
                "translation": "hoito"
            },
            {
                "word": "charge (in battery)",
                "partOfSpeech": "noun",
                "translation": "lataus"
            },
            {
                "word": "charge (payment)",
                "partOfSpeech": "noun",
                "translation": "veloitus"
            },
            {
                "word": "chat",
                "partOfSpeech": "noun",
                "translation": "chatti"
            },
            {
                "word": "cheer",
                "partOfSpeech": "noun",
                "translation": "hilpeys"
            },
            {
                "word": "choke",
                "partOfSpeech": "noun",
                "translation": "rikastin"
            },
            {
                "word": "claim",
                "partOfSpeech": "noun",
                "translation": "väite"
            },
            {
                "word": "classic",
                "partOfSpeech": "noun",
                "translation": "klassikko"
            },
            {
                "word": "clear",
                "partOfSpeech": "noun",
                "translation": "katajanmarjaviina"
            },
            {
                "word": "click",
                "partOfSpeech": "noun",
                "translation": "klikkaus"
            },
            {
                "word": "coke",
                "partOfSpeech": "noun",
                "translation": "kokis"
            },
            {
                "word": "collapse",
                "partOfSpeech": "noun",
                "translation": "kollapsi"
            },
            {
                "word": "collar",
                "partOfSpeech": "noun",
                "translation": "kaulapanta"
            }
        ],
        "word_set86": [
            {
                "word": "comb",
                "partOfSpeech": "noun",
                "translation": "kampa"
            },
            {
                "word": "complex",
                "partOfSpeech": "noun",
                "translation": "kompleksi"
            },
            {
                "word": "compromise",
                "partOfSpeech": "noun",
                "translation": "kompromissi"
            },
            {
                "word": "concentrate",
                "partOfSpeech": "noun",
                "translation": "tiiviste"
            },
            {
                "word": "condition (proposition)",
                "partOfSpeech": "noun",
                "translation": "ehto"
            },
            {
                "word": "condition (status, quality)",
                "partOfSpeech": "noun",
                "translation": "kunto"
            },
            {
                "word": "constant",
                "partOfSpeech": "noun",
                "translation": "vakio"
            },
            {
                "word": "crank",
                "partOfSpeech": "noun",
                "translation": "veivi"
            },
            {
                "word": "crash",
                "partOfSpeech": "noun",
                "translation": "rysäys"
            },
            {
                "word": "crawl",
                "partOfSpeech": "noun",
                "translation": "konttaus"
            },
            {
                "word": "cricket (game)",
                "partOfSpeech": "noun",
                "translation": "kriketti"
            },
            {
                "word": "cricket (bug)",
                "partOfSpeech": "noun",
                "translation": "sirkka"
            },
            {
                "word": "cry",
                "partOfSpeech": "noun",
                "translation": "itku"
            },
            {
                "word": "curl",
                "partOfSpeech": "noun",
                "translation": "kihara"
            },
            {
                "word": "current",
                "partOfSpeech": "noun",
                "translation": "virtaus"
            },
            {
                "word": "dark",
                "partOfSpeech": "noun",
                "translation": "pimento"
            },
            {
                "word": "dead",
                "partOfSpeech": "noun",
                "translation": "marras"
            },
            {
                "word": "deaf",
                "partOfSpeech": "noun",
                "translation": "kuulovammainen"
            },
            {
                "word": "deep",
                "partOfSpeech": "noun",
                "translation": "syvänne"
            },
            {
                "word": "defeat",
                "partOfSpeech": "noun",
                "translation": "häviö"
            },
            {
                "word": "dental",
                "partOfSpeech": "noun",
                "translation": "dentaali"
            },
            {
                "word": "ditch",
                "partOfSpeech": "noun",
                "translation": "oja"
            },
            {
                "word": "dive",
                "partOfSpeech": "noun",
                "translation": "sukellus"
            },
            {
                "word": "doorman (formal)",
                "partOfSpeech": "noun",
                "translation": "portsari"
            },
            {
                "word": "double",
                "partOfSpeech": "noun",
                "translation": "tupla"
            },
            {
                "word": "down",
                "partOfSpeech": "noun",
                "translation": "untuva"
            },
            {
                "word": "download",
                "partOfSpeech": "noun",
                "translation": "imurointi"
            },
            {
                "word": "downstairs",
                "partOfSpeech": "noun",
                "translation": "alakerta"
            },
            {
                "word": "dozen",
                "partOfSpeech": "noun",
                "translation": "tusina"
            },
            {
                "word": "draw",
                "partOfSpeech": "noun",
                "translation": "tasapeli"
            },
            {
                "word": "dream (sleep)",
                "partOfSpeech": "noun",
                "translation": "uni"
            },
            {
                "word": "dressing (in a wound)",
                "partOfSpeech": "noun",
                "translation": "haavaside"
            },
            {
                "word": "dressing (up)",
                "partOfSpeech": "noun",
                "translation": "pukeutuminen"
            },
            {
                "word": "drunk",
                "partOfSpeech": "noun",
                "translation": "humalikko"
            },
            {
                "word": "dry",
                "partOfSpeech": "noun",
                "translation": "kankare"
            },
            {
                "word": "dutch",
                "partOfSpeech": "noun",
                "translation": "hollanti"
            },
            {
                "word": "dye",
                "partOfSpeech": "noun",
                "translation": "värjäysaine"
            },
            {
                "word": "earth",
                "partOfSpeech": "noun",
                "translation": "maa"
            },
            {
                "word": "east",
                "partOfSpeech": "noun",
                "translation": "itä"
            },
            {
                "word": "edit",
                "partOfSpeech": "noun",
                "translation": "muokkaus"
            }
        ],
        "word_set87": [
            {
                "word": "elf (christmas)",
                "partOfSpeech": "noun",
                "translation": "joulutonttu"
            },
            {
                "word": "english",
                "partOfSpeech": "noun",
                "translation": "englanti"
            },
            {
                "word": "entry (data)",
                "partOfSpeech": "noun",
                "translation": "kirjaus"
            },
            {
                "word": "epic",
                "partOfSpeech": "noun",
                "translation": "taru"
            },
            {
                "word": "erection (formal)",
                "partOfSpeech": "noun",
                "translation": "stondis"
            },
            {
                "word": "exit (junction)",
                "partOfSpeech": "noun",
                "translation": "liittymä"
            },
            {
                "word": "express",
                "partOfSpeech": "noun",
                "translation": "pikavuoro"
            },
            {
                "word": "extra",
                "partOfSpeech": "noun",
                "translation": "ekstra"
            },
            {
                "word": "extreme",
                "partOfSpeech": "noun",
                "translation": "ääripää"
            },
            {
                "word": "face (formal)",
                "partOfSpeech": "noun",
                "translation": "kasvot"
            },
            {
                "word": "fair",
                "partOfSpeech": "noun",
                "translation": "messut"
            },
            {
                "word": "fast",
                "partOfSpeech": "noun",
                "translation": "paasto"
            },
            {
                "word": "fat",
                "partOfSpeech": "noun",
                "translation": "rasva"
            },
            {
                "word": "feel",
                "partOfSpeech": "noun",
                "translation": "tuntu"
            },
            {
                "word": "fetch",
                "partOfSpeech": "noun",
                "translation": "nouto"
            },
            {
                "word": "final",
                "partOfSpeech": "noun",
                "translation": "loppukilpailu"
            },
            {
                "word": "fine",
                "partOfSpeech": "noun",
                "translation": "sakko"
            },
            {
                "word": "flap",
                "partOfSpeech": "noun",
                "translation": "läppä"
            },
            {
                "word": "flirt",
                "partOfSpeech": "noun",
                "translation": "flirttailu"
            },
            {
                "word": "float",
                "partOfSpeech": "noun",
                "translation": "koho"
            },
            {
                "word": "floss",
                "partOfSpeech": "noun",
                "translation": "hammaslanka"
            },
            {
                "word": "flush",
                "partOfSpeech": "noun",
                "translation": "huuhtelu"
            },
            {
                "word": "flying",
                "partOfSpeech": "noun",
                "translation": "lentäminen"
            },
            {
                "word": "fold",
                "partOfSpeech": "noun",
                "translation": "taitos"
            },
            {
                "word": "four",
                "partOfSpeech": "noun",
                "translation": "nelonen"
            },
            {
                "word": "friendly",
                "partOfSpeech": "noun",
                "translation": "oma"
            },
            {
                "word": "frisbee",
                "partOfSpeech": "noun",
                "translation": "frisbee"
            },
            {
                "word": "fucking",
                "partOfSpeech": "noun",
                "translation": "nussinta"
            },
            {
                "word": "gain",
                "partOfSpeech": "noun",
                "translation": "hyöty"
            },
            {
                "word": "gamble",
                "partOfSpeech": "noun",
                "translation": "uhkapeli"
            },
            {
                "word": "gas (petrol)",
                "partOfSpeech": "noun",
                "translation": "bensa"
            },
            {
                "word": "gas (state)",
                "partOfSpeech": "noun",
                "translation": "kaasu"
            },
            {
                "word": "gay",
                "partOfSpeech": "noun",
                "translation": "homo"
            },
            {
                "word": "general",
                "partOfSpeech": "noun",
                "translation": "kenraali"
            },
            {
                "word": "good",
                "partOfSpeech": "noun",
                "translation": "hyödyke"
            },
            {
                "word": "grab",
                "partOfSpeech": "noun",
                "translation": "koura"
            },
            {
                "word": "grant",
                "partOfSpeech": "noun",
                "translation": "apuraha"
            },
            {
                "word": "gray",
                "partOfSpeech": "noun",
                "translation": "gray"
            },
            {
                "word": "green",
                "partOfSpeech": "noun",
                "translation": "vihreä"
            },
            {
                "word": "grocery store",
                "partOfSpeech": "noun",
                "translation": "ruokakauppa"
            }
        ],
        "word_set88": [
            {
                "word": "gross",
                "partOfSpeech": "noun",
                "translation": "brutto"
            },
            {
                "word": "guarantee",
                "partOfSpeech": "noun",
                "translation": "takuu"
            },
            {
                "word": "guinea",
                "partOfSpeech": "noun",
                "translation": "guinea"
            },
            {
                "word": "hack",
                "partOfSpeech": "noun",
                "translation": "hakku"
            },
            {
                "word": "hail",
                "partOfSpeech": "noun",
                "translation": "raesade"
            },
            {
                "word": "heavy",
                "partOfSpeech": "noun",
                "translation": "ratapölkky"
            },
            {
                "word": "high",
                "partOfSpeech": "noun",
                "translation": "maanpetos"
            },
            {
                "word": "hoard",
                "partOfSpeech": "noun",
                "translation": "kätkö"
            },
            {
                "word": "hop",
                "partOfSpeech": "noun",
                "translation": "humala"
            },
            {
                "word": "hump",
                "partOfSpeech": "noun",
                "translation": "kyttyrä"
            },
            {
                "word": "hundred",
                "partOfSpeech": "noun",
                "translation": "kihlakunta"
            },
            {
                "word": "hunt",
                "partOfSpeech": "noun",
                "translation": "jahti"
            },
            {
                "word": "id",
                "partOfSpeech": "noun",
                "translation": "henkilöpaperit"
            },
            {
                "word": "ideal",
                "partOfSpeech": "noun",
                "translation": "ihanne"
            },
            {
                "word": "internet",
                "partOfSpeech": "noun",
                "translation": "netti"
            },
            {
                "word": "itch",
                "partOfSpeech": "noun",
                "translation": "kutina"
            },
            {
                "word": "jingle",
                "partOfSpeech": "noun",
                "translation": "helinä"
            },
            {
                "word": "jinx",
                "partOfSpeech": "noun",
                "translation": "pahanilmanlintu"
            },
            {
                "word": "job (formal)",
                "partOfSpeech": "noun",
                "translation": "työ"
            },
            {
                "word": "jump",
                "partOfSpeech": "noun",
                "translation": "hyppy"
            },
            {
                "word": "junior",
                "partOfSpeech": "noun",
                "translation": "juniori"
            },
            {
                "word": "kidnap",
                "partOfSpeech": "noun",
                "translation": "kidnappaus"
            },
            {
                "word": "kiss (long)",
                "partOfSpeech": "noun",
                "translation": "suudelma"
            },
            {
                "word": "kiss (quick)",
                "partOfSpeech": "noun",
                "translation": "suukko"
            },
            {
                "word": "knock",
                "partOfSpeech": "noun",
                "translation": "koputus"
            },
            {
                "word": "last",
                "partOfSpeech": "noun",
                "translation": "lesti"
            },
            {
                "word": "launch",
                "partOfSpeech": "noun",
                "translation": "lanseeraus"
            },
            {
                "word": "leave",
                "partOfSpeech": "noun",
                "translation": "vapaa"
            },
            {
                "word": "lift (elevator)",
                "partOfSpeech": "noun",
                "translation": "hissi"
            },
            {
                "word": "lift (act of lifting)",
                "partOfSpeech": "noun",
                "translation": "nosto"
            },
            {
                "word": "log (in logbook)",
                "partOfSpeech": "noun",
                "translation": "loki"
            },
            {
                "word": "log (wooden log)",
                "partOfSpeech": "noun",
                "translation": "logiikka"
            },
            {
                "word": "lure",
                "partOfSpeech": "noun",
                "translation": "viehe"
            },
            {
                "word": "mafia",
                "partOfSpeech": "noun",
                "translation": "mafia"
            },
            {
                "word": "main",
                "partOfSpeech": "noun",
                "translation": "pää-"
            },
            {
                "word": "march",
                "partOfSpeech": "noun",
                "translation": "maaliskuu"
            },
            {
                "word": "married",
                "partOfSpeech": "noun",
                "translation": "nainut"
            },
            {
                "word": "mass",
                "partOfSpeech": "noun",
                "translation": "massa"
            },
            {
                "word": "mass (in church)",
                "partOfSpeech": "noun",
                "translation": "messu"
            },
            {
                "word": "matchstick",
                "partOfSpeech": "noun",
                "translation": "tulitikku"
            }
        ],
        "word_set89": [
            {
                "word": "may",
                "partOfSpeech": "noun",
                "translation": "toukokuu"
            },
            {
                "word": "mean",
                "partOfSpeech": "noun",
                "translation": "keskiarvo"
            },
            {
                "word": "medium",
                "partOfSpeech": "noun",
                "translation": "meedio"
            },
            {
                "word": "melt",
                "partOfSpeech": "noun",
                "translation": "sula"
            },
            {
                "word": "mine (dig)",
                "partOfSpeech": "noun",
                "translation": "kaivos"
            },
            {
                "word": "mine (explosive)",
                "partOfSpeech": "noun",
                "translation": "miina"
            },
            {
                "word": "minor",
                "partOfSpeech": "noun",
                "translation": "alaikäinen"
            },
            {
                "word": "minus",
                "partOfSpeech": "noun",
                "translation": "miikka"
            },
            {
                "word": "miss",
                "partOfSpeech": "noun",
                "translation": "huti"
            },
            {
                "word": "mop",
                "partOfSpeech": "noun",
                "translation": "moppi"
            },
            {
                "word": "moral",
                "partOfSpeech": "noun",
                "translation": "moraali"
            },
            {
                "word": "nag",
                "partOfSpeech": "noun",
                "translation": "luuska"
            },
            {
                "word": "national",
                "partOfSpeech": "noun",
                "translation": "kansallinen"
            },
            {
                "word": "native",
                "partOfSpeech": "noun",
                "translation": "alkuasukas"
            },
            {
                "word": "negative (film)",
                "partOfSpeech": "noun",
                "translation": "negatiivi"
            },
            {
                "word": "net (finance)",
                "partOfSpeech": "noun",
                "translation": "netto"
            },
            {
                "word": "net (fishing etc)",
                "partOfSpeech": "noun",
                "translation": "verkko"
            },
            {
                "word": "nine",
                "partOfSpeech": "noun",
                "translation": "ysi"
            },
            {
                "word": "normal",
                "partOfSpeech": "noun",
                "translation": "normaali"
            },
            {
                "word": "north",
                "partOfSpeech": "noun",
                "translation": "pohjoinen"
            },
            {
                "word": "notice",
                "partOfSpeech": "noun",
                "translation": "varoitusaika"
            },
            {
                "word": "nude",
                "partOfSpeech": "noun",
                "translation": "alastonkuva"
            },
            {
                "word": "official",
                "partOfSpeech": "noun",
                "translation": "toimihenkilö"
            },
            {
                "word": "one",
                "partOfSpeech": "noun",
                "translation": "ykkönen"
            },
            {
                "word": "operation (medical)",
                "partOfSpeech": "noun",
                "translation": "toimenpide"
            },
            {
                "word": "or",
                "partOfSpeech": "noun",
                "translation": "teepannu"
            },
            {
                "word": "organ (instrument",
                "partOfSpeech": "noun",
                "translation": "urku"
            },
            {
                "word": "organ (in body)",
                "partOfSpeech": "noun",
                "translation": "elin"
            },
            {
                "word": "original",
                "partOfSpeech": "noun",
                "translation": "alkuperäiskappale"
            },
            {
                "word": "overnight",
                "partOfSpeech": "noun",
                "translation": "yöpyminen"
            },
            {
                "word": "pain (bad, agony)",
                "partOfSpeech": "noun",
                "translation": "tuska"
            },
            {
                "word": "panic",
                "partOfSpeech": "noun",
                "translation": "pakokauhu"
            },
            {
                "word": "pardon",
                "partOfSpeech": "noun",
                "translation": "armahdus"
            },
            {
                "word": "party (formal)",
                "partOfSpeech": "noun",
                "translation": "juhlat"
            },
            {
                "word": "perfume",
                "partOfSpeech": "noun",
                "translation": "hajuvesi"
            },
            {
                "word": "period (time)",
                "partOfSpeech": "noun",
                "translation": "kausi"
            },
            {
                "word": "pinch",
                "partOfSpeech": "noun",
                "translation": "nipistys"
            },
            {
                "word": "pink",
                "partOfSpeech": "noun",
                "translation": "vaaleanpunainen"
            },
            {
                "word": "pipe (tobacco)",
                "partOfSpeech": "noun",
                "translation": "piippu"
            },
            {
                "word": "pipe (plumming)",
                "partOfSpeech": "noun",
                "translation": "putki"
            }
        ],
        "word_set90": [
            {
                "word": "plain",
                "partOfSpeech": "noun",
                "translation": "tasanko"
            },
            {
                "word": "player (game)",
                "partOfSpeech": "noun",
                "translation": "pelaaja"
            },
            {
                "word": "player (music)",
                "partOfSpeech": "noun",
                "translation": "soittaja"
            },
            {
                "word": "pleasant",
                "partOfSpeech": "noun",
                "translation": "äidinkasvot"
            },
            {
                "word": "point (.)",
                "partOfSpeech": "noun",
                "translation": "piste"
            },
            {
                "word": "poker face",
                "partOfSpeech": "noun",
                "translation": "pokka"
            },
            {
                "word": "polish",
                "partOfSpeech": "noun",
                "translation": "kiillotusaine"
            },
            {
                "word": "pop",
                "partOfSpeech": "noun",
                "translation": "pop"
            },
            {
                "word": "positive",
                "partOfSpeech": "noun",
                "translation": "positiivinen"
            },
            {
                "word": "pot (of money)",
                "partOfSpeech": "noun",
                "translation": "potti"
            },
            {
                "word": "plant pot",
                "partOfSpeech": "noun",
                "translation": "ruukku"
            },
            {
                "word": "potential",
                "partOfSpeech": "noun",
                "translation": "potentiaali"
            },
            {
                "word": "pound (£)",
                "partOfSpeech": "noun",
                "translation": "punta"
            },
            {
                "word": "power (to work, kW)",
                "partOfSpeech": "noun",
                "translation": "teho"
            },
            {
                "word": "power (to rule)",
                "partOfSpeech": "noun",
                "translation": "valta"
            },
            {
                "word": "power (to lift)",
                "partOfSpeech": "noun",
                "translation": "voima"
            },
            {
                "word": "praise",
                "partOfSpeech": "noun",
                "translation": "kehu"
            },
            {
                "word": "praise (big)",
                "partOfSpeech": "noun",
                "translation": "ylistys"
            },
            {
                "word": "present (gift)",
                "partOfSpeech": "noun",
                "translation": "lahja"
            },
            {
                "word": "present (tense)",
                "partOfSpeech": "noun",
                "translation": "nykyhetki"
            },
            {
                "word": "prime",
                "partOfSpeech": "noun",
                "translation": "priimi"
            },
            {
                "word": "private",
                "partOfSpeech": "noun",
                "translation": "sotamies"
            },
            {
                "word": "protest",
                "partOfSpeech": "noun",
                "translation": "protesti"
            },
            {
                "word": "pull",
                "partOfSpeech": "noun",
                "translation": "veto"
            },
            {
                "word": "pump",
                "partOfSpeech": "noun",
                "translation": "pumppu"
            },
            {
                "word": "punch (drink)",
                "partOfSpeech": "noun",
                "translation": "booli"
            },
            {
                "word": "purchase",
                "partOfSpeech": "noun",
                "translation": "ostos"
            },
            {
                "word": "quarter",
                "partOfSpeech": "noun",
                "translation": "neljännes"
            },
            {
                "word": "shooting range",
                "partOfSpeech": "noun",
                "translation": "ampumarata"
            },
            {
                "word": "reach",
                "partOfSpeech": "noun",
                "translation": "sivutuuli"
            },
            {
                "word": "record (music)",
                "partOfSpeech": "noun",
                "translation": "äänilevy"
            },
            {
                "word": "record (world record etc)",
                "partOfSpeech": "noun",
                "translation": "ennätys"
            },
            {
                "word": "recorder (person who records something)",
                "partOfSpeech": "noun",
                "translation": "äänittäjä"
            },
            {
                "word": "recruit",
                "partOfSpeech": "noun",
                "translation": "rekryytti"
            },
            {
                "word": "red",
                "partOfSpeech": "noun",
                "translation": "punainen"
            },
            {
                "word": "refund",
                "partOfSpeech": "noun",
                "translation": "palautus"
            },
            {
                "word": "register",
                "partOfSpeech": "noun",
                "translation": "rekisteri"
            },
            {
                "word": "regret",
                "partOfSpeech": "noun",
                "translation": "katumus"
            },
            {
                "word": "reserve",
                "partOfSpeech": "noun",
                "translation": "reservi"
            },
            {
                "word": "rhyme",
                "partOfSpeech": "noun",
                "translation": "riimi"
            }
        ],
        "word_set91": [
            {
                "word": "rig",
                "partOfSpeech": "noun",
                "translation": "öljynporaustorni"
            },
            {
                "word": "right (real, L/R)",
                "partOfSpeech": "noun",
                "translation": "oikea"
            },
            {
                "word": "right (to do something)",
                "partOfSpeech": "noun",
                "translation": "oikeus"
            },
            {
                "word": "rise",
                "partOfSpeech": "noun",
                "translation": "nousu"
            },
            {
                "word": "ruin",
                "partOfSpeech": "noun",
                "translation": "raunio"
            },
            {
                "word": "sabotage",
                "partOfSpeech": "noun",
                "translation": "sabotaasi"
            },
            {
                "word": "safe",
                "partOfSpeech": "noun",
                "translation": "kassakaappi"
            },
            {
                "word": "sail",
                "partOfSpeech": "noun",
                "translation": "seili"
            },
            {
                "word": "say",
                "partOfSpeech": "noun",
                "translation": "puheenvuoro"
            },
            {
                "word": "scientist (male)",
                "partOfSpeech": "noun",
                "translation": "tiedemies"
            },
            {
                "word": "scratch",
                "partOfSpeech": "noun",
                "translation": "naarmu"
            },
            {
                "word": "scream",
                "partOfSpeech": "noun",
                "translation": "huuto"
            },
            {
                "word": "seal (animal)",
                "partOfSpeech": "noun",
                "translation": "hylje"
            },
            {
                "word": "seal (to seal something)",
                "partOfSpeech": "noun",
                "translation": "sinetti"
            },
            {
                "word": "season (in a series)",
                "partOfSpeech": "noun",
                "translation": "tuotantokausi"
            },
            {
                "word": "season (summer, winter..)",
                "partOfSpeech": "noun",
                "translation": "vuodenaika"
            },
            {
                "word": "see",
                "partOfSpeech": "noun",
                "translation": "piispanistuin"
            },
            {
                "word": "semen (medical)",
                "partOfSpeech": "noun",
                "translation": "siemenneste"
            },
            {
                "word": "semen (spoken)",
                "partOfSpeech": "noun",
                "translation": "sperma"
            },
            {
                "word": "seamstress",
                "partOfSpeech": "noun",
                "translation": "ompelija"
            },
            {
                "word": "sharp",
                "partOfSpeech": "noun",
                "translation": "korotusmerkki"
            },
            {
                "word": "shave",
                "partOfSpeech": "noun",
                "translation": "parranajo"
            },
            {
                "word": "sheet (bedsheet)",
                "partOfSpeech": "noun",
                "translation": "lakana"
            },
            {
                "word": "sheet (paper)",
                "partOfSpeech": "noun",
                "translation": "liuska"
            },
            {
                "word": "shine",
                "partOfSpeech": "noun",
                "translation": "kiilto"
            },
            {
                "word": "shoot",
                "partOfSpeech": "noun",
                "translation": "oras"
            },
            {
                "word": "small shop",
                "partOfSpeech": "noun",
                "translation": "puoti"
            },
            {
                "word": "some shopping",
                "partOfSpeech": "noun",
                "translation": "ostelu"
            },
            {
                "word": "shred",
                "partOfSpeech": "noun",
                "translation": "riekale"
            },
            {
                "word": "similar",
                "partOfSpeech": "noun",
                "translation": "fransu"
            },
            {
                "word": "single (only one)",
                "partOfSpeech": "noun",
                "translation": "ainoa"
            },
            {
                "word": "single (not married)",
                "partOfSpeech": "noun",
                "translation": "sinkku"
            },
            {
                "word": "sixth",
                "partOfSpeech": "noun",
                "translation": "seksti"
            },
            {
                "word": "skinny",
                "partOfSpeech": "noun",
                "translation": "laiheliini"
            },
            {
                "word": "skip",
                "partOfSpeech": "noun",
                "translation": "roskalava"
            },
            {
                "word": "slaughter",
                "partOfSpeech": "noun",
                "translation": "teurastus"
            },
            {
                "word": "smack",
                "partOfSpeech": "noun",
                "translation": "smakki"
            },
            {
                "word": "smell (scent, good smell)",
                "partOfSpeech": "noun",
                "translation": "tuoksu"
            },
            {
                "word": "snap",
                "partOfSpeech": "noun",
                "translation": "napsahdus"
            },
            {
                "word": "sneak",
                "partOfSpeech": "noun",
                "translation": "hiippailija"
            }
        ],
        "word_set92": [
            {
                "word": "sneeze",
                "partOfSpeech": "noun",
                "translation": "aivastus"
            },
            {
                "word": "solution (liquid)",
                "partOfSpeech": "noun",
                "translation": "liuos"
            },
            {
                "word": "south",
                "partOfSpeech": "noun",
                "translation": "etelä"
            },
            {
                "word": "spare (bowling)",
                "partOfSpeech": "noun",
                "translation": "paikko"
            },
            {
                "word": "speed (drug, slang)",
                "partOfSpeech": "noun",
                "translation": "piri"
            },
            {
                "word": "spiritual",
                "partOfSpeech": "noun",
                "translation": "spirituaali"
            },
            {
                "word": "spit",
                "partOfSpeech": "noun",
                "translation": "kynnäs"
            },
            {
                "word": "split",
                "partOfSpeech": "noun",
                "translation": "jako"
            },
            {
                "word": "split (doing a split in gymnastic)",
                "partOfSpeech": "noun",
                "translation": "spagaatti"
            },
            {
                "word": "spoiler (for a movie or series)",
                "partOfSpeech": "noun",
                "translation": "juonipaljastus"
            },
            {
                "word": "sponsor",
                "partOfSpeech": "noun",
                "translation": "sponsori"
            },
            {
                "word": "spread",
                "partOfSpeech": "noun",
                "translation": "aukeama"
            },
            {
                "word": "spring (hookes law)",
                "partOfSpeech": "noun",
                "translation": "vieteri"
            },
            {
                "word": "spring (season)",
                "partOfSpeech": "noun",
                "translation": "kevät"
            },
            {
                "word": "spring (water)",
                "partOfSpeech": "noun",
                "translation": "lähde"
            },
            {
                "word": "spy",
                "partOfSpeech": "noun",
                "translation": "vakooja"
            },
            {
                "word": "start (car)",
                "partOfSpeech": "noun",
                "translation": "käynnistys"
            },
            {
                "word": "state (US)",
                "partOfSpeech": "noun",
                "translation": "osavaltio"
            },
            {
                "word": "stay",
                "partOfSpeech": "noun",
                "translation": "oleilu"
            },
            {
                "word": "stick (small)",
                "partOfSpeech": "noun",
                "translation": "tikku"
            },
            {
                "word": "sting",
                "partOfSpeech": "noun",
                "translation": "pisto"
            },
            {
                "word": "stink",
                "partOfSpeech": "noun",
                "translation": "löyhkä"
            },
            {
                "word": "stir",
                "partOfSpeech": "noun",
                "translation": "kuhina"
            },
            {
                "word": "stop (bus)",
                "partOfSpeech": "noun",
                "translation": "pysäkki"
            },
            {
                "word": "straight",
                "partOfSpeech": "noun",
                "translation": "suora"
            },
            {
                "word": "strap",
                "partOfSpeech": "noun",
                "translation": "hihna"
            },
            {
                "word": "stretch",
                "partOfSpeech": "noun",
                "translation": "venytys"
            },
            {
                "word": "stunt",
                "partOfSpeech": "noun",
                "translation": "stuntti"
            },
            {
                "word": "summer (old)",
                "partOfSpeech": "noun",
                "translation": "suvi"
            },
            {
                "word": "surrender",
                "partOfSpeech": "noun",
                "translation": "antautuminen"
            },
            {
                "word": "swallow",
                "partOfSpeech": "noun",
                "translation": "pääskynen"
            },
            {
                "word": "sweet",
                "partOfSpeech": "noun",
                "translation": "makea"
            },
            {
                "word": "tag (hippa)",
                "partOfSpeech": "noun",
                "translation": "hippa"
            },
            {
                "word": "tan",
                "partOfSpeech": "noun",
                "translation": "rusketus"
            },
            {
                "word": "target (subject)",
                "partOfSpeech": "noun",
                "translation": "kohde"
            },
            {
                "word": "target (goal)",
                "partOfSpeech": "noun",
                "translation": "tavoite"
            },
            {
                "word": "tattoo (slang)",
                "partOfSpeech": "noun",
                "translation": "tatska"
            },
            {
                "word": "television (slang)",
                "partOfSpeech": "noun",
                "translation": "telkkari"
            },
            {
                "word": "ten",
                "partOfSpeech": "noun",
                "translation": "kymmenen"
            },
            {
                "word": "ten (slang",
                "partOfSpeech": "noun",
                "translation": "kymppi"
            }
        ],
        "word_set93": [
            {
                "word": "tense (language)",
                "partOfSpeech": "noun",
                "translation": "aikamuoto"
            },
            {
                "word": "tenth",
                "partOfSpeech": "noun",
                "translation": "kymmenesosa"
            },
            {
                "word": "test (one you have to study for)",
                "partOfSpeech": "noun",
                "translation": "koe"
            },
            {
                "word": "test (to test your skills)",
                "partOfSpeech": "noun",
                "translation": "testi"
            },
            {
                "word": "thank you",
                "partOfSpeech": "noun",
                "translation": "kiitos"
            },
            {
                "word": "third",
                "partOfSpeech": "noun",
                "translation": "kolmas"
            },
            {
                "word": "throw",
                "partOfSpeech": "noun",
                "translation": "heitto"
            },
            {
                "word": "tick",
                "partOfSpeech": "noun",
                "translation": "tikitys"
            },
            {
                "word": "tip (in restaurant etc.)",
                "partOfSpeech": "noun",
                "translation": "juomaraha"
            },
            {
                "word": "tip (slang, in restaurant etc)",
                "partOfSpeech": "noun",
                "translation": "tippi"
            },
            {
                "word": "tip (advice)",
                "partOfSpeech": "noun",
                "translation": "vinkki"
            },
            {
                "word": "tit (boob)",
                "partOfSpeech": "noun",
                "translation": "tissi"
            },
            {
                "word": "title (jobtitle)",
                "partOfSpeech": "noun",
                "translation": "nimike"
            },
            {
                "word": "toast (speach)",
                "partOfSpeech": "noun",
                "translation": "maljapuhe"
            },
            {
                "word": "toast (food)",
                "partOfSpeech": "noun",
                "translation": "paahtoleipä"
            },
            {
                "word": "tone (of voice)",
                "partOfSpeech": "noun",
                "translation": "äänensävy"
            },
            {
                "word": "tone (color)",
                "partOfSpeech": "noun",
                "translation": "sävy"
            },
            {
                "word": "top (mountain)",
                "partOfSpeech": "noun",
                "translation": "huippu"
            },
            {
                "word": "toss",
                "partOfSpeech": "noun",
                "translation": "kolikonheitto"
            },
            {
                "word": "training (slang)",
                "partOfSpeech": "noun",
                "translation": "treeni"
            },
            {
                "word": "transfer",
                "partOfSpeech": "noun",
                "translation": "siirtäminen"
            },
            {
                "word": "transplant (organ)",
                "partOfSpeech": "noun",
                "translation": "elinsiirto"
            },
            {
                "word": "triple",
                "partOfSpeech": "noun",
                "translation": "tripla"
            },
            {
                "word": "trunk (on an elephant)",
                "partOfSpeech": "noun",
                "translation": "kärsä"
            },
            {
                "word": "trunk (on tree)",
                "partOfSpeech": "noun",
                "translation": "runko"
            },
            {
                "word": "hot tub",
                "partOfSpeech": "noun",
                "translation": "poreamme"
            },
            {
                "word": "two",
                "partOfSpeech": "noun",
                "translation": "kakkonen"
            },
            {
                "word": "underpants (slang)",
                "partOfSpeech": "noun",
                "translation": "alkkarit"
            },
            {
                "word": "unique",
                "partOfSpeech": "noun",
                "translation": "uniikki"
            },
            {
                "word": "upset",
                "partOfSpeech": "noun",
                "translation": "harmi"
            },
            {
                "word": "urine (piss)",
                "partOfSpeech": "noun",
                "translation": "kusi"
            },
            {
                "word": "urine (more medical)",
                "partOfSpeech": "noun",
                "translation": "virtsa"
            },
            {
                "word": "vacuum (hoover)",
                "partOfSpeech": "noun",
                "translation": "imuri"
            },
            {
                "word": "vacuum (vacuum packed)",
                "partOfSpeech": "noun",
                "translation": "vakuumi"
            },
            {
                "word": "vegetable (umbrella term)",
                "partOfSpeech": "noun",
                "translation": "kasvis"
            },
            {
                "word": "vegetable (greens)",
                "partOfSpeech": "noun",
                "translation": "vihannes"
            },
            {
                "word": "vice",
                "partOfSpeech": "noun",
                "translation": "pahe"
            },
            {
                "word": "videotape",
                "partOfSpeech": "noun",
                "translation": "videonauha"
            },
            {
                "word": "view (opinion)",
                "partOfSpeech": "noun",
                "translation": "näkemys"
            },
            {
                "word": "view (a sight)",
                "partOfSpeech": "noun",
                "translation": "näköala"
            }
        ],
        "word_set94": [
            {
                "word": "vision (sight)",
                "partOfSpeech": "noun",
                "translation": "näky"
            },
            {
                "word": "volume (slang)",
                "partOfSpeech": "noun",
                "translation": "volyymi"
            },
            {
                "word": "wake",
                "partOfSpeech": "noun",
                "translation": "vanavesi"
            },
            {
                "word": "want",
                "partOfSpeech": "noun",
                "translation": "mieliteko"
            },
            {
                "word": "wash",
                "partOfSpeech": "noun",
                "translation": "pesu"
            },
            {
                "word": "weed (drug, slang)",
                "partOfSpeech": "noun",
                "translation": "pilvi"
            },
            {
                "word": "weekly",
                "partOfSpeech": "noun",
                "translation": "viikkolehti"
            },
            {
                "word": "west",
                "partOfSpeech": "noun",
                "translation": "länsi"
            },
            {
                "word": "whine",
                "partOfSpeech": "noun",
                "translation": "vinku"
            },
            {
                "word": "whip",
                "partOfSpeech": "noun",
                "translation": "ruoska"
            },
            {
                "word": "whisper",
                "partOfSpeech": "noun",
                "translation": "kuiskaus"
            },
            {
                "word": "whole",
                "partOfSpeech": "noun",
                "translation": "kokonaisuus"
            },
            {
                "word": "will (last will and tastament)",
                "partOfSpeech": "noun",
                "translation": "testamentti"
            },
            {
                "word": "winning",
                "partOfSpeech": "noun",
                "translation": "voittaminen"
            },
            {
                "word": "working",
                "partOfSpeech": "noun",
                "translation": "työnteko"
            },
            {
                "word": "worship",
                "partOfSpeech": "noun",
                "translation": "palvonta"
            },
            {
                "word": "worth",
                "partOfSpeech": "noun",
                "translation": "arvokkuus"
            },
            {
                "word": "wrap",
                "partOfSpeech": "noun",
                "translation": "wrappi"
            },
            {
                "word": "yell",
                "partOfSpeech": "noun",
                "translation": "huuto"
            },
            {
                "word": "yellow",
                "partOfSpeech": "noun",
                "translation": "keltainen"
            },
            {
                "word": "young (animal's child)",
                "partOfSpeech": "noun",
                "translation": "poikanen"
            },
            {
                "word": "young (person)",
                "partOfSpeech": "noun",
                "translation": "nuori"
            },
            {
                "word": "zoom",
                "partOfSpeech": "noun",
                "translation": "zoomi"
            },
            {
                "word": "adventure",
                "partOfSpeech": "verb",
                "translation": "seikkailla"
            },
            {
                "word": "make possible",
                "partOfSpeech": "verb",
                "translation": "mahdollistaa"
            },
            {
                "word": "wow somebody",
                "partOfSpeech": "verb",
                "translation": "ällistyttää"
            },
            {
                "word": "anger someone",
                "partOfSpeech": "verb",
                "translation": "suututtaa"
            },
            {
                "word": "angle",
                "partOfSpeech": "verb",
                "translation": "onkia"
            },
            {
                "word": "anger",
                "partOfSpeech": "verb",
                "translation": "kiukuttaa"
            },
            {
                "word": "annoy (slang)",
                "partOfSpeech": "verb",
                "translation": "kyrpiä"
            },
            {
                "word": "apply a skill",
                "partOfSpeech": "verb",
                "translation": "soveltaa"
            },
            {
                "word": "argue (repetitively)",
                "partOfSpeech": "verb",
                "translation": "inttää"
            },
            {
                "word": "argue/debate",
                "partOfSpeech": "verb",
                "translation": "väitellä"
            },
            {
                "word": "arm other person",
                "partOfSpeech": "verb",
                "translation": "aseistaa"
            },
            {
                "word": "arm",
                "partOfSpeech": "verb",
                "translation": "aseistautua"
            },
            {
                "word": "ask question",
                "partOfSpeech": "verb",
                "translation": "kysyä"
            },
            {
                "word": "criticise",
                "partOfSpeech": "verb",
                "translation": "kritisoida"
            },
            {
                "word": "awake",
                "partOfSpeech": "verb",
                "translation": "herätä"
            },
            {
                "word": "bag",
                "partOfSpeech": "verb",
                "translation": "lököttää"
            },
            {
                "word": "bang explode",
                "partOfSpeech": "verb",
                "translation": "pamauttaa"
            }
        ],
        "word_set95": [
            {
                "word": "bar",
                "partOfSpeech": "verb",
                "translation": "teljetä"
            },
            {
                "word": "be aware of",
                "partOfSpeech": "verb",
                "translation": "tiedostaa"
            },
            {
                "word": "be intoxicated",
                "partOfSpeech": "verb",
                "translation": "huumautua"
            },
            {
                "word": "beach",
                "partOfSpeech": "verb",
                "translation": "rantautua"
            },
            {
                "word": "beat your meat",
                "partOfSpeech": "verb",
                "translation": "runkata"
            },
            {
                "word": "beat hard",
                "partOfSpeech": "verb",
                "translation": "hakata"
            },
            {
                "word": "begin (slang)",
                "partOfSpeech": "verb",
                "translation": "ruveta"
            },
            {
                "word": "bike",
                "partOfSpeech": "verb",
                "translation": "pyöräillä"
            },
            {
                "word": "bill",
                "partOfSpeech": "verb",
                "translation": "laskuttaa"
            },
            {
                "word": "bite to eat",
                "partOfSpeech": "verb",
                "translation": "haukata"
            },
            {
                "word": "bite to hurt",
                "partOfSpeech": "verb",
                "translation": "purra"
            },
            {
                "word": "blind",
                "partOfSpeech": "verb",
                "translation": "sokaista"
            },
            {
                "word": "blink/flash",
                "partOfSpeech": "verb",
                "translation": "välkkyä"
            },
            {
                "word": "blog",
                "partOfSpeech": "verb",
                "translation": "blogata"
            },
            {
                "word": "board e.g ship",
                "partOfSpeech": "verb",
                "translation": "nousta"
            },
            {
                "word": "border",
                "partOfSpeech": "verb",
                "translation": "reunustaa"
            },
            {
                "word": "boss",
                "partOfSpeech": "verb",
                "translation": "pomottaa"
            },
            {
                "word": "bottle",
                "partOfSpeech": "verb",
                "translation": "pullottaa"
            },
            {
                "word": "bow",
                "partOfSpeech": "verb",
                "translation": "kumartaa"
            },
            {
                "word": "box",
                "partOfSpeech": "verb",
                "translation": "nyrkkeillä"
            },
            {
                "word": "brand",
                "partOfSpeech": "verb",
                "translation": "polttomerkitä"
            },
            {
                "word": "bread",
                "partOfSpeech": "verb",
                "translation": "paneroida"
            },
            {
                "word": "brief",
                "partOfSpeech": "verb",
                "translation": "briiffata"
            },
            {
                "word": "brown",
                "partOfSpeech": "verb",
                "translation": "ruskistua"
            },
            {
                "word": "bubble",
                "partOfSpeech": "verb",
                "translation": "kuplia"
            },
            {
                "word": "buck",
                "partOfSpeech": "verb",
                "translation": "vikuroida"
            },
            {
                "word": "budget",
                "partOfSpeech": "verb",
                "translation": "budjetoida"
            },
            {
                "word": "bum/borrow",
                "partOfSpeech": "verb",
                "translation": "pummata"
            },
            {
                "word": "cable",
                "partOfSpeech": "verb",
                "translation": "kaapeloida"
            },
            {
                "word": "cake",
                "partOfSpeech": "verb",
                "translation": "paakkuuntua"
            },
            {
                "word": "camp tent",
                "partOfSpeech": "verb",
                "translation": "telttailla"
            },
            {
                "word": "campaign",
                "partOfSpeech": "verb",
                "translation": "kampanjoida"
            },
            {
                "word": "cart",
                "partOfSpeech": "verb",
                "translation": "kärrätä"
            },
            {
                "word": "castle",
                "partOfSpeech": "verb",
                "translation": "tornittaa"
            },
            {
                "word": "chain",
                "partOfSpeech": "verb",
                "translation": "kahlita"
            },
            {
                "word": "chalk",
                "partOfSpeech": "verb",
                "translation": "liiduta"
            },
            {
                "word": "channel",
                "partOfSpeech": "verb",
                "translation": "kanavoida"
            },
            {
                "word": "charm",
                "partOfSpeech": "verb",
                "translation": "hurmata"
            },
            {
                "word": "chicken",
                "partOfSpeech": "verb",
                "translation": "jänistää"
            },
            {
                "word": "circle surround",
                "partOfSpeech": "verb",
                "translation": "piirittää"
            }
        ],
        "word_set96": [
            {
                "word": "circumcise",
                "partOfSpeech": "verb",
                "translation": "ympärileikata"
            },
            {
                "word": "clay",
                "partOfSpeech": "verb",
                "translation": "saveta"
            },
            {
                "word": "sober up",
                "partOfSpeech": "verb",
                "translation": "selvitä"
            },
            {
                "word": "clock",
                "partOfSpeech": "verb",
                "translation": "kellottaa"
            },
            {
                "word": "clone",
                "partOfSpeech": "verb",
                "translation": "kloonata"
            },
            {
                "word": "cloud",
                "partOfSpeech": "verb",
                "translation": "samentua"
            },
            {
                "word": "clown",
                "partOfSpeech": "verb",
                "translation": "pelleillä"
            },
            {
                "word": "coat (a cake)",
                "partOfSpeech": "verb",
                "translation": "kuorruttaa"
            },
            {
                "word": "coat",
                "partOfSpeech": "verb",
                "translation": "päällystää"
            },
            {
                "word": "command",
                "partOfSpeech": "verb",
                "translation": "komentaa"
            },
            {
                "word": "con",
                "partOfSpeech": "verb",
                "translation": "huijata"
            },
            {
                "word": "concentrate a solution",
                "partOfSpeech": "verb",
                "translation": "konsentroida"
            },
            {
                "word": "concentrate on",
                "partOfSpeech": "verb",
                "translation": "keskittyä"
            },
            {
                "word": "condition",
                "partOfSpeech": "verb",
                "translation": "ehdollistaa"
            },
            {
                "word": "contract",
                "partOfSpeech": "verb",
                "translation": "supistua"
            },
            {
                "word": "corner",
                "partOfSpeech": "verb",
                "translation": "nurkata"
            },
            {
                "word": "costume",
                "partOfSpeech": "verb",
                "translation": "puvustaa"
            },
            {
                "word": "court",
                "partOfSpeech": "verb",
                "translation": "liehakoida"
            },
            {
                "word": "crown",
                "partOfSpeech": "verb",
                "translation": "kruunata"
            },
            {
                "word": "cruise",
                "partOfSpeech": "verb",
                "translation": "risteillä"
            },
            {
                "word": "crush",
                "partOfSpeech": "verb",
                "translation": "musertaa"
            },
            {
                "word": "cup",
                "partOfSpeech": "verb",
                "translation": "kupata"
            },
            {
                "word": "cover up/curtain",
                "partOfSpeech": "verb",
                "translation": "verhota"
            },
            {
                "word": "date (slang)",
                "partOfSpeech": "verb",
                "translation": "deittailla"
            },
            {
                "word": "dawn",
                "partOfSpeech": "verb",
                "translation": "sarastaa"
            },
            {
                "word": "deck",
                "partOfSpeech": "verb",
                "translation": "tällätä"
            },
            {
                "word": "deposit",
                "partOfSpeech": "verb",
                "translation": "tallettaa"
            },
            {
                "word": "dice",
                "partOfSpeech": "verb",
                "translation": "kuutioida"
            },
            {
                "word": "die of/from",
                "partOfSpeech": "verb",
                "translation": "kuolla"
            },
            {
                "word": "dimension",
                "partOfSpeech": "verb",
                "translation": "mitoittaa"
            },
            {
                "word": "dirty",
                "partOfSpeech": "verb",
                "translation": "liata"
            },
            {
                "word": "discount",
                "partOfSpeech": "verb",
                "translation": "diskontata"
            },
            {
                "word": "distance",
                "partOfSpeech": "verb",
                "translation": "etäyttää"
            },
            {
                "word": "being divided",
                "partOfSpeech": "verb",
                "translation": "jakaantua"
            },
            {
                "word": "help slang",
                "partOfSpeech": "verb",
                "translation": "avittaa"
            },
            {
                "word": "to dub",
                "partOfSpeech": "verb",
                "translation": "dubbata"
            },
            {
                "word": "to fossilize",
                "partOfSpeech": "verb",
                "translation": "fossiloitua"
            },
            {
                "word": "be out of breath",
                "partOfSpeech": "verb",
                "translation": "hengästyä"
            },
            {
                "word": "imitate",
                "partOfSpeech": "verb",
                "translation": "imitoida"
            },
            {
                "word": "have a holiday",
                "partOfSpeech": "verb",
                "translation": "lomailla"
            }
        ],
        "word_set97": [
            {
                "word": "go through",
                "partOfSpeech": "verb",
                "translation": "läpikäydä"
            },
            {
                "word": "Make embarrassing mistakes",
                "partOfSpeech": "verb",
                "translation": "mokailla"
            },
            {
                "word": "To crumble",
                "partOfSpeech": "verb",
                "translation": "murentua"
            },
            {
                "word": "to neutralize",
                "partOfSpeech": "verb",
                "translation": "neutralisoida"
            },
            {
                "word": "show symptoms",
                "partOfSpeech": "verb",
                "translation": "oireilla"
            },
            {
                "word": "Learn",
                "partOfSpeech": "verb",
                "translation": "opetella"
            },
            {
                "word": "fuck around",
                "partOfSpeech": "verb",
                "translation": "paneskella"
            },
            {
                "word": "tear/slang for doing something unexpected",
                "partOfSpeech": "verb",
                "translation": "repäistä"
            },
            {
                "word": "suffice/be enough",
                "partOfSpeech": "verb",
                "translation": "riittää"
            },
            {
                "word": "call around",
                "partOfSpeech": "verb",
                "translation": "soitella"
            },
            {
                "word": "sterilise",
                "partOfSpeech": "verb",
                "translation": "sterilisoida"
            },
            {
                "word": "symbolise",
                "partOfSpeech": "verb",
                "translation": "symboloida"
            },
            {
                "word": "realise",
                "partOfSpeech": "verb",
                "translation": "tajuta"
            },
            {
                "word": "to report (news)",
                "partOfSpeech": "verb",
                "translation": "uutisoida"
            },
            {
                "word": "count together",
                "partOfSpeech": "verb",
                "translation": "yhteenlaskea"
            },
            {
                "word": "dock",
                "partOfSpeech": "verb",
                "translation": "telakoida"
            },
            {
                "word": "doctor",
                "partOfSpeech": "verb",
                "translation": "tohtoroida"
            },
            {
                "word": "document",
                "partOfSpeech": "verb",
                "translation": "dokumentoida"
            },
            {
                "word": "double slang",
                "partOfSpeech": "verb",
                "translation": "tuplata"
            },
            {
                "word": "drum",
                "partOfSpeech": "verb",
                "translation": "rummuttaa"
            },
            {
                "word": "dumb",
                "partOfSpeech": "verb",
                "translation": "tyhmentää"
            },
            {
                "word": "earth",
                "partOfSpeech": "verb",
                "translation": "maattaa"
            },
            {
                "word": "snack",
                "partOfSpeech": "verb",
                "translation": "popsia"
            },
            {
                "word": "edge",
                "partOfSpeech": "verb",
                "translation": "kantata"
            },
            {
                "word": "educate self",
                "partOfSpeech": "verb",
                "translation": "kouluttautua"
            },
            {
                "word": "empty",
                "partOfSpeech": "verb",
                "translation": "tyhjentää"
            },
            {
                "word": "to hump",
                "partOfSpeech": "verb",
                "translation": "nylkyttää"
            },
            {
                "word": "enthrall",
                "partOfSpeech": "verb",
                "translation": "lumota"
            },
            {
                "word": "eye",
                "partOfSpeech": "verb",
                "translation": "silmäillä"
            },
            {
                "word": "fan",
                "partOfSpeech": "verb",
                "translation": "leyhytellä"
            },
            {
                "word": "fast",
                "partOfSpeech": "verb",
                "translation": "paastota"
            },
            {
                "word": "feel emotion",
                "partOfSpeech": "verb",
                "translation": "tuntea"
            },
            {
                "word": "feel physical",
                "partOfSpeech": "verb",
                "translation": "tuntua"
            },
            {
                "word": "fine",
                "partOfSpeech": "verb",
                "translation": "sakottaa"
            },
            {
                "word": "fire gun",
                "partOfSpeech": "verb",
                "translation": "tulittaa"
            },
            {
                "word": "fist",
                "partOfSpeech": "verb",
                "translation": "nyrkistää"
            },
            {
                "word": "flame burn fiercely",
                "partOfSpeech": "verb",
                "translation": "liekehtiä"
            },
            {
                "word": "flood",
                "partOfSpeech": "verb",
                "translation": "tulvia"
            },
            {
                "word": "flower",
                "partOfSpeech": "verb",
                "translation": "heilimöidä"
            },
            {
                "word": "flute",
                "partOfSpeech": "verb",
                "translation": "laskostaa"
            }
        ],
        "word_set98": [
            {
                "word": "foam",
                "partOfSpeech": "verb",
                "translation": "vaahdota"
            },
            {
                "word": "forest",
                "partOfSpeech": "verb",
                "translation": "metsittää"
            },
            {
                "word": "fork",
                "partOfSpeech": "verb",
                "translation": "haarukoida"
            },
            {
                "word": "fountain",
                "partOfSpeech": "verb",
                "translation": "pulputa"
            },
            {
                "word": "fruit",
                "partOfSpeech": "verb",
                "translation": "hedelmöidä"
            },
            {
                "word": "further",
                "partOfSpeech": "verb",
                "translation": "edesauttaa"
            },
            {
                "word": "gag",
                "partOfSpeech": "verb",
                "translation": "yökätä"
            },
            {
                "word": "gang",
                "partOfSpeech": "verb",
                "translation": "jengiytyä"
            },
            {
                "word": "gas",
                "partOfSpeech": "verb",
                "translation": "kaasuttaa"
            },
            {
                "word": "gesture",
                "partOfSpeech": "verb",
                "translation": "elehtiä"
            },
            {
                "word": "gig",
                "partOfSpeech": "verb",
                "translation": "keikkailla"
            },
            {
                "word": "glitter",
                "partOfSpeech": "verb",
                "translation": "kimmeltää"
            },
            {
                "word": "glue",
                "partOfSpeech": "verb",
                "translation": "liimata"
            },
            {
                "word": "gossip",
                "partOfSpeech": "verb",
                "translation": "juoruilla"
            },
            {
                "word": "grace",
                "partOfSpeech": "verb",
                "translation": "komistaa"
            },
            {
                "word": "grease",
                "partOfSpeech": "verb",
                "translation": "rasvata"
            },
            {
                "word": "grow in size",
                "partOfSpeech": "verb",
                "translation": "isontua"
            },
            {
                "word": "gut",
                "partOfSpeech": "verb",
                "translation": "perata"
            },
            {
                "word": "guy",
                "partOfSpeech": "verb",
                "translation": "harustaa"
            },
            {
                "word": "hammer",
                "partOfSpeech": "verb",
                "translation": "vasaroida"
            },
            {
                "word": "hang execution",
                "partOfSpeech": "verb",
                "translation": "hirttäytyä"
            },
            {
                "word": "hang up an object",
                "partOfSpeech": "verb",
                "translation": "ripustaa"
            },
            {
                "word": "happen slang",
                "partOfSpeech": "verb",
                "translation": "sattua"
            },
            {
                "word": "have (formal)",
                "partOfSpeech": "verb",
                "translation": "omata"
            },
            {
                "word": "hesitate",
                "partOfSpeech": "verb",
                "translation": "empiä"
            },
            {
                "word": "highlight",
                "partOfSpeech": "verb",
                "translation": "painottaa"
            },
            {
                "word": "hint",
                "partOfSpeech": "verb",
                "translation": "vihjaista"
            },
            {
                "word": "hoop",
                "partOfSpeech": "verb",
                "translation": "vannehtia"
            },
            {
                "word": "host (female host)",
                "partOfSpeech": "verb",
                "translation": "emännöidä"
            },
            {
                "word": "host (male host)",
                "partOfSpeech": "verb",
                "translation": "isännöidä"
            },
            {
                "word": "humble",
                "partOfSpeech": "verb",
                "translation": "nöyrtyä"
            },
            {
                "word": "hurt/sting",
                "partOfSpeech": "verb",
                "translation": "kirpaista"
            },
            {
                "word": "hurt (you're hurting)",
                "partOfSpeech": "verb",
                "translation": "sattua"
            },
            {
                "word": "hurt (someone)",
                "partOfSpeech": "verb",
                "translation": "satuttaa"
            },
            {
                "word": "hush",
                "partOfSpeech": "verb",
                "translation": "hyssytellä"
            },
            {
                "word": "image",
                "partOfSpeech": "verb",
                "translation": "kuvantaa"
            },
            {
                "word": "improve something",
                "partOfSpeech": "verb",
                "translation": "parantaa"
            },
            {
                "word": "improve self",
                "partOfSpeech": "verb",
                "translation": "parantua"
            },
            {
                "word": "instruct",
                "partOfSpeech": "verb",
                "translation": "ohjeistaa"
            },
            {
                "word": "intern",
                "partOfSpeech": "verb",
                "translation": "internoida"
            }
        ],
        "word_set99": [
            {
                "word": "irritate",
                "partOfSpeech": "verb",
                "translation": "harmittaa"
            },
            {
                "word": "isolate (other)",
                "partOfSpeech": "verb",
                "translation": "eristäytyä"
            },
            {
                "word": "isolate (self)",
                "partOfSpeech": "verb",
                "translation": "eristää"
            },
            {
                "word": "issue",
                "partOfSpeech": "verb",
                "translation": "emittoida"
            },
            {
                "word": "jelly",
                "partOfSpeech": "verb",
                "translation": "hillota"
            },
            {
                "word": "juice",
                "partOfSpeech": "verb",
                "translation": "mehustaa"
            },
            {
                "word": "justify",
                "partOfSpeech": "verb",
                "translation": "aiheellistaa"
            },
            {
                "word": "keep a lookout",
                "partOfSpeech": "verb",
                "translation": "tähystää"
            },
            {
                "word": "french kiss",
                "partOfSpeech": "verb",
                "translation": "suudella"
            },
            {
                "word": "lame",
                "partOfSpeech": "verb",
                "translation": "rampauttaa"
            },
            {
                "word": "leak",
                "partOfSpeech": "verb",
                "translation": "vuotaa"
            },
            {
                "word": "lease",
                "partOfSpeech": "verb",
                "translation": "liisata"
            },
            {
                "word": "lecture",
                "partOfSpeech": "verb",
                "translation": "luennoida"
            },
            {
                "word": "level",
                "partOfSpeech": "verb",
                "translation": "tasoittaa"
            },
            {
                "word": "license",
                "partOfSpeech": "verb",
                "translation": "lisensoida"
            },
            {
                "word": "live somewhere",
                "partOfSpeech": "verb",
                "translation": "asua"
            },
            {
                "word": "live i.e be alive",
                "partOfSpeech": "verb",
                "translation": "elää"
            },
            {
                "word": "load internet etc",
                "partOfSpeech": "verb",
                "translation": "ladata"
            },
            {
                "word": "load a weapon",
                "partOfSpeech": "verb",
                "translation": "panostaa"
            },
            {
                "word": "long",
                "partOfSpeech": "verb",
                "translation": "kaihota"
            },
            {
                "word": "long for",
                "partOfSpeech": "verb",
                "translation": "kaivata"
            },
            {
                "word": "loosen something",
                "partOfSpeech": "verb",
                "translation": "löystyä"
            },
            {
                "word": "lord",
                "partOfSpeech": "verb",
                "translation": "herrastella"
            },
            {
                "word": "lose object",
                "partOfSpeech": "verb",
                "translation": "hukata"
            },
            {
                "word": "lose game",
                "partOfSpeech": "verb",
                "translation": "hävitä"
            },
            {
                "word": "lounge",
                "partOfSpeech": "verb",
                "translation": "lekottaa"
            },
            {
                "word": "be lucky",
                "partOfSpeech": "verb",
                "translation": "onnistaa"
            },
            {
                "word": "lunch",
                "partOfSpeech": "verb",
                "translation": "lounastaa"
            },
            {
                "word": "lure/tempt",
                "partOfSpeech": "verb",
                "translation": "vietellä"
            },
            {
                "word": "make a sound",
                "partOfSpeech": "verb",
                "translation": "äännellä"
            },
            {
                "word": "man",
                "partOfSpeech": "verb",
                "translation": "miehittää"
            },
            {
                "word": "manage to",
                "partOfSpeech": "verb",
                "translation": "jaksaa, onnistua"
            },
            {
                "word": "map",
                "partOfSpeech": "verb",
                "translation": "kartoittaa"
            },
            {
                "word": "market",
                "partOfSpeech": "verb",
                "translation": "markkinoida"
            },
            {
                "word": "mask",
                "partOfSpeech": "verb",
                "translation": "maskata"
            },
            {
                "word": "milk",
                "partOfSpeech": "verb",
                "translation": "lypsää"
            },
            {
                "word": "mirror",
                "partOfSpeech": "verb",
                "translation": "peilata"
            },
            {
                "word": "model",
                "partOfSpeech": "verb",
                "translation": "mallintaa"
            },
            {
                "word": "mouse",
                "partOfSpeech": "verb",
                "translation": "hiirestää"
            }
        ],
        "word_set100": [
            {
                "word": "move self",
                "partOfSpeech": "verb",
                "translation": "liikkua"
            },
            {
                "word": "move something",
                "partOfSpeech": "verb",
                "translation": "siirtää"
            },
            {
                "word": "mushroom",
                "partOfSpeech": "verb",
                "translation": "sienestää"
            },
            {
                "word": "needle",
                "partOfSpeech": "verb",
                "translation": "piikitellä"
            },
            {
                "word": "nest",
                "partOfSpeech": "verb",
                "translation": "pesiä"
            },
            {
                "word": "network",
                "partOfSpeech": "verb",
                "translation": "verkkoutua"
            },
            {
                "word": "note",
                "partOfSpeech": "verb",
                "translation": "nuotittaa"
            },
            {
                "word": "number",
                "partOfSpeech": "verb",
                "translation": "numeroida"
            },
            {
                "word": "oil",
                "partOfSpeech": "verb",
                "translation": "öljytä"
            },
            {
                "word": "overtake",
                "partOfSpeech": "verb",
                "translation": "ohitella"
            },
            {
                "word": "ovulate",
                "partOfSpeech": "verb",
                "translation": "ovuloida"
            },
            {
                "word": "oxidize",
                "partOfSpeech": "verb",
                "translation": "oksidoida"
            },
            {
                "word": "pad",
                "partOfSpeech": "verb",
                "translation": "pehmustaa"
            },
            {
                "word": "page",
                "partOfSpeech": "verb",
                "translation": "sivuttaa"
            },
            {
                "word": "paper",
                "partOfSpeech": "verb",
                "translation": "paperoida"
            },
            {
                "word": "parade",
                "partOfSpeech": "verb",
                "translation": "prameilla"
            },
            {
                "word": "pattern",
                "partOfSpeech": "verb",
                "translation": "kuvioida"
            },
            {
                "word": "pen",
                "partOfSpeech": "verb",
                "translation": "karsinoida"
            },
            {
                "word": "pepper",
                "partOfSpeech": "verb",
                "translation": "pippuroida"
            },
            {
                "word": "photograph",
                "partOfSpeech": "verb",
                "translation": "valokuvata"
            },
            {
                "word": "phrase",
                "partOfSpeech": "verb",
                "translation": "fraseerata"
            },
            {
                "word": "pick fruits/berries/produce",
                "partOfSpeech": "verb",
                "translation": "poimia"
            },
            {
                "word": "pie",
                "partOfSpeech": "verb",
                "translation": "kakuttaa"
            },
            {
                "word": "pile",
                "partOfSpeech": "verb",
                "translation": "kasata"
            },
            {
                "word": "pill",
                "partOfSpeech": "verb",
                "translation": "nukata"
            },
            {
                "word": "pilot",
                "partOfSpeech": "verb",
                "translation": "luotsata"
            },
            {
                "word": "plate",
                "partOfSpeech": "verb",
                "translation": "silata"
            },
            {
                "word": "play instrument/ phone call",
                "partOfSpeech": "verb",
                "translation": "soittaa"
            },
            {
                "word": "play really well (swing Bebe!)",
                "partOfSpeech": "verb",
                "translation": "svengata"
            },
            {
                "word": "please",
                "partOfSpeech": "verb",
                "translation": "miellyttää"
            },
            {
                "word": "plot",
                "partOfSpeech": "verb",
                "translation": "plotata"
            },
            {
                "word": "pole",
                "partOfSpeech": "verb",
                "translation": "sauvoa"
            },
            {
                "word": "poo",
                "partOfSpeech": "verb",
                "translation": "kakata"
            },
            {
                "word": "position",
                "partOfSpeech": "verb",
                "translation": "asemoida"
            },
            {
                "word": "prank",
                "partOfSpeech": "verb",
                "translation": "jekkuilla"
            },
            {
                "word": "premiere",
                "partOfSpeech": "verb",
                "translation": "ensiesittää"
            },
            {
                "word": "prevent/take precautions",
                "partOfSpeech": "verb",
                "translation": "ehkäistä"
            },
            {
                "word": "prevent/stop",
                "partOfSpeech": "verb",
                "translation": "estää"
            },
            {
                "word": "price",
                "partOfSpeech": "verb",
                "translation": "hinnoitella"
            },
            {
                "word": "profile",
                "partOfSpeech": "verb",
                "translation": "profiloida"
            }
        ],
        "word_set101": [
            {
                "word": "profit",
                "partOfSpeech": "verb",
                "translation": "hyötyä"
            },
            {
                "word": "prostitute",
                "partOfSpeech": "verb",
                "translation": "prostituoida"
            },
            {
                "word": "hole punch",
                "partOfSpeech": "verb",
                "translation": "rei'ittää"
            },
            {
                "word": "purple",
                "partOfSpeech": "verb",
                "translation": "purppuroida"
            },
            {
                "word": "purse",
                "partOfSpeech": "verb",
                "translation": "mutristaa"
            },
            {
                "word": "quiet",
                "partOfSpeech": "verb",
                "translation": "hiljentyä"
            },
            {
                "word": "radio",
                "partOfSpeech": "verb",
                "translation": "radioida"
            },
            {
                "word": "rag",
                "partOfSpeech": "verb",
                "translation": "naljailla"
            },
            {
                "word": "rage",
                "partOfSpeech": "verb",
                "translation": "raivota"
            },
            {
                "word": "give promotion/payrise",
                "partOfSpeech": "verb",
                "translation": "ylentää"
            },
            {
                "word": "ranch",
                "partOfSpeech": "verb",
                "translation": "tarhata"
            },
            {
                "word": "rare",
                "partOfSpeech": "verb",
                "translation": "värnytä"
            },
            {
                "word": "reason",
                "partOfSpeech": "verb",
                "translation": "järkeillä"
            },
            {
                "word": "record audio",
                "partOfSpeech": "verb",
                "translation": "äänittää"
            },
            {
                "word": "remark",
                "partOfSpeech": "verb",
                "translation": "panna merkille"
            },
            {
                "word": "repair",
                "partOfSpeech": "verb",
                "translation": "kunnostaa"
            },
            {
                "word": "resource",
                "partOfSpeech": "verb",
                "translation": "resursoida"
            },
            {
                "word": "rib",
                "partOfSpeech": "verb",
                "translation": "kaarittaa"
            },
            {
                "word": "riot",
                "partOfSpeech": "verb",
                "translation": "mellakoida"
            },
            {
                "word": "river",
                "partOfSpeech": "verb",
                "translation": "kaartaa"
            },
            {
                "word": "roast",
                "partOfSpeech": "verb",
                "translation": "pariloida"
            },
            {
                "word": "rock i.e rock the baby",
                "partOfSpeech": "verb",
                "translation": "keinua"
            },
            {
                "word": "rock i.e rock'n'roll",
                "partOfSpeech": "verb",
                "translation": "rokata"
            },
            {
                "word": "roof",
                "partOfSpeech": "verb",
                "translation": "kattaa"
            },
            {
                "word": "rope",
                "partOfSpeech": "verb",
                "translation": "köyttää"
            },
            {
                "word": "row",
                "partOfSpeech": "verb",
                "translation": "soutaa"
            },
            {
                "word": "rush someone else",
                "partOfSpeech": "verb",
                "translation": "hoputtaa"
            },
            {
                "word": "hurrying",
                "partOfSpeech": "verb",
                "translation": "rynnätä"
            },
            {
                "word": "sack",
                "partOfSpeech": "verb",
                "translation": "säkittää"
            },
            {
                "word": "salt",
                "partOfSpeech": "verb",
                "translation": "suolata"
            },
            {
                "word": "sample",
                "partOfSpeech": "verb",
                "translation": "sämplätä"
            },
            {
                "word": "say (poetic)",
                "partOfSpeech": "verb",
                "translation": "lausua"
            },
            {
                "word": "scale",
                "partOfSpeech": "verb",
                "translation": "suomustaa"
            },
            {
                "word": "scar",
                "partOfSpeech": "verb",
                "translation": "arpeuttaa"
            },
            {
                "word": "leave a scar",
                "partOfSpeech": "verb",
                "translation": "jättää arpi"
            },
            {
                "word": "scent",
                "partOfSpeech": "verb",
                "translation": "vainuta"
            },
            {
                "word": "scheme",
                "partOfSpeech": "verb",
                "translation": "juonia"
            },
            {
                "word": "scout",
                "partOfSpeech": "verb",
                "translation": "partioida"
            },
            {
                "word": "scrape self",
                "partOfSpeech": "verb",
                "translation": "kaapia"
            },
            {
                "word": "scrape something",
                "partOfSpeech": "verb",
                "translation": "kaaputtaa"
            }
        ],
        "word_set102": [
            {
                "word": "screen",
                "partOfSpeech": "verb",
                "translation": "ikkunoida"
            },
            {
                "word": "secure",
                "partOfSpeech": "verb",
                "translation": "turvata"
            },
            {
                "word": "seed",
                "partOfSpeech": "verb",
                "translation": "siementää"
            },
            {
                "word": "shampoo",
                "partOfSpeech": "verb",
                "translation": "shamponoida"
            },
            {
                "word": "shift",
                "partOfSpeech": "verb",
                "translation": "ailahdella"
            },
            {
                "word": "shock/surprise",
                "partOfSpeech": "verb",
                "translation": "järisyttää"
            },
            {
                "word": "shock electric",
                "partOfSpeech": "verb",
                "translation": "Sähkoisku"
            },
            {
                "word": "shoe",
                "partOfSpeech": "verb",
                "translation": "kengittää"
            },
            {
                "word": "go shopping",
                "partOfSpeech": "verb",
                "translation": "ostella"
            },
            {
                "word": "short",
                "partOfSpeech": "verb",
                "translation": "shortata"
            },
            {
                "word": "shovel",
                "partOfSpeech": "verb",
                "translation": "lapioida"
            },
            {
                "word": "shrink something",
                "partOfSpeech": "verb",
                "translation": "kutistaa"
            },
            {
                "word": "shrink self",
                "partOfSpeech": "verb",
                "translation": "kutistua"
            },
            {
                "word": "shuttle",
                "partOfSpeech": "verb",
                "translation": "sukkuloida"
            },
            {
                "word": "silence",
                "partOfSpeech": "verb",
                "translation": "hiljentää"
            },
            {
                "word": "sin",
                "partOfSpeech": "verb",
                "translation": "langeta"
            },
            {
                "word": "sip",
                "partOfSpeech": "verb",
                "translation": "siemailla"
            },
            {
                "word": "sketch",
                "partOfSpeech": "verb",
                "translation": "luonnostella"
            },
            {
                "word": "smart",
                "partOfSpeech": "verb",
                "translation": "kirvellä"
            },
            {
                "word": "Smell bad",
                "partOfSpeech": "verb",
                "translation": "haista"
            },
            {
                "word": "smell foul",
                "partOfSpeech": "verb",
                "translation": "haistella"
            },
            {
                "word": "smooth",
                "partOfSpeech": "verb",
                "translation": "siletä"
            },
            {
                "word": "have a snack",
                "partOfSpeech": "verb",
                "translation": "napostella"
            },
            {
                "word": "snap an object or snap fingers",
                "partOfSpeech": "verb",
                "translation": "napsauttaa"
            },
            {
                "word": "soap",
                "partOfSpeech": "verb",
                "translation": "saippuoida"
            },
            {
                "word": "Make/play a sound",
                "partOfSpeech": "verb",
                "translation": "soida"
            },
            {
                "word": "sour",
                "partOfSpeech": "verb",
                "translation": "hapattaa"
            },
            {
                "word": "spoil I.e kid",
                "partOfSpeech": "verb",
                "translation": "lelliä"
            },
            {
                "word": "sponge",
                "partOfSpeech": "verb",
                "translation": "siipeillä"
            },
            {
                "word": "square",
                "partOfSpeech": "verb",
                "translation": "neliöidä"
            },
            {
                "word": "state",
                "partOfSpeech": "verb",
                "translation": "todeta"
            },
            {
                "word": "steady",
                "partOfSpeech": "verb",
                "translation": "vakauttaa"
            },
            {
                "word": "stem",
                "partOfSpeech": "verb",
                "translation": "padota"
            },
            {
                "word": "stew",
                "partOfSpeech": "verb",
                "translation": "hautua"
            },
            {
                "word": "stone",
                "partOfSpeech": "verb",
                "translation": "kivittää"
            },
            {
                "word": "store",
                "partOfSpeech": "verb",
                "translation": "varastoida"
            },
            {
                "word": "stripe",
                "partOfSpeech": "verb",
                "translation": "juovittaa"
            },
            {
                "word": "stud",
                "partOfSpeech": "verb",
                "translation": "nastoittaa"
            },
            {
                "word": "style",
                "partOfSpeech": "verb",
                "translation": "stailata"
            },
            {
                "word": "subtitle",
                "partOfSpeech": "verb",
                "translation": "tekstittää"
            }
        ],
        "word_set103": [
            {
                "word": "sugar",
                "partOfSpeech": "verb",
                "translation": "sokeroida"
            },
            {
                "word": "suggest hinting",
                "partOfSpeech": "verb",
                "translation": "ehdotella"
            },
            {
                "word": "supper",
                "partOfSpeech": "verb",
                "translation": "illallistaa"
            },
            {
                "word": "surface",
                "partOfSpeech": "verb",
                "translation": "pulpahtaa"
            },
            {
                "word": "tap I.e with finger",
                "partOfSpeech": "verb",
                "translation": "naputella"
            },
            {
                "word": "target",
                "partOfSpeech": "verb",
                "translation": "kohdentaa"
            },
            {
                "word": "tattoo",
                "partOfSpeech": "verb",
                "translation": "tatuoida"
            },
            {
                "word": "tax",
                "partOfSpeech": "verb",
                "translation": "verottaa"
            },
            {
                "word": "tense muscles",
                "partOfSpeech": "verb",
                "translation": "jännittyä"
            },
            {
                "word": "tense",
                "partOfSpeech": "verb",
                "translation": "jännittää"
            },
            {
                "word": "thin",
                "partOfSpeech": "verb",
                "translation": "ohentaa"
            },
            {
                "word": "think about",
                "partOfSpeech": "verb",
                "translation": "ajatella"
            },
            {
                "word": "threaten with something",
                "partOfSpeech": "verb",
                "translation": "uhkailla"
            },
            {
                "word": "throw pottery",
                "partOfSpeech": "verb",
                "translation": "dreijata"
            },
            {
                "word": "thunder yell",
                "partOfSpeech": "verb",
                "translation": "jyrähtää"
            },
            {
                "word": "thunder",
                "partOfSpeech": "verb",
                "translation": "ukkostaa"
            },
            {
                "word": "time",
                "partOfSpeech": "verb",
                "translation": "ajastaa"
            },
            {
                "word": "time (as in timed it right)",
                "partOfSpeech": "verb",
                "translation": "ajoittaa"
            },
            {
                "word": "tin",
                "partOfSpeech": "verb",
                "translation": "tinata"
            },
            {
                "word": "tire",
                "partOfSpeech": "verb",
                "translation": "väsyttää"
            },
            {
                "word": "title",
                "partOfSpeech": "verb",
                "translation": "otsikoida"
            },
            {
                "word": "to travel",
                "partOfSpeech": "verb",
                "translation": "matkustaa"
            },
            {
                "word": "go on trip",
                "partOfSpeech": "verb",
                "translation": "reissata"
            },
            {
                "word": "trim tree",
                "partOfSpeech": "verb",
                "translation": "oksia"
            },
            {
                "word": "trip up",
                "partOfSpeech": "verb",
                "translation": "kampata"
            },
            {
                "word": "troll",
                "partOfSpeech": "verb",
                "translation": "trollata"
            },
            {
                "word": "vacuum",
                "partOfSpeech": "verb",
                "translation": "imuroida"
            },
            {
                "word": "wait (slang)",
                "partOfSpeech": "verb",
                "translation": "venata"
            },
            {
                "word": "wait about",
                "partOfSpeech": "verb",
                "translation": "odotella"
            },
            {
                "word": "wait for",
                "partOfSpeech": "verb",
                "translation": "odottaa"
            },
            {
                "word": "wash dishes",
                "partOfSpeech": "verb",
                "translation": "tiskata"
            },
            {
                "word": "weight",
                "partOfSpeech": "verb",
                "translation": "puntaroida"
            },
            {
                "word": "wet someone/something else",
                "partOfSpeech": "verb",
                "translation": "kastella"
            },
            {
                "word": "get wet",
                "partOfSpeech": "verb",
                "translation": "kastua"
            },
            {
                "word": "wheel",
                "partOfSpeech": "verb",
                "translation": "teilata"
            },
            {
                "word": "whistle loud",
                "partOfSpeech": "verb",
                "translation": "vislailla"
            },
            {
                "word": "white",
                "partOfSpeech": "verb",
                "translation": "vaaleta"
            },
            {
                "word": "whore",
                "partOfSpeech": "verb",
                "translation": "huorata"
            },
            {
                "word": "wind in/ wonder",
                "partOfSpeech": "verb",
                "translation": "kelata"
            },
            {
                "word": "wise",
                "partOfSpeech": "verb",
                "translation": "viisastua"
            }
        ],
        "word_set104": [
            {
                "word": "woo",
                "partOfSpeech": "verb",
                "translation": "kosiskella"
            },
            {
                "word": "work/function",
                "partOfSpeech": "verb",
                "translation": "toimia"
            },
            {
                "word": "wound",
                "partOfSpeech": "verb",
                "translation": "haavoittaa"
            },
            {
                "word": "yell wildly happy",
                "partOfSpeech": "verb",
                "translation": "huudella"
            },
            {
                "word": "to yellow",
                "partOfSpeech": "verb",
                "translation": "kellastua"
            },
            {
                "word": "zone",
                "partOfSpeech": "verb",
                "translation": "kaavoittaa"
            }
        ],
        "word_set105": [],
        "word_set106": [],
        "word_set107": [],

    }
}