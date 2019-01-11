<template>
  <div class="p1">
    <v-touch @swipeup="swipeUp" @swipedown="swipeDown" class="touchWrapper">
      <main>
        <header>
          <img class="img2" ref="img2" src="../assets/imgs/logo.png" alt="">
        </header>
        <div class="content">
          <img class="img3" ref="img3" :src="src" alt="">
          <img class="img4" ref="img4" src="../assets/imgs/按钮-点击编辑.png" alt="" @click="showInput">
          <div class="chooses" v-if="flag">
            <div class="gotoedit">
              <img src="../assets/imgs/按钮-继续编辑.png" @click="showInput" alt="">
            </div>
            <div class="makesure">
              <img src="../assets/imgs/sure.png" @click="okok"  alt="">
            </div>
          </div>
          <!--<img class="img5" ref="img5" src="../assets/imgs/弹框.png" alt="">-->
          <div class="tankuang" ref="img5">
            <input class="yn" ref="yn" type="text" placeholder="此处应该是你很爱的人" v-model="youname">
            <span class="textare" ref="textline"></span>
            <textarea class="textarea" ref="textarea" placeholder="在这里写下你们新年的小目标吧~加油和你爱的人一起完成!" v-model="mytext" maxlength="72"></textarea>
            <input type="text" ref="mn" class="mn" placeholder="你的名字" v-model="myname">
            <input type="text" class="da" ref="da" placeholder="日期" v-model="date">
            <div class="showyu" ref="sy">
              <img ref="shencheng" src="../assets/imgs/按钮-生成预览.png" @click="clickshengc" alt="">
            </div>
          </div>
          <div class="text">
            <div class="name">
              亲爱的{{youname}}:
            </div>
            <div class="neirong" v-text="mytext">
              愿你XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
            </div>
          </div>
          <div class="myname">
            <div class="my" v-text="myname">
              我的名字
            </div>
            <div v-text="date">
              2019.1.1
            </div>
          </div>
        </div>
      </main>
    </v-touch>
  </div>
</template>
<script>
  export default {
    name: 'p6',
    data() {
      return {
        src: '',
        youname: sessionStorage.getItem('youname') || '',
        mytext: sessionStorage.getItem('mytext') || '',
        myname: sessionStorage.getItem('myname') || '',
        date: sessionStorage.getItem('date') || '',
        flag: false
      }
    },
    components: {},
    created() {

    },
    methods: {

      swipeUp() {
        // this.global.transitionName = 'up';
        // this.$router.replace('/p7');

      },
      swipeDown() {
        this.global.transitionName = 'down';
        this.$router.replace('/p5');
      },
      okok(){
        sessionStorage.setItem('youname',this.youname);
        sessionStorage.setItem('mytext',this.mytext);
        sessionStorage.setItem('myname',this.myname);
        sessionStorage.setItem('date',this.date);
        this.$router.replace('/p7');
      },
      showInput() {
        this.flag = false;
        this.$refs.img5.style.display = 'block';
        TweenMax.fromTo(this.$refs.img5, 0.2, {opacity: "1", left: "0%"}, {
          opacity: "1",
          left: "50%",
          yoyo: true,
          ease: 'linear',
          onComplete: this.shouinput1
        });
        $(".img4").remove();
        // var str = '<img  class="img5" ref="img5" src="../assets/imgs/按钮-生成预览.png" alt="" @click="jumpNext">';
        // $('.content').append(str);
      },
      // 出现输出狂
      shouinput1() {
        TweenMax.fromTo(this.$refs.yn, 0.5, {opacity: 0, transform: 'scale(0)'}, {
          opacity: 1,
          transform: 'scale(1)',
          yoyo: true,
          ease: 'linear',
          onComplete: this.teast
        })
      },
      teast(){
        TweenMax.fromTo(this.$refs.textline, 1.5, {opacity: 0}, {
          opacity: 1,
          yoyo: true,
          ease: 'linear',
        });
        this.shouinput2();
      },
      shouinput2() {
        TweenMax.fromTo(this.$refs.textarea, 0.5, {opacity: 0, transform: 'scale(10)'}, {
          opacity: 1,
          transform: 'scale(1)',
          yoyo: true,
          ease: 'linear',
          onComplete: this.shouinput3
        })
      },
      shouinput3() {
        TweenMax.fromTo(this.$refs.mn, 0.5, {opacity: 0, transform: 'scale(0)', left: '5rem'}, {
          opacity: 1,
          transform: 'scale(1) translateX(-50%)',
          yoyo: true,
          ease: 'linear',
          left:'50%',
          onComplete: this.shouinput4,
        })
      },
      shouinput4() {
        TweenMax.fromTo(this.$refs.da, 0.5, {
          opacity: 0,
          width: 0,
          height: 0,
          transform: 'rotate(90deg)'
        }, {
          width: '80%',
          height: '0.45rem',
          opacity: 1,
          transform: 'rotate(360deg)',
          left: '0.9rem',
          yoyo: true,
          ease: 'linear',
          onComplete: this.showbtn,
        })
      },
      showbtn() {
        $(this.$refs.sy).show(200)
      },

      img1Done() {
        TweenMax.fromTo(this.$refs.imgJump, 0.5, {width: '3.8rem'}, {
          width: '4.1rem',
          yoyo: true,
          repeat: -1,
          ease: 'linear'
        });
      },
      clickshengc() {
        if(this.mytext.length<=72){
          this.$refs.img5.style.display = 'none';
          this.flag = true;
        }

      },
      img2Done() {
        TweenMax.fromTo(this.$refs.img5, 0.4, {left: "16%"}, {
          opacity: "1",
          left: "0%",
          yoyo: true,
          ease: 'linear',
          onComplete: this.img3Done
        });
      },
      img3Done() {
        TweenMax.fromTo(this.$refs.img5, 0.4, {left: "0%"}, {
          opacity: "1",
          left: "",
          yoyo: true,
          ease: 'linear',
          onComplete: this.shouinput1
        });
      }
    },
    mounted() {
      this.src = sessionStorage.getItem('src');
      TweenMax.fromTo(this.$refs.img3, 1, {opacity: "0", marginLeft: "-22%"}, {
        opacity: "1",
        marginLeft: "0%",
        yoyo: true,
        ease: 'linear'
      });
      TweenMax.fromTo(this.$refs.img4, 1, {opacity: "0", bottom: "-10%"}, {
        opacity: "1",
        bottom: "-5%",
        yoyo: true,
        ease: 'linear'
      });

      $(".textarea").attr("placeholder","在这里写下你们新年的小目标吧~\n加油和你爱的人一起完成!")
    }
  }

</script>
<style scoped>
  .p1 {
    background: url('../assets/imgs/bg2-1.png') top center no-repeat;
    background-size: cover;
    overflow: hidden;
    z-index: 1;
  }

  header {
    position: fixed;
    top: 0;
    left: 0;
    height: 1.8rem;
  }

  header > img {
    width: 100%;
  }

  .img3 {
    width: 78%;
    margin-left: -22%;
  }

  .img4 {
width: 5.55rem;
    position: absolute;
    bottom: -5%;
    left: 50%;
    transform: translateX(-50%);

  }
.textare{
  width: 1rem;
  height: 0.45rem;;
  border-left: solid 0.05rem gray;
  position: absolute;
  top: 2.1rem;
  opacity: 0;
}
  .img5 {
    position: absolute;
    width: 83%;
    top: 16%;
    left: 8%;
    opacity: 0;
  }

  .touchWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content {
    margin-top: 2.2rem;
  }

  .content {
    position: relative;
  }

  .text {
    position: absolute;
    top: 4.3rem;
    left: 2.7rem;
    width: 4.5rem;
    height: 1.655rem;
    margin: auto;
    /*background: red;*/
  }

  .text > div {
    font-size: 0.3rem;
  }

  .text .name {
    text-align: left;
    line-height: 0.65rem;
  }

  .neirong {
    width: 4rem;
    text-align: left;
    margin: auto;
    word-wrap: break-word;
    word-break: break-all;
    overflow: hidden;
    line-height: 0.35rem;
  }

  .myname {
    position: absolute;
    top: 7rem;
    left: 2.7rem;
    width: 4rem;
    height: 1rem;
    margin: auto;
    /*background: blue;*/
  }

  .myname > div {
    font-size: 0.3rem;
    text-align: right;
    line-height: 0.4rem;
  }

  .chooses {
    width: 9rem;
    position: absolute;
    z-index: 99;
    top: 11.2rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-between;
  }

  .chooses > div {
    width: 4.5rem;
    height: 2.4rem;
  }

  .chooses > div img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .tankuang {
    width: 8.25rem;
    height: 11rem;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    top: 2rem;
    z-index: 9999;
    background: url('../assets/imgs/弹框.png');
    background-size: contain;
    background-repeat: no-repeat;
    display: none;
  }

  .tankuang input {
    font-size: 0.3rem;
    width: 80%;
    height: 0.45rem;
    border: none;
    border-left: solid 0.05rem gray;
    padding-left: 0.15rem;
    opacity: 0;
    position: absolute;
    /*margin-left: 0.5rem;*/
  }

  .tankuang textarea {
    width: 80%;
    height: 3.8rem;
    margin: auto;
    border: none;
    resize: none;
    padding-left: 0.2rem;
    font-size: 0.3rem;
    margin-top: 2.1rem;
    opacity: 0;
  }

  .tankuang .yn {
    top: 0.9rem;
  }

  .mn {
    margin-top: 6.5rem;
  }

  .tankuang .da {
    top: 7.75rem;
    left: 1rem;
  }

  .showyu {
    position: relative;
    width: 5.5rem;
    height: 1.85rem;
    left: 50%;
    top: 3.2rem;
    transform: translateX(-50%);
    display: none;
  }

  .showyu img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
