<template>
<div class="seating">
    <h3> {{ msg }} </h3>

<table-group
  :items="items"
  tableNbr="1"/>

  <table-group
  :items="items"
  tableNbr="2"/>

  <table-group
  :items="items"
  tableNbr="3"/>

</div>
</template>

<script>
//import Chair from '@/components/Chair'
import TableGroup from '@/components/TableGroup'

export default {
  name: 'Seating',
  props: {
    msg: String
  }
}
</script>
