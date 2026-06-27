// Daily (Sign) Horoscope API Data from FreeAstroAPI
const HOROSCOPE_STORE = {
  "project": "Give Me a Sign",
  "version": 1,
  "source": "Local snapshot for classroom use",
  "defaultSign": "",
  "ui": {
    "emptyInputText": "Please enter a sun sign (e.g. Aries)."
  },
  "horoscopes": {
    "aries": {
      "sign": "aries",
      "date": "2026-06-27",
      "scores": {
        "overall": 83,
        "love": 89,
        "career": 84,
        "money": 83,
        "health": 75
      },
      "lucky": {
        "color": "White",
        "number": 38,
        "timeWindow": "11am - 2pm"
      },
      "content": {
        "theme": "Initiative",
        "text": "With the Moon in Sagittarius (Waxing Gibbous), Aries picks up the day's sky through a fire lens. Your ruler Mars is in a supportive condition from the 2nd house, shaping today's love direction. For Aries, this works best through clear directness. Center your decisions on love and use clear directness to convert momentum into concrete results.",
        "keywords": [
          "Initiative",
          "Boldness",
          "Energy",
          "Balance",
          "Realignment"
        ]
      },
      "astro": {
        "moonSign": "Cancer",
        "moonPhase": "New Moon"
      }
    },
    "taurus": {
      "sign": "taurus",
      "date": "2026-06-27",
      "scores": {
        "overall": 80,
        "love": 76,
        "career": 87,
        "money": 87,
        "health": 72
      },
      "lucky": {
        "color": "Gold",
        "number": 70,
        "timeWindow": "9am - 2pm"
      },
      "content": {
        "theme": "Practicality",
        "text": "With the Moon in Scorpio (First Quarter), Taurus picks up the day's sky through a earth lens. Your ruler Venus is in a supportive condition from the 4th house, shaping today's career direction. For Taurus, this works best through structure and execution. Center your decisions on career and use structure and execution to convert momentum into concrete results.",
        "keywords": [
          "Sensuality",
          "Practicality",
          "Stability",
          "Balance",
          "Focus"
        ]
      },
      "astro": {
        "moonSign": "Scorpio",
        "moonPhase": "First Quarter"
      }
    },
    "gemini": {
      "sign": "gemini",
      "date": "2026-06-27",
      "scores": {
        "overall": 85,
        "love": 89,
        "career": 92,
        "money": 82,
        "health": 76
      },
      "lucky": {
        "color": "Silver",
        "number": 88,
        "timeWindow": "9am - 2pm"
      },
      "content": {
        "theme": "Curiosity",
        "text": "With the Moon in Scorpio (First Quarter), Gemini picks up the day's sky through a air lens. Your ruler Mercury is in a supportive condition from the 2nd house, shaping today's career direction. For Gemini, this works best through coordination and strategy. Center your decisions on career and use coordination and strategy to convert momentum into concrete results.",
        "keywords": [
          "Communication",
          "Curiosity",
          "Adaptability",
          "Momentum",
          "Clarity",
          "Growth"
        ]
      },
      "astro": {
        "moonSign": "Scorpio",
        "moonPhase": "First Quarter"
      }
    },
    "cancer": {
      "sign": "cancer",
      "date": "2026-06-27",
      "scores": {
        "overall": 86,
        "love": 92,
        "career": 87,
        "money": 82,
        "health": 82
      },
      "lucky": {
        "color": "Blue",
        "number": 55,
        "timeWindow": "7am - 1pm"
      },
      "content": {
        "theme": "Emotion",
        "text": "With the Moon in Scorpio (First Quarter), Cancer picks up the day's sky through a water lens. Your ruler Moon is in a supportive condition from the 5th house, shaping today's love direction. For Cancer, this works best through emotional clarity and care. Center your decisions on love and use emotional clarity and care to convert momentum into concrete results.",
        "keywords": [
          "Nurturing",
          "Emotion",
          "Intuition",
          "Balance"
        ]
      },
      "astro": {
        "moonSign": "Scorpio",
        "moonPhase": "First Quarter"
      }
    },
    "leo": {
      "sign": "leo",
      "date": "2026-06-27",
      "scores": {
        "overall": 59,
        "love": 55,
        "career": 74,
        "money": 41,
        "health": 67
      },
      "lucky": {
        "color": "Yellow",
        "number": 10,
        "timeWindow": "10am - 2pm"
      },
      "content": {
        "theme": "Confidence",
        "text": "With the Moon in Scorpio (First Quarter), Leo picks up the day's sky through a fire lens. Mars activating your 10th house prioritizes professional direction and practical output. For Leo, this works best through initiative and visible action. Center your decisions on career and use initiative and visible action to convert momentum into concrete results.",
        "keywords": [
          "Creativity",
          "Leadership",
          "Confidence"
        ]
      },
      "astro": {
        "moonSign": "Scorpio",
        "moonPhase": "First Quarter"
      }
    },
    "virgo": {
      "sign": "virgo",
      "date": "2026-06-27",
      "scores": {
        "overall": 84,
        "love": 82,
        "career": 92,
        "money": 82,
        "health": 79
      },
      "lucky": {
        "color": "Gold",
        "number": 61,
        "timeWindow": "9am - 1pm"
      },
      "content": {
        "theme": "Analysis",
        "text": "With the Moon in Sagittarius (Waxing Gibbous), Virgo picks up the day's sky through a earth lens. Your ruler Mercury is in a supportive condition from the 11th house, shaping today's career direction. For Virgo, this works best through structure and execution. Center your decisions on career and use structure and execution to convert momentum into concrete results.",
        "keywords": [
          "Detail",
          "Analysis",
          "Service"
        ]
      },
      "astro": {
        "moonSign": "Scorpio",
        "moonPhase": "First Quarter"
      }
    },
    "libra": {
      "sign": "libra",
      "date": "2026-06-27",
      "scores": {
        "overall": 84,
        "love": 92,
        "career": 87,
        "money": 88,
        "health": 67
      },
      "lucky": {
        "color": "White",
        "number": 7,
        "timeWindow": "11am - 3pm"
      },
      "content": {
        "theme": "Relationship",
        "text": "With the Moon in Scorpio (First Quarter), Libra picks up the day's sky through a air lens. Your ruler Venus is in a supportive condition from the 11th house, shaping today's love direction. For Libra, this works best through dialogue and perspective. Center your decisions on love and use dialogue and perspective to convert momentum into concrete results.",
        "keywords": [
          "Harmony",
          "Balance",
          "Relationship",
          "Perspective"
        ]
      },
      "astro": {
        "moonSign": "Scorpio",
        "moonPhase": "First Quarter"
      }
    },
    "scorpio": {
      "sign": "scorpio",
      "date": "2026-06-27",
      "scores": {
        "overall": 86,
        "love": 92,
        "career": 85,
        "money": 82,
        "health": 83
      },
      "lucky": {
        "color": "White",
        "number": 61,
        "timeWindow": "11am - 1pm"
      },
      "content": {
        "theme": "Mystery",
        "text": "With the Moon in Sagittarius (Waxing Gibbous), Scorpio picks up the day's sky through a water lens. Your ruler Mars is in a supportive condition from the 7th house, shaping today's love direction. For Scorpio, this works best through emotional clarity and care. Center your decisions on love and use emotional clarity and care to convert momentum into concrete results.",
        "keywords": [
          "Intensity",
          "Mystery",
          "Transformation",
          "Growth",
          "Focus"
        ]
      },
      "astro": {
        "moonSign": "Scorpio",
        "moonPhase": "First Quarter"
      }
    },
    "sagittarius": {
      "sign": "sagittarius",
      "date": "2026-06-27",
      "scores": {
        "overall": 72,
        "love": 69,
        "career": 78,
        "money": 64,
        "health": 76
      },
      "lucky": {
        "color": "Gold",
        "number": 20,
        "timeWindow": "7am - 5pm"
      },
      "content": {
        "theme": "Optimism",
        "text": "With the Moon in Scorpio (First Quarter), Sagittarius picks up the day's sky through a fire lens. Your ruler Jupiter is in a supportive condition from the 8th house, shaping today's career direction. For Sagittarius, this works best through initiative and visible action. Center your decisions on career and use initiative and visible action to convert momentum into concrete results.",
        "keywords": [
          "Adventure",
          "Optimism",
          "Philosophy",
          "Perspective",
          "Realignment",
          "Growth"
        ]
      },
      "astro": {
        "moonSign": "Scorpio",
        "moonPhase": "First Quarter"
      }
    },
    "capricorn": {
      "sign": "capricorn",
      "date": "2026-06-27",
      "scores": {
        "overall": 78,
        "love": 80,
        "career": 82,
        "money": 79,
        "health": 72
      },
      "lucky": {
        "color": "Green",
        "number": 49,
        "timeWindow": "8am - 2pm"
      },
      "content": {
        "theme": "Responsibility",
        "text": "With the Moon in Scorpio (First Quarter), Capricorn picks up the day's sky through a earth lens. Your ruler Saturn is in a supportive condition from the 4th house, shaping today's career direction. For Capricorn, this works best through structure and execution. Center your decisions on career and use structure and execution to convert momentum into concrete results.",
        "keywords": [
          "Ambition",
          "Responsibility",
          "Discipline",
          "Balance",
          "Perspective",
          "Clarity"
        ]
      },
      "astro": {
        "moonSign": "Scorpio",
        "moonPhase": "First Quarter"
      }
    },
    "aquarius": {
      "sign": "aquarius",
      "date": "2026-06-27",
      "scores": {
        "overall": 77,
        "love": 82,
        "career": 81,
        "money": 71,
        "health": 74
      },
      "lucky": {
        "color": "Orange",
        "number": 88,
        "timeWindow": "6am - 2pm"
      },
      "content": {
        "theme": "Humanity",
        "text": "With the Moon in Scorpio (First Quarter), Aquarius picks up the day's sky through a air lens. Venus activating your 7th house prioritizes relational openness and emotional timing. For Aquarius, this works best through dialogue and perspective. Center your decisions on love and use dialogue and perspective to convert momentum into concrete results.",
        "keywords": [
          "Freedom",
          "Innovation",
          "Humanity",
          "Balance",
          "Clarity",
          "Focus",
          "Momentum"
        ]
      },
      "astro": {
        "moonSign": "Scorpio",
        "moonPhase": "First Quarter"
      }
    },
    "pisces": {
      "sign": "pisces",
      "date": "2026-06-27",
      "scores": {
        "overall": 86,
        "love": 92,
        "career": 85,
        "money": 81,
        "health": 87
      },
      "lucky": {
        "color": "Silver",
        "number": 14,
        "timeWindow": "6am - 4pm"
      },
      "content": {
        "theme": "Compassion",
        "text": "With the Moon in Scorpio (First Quarter), Pisces picks up the day's sky through a water lens. Your ruler Jupiter is in a supportive condition from the 5th house, shaping today's love direction. For Pisces, this works best through emotional clarity and care. Center your decisions on love and use emotional clarity and care to convert momentum into concrete results.",
        "keywords": [
          "Compassion",
          "Spirituality",
          "Imagination",
          "Realignment"
        ]
      },
      "astro": {
        "moonSign": "Scorpio",
        "moonPhase": "First Quarter"
      }
    }
  }
}
;

let signInput;
let horoscopeForm;
let sunSignInput;
let dateOfHoroscope;
let themeOfHoroscope;
let textAdvice;
let overallScore;
let loveScore;
let careerScore;
let moneyScore;
let healthScore;
let luckyColor;
let luckyNumber;
let luckyTime;
let horoscopeStore;

// Resets all of the outputs
function clearHoroscopeFields() {
    sunSignInput.textContent = "";
    dateOfHoroscope.textContent = "";
    themeOfHoroscope.textContent = "";
    textAdvice.textContent = "";
    overallScore.textContent = "";
    loveScore.textContent = "";
    careerScore.textContent = "";
    moneyScore.textContent = "";
    healthScore.textContent = "";
    luckyColor.textContent = "";
    luckyNumber.textContent = "";
    luckyTime.textContent = "";
}

// Takes the sign the user typed in, "cleans" it up (trim + lowercase),
// finds that sign's data in HOROSCOPE_STORE, and displays the results in the UI.
// Shows an alert if input is blank or if the sign doesn't exist in the data.
function getDailyHoroscope(sunSign) {
    const cleanedSign = sunSign.trim().toLowerCase();
    const emptyInputText = horoscopeStore?.ui?.emptyInputText || "Please enter a sign (e.g. Aries).";

    if (!cleanedSign) {
        alert(emptyInputText);
        return;
    }

    if (!horoscopeStore?.horoscopes) {
        alert("Horoscope data is not loaded yet.");
        return;
    }

    const horoscopeData = horoscopeStore.horoscopes[cleanedSign];

    if (!horoscopeData?.scores?.overall) {
        alert(`No horoscope data found for "${cleanedSign}". Try a valid sign like Aries or Virgo.`);
        return;
    }

    sunSignInput.textContent = horoscopeData.sign || cleanedSign;
    dateOfHoroscope.textContent = new Date().toLocaleDateString();
    themeOfHoroscope.textContent = horoscopeData.content?.theme || "N/A";
    textAdvice.textContent = horoscopeData.content.text || "N/A";
    overallScore.textContent = horoscopeData.scores.overall;
    loveScore.textContent = horoscopeData.scores.love ?? "N/A";
    careerScore.textContent = horoscopeData.scores.career ?? "N/A";
    moneyScore.textContent = horoscopeData.scores.money ?? "N/A";
    healthScore.textContent = horoscopeData.scores.health ?? "N/A";
    luckyColor.textContent = horoscopeData.lucky?.color || "N/A";
    luckyNumber.textContent = horoscopeData.lucky?.number ?? "N/A";
    luckyTime.textContent = horoscopeData.lucky?.timeWindow || "N/A";
}

// Function that's called when the Get Horoscope button is clicked on
function initializeApp() {
    signInput = document.getElementById("sign-input");
    horoscopeForm = document.getElementById("horoscope-form");
    sunSignInput = document.getElementById("sun-sign");
    dateOfHoroscope = document.getElementById("date");
    themeOfHoroscope = document.getElementById("theme");
    textAdvice = document.getElementById("advice");
    overallScore = document.getElementById("overall-scores");
    loveScore = document.getElementById("love-score");
    careerScore = document.getElementById("career-score");
    moneyScore = document.getElementById("money-score");
    healthScore = document.getElementById("health-score");
    luckyColor = document.getElementById("lucky-color");
    luckyNumber = document.getElementById("lucky-number");
    luckyTime = document.getElementById("lucky-time");

    // Checks that HTML elements in JS actually exists on page before trying to use it
    if (!signInput || !horoscopeForm || !sunSignInput || !dateOfHoroscope || !themeOfHoroscope || !overallScore || !loveScore || !careerScore || !moneyScore || !healthScore || !luckyColor || !luckyNumber || !luckyTime) {
        console.error("One or more required DOM elements were not found.");
        return;
    }

    clearHoroscopeFields();

    horoscopeStore = HOROSCOPE_STORE;

    if (horoscopeStore.defaultSign) {
        signInput.value = horoscopeStore.defaultSign;
    }

    horoscopeForm.addEventListener("submit", function (event) {
        event.preventDefault();
        getDailyHoroscope(signInput.value);
        signInput.value = "";
    });
}

document.addEventListener("DOMContentLoaded", initializeApp);
