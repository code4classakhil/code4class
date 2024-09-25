

const scriptURL = 'https://script.google.com/macros/s/AKfycbzSPehER2R9RibTPv2n_3TEkDgWaYPxRKPOT46JduP99NirDDGWSDwlYsIXxeuUv7Es/exec'
    const form = document.forms['database']
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
        .catch(error => console.error('Error!', error.message))
    })
    