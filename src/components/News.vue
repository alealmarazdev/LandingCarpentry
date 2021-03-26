<template>
    <div class="News">
        <section class="p-5 container">
            <div class=" d-flex flex-column justify-content-start">
                <h2 class="subtitle d-inline-flex">LATEST NEWS</h2>
                <hr class="m-0"/>
            </div>
            <div class="row latest-content">
                <div class="col-sm-4 clo-xs-12 latest">
                    <div class="row m-0 latest-image">
                        <a href="blog-details.html"><img src="../assets/working1.jpg" alt=""></a>
                        <div class="latest-info-date"><a href="#"><h3>14 <small>MAR</small></h3></a></div>
                    </div>
                    <div class="latest-news-text">
                        <a href="blog.html">
                            <h4>Wood Work Adds Value to Your Property</h4>
                        </a>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa nt ium dolor emque laudantium totam.</p>
                        <div class="row m-0 latest-meta">
                            <a href="#"><i class="fa fa-user"></i>Anjori Meyami</a> <a class="read_more" href="single.html"><i class="fa fa-comments"></i> Comments: 6</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 clo-xs-12  latest">
                    <div class="row m-0 latest-image">
                        <a href="blog-details.html"><img src="../assets/working2.jpg" alt=""></a>
                        <div class="latest-info-date"><a href="#"><h3>14 <small>MAR</small></h3></a></div>
                    </div>
                    <div class="latest-news-text">
                        <a href="blog-details.html">
                            <h4>Wood Work Adds Value to Your Property</h4>
                        </a>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa nt ium dolor emque laudantium totam.</p>
                        <div class="row m-0 latest-meta">
                        <a href="#"><i class="fa fa-user"></i>Anjori Meyami</a> <a class="read_more" href="single.html"><i class="fa fa-comments"></i> Comments: 6</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 clo-xs-12 latest">
                    <div class="row m-0 latest-image">
                        <a href="blog-details.html"><img src="../assets/working3.jpg" alt=""></a>
                        <div class="latest-info-date"><a href="#"><h3>14 <small>MAR</small></h3></a></div>
                    </div>
                    <div class="latest-news-text">
                        <a href="blog.html">
                            <h4>Wood Work Adds Value to Your Property</h4>
                        </a>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa nt ium dolor emque laudantium totam.</p>
                        <div class="row m-0 latest-meta">
                            <a href="#"><i class="fa fa-user"></i>Anjori Meyami</a> <a class="read_more" href="single.html"><i class="fa fa-comments"></i> Comments: 6</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>

</script>

<style scoped>
    .News {
        background: #f5f4f4;
        background-image: url('../assets/bg-white.png');
        background-size: cover;
    }
    .subtitle {
        font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        font-weight: bolder;
        color: #282c3d
    }
    hr {
        /*content: "";*/
        width: 50px;
        height: 3px;
        display: inline-block;
        background: #d7953e;
        /*position: absolute;*/
        bottom: 0;
    }
    .latest-news-area .latest-content {
    margin-top: 50px;
}
.latest-image {
    position: relative;
}
.latest-image img {
    max-width: 100%;
}
.latest-image .latest-info-date {
    position: absolute;
    width: 62px;
    height: 76px;
    text-align: center;
    background: #bc945e;
    left: 0;
    bottom: 0;
}
 .latest-image .latest-info-date h3 {
    font: 600 25px/21px "Open Sans", sans-serif;
    letter-spacing: 0.3px;
    color: #fff;
}
.latest-image .latest-info-date h3 small {
    font: 500 14px/21px "Open Sans", sans-serif;
    letter-spacing: 0.3px;
    color: #fff;
    text-transform: uppercase;
    display: block;
}
.latest-news-text {
    padding: 21px 30px 20px 30px;
    background: #fff;
    border: 1px solid #ebebeb;
}

 .latest-news-text h4 {
    font: 500 16px/26px "Open Sans", sans-serif;
    letter-spacing: 0.3px;
    color: #000;
    margin-top: 0;
    -webkit-transition: all 300ms linear 0s;
    transition: all 300ms linear 0s;
}
 .latest-news-text p {
    font: 400 14px/26px "Open Sans", sans-serif;
    letter-spacing: 0.3px;
    color: #898989;
    border-bottom: 1px dashed #ededed;
    border-width: 2px;
    padding-bottom: 15px;
    margin-bottom: 13px;
}

.latest-news-text .latest-meta a {
    font: normal 13px/30px "Open Sans", sans-serif;
    color: #c1c1c1;
    padding-right: 13px;
}

a, .btn, button {
    text-decoration: none;
    outline: none;
    -webkit-transition: all 300ms linear 0s;
    transition: all 300ms linear 0s;
}
</style>
