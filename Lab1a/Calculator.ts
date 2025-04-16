const readline = require('readline');

class Calculator {
 
  add(a: number, b: number): number {
    return a + b;
  }

  subtract(a: number, b: number): number {
    return a - b;
  }

  multiply(a: number, b: number): number {
    return a * b;
  }

  divide(a: number, b: number): string | number {
    if (b === 0) {
      return 'Error: Division by zero is not allowed.';
    }
    return a / b;
  }

  calculate(operation: string, a: number, b: number): string | number {
    switch (operation) {
      case '1': 
        return this.add(a, b);
      case '2': 
        return this.subtract(a, b);
      case '3': 
        return this.multiply(a, b);
      case '4': 
        return this.divide(a, b);
      case '5': 
        return 'quit';
      default:
        return 'Error: Invalid operation.';
    }
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const calculator = new Calculator();

const getInput = () => {
  rl.question('Select operation:\n1. Add\n2. Subtract\n3. Multiply\n4. Divide\n5. Quit\nYour choice: ', (operation) => {
    if (operation === '5') {
      console.log('Goodbye!');
      rl.close(); 
      return;
    }

    rl.question('Enter first number: ', (firstNumInput) => {
      const firstNum = parseFloat(firstNumInput);

      rl.question('Enter second number: ', (secondNumInput) => {
        const secondNum = parseFloat(secondNumInput);

        const result = calculator.calculate(operation, firstNum, secondNum);
        if (result === 'quit') {
          console.log('Goodbye!');
          rl.close();
        } else {
          console.log(`Result: ${result}`);
          getInput(); 
        }
      });
    });
  });
};

getInput();
