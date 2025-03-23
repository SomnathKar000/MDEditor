<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import MarkdownPreview from "../components/MarkdownView.vue";
import MarkdownEditor from "../components/MarkdownEditor.vue";
import Navbar from "../components/Navbar.vue";
import { useMarkdownStore } from "../stores/markdown";

const editorRef = ref(null);
const previewRef = ref(null);

const markdownStore = useMarkdownStore();

const syncScroll = (source, target) => {
  if (!source || !target || !markdownStore.syncScroll) return;
  const scrollPercentage =
    source.scrollTop / (source.scrollHeight - source.clientHeight);
  target.scrollTop =
    scrollPercentage * (target.scrollHeight - target.clientHeight);
};

onMounted(() => {
  if (editorRef.value && previewRef.value) {
    const editorContainer = editorRef.value.editorContainer;
    const previewContainer = previewRef.value.previewContainer;

    if (editorContainer && previewContainer) {
      editorContainer.addEventListener("scroll", () =>
        syncScroll(editorContainer, previewContainer)
      );
      previewContainer.addEventListener("scroll", () =>
        syncScroll(previewContainer, editorContainer)
      );
    }
  }
});

onUnmounted(() => {
  if (editorRef.value && previewRef.value) {
    const editorContainer = editorRef.value.editorContainer;
    const previewContainer = previewRef.value.previewContainer;

    if (editorContainer && previewContainer) {
      editorContainer.removeEventListener("scroll", () =>
        syncScroll(editorContainer, previewContainer)
      );
      previewContainer.removeEventListener("scroll", () =>
        syncScroll(previewContainer, editorContainer)
      );
    }
  }
});
</script>

<template>
  <div>
    <Navbar />
    <div class="editor-box">
      <MarkdownEditor ref="editorRef" />
      <MarkdownPreview ref="previewRef" />
    </div>
  </div>
</template>

<style lang="scss">
.editor-box {
  height: 95vh;
  padding-left: 5px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;

  .editor-code {
    grid-area: 1 / 1 / 2 / 2;
    border-right: 8px solid #eee;
  }
  .editor-view {
    padding-left: 8px;
    word-break: break-word;
    grid-area: 1 / 2 / 2 / 3;
  }
  .custom-scrollbar {
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.3);
      border-radius: 10px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }
  }
}
</style>
