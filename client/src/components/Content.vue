<template lang="html">
  <div class="container">
    <Login></Login>
    <div class="container">
      <div class="row">
        <div class="col-sm-6 col-md-6">
          <div class="panel panel-default">
            <div class="panel-body">
              Status : 
            </div>
          </div>
          <div class="thumbnail">
            <img :src="display " alt="">
            <div class="caption">
              <!-- <h3>Player Name: {{anArray[1].name}}</h3> -->
              <p>
                <button class="btn btn-danger tombol" type="button" name="button" @click="clickRock">Rock</button> 
                <button class="btn btn-info tombol" type="button" name="button" @click="clickPaper">Paper</button> 
                <button class="btn btn-primary tombol" type="button" name="button" @click="clickScissors">Scissors</button> 
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-6">
          <div class="panel panel-default">
            <div class="panel-body">
              Status : 
            </div>
          </div>
          <div class="thumbnail">
            <img :src="display " alt="">
            <div class="caption">
              <!-- <h3>Player Name: {{anArray[0].name}}</h3> -->
              <p>
                <button class="btn btn-danger tombol" type="button" name="button" @click="clickRock">Rock</button> 
                <button class="btn btn-info tombol" type="button" name="button" @click="clickPaper">Paper</button> 
                <button class="btn btn-primary tombol" type="button" name="button" @click="clickScissors">Scissors</button> 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Login from '@/components/Login'
export default {
  components: {Login},
  data () {
    return {
      rock: 'https://static01.nyt.com/images/2011/08/21/magazine/21mag-abstractimages-slide-XOE4/21mag-abstractimages-slide-XOE4-jumbo.jpg',
      scissors: 'https://static01.nyt.com/images/2011/08/21/magazine/21mag-abstractimages-slide-IRQ1/21mag-abstractimages-slide-IRQ1-jumbo.jpg',
      paper: 'https://static01.nyt.com/images/2011/08/21/magazine/21mag-abstractimages-slide-2T4N/21mag-abstractimages-slide-2T4N-jumbo.jpg',
      display: 'https://media.tenor.com/images/d6cd5151c04765d1992edfde14483068/tenor.gif'
    }
  },
  firebase: function () {
    return {
      anArray: this.$firebaseDB.ref('player_data/')
    }
  },
  methods: {
    clickRock () {
      this.display = this.rock
    },
    clickPaper () {
      this.display = this.paper
    },
    clickScissors () {
      this.display = this.scissors
    }
  }
}
</script>

<style lang="css">
</style>
