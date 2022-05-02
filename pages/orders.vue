<template>
  <div>
    <div>
      <MainMenuList header="Orders" />
    </div>
    <table
      v-for="order in orders"
      :key="order.id"
      class="table-auto w-2/3 mt-20 mx-auto mb-20"
    >
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-right">Price</th>
          <th>Quantity</th>
          <th class="text-right">Total</th>
        </tr>
      </thead>
      <tr>
        <td colspan="4">
          <h1 class="font-oswald uppercase text-2xl pb-10">
            Order ID - {{ order.id }}
          </h1>
        </td>
      </tr>
      <tbody>
        <tr
          v-for="item in order.data.orders"
          :key="item.name"
          class="font-oswald uppercase text-2xl border-b"
        >
          <td class="py-10">
            {{ item.name }}
          </td>
          <td class="text-right">
            {{ item.price.toFixed(2) }}
          </td>
          <td class="text-center">
            {{ item.quantity }}
          </td>
          <td class="text-right">
            RM {{ (item.price * item.quantity).toFixed(2) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orders: [],
    };
  },

  mounted() {
    this.$axios.get('/.netlify/functions/readorders').then((response) => {
      this.orders = response.data;
    });
  },
};
</script>
