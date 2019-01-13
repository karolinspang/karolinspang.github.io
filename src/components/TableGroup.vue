<template>
  <div>
    <div id="chair-group-5" class="wrapper">
        <chair
        v-for="item in filteredPersons"
        :key="item.index"
        v-bind:name="item.name"
        v-bind:color="item.color"
        />
        <div class="circle-table-div">{{ tableNbr }}</div>
    </div>
  </div>
</template>

<script>
import Chair from '@/components/Chair'

export default {
    name: 'TableGroup',
    components: {
        Chair
    },
    props: ['items', 'tableNbr'],
    computed: {
        filteredPersons: function() {
            return this.items.slice(0, 4);
        }
    }
};
</script>

<style scoped>
.wrapper {
    float: left;
    width: 122.5px;
    margin: 1rem;
}

.circle-table-div {
    position: relative;
    background: #d6d6ce;
    border: solid 1px;
    border-color: white;

    width: 90px;
    height: 90px;
    top: 15px;
    left: 15px;
    text-align: center;
    align-items: center;
    border-radius: 50%;
}

.circle-table-div h3 {
    color: white;
    position: absolute;
    left: 20px;
    top: 20px;
    margin: 10%;
    z-index: 1;
}
</style>
