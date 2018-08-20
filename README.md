## Registration process with GDPR consents.

 This is the React-native mobile project to register user using mobile application on firebase database by taking an acknowlwdment from the user for different GDPR consents.
 
**Please refer [wiki](https://github.com/dev-pacific22/registration-with-GDPR-consent/wiki/Jira-Task-List) docs for Sprint plan of the project.**

### Setup
To set-up the project: 
```sh
$ git clone git@github.com:dev-pacific22/registration-with-GDPR-consent.git
$ cd registration-with-GDPR-consent
$ npm install 
$ react-native run-android
```
Visit  [firbase console](https://console.firebase.google.com) create your own project and add javascript object to App.js file.
```sh
const firbaseConfig = {}; // this should be your config object.
firebase.initializeApp(firebaseConfig);
```
Also, enable signin method with email/password from [here](https://console.firebase.google.com/u/0/project/avegenassignment/authentication/providers)

#### Third party libraries used: 

* [redux](https://redux.js.org/) - Used for the state management
* [react-navigation](https://reactnavigation.org/) - Navigation library.
* [native-base](http://nativebase.io) - UI component library
* [firebase](https://console.firebase.google.com) - Used for backend authentication and backend database storage.
* [validator](https://validatejs.org/) - Used for client side validation.

### Todos
 - Add i18n feature. 
 - Add Unit testing.

License
----

**MIT**
