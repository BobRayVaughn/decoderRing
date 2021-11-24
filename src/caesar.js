const caesarModule = (function () {
  const alpha = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"

  function caesar(input, shift, encode = true) {
    const eMessage = [];
    input = input.toLowerCase(); //this will ignore uppercase
    if (shift === 0 || shift < -25 || shift > 25) return false; //this ensures proper shift value
    if (encode == false) {shift = -shift;} //this will handle the need to decode

    for (let i = 0; i < input.length; i++) {
      let character = input.charAt(i);
      if (!alpha.includes(character)) {eMessage.push(character); //this will handle any special char or punc
      } else {
        for (let j = 0; j < alpha.length; j++) {
          let align = j + 26 + shift; //this combined with alpha will handle the shift wrapping
          if (alpha.charAt(j) === character) {eMessage.push(alpha.charAt(align));
            break;
          }
        }
      }
    }
    return eMessage.join("")
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };