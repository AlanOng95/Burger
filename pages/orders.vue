<template>
  <div>
    <div>
      <MainMenuList header="Orders" />
    </div>

    <div v-if="user === null" id="login" class="text-center mt-20">
      <p>This page is limited to authorized user only.</p>
      <button
        class="
          font-oswald
          uppercase
          bg-red-500
          text-white text-center
          py-3
          px-8
          mt-5
        "
        @click="login"
      >
        Login
      </button>
    </div>

    <div v-if="user" id="logout" class="text-center mt-20">
      <button
        class="
          font-oswald
          uppercase
          bg-red-500
          text-white text-center
          py-3
          px-8
        "
        @click="logout"
      >
        Logout
      </button>
    </div>

    <table
      v-for="order in orders"
      :key="order.id"
      class="table-auto w-2/3 mt-20 mx-auto mb-20"
    >
      <thead>
        <tr>
          <td colspan="4">
            <h1 class="font-oswald uppercase text-2xl pb-10">
              Order ID - {{ order.id }}
            </h1>
          </td>
        </tr>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-right">Price</th>
          <th>Quantity</th>
          <th class="text-right">Total</th>
        </tr>
      </thead>
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
      user: {},
    };
  },

  head() {
    return {
      script: [
        {
          src: 'https://identity.netlify.com/v1/netlify-identity-widget.js',
        },
      ],
    };
  },

  mounted() {
    this.user = window.netlifyIdentity.currentUser();
    if (this.user) {
      this.readOrders();
    }
  },

  methods: {
    readOrders() {
      this.$axios
        .get('/.netlify/functions/readorders', {
          headers: {
            Authorization: `Bearer ${this.user.token.access_token}`,
          },
        })
        .then((response) => {
          this.orders = response.data;
        });
    },

    login() {
      window.netlifyIdentity.open();
      window.netlifyIdentity.on('login', (user) => {
        this.user = user;
        this.readOrders();
      });
    },

    logout() {
      window.netlifyIdentity.logout();
      this.user = null;
      this.orders = [];
    },
  },
};
</script>
