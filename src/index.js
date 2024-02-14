let formElement = document.querySelector('form')
formElement.addEventListener('submit', displayBook)

function displayBook(event) {
    event.preventDefault()

    new Typewriter('#book-description', {
        strings: 'hi',
        autoStart: true,
        delay: 1,
    })
}
