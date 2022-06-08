function pVowel(word) {
  let input = word;
  if (input[0] === "a" || input[0] === "e" || input[0] === "i" || input[0] === "o" || input[0] === "u") {
    return true;
  } else {
    return false;
  }
}

function pQU(word) {
  let input = word;
  if (input[0] === "q" && input[1] === "u") {
    return true;
  } else {
    return false;
  }
}

function pCons(word) {
  let input = word;
  if (pVowel(word) === false) {
    return true;
  } else {
    return false;
  }
}

let string = "hey how are you"
function pLatin(string) {
  let splitP = string.toLowerCase().split(" ");
  console.log(splitP);
  let pArray = [];
  for ( let i = 0; i < splitP.length; i++) {
    if(pVowel(splitP[i]) === true) {
      pArray.push(splitP[i] + "way");
    } if (pQU(splitP[i]) === true) {
      let splitPQU = splitP[i].slice(2);
      pArray.push((splitPQU) + "quay");
    } else if (pCons(splitP[i]) === true) {
    	console.log(pArray);
      let splitPFirst = splitP[i].charAt(0);
      let splitPCons = splitP[i].slice(1);
      pArray.push((splitPCons + splitPFirst) + "ay")
      console.log(pArray);
    }
  }
  return pArray;
}