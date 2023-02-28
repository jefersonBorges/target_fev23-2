const DailyRevenueReport = {

  report: function(){
    this.getMonthlyRevenue(this.parameters.source)
      .then(this.monthlyRevenueValues)
      .then(this.lowestDailyRevenue)
      .then(lowestRevenue => {
        console.log(`Menor valor de faturamento em um dia do mês R$: ${lowestRevenue.toFixed(2)};`)
      })

    this.getMonthlyRevenue(this.parameters.source)
      .then(this.monthlyRevenueValues)
      .then(this.highestDailyRevenue)
      .then(highestRevenue => {
        console.log(`Maior valor de faturamento em um dia do mês R$: ${highestRevenue.toFixed(2)};`)
      })

    this.getMonthlyRevenue(this.parameters.source)
      .then(this.monthlyRevenueValues)
      .then(this.revenueDaysAboveAverage)
      .then(daysAboveAverage => {
        console.log(`Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: ${daysAboveAverage} dias.`)
      })

  },

  parameters : {
    source: 'dados.json'
  },
  
  getMonthlyRevenue : async function(source){
    return await fetch(source).then(response => response.json())
  },
  
  monthlyRevenueValues : (monthlyRevenue) => {
    return monthlyRevenue.map(revenue => revenue.valor)
  },
  
  lowestDailyRevenue : (revenueValues) => {
    return Math.min(...revenueValues)
  },
  
  highestDailyRevenue : (revenueValues) => {
    return Math.max(...revenueValues)
  },
  
  revenueDaysAboveAverage : (revenueValues) => {

    let sum = 0
    let numberOfDays = 0
  
    for(let i = 0; i < revenueValues.length; i++){
      if(revenueValues[i] > 0){
        numberOfDays++
        sum += revenueValues[i]
      }
    }

    const average = (sum/numberOfDays)

    return revenueValues.filter(revenue => revenue > average).length
    
  }

}

DailyRevenueReport.report()//Apresenta o resultado