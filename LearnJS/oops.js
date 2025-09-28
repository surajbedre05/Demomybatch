class A {
    display() {
        console.log("This is a display method from class A");
    }

    add(num1, num2) {
        console.log(num1);
        console.log(num2);
        console.log(num1 + num2);
    }
}

class B extends A {
    display() {
        console.log("This is a display method from class B");
    }

    add(num1, num2, num3) {
        console.log(num1);
        console.log(num2);
        console.log(num3);
        console.log(num1 + num2 + num3);

    }
}

const objB = new B();

objB.display();

objB.add(10, 20);