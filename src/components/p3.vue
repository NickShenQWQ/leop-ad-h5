<template>
  <div class="p3">
    <div class="bg-d">
      <v-touch @swipeup="swipeUp" @swipedown="swipeDown" class="touchWrapper">
        <main>
          <div class="logoo">
            <img class="logos" src="../assets/imgs/logo.png" alt="">
            <div class="shangxin">
              <img class="imgxin1" ref="imgxin1" src="../assets/imgs/xinbai-2.png" alt="">
            </div>
          </div>
          <div class="content">
            <div class="leftxin">
              <img class="imgxin2" ref="imgxin2" src="../assets/imgs/leftxin.png" alt="">
            </div>
            <div class="rightxin">
              <img class="imgxin3" ref="imgxin3" src="../assets/imgs/xinright.png" alt="">
            </div>
            <div class="lists">
              <div class="item">
                <img class="item1" ref="item1" src="../assets/imgs/rili1.png" alt="">
              </div>
              <div class="item">
                <img class="item2" ref="item2" src="../assets/imgs/rili2.png" alt="">
              </div>
              <div class="item">
                <img class="item3" ref="item3" src="../assets/imgs/rili3.png" alt="">
              </div>
            </div>


            <div class="shanghua" ref="sh">
              <img class="sh"  src="../assets/imgs/jiantoushnaghua.png" alt="">
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
    name: 'p3',
    data() {
      return {
        img: []
      }
    },
    components: {},
    created() {

    },
    mounted() {
           TweenMax.fromTo(this.$refs.imgxin1, 1, {
            transform: 'rotate(20deg)'
          }, {
            ease: 'linear',
            transform: 'rotate(-20deg)',
            yoyo: true,
            repeat: -1,
          }),
          TweenMax.fromTo(this.$refs.imgxin2, 1, {
            transform: 'rotate(20deg)'
          }, {
            ease: 'linear',
            transform: 'rotate(-20deg)',
            yoyo: true,
            repeat: -1,
          }),
          TweenMax.fromTo(this.$refs.imgxin3, 1, {
            transform: 'rotate(-10deg)'
          }, {
            ease: 'linear',
            transform: 'rotate(10deg)',
            yoyo: true,
            repeat: -1,
          })
      this.qita1()
      this.showheart();
        //上滑来回移动
    
					        //上滑来回移动
    
    
        TweenMax.fromTo(this.$refs.sh, 0.4, {
        bottom: '0.5rem',
        }, {
          opacity:1,
          bottom: '1rem',
          ease: 'linear',
          yoyo: true,
          repeat: -1,
		});
    },
    methods: {
      swipeUp() {
        this.global.transitionName = 'up';
        this.$router.replace('/p4');
      },
      swipeDown() {
        this.global.transitionName = 'down';
        this.$router.replace('/p2');
      },
      qita1(){
        TweenMax.fromTo(this.$refs.item1, 1, {
          marginLeft:'0',
        }, {
          marginLeft:'1.375rem',
          yoyo: true,
          ease: 'linear',
          onComplete: this.qita2,
          opacity: 1,
        });
      },
      qita2(){
        TweenMax.fromTo(this.$refs.item2, 1, {
          marginLeft:'0',
        }, {
          marginLeft:'-1.375rem',
          yoyo: true,
          ease: 'linear',
          onComplete: this.qita3,
          opacity: 1,
        });
      },
      qita3(){
        TweenMax.fromTo(this.$refs.item3, 1, {
          marginLeft:'0',
        }, {
          marginLeft:'1.375rem',
          yoyo: true,
          ease: 'linear',
          onComplete: this.qita33,
          opacity: 1,
        });
      },
      qita11(){
        TweenMax.fromTo(this.$refs.item1, 1, {
          marginLeft:'1.375rem',
        }, {
          marginLeft:'0',
          yoyo: true,
          ease: 'linear',
          onComplete: this.qita1,
        });
      },
      qita22(){
        TweenMax.fromTo(this.$refs.item2, 1, {
          marginLeft:'-1.375rem',
        }, {
          marginLeft:'0',
          yoyo: true,
          ease: 'linear',
          onComplete: this.qita11,
        });
      },
      qita33(){
        TweenMax.fromTo(this.$refs.item3, 1, {
          marginLeft:'1.375rem',
        }, {
          marginLeft:'0',
          yoyo: true,
          ease: 'linear',
          onComplete: this.qita22,
        });
      },
      //上滑来回移动

      //心出现
      showheart() {
 

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

  .lists {
    width: 8.875rem;
    margin: auto;
  }
  .lists>div:nth-child(2n){
    margin-left: 1.125rem;
  }
  .item{
    width:7.375rem;
    height: 3.77rem;
    /*border:solid 1px gainsboro;*/
    margin-top: 0.3rem;
  }
  .item > img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
  }

  .shanghua {
    position: fixed;
    bottom: 0.3rem;
    width: 2rem;
    height: 0.7rem;
    left: 50%;
    transform: translateX(-50%);
    /*margin-top: 1.25rem;*/
    /*margin-bottom: 0.25rem;*/
  }

  .shanghua img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .p3 {
    background: url('../assets/imgs/bg2-1.png') top center no-repeat;
    background-size: 100% 100%;
  }

</style>
