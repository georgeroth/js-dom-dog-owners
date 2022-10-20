console.log(data);

// WRITE YOUR CODE BELOW!

const mainUl = document.querySelector('.dogs-list')
let goodDogVariable = 'yes'
let goodOrBad = 'Good'
const main__dog = document.querySelector('.main__dog-section')

function callDogCard (dog){
    main__dog.innerText= ""
    const name = document.createElement('h2')
    name.innerText=(dog.name)
    main__dog.appendChild(name)

    const img = document.createElement('img')
    img.src=(dog.image)
    main__dog.appendChild(img)

    const section__desc = document.createElement('div')
    main__dog.appendChild(section__desc)

    const h3 = document.createElement('h3')
    const p = document.createElement('p')

    h3.innerText= "Bio"
    p.innerText= (dog.bio)

    section__desc.appendChild(h3)
    section__desc.appendChild(p)

    const naughtyOrGood = document.createElement('p')
    naughtyOrGood.innerHTML = `<em>Is naughty?</em> ${goodDogVariable}!`
    main__dog.appendChild(naughtyOrGood)

    const button = document.createElement('button')
    button.innerText=`${goodOrBad} dog!`
    main__dog.appendChild(button)

    button.addEventListener("click", (event) => {
        naughtyOrGood.innerText = ""
        button.innerText = ""
        if (goodDogVariable === 'yes') {
            goodDogVariable = 'no'
            goodOrBad = 'Bad'
            button.innerText=`${goodOrBad} dog!`
            naughtyOrGood.innerHTML = `<em>Is naughty?</em> ${goodDogVariable}!`
        } else {
            goodDogVariable = 'yes'
            goodOrBad = 'Good'    
            button.innerText=`${goodOrBad} dog!`
            naughtyOrGood.innerHTML = `<em>Is naughty?</em> ${goodDogVariable}!` 
        }
    })
}

data.forEach(dog => {
    const dogButton = document.createElement('li')
    dogButton.innerText = dog.name
    dogButton.setAttribute('class', 'dogs-list__button')
    mainUl.appendChild(dogButton)
    dogButton.addEventListener("click", function() {
        callDogCard(dog)
    })
})

const addNewDog = document.querySelector('.dogs-list__button--add')
addNewDog.addEventListener("click",(event) =>{
    console.log("button clicked")
    main__dog.innerText= ""

    const newDogH2 = document.createElement('h2')
    newDogH2.innerText = "Add a new Dog"
    main__dog.appendChild(newDogH2)

    const form = document.createElement('form')
    form.setAttribute('class','form')
    main__dog.appendChild(form)

})