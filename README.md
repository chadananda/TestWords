# TestWords
Simple object containing arrays of the top 500 vocabulary words used in common tests such as SAT and TOEFL
 

### Install the interface module into your node project with:
``` 
npm install --save testwords
```

### Functionality
``` Javascript
var testwords = require('testwords'); 

testwords.toefl
// array of top 500 words used in TOEFL tests
testwords.sat
// array of top 500 words used in SAT tests
```
 
``` Javascript
var words = {
    sat: [
          'abate',
          'aberration',
          'abhor',
          'abhorrence',
...
    ],
    toefl: [
      'abandon',
      'abash',
      'abdicate',
      'abet',
...
    ]
};

module.exports.testwords = words;
```

 
### TODO

* Add SAT
* Identify and add other lists that might be useful