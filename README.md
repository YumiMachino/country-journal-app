# Country Journal App

![Logo](https://user-images.githubusercontent.com/69213242/139355372-bd97b05a-98cf-4200-b714-70003cc2f127.png)

## Overview

This is a web service for users who want to check all the countries in the globe and its information such as its country flag, common name, official name, lanuages, population etc... Additionally, for those who likes to go travelling, they can create journals per country, and they can be edited, or deleted later. they can see all the countries they have been to, and all the journals they wrote at a glance.

## Keyword

HTML, CSS, JavaScript, Webpack, Babel, [REST COUNTRIES API](https://restcountries.com), Web Storage API, Figma

## Screenshots

### Top page:

![top page](https://user-images.githubusercontent.com/69213242/139343482-7bbdde09-6738-48b9-8298-201388b8b8ba.png)

![country information modal](https://user-images.githubusercontent.com/69213242/139356598-c434fbcf-7980-47de-b9f1-a06baf4088cc.png)

![favorites](https://user-images.githubusercontent.com/69213242/139357116-dcf4d312-3fda-4455-a8da-b90ee1a86707.png)

### Journal page:

![journals](https://user-images.githubusercontent.com/69213242/139356877-a0cdf7ed-5c46-4dc6-9f34-197d4f8adce6.png)

![journal input](https://user-images.githubusercontent.com/69213242/139356639-8ea4ba32-7283-49fa-a8da-261d1fb1dfe4.png)

## Condition

localStorage is available in users' browser

## Development Points

### Color & font palette

Designing starts from sketching, wireframes and mockup.
I selected colors and fonts as well as created prototype before starting actual development.
![color and font](https://user-images.githubusercontent.com/69213242/139358155-eb0998d0-f066-4949-93f9-735296c2a8a2.png)

### Prototype

![protorype](https://user-images.githubusercontent.com/69213242/139358426-a5366908-b3f2-4d4c-9b12-203785ed4b5a.png)

## Development

By using webpack and babel, I was able to breakdown all the JavaScript files depends on its role. For example, 2 object classes are stored as Country.js and Journal.js in model folder. Also Store class and UI class are created separatly from main js files as they are responsible for handling data storage, and UI respectively.
