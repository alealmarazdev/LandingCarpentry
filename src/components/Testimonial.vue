<template>
    <section class="row sectpad testimonial-area" id="testimonials">
   <div class="containerTestimonial">
       <div class="row m-0 section_header common">
           <h2>What our client says</h2>
        </div>
        <div class="testimonial-sliders owl-carousel owl-theme owl-responsive-1200 owl-loaded">




        <div class="owl-stage-outer"><div class="owl-stage" style="transform: translate3d(-600px, 0px, 0px); transition: all 0.25s ease 0s; width: 2400px;"><div class="owl-item" style="width: 570px; margin-right: 30px;"><div class="item">
                <div class="media testimonial">
                    <div class="media-left">
                        <a href="#">
                            <img src="../assets/testimonial1.jpg" alt="">
                        </a>
                    </div>
                    <div class="media-body">
                        <p><span class="quote"></span>Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incid idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        <a href="#">-  John Michale</a>
                    </div>
                </div>
                <div class="media testimonial">
                    <div class="media-left">
                        <a href="#">
                            <img src="../assets/testimonial2.jpg" alt="">
                        </a>
                    </div>
                    <div class="media-body">
                        <p><span class="quote"></span>Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incid idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        <a href="#">-  John Michale</a>
                    </div>
                </div>
            </div></div><div class="owl-item active" style="width: 570px; margin-right: 30px;"><div class="item">
                <div class="media testimonial">
                    <div class="media-left">
                        <a href="#">
                            <img src="../assets/testimonial3.jpg" alt="">
                        </a>
                    </div>
                    <div class="media-body">
                        <p><span class="quote"></span>Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incid idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        <a href="#">-  John Michale</a>
                    </div>
                </div>
                <div class="media testimonial">
                    <div class="media-left">
                        <a href="#">
                            <img src="../assets/testimonial4.jpg" alt="">
                        </a>
                    </div>
                    <div class="media-body">
                        <p><span class="quote"></span>Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incid idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        <a href="#">-  John Michale</a>
                    </div>
                </div>
            </div></div><div class="owl-item active" style="width: 570px; margin-right: 30px;"><div class="item">
                <div class="media testimonial">
                    <div class="media-left">
                        <a href="#">
                            <img src="../assets/testimonial5.jpg" alt="">
                        </a>
                    </div>
                    <div class="media-body">
                        <p><span class="quote"></span>Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incid idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        <a href="#">-  John Michale</a>
                    </div>
                </div>
                <div class="media testimonial">
                    <div class="media-left">
                        <a href="#">
                            <img src="../assets/testimonial6.jpg" alt="">
                        </a>
                    </div>
                    <div class="media-body">
                        <p><span class="quote"></span>Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incid idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        <a href="#">-  John Michale</a>
                    </div>
                </div>
            </div></div><div class="owl-item" style="width: 570px; margin-right: 30px;"><div class="item">
                <div class="media testimonial">
                    <div class="media-left">
                        <a href="#">
                            <img src="../assets/testimonial7.jpg" alt="">
                        </a>
                    </div>
                    <div class="media-body">
                        <p><span class="quote"></span><span class="quote"></span>Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incid idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        <a href="#">-  John Michale</a>
                    </div>
                </div>
                <div class="media testimonial">
                    <div class="media-left">
                        <a href="#">
                            <img src="../assets/testimonial8.jpg" alt="">
                        </a>
                    </div>
                    <div class="media-body">
                        <p><span class="quote"></span>Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incid idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        <a href="#">-  John Michale</a>
                    </div>
                </div>
            </div></div></div></div><div class="owl-controls"><div class="owl-nav"><div class="owl-prev" style=""><i class="fa fa-angle-left"></i></div><div class="owl-next" style=""><i class="fa fa-angle-right"></i></div></div><div class="owl-dots" style=""><div class="owl-dot active"><span></span></div><div class="owl-dot"><span></span></div></div></div></div>
   </div>
</section>
</template>

<script>

</script>

<style scoped>
    .testimonial-area {
    background: #f5f4f4;
}
.sectpad {
    padding: 80px 0;
}
.containerTestimonial {
    width: 1200px;
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
}
.section_header {
    position: relative;
}
.section_header h2 {
    font: bold 26px/1.2 "Alegreya", serif;
    color: #000;
    text-transform: uppercase;
    position: relative;
    padding-bottom: 20px;
    letter-spacing: 0.3px;
    margin: 0;
}
.section_header h2:before {
    content: "";
    width: 50px;
    height: 3px;
    display: inline-block;
    background: #d7953e;
    position: absolute;
    bottom: 0;
}
.owl-carousel.owl-loaded {
    display: block;
}
.owl-carousel {

    width: 100%;
    -webkit-tap-highlight-color: transparent;
    position: relative;
    z-index: 1;
}
.owl-carousel .owl-stage-outer {
    position: relative;
    overflow: hidden;

}
.owl-carousel .owl-stage {
    position: relative;
     transform: translate3d(0px, 0px, 0px);
    transition: all 0.25s ease 0s;
    width: 2400px;
}

element.style {
    width: 570px;
    margin-right: 30px;
}
.owl-carousel .owl-item {
    position: relative;
    min-height: 1px;
    float: left;
width: 570px;
    margin-right: 30px;
    -webkit-tap-highlight-color: transparent;

    user-select: none;
}
.testimonial {
    background: #fff;
}
.testimonial-sliders {
    padding-top: 50px;
}

.testimonial .media-left {
    position: relative;
    padding-right: 0;
}
.media-left, .media-right, .media-body {
    display: table-cell;
    vertical-align: top;
}
.testimonial .media-left:before {
    content: '';
    border-style: solid;
    border-width: 10px 13px 10px 0;
    border-color: transparent #fff transparent transparent;
    position: absolute;
    right: 0;
    top: 19.2%;
    z-index: 12;
}
.testimonial .media-left a {
    display: block;
    width: 170px;
    height: 185px;
    line-height: 185px;
}
.testimonial .media-left img {
    max-width: 100%;
}
.owl-carousel .owl-item img {
    transform-style: preserve-3d;
}
.owl-carousel .owl-item img {
    display: block;
    width: 100%;

}
.testimonial + .testimonial {
    margin-top: 30px;
}
.testimonial  .media-body {
    vertical-align: middle;
    padding: 28px;
    text-align: justify
}
.testimonial  .media-body p {
    font: 400 14px/26px "Open Sans", sans-serif;
    letter-spacing: 0.3px;
    color: #898989;
    margin-bottom: 5px;
}
.testimonial  .media-body p span {
    display: inline-block;
    background: url(../assets/quote.jpg) no-repeat scroll center center;
    width: 21px;
    height: 19px;
    margin-right: 16px;
}
.testimonial .media-body a {
    font: 300 14px/26px "Open Sans", sans-serif;
    letter-spacing: 0.3px;
    color: #c89551;
    font-style: italic;
    text-align: right;
    display: block;
}
</style>
