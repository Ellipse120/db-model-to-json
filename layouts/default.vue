<script setup></script>

<template>
  <div class="bg-black text-2xl">
    <NuxtLink to="/">
      <span class="text-white">首页</span>
    </NuxtLink>
    <NuxtLink to="/files">
      <span class="text-white">XML2JS</span>
    </NuxtLink>
  </div>
  <slot />
</template>

<style>
.router-link-active {
  background-color: rgb(0, 47, 255);
}
</style>
