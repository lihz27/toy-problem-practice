/*
 6 diff test cases (different rule sets to help identify composition of name, first middle last, sets of known aliases, see if aliases matches name; given John Adam Smith -> match John A. Smith; given John Adam Smith -> match John Smith)

 Questions:
 - Will there always be a full first name?
 - What is the max number of name parts a person can have? (Multi-word name like Mary Jane P. Smith where Mary Jane is the first name)
 - What are the minimum name parts a person can have? (First and last? First initial, last name? First name, last initial?)
*/

const aliases = ['John A. Smith', 'John Smith', 'John Adam Smith', 'Robert Adam Jones', 'Robert Jones'];

const matchAlias = (name) => {
  const aliasStore = [];
  const nameSplit = name.split(' ');
  const first = nameSplit[0];
  let middle = null;
  let last = null;
  if (nameSplit.length === 2) {
    last = nameSplit[1];
  } else if (nameSplit.length === 3) {
    middle = nameSplit[1];
    last = nameSplit[2];
  }
  for (let i = 0; i < aliases.length; i++) {
    const aliasSplit = aliases[i].split(' ');
    const aFirst = aliasSplit[0];
    let aMiddle = null;
    let aLast = null;
    if (aliasSplit.length === 2) {
      aLast = aliasSplit[1];
    } else if (aliasSplit.length === 3) {
      aMiddle = aliasSplit[1];
      aLast = aliasSplit[2];
    }
    if (aFirst !== first) {
      break;
    } else if (last === aLast || last[0] === aLast[0]) {
      if (aMiddle === null || middle === null || middle === aMiddle || middle[0] === aMiddle[0]) {
        aliasStore.push(aliases[i])
      }
    }
  }
  return aliasStore;
}

console.log(matchAlias('John Adam Smith'));