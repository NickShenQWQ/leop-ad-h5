<template>
   
  <div id="app">


    <img id="bgmIcon" ref="bgmIcon" src="./assets/image/icon.png" @click="audioPlay" alt="">
    <audio id="bgm" ref="bgm" loop  v-show="false">
      <source src="./assets/audio/music.mp3" type="audio/mp3">
    </audio> 
    <transition :name="global.transitionName">
      <router-view/>
    </transition>
    

  </div>
</template>

<script>
  function addClass(dom,cls){
    var dom_clsName = dom.className;
    if(dom_clsName.indexOf(cls) === -1){
      dom.className = dom_clsName== '' ? cls : dom_clsName + ' ' + cls;
    }
  }
  function removeClass(dom,cls){
    var dom_clsName = dom.className;
    dom.className = dom_clsName.replace(cls,'').replace(/(^\s*) | (\s*$)/g,'');
  }
export default {
  name: 'App',
  methods:{
    audioPlay(){
      if(this.$refs.bgm.paused){
        //添加class并播放
        addClass(this.$refs.bgmIcon,'playing');
        this.$refs.bgm.play();
      }else{
        removeClass(this.$refs.bgmIcon,'playing');
        this.$refs.bgm.pause();
      }
    },
    musicStart(){
      var _this = this;
      addClass(_this.$refs.bgmIcon,'playing');
      _this.$refs.bgm.play();
    }
  },
  mounted(){
 
 
    var _this = this;
    
    if(typeof(window.WeixinJSBridge) == undefined){
      this.musicStart();
    }else{
      document.addEventListener('WeixinJSBridgeReady', function(){
        _this.musicStart();
      }, false);
    }

    
  }
}
</script>

<style>



*{
  box-sizing: border-box;
}
/* iframe {
  display: none !important;
} */
#app {
  position: absolute;
  width:100%;
  height:100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#app>div{
  position: absolute;
  width:10rem;
  height:100%;
  top:0;
  left:50%;
  margin-left:-5rem;
}
.touchWrapper{
  position: relative;
  width:100%;
  height:100%;
}
.img{
  font-size:0;
}
.img>img{
  width:100%;
}
.imgContainer{
  position: relative;
}
.up-enter-active{
  transform: translate3d(0,100%,0);
  transition:transform 1s;
}
.up-leave-active{
  transform: translate3d(0,0,0);
  transition:transform  1s;
}
.up-enter-to{
  transform: translate3d(0,0,0);
}
.up-leave-to{
  transform: translate3d(0,-100%,0);
}
.down-enter-active{
  transform: translate3d(0,-100%,0);
  transition:transform 1s;
}
.down-leave-active{
  transform: translate3d(0,0,0);
  transition:transform  1s;
}
.down-enter-to{
  transform: translate3d(0,0,0);
}
.down-leave-to{
  transform: translate3d(0,100%,0);
}
.down{
  position:fixed;
  width:1.16rem;
  left:50%;
  transform: translateX(-50%);
  bottom:0.5rem;
  animation: downMoving 1.2s infinite linear;
}
@keyframes downMoving {
  0%{
    bottom:0.5rem;
  }
  50%{
    bottom:0.2rem;
  }
  100%{
    bottom:0.5rem;
  }
}
.messageMask{
  position:fixed;
  top:0;
  left:0;
  bottom:0;
  right:0;
  background-color:rgba(0,0,0,0.5);
  z-index:999;
}
.messageMask .messageContent{
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  width:6.986667rem;
  height:3.093334rem;
  background:url('') center center no-repeat;
  background-size:cover;
  display: flex;
  flex-direction:column;
  justify-content:center;
}
.messageMask .messageContent p{
  color:#fff;
  font-size:0.42666rem;
  line-height:0.533334rem;
  text-align: center;
  font-weight: 600;
  letter-spacing: 3px;
}
.loading{
  position: fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  z-index:999;
  background-color:rgba(255,255,255,0.3);
}
.loading>div{
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  width:0.533333rem;
}

#bgm{
  width:1px;
  height:1px;
}
#bgmIcon{
    position: absolute;
    /* z-index: 100; */
    top: 0.8rem;
    right: 0.7rem;
    width: 0.7rem;
    z-index: 9999999999;
}
.playing{
  animation:play 3s infinite linear;
}
@keyframes play{
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg)
  }
}
  .logoImg {
    z-index: 1;
    width: 110%;
    position: fixed;
    left: 0;
    top: 0;

  }
    #export{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    #export canvas{
        width: 100%;
            height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        display: none;
    }
    #export img{
position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 999;
    display: block;
    }
.logoImg {
z-index: 1;
width: 3.6rem!important;
position: fixed;
left: 0.6rem;
top: 0.6rem;

}
</style>
