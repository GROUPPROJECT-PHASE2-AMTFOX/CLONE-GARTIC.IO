<template>
  <div class="container game-room">
    <div class="row row-cols-2">
      <div class="col-3 align-self-start player-list mr-5 mb-1">
        <h2>Player List WKWK</h2>
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
            <h1>ini canvas</h1>
            <canvas id="myCanvas" width="500" height="300"></canvas>
          </div>
        </div>
        <div class="row">
          <div class="col chat-box mt-1 mr-2">
            <div class="chat-answer col mr-2">
              <div class="message-box">
                <p class="chatlog"><strong>Username:</strong>swan</p>
                <p class="chatlog"><span><strong>Username:</strong>bebek</span></p>
                <p class="chatlog"><span><strong>Username:</strong>banteng</span></p>
                <p class="chatlog"><span><strong>Username:</strong>kelinci</span></p>
                <p class="chatlog"><span><strong>Username:</strong>wkwkkwwk</span></p>
                <p class="chatlog"><strong>Username:</strong>swan</p>
                <p class="chatlog"><span><strong>Username:</strong>bebek</span></p>
                <p class="chatlog"><span><strong>Username:</strong>banteng</span></p>
                <p class="chatlog"><span><strong>Username:</strong>kelinci</span></p>
                <p class="chatlog"><span><strong>Username:</strong>wkwkkwwk</span></p>
              </div>
              <div class="input-box">
                <input
                  type="text"
                  name="chat"
                  id="chatbox"
                  placeholder="type your answer"
                />
              </div>
            </div>
            <div class="chat-regular col">
              <div class="message-box">
                <p class="chatlog"><strong>Username:</strong>chat biasa</p>
                
              </div>
              <div class="input-box">
                <input
                  type="text"
                  name="chat"
                  id="chatbox"
                  placeholder="chit-chat here"
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
  background: #ddd;
  padding-bottom: 1rem;
}

.username-player-list {
  align-items: center;
  margin: auto;
}

.card {
  width: 100%;
}

.chatlog {
  display: flex ;
  
  padding-left: 1rem;
  margin-bottom: 5px;
}

.message-box {
  align-items: flex-end;
  border: black;
  border-style: solid;
  width: 220px;
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