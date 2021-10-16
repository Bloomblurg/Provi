<template>

<div class="p-grid grid">
	<div class="p-col">
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec quam lectus. Aenean ullamcorper dolor nec lorem aliquet porta. Ut massa purus, semper vel eleifend ut, rhoncus et enim. Donec libero metus, sollicitudin id risus non, ultricies maximus tortor. Sed ut fringilla risus, non feugiat enim. Nullam non eros sollicitudin, fermentum justo vitae, pulvinar urna. Donec facilisis quis purus eu ullamcorper. Nullam condimentum nisi vel dolor malesuada bibendum. Ut id nunc blandit mauris elementum malesuada. Aliquam eleifend malesuada mi, et hendrerit massa porttitor id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vitae sapien metus. Aliquam vulputate laoreet pellentesque.</p>
    
    <p>{{ $axios.defaults.baseURL }}</p>
	</div>
</div>

</template>
<style scoped>
.grid{
  margin: 30px;
}
</style>
<script>

export default {
    name: 'Landing',

    data(){
      return{
       
      }
    },
  }
</script>
