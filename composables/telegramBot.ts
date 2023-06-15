export function useTelegramBot() {
  const item = ref({
    title: "",
    description: "",
  });
  const loading = ref(false);
  const params = unref(item);
  async function submit() {
    loading.value = true;

    const { data: contact } = await useFetch("/api/contact", {
      body: { ...params },
      method: "post",
    });
    loading.value = false;
  }

  return {
    item,
    loading,
    submit,
  };
}
