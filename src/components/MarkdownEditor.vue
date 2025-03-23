<script setup>
import { Codemirror } from "vue-codemirror";
import { markdown } from "@codemirror/lang-markdown";
import { useMarkdownStore } from "../stores/markdown";
import { ref, defineExpose, computed } from "vue";
import { EditorView } from "@codemirror/view";
import { oneDark } from "@codemirror/theme-one-dark";

const markdownStore = useMarkdownStore();

const editorContainer = ref(null);

const computedExtensions = computed(() => {
  const extensions = [markdown(), EditorView.lineWrapping];
  if (markdownStore.isDarkMode) {
    extensions.push(oneDark);
  }
  return extensions;
});

defineExpose({
  editorContainer,
});
</script>

<template>
  <div
    ref="editorContainer"
    class="editor-code custom-scrollbar"
    :class="[markdownStore.isDarkMode ? 'dark-borer' : 'light-border']"
  >
    <div>
      <Codemirror
        v-model="markdownStore.markdownCode"
        :extensions="computedExtensions"
        :autofocus="true"
        :indent-with-tab="true"
        :tab-size="2"
        class="code-minor-editor"
        @update:model-value="markdownStore.updateMarkedDownCode"
      />
    </div>
  </div>
</template>
