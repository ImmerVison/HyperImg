<script setup>
</script>

<template>
<div
  class="bg-white shadow-[0_2px_18px_-6px_rgba(0,0,0,0.2)] w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
  <div class="px-4 my-6">
    <h3 class="text-lg font-semibold">Heading</h3>
    <p class="mt-2 text-sm text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor
      arcu,
      at fermentum dui. Maecenas</p>
    <button type="button"
      class="px-6 py-2 mt-4 rounded text-white text-sm tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600">View</button>
  </div>
</div>
<div>
  <RouterView/>
</div>
<footer>
  this is a footer
</footer>
</template>

<style scoped>

</style>
