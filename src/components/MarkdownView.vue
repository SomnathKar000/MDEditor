<script setup>
import { useMarkdownStore } from "../stores/markdown";
import { ref, defineExpose } from "vue";

const previewContainer = ref(null);

const markdownStore = useMarkdownStore();

defineExpose({ previewContainer });
</script>

<template>
  <div ref="previewContainer" class="editor-view custom-scrollbar">
    <div
      class="preview"
      :class="{ 'light-mode': !markdownStore.isDarkMode }"
      v-html="markdownStore.getParedMarkdownData"
    ></div>
  </div>
</template>

<style lang="scss">
.preview {
  &.light-mode {
    h1,
    h2,
    h3 {
      color: #333;
    }
  }
  h1,
  h2,
  h3 {
    border-bottom: 1px solid #d0d7deb3;
    padding-bottom: 0.3rem;
  }

  pre {
    background: #272822;
    color: #f8f8f2;
    padding: 10px;
    border-radius: 5px;
    overflow-x: auto;
    code {
      background-color: inherit !important;
      padding: none !important;
    }
  }

  img {
    max-width: 100%;
    border-radius: 5px;
  }

  a {
    color: #007bff;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  blockquote {
    border-left: 0.25em solid #d0d7de;
    padding: 0 1rem;
  }
  code {
    border-radius: 6px;
    background-color: #afb8c133;
    padding: 3px 6px;
  }
}
</style>
