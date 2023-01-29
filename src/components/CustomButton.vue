<template>
  <button type="button" class="btn btn-outline-dark">
    <slot name="left-icon"></slot>
    <slot></slot>
    <slot name="right-icon"></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "CustomButton",
});
</script>
<style>
button {
  margin-left: auto;
  margin-right: auto;
  display: flex;
  color: thistle;
  border-style: solid;
  border-color: thistle;
  border-radius: 5px;
  width: fit-content;
  background-color: gray;
  justify-content: flex-end;
}
</style>
