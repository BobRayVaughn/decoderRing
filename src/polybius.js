const polybiusModule = (function () {

	function polybius(input, encode = true) {
	  const alpha = {
			  a: "11", b: "21", c: "31", d: "41", e: "51", f: "12", g: "22", h: "32", "(i/j)": "42", k: "52", l: "13", m: "23", n: "33", o: "43", p: "53", q: "14", r: "24", s: "34", t: "44", u: "54", v: "15", w: "25", x: "35", y: "45", z: "55",
		  };
	  let result = "";
  
	  if (encode === true) {
			  for (let i = 0; i < input.length; i++) {
				  let currentAlpha = input[i];
				  if (currentAlpha === " ") {result += " ";}
				  if (currentAlpha === "i" || currentAlpha === "j") {result += alpha["(i/j)"];}
				  for (let key in alpha) {
					  if (currentAlpha === key) {result += alpha[key];}
				  }
			  }
	} else if (encode === false){
	  if (input.replace(" ", "").length % 2 !== 0) return false; //handels odd string
	  let splitInput = input.split("");
	  for (let i=0; i < splitInput.length; i += 2) {
		let currentAlpha = splitInput[i];
		if (currentAlpha === " ") {result += " "; i--;
		} else {
		  let number = splitInput[i] + splitInput[i + 1];
		  for (let value in alpha) {
			if (number === alpha[value]) {result += value;}
		  }
		}
	  }
	}
	return result;
  
	}
	return {
	  polybius,
	};
  })();
  
  module.exports = { polybius: polybiusModule.polybius };