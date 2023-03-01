
const stringReverse = (string) => {

  const lastChar = (string.length - 1)
  let reverseString = ""

  for(let i = lastChar; i >= 0 ; i--){
    reverseString += string[i]
  }

  console.log(`
    String informada: ${string};
    String Reversa: ${reverseString}
  `)

}

const string = "teste"
const string2 = "programador"

stringReverse(string)
stringReverse(string2)
