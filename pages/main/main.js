
let cardItems = [
    card1 = {
    image: "../../assets/images/main/Rectangle 5.png",
    title: "giant Pandas",
    text: "Native to Southwest China",
    eat: "banana"
    },
    card2 = {
        image: "../../assets/images/main/Rectangle 6.png",
        title: "Eagles",
        text: "Native to South America",
        eat: "meat"
    },
    card3 = {
        image: "../../assets/images/main/Rectangle 7.png",
        title: "Gorillas",
        text: "Native to Congo",
        eat: "banana"
    },
    card4 = {
        image: "../../assets/images/main/Rectangle 8.png",
        title: "Two-toed Sloth",
        text: "Mesoamerica, South America",
        eat: "banana"
    },
    card5 = {
        image: "../../assets/images/main/Rectangle 9.png",
        title: "cheetahs",
        text: "Native to Africa",
        eat: "meat"
    },
    card6 = {
        image: "../../assets/images/main/Rectangle 10.png",
        title: "Penguins",
        text: "Native to Antarctica",
        eat: "meat"
    },
    card7 = {
        image: "../../assets/images/main/gorilla2.png",
        title: "Gorillas",
        text: "Native to Congo",
        eat: "banana"
    },
    card8 = {
        image: "../../assets/images/main/Rectangle 11.png",
        title: "Alligators",
        text: "Native to Southeastern U. S.",
        eat: "meat"
    },
]
const mediaQuery = window.matchMedia("(min-width: 1000px)")
let cards = document.querySelector(".cards")
let buttonPrev = document.querySelector('.buttonRound_prev')
let buttonNext = document.querySelector('.buttonRound_next')
let buttonDisable = false

let setButton = () => {
    buttonDisable = false
}

resizeRender()

function createCard (image, title, text, eat) {
    // create card
    let card = document.createElement("div")
    card.className = 'card'

// create card__img
    let cardImage = document.createElement("div")
    cardImage.className = 'card__img'
    const source = `<img src='${image}' alt="cardPands">`
    cardImage.innerHTML = `${source}`
    card.append(cardImage)

// create card text
    let cardText = document.createElement("div")
    cardText.className = `card__text_${eat}`
    card.append(cardText)
    let titleText = document.createElement('div')
    titleText.className = 'card__textTitle'
    titleText.innerHTML = `${title}`
    cardText.append(titleText)
    let textItem = document.createElement('div')
    textItem.className = 'card__textItem'
    textItem.innerHTML = `${text}`
    cardText.append(textItem)
// add cart
    cards.prepend(card)
}

function addCards (n) {
    let cardArray = new Set ()
    while (cardArray.size < n) {
        let card = cardItems[Math.floor(Math.random()*8)]
        cardArray.add(card)
    }
    Array.from(cardArray).map((elem) => {
        createCard(elem.image, elem.title, elem.text, elem.eat)
    })
}

function resizeRender () {
    let cardsInner = document.querySelectorAll(".card")
    if (mediaQuery.matches && buttonDisable === false) {
        buttonDisable = true
        cardsInner.forEach((elem) => {
            elem.remove()
        })
        addCards(6)
        cards.addEventListener('animationend', setButton)
    } else {
        if (buttonDisable === false) {
            cardsInner.forEach((elem) => {
                elem.remove()
            })
            addCards(4)
            cards.addEventListener('animationend', setButton)
        }
    }
}

mediaQuery.addListener(resizeRender)

buttonPrev.addEventListener('click', resizeRender)
buttonNext.addEventListener('click', resizeRender)

// -----------------Testimonials---------------//

const rangeInput = document.getElementById('range-input');
const allTestimonialItems = document.querySelectorAll('.testimonials__item');
console.log(allTestimonialItems);
let startIndex = 0;
let endIndex = startIndex + 3;
let previousIndex = 0;

const changeDisplayedItems = function () {
    const moveForward = rangeInput.value - previousIndex > 0 ? true : false;
    startIndex = rangeInput.value;
    endIndex = +rangeInput.value + 3;
    console.log(startIndex, endIndex, previousIndex);


    if (moveForward) {
        console.log(moveForward);
        previousIndex += 1;
        if (startIndex > 0) {
            allTestimonialItems[startIndex - 1].classList.add('from-center-to-left');
            allTestimonialItems[startIndex].classList.add('from-center-to-left');
            allTestimonialItems[+startIndex + 1].classList.add('from-center-to-left');
            allTestimonialItems[+startIndex + 2].classList.add('from-center-to-left');
            allTestimonialItems[+startIndex + 3].classList.add('from-center-to-left');
            allTestimonialItems[+startIndex].addEventListener(
                'animationend',
                function () {
                    allTestimonialItems[startIndex - 1].classList.remove('visible');
                    allTestimonialItems[startIndex - 1].classList.add('hidden');

                    allTestimonialItems[startIndex - 1].classList.remove(
                        'from-center-to-left'
                    );
                    allTestimonialItems[startIndex].classList.remove(
                        'from-center-to-left'
                    );
                    allTestimonialItems[+startIndex + 1].classList.remove(
                        'from-center-to-left'
                    );
                    allTestimonialItems[+startIndex + 2].classList.remove(
                        'from-center-to-left'
                    );
                    allTestimonialItems[+startIndex + 3].classList.remove(
                        'from-center-to-left'
                    );
                }
            );
        }

        if (endIndex <= 10) {
            allTestimonialItems[endIndex].classList.remove('hidden');
            allTestimonialItems[endIndex].classList.add('visible');
        }
    } else {
        startIndex === 0 ? (previousIndex = 0) : (previousIndex -= 1);
        console.log(startIndex);
        allTestimonialItems[startIndex].classList.remove('hidden');
        allTestimonialItems[startIndex].classList.add('visible');

        allTestimonialItems[startIndex].classList.add('from-left-to-center');
        allTestimonialItems[+startIndex + 1].classList.add('from-left-to-center');
        allTestimonialItems[+startIndex + 2].classList.add('from-left-to-center');
        allTestimonialItems[+startIndex + 3].classList.add('from-left-to-center');
        allTestimonialItems[+startIndex + 4].classList.add('from-left-to-center');
        // allTestimonialItems[+startIndex +5].classList.add('from-center-to-right');

        allTestimonialItems[endIndex].addEventListener('animationend', function () {
            allTestimonialItems[+endIndex].classList.remove('hidden');
            allTestimonialItems[+endIndex].classList.add('visible');

            allTestimonialItems[startIndex].classList.remove('from-left-to-center');

            allTestimonialItems[+startIndex].classList.remove('from-left-to-center');
            allTestimonialItems[+startIndex + 1].classList.remove(
                'from-left-to-center'
            );
            allTestimonialItems[+startIndex + 2].classList.remove(
                'from-left-to-center'
            );
            allTestimonialItems[+startIndex + 3].classList.remove(
                'from-left-to-center'
            );
            allTestimonialItems[+startIndex + 4].classList.remove(
                'from-left-to-center'
            );
            // allTestimonialItems[+startIndex + 4].classList.remove(
            //   'from-center-to-right'
            // );
            //  allTestimonialItems[endIndex+1].classList.remove(
            //    'from-center-to-right'
            //  );
        });

        if (startIndex > 0) {
            allTestimonialItems[startIndex - 1].classList.remove('visible');
            allTestimonialItems[startIndex - 1].classList.add('hidden');
        }
    }

    // }


};

rangeInput.addEventListener('input', changeDisplayedItems);


