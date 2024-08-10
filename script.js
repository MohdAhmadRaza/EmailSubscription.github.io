
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxgUdwslap2IbbCL7-UflUVPPc4uw03cRZb54yX2HE1dlD2gQczz99Nx5OnkTMex0IX-g/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
