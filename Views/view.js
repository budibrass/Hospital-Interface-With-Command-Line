class View {
    static help() {
        console.log('Use command below:')
        console.log('$ node index.js # Command line information')
        console.log('$ node index.js help # Command line information')
        console.log('$ node index.js register <your_name> <your_role> <your_username> <your_password> # For Register your account')
        console.log('$ node index.js login <your_username> <your_password> # For login to your account')
        console.log('$ node index.js addPatient <name> <diagnosis> # To add patient data (dokter only)')
        console.log('$ node index.js logout # For logout your account')
    }

    static errorCommand() {
        console.log(`Error command: please type $ node index.js help or $ node index.js for more information`)
    }

    static registerReport(employee, total) {
        console.log(`save data succes ${employee.element}. Total employee : ${total}`)
    }

    static onlineReport(report) {
        console.log(report)
    }

    static errorReport(error) {
        console.log('Error: invalid data')
        console.log(error)
    }

    static addPatientReport(report) {
        console.log(report)
    }
}

module.exports = View