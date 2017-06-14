// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
(function () {

  'use strict';
  function getPerson() {
  fetch('https://randomuser.me/api/')
  .then( function(response){
    return response.json()
  })
  .then(function(json){
    console.log(json.results[0])
    const firstName = json.results[0].name.first
    const lastName = json.results[0].name.last
    const email = json.results[0].email
    const street = json.results[0].location.street
    const city = json.results[0].location.city
    const state = json.results[0].location.state
    const postcode = json.results[0].location.postcode
    const phone = json.results[0].phone
    const picture = json.results[0].picture.large

    const html = `
        <div class="person">
          <div class="picture">
            <img src="${picture}">
          </div>
          <div class="name">
            ${firstName} ${lastName}
          </div>
          <div class="email">
          ${email}
          </div>
            <div class="address">
              <div class ="street">
                ${street}
                </div>
              <div class="location">
                ${city}, ${state} ${postcode}
              </div>
            </div>
            <div class="phone">
              ${phone}
            </div>
          </div>
        `
      document.querySelector(".customers").insertAdjacentHTML('beforeend', html)
  })

}

for (var i = 0; i <12; i++) {
  getPerson()
}
})();
