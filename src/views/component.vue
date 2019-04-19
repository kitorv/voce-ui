<template>
  <div class="k-v-compoent">
    <!-- top -->
    <div class="k-v-compoent--top">
      <div class="k-v-compoent--logo">
        <img src="../assets/images/kv-ui.jpg">
      </div>
      <a class="k-v-component--github"
         href="https://github.com/kitorv/kv-web-components">
        <i class="k-v-icon-github"></i>
      </a>
    </div>
    <!-- content -->
    <div class="k-v-conpoenent--content">
      <div class="k-v-conpoenent--left">
        <h3 class="k-v-conpoenent--group">Title</h3>
        <router-link class="k-v-conpoenent--link"
                     to="/">Link</router-link>
        <router-link class="k-v-conpoenent--link"
                     to="/1">Link</router-link>
        <router-link class="k-v-conpoenent--link"
                     to="/2">Link</router-link>
        <router-link class="k-v-conpoenent--link"
                     to="/3">Link</router-link>
      </div>
      <div class="k-v-conpoenent--page">
        <div class="k-v-conpoenent--view"></div>
      </div>
    </div>
  </div>
  <!-- 


      <div class="view-home--page">
        <div class="view-home--content">
          <router-view></router-view>
        </div>
      </div>
    </div> -->
</template>

<script>
export default {};
</script>

<style lang="scss">
.k-v-compoent {
  position: relative;
}

.k-v-compoent--top {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 20;
  height: 65px;
  width: 100%;
  padding: 6px 16px;
  background-color: #fff;
  box-sizing: border-box;
  transition: all 0.3s ease;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.04);
}

.k-v-compoent--logo {
  vertical-align: middle;
  height: 65px;
  line-height: 65px;
  display: inline-block;
  padding-right: 15px;

  > img {
    height: 50px;
  }
}

.k-v-component--github {
  color: #444444;
  font-size: 40px;
  position: fixed;
  right: 40px;
  top: 10px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.2);
  }
}

.k-v-conpoenent--content {
  padding-top: 65px;
}

.k-v-conpoenent--left {
  position: fixed;
  z-index: 30;
  margin: 0;
  top: 65px;
  left: 0;
  bottom: 0;
  box-sizing: border-box;
  overflow-y: auto;
  width: 240px;
  font-size: 14px;
  background-color: #f5f7fb;
  margin: 0;
  padding: 14px 0;
}

.k-v-conpoenent--group {
  color: #333333;
  font-size: 16px;
  padding-left: 16px;
  margin-top: 0;
  margin-bottom: 4px;
  box-sizing: border-box;
  height: 40px;
  line-height: 40px;
  font-weight: bold;
}

.k-v-conpoenent--link {
  position: relative;
  display: inline-block;
  color: #444444;
  border-left: 4px solid transparent;
  padding: 8px 16px 8px 20px;
  line-height: 1.5;
  width: 100%;
  box-sizing: border-box;
  transition: all 0.3s ease;
  font-size: 14px;
  text-decoration: none;

  &:hover {
    color: #5b3cc4;
  }
}

.router-link-exact-active {
  font-weight: 600;
  border-left-color: #5b3cc4;
  color: #5b3cc4;
  font-weight: bold;
  background-color: #ede8ff;
  opacity: 1;
}

.k-v-conpoenent--page {
  padding-left: 240px;
  background-color: #fdfdfd;
}

.k-v-conpoenent--view {
  max-width: 1000px;
  padding: 25px 50px 60px 50px;
  margin: 0 auto;
}
</style>
