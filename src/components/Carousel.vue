<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >


      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template #img>
          <div class="bg-img working">
            <div class="box-container title">
              <h3 class="text-uppercase">
                we are available
              </h3>
            </div>
            <div class="box-container subtitle">
              <h3 class="text-uppercase text-white">
                for your wooden work
              </h3>
            </div>
            <div class="box-container list">
              <ul class="list" style="">
                  <li class="li-carousel">
                    <a href="#" class="li-item" >Domestic</a></li>
                  <li class="li-carousel">
                    <a href="#" class="li-item" >Commercial</a>
                  </li>
                  <li class="li-carousel">
                    <a href="#" class="li-item" style="">Industrial</a>
                  </li>
              </ul>
            </div>
            <div class="box-container phrase">
              <p class="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                 do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam exercitation.

              </p>
            </div>
            <div class="box-container button">
              <button class="text-uppercase text-white">
                PUrchase now
              </button>
            </div>
          </div>
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <div class="bg-img teamwork">
          </div>
        </template>
      </b-carousel-slide>
     <!-- Text slides with image -->
      <!-- <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide> -->

      <!-- Slides with custom text -->
      <!-- <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide>
    -->
      <!-- Slides with image only -->
      <!-- <b-carousel-slide img-src="../assets/bg.jpg"></b-carousel-slide> -->
      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <!-- <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide> -->
    </b-carousel>

   <!--  <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p> -->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    /* methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    } */
  }
</script>
<style scoped>
  .bg-img {
    height: 828px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center top;
  }
  .working{
    background-image: url('../assets/bg.jpg');
  }
  .teamwork{
    background-image: url('../assets/coworkers.jpg');
  }

.box-container {
  position: absolute;
  visibility: visible;
  z-index: 1;
   left: 135px;
}
.title{
    top: 255px;
}
.subtitle{
    top: 310px;
}
.list{
  top: 375px;
}
.phrase{
    top: 430px;
}
.button{
    top: 550px;
}
  ul {

    background: #251606;
}
ul li {
    display: inline-block;
    position: relative;
}
ul li:after {
    content: '|';
    width: 1px !important;
    height: 15px;
    position: absolute;
    top: 24%;
    bottom: 0;
    right: 0;
    bottom: 0;
    font: 500 14px/14px "Raleway", sans-serif !important;
    color: #fff;
}
  .list{
    transition: none 0s ease 0s;
    line-height: 20px;
    border-width: 0px;
    margin: 0px;
    padding: 0px;
    letter-spacing: 0px;
    font-weight: 400;
    font-size: 14px;
  }
  .li-carousel{
    transition: none 0s ease 0s;
    line-height: 20px;
    border-width: 0px;
    margin: 0px;
    padding: 0px;
    letter-spacing: 0px;
    font-weight: 400;
    font-size: 14px;

  }
  .li-item{
    transition: none 0s ease 0s;
    line-height: 40px;
    border-width: 0px;
    margin: 0px;
    padding: 1px 30px 1px 25px;
    letter-spacing: 3px;
    font-weight: 500;
    font-size: 20px;
  }
</style>
