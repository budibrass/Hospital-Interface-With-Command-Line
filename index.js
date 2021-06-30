const Controller = require('./Controllers/controller')
const input = process.argv.slice(2)

if(input.length === 0 || input[0] === 'help') {
    Controller.help()
} else if(input[0] === 'register') {
    Controller.employeeRegister(input[1], input[2], input[3], input[4])
} else if (input[0] === 'login') {
    Controller.login(input[1], input[2])
} else if (input[0] === 'addPatient') {
    Controller.addPatient(input[1], input.slice(2).join(' '))
} else if (input[0] === 'logout') {
    Controller.logout()
} else {
    Controller.errorCommand()
}