const baseUrl = 'https://restcountries.com/v3.1/all'

fetch(`${baseurl}/all?fields=name,flags`)
    .then((response) => response.json())
    .then((data) => console.log (data));


    const containerDIV = document.querySelector('.container');


    data.foreach((country) => {
        const countrybutton = document.createElement('button');
        countrybutton.classList.add('country-button')

        countrybutton, innerHTML = `
        <img width="20px" src="${country.flags.png}">
        <span>${country.name.official}</span>
    `


    containerDIV.append(countrybutton);
    })
