<template>
  <div class="container game-room">
    <div class="row row-cols-2">
      <div class="col-3 align-self-start player-list mr-5 mb-1">
        <h2>Player List</h2>
        <div class="card">
          <div class="card-body">
            <div class="row player-in-room">
              <div class="col avatar-player-list">
                <img src="https://avatars.dicebear.com/api/male/avatar.svg" />
              </div>
              <div class="col username-player-list">
                <strong>
                  <span>Nickname</span>
                </strong>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <div class="row player-in-room">
              <div class="col avatar-player-list">
                <img src="https://avatars.dicebear.com/api/male/avatar.svg" />
              </div>
              <div class="col username-player-list">
                <strong>
                  <span>Username</span>
                </strong>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <div class="row player-in-room">
              <div class="col avatar-player-list">
                <img src="https://avatars.dicebear.com/api/male/avatar.svg" />
              </div>
              <div class="col username-player-list">
                <strong>
                  <span>Username</span>
                </strong>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <div class="row player-in-room">
              <div class="col avatar-player-list">
                <img src="https://avatars.dicebear.com/api/male/avatar.svg" />
              </div>
              <div class="col username-player-list">
                <strong>
                  <span>Username</span>
                </strong>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <div class="row player-in-room">
              <div class="col avatar-player-list">
                <img src="https://avatars.dicebear.com/api/male/avatar.svg" />
              </div>
              <div class="col username-player-list">
                <strong>
                  <span>charawkwkw</span>
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-8 game">
        <div class="row">
          <div class="canvas mt-3">
          
            <canvas id="myCanvas" width="500" height="300"></canvas>
          </div>
        </div>
        <div class="row ml-5">
          <div class="col chat-box">
            <div class="chat-regular col">
              <div class="message-box">
                <p class="chatlog"><strong>Username:</strong>chat biasa</p>
                <p class="chatlog"><strong>Username:</strong>chat biasa</p>
                <p class="chatlog"><strong>Username:</strong>chat biasa</p>
                <p class="chatlog"><strong>Username:</strong>chat biasa</p>
                <p class="chatlog"><strong>Username:</strong>chat biasa</p>
                <p class="chatlog"><strong>Username:</strong>chat biasa</p>
                <p class="chatlog"><strong>Username:</strong>chat biasa</p>
              </div>
              <div class="input-box">
                <input
                  type="text"
                  name="chat"
                  id="chatbox"
                  placeholder="answer here"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.game-room {
  display: flex;
}

.player-list {
  background: rgb(235, 235, 240, 0);
  background-blend-mode: darken;
  padding-bottom: 1rem;
  
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
  display: flex ;
  
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
  margin-right: 2rem;
}

.input-box {
  width: 100%;
}

#chatbox {
  width: 90%;
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
</style>