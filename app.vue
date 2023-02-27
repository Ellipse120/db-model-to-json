<template>
  <div class="text-white bg-black text-4xl text-center p-8">上传Model文件</div>

  <div class="my-4">
    <label for="upload" class="flex flex-col items-center gap-2 cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-16 w-16 fill-white stroke-indigo-500"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>

      <span class="text-gray-600 font-medium">上传文件</span>
    </label>

    <div class="flex flex-col items-center justify-center">
      <ul
        class="my-4 bg-light-200border border-gray-200 rounded overflow-hidden shadow-md"
      >
        <li
          class="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out"
        >
          {{ file?.name || "暂无" }}
        </li>
      </ul>

      <button class="bg-blue-500 text-white p-4 rounded" @click="submit">
        Upload
      </button>
    </div>

    <input
      class="hidden"
      id="upload"
      type="file"
      multiple
      @change="handleFileSelection($event)"
    />
  </div>

  <file-list />
</template>

<script setup>
import "@unocss/reset/tailwind.css";

let file = ref();
const handleFileSelection = (event) => {
  let uploadedFile = event.target.files?.[0];
  file.value = uploadedFile;
};

const submit = async () => {
  let formData = new FormData();

  formData.append("files", file.value);

  await useFetch("/api/upload", {
    method: "POST",
    body: formData,
  });
};
</script>
