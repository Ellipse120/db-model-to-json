<script setup>
const { data } = useFetch(`/api/xml2js`, {
  method: "post",
});
</script>

<template>
  <pre>{{ data }}</pre>
</template>
