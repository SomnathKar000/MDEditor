<script setup>
import Github from "../assets/GitHub.vue";
import LightIcon from "../assets/LightIcon.vue";
import DarkIcon from "../assets/DarkIcon.vue";
import { useMarkdownStore } from "../stores/markdown";
import { ref } from "vue";

const markdownCode = useMarkdownStore();

const copyText = ref("Copy");
let timeoutData = null;

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
    <div class="extra-btns">
      <LightIcon
        v-if="markdownCode.isDarkMode"
        @click="markdownCode.toggleMode"
      />
      <DarkIcon v-else @click="markdownCode.toggleMode" />
      <Github @click="handleGithubClick" />
    </div>
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
  .extra-btns {
    display: flex;
    align-items: center;
    gap: 8px;
    svg {
      cursor: pointer;
    }
  }
}
</style>
