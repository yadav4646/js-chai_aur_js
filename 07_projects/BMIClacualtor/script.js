const form = document.querySelector('form')

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const Weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if (height === '0' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`
    } else if (Weight === '0' || Weight < 0 || isNaN(Weight)) {
        results.innerHTML = `Please give a valid Weight ${Weight}`
    } else {
        const BMI = (Weight / ((height * height) / 10000)).toFixed(2)

        // results.innerHTML = `<span>${BMI}</span>`
        // results.innerHTML = `This is underweight`

        if (BMI < 18.6) {
            results.innerHTML = `<span> ${BMI} is underweight`
        }
        if (BMI < 24.9) {
            results.innerHTML = `<span> ${BMI} is Normal`
        }
        if (BMI > 24.9) {
            results.innerHTML = `<span> ${BMI} is overweight`
        }
    }



})