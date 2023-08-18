<script setup>
import { defineEmits, defineProps } from 'vue'
const props = defineProps(['isOpen'])
const emits = defineEmits('close')
const closeDialog = () => {
    emits('close', false)
}
</script>

<template>
    <div class="black-bg">
        <button @click="closeDialog" class="close">Ｘ</button>
    </div>
</template>

<style scoped>
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  backdrop-filter: blur(10px);
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
