<template>
  <div class="p2">
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
            <div class="font100">
              <img class="font1" ref="font1" src="../assets/imgs/font100.png" alt="">
            </div>
            <div class="boxs">
              <img class="rili" ref="rili" src="../assets/imgs/rili-2-2.png" alt="">
            </div>
            <div class="titles">
              <img class="font2" ref="font2" src="../assets/imgs/dingxiang.png" alt="">
            </div>
            <div class="bigloud">
              <img class="font3" ref="font3" src="../assets/imgs/guanzhu.png" alt="">
            </div>
            <div  ref="sh" class="shanghua">
              <img class="sh" src="../assets/imgs/jiantoushnaghua.png" alt="">
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
    name: 'p2',
    data() {
      return {
        img: []
      }
    },
    components: {},
    created() {

    },
    mounted() {

      TweenMax.fromTo(this.$refs.font1, 1, {
        opacity: 0,
        width: '200%',
        height: '200%'
      }, {
        opacity: 1,
        width: '90%',
        height: '90%',
        yoyo: true,
        ease: 'linear',
        onComplete: this.font11Animate1
      });
      this.showheart();
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
        this.$router.replace('/p3');
      },
      swipeDown() {
        this.global.transitionName = 'down';
        this.$router.replace('/');
      },
      img1Done() {

        // TweenMax.fromTo(this.$refs.img2, 0.8, {
        //   opacity: 0,
        //   transform: 'translateY(50%)'
        // }, {
        //   opacity: 1,
        //   yoyo: true,
        //   ease: 'linear',
        //   transform: 'translateY(0%)',
        //   onComplete: this.img2Done
        // });

      },


      font11Animate1() {
        TweenMax.fromTo(this.$refs.font1, 0.3, {width: '90%', height: '90'}, {
          width: '100%',
          height: '100',
          yoyo: true,
          ease: 'linear',
          onComplete: this.rilishow
        });

      },
      font2Animate2() {
        TweenMax.fromTo(this.$refs.font2, 0.5, {
          opacity: 0,
          width: '10%',
          height: '10%'
        }, {
          opacity: 1,
          width: '100%',
          height: '100%',
          yoyo: true,
          ease: 'linear',
          onComplete: this.font21Animate1
        });
      },
      font21Animate1() {
        TweenMax.fromTo(this.$refs.font2, 0.5, {
          width: '90%',
          height: '90%'
        }, {
          width: '100%',
          height: '100%',
          yoyo: true,
          ease: 'linear',
          onComplete: this.font2change
        });
      },
      // font来回变
      font2all() {
        TweenMax.fromTo(this.$refs.font2, 1, {
          width: '90%',
          height: '90%'
        }, {
          width: '100%',
          height: '100%',
          yoyo: true,
          ease: 'linear',
          onComplete: this.font2jian
        });
      },
      font2jian() {
        TweenMax.fromTo(this.$refs.font2, 1, {
          width: '100%',
          height: '100%'
        }, {
          width: '90%',
          height: '90%',
          yoyo: true,
          ease: 'linear',
          onComplete: this.font2all
        });
      },
      // 结束
      font2change() {
        this.font2jian();
        this.font3Animatel()
      },
      font3Animatel() {
        TweenMax.fromTo(this.$refs.font3, 1, {
          marginRight: '-15rem',
        }, {
          opacity: 1,
          marginRight: '0',
          yoyo: true,
          ease: 'linear',
          onComplete: this.shAnimatel
        });
      },
      //上滑来回移动
      // shAnimatel() {
      //   TweenMax.fromTo(this.$refs.sh, 0.4, {
      //     marginTop: '-0.2rem',
      //   }, {
      //     opacity:1,
      //     marginTop: '0.1rem',
      //     ease: 'linear',
      //     yoyo: true,
      //     repeat: -1,
      //   });
      // },
      //心出现
      showheart() {
        TweenMax.fromTo(this.$refs.imgxin1, 1, {transform: 'rotate(-20deg)'}, {ease: 'linear',transform: 'rotate(20deg)',yoyo: true,repeat: -1,}),
        TweenMax.fromTo(this.$refs.imgxin2, 1, {transform: 'rotate(20deg)'}, {ease: 'linear',
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
      rilishow() {
        TweenMax.fromTo(this.$refs.rili, 1, {
          opacity: 0,
        }, {
          opacity: 1,
          ease: 'linear',
          onComplete: this.font2Animate2
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
    top: 1rem;
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
    top: 1.3rem;
    left: 7.1rem;
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

  .content {
    position: relative;
    width: 7rem;
    margin: 0 auto;
    margin-top: 0.7rem;
  }

  .font100 {
    width: 100%;
    height: 2.5775rem;
  }

  .font100 > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    opacity: 0;
  }

  .boxs {
    width: 2.794rem;
    height: 3.5rem;
    margin-left: 4.375rem;
    margin-top: -0.75rem;

  }

  .boxs img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
  }

  .titles {
    width: 6.5rem;
    height: 0.625rem;
    margin: 0.75rem auto;
    margin-top:0.5rem;
  }

  .titles img {
    margin: 0 auto;
    text-align: center;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
  }

  .bigloud {
    width: 6rem;
    height: 2.625rem;
    margin: auto;
    margin-top:0.5rem;
  }

  .bigloud img {
    width: 100%;
    /* height: 100%; */
    /* object-fit: cover; */
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
    opacity:1;
  }

  .p2 {
    background: url('../assets/imgs/bg2-1.png') top center no-repeat;
    background-size: 100% 100%;
  }

</style>
