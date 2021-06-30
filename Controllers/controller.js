const Model = require('../Models/model')
const View = require('../Views/view')

class Controller {
    static help() {
        View.help()
    }
    
    static employeeRegister(name, position, username, password) {
        Model.employeeRegister(name, position, username, password, (err, employee, employeeData)=> {
            if(err) {
                View.errorReport(err)
            } else {
                let totalEmployee = employeeData.length
                View.registerReport(employee, totalEmployee)
            }
        })
    }

    static login(username, password) {
        Model.login(username, password, (err, employeeData) => {
            if(err) {
                View.errorReport(err)
            } else {
                View.onlineReport(employeeData)
            }
        })
    }  
    
    static addPatient(name, diagnosis) {
        Model.addPatient(name, diagnosis, (err, patientData) =>{
            if(err) {
                View.errorReport(err)
            } else {
                View.addPatientReport(patientData)
            }
        })
    }

    static logout() {
        Model.logout((err, onlineData) => {
            if(err) {
                View.errorReport(err)
            } else {
                View.onlineReport(onlineData)
            }
        })
    }

    static errorCommand() {
        View.errorCommand()
    }
}

module.exports = Controller