const substitutionModule = (function () {

	function substitution(input, alphabet, encode = true) {
	  if (!alphabet || alphabet.length !== 26) return false;
  
		  input = input.toLowerCase(); //handles capitals
		  let result = "";
		  const alphaString = "abcdefghijklmnopqrstuvwxyz";
		  const alphaArray = alphabet.split("");
		  let dupe = alphaArray.some(
			  (currentValue, currentIndex) =>
				  alphaArray.indexOf(currentValue) !== currentIndex
		  );
		  if (dupe) return false; //handles repeated alpha
  
		  for (let i = 0; i < input.length; i++) {
			  if (input[i] === " ") result += " ";
			  if (encode) {index = alphaString.indexOf(input.charAt(i)); result += alphabet.charAt(index);
			  } else {index = alphabet.indexOf(input.charAt(i)); result += alphaString.charAt(index);}
		  }
		  return result;
	  }
  
	return {
	  substitution,
	};
  })();
  
  module.exports = { substitution: substitutionModule.substitution };