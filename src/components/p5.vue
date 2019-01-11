<template>
  <div class="p5">
    <div class="bg-d">
      <v-touch  @swipedown="swipeDown" @swipeleft="swipeLeft" @swiperight="swipeRight" class="touchWrapper">
        <main>
          <div class="logoo">
            <img class="logos" src="../assets/imgs/logo.png" alt="">
            <div class="shangxin">
              <img class="imgxin1" ref="imgxin1" src="../assets/imgs/xinbai-2.png" alt="">
            </div>
          </div>
          <div class="content">
            <!--<div class="leftxin">-->
              <!--<img class="imgxin2" ref="imgxin2" src="../assets/imgs/leftxin.png" alt="">-->
            <!--</div>-->
            <!--<div class="rightxin">-->
              <!--<img class="imgxin3" ref="imgxin3" src="../assets/imgs/xinright.png" alt="">-->
            <!--</div>-->
            <div class="lists">
              <div class="item">
                <img ref="img01" :src="pics[index]" alt="">
              </div>
              <div class="item">
                <img ref="img02" :src="pics[index+1]" alt="">
              </div>
              <div class="item">
                <img ref="img03" :src="pics[index+2]" alt="">
              </div>
            </div>
            <div class="sure">
              <img @click="sureok" src="../assets/imgs/sure1.png" alt="">
            </div>

          </div>
          <div class="choose">
            <div class="toleft">
              <img ref="left1" src="../assets/imgs/left.png" v-show="a" @click="goleft" alt="">
            </div>
            <div class="toright">
              <img ref="right1" src="../assets/imgs/right.png" v-show="b" @click="goright" alt="">
            </div>
          </div>
        </main>
      </v-touch>
    </div>
  </div>
</template>
<script>
  import global from '../components/global.js'

  export default {
    name: 'p5',
    data() {
      return {
        img: [],
        pics:['http://leop1902.dwechat.com/ad/背景-海报.png','http://leop1902.dwechat.com/ad/背景-海报2.png','http://leop1902.dwechat.com/ad/背景-海报3.jpg'],
        index:0,
        a:true,
        b:true
      }
    },
    components: {},
    created() {
    },
    mounted() {
      this.showheart();
      this.leftright()
    },
    methods: {
      swipeDown() {
        this.global.transitionName = 'down';
        this.$router.replace('/p4');
      },
      swipeLeft(){
        this.goright();

      },
      swipeRight(){
        this.goleft();
      },
      // 左右切换
      goleft(){
        if(this.index>-1) {
          this.b=true;
          this.index--;
        };
        if(this.index==-1){
          this.a=false;
        }else{
          this.a=true;
        }
      },
      goright(){
        if(this.index<this.pics.length-2){
          this.a=true;
          this.index++;
        }
        if(this.index==this.pics.length-2){
          this.b=false;
        }else{
          this.b=true;
        }
      },
      // 心动
      showheart() {
        TweenMax.fromTo(this.$refs.imgxin1, 1, {
          transform: 'rotate(-20deg)'
        }, {
          ease: 'linear',
          transform: 'rotate(20deg)',
          yoyo: true,
          repeat: -1,
        })


      },
      // 左右按钮
      leftright(){
        TweenMax.fromTo(this.$refs.left1, 0.5, {
          opcatity:0.5,
          transform:'scale(1)'
        }, {
          opcatity:1,
          ease: 'linear',
          transform:'scale(1.2)',
          yoyo: true,
          repeat: -1,
        });
        TweenMax.fromTo(this.$refs.right1, 0.5, {
          transform:'scale(1)'
        }, {
          ease: 'linear',
          transform:'scale(1.2)',
          yoyo: true,
          repeat: -1,
        })
      },
      sureok(){
        sessionStorage.removeItem('src');
        sessionStorage.setItem('src',this.pics[this.index+1]);
                this.global.transitionName = 'up';
        this.$router.replace('/p6');
      },
    }
  }
</script>
<style scoped>

  .logoo {
    width: 100%;
    height: 2.625rem;
    position: relative;
  }

  .shangxin {
    width: 1.2rem;
    height: 1.2rem;
    position: absolute;
    top: 1.2rem;
    left: 6rem;
  }

  .leftxin, .rightxin {
    position: absolute;
    z-index: 1;
  }

  .leftxin {
    width: 1.5rem;
    height: 1.5rem;
    top: 4rem;
    left: -0.5rem;

  }

  .rightxin {
    width: 1rem;
    height: 1rem;
    top: 2.4rem;
    left: 8rem;
  }

  .leftxin img, .rightxin img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .shangxin img {
    width: 100%;
  }

  .logos{
    width: 100%;
    height: 2.625rem;
    position: relative;
  }

  /* .logoo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  } */

  .content {
    position: relative;
    width: 8.875rem;
    margin: 0.5rem auto;

  }
  .lists{
    position: absolute;
    width: 8.875rem;
    height: 12rem;
    margin: auto;

  }
  .lists >div{
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width:7.375rem;
    height: 12rem;

  }
  .lists div:nth-child(1){
    width: 7rem;
    height: 10.5rem;
    margin-left: -0.7rem;
    opacity: 0.8;
    z-index: 90;
    top: 0.8rem;
  }
  .lists div:nth-child(2){
    z-index: 99;
  }
  .lists div:nth-child(3){
    width: 7rem;
    height: 10.5rem;
    margin-left: 0.7rem;
    opacity: 0.8;
    z-index: 90;
    top: 0.8rem;
  }
  .sure{
    position: fixed;
    width: 5.55rem;
    height: 1.125rem;
    z-index: 999;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
  }
  .sure img{
    width: 100%;
    /* height: 100%;
    object-fit: cover; */
    z-index: 999;
  }
  .choose{
    position: absolute;
    width: 98%;
    height:1rem;
    display: flex;
    justify-content: space-between;
    z-index: 999;
    top:8.5rem;
    left: 50%;
    transform: translateX(-50%);
  }
  .choose >div{
    width: 0.9rem;
    height: 0.9rem;
  }
  .choose >div >img{
    width: 100%;
    height: 100%;
    object-fit: contain;

  }
  .item img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border:none;
  }
 



  .p5 {
    background: url('../assets/imgs/bg2-1.png') top center no-repeat;
    background-size: 100% 100%;
  }

</style>
