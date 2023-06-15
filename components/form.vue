<template>
  <div class="max-w-lg mx-auto">
    <form @submit.prevent="submit">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6">
        <div>
          <label
            for="title"
            class="block text-sm font-semibold leading-6 text-gray-900"
          >
            Title
          </label>
          <div class="mt-2.5">
            <input
              v-model="item.title"
              type="text"
              name="title"
              id="title"
              autocomplete="given-title"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label
            for="description"
            class="block text-sm font-semibold leading-6 text-gray-900"
          >
            Description
          </label>
          <div class="mt-2.5">
            <textarea
              v-model="item.description"
              type="text"
              name="description"
              id="description"
              autocomplete="given-description"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            ></textarea>
          </div>
        </div>
        <div class="mt-10">
          <button
            :disabled="loading"
            type="submit"
            class="block w-full rounded-md bg-green-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <template v-if="!loading"> Submit </template>
            <template v-else> Processing... </template>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
const { loading, item, submit } = useTelegramBot();
</script>
