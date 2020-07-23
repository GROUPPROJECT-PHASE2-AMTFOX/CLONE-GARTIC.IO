<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
<<<<<<< HEAD
    <table>
    <thead>
      <tr>
        <th>Nama Room </th>
        <th>Admin </th>
        <th>Options </th>
      </tr>
      <tbody>
        <tr v-for="(room,index) in rooms" :key="index">
          <td> {{room.name}} </td>
          <td> {{room.admin}} </td>
          <td> <button @click="joinRoom(room.name)">Join</button> </td>
          </tr>
      </tbody>
    </thead>
   </table>
   
    <label>Nama Room :</label>
    <input type="text" v-model="roomName">
    <button @click="createRoom">Create Room</button>
    <br>
    <button @click="logout">Logout</button>
=======
    <h2> ini data {{users}} </h2>
    <button @click.prevent="logout">Logout</button>
>>>>>>> df574732c0e3230080d47df2fd7b2d11779f6570
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      username: localStorage.username,
      roomName:'',
    }
  },
  computed: {
    users () {
      return this.$store.state.users
    },
    rooms (){
      return this.$store.state.rooms
    }
  },
  methods: {
    logout () {
      this.$router.push({ name: 'Login' })
      localStorage.clear()
    },
    joinRoom(data){
      let payload ={
        roomName:data,
        userName:localStorage.username
      }
      this.$store.dispatch('joinRoom',payload)
      this.$router.push(`/lobby/${data}`)

    },
    createRoom(){
  let payload = {
    roomName : this.roomName,
    admin : localStorage.username
    }
      this.$store.dispatch('createRoom',payload)
      this.roomName=''
   }
  },
  created () {
    // this.$store.dispatch('updateUsers')
 
    this.$store.dispatch('updateRooms')
  }
}
</script>
