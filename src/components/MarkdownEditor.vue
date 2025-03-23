<script setup>
import { Codemirror } from "vue-codemirror";
import { markdown } from "@codemirror/lang-markdown";
import { useMarkdownStore } from "../stores/markdown";
import { ref, defineExpose } from "vue";
import { EditorView } from "@codemirror/view";

const markdownStore = useMarkdownStore();

const editorContainer = ref(null);

const extensions = [markdown(), EditorView.lineWrapping];

defineExpose({
  editorContainer,
});
</script>

<template>
  <div ref="editorContainer" class="editor-code custom-scrollbar">
    <div>
      <Codemirror
        v-model="markdownStore.markdownCode"
        :extensions="extensions"
        :autofocus="true"
        :indent-with-tab="true"
        :tab-size="2"
        class="code-minor-editor"
        @update:model-value="markdownStore.updateMarkedDownCode"
      />
    </div>
  </div>
</template>
