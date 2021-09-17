# Markari

Wrap searched words in a string with `<mark>` tags. Ideal for highlighting the queried word in search results

### Install

`yarn add markari`

##### Usage

```javascript
import { markWords } from 'markari'

const original = 'And if the day would only come, then you might just appear, even though you\'d soon be gone';

/**
 * Replaces all instances in sentence. 
 */
const result = markWords('you', original);
console.log(result)
// And if the day would only come, then <mark>you</mark> might just appear, even though <mark>you</mark>\'d soon be gone

/**
 * Can wrap whole sentences.
 */
const result2 = markWords('And if the day would only come', original);
console.log(result2)
// <mark>And if the day would only come</mark>, then you might just appear, even though you\'d soon be gone

/**
 * Does not edit original string, if no search words are found 
 */
const result3 = markWords('not found in sentence', original);
console.log(result3)
// Original sentence is the same, no extra markup
```

#### What's in the name?

Markari comes from Old Norse verb "marka" (to mark, to draw outline, to sketch). It means the person doing the verb, someone who "marks".
