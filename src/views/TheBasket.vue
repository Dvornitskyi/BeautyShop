<template>
  <div id="TheBasket" class="TheBasket">
    <!-- <router-link to="/">
      />
    </router-link> -->
    <div class="TheBasket__data">
      <p>Кількіть {{ count }}, Ціна {{ suma }}</p>
      <p>Назва {{ nameProduct }}</p>
    </div>
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      class="TheBasket__form"
    >
      <input type="text" name="name" placeholder="Прізвище Імя" required />
      <input type="email" name="email" placeholder="E-Mail" />
      <input type="tel" name="phone" placeholder="Номер телефону" />
      <button type="submit">Зробити замовлення</button>
    </form>
  </div>
</template>

<script>
// const response = await fetch(
//   `https://s2.apix-drive.com/web-hooks/16368/gq72og1o={{count}}&email=${suma}&text${nameProduct}`,
//   {
//     method: "GET",
//   }
// );
import { mapState, mapActions } from "vuex";
export default {
  name: "TheBasket",
  computed: {
    ...mapState(["count", "suma", "nameProduct"]),
  },
  methods: {
    ...mapActions([
      "increment",
      "decrement",
      "reset",
      "sumaSum1",
      "sumaSum2",
      "sumaSum3",
      "sumaSum4",
      "sumaSum5",
      "sumaSum6",
      "sumaSum7",
      "sumaSum8",
      "sumaSum9",
      "sumaSum10",
      "nameProduct1",
      "nameProduct2",
      "nameProduct3",
      "nameProduct4",
      "nameProduct5",
      "nameProduct6",
      "nameProduct7",
      "nameProduct8",
      "nameProduct9",
      "nameProduct10",
    ]),
  },
};
</script>

<style scoped lang="scss">
@media screen and (max-width: 1280px) {
  .TheBasket {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &__data {
      margin-bottom: 99px;
    }
  }
}
.TheBasket {
  display: flex;
  padding: 0;
  justify-content: space-around;
  &__data {
    width: 298px;
  }
  input {
    margin-bottom: 20px;
  }
  button {
    background-color: purple;
    color: white;
  }
  button:hover {
    background-color: green;
    color: white;
    transition: 0.2s linear;
  }
  &__form {
    width: 298px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
}
</style>
