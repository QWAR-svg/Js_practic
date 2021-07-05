const numbers= document.querySelectorAll('[data-number]');
const oper= document.querySelectorAll('[data-oper]');
const equal= document.querySelector('[data-equals]');
const deleteBtn = document.querySelector('[data-delete]');
const ac= document.querySelector('[data-all-clear]');
const beforeText= document.querySelector('[data-previous]');
const nextText= document.querySelector('[data-next]');


class Calculator{
    constructor(beforeText, nextText) {
        this.beforeText = beforeText;
        this.nextText = nextText;
        this.clear();
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    addNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation) {
        if (this.currentOperand === '' ) return
        if (this.previousOperand !== ''){
            this.compute()
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    compute() {
        let computation
        const prev = parseFloat(this.previousOperand)
        const curren = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(curren)) return

        switch (this.operation) {
            case '+':
                computation = prev + curren
                break
            case '-':
                computation = prev - curren
                break
            case '*':
                computation = prev * curren
                break
            case '/':
                computation = prev / curren
                break
            default:
                return 
        }

        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1];
        let integerDisplay 
        if (isNaN(integerDigits)) {
            integerDisplay = ''
        } else {
            integerDisplay =  integerDigits.toLocaleString('en', {
                maximumFractionDigits: 0 })
        }

        if(decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    }

    updateDisplay() {
         this.nextText.innerText =this.getDisplayNumber(this.currentOperand);
         if (this.operation != null) {
            this.beforeText.innerText = 
            `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;

         } else {
            this.beforeText.innerText = '';
         }

    }
}

const calculator =  new Calculator(beforeText, nextText);

numbers.forEach(button => {
    button.addEventListener('click', () => {
        calculator.addNumber(button.innerText)
        calculator.updateDisplay()
       
    })
})

oper.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
       
    })
})

equal.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
})

ac.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
})


deleteBtn.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay();
})