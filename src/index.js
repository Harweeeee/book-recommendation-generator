let formElement = document.querySelector('form')
formElement.addEventListener('submit', generateBook)

let apiKey = '263tdf1c5f75o8ab465cedabbe0f4604'
let apiContext =
    'You are a specialist in all things regarding novels, books, you have lots of knowledge on different book categories, genres and authors.'
let bookDescription = document.querySelector('#book-description')

function generateBook(event) {
    event.preventDefault()
    let userInput = document.querySelector('#text-input')
    let apiPrompt = `Provide a book recommendation in the ${userInput.value} genre. Provide the book title at the top of the paragraph in a <strong>. After a <br> describe the book content. The book suggested must be in the genre the user wants`
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${apiPrompt}&context=${apiContext}&key=${apiKey}`
    let mainDescription = document.querySelector('#generated-book')
    mainDescription.classList.remove('hidden')
    bookDescription.innerHTML = 'Generating book suggestion...'
    axios.get(apiUrl).then(typeBook)

    function typeBook(response) {
        new Typewriter(bookDescription, {
            strings: response.data.answer,
            autoStart: true,
            delay: 1,
        })
    }
}
