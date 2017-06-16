// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
(function () {

  'use strict';
  function getPerson(number) {
  fetch('https://randomuser.me/api/?results='+number)
  .then( function(response){
    return response.json()
  })
  .then(function(json){
    for (var i = 0; i < json.results.length; i++) {
    const firstName = json.results[i].name.first
    const lastName = json.results[i].name.last
    const email = json.results[i].email
    const street = json.results[i].location.street
    const city = json.results[i].location.city
    const state = json.results[i].location.state
    const postcode = json.results[i].location.postcode
    const phone = json.results[i].phone
    const picture = json.results[i].picture.large

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
      }
  })

}


getPerson(12)

})();
