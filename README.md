# TestWords
Simple object containing arrays of the top 500 vocabulary words used in common tests such as SAT and TOEFL
 

### Install the interface module into your node project with:
``` 
npm install --save testwords
```

### Functionality
``` Javascript
var testwords = require('testwords'); 
// or ES6
import Testwords from 'testwords'



var testwords = new Testwords()

// returns array of top words used in SAT tests
testwords.satWordsList() 

// returns array of top words used in TOEFL tests
testwords.toeflWordsList() 

// returns array of all words without duplication
testwords.allWordsList() 

// Check an individual word is in TOEFL or SAT. Not case sensitive.
// For more accuracy, normalize your word first with an NLP tool
//   such as "compromise" (https://www.npmjs.com/package/compromise)
testwords.isSAT('convivial')
  // true
testwords.isTOEFL('convivial')
  // false
testwords.isTestword('convivial')
  // true

```
  
 

 
### TODO
 
* Identify and add other lists that might be useful