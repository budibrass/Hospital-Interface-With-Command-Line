const fs = require('fs')
const Employee = require('./employee')
const Patient = require('./patient')

class Model {
  static employeeRegister(name, position, username, password, cb) {
    fs.readFile('./employees.json', 'utf-8', (err, employeeData) => {
      if(err) {
        cb(err, null)
      } else {
        let employees = JSON.parse(employeeData)
        let employee = new Employee(employees.length+1, name, position, username, password);
        employees.push(employee)
        let employeeStr = JSON.stringify(employees, null, 2)
        fs.writeFile('./employees.json', employeeStr, (err) => {
          if(err) cb(err, null);
          cb(null, employee, employees)
        })
      }
    })
  }

  static addPatient(name, diagnosis, cb) {
    fs.readFile('./patients.json', 'utf-8', (err, patientData) => {
      if(err) {
        cb(err, null)
      } else {
        fs.readFile('./online.json', (err, onlineStatus) => {
          if(err) {
            cb(err, null)
          } else {
            let online = JSON.parse(onlineStatus)
            if(online.length === 0) {
              cb(null, `Tidak memiliki akses untuk add patient`)
            } else if(online[0].position.toLowerCase() === 'dokter') {
              let patients = JSON.parse(patientData)
              let patient = new Patient(patients.length+1, name, diagnosis);
              patients.push(patient)
              let patientStr = JSON.stringify(patients, null, 2)
              fs.writeFile('./patients.json', patientStr, (err) => {
                if(err) cb(err, null);
                cb(null, `data pasien berhasil ditambahkan. Total data pasien: ${patients.length}`)
              })
            } else {
              cb(null, `Tidak memiliki akses untuk add patient`)
            }
          }
        })
      }
    })
  }

  static login(username, password, cb) {
    fs.readFile('./employees.json', 'utf-8', (err, employeeData) => {
        if(err) {
            cb(err, null)
        } else {
            let employees = JSON.parse(employeeData)
            let validUser = true
            for(let employee of employees) {
            if(username === employee.username) {
                validUser = true
                if(password === employee.password) {
                fs.readFile('./online.json', (err, onlineStatus) => {
                    if(err) {
                        cb(err, null)
                    } else {
                    let online = JSON.parse(onlineStatus)
                        if(online.length === 0) {
                            online.push(employee)

                            let onlineStr = JSON.stringify(online, null, 2)

                            fs.writeFile('./online.json', onlineStr,(err)=> {
                            if(err) cb(err, null);
                            cb(null, `user ${username} logged in succesfully`)
                            })
                        } else {
                            cb(null, `user ${online[0].username} still logged in, you need to logout first`)
                        }
                    }
                })
                break;
                } else {
                cb(null, `user ${username} password wrong`)
                break;
                }
            } else {
                validUser = false
            }
        }
        if(validUser === false) {
          cb(null, `Your are not registered, please register first!!!`)
          validUser = true;
        }
      }
    })
  }

  static logout(cb) {
    fs.readFile('./online.json', 'utf-8', (err, onlineData) => {
        if(err) {
            cb(err, null)
        } else {
            let online = JSON.parse(onlineData);
            online.shift()
            let onlineStr = JSON.stringify(online)
            fs.writeFile('./online.json', onlineStr, (err) => {
            if(err) cb(err, null)
            cb(null, `user has been successfully logout!!!`)
            })
        }
    })
  }
}


module.exports = Model


