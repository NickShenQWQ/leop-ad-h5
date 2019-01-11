<template>
  <div class="p1">
    <v-touch @swipeup="swipeUp" @swipedown="swipeDown" class="touchWrapper">
      <main>
        <header>
          <img class="img2" ref="img2" src="../assets/imgs/logo.png" alt="">
          <img class="fenxiang" ref="fenxiang" src="../assets/imgs/箭头-分享.png" alt="">
        </header>

        <div class="content" id="box">

       
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
            <img class="img3" ref="img3" :src="src" alt="">

       
            <div class="numCont">
              No.{{num}}
              
            </div>
            <div class="erweima">
                <img src="../assets/leopImg/erweima.png" alt="">
            </div>
            <div id="export">
            </div>
          </div>
          <div class="changan">
            长按保存图片，<br>
            发送给你想一起完成小目标的人吧
          </div>
      </main>
    </v-touch>
  </div>
</template>
<script>
  import html2canvas from 'html2canvas'
  export default {
    name: 'p7',
    data() {
      return {
        nickname: '',
        HeadImgUrl: '',
        count: 0,
        imgs: [],
        OpenId: '',
        num: '',
        userInfo: '',
        src:sessionStorage.getItem('src'),
        youname: sessionStorage.getItem('youname') || '',
      mytext: sessionStorage.getItem('mytext') || '',
      myname: sessionStorage.getItem('myname') || '',
      date: sessionStorage.getItem('date') || '',
      }
    },
    components: {

    },
    created() {

    },
    methods: {
      saveimg: function () {
        var box = document.getElementById('box');
        console.log('box', box);
        html2canvas(box, {
          allowTaint: false
        }).then(function (canvas) {
          document.getElementById('export').style.display = 'block';
          document.getElementById('export').appendChild(canvas);
          var image = new Image();
          image.src = canvas.toDataURL("image/png");
          document.getElementById('export').appendChild(image);
        });
      },
      swipeUp() {
        // this.global.transitionName = 'up';
        // this.$router.replace('/p7');
      },
      swipeDown() {
        sessionStorage.removeItem('youname');
        sessionStorage.removeItem('myname');
        sessionStorage.removeItem('mytext');
        sessionStorage.removeItem('date');
        this.global.transitionName = 'down';
        this.$router.replace('/p5');
      },

      // showInput(){
      //   TweenMax.fromTo(this.$refs.img5,0.2,{opacity:"1",left:"0%"},{opacity:"1",left: "16%",yoyo:true,ease:'linear',onComplete:this.img2Done});
      //   $(".img4").remove();
      //   var str='<img  class="img5" ref="img5" src="../assets/imgs/按钮-生成预览.png" alt="" @click="jumpNext">';
      //   $('.content').append(str);
      // },
      // start() {
      //   this.global.transitionName = 'down';
      //   this.$router.replace('/p2');

      // },
      img1Done() {
        TweenMax.fromTo(this.$refs.imgJump, 0.5, {
          width: '3.8rem'
        }, {
          width: '4.1rem',
          yoyo: true,
          repeat: -1,
          ease: 'linear'
        });
      },
      img2Done() {
        TweenMax.fromTo(this.$refs.img5, 0.4, {
          left: "16%"
        }, {
          opacity: "1",
          left: "0%",
          yoyo: true,
          ease: 'linear',
          onComplete: this.img3Done
        });
      },
      img3Done() {
        TweenMax.fromTo(this.$refs.img5, 0.4, {
          left: "0%"
        }, {
          opacity: "1",
          left: "8%",
          yoyo: true,
          ease: 'linear'
        });
      }
    },
    mounted() {
      // var wechatAuth = new WECHATAUTH('http://leop1800wechat.dwechat.com');
      var wechatAuth = new WECHATAUTH('http://leop1800wechat.dwechat.com');
      var that = this;
      wechatAuth.onReady(function (res) {
        console.log("%c res", "color: pink", res)
        // console.log(that.getBase64(res.Data.HeadImgUrl),"that.getBase64(res.Data.HeadImgUrl)")
        // 图片路径跨域
        console.log(res.Data.HeadImgUrl);
        that.userInfo = res.Data;
        that.nickname = res.Data.Nickname;
        that.OpenId = res.Data.OpenId;

        var ImgAjax = $.ajax({
          type: "POST",
          url: "http://leop1902.dwechat.com/api/cacheimageapi/Cache",
          data: {
            "imgUrls": [res.Data.HeadImgUrl],
            "width": "300",
            "height": "300"
          },
          success: function (suc) {
            console.log(suc.Data[0], "22222222222222222222")
            that.HeadImgUrl = "http://leop1902.dwechat.com" + suc.Data[0];


          }
        });
        ImgAjax.then(
          function () {
            console.log("that.saveimg()")
            // 查询当前用户是否点亮的
            var queryAjax = $.ajax({
              type: "POST",
              url: "http://leop1902.dwechat.com/api/json/QueryByMultipleCriterion",
              contentType: 'application/json',
              data: JSON.stringify({
                "Criterion": [{
                    "Key": "likeId",
                    "Value": that.OpenId,
                    "Method": "EQ"
                  },
                  {
                    "Key": "isLiked",
                    "Value": "true",
                    "Method": "EQ"
                  }
                ],
                "DataSecrets": '',
                "CollectionName": "leopLikess"

              }),
              success: function (suc) {
                console.log("querysuccess", suc);
                if (suc.Result == "Error") {
                  // 没有用户id，添加记录
                  $.ajax({
                    type: "POST",
                    url: "http://leop1902.dwechat.com/api/json/add",
                    contentType: 'application/json',
                    data: JSON.stringify({
                      "CollectionName": "leopLikess",
                      "Json": {
                        "likeId": that.OpenId,
                        "isLiked": "true",
                        "userInfo": that.userInfo,
                        "src":that.src,
                        "youname":that.youname,
                        "mytext":that.mytext,
                         "myname":that.myname,
                          "date":that.date,
                      },
                      "DataSecret": ""
                    }),
                    success: function (suc) {
                      console.log("success", suc)
                    }
                  });
                } else {

                }
              },
              error: function (err) {
                console.log(err)

              }


            });
            queryAjax.then(
              function () {
                var num = $.ajax({
                  type: "POST",
                  url: "http://leop1902.dwechat.com/api/json/QueryByMultipleCriterion",
                  contentType: 'application/json',
                  data: JSON.stringify({
                    "Criterion": [{
                      "Key": "isLiked",
                      "Value": "true",
                      "Method": "EQ"
                    }],
                    "DataSecrets": '',
                    "CollectionName": "leopLikess"

                  }),
                  success: function (suc) {
                    console.log(suc, "1111111111111111111111111111111111111111111")
                    for (var i = 0; i < suc.Data.length; i++) {
                      if (suc.Data[i].JsonObject.likeId == that.OpenId) {
                        console.log(i + 1, "i+1");
                        that.num = i + 1;
                        setTimeout(function () {
                          that.saveimg() 
                        }, 2000)
                      }
                    }

                  }
                });
              }

            )
          }

        )



        // setTimeout(function () {
        //   // 查询已点亮的
        //   $.ajax({
        //     type: "POST",
        //     url: "http://leop1806.dwechat.com/api/json/QueryByMultipleCriterion",
        //     contentType: 'application/json',
        //     data: JSON.stringify({
        //       "Criterion": [{
        //         "Key": "isLiked",
        //         "Value": "true",
        //         "Method": "EQ"
        //       }],
        //       "DataSecrets": '',
        //       "CollectionName": "leopLikess"

        //     }),
        //     success: function (suc) {
        //       console.log(suc, "1111111111111111111111111111111111111111111")
        //       for (var i = 0; i < suc.Data.length; i++) {
        //         if (suc.Data[i].JsonObject.likeId == that.OpenId) {
        //           console.log(i + 1, "i+1");
        //           that.num = i + 1;
        //         }
        //       }

        //     }
        //   });

        // }, 500);


        // setTimeout(function () {
        //   that.saveimg();

        // }, 1500)

        // setTimeout(function () {
        //   $(".fenxiang").show();
        //   $(".fenxiangImg").show();
        //   $(".fenxiangwenzi").show();
        // }, 3000);

      })
    }
  }

</script>
<style scoped>
.erweima img {
  width: 1.2rem;
     position: absolute;
    right: 0.3rem;
 bottom: 0.3rem;

}
  .fenxiang {
    position: fixed;
    right: 0.3rem;
    top: 0.3rem;
    width: 4.5rem;
  }

  .changan {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0.3rem;
    color: white;
    font-size: 0.35rem;
        width: 100%;
  }

  .numCont {
    position: absolute;
    left: 0.3rem;
 bottom: 0.3rem;
    font-size: 0.3rem;
    text-align: left;
    font-weight: 500;
  }

  .printFont {
    position: absolute;
    left: 40%;
    top: 40%;
    font-size: 10px;
  }

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

  header>img {
    width: 100%;
  }

  .img3 {
    width: 100%;
    height: 100%;
  }

  .img4 {



    position: absolute;
    bottom: -5%;
    left: 15%;
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


  .headImg {
    width: 1.2rem;
    height: 1.2rem;
    z-index: 999999999999999;
    border-radius: 50%;
    position: absolute;
    right: 0.2rem;
    top: 0.2rem;
  }

  .userName {
    width: 3rem;
    height: 15px;
    line-height: 15px;
    z-index: 999999999999999;
    position: absolute;
    right: 1.6rem;
    top: 0.6rem;
    text-align: right;
    font-size: 0.4rem;
    color: white;
  }

  #box {
     width: 7.5rem;
    position: relative;
    margin-top: 1.5rem;
    height: 12rem;
  }

  main {
    display: flex;
    justify-content: center;
    align-items: center
  }
.text {
  position: absolute;
  top: 4.4rem;
  left: 1.7rem;
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
  top: 6.8rem;
  left: 1.6rem;
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
</style>
