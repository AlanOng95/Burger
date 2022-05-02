<template>
  <div class="bg-[url('/menu-page.jpg')] px-20">
    <div id="menu" class="grid md:grid-cols-2 py-5">
      <div id="menu-left">
        <NuxtLink to="/">
          <img src="logo.png" class="w-[150px] mx-auto md:mx-0" alt="" />
        </NuxtLink>
      </div>
      <div id="menu-right">
        <ul
          class="
            grid
            md:grid-cols-5
            text-lg
            font-oswald
            text-white text-center
            uppercase
            pt-5
          "
        >
          <li>About Us</li>
          <NuxtLink to="/menu">Our Menu</NuxtLink>
          <li>Locations</li>
          <li>Contacts</li>
          <NuxtLink to="/cart">Cart ({{ $store.getters.totalItems }})</NuxtLink>
        </ul>
      </div>
    </div>
    <h1
      class="text-white font-oswald uppercase text-6xl text-center pt-24 pb-28"
    >
      {{ header }}
    </h1>
  </div>
</template>

<script>
export default {
  props: ['header'],
};
</script>
