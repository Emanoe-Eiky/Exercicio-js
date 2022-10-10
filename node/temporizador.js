const schedule = require('node-schedule')

const tarefa = schedule.scheduleJob('*/5 * 1 * * 1', function () {
    console.log('Executado Tarefa 1!', new Date().getSeconds())
})

setTimeout(function () {
    tarefa.cancel()
    console.log('Cancelar Tarefa 1!')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 1
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando Tarefa 2!', new Date(). getSeconds())
} )