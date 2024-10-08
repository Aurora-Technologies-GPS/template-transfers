<template>
  <div class="windows_Page">




    <!-- <HeaderComponet/> -->
    <!-- <DashBoard/> -->

    <NewDashBord />

    
  </div>

</template>
<script>

//import {ref} from 'vue'

 // import HeaderComponet from './HeaderComponet.vue'
  import NewDashBord from './NewDashBord.vue'




export default {
  //props: [],
  components: {
   // HeaderComponet,
    //DashBoard,
    NewDashBord
  },
  setup() { //  setup(props) 

    // let hash=ref("defecto")
    
    //let saludo = "hola mundo"

    ///console.log(props)


    return {
      //DashBoard //,hash
      NewDashBord
    }
  },
  mounted() {

    // this.hash=this.$route.params.hash
    // console.log(this.$route.params.hash)
  }

}


</script>

<style scoped>
  .windows_Page{
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

  }
</style>