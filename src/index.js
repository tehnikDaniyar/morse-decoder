const MORSE_TABLE = {
   '.-': 'a',
   '-...': 'b',
   '-.-.': 'c',
   '-..': 'd',
   '.': 'e',
   '..-.': 'f',
   '--.': 'g',
   '....': 'h',
   '..': 'i',
   '.---': 'j',
   '-.-': 'k',
   '.-..': 'l',
   '--': 'm',
   '-.': 'n',
   '---': 'o',
   '.--.': 'p',
   '--.-': 'q',
   '.-.': 'r',
   '...': 's',
   '-': 't',
   '..-': 'u',
   '...-': 'v',
   '.--': 'w',
   '-..-': 'x',
   '-.--': 'y',
   '--..': 'z',
   '.----': '1',
   '..---': '2',
   '...--': '3',
   '....-': '4',
   '.....': '5',
   '-....': '6',
   '--...': '7',
   '---..': '8',
   '----.': '9',
   '-----': '0',
};
function decode(expr) {

   const symbolsArray = [];

   expr.split('').reduce((acc, item, index) => {

      if ((index + 1) % 10 === 0 && index != 0) {
         console.log(item, index);
         symbolsArray.push(acc + item);
         return '';
      } else {
         return acc + item
      }
   }, '');

   let MorzeSymbols = symbolsArray.map((str) => {
      return str.replace(/10/g, '.').replace(/11/g, '-').replace(/0/g, '')
   });

   let result = MorzeSymbols.map((ms) => {
      return MORSE_TABLE[ms] ? MORSE_TABLE[ms] : ' ';
   })




   return result.join('')

}


module.exports = {
   decode
}