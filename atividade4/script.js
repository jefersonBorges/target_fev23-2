const MonthlyRevenueReportByState = {

  report: function(){

    this.getMonthlyRevenueByState(this.parameters.source)

      .then( states => {

        const total = this.totalMonthlyRevenue(states)

        states.forEach(state => {

          const representation = this.representationWithinMonthlyRevenue(total, state.valor)

          console.log(`
            Estado: ${state.estado}
            Receita R$: ${state.valor.toFixed(2)}
            Representação sobre a receita mensal total da distribuidora: ${representation.toFixed(2)}%
          `)
        });
      })
  },

  parameters : {
    source: 'dados.json'
  },

  getMonthlyRevenueByState : async function(source){
    return await fetch(source).then(response => response.json())
  },

  totalMonthlyRevenue : (monthlyRevenueByState) => {
    const revenue = monthlyRevenueByState.map(monthlyRevenue => monthlyRevenue.valor)
    return revenue.reduce( (total, value) => {return total + value})
  },

  representationWithinMonthlyRevenue : (totalRevenue, stateMonthlyRevenue) => {
    return (stateMonthlyRevenue / totalRevenue)*100
  },

}

MonthlyRevenueReportByState.report()