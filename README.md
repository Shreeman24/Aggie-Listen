# Pre-work - *Aggie Listen*

**Aggie Listen**, is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **SHREEMAN KUPPA JAYARAM**

Time spent: **4.5** hours spent in total

Link to project: https://glitch.com/edit/#!/wild-saber-color

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
* https://giphy.com/gifs/jWLMq3BPs8oN7CWpz0
* https://giphy.com/gifs/jWLMq3BPs8oN7CWpz0 for Start and Stop
* https://giphy.com/gifs/3bqxH9KUho6kkHyBSi for Different pattern each time
* https://giphy.com/gifs/NooKefFadeeONWlcVd for Winning
* https://giphy.com/gifs/8ekAtRspgqbAY9OopZ for Losing
* https://giphy.com/gifs/8ekAtRspgqbAY9OopZ for each game button lighting up
* https://giphy.com/gifs/2Ignd1eexxpJslEmQQ for computer playback each sound

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
[https://www.w3schools.com/cssref/css_colors.asp, https://www.w3schools.com/html/html_comments.asp , https://www.w3schools.com/jsref/jsref_length_array.asp, https://www.w3schools.com/js/js_events.asp, https://www.w3schools.com/cssref/pr_font_font-style.asp, https://www.dummies.com/article/technology/programming-web-design/javascript/how-to-change-array-element-values-in-javascript-140927/, https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/math/random, https://pages.mtu.edu/~suits/notefreqs.html, https://sebhastian.com/display-javascript-variable-html/]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
[One significant challenge I encountered was with the optional task of ‘Players losing after 3 mistakes’. The Prework described setting a global variable ‘numMistake’ to track the number of mistakes and adding functionality to update the mistake counter when the user presses the wrong button. While that was straightforward, I decided to push myself and conceptualize how I can display the number of remaining tries on the webpage, which would make the app transparent about how close the user is to lose the game.
The challenge was that ‘numMistake’ was a Javascript variable in script.js which needed to be displayed dynamically in index.html. While this process is more intuitive with the React framework, embedding Javascript elements within the HTML was a new concept to me. 
I looked online for resources and came across an article suggesting the user of ‘innerHTML’ property. Just like how we removed or added the ‘hidden’ rule in CSS from the classList of the DOM object specified by a particular ID in the stopGame() function, I adapted it by creating a function called displayStrikes() in script.js. I created a button in index.html with the onclick event handler that calls displayStrikes(), and between the opening and closing tag, I learnt to use a span tag specified by the ID ‘strike’. displayStrikes() calls the by calculating the number of tries left (specified by count variable) before ‘document.getElementById("strike").innerHTML = count’. This edits the inner HTML in the button tag specified by the ID ‘strike’ in the DOM object.
The running app will display the number 3 in the button when clicked and reduces it to 0 when the user loses. This gives the user the choice to check their closeness to losing or playing the game by trusting their gut. While this functionality could have been achieved using a script tag in index.html, leaving variable declarations and logic to Javascript and creating cross-functionality between HTML and Javascript was an interesting learning option.
]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[Can we build more dynamic web pages that create a more professional version of the application? While I am familiar with React, I can speak from my project experience that deploying dynamic web pages is challenging.
If there was a possibility to develop a progress tracker, how can I apply Machine Learning to expand on the app? What are some supervised learning models I can use and what data can I collect from users? To my knowledge, I can collect metrics on the length of time a user takes between selecting buttons to determine their efficiency. 
What are some interesting ethical issues that may arise from this app and how can they be addressed? One issue that comes to mind is the effect of colour blindness that gives leverage to a person with normal vision. That may be addressed by conducting research with colour-blind users before the app goes to production, or by looking up peer-reviewed online articles.
How can I make this app scalable in the market? While I have wild ideas on how I could integrate this app into music production, I need clarification on what business and technological frameworks are relevant for this process to happen.
]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[I would expand this project into a music app for any musician to practice learning scales and identifying notes by hearing. Users are given 7 major scales to choose from (C, D, E, F, G, A, B, C). Each major scale will lead to the current app with 8 buttons in total, each representing a note in the scale. For example, if a user picks E major scale, the 8 buttons will be programmed with frequencies corresponding to [low E, F#, G#, A, B, C#, D#, high E]. Each button will be labeled with an image representing the letter of the note. When the user clicks the start button, the notes of the scale are played and the user has to repeat the sequence. Hence, users can more readily identify a scale of a song they hear on radio or television.
For piano players, I can create a simple piano interface with 8 buttons represented as piano keys. Therefore, players, especially beginners, can visualize the different notes being played and replicate them on a piano more efficiently. For more auditory learners, users can be allowed to synchronize the keyboard keys (ASDFGHJK) to the 8 buttons so they can playback the sounds without sight.

<p align="left">
  <img src="https://musiciselementary.com/wp-content/uploads/2016/01/small.jpg" width="350" title="hover text">
</p>
 
To store images and sounds efficiently and securely, I will integrate Google Firebase Database and Storage from which the script.js will pull data. To make this app more accessible, I plan to deploy this HTML website using Github hosting since it is a static website.
]



## Interview Recording URL Link

[https://www.loom.com/share/63050be4b0504425984643dac296713e]


## License

    Copyright [YOUR NAME]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
