/* eslint-disable linebreak-style */
/* eslint-disable no-empty-function */
/* eslint-disable linebreak-style */
const Home = {
  async render() {
    return `
      <section class="content">
        <div class="latest">
          <h1>Explore Restaurant</h1>
          <div class="list" id="tes"></div>
        </div>
      </section>
        `;
  },

  async afterRender() {
    // eslint-disable-next-line no-undef
    const restaurant = await restaurantSource.listRestaurans();
    const restaurantContainer = document.querySelector('#tes');
    restaurant.forEach((restaurants) => {
      // eslint-disable-next-line no-undef
      restaurantContainer.innerHTML += createrestaurantsItemTemplate(restaurants);
    });
  },
};

export default Home;
