<!-- v-memu: cache an expression -->
<draggable v-model="myArray" tag="transition-group" :component-data="{name:'fade'}">
  <template #item="{element}" v-memo=="element">
    <div>{{element.name}}</div>
  </template>
</draggable>

<!-- preload css -->
<link rel="preload" href="styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="styles.css"></noscript>