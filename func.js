const sumOfTwoNumbers = 58


function calculate(numberOne, numberTwo) {

    return function () {
        const sumOfTwoNumbers = numberOne + numberTwo)
        return sumOfTwoNumbers
    }
}

const another = calculate(3, 5)
console.log(sumOfTwoNumbers)

//const doesMotmatter = calculate(5, 5)