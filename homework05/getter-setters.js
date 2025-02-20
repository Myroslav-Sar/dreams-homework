const user = {
    _name: "Тарас",
    _age: 25,
    
    get name() {
        return this._name;
    },
    
    set name(newName) {
        this._name = newName;
    },
    
    get age() {
        return this._age;
    },
    
    set age(newAge) {
        if (newAge > 0) {
            this._age = newAge;
        } else {
            console.log("Вік має бути більше нуля");
        }
    },

    getInfo() {
        return `Користувач: ${this._name}, Вік: ${this._age}`;
    }
};

console.log(user.getInfo());
user.name = "Мирослав";
user.age = 27;
console.log(user.getInfo());