<template>
  <div>

    <div>
      <input type="button" id="clear" value="clear" @click="clearCanvas">
    </div>
    <canvas
      id="canvas"
      v-on:mousedown="handleMouseDown"
      v-on:mouseup="handleMouseUp"
      v-on:mousemove="handleMouseMove"
      width="400px"
      height="350px"
      :style="{'pointer-events':isPlaying}"
    ></canvas>
    

    <!-- <canvas
      id="canvas2"
      v-on:mousedown="handleMouseDown"
      v-on:mousemove="handleMouseMove"
      width="400px"
      height="200px"
    ></canvas>-->
  </div>
</template>

<script>
import socket from '../config/socket'
export default {
  data() {
    return {
      message: "hello",
      mouse: {
        current: {
          x: 0,
          y: 0,
        },
        previous: {
          x: 0,
          y: 0,
        },
        down: false,
      },
    };
  },
  computed: {
    currentMouse: function () {
      var c = document.getElementById("canvas");
      var rect = c.getBoundingClientRect();

      return {
        x: this.mouse.current.x - rect.left,
        y: this.mouse.current.y - rect.top,
      };
    },
    isPlaying() {
      let localIndex = this.$store.state.roomDetail.index;
      if (localIndex === undefined) {
        console.log("local index undefined");
        return "none"
      } else {
        let player = this.$store.state.roomDetail.users[localIndex].name;
        if (player === localStorage.username) {
          return "auto";
        } else {
          return "none";
        }
      }
    }
  },
  methods: {
    draw: function (event) {
      // requestAnimationFrame(this.draw);
      if (this.mouse.down) {
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, 800, 800);
        ctx.lineTo(this.currentMouse.x, this.currentMouse.y);
        ctx.strokeStyle = "#F63E02";
        ctx.lineWidth = 2;
        //  console.log(this.currentMouse.x, this.currentMouse.y,'dari draw')
        
        ctx.stroke();
      }
    },
    draw2() {
      let { coorX, coorY, currentMouse, mouseDown } = this.$store.state.canvasStroke;
      // console.log(coorX,coorY,'ini ada di draw 2')
      if(mouseDown){

let c = document.getElementById("canvas");
      let ctx = c.getContext("2d");
      let { x,y } = currentMouse
    // console.log(x,y,currentMouse,'draw2')
      // var rect = c.getBoundingClientRect();
      
      console.log(x,y,coorX,coorY,'ini bahan ctx move')
      ctx.clearRect(0, 0, 800, 800);
      ctx.lineTo(x, y);
      ctx.strokeStyle = "#F63E02";
      ctx.lineWidth = 2;      
      ctx.stroke();
      ctx.moveTo(x, y);
      }
      
      
    },

    handleMouseDown: function (event) {
      this.mouse.down = true;
      this.mouse.current = {
        x: event.pageX,
        y: event.pageY,
      };
      var c = document.getElementById("canvas");
      var ctx = c.getContext("2d");
      ctx.moveTo(this.currentMouse.x, this.currentMouse.y);
    },

    handleMouseUp: function () {
      this.mouse.down = false;
    },
    handleMouseMove: function (event) {
      this.mouse.current = {
        x: event.pageX,
        y: event.pageY,
      };
      let payload = {
          coorX: this.currentMouse.x,
          coorY: this.currentMouse.y,
          roomName: this.$store.state.roomDetail.name,
          currentMouse:this.currentMouse,
          mouseDown:this.mouse.down
        };
        this.$store.dispatch("canvasLine", payload);

      this.draw(event);
      // this.draw2(event);
    },
    clearCanvas(){
           var c = document.getElementById("canvas");
      var ctx = c.getContext("2d");
      ctx.beginPath();
      ctx.clearRect(0,0,800,800)
    }
  },
  watch: {
    "$store.state.canvasStroke"() {
      console.log("plis bergerak");
      this.draw2();
    },
  },
  ready: function () {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.translate(0.5, 0.5);
    ctx.imageSmoothingEnabled = false;
    // this.draw();
  },
  created(){
    this.$store.dispatch('clearCanvas')
    socket.on('clear-canvas',()=>{
      this.clearCanvas()
    })
  }
};
</script>

<style>
#canvas {
  border: black solid 3px;
  background: white;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);
}

#canvas2 {
  border: black solid 3px;
  background: white;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);
}
</style>
