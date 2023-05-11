/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable no-empty-function */
/* eslint-disable linebreak-style */
const DetailRestaurant = {
  async render() {
    return `
          <div id="detailRestaurant" class="detailRestaurant"></div>
          <div id="likeButtonContainer"></div>
          `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await restaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#detailRestaurant');
    restaurantContainer.innerHTML = createrestaurantsDetailTemplate(restaurant);
  },
};

export default DetailRestaurant;
