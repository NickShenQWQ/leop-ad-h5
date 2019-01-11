<template>
	<div class="p1">
		<div>
			<v-touch @swipeup="swipeUp"  class="touchWrapper">
				<main>
						<header>
							<div>
								<img src="../assets/leopImg/logo.png" alt="">
							</div>
						</header>
						<div class="logoo">
							<img src="../assets/imgs/logo.png" alt="">
							<div class="shangxin">
							<img class="imgxin1" ref="imgxin1" src="../assets/imgs/xinbai-2.png" alt="">
							</div>
						</div>
						<div class="content">
							<img  class="img1" ref="img1" src="../assets/leopImg/1-1-01.png" alt="">
							<img  class="img2" ref="img2" src="../assets/leopImg/1-2-01.png" alt="">
							<img  class="img3" ref="img3" src="../assets/leopImg/1-3-01.png" alt="">
							<img  class="img4" ref="img4" src="../assets/leopImg/1-4-01.png" alt="">
							<img  class="img5" ref="img5" src="../assets/leopImg/1-5-01.png" alt="">
						<div class="leftxin">
							<img class="imgxin2" ref="imgxin2" src="../assets/imgs/leftxin.png" alt="">
						</div>
						<div class="rightxin">
							<img class="imgxin3" ref="imgxin3" src="../assets/imgs/xinright.png" alt="">
						</div>
						            <div ref="sh" class="shanghua">
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
		name: 'p1',
		data() {
			return {
				img: []
			}
		},
		components: {

		},
		created() {

		},
		mounted() {
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
		
		
		TweenMax.fromTo(this.$refs.img1, 2, {
		opacity:0,
		}, {
		opacity:1,
		ease: 'linear',
		yoyo: true,
		onComplete:this.img1Done,
		})
		TweenMax.fromTo(this.$refs.imgxin2, 1, {
		transform: 'rotate(20deg)'
		}, {
		ease: 'linear',
		transform: 'rotate(-20deg)',
		yoyo: true,
		repeat: -1,
		})
        TweenMax.fromTo(this.$refs.imgxin1, 1, {
          transform: 'rotate(-20deg)'
        }, {
          ease: 'linear',
          transform: 'rotate(20deg)',
          yoyo: true,
          repeat: -1,
		})
		  TweenMax.fromTo(this.$refs.imgxin3, 1, {
            transform: 'rotate(-10deg)'
          }, {
            ease: 'linear',
            transform: 'rotate(10deg)',
            yoyo: true,
            repeat: -1,
		  })

     
		},
		methods: {
			swipeUp() {
				this.global.transitionName = 'up';
				this.$router.replace('/p2');
			},
			img1Done() {

				TweenMax.fromTo(this.$refs.img2, 1, {
						opacity:0,
					}, {
					opacity:1,
					yoyo: true,
					ease: 'linear',
					onComplete: this.img3Done
				});
				

			},

			img3Done() {
				TweenMax.fromTo(this.$refs.img3, 1, {
					opacity: 0,
				}, {
					opacity: 1,
					yoyo: true,
					ease: 'linear',
					onComplete: this.img4Done
				});
			},
			img4Done() {
				TweenMax.fromTo(this.$refs.img4, 1, {
					opacity: 0,
				}, {
					opacity: 1,
					yoyo: true,
					ease: 'linear',
					onComplete: this.img5Done
				});
			},
			img5Done() {
				TweenMax.fromTo(this.$refs.img5,1, {
					opacity: 0,
				}, {
					opacity: 1,
					yoyo: true,
					ease: 'linear',
				});
			},

		}
	}
</script>
<style scoped>
  .shangxin {
    width: 1.2rem;
    height: 1.2rem;
    position: absolute;
    top: 1rem;
    left: 6rem;
  }
  .logoo {
    width: 100%;
    height: 2.625rem;
    position: relative;
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
	img {
		width: 100%;
	}
	

	.img1 {
			width: 7rem;
		display: block;
		margin: 0 auto;
		margin-bottom: 3.8vh;
	}
	
	.img2 {
		opacity: 0;
			width: 7rem;
		display: block;
		margin: 0 auto;
		margin-bottom: 3.8vh;
	}
	
	.img3 {
			opacity: 0;
				width: 7rem;
		display: block;
		margin: 0 auto;
		margin-bottom: 3.8vh;
	}
	
	.img4 {
			opacity: 0;
				width: 7rem;
		display: block;
		margin: 0 auto;
		margin-bottom: 3.8vh;
	}
	
	.img5 {
				opacity: 0;
		width: 7rem;
    display: block;
    /* margin: 0 auto; */
    margin-bottom: 3.8vh;
    float: right;
	margin-right: -2rem;
	}
	
	.img6 {
		width: 3rem;
		position: fixed;
		top: 72%;
		left: 58%;
		z-index: -1;
		-webkit-transform: translateY(-50%);
		transform: translateY(-50%);
	}
	
	.img8 {
		opacity: 0;
		width: 5rem;
		left: 23%;
		position: fixed;
		top: 82%;
	}
	
	.img9 {
		opacity: 0;
		width: 1rem;
		position: absolute;
		top: 160%;
		left: 44%;
		
	}
	.img10 {
		width: 134%;
		position: relative;
		z-index: 101;
		left: -7vw;
		top: -7vw;
	}
	
	.img11 {
		position: relative;
		z-index: 102;
		left: -1vw;
		top: -40vw;
		transform: rotate(2deg);
	}
	/*.img7 {
  	opacity: 0;
    width: 1.3rem;
    position: fixed;
    top: 36%;
    left: 42%;
    z-index: -1;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
}*/
	
	.xia {
		z-index: 9999;
		position: fixed;
		bottom: 1rem;
		left: 4.55rem;
		width: 0.9rem;
	}
	
	.teshuqingbao {
		display: none;
		margin-top: 2.5rem;
		margin-bottom: 1rem;
	}
	
	.p1 {
		background: url('../assets/leopImg/bg-1.png') top center no-repeat;
		background-size: 100% 100%;
	}
	
	header {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 1.8rem;
	}
	
	main {
		width: 100%;
		height: 100%;
	}
	
	main .content {
    position: relative;
    width: 7rem;
    margin: 0 auto;
    margin-top: 0.3rem;
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

</style>