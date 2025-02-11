
const person = {
    name: "Myroslav",
    age: 27,
    address: {
        city: "Kyiv",
        country: "Ukraine"
    },
    hobbies: ["reading", "composing music", "sports"],
    showInfo: function() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
};

person.showInfo();