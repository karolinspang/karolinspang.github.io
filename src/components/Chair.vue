<template>
      <div class="chair-div"
      :style="styleObject" >
      <div class="inner-chair" 
        :style="styleObject" 
        @mouseenter="updateHoverState(true)" 
        @mouseleave="updateHoverState(false)" 
      >
      <persons-chair :name="name"/>

      </div>
    </div>
</template>

<script>
import PersonsChair from '@/components/PersonsChair'

export default {
    name: 'Chair',
    components: {
        PersonsChair
    },
    data: function() {
        return {
            button: {
                colorBackdHover: this.color
            },
            hoverState: false
        };
    },
    props: ['name', 'color'],
    computed: {
        styleObject() {
            var modifier = '';
            if (this.hoverState) {
                modifier = 'Hover';
            }
            return {
                backgroundColor: this.button['colorBackd' + modifier]
            };
        }
    },
    methods: {
        updateHoverState(isHover) {
            this.hoverState = isHover;
        }
    }
};
</script>

<style scoped>
.chair-div {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    border: solid 0.5px;
    border-color: white;
    background: #d6d6ce;
    float: left;
    margin: 10px;
}

.inner-chair {
    position: relative;
    border-radius: 50%;
    width: 80%;
    height: 80%;
    top: 9%;
    left: 9%;
    border: solid 0.5px;
    border-color: white;
}
</style>
