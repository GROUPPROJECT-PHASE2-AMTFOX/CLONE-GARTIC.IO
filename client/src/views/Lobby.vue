<template>
  <div class="lobby">
    <div class="lobby-header">
      <h2 class="haha">
        <strong>Welcome, {{ username }}</strong>
      </h2>
    </div>
    <div class="lobby-body container">
      <div class="card-height justify-content-around">
        
        <div class="form-create">
            <h2>Create A Room</h2>
          <form @submit.prevent="createRoom">
            <input type="text" v-model="roomName" placeholder="Enter Room Name" class="create-room-form-input" />
            <br />
            <button class="big-button" type="submit">Create Room</button>
          </form>
        </div>
        <div class="or">
            <h1>or</h1>
        </div>
        <div class="join-room">
           <h2>Join A Room</h2>
           <div class="room-list">
               <div class="room justify-content-between" v-for="(room,index) in rooms" :key="index">
                   <div class="room-name mt-2">
                      <p class="mx-auto"><strong>{{room.name}}</strong></p> 
                   </div>
                   <div>
                   <button type="button" class="btn btn-primary ml-5" @click="joinRoom(room.name)">Join</button>
                   </div>
               </div>
               
               <!-- <div class="room justify-content-between">
                   <div class="room-name mt-2">
                      <p class="mx-auto"><strong>Fun FUn</strong></p> 
                   </div>
                   <div>
                   <button type="button" class="btn btn-primary ml-5">Join</button>
                   </div>
               </div>
               <div class="room justify-content-between">
                   <div class="room-name mt-2">
                      <p class="mx-auto"><strong>Fun FUn</strong></p> 
                   </div>
                   <div>
                   <button type="button" class="btn btn-primary ml-5">Join</button>
                   </div>
               </div>
               <div class="room justify-content-between">
                   <div class="room-name mt-2">
                      <p class="mx-auto"><strong>Fun FUn</strong></p> 
                   </div>
                   <div>
                   <button type="button" class="btn btn-primary ml-5">Join</button>
                   </div>
               </div>
               <div class="room justify-content-between">
                   <div class="room-name mt-2">
                      <p class="mx-auto"><strong>Fun FUn</strong></p> 
                   </div>
                   <div>
                   <button type="button" class="btn btn-primary ml-5">Join</button>
                   </div>
               </div>
               <div class="room justify-content-between">
                   <div class="room-name mt-2">
                      <p class="mx-auto"><strong>Fun FUn</strong></p> 
                   </div>
                   <div>
                   <button type="button" class="btn btn-primary ml-5">Join</button>
                   </div>
               </div>
                -->
               
           </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
      this.$router.push(`/game/${data}`)

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
    this.$store.dispatch('updateRooms')
  }
}
</script>

<style>

.lobby {
  max-height: 100%;
}

.card-height {
  height: 500px;
  background: transparent;
  padding-top: 5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.room{
    display: flex;
}



.room.name {
    
    align-items: center;
}

.room-list{
    display: flex;
    flex-direction: column;
    max-height: 200px;
    overflow: auto;
    width: 250px;
}

.create-room-form-input {
  font-family: "Roboto", sans-serif;
  color: #333;
  font-size: 1.2rem;
  margin: 0 auto;
  padding: 1.5rem 2rem;
  border-radius: 1rem;
  background-color: rgb(255, 255, 255);
  border: none;
  width: 90%;
  height: 15px;
  display: block;
  border-bottom: 0.3rem solid transparent;
  transition: all 0.3s;
}
</style>