<template>
  <div>
    <div>
      <MainMenuList header="Shopping Cart" />
    </div>

    <table class="table-auto w-2/3 mt-20 mx-auto">
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-right">Price</th>
          <th>Quantity</th>
          <th class="text-right">Total</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="order in $store.state.orders"
          :key="order.name"
          class="font-oswald uppercase text-2xl border-b"
        >
          <td class="py-10">
            {{ order.name }}
          </td>
          <td class="text-right">
            {{ order.price.toFixed(2) }}
          </td>
          <td class="text-center">
            {{ order.quantity }}
          </td>
          <td class="text-right">RM {{ (order.price * order.quantity).toFixed(2) }}</td>
          <td class="text-center">
            <button @click="removeItem(order.name)">❌</button>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr class="font-oswald font-bold text-2xl bg-gray-100 uppercase">
          <td class="py-10" colspan="3">Total</td>
          <td class="text-right">RM {{ total.toFixed(2) }}</td>
          <td />
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    total() {
      let total = 0;
      this.$store.state.orders.forEach((order) => {
        total = total + order.price * order.quantity;
      });

      return total;
    },
  },

  methods: {
    removeItem(name) {
      this.$store.commit('removeItem', name);
    },
  },
};
</script>
