console.log(data);

// WRITE YOUR CODE BELOW!

const mainUl = document.querySelector('.dogs-list')
goodDogVariable = 'yes'
goodOrBad = 'Good'

function callDogCard (dog){
    const main__dog = document.querySelector('.main__dog-section')
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

