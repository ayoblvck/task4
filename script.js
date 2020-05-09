var allQuestions = [{
        question: "COVID-19 is caused by what organism?",
        options: [
            { title: "bacteria", correct: false },
            { title: "virus", correct: true },
            { title: "fungi", correct: false },
            { title: "rodents", correct: false }
        ]
    },
    {
        question: "What state in china was the first case of Covid-19 discovered in?",
        options: [
            { title: "Hong-Kong", correct: false },
            { title: "shanghai", correct: false },
            { title: "Wuhan", correct: true },
            { title: "Beijing", correct: false }
        ],

    },
    {
        question: "Which is not a known symptom of covid-19?",
        options: [
            { title: "Fever", correct: false },
            { title: "Running nose", correct: false },
            { title: "Difficulty in breathing", correct: false },
            { title: "Toothache", correct: true }
        ],
    },
    {
        question: "What does the 19 in covid-19 stand for?",
        options: [
            { title: "It consists of 19 types of viruses", correct: false },
            { title: "It kills in 19 days", correct: false },
            { title: "It was discovered in the year 2019", correct: true },
            { title: "It consists of 19 sequences", correct: false }
        ],
    },
    {
        question: "Which of these ways can covid-19 not be transmitted?",
        options: [
            { title: "Through mosquito bites", correct: true },
            { title: "Through coughing and sneezing", correct: false },
            { title: "Through handshakes", correct: false },
            { title: "Through kissing", correct: false }
        ],
    }
];
currentIndex = 0
answers = []
score = []
const render = (index) => {
    if (index + 1 > allQuestions.length || index < 0) {
        return
    }
    const question = allQuestions[index]
    const questionElement = document.querySelector('.question')
    questionElement.textContent = question.question;
    const options = document.querySelectorAll('.options')
    options.forEach((optionElement, i) => {
        optionElement.querySelector('span').textContent = question.options[i].title;
        optionElement.style.backgroundColor = '';
        const inputElement = optionElement.querySelector('input');

        inputElement.checked = false;
        inputElement.onclick = () => {
            answers[index] = { option: i, answer: question.options[i].correct }
            console.log(question.options[i].correct)
            console.log(answers)
        }
    })
}
const markAnswer = (index) => {
    const optionAnswer = answers[index];
    const options = document.querySelectorAll('.options');
    const selectedOption = options[optionAnswer.option];

    console.log('selected Options', selectedOption);
    if (optionAnswer.answer) {
        selectedOption.style.backgroundColor = 'green'

    } else {
        selectedOption.style.backgroundColor = 'red';
        question = allQuestions[index];
        for (let i = 0; i < question.options.length; i++) {
            isCorrect = question.options[i].correct;
            if (isCorrect) {
                const correctOption = options[i];
                correctOption.style.backgroundColor = 'green'
                break;
            }
        }
    }



    /*
        const styles = {
            width: '80%',
            borderRadius: '8px'
        };
        const styles2 = {
            width: '80%',
            borderRadius: '8px'
        };
        Object.assign(selectedOption.style, styles)
        Object.assign(correctOption.style, styles2)*/
}

const next = () => {
        const nextButton = document.querySelector('#next')
        nextButton.addEventListener('click', () => {
            render(++currentIndex)
        })
    }
    /* *
    const previous = () => {
        const previousButton = document.querySelector('#previous')
        previousButton.addEventListener('click', () => {
            render(--currentIndex)
        })
    }
    **/

const enter = () => {
    const input = document.querySelector('#enter')
    input.addEventListener('click', () => {
        markAnswer(currentIndex)

    })

}



render(currentIndex);
next();
enter();
