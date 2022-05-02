<template>
  <div>
    <MainMenuList header="Our Menu" />
    <div
      id="items"
      class="
        grid
        md:grid-cols-3
        gap-x-5
        md:gap-y-16
        gap-y-5
        mt-10
        md:mx-20
        mx-5
      "
    >
      <MenuItem v-for="b in items" :key="b.name" :item="b" />
    </div>
  </div>
</template>

<script>
import MainMenuList from '~/components/MainMenuList.vue';
export default {
  components: { MainMenuList },
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    this.$axios.get('items.json').then((response) => {
      this.items = response.data.burgers;
    });
  },
};
</script>
