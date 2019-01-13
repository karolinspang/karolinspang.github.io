<template>
    <div>
        <div v-if="!t_edit"
        @click="t_edit=true">
        <span class="tooltiptext" @click="t_edit=true">
        {{ tempName }}
        </span>
    </div>
    <div v-else
        @keyup.enter="t_edit=false">   
        <input class="tooltiptext" v-model="tempName"/>
    </div>
  </div>
</template>

<script>
export default {
    name: '',
    props: {
        name: {
            type: String,
            default: 'Name'
        }
    },
    data: function() {
        return {
            t_edit: false, // determines if the textfield is editable or not
            tempName: this.name // store a temporary name in order not to pass data up to parent (via props)
        };
    }
};
</script>
<style scoped>
.tooltiptext {
    visibility: hidden;
    width: 70px;

    background-color: #fff;
    color: #9fa9a3;

    text-align: center;
    border-radius: 6px;
    border: solid 1px;
    border-color: #d6d3d3;
    padding: 3px 0;
    position: absolute;
    z-index: 1;
    bottom: 10%;
    left: 50%;
    margin-left: -20px;
    opacity: 0;
    transition: opacity 0.5s;
}

.chair-div:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
}
</style>
