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
 - Add centarlize server communication(Network Service).
 - Common error page HOC.

License
----
**MIT License**

Copyright (c) 2018 Bhagwat Karankar

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
