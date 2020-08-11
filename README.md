# GuessingGameReact

This basic React application is a memory game for users. As users click through images that are constantly reshuffling, they must remember which pictures have not yet been selected to keep increasing their scores. React's DOM state-tracking allows for facile repeated rendering of the page without reloading the site each time.

## Contents

* [Installing](#installing)
* [Built With](#built-with)
* [Application Functionality](#application-functionality)
* [Deployed Application](https://gabesucich.github.io/GuessingGameReact/)
* [Developer Information](#gabriel-sucich)

## Installing

To access code for use or development, clone the Github repository onto your local machine using:

```
git clone https://github.com/GabeSucich/GuessingGameReact.git
```

To download the necessary dependencies, navigate into the cloned directory and enter the following in terminal:

```
npm install
```

To being running the react app on your local machine, navigate into the cloned repository and run:
```
npm start
``` 


## Built With

* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Materialize](https://materializecss.com/about.html)
* [React](https://www.npmjs.com/package/mysql)

## Application Functionality

Users are presented with an array of images from Spongebob (because who doesn't love Spongebob). Everytime an image is selected, all of the image cards are shuffled.

* When an image is selected that has not already been pressed, the user gains a point.
* If the user touches an image that has already been pressed, the user's score is reset to zero.
* If the user taps all twelve images without repeating, the field "resets", and the user can start again while still maintaining accrued points.

<img src="markdown/app.gif" width="65%">

#### See the [deployed link](https://gabesucich.github.io/GuessingGameReact/) here

### Gabriel Sucich

![Profile](markdown/profile.png)

- [Portfolio](https://gabesucich.github.io/UpdatedPortfolio/)
- [Github](https://github.com/GabeSucich)
- [LinkedIn](www.linkedin.com/in/gabriel-sucich-6a28a71a8)

See also the list of any other [contributors](https://github.com/GabeSucich/GuessingGameReact/contributors) who on this project.
