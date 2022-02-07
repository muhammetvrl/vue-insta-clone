<template>
  <div class="container">
    <slot></slot>
  </div>
</template>
<style scoped>
.container {
  max-width: 935px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
}
</style>
