/*
 6 diff test cases (different rule sets to help identify composition of name, first middle last, sets of known aliases, see if aliases matches name; given John Adam Smith -> match John A. Smith; given John Adam Smith -> match John Smith)

 Questions:
 - Will there always be a full first name?
 - What is the max number of name parts a person can have? (Multi-word name like Mary Jane P. Smith where Mary Jane is the first name)
 - What are the minimum name parts a person can have? (First and last? First initial, last name? First name, last initial?)
*/

const aliases = ['John A. Smith', 'John Smith', 'John Adam Smith', 'Robert Adam Jones', 'Robert Jones'];

const matchAlias = (name) => {

}

console.log(matchAlias('John Adam Smith'));