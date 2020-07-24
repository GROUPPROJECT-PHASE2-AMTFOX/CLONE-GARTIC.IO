<template>
  <div class="container game-room">
    <div class="row">
      <div class="col align-self-start player-list mr-5 mb-1">
        <h2 v-if="isFinish"> {{winner}} </h2>
        <p v-if="isPlaying === true">{{roomDetails.jawaban}}</p>
        <button v-if="isPlaying === true" @click="nextQuestion">Next</button>
        <div class="card-container">
          <button v-if="roomDetails.admin === username && isStart===false" @click="startGame">Start Game</button>
          <div v-for="(user,index) in roomDetails.users" :key="index">
            <div class="card">
              <div class="card-body">
                <div class="row player-in-room">
                  <div class="col avatar-player-list">
                    <img src="https://avatars.dicebear.com/api/male/avatar.svg" />
                  </div>
                  <div class="col username-player-list">
                    <strong>
                      <span>{{user.name}}</span>
                      <br />
                      <span>Points : {{user.points}}</span>
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div class="col game-grid">
          <div class="row">
            <div class="canvas mt-3">
              <Canvas></Canvas>
            </div>
          </div>
          
            <div class="col-lg chat-box mt-1  ml-5">
              <div class="chat-answer col mr-2">
                <div class="message-box">
                  <p class="chatlog">
                    <strong>Username:</strong>swan
                  </p>
                  <p class="chatlog">
                    <span>
                      <strong>Username:</strong>bebek
                    </span>
                  </p>
                  <p class="chatlog">
                    <span>
                      <strong>Username:</strong>banteng
                    </span>
                  </p>
                  <p class="chatlog">
                    <span>
                      <strong>Username:</strong>kelinci
                    </span>
                  </p>
                  <p class="chatlog">
                    <span>
                      <strong>Username:</strong>wkwkkwwk
                    </span>
                  </p>
                  <p class="chatlog">
                    <strong>Username:</strong>swan
                  </p>
                  <p class="chatlog">
                    <span>
                      <strong>Username:</strong>bebek
                    </span>
                  </p>
                  <p class="chatlog">
                    <span>
                      <strong>Username:</strong>banteng
                    </span>
                  </p>
                  <p class="chatlog">
                    <span>
                      <strong>Username:</strong>kelinci
                    </span>
                  </p>
                  <p class="chatlog">
                    <span>
                      <strong>Username:</strong>wkwkkwwk
                    </span>
                  </p>
                </div>
                <form @submit.prevent="tebak">
                  <div class="input-box">
                    <input
                      type="text"
                      name="chat"
                      id="chatbox"
                      placeholder="type your answer"
                      style="min-width=200px"
                      v-model="tebakan"
                    />
                    <input type="submit" name="submit" value="submit" />
                  </div>
                </form>
              </div>
            </div>
          
        </div>
      </div>
    </div>
  
</template>

<script>
import Canvas from "./Canvas";
export default {
  components: {
    Canvas,
  },
  data() {
    return {
      username: localStorage.username,
      data: this.$store.state.roomDetail,
      playingNow: false,
      // cursorType: "not-allowed",
      // pointerEvent: "pointer-events:none",
      tebakan: "",
      isStart:false
    };
  },
  methods: {
    startGame() {
      let namaRoom = this.roomDetails.name;
      this.$store.dispatch("startGame", namaRoom);
      this.isStart = true
    },
    nextQuestion() {
      console.log("pertanyaan berikutnya");
      let payload = {
        dataRoom: this.$store.state.roomDetail,
      };
      this.$store.dispatch("nextQuestion", payload);
    },
    drawTime() {
      let localIndex = this.$store.state.roomDetail.index;
      if (localIndex === undefined) {
        console.log("local index undefined");
      } else {
        let player = this.$store.state.roomDetail.users[localIndex].name;
        if (player === localStorage.username) {
          this.pointerEvent = "pointer-event:auto";
        } else {
          this.pointerEvent = "pointer-event:none";
        }
      }
    },
    tebak() {
      console.log(this.tebakan);
      let payload = {
        username: localStorage.username,
        tebakan: this.tebakan,
        roomName: this.$store.state.roomDetail.name,
      };
      this.$store.dispatch("tebakanServer", payload);
    },
  },
  computed: {
    roomDetails() {
      console.log(this.$store.state.roomDetail.users,'dari computed room details')
      return this.$store.state.roomDetail;
    },
    isPlaying() {
      let localIndex = this.$store.state.roomDetail.index;
      if (localIndex === undefined) {
        console.log("local index undefined");
        return false;
      } else {
        let player = this.$store.state.roomDetail.users[localIndex].name;
        if (player === localStorage.username) {
          return true;
        } else {
          return false;
        }
      }
    },
    winner() {
      let dataRoom = this.$store.state.roomDetail;
      let rounds = this.$store.state.roomDetail.rounds;
      let points = 0;
      let winner = "";
      if (rounds === 4) {
        for (let i = 0; i < dataRoom.users.length; i++) {
          if (dataRoom.users[i].points > points) {
            points = dataRoom.users[i].points;
            winner = dataRoom.users[i].name;
          }
        }
      }
      let tampilan = `Winner : ${winner}`;
      return tampilan;
    },
    isFinish(){
      let rounds = this.$store.state.roomDetail.rounds;
      if(rounds === 4){
        return true
      }
      else{
        return false
      }
    }
  },
  created() {
    this.$store.dispatch("hasilTebakan");
    this.$store.dispatch("roomDetail");
    this.$store.dispatch("canvasStroke")
  },
};
</script>

<style>
.game-room {
  display: flex;
}



.player-list {
  background: rgb(235, 235, 240, 0);
  background-blend-mode: darken;
  padding-bottom: 1rem;
  width: 1rem;
  border-radius: 2rem;
}

.username-player-list {
  align-items: center;
  margin: auto;
}

.card {
  width: 100%;
  
  border-radius: 2rem;
  margin: 5px 5px;
}

.chatlog {
  display: flex;

  padding-left: 1rem;
  margin-bottom: 5px;
}

.message-box {
  align-items: flex-end;
  width: 100%;
  margin-bottom: 5px;
  height: 150px;
  overflow: auto;
  max-height: 150px;
}

.card-body {
  padding-left: 1rem;
  padding-right: 1rem;
}

.chat-box {
  display: flex;
  flex-direction: row;
  height: 220px;
}

.input-box {
  width: 100%;
}

#chatbox {
  width: 90%;
}

img {
  height: 50px;
}

.chat-answer {
  background: cornsilk;
  border-radius: 3px;
  border-style: solid;
  background-color: #f6f9f6;
  border-width: 3px;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 15px;
  padding-right: 20px;
  padding-left: 15px;
  border-radius: 15px;
}


.card-container {
  width: 250px;
  overflow: auto;
  max-height: 500px;
}

.chat-regular {
  background: #ddd;
  width: 200px;
  border-style: solid;
  background-color: #f6f9f6;
  border-width: 3px;

  padding-top: 10px;
  padding-bottom: 15px;
  padding-right: 20px;
  padding-left: 15px;
  border-radius: 15px;
}

.canvas {
  background: #eeeeee;
  height: 350px;
  margin-left: 2rem;
  margin-bottom: 1rem;
}

.game-grid {
  width: 700px;
}
</style>