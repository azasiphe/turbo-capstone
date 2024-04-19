<template lang="">
    <footer >
  <p class="copyNexa pb-3">Turbo Autos &copy{{currYear}}</p>
  </footer>
  </template>
  <script>
  export default {
      data(){
        return{
          currYear: new Date().getFullYear()
        }
      }
  }
  </script>
  <style scoped>

      .footNexa{
      color: #D9D9D9;
      border-top: 1px solid #D9D9D9;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 400px;
      padding: 1rem ;
      background-color: #040B13;
      
    }
    .copyNexa{
      color: #D9D9D9;
      text-align: center;
      margin: 0;
      background-color: #040B13;
    }
    @media (max-width:1024px) {
      .footNexa{
        gap:200px;
      }
    }
    @media (min-width:480px) and (max-width:786px){
      .footNexa{
        gap:80px;
      }
    }
    @media (min-width:300px) and (max-width:480px){
      .footNexa{
        gap:40px;
      }
      .footH{
        font-size: 16px
      }
      .nav-link{
        font-size: 13px;
      }
      .fa{
       font-size: 15px;
      }
      .driveLogo{
      width: 90px;
  }
    }
  </style>