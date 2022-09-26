<template>
  <div class="hello">
    <div>
        <router-link to="/box1">box1</router-link>

        <router-link to="/box2">box2</router-link>
    </div>
    <div class="box1">
      <router-view name="forbox1">forbox1</router-view>
    </div>
    <div class="box2">
      <router-view name="forbox2">forbox2</router-view>
    </div>



  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.box1{
  height: 300px;
  width: 300px;
  border: 1px black solid;
}

.box2{
  height: 300px;
  width: 300px;
  border: 1px black solid;
}
</style>
