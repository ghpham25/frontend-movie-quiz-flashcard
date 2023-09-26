# Web Development Project 2 - *Name of App Here*

Submitted by: **Giang Pham**

This web app: **Flashcard: Guessing Ghibli movie from its quote**

Time spent: **6** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The title of the card set and some information about it, such as a short description and the total number of cards are displayed**
- [x] **A single card at a time is displayed, only showing one of the components of the information pair**
- [x] **A list of card pairs is created**
- [x] **Clicking on the card shows the corresponding component of the information pair**
- [x] **Clicking the next button displays a random new card**

The following **optional** features are implemented:

- [x] Cards contains images in addition to or in place of text
- [ ] Cards have different visual styles such as color based on their category
  - [ ] *visual style implemented*

The following **additional** features are implemented:

* [x] Added a hint functionality that shows a hint for each card

## Video Walkthrough

Here's a walkthrough of implemented required features:

![](https://github.com/ghpham25/web102-project2/blob/main/prj2.gif)

<!-- Replace this with whtever GIF tool you used! -->
GIF created with Kap
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

I had some challenges implementing the flipped state of the card. I initially put the state hook in the Flashcard component, however a problem with such implementation is that when I go to the next card and the previous card is in the "unflipped" state, the next card will also be in the "unflipped" state, showing the answer instead of the prompt of the next card. I eventually fixed this using the prop function and implementing the state toggling in the App.jsx file. 

## License

    Copyright [2023] [Giang Pham]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
