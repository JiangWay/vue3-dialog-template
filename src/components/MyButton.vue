<script setup>
import { ref } from "vue";
const isOpen = ref(false)
const openDialog = () => {
  console.log('isOpen')
    isOpen.value = true
}

const closeDialog = () => {
  isOpen.value = false
}
</script>

<template>
  <section>
    <button @click="openDialog">open</button>
    <div v-show="isOpen" class="blackBg">
      <button @click="closeDialog" class="close">Ｘ</button>
    </div>
  </section>
</template>

<style scoped>
.blackBg {
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.close {
  cursor:pointer;
  color: white;
  border: 0;
  background: transparent;
  font-size: 16px;
  font-weight: 700;
  position: absolute;
  right: 20px;
  top:20px;
}
</style>
