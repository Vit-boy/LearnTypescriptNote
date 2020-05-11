class Animal {
    name: string;
    static categoies: string[] = ['mammal', 'bird']
    static isAnimal(a) {
        return a instanceof Animal
    }
    constructor(name: string) {
        this.name = name
    }
    run() {
        return `${this.name} is running`
    }
}
// console.log(Animal.categoies)
const snake = new Animal('lily')
// console.log(Animal.isAnimal(snake))

class Dog extends Animal {
    bark() {
        return `${this.name} is barking`
    }
}

const caicai = new Dog('caicai')

class Cat extends Animal {
    constructor(name) {
        super(name)
    }
    run() {
        return 'Meow, ' + super.run()
    }
}

const maomao = new Cat('maomao')

interface Radio {
    switchRadio(): void;
}

interface Battery {
    checkBatteryStatus(): void;
}

interface RadioWithBattery extends Radio {
    checkBatteryStatus(): void;
}

class Car implements Radio{
    switchRadio() {

    }
}

class Cellphone implements RadioWithBattery {
    switchRadio() {

    }
    checkBatteryStatus() {

    }
}