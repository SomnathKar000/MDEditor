import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { marked } from "marked";
import demo from "./../../demo.md?raw";

export const useMarkdownStore = defineStore("useMarkDownStore", () => {
  const markdownCode = ref(demo);
  const syncScroll = ref(false);

  const getParedMarkdownData = computed(() => marked(markdownCode.value));

  function updateMarkedDownCode(code = "") {
    markdownCode.value = code;
  }
  function copyMarkdownCode() {
    navigator.clipboard.writeText(markdownCode.value);
  }
  function resetCode() {
    markdownCode.value = demo;
  }

  return {
    markdownCode,
    getParedMarkdownData,
    syncScroll,
    updateMarkedDownCode,
    copyMarkdownCode,
    resetCode,
  };
});
