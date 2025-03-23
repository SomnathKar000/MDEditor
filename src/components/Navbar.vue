<script setup>
import Github from "../assets/GitHub.vue";
import { useMarkdownStore } from "../stores/markdown";

const markdownCode = useMarkdownStore();

function handleCheckSyncUpdate(e) {
  markdownCode.syncScroll = Boolean(e.target.checked);
}

function handleGithubClick() {
  window.location.href = "https://github.com/SomnathKar000/MDEditor";
}
</script>
<template>
  <div class="navbar">
    <div class="nav-buttons">
      <img src="/logo2.png" width="40px" />
      <button>MDEditor</button
      ><button @click="markdownCode.resetCode">Reset</button
      ><button @click="markdownCode.copyMarkdownCode">Copy</button>
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
