# Give Me a Sign

## Description

Give Me a Sign is a beginner-friendly horoscope web app where users type a zodiac sign and instantly get a daily reading.

I originally planned to use a live API, but ran into CORS issues during development. To keep the project classroom-ready and easy to run, the horoscope data is stored locally in JavaScript.

### Motivation

The goal was to make something fun that also practices core front-end skills: forms, events, and DOM updates. Astrology gave the project personality, and the coding goals kept it practical.

### Problem It Solves

Instead of searching different sites for horoscope content, users can type a sign and get a clean, formatted daily summary in one place.

### What I Learned

- Structuring and querying nested JSON-style data
- Updating multiple UI fields dynamically from one user action
- Combining Bulma utility classes with custom CSS for a polished layout
- Building a project that is simple enough for beginners but still feels complete

## Table of Contents

- [Live Link](#live-link)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Credits](#credits)
- [License](#license)

## Live Link

[Open the deployed app](https://lexidevine.github.io/project_1/)

## Features

- Search by zodiac sign (case-insensitive, so "leo" and "Leo" both work)
- Friendly validation messages for blank or invalid sign entries
- Displays horoscope details including:
    - Sign and date
    - Theme and advice text
    - Overall, love, career, money, and health scores
    - Lucky color, number, and time window
- Responsive layout for desktop and mobile
- Styled with Bulma and custom gradients, cards, and animations

## Installation

No dependencies or build steps are required.

1. Clone or download this repository.
2. Open the project folder.
3. Open index.html in your browser.

## Usage

1. Enter a zodiac sign in the input field (example: Aries, Virgo, Pisces).
2. Click Get Horoscope.
3. Read the generated daily horoscope details in the output panel.

If nothing shows up, check your spelling and try one of the supported signs below.

### Supported Signs

Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, Pisces.

## Project Structure

- index.html: app layout and form/output markup
- assets/css/bulma.min.css: Bulma framework styles
- assets/css/style.css: custom theme, layout tweaks, and responsive styling
- assets/images/Give Me a Sign.png: screenshot/image asset used in the project
- assets/js/script.js: horoscope data store and app logic

## Credits

- [Bulma](https://bulma.io/) for the CSS framework
- Horoscope dataset labeled in source comments as local classroom snapshot from FreeAstroAPI

## License

MIT License

Copyright (c) 2026 Lexi Devine

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---