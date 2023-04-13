// "Hello world" tier Javascript function, loaded via an external file
const greeting = "Welcome to my first Website!  It's a work in progress"
console.log(greeting);

// Contact Form Design and build an HTML form with a variety of input types. Form must have a functional submit button leading to another page.
const form = document.querySelector("#form")

   const submitButton = document.querySelector("#submit")
   const scriptURL = 'https://httpbin.org/post'

   form.addEventListener('submit', e => {
     submitButton.disabled = true
    //  e.preventDefault() - replacing with form-submitted page per project requirement
     let requestBody = new FormData(form)
     fetch(scriptURL, { method: 'POST', body: requestBody})
       .then(response => {
          alert('Success!', response)
          submitButton.disabled = false
         })
       .catch(error => {
       alert('Error!', error.message)
         submitButton.disabled = false

       }
       )
   })

   