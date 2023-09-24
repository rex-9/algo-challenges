class Employee {
    constructor(title) {
        this.title = title;
    }

    setTitle(title) {
        this.title = title;
    }

    getTitle() {
        return this.title;
    }
}

class Engineer extends Employee {
    constructor(title, isManager) {
        super(title);
        this.isManager = isManager;
    }

    setIsManager(isManager) {
        this.isManager = isManager;
    }

    getIsManager() {
        return this.isManager;
    }
}

function main() {
    var temp = 'Developer true';
    var inputs = temp.split(' ');
    var engineerObject = new Engineer(inputs[0], inputs[1].toLowerCase() === 'true');
    
    console.log(`Initial Employee Profile - Title is ${engineerObject.getTitle()}. ${engineerObject.getIsManager() ? 'Is' : 'Is not'} a Manager\n`)
    
    // engineerObject.setTitle(readLine());
    // engineerObject.setIsManager(readLine().toLowerCase() === 'true');
    
    console.log(`Final Employee Profile - Title is ${engineerObject.getTitle()}. ${engineerObject.getIsManager() ? 'Is' : 'Is not'} a Manager\n`)
    
    console.log(`Engineer.prototype has property setTitle: ${Engineer.prototype.hasOwnProperty('setTitle')}\n`);
    console.log(`Engineer.prototype has property getTitle: ${Engineer.prototype.hasOwnProperty('getTitle')}\n`);
    console.log(`Engineer.prototype has property setIsManager: ${Engineer.prototype.hasOwnProperty('setIsManager')}\n`);
    console.log(`Engineer.prototype has property getIsManager: ${Engineer.prototype.hasOwnProperty('getIsManager')}\n`);
}

var engineerObject = new Engineer('Developer', false);

engineerObject.setTitle('Developer2');
engineerObject.setIsManager(true);
console.log(engineerObject.getTitle());
console.log(engineerObject.getIsManager());
