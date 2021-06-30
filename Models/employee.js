class Employee {
    constructor(id, name, position, username, password) {
      this.id = id
      this.name = name
      this.position = position
      this.username = username
      this.password = password
    }

    get element () {
      return `{"username" : "${this.username}", "password" : "${this.password}", "role" : "${this.position}"}`
    }
}

module.exports = Employee