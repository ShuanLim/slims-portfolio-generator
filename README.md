# Slim's Portfolio Generator

## Table Of Contents

- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation Method](#installation-method)
- [Screenshot](#screenshot)
- [Link To Video Demonstration](#link-to-video-demonstration)
- [Contributions](#contributions)

## Description

A Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person.

## User Story

```
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Installation Method

Run through the following instructions prior to using the application:

- Please clone this repository or copy the code to your development environment.
- You must have Node.js, Inquirer, and Jest to run this app on your machine.

- From the root of the file, run commands:

```
npm i
```

Then

```
npm start
```

## Screenshot

<a href='<img width="1013" alt="profilegenerator" src="https://user-images.githubusercontent.com/79289373/180108680-acede838-b645-4b8b-a106-59a5780d245a.png">'></a>

## Link to video demonstration

<a href='https://drive.google.com/file/d/12BIPeAsWCQQseMKdHepzJs2UZfEWStEI/view'>Part 1</a>
<a href='https://drive.google.com/file/d/1VQ-ufemblhFDMJ492Ra138FryqqyMb_G/view'>Part 2</a>

## Contributions

<a href='https://github.com/ShuanLim'>Shuan Lim</a>

Contact me via <a href='mailto:shuanmlim@gmail.com'>email</a>
