/*
Given a list of valid English words, build an anagram generator that can spit out all the anagrams of a word.

(anagram = permutation that is also valid word)
rates = aster, stare, tears, tares, taser
dgo = dog, god
aeelps = please, elapse, asleep
*/

const anagramGenerator = (word, anagram = '', anagrams = []) => {
  if (!word) {
    anagrams.push(anagram);
    return;
  }

  for (let i = 0; i < word.length; i++) {
    const firstLetter = word[i];
    const remainingChars = word.slice(0, i) + word.slice(i + 1);
    anagramGenerator(remainingChars, anagram + firstLetter, anagrams);
  }

  return anagrams;
};

/*
// Heap's Algorithm method
const swap = (letters, i, j) => {
  const temp = letters[i];
  letters[i] = letters[j];
  letters[j] = temp;
};

const anagramGenerator = (word) => {
  const letters = word.split(''),
        length = word.length,
        anagrams = [],
        tracking = {};

  for (let i = 0; i < length; i++) {
    tracking[i] = 0;
  }

  anagrams.push(word);
  let j = 0;
  while (j < length) {
    if (tracking[j] < j) {
      let swapNum = j % 2 === 1 ? tracking[j] : 0;
      swap(letters, swapNum, j);
      tracking[j]++;
      j = 0;
      anagrams.push(letters.join(''));
    } else {
      tracking[j] = 0;
      j++
    }
  }

  return anagrams;
}
*/
