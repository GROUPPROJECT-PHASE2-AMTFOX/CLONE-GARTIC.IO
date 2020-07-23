<template>
  <div>
    <h2>{{ time }}</h2>
    <button @click="countDownTimer">mulai</button>
    <h3>{{isChangUser}}</h3>
  </div>
</template>

<script>
export default {
  name: "Timer",
  data () {
    return {
      time: 5,
      isChangUser: false,
    }
  },
  methods: {
    minTime() {
      this.time = 0
      this.isChangUser = true
    },
    countDownTimer() {
        window.setInterval(this.minTime, 5000);
    }
  }
}
</script>