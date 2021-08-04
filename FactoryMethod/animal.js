class Animal {

}

class Tiger extends Animal {
    speak() {
        return "Roar";
    }
}

class Cat extends Animal {
    speak() {
        return "Meow";
    }
}

class Dog extends Animal {
    speak() {
        return "Gog gog";
    }
}


module.exports = { Cat, Dog, Tiger };