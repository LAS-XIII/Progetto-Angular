# NTTData

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.
The link for the website is: https://progetto-angular-ca951.web.app

## How to install the project

1. Copy the repository on your machine, open your terminal in the desired directory and send the command:
   > git clone -b master https://github.com/LAS-XIII/Progetto-Angular.git
2. After that position your terminal in the project directory:
   > cd ./Progetto-Angular
3. Install the dependencies:
   > npm i angular'

## How the site work

The website was designed to allow users to exploit the database made available by the https://gorest.co.in/.
This Application has been divided into 3 main parts:

- the landing part: with the welcome page and the login page;
- the user part: where you have the view of the database users, with the ability to see the details of the users (including their posts), add users and delete them.
- the post part: where you can see all the posts in the database, with the possibility to search for them, to add new ones, to display the comments for each and to add them.

To log in, you must access the https://gorest.co.in/
You have to login to the site and go to the personal profile, where you can copy a token to be inserted in the login page input.
Once you have entered the token in the login just click the button to access the protected part.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
