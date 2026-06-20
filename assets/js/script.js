// FreeAstroAPI
const apiKey = "0f326ce9d4db7137a94ee0c4b7b3712e726ea511772b09c6cb2becad9acf294a";

let signInput;
let searchBtn;
let horoscopeForm;
let horoscopeOutput;
let sunSignInput;
let dateOfHoroscope;
let overallScore;

function getDailyHoroscope(sunSign) {
    console.log(sunSign);
    const cleanedSign = sunSign.trim().toLowerCase();

    if (!cleanedSign) {
        sunSignInput.textContent = "";
        dateOfHoroscope.textContent = "";
        overallScore.textContent = "";
        return;
    }

    const today = new Date().toISOString().split("T")[0];
    const url = `https://api.freeastroapi.com/api/v2/horoscope/daily/sign?sign=${encodeURIComponent(cleanedSign)}&date=${today}&tz_str=Europe%2FLondon&locale=en`;

    sunSignInput.textContent = cleanedSign;
    dateOfHoroscope.textContent = "";
    overallScore.textContent = "Loading...";

    fetch(url, {
        method: "GET",
        headers: {
            "x-api-key": apiKey,
            "Content-Type": "application/json"
        }
    })
        .then((response) => response.json().then((responseJson) => ({ response, responseJson })))
        .then(({ response, responseJson }) => {
            const horoscopeData = responseJson?.data ?? responseJson;

            if (!response.ok) {
                const message = responseJson?.message || responseJson?.error?.message || "Could not fetch horoscope.";
                throw new Error(message);
            }

            if (!horoscopeData?.scores) {
                throw new Error("No horoscope data returned for that sign.");
            }

            console.log("Horoscope data:", horoscopeData);
            sunSignInput.textContent = horoscopeData.sign;
            dateOfHoroscope.textContent = horoscopeData.date;
            overallScore.textContent = horoscopeData.scores.overall;
        })
        .catch((error) => {
            console.error("API request failed:", error);
            sunSignInput.textContent = "";
            dateOfHoroscope.textContent = "";
            overallScore.textContent = `Error: ${error.message}`;
        })
}

function initializeApp() {
    signInput = document.getElementById("sign-input");
    searchBtn = document.getElementById("search-btn");
    horoscopeForm = document.getElementById("horoscope-form");
    horoscopeOutput = document.getElementById("horoscope-output");
    sunSignInput = document.getElementById("sun-sign");
    dateOfHoroscope = document.getElementById("date");
    overallScore = document.getElementById("overall-scores");

    if (!signInput || !searchBtn || !horoscopeForm || !horoscopeOutput || !sunSignInput || !dateOfHoroscope || !overallScore) {
        console.error("One or more required DOM elements were not found.");
        return;
    }

    horoscopeForm.addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("Horoscope form submitted");
        getDailyHoroscope(signInput.value);
        signInput.value = "";
    });
}

document.addEventListener("DOMContentLoaded", initializeApp);