<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold text-gray-800 mb-8">สั่งอาหาร</h1>
      <div class="grid grid-cols-2 gap-4">
        <NuxtLink to="/menu" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-lg text-center transition">
          📋 เมนู
        </NuxtLink>
        <NuxtLink to="/order" class="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg text-center transition">
          🛒 รายการสั่ง
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//
</script>
