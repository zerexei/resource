<draggable v-model="myArray" tag="transition-group" :component-data="{name:'fade'}">
<!-- TODO: test if v-memo is working and improve performance -->
  <template #item="{element}" v-memo=="element">
    <div>{{element.name}}</div>
  </template>
</draggable>


https://github.com/antoine92190/vue-advanced-chat