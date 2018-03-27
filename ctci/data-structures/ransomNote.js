/*
A kidnapper wrote a ransom note but is worried it will be traced back to him. He found a magazine and wants to know if he can cut out whole words from it and use them to create an untraceable replica of his ransom note. The words in his note are case-sensitive and he must use whole words available in the magazine, meaning he cannot use substrings or concatenation to create the words he needs.

Given the words in the magazine and the words in the ransom note, print Yes if he can replicate his ransom note exactly using whole words from the magazine; otherwise, print No.

NOTES:
- Each word consists of English alphabetic letters (i.e., a to z and A to Z).
- The words in the note and magazine are case-sensitive.

ransomNote('give me one grand today night', 'give one grand today');  // yes
ransomNote('two times three is not four', 'Two times is four');   // no
*/

const ransomNote = (mag, note) => {
  const magHash = {}, noteHash = {};
  const magArray = mag.split(' ');
  const noteArray = note.split(' ');
  for (let i = 0; i < magArray.length; i++) {
    if (magHash[magArray[i]]) {
      magHash[magArray[i]] += 1;
    } else {
      magHash[magArray[i]] = 1;
    }
  }
  for (let i = 0; i < noteArray.length; i++) {
    if (noteHash[noteArray[i]]) {
      noteHash[noteArray[i]] += 1;
    } else {
      noteHash[noteArray[i]] = 1;
    }
  }
  let counter = 0;
  for (let key in noteHash) {
    counter++;
    if ((typeof magHash[key] !== 'undefined') || (magHash[key] < noteHash[key])) {
      return 'No';
    }
  }
  return 'Yes';
};

console.log(ransomNote('two times three is not four', 'Two times is four'));
