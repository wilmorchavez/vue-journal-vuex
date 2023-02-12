<template>
  <div class="entry-container mb-3 pointer p-2"
  @click="$router.push({name:'entry',params:{id:10}})"
 >
 
<div class="entry-title d-flex">
    <span class="text-success fs-5 fw-bold">11</span>
    <span class="mx-1 fs-5">Febrero</span>
    <span class="mx-2 fw-light">2023, sabado</span>

</div>
<div class="entry-description">
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam voluptas pariatur eius cum ab, animi aut quasi accusamus. Accusamus, quis enim? Odio animi dolorem eius numquam inventore quaerat dicta delectus?
</div>
 </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.entry-container{
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;

  &:hover {
    background-color: lighten($color:grey,$amount:45);
  }
}

.entry-descripcion{
  font-size: 12px;
}

</style>