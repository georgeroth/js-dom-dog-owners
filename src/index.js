console.log(data);

// WRITE YOUR CODE BELOW!

const mainUl = document.querySelector('.dogs-list')

data.forEach(dog => {
    const dogButton = document.createElement('li')
    dogButton.innerText = dog.name
    dogButton.setAttribute('class', 'dogs-list__button')
    mainUl.appendChild(dogButton)
})