<h1 align="center">TherapyTime - React Native + Expo</h1> <br>
<p align="center">
  <img alt="TherapyTime" title="anna esteve therapy time react native" src="https://firebasestorage.googleapis.com/v0/b/lemoninfilm.appspot.com/o/01_login.png?alt=media&token=b980b991-288a-42ea-bc90-28cd84377d2a" width="600">
</p>

<div align="center">
  <img src="https://www.svgrepo.com/show/327388/logo-react.svg" width="60" height="60">
  <img src="https://www.svgrepo.com/show/353722/expo.svg" width="60" height="60">
  <img src="https://www.svgrepo.com/show/374146/typescript-official.svg" width="60" height="60">
  <img src="https://www.svgrepo.com/show/452093/redux.svg" width="60" height="60">
</div>
<p align="center"> Built with React Native, Expo, Typescript, Redux and more.</p>

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Built with](#built-with)
- [Getting started](#getting-started)
- [Future improvements](#future-improvements)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<a name="introduction"></a>

## 📋 Introduction

This project is an app for displaying therapists and make appointments to their agenda based on day and time. It is required the creation of an account for storing the users own appointments, as well as some personal information, like location, profile picture, etc

**Design**

<p>Original design: <a href="https://www.figma.com/design/192gQDmDun6PH6Ohd2gtC7/Doctor-Appointment-App-UI-Kit-(Community)?m=auto&t=7qU5uV0Eya7hDVVJ-6" /></p>

<p align="center">
  <img src = "https://firebasestorage.googleapis.com/v0/b/lemoninfilm.appspot.com/o/01_login.png?alt=media&token=b980b991-288a-42ea-bc90-28cd84377d2a" width=700>
  <img src = "https://firebasestorage.googleapis.com/v0/b/lemoninfilm.appspot.com/o/02_location.png?alt=media&token=52f66c89-b27e-468b-a022-1696655adfa1" width=700>
  <img src = "https://firebasestorage.googleapis.com/v0/b/lemoninfilm.appspot.com/o/04_booking.png?alt=media&token=874fa6ba-bf8b-4361-b51c-3bd4a475a514" width=700>
  <img src = "https://firebasestorage.googleapis.com/v0/b/lemoninfilm.appspot.com/o/04_booking.png?alt=media&token=874fa6ba-bf8b-4361-b51c-3bd4a475a514" width=700>
  <img src = "https://firebasestorage.googleapis.com/v0/b/lemoninfilm.appspot.com/o/05_list.png?alt=media&token=2aa8d41e-a410-4d1c-959b-8cd4db300b84" width=700>
  <img src = "https://firebasestorage.googleapis.com/v0/b/lemoninfilm.appspot.com/o/06_profile.png?alt=media&token=edb7bd2e-55c1-470b-8548-170e05323b66" width=700>
</p>

<a name="features"></a>

## 💡 Features

This project has some interesting features that I want to highlight:

#### Firebase services

- All the info related to the users is stored and taken from the self-created Firestore Realtime Database.
- Firebase Authentication is the chosen provider to store and manage the user login and sign-up.

### Navigation

- In order to create a smooth navigation through the different screens, I choose the React Navigation library.
- This way, you can appreciate the tabs navigator (which is also the main navigator) and some stack navigators along the app flows.

### Redux

- Redux is used to store the data in the app
- As I worked with an external database, the use of RTKQuery was mandatory to fetch the information.

<a name="built-with"></a>

## 🛠️ Built with

List of technologies used to develop this app:

- <a href="https://react.dev/">React Js</a>
- <a href="https://expo.dev/">Expo</a>
- <a href="https://www.typescriptlang.org/">Typescript</a>
- <a href="https://redux.js.org/">Redux</a>
- <a href="https://styled-components.com/">Styled Components</a>
- <a href="https://reactnavigation.org//">React Navigation</a>
- <a href="https://www.npmjs.com/package/react-native-notifier/v/1.7.0">React Native Notifier</a>
- <a href="https://github.com/wix/react-native-calendars">React Native Calendars</a>
- <a href="https://www.npmjs.com/package/react-native-popup-menu">React Native Popup Menu</a>

<a name="getting-started"></a>

## 🔨 Getting started

- Fork the repo
- Clone the repo: `git clone https://github.com/annalemonbcn/therapy-time`
- Navigate into the project files
- Open with VSC
- Install dependencies: `npm i`
- Run the app: `npm start`
- Choose your device: press `i` for iOS, press `a` for android
- Enjoy :)

<a name="final-conclusions"></a>

## 🙏🏻 Future improvements

What's coming next?

- Better error handling
- Live map with user pin and nearest therapists pins
- Implement testing

Enjoy :)
