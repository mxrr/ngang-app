<template>
    <div class="list">
      <a class="items" v-for="item in items" :key="item.message">
        {{ item.message }}
      </a>
    </div>
</template>

<script>
export default {
  name: 'itemlist',
  data: () => {
    return {
      items: [
        {message: 'nee'},
        {message: 'ke'},
        {message: 'ri'},
        {message: 'nee'},
        {message: 'ke'},
        {message: 'ri'},
        {message: 'nee'},
        {message: 'ke'},
        {message: 'ri'},
        {message: 'nee'},
        {message: 'ke'},
        {message: 'ri'},
        {message: 'nee'},
        {message: 'ke'},
        {message: 'ri'},
        {message: 'nee'},
        {message: 'ke'},
        {message: 'ri'},
        {message: 'nee'},
        {message: 'ke'},
        {message: 'ri'},
        {message: 'nee'},
        {message: 'ke'},
        {message: 'ri'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list {
  margin-top: 2.5rem;
  display: inline-block;
}
.items {
  display: inherit;
  background-color: black;
  padding: 5rem 8rem;
  margin: 5px;
  width: 2rem;
  height: 2rem;
}

</style>
