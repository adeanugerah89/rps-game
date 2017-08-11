<template lang="html">
<div class="Home">
  <div class="container">
    <div class="row">
      <div class="col-md-4 col-md-offset-4" style="margin-top:60px">
        <h1>Rock Paper Scissors</h1>
        <router-link to="/content"><button type="button" class="btn btn-danger">Ready for the Game</button></router-link>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
}
</script>

<style lang="css">

.Home {
  background-image: url('http://denniscooperblog.com/wp-content/uploads/2016/12/rock-paper-scissors.gif');
  background-repeat: no-repeat; 
  background-position: center; 
  position: relative;
  width: 100%;
  height: 840px;
  margin: auto;

}
</style>
