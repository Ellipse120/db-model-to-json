<script setup>
const { data, execute, pending } = await useFetch("/api/files");

const del = async (name) => {
  await useFetch(`/api/files/${name}`, {
    method: "delete",
  });

  execute();
};

const delAll = async () => {
  await useFetch(`/api/files`, {
    method: "delete",
    query: {
      all: true,
    },
  });

  execute();
};

const refresh = execute;

defineExpose({
  refresh,
});
</script>

<template>
  <div class="text-3xl text-center">
    File List
    <button
      class="bg-green-500 text-white text-2xl px-4 py-2 rounded-2xl my-2"
      @click="execute"
    >
      Refresh
    </button>

    <button
      class="bg-red-500 text-white text-2xl px-4 py-2 rounded-2xl m-2"
      @click="delAll"
    >
      Delete All
    </button>
  </div>

  <div v-if="pending">Loading</div>
  <ul v-else class="border border-gray-200 rounded overflow-hidden shadow-md">
    <li
      class="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out"
      v-for="(file, index) in data"
      :key="file + index"
    >
      <div class="flex items-center justify-between">
        <div>
          <span class="mr-2">{{ index + 1 }}.</span>
          <span class="text-blue-500 font-extrabold">{{ file }}</span>
        </div>

        <div>
          <button class="text-red-500 rounded p-2" @click="del(file)">
            删除
          </button>
        </div>
      </div>
    </li>
  </ul>
</template>
