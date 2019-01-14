var app = new Vue({ 
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
});

/****************** COMPONENTS *******************  */


Vue.component('chair', {
  props: ['name','color'],
  template: ` <div class="chair-div"
       :style="styleObject" >
        <div class="inner-chair" 
       :style="styleObject" 
        @mouseenter="updateHoverState(true)" 
        @mouseleave="updateHoverState(false)" 
     >
     
     <persons-chair :name="name"></persons-chair>

     </div>
</div>`,
  data() {
    return {
      button: {
        colorBackdHover: this.color,
      },
      hoverState: false
    };
  },
  computed: {
    styleObject() {
      var modifier = '';
      if (this.hoverState)
        modifier = 'Hover';
        
      return {
        backgroundColor: this.button['colorBackd' + modifier],
      };
    },
  },
  methods: {
    updateHoverState(isHover) {
      this.hoverState = isHover;
    }
  }
});


/** represents a person on a chair ...  */

Vue.component('persons-chair', {
   props: { 
    name: {
      type: String,
      default: 'Name'
    },
   },
  data: function(){
    return { 
      t_edit: false,  // determines if the textfield is editable or not
      tempName: this.name // store a temporary name in order not to pass data up to parent (via props)
    }
  },

  template: 

  `<div v-if="!t_edit"
   @click="t_edit=true">

      <span class="tooltiptext" @click="t_edit=true">
      {{ tempName }}
      </span>

   </div>

  <div v-else
    @keyup.enter="t_edit=false">   
    <input class="tooltiptext" v-model="tempName"></input>
  </div>`
})

/** represents a table-group ...  */ 

Vue.component('circle-table-group', {
  props: ['persons', 'tableNbr'],
  template: `<div class="wrapper">
    <chair
      v-for="person in persons"
       :key="person.index"
      v-bind:name="person.name"
     v-bind:color="person.color"
   ></chair>  

  <div class="circle-table-div">{{tableNbr}}</div>

</div> `
})

/****************** VUES *******************  */


var chairGroup_1 = new Vue({ 
  el: '#chair-group-1', 
  data: {
    tableNbr: 1
  } 
});

var chairGroup_2 = new Vue({
  el: "#chair-group-2", 
  data: {
    tableNbr: 2,
    persons: [

      // this works, but keys(name) are not unique

      // { name: 'Anna', color: '#f5abd0'},
      // { name: 'Stine', color: '#f5abd0'},
      // // { name: 'Göran', color: '#f5abd0'},
      // { name: 'Brita', color: '#f5abd0'},
      // { name: 'Herman', color: '#f5abd0'}

      { index:0, name: 'Anna', color: '#6b5b95'},
      { index:1, name: 'Stine', color: '#feb236'},
      { index:2, name: 'Brita', color: '#d64161'},
      { index:3, name: 'Herman', color: '#ff7b25'}
    ]
  }
})

var chairGroup_5 = new Vue({
  el: "#chair-group-5",
  data: {
    persons: [

      { index:0, name: 'Frida', color: '#6b5b95'},
      { index:1, name: 'Greta', color: '#feb236'},
      { index:2, name: 'Robert', color: '#d64161'},
      { index:3, name: 'Östen', color: '#ff7b25'},
      { index:4, name: 'Sven', color: '#ff7b25'},
      { index:5, name: 'Abbe', color: '#ff7b25'}

    ]
  }
})

var chairGroup_4 = new Vue({
  el: "#chair-group-4",
  data: {
    persons: [

      { index:0, name: 'Elsa', color: '#6b5b95'},
      { index:1, name: 'Stig', color: '#feb236'},
      { index:2, name: 'Bror', color: '#d64161'},
      { index:3, name: 'Kasper', color: '#ff7b25'},
      { index:4, name: 'August', color: '#ff7b25'},
      { index:5, name: 'Egon', color: '#ff7b25'}

    ]
  }
})


var chairGroup_3 = new Vue({
  el: "#chair-group-3",
  data: {
    persons: [

      { index:0, name: 'Sam', color: '#6b5b95'},
      { index:1, name: 'Seif', color: '#feb236'},
      { index:2, name: 'William', color: '#d64161'},
      { index:3, name: 'Anton', color: '#ff7b25'}
    ]
  }

})
