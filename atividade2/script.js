const FindNumberInFibonacciSequence = {

  init: function(numberToFind){
    const fibonacciSequence = this.fibonacci(numberToFind)
    const findNumber = this.search(numberToFind, fibonacciSequence)

    const result =  findNumber? this.message.numberFound : this.message.numberNotFound
    console.log(result) //Exibe o resultado
  },

  fibonacci : (limit) =>{

    let next = 0
    let sequence = [0, 1]
  
    for (let i = 1; next < limit; i++){
      next = sequence[(i-1)] + sequence [i]
      sequence.push(next)
    }

    return sequence
  
  },

  search : (number, array) => {
    return array.find( n => n === number) ? true : false
  },

  message : {
    numberNotFound : "Este número não pertence à sequência de Fibonnaci",
    numberFound : "Este número pertence à sequência de Fibonnaci"
  },

}

FindNumberInFibonacciSequence.init(25)
FindNumberInFibonacciSequence.init(34)
FindNumberInFibonacciSequence.init(125)
FindNumberInFibonacciSequence.init(377)