<template>
  <div class="p4">
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

            <div class="bigheart">
              <img class="bighear" ref="bighear" src="../assets/imgs/heart.png" alt="">
            </div>
            <div class="wantsay">
              <img class="wanner" ref="wanner" src="../assets/imgs/nosay.png" alt="">
            </div>
            <div class="saylove">
              <img @click="start" src="../assets/imgs/saylove.png" alt="">
              <div class="point">
                <img src="../assets/imgs/point.png" class="pointer" ref="pointer" alt="">
              </div>
            </div>
            <!-- <div ref="sh" class="shanghua">
              <img class="sh"  src="../assets/imgs/jiantoushnaghua.png" alt="">
            </div> -->
          </div>
        </main>
      </v-touch>
    </div>
  </div>
</template>
<script>
  import global from '../components/global.js'

  export default {
    name: 'p4',
    data() {
      return {
        img: []
      }
    },
    components: {},
    created() {

    },
    mounted() {
      this.heartAnimat()
      // TweenMax.fromTo(this.$refs.bighear, 1, {
      //   opacity: 0,
      //   width: '200%',
      //   height: '200%'
      // }, {
      //   opacity: 1,
      //   width: '30%',
      //   height: '30%',
      //   marginTop:'-3rem',
      //   yoyo: true,
      //   ease: 'linear',
      //   transform:'rotateX(90deg)',
      //   onComplete: this.heartAnimat
      // });
      this.showheart();
      this.wantsays();
      // this.shAnimatel();
    },
    methods: {
      swipeUp() {
        // this.global.transitionName = 'up';
        // this.$router.replace('/p5');
      },
      swipeDown() {
        this.global.transitionName = 'down';
        this.$router.replace('/p3');
      },
      start(){
       this.global.transitionName = 'up';
        this.$router.replace('/p5');
      },
      // 心出来
      heartAnimat(){
        TweenMax.fromTo(this.$refs.bighear, 1, {
          opacity:0,
          width: '30%',
          height: '30%',
          transform:'rotateX(90deg)',
          marginTop:'-3rem',
        }, {
          opacity:1,
          transform:'rotateX(0deg)',
          marginTop:'0',
          width: '100%',
          height: '100%',
          yoyo: true,
          ease: 'linear',
          onComplete: this.pointAnimat
        });
      },
      // 手动
      pointAnimat(){
        TweenMax.fromTo(this.$refs.pointer, 1, {
          opacity:0.5,
          transform:'scale(1)',
          // marginRight:'-0.5rem',
        }, {
          // marginRight:'0rem',
          transform:'scale(1.2)',
          opacity:1,
          yoyo: true,
          ease: 'linear',
          onComplete: '',
          repeat:-1,
        });
      },
    //           shAnimatel(){
    //       //上滑来回移动
    

    //     TweenMax.fromTo(this.$refs.sh, 0.4, {
    //     bottom: '0.5rem',
    //     }, {
    //       opacity:1,
    //       bottom: '1rem',
    //       ease: 'linear',
    //       yoyo: true,
    //       repeat: -1,
		// });  
    
      // },
      //心出现
      showheart() {
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
      },
      //当面说话动画
      wantsays(){
        TweenMax.fromTo(this.$refs.wanner, 1, {
          transform:'rotate(5deg)',
        }, {
          transform:'rotate(-5deg)',
          yoyo: true,
          ease: 'linear',
          repeat:-1,
        });
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
    top: 1.8rem;
    left: 5rem;
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
    top: 2.9rem;
    left: 6.8rem;
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
    width: 7rem;
    margin: 0.8rem auto;

  }
  .bigheart{
    width: 6.45rem;
    height: 5.8rem;
    margin: auto;
  }
  .bigheart img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .wantsay{
    /*position: fixed;*/
    /* width: 7.5rem; */
    height: 2.9rem;
    margin-top: 0;
    /*bottom:6rem;*/
  }
  .wantsay img{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .saylove{
    position: fixed;
    width: 6rem;
    height:3rem;
    left: 50%;
    transform: translateX(-50%);
    bottom:1rem;
  }
  .saylove img{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .point{
    width: 1.3rem;
    height: 1.3rem;
    position: absolute;
    top: 1.2rem;
    left: 4.65rem;
    opacity:0.5;
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

  .p4 {
    background: url('../assets/imgs/bg4.png') top center no-repeat;
    background-size: 100% 100%;
  }

</style>
