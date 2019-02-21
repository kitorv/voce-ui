<template>
  <div class="view-home">
    <div class="view-home--content">
      <div class="view-home--title">VUE-DATAGRID</div>
      <div class="view-home--desc">满足各种复杂场景，高度可定制化表格组件</div>
      <div>
        <router-link class="view-home--link"
                     to="/">开始使用</router-link>
        <router-link class="view-home--link"
                     to="/">Github</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.view-home {
  position: relative;
  height: 100%;
  width: 100%;
}

.view-home--content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.view-home--title {
  font-size: 48px;
  font-weight: bold;
  white-space: nowrap;
}

.view-home--desc {
  font-size: 25px;
}

.view-home--link {
  display: inline-block;
  height: 38px;
  width: 120px;
  border: 1px solid #fff;
  border-radius: 19px;
  color: #fff;
  line-height: 38px;
  letter-spacing: 0.5px;
  text-align: center;
  font-weight: normal;
  margin-right: 10px;
  background: #22ab28;
  border-color: #209425;
}
</style>

