<script setup>
import Github from "../assets/GitHub.vue";
import { useMarkdownStore } from "../stores/markdown";
import { ref } from "vue";

const markdownCode = useMarkdownStore();

const copyText = ref("Copy");
const timeoutData = null;

function handleCheckSyncUpdate(e) {
  markdownCode.syncScroll = Boolean(e.target.checked);
}

function handleGithubClick() {
  window.location.href = "https://github.com/SomnathKar000/MDEditor";
}
function handleCopy() {
  if (timeoutData) {
    clearTimeout(timeoutData);
  }
  markdownCode.copyMarkdownCode();
  copyText.value = "Copied!";
  timeoutData = setTimeout(() => {
    copyText.value = "Copy";
  }, 1000);
}
</script>
<template>
  <div class="navbar">
    <div class="nav-buttons">
      <img src="/logo2.png" width="40px" />
      <button>MDEditor</button
      ><button @click="markdownCode.resetCode">Reset</button
      ><button class="copy-btn" @click="handleCopy">{{ copyText }}</button>
      <div class="checkbox">
        <input type="checkbox" @change="handleCheckSyncUpdate" />
        <span>Sync Scroll</span>
      </div>
    </div>
    <Github @click="handleGithubClick" />
  </div>
</template>
<style scoped lang="scss">
.navbar {
  background: #222831;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 8px;
  .nav-buttons {
    display: flex;
    gap: 8px;
    .copy-btn {
      width: 60px;
    }
    button {
      cursor: pointer;
      background: #222831;
      border: none;
      color: #ffffff;
    }
    .checkbox {
      display: flex;
      align-items: center;
      gap: 2px;
      span {
        font-size: 12px;
      }
    }
  }
}
</style>
