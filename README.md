# TestWords
Simple object of the top 500+ vocabulary words used in SAT and TOEFL
 

### Install the interface module into your node project with:
``` 
npm install --save testwords
```

### Functionality
``` Javascript
// ES2015
var testwords = new require('testwords'); 

// or ES6
import Testwords from 'testwords'
var testwords = new Testwords()


// Return an object (fast associative array) of words 
testwords.sat // returns object of top words used in SAT tests
testwords.toefl // returns object of top words used in TOEFL tests
testwords.allwords // returns object of all words without duplication

// Return array list of words
testwords.satWordsList() // returns array of top words used in SAT tests
testwords.toeflWordsList() // returns array of top words used in TOEFL tests
testwords.allWordsList() // returns array of all words without duplication

// Check an individual word is in TOEFL or SAT. Not case sensitive.
// For more accuracy, normalize your word first with an NLP tool
//   such as "compromise" (https://www.npmjs.com/package/compromise)
testwords.isSAT('vindication') // true
testwords.isTOEFL('vindication') // false
testwords.isTestword('vindication') // true

```
  
  