const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]
const planetEl = document.querySelector("#planets")
planetEl.innerHTML = "<h1> Planets </h1>"
/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/

planets.forEach(planet => {
    planetEl.innerHTML += `
<section> Planet Name: ${planet} </section>

`
})
// const planetEl = document.getElementById("planets")

/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/
const uppercaseplanet = document.querySelector("#uppercaseplanet")
const planetUpper = planets.map(planet => {
    const nameCapitalized = planet[0].toUpperCase() + planet.slice(1)
    console.log(nameCapitalized)
    return {
        "Name": nameCapitalized
    }


})




planetUpper.forEach(planet => {
    uppercaseplanet.innerHTML += `
    <section> Planet Name: ${planet.Name} </section>
    `

})


/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

const eplanets = document.querySelector("#e")

const Planets = planets.filter(planet => {
    let planetincludesE = false

    if (planet.includes("e")) {
        planetincludesE = true
    }
    console.log(planetincludesE)
    return planetincludesE
})

Planets.forEach(planet => {
eplanets.innerHTML += `
<section> Planets that include E: ${planet} </section>`
})


