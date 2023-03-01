<script setup>
const fileListRef = ref(null);

const refresh = (v) => {
  console.log(fileListRef.value);
  fileListRef.value?.refresh();
};
</script>

<template>
  <div class="text-white bg-black font-extrabold text-4xl text-center p-4">
    Upload Model File
  </div>

  <upload-file @upload-success="refresh" />

  <file-list ref="fileListRef" />
</template>
