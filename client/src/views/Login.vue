<template>
  <div>
    <div class="login-card container">
      <div class="row title-text">
       <h1 data-shadow='Gartic'><strike>Gartic</strike></h1>
      </div>
      <div class="login-card-form">
        <form @submit.prevent="login">
          <input v-model="username" type="text" placeholder="Enter Nickname" class="form__input" /><br>
          <button class="big-button" type="submit">Enter Lobby</button>
        </form>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", { username: this.username });
      this.$router.push({ name: "Lobby" });
      localStorage.setItem("username", this.username);
      this.username = "";
    },
  },
};
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Righteous);

.login-card {
  height: 500px;
  width: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background:transparent;
  border-radius: 3rem;
  flex-direction: column;
}

body {
  
	background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

:root {
  --backgroundColor: rgba(246, 241, 209);
  --colorShadeA: rgb(106, 163, 137);
  --colorShadeB: rgb(121, 186, 156);
  --colorShadeC: rgb(150, 232, 195);
  --colorShadeD: rgb(187, 232, 211);
  --colorShadeE: rgb(205, 255, 232);
}

@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700");
* {
  box-sizing: border-box;
}
*::before, *::after {
  box-sizing: border-box;
}

button {
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  font-size: 1.5rem;
    color:var(--colorShadeA);
  font-weight: 700;
  text-transform: uppercase;
  font-family: inherit;
}

button.big-button {
   padding: 1em 2em;
   border: 2px solid var(--colorShadeA);
  border-radius: 1em;
  background: var(--colorShadeE);
transform-style: preserve-3d;
   transition: all 175ms cubic-bezier(0, 0, 1, 1);
}
button.big-button::before {
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--colorShadeC);
  border-radius: inherit;
    box-shadow: 0 0 0 2px var(--colorShadeB), 0 0.75em 0 0 var(--colorShadeA);
 transform: translate3d(0, 0.75em, -1em);
     transition: all 175ms cubic-bezier(0, 0, 1, 1);
}


button.big-button:hover {
  background: var(--colorShadeD);
  transform: translate(0, 0.375em);
}

button.big-button:hover::before {
  transform: translate3d(0, 0.75em, -1em);
}

button.big-button:active {
            transform: translate(0em, 0.75em);
}

button.big-button:active::before {
  transform: translate3d(0, 0, -1em);
  
      box-shadow: 0 0 0 2px var(--colorShadeB), 0 0.25em 0 0 var(--colorShadeB);

}

.form__input {
  font-family: 'Roboto', sans-serif;
  color: #333;
  font-size: 1.2rem;
	margin: 0 auto;
  padding: 1.5rem 2rem;
  border-radius: 1rem;
  background-color: rgb(255, 255, 255);
  border: none;
  width: 90%;
  display: block;
  border-bottom: 0.3rem solid transparent;
  transition: all 0.3s;
}

.form__input:placeholder-shown + .form__label {
  opacity: 0;
  visibility: hidden;
  -webkit-transform: translateY(-4rem);
  transform: translateY(-4rem);
}


.title-text {
    text-align: center;
    background-color: hsla(230,40%,50%,0);
    }
  .title-text:before {
    content: '';
    display: inline-block;
    vertical-align: middle;
    font-size: 0;
    height: 100%;
    }

*, *:before, *:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  position: relative;
  }

h1 {
  display: inline-block;
  color: white;
  font-family: 'Righteous', serif;
  font-size: 12em; 
  text-shadow: .03em .03em 0 hsla(230,40%,50%,1);
  }
  h1:after {
    content: attr(data-shadow);
    position: absolute;
    top: .06em; left: .06em;
    z-index: -1;
    text-shadow: none;
    background-image:
      linear-gradient(
        45deg,
        transparent 45%,
        hsla(48,20%,90%,1) 45%,
        hsla(48,20%,90%,1) 55%,
        transparent 0
        );
    background-size: .05em .05em;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  
    animation: shad-anim 15s linear infinite;
    }

@keyframes shad-anim {
  0% {background-position: 0 0}
  0% {background-position: 100% -100%}
  }
</style>
