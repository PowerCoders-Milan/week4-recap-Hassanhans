// Rewrite the instructions in your own words
    take a phrase from the user 
    create the acronym
    what is an acronym
// Write the objectives and the tests
   input-----phrase
   split the phrase into words
   take the first letters
   capitalize each first letter
   put them all together
   output --------print letters all together
// Write the pseudocode
    set a variable User-phrase
    Prompt the text with message please give us a phrase
    set another a variable seperate pharse to make from text.
// paste your JS generated by blockly below here

var User_Phrase, Acronym, Separate_phrase, item, Result;


User_Phrase = window.prompt('Please Enter your Phrase');
Separate_phrase = User_Phrase.split(' ');
for (var item_index in Separate_phrase) {
  item = Separate_phrase[item_index];
  Result += String(item.charAt(0).toUpperCase());
}
window.alert(Result);
