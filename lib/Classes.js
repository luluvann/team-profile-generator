class Employee {
    constructor(employeeName, id, email){
        this.employeeName = employeeName;
        this.id = id;
        this.email = email;
    }

    getName(){
       return `<h3>${this.employeeName}</h3>`
    }

    getId(){
       return  `<p class="row"><span>ID:</span> <span>${this.id}</span></p>`
    }

    getEmail(){
       return `<p class="row"><span>Email:</span> <span><a href="mailto:${this.email}">${this.email}</a></span></p>`
    }

    getRole(){
         return `<p>Employee</p>`
    }
}

class Manager {
    constructor(number){
        this.number = number;
   
    }

    getOfficeNumber(){
        return `<p class="row"><span>Office number:</span> <span>${this.number}</span></p>`
    }

    getRole(){
        return `<p><i class="fas fa-mug-hot"></i> Manager</p>`
    }
}

class Engineer {
    constructor(github){
        this.github = github;
    }

    getGithub(){
        return `<p class="row"><span>Github:</span> <span><a href="https://github.com/${this.github}" target="_blank">${this.github}</a></span></p>`
    }

    getRole(){
        return `<p><i class="fas fa-glasses"></i> Engineer</p>`
    }
}

class Intern {
    constructor(school){
        this.school = school;
    }

    getSchool(){
        return `<p class="row"><span>School :</span> <span>${this.school}</span></p>`
    }

    getRole(){
        return `<p><i class="fas fa-graduation-cap"></i> Intern</p>`
    }
}

module.exports = {
    Employee : Employee,
    Manager : Manager,
    Engineer: Engineer,
    Intern: Intern
  }