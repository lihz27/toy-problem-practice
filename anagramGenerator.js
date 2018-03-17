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
    const remainingChars = word.slice(0, i) + word.slice(i + 1);
    anagramServer(remainingChars, anagram + word[i], anagrams);
  }

  return anagrams;
};
