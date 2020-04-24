<template>
  <div class="v-index">
    <div class="v-index--header">
      <div class="v-index--header-title">Veco</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.v-index--header {
  position: fixed;
  top: 0;
  left: 0;
  height: 3rem;
  padding: 0.4rem 1rem;
  line-height: 1.5rem;
  position: relative;
  background: #fff;
  z-index: 1200;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.04);
}

.v-index--header-title {
  font-size: 22px;
  font-weight: 700;
}
</style>
