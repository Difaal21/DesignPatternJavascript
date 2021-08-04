const { Cat, Dog, Tiger } = require('./animal');

class AnimalFactory {
    create(type) {
        if (type === "tiger") {
            return new Tiger().speak();;
        } else if (type === "cat") {
            return new Cat().speak();
        } else if (type === "dog") {
            return new Dog().speak();
        }
    }
}

module.exports = AnimalFactory;