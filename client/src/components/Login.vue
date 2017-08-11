<template lang="html">
  <div>
    <div class="row">
      <div class="col-md-4 col-md-offset-4">
        <div class="form-group">
          <label class="control-label">Input Your Name</label>
          <div class="input-group">
            <input type="text" class="form-control" v-model="name">
            <span class="input-group-btn">
              <button @click="Playerdata()" class="btn btn-primary" type="button">Start</button>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: ''
    }
  },
  methods: {
    Playerdata: function () {
      // this.$firebaseDB.ref('player_data/1').child('name').set(this.name)
      // console.log(this.name)
      this.$firebaseDB.ref('/').once('value', (snapshot) => {
        var playerObj = snapshot.child('player_data')
        var num = playerObj.numChildren()
        var player
        if (num === 0) {
          player = 1
          this.addPlayer(player)
        } else if (num === 1 && playerObj.val()[2] !== undefined) {
          player = 1
          this.addPlayer(player)
        } else if (num === 1) {
          player = 2
          this.addPlayer(player)
        }
      })
    },
    addPlayer: function (count) {
      var userRef = this.$firebaseDB.ref('player_data/').child(count)
      userRef.onDisconnect().remove()
      userRef.set({
        'name': this.name,
        'wins': 0,
        'losses': 0
      })
    }
  },
  create () {
    this.Playerdata()
  }
}
</script>

<style lang="css">
</style>
