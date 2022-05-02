<template>
  <div class="border rounded-md border-gray-200 pb-5 mb-5">
    <img :src="image" class="mx-auto" alt="" />
    <h3
      class="
        font-oswald font-medium
        text-2xl
        uppercase
        text-gray-500
        mt-5
        mb-2
        text-center
      "
    >
      {{ title }}
    </h3>
    <p class="font-light text-gray-500 mb-5 text-center">{{ description }}</p>
    <span
      class="
        bg-amber-800
        text-yellow-400
        font-bold
        text-xl
        font-oswald
        rounded-lg
        px-5
        py-2
        text-center
      "
      >RM {{ price }}</span
    >
  </div>
</template>

<script>
export default {
  props: ['image', 'price', 'title', 'description'],
};
</script>
