<script setup></script>

<template>
  <div class="loader">
    <div class="lds-ripple">
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables';
.loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
}

.lds-ripple {
  display: inline-block;
  position: relative;
  width: 160px;
  height: 160px;
}

.lds-ripple div {
  position: absolute;
  border: 8px solid $primary;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}

.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}

@keyframes lds-ripple {
  0% {
    top: 72px;
    left: 72px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  4.9% {
    top: 72px;
    left: 72px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  5% {
    top: 72px;
    left: 72px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    width: 144px;
    height: 144px;
    opacity: 0;
  }
}
</style>
