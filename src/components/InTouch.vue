<template>
<section class=" touch landing-page-contact" id="contact">
    <div class="sectpad touch_bg">
        <div class="container">
            <div class=" m-0 color section_header">
                <h2>get in touch</h2>
                <p>If you are interested in finding out more about how we can help your organization, please fill out the form below. you can call us anytime between 4 A.M. to 2 P. M. GMT</p>
            </div>

            <div class="row touch_middle">
                <div class="col-md-4 open_hours">
                    <div class="row m-0 touch_top">
                        <ul class="nav">
                            <li class="item">
                                <div class="media mt-0">
                                    <div class="media-left">
                                        <a href="#">
                                            <i class="fa fa-map-marker"></i>
                                        </a>
                                    </div>
                                    <div class="media-body">
                                        Wood Workshop, 562, Mallin Street New Youk, NY 100 254
                                    </div>
                                </div>
                            </li>
                            <li class="item">
                                <div class="media">
                                    <div class="media-left">
                                        <a href="#">
                                            <i class="fa fa-envelope-o"></i>
                                        </a>
                                    </div>
                                    <div class="media-body">
                                        info@woodworkshopcom
                                        support@woodworkshopcom
                                    </div>
                                </div>
                            </li>
                            <li class="item">
                                <div class="media">
                                    <div class="media-left">
                                        <a href="#">
                                            <i class="fa fa-phone"></i>
                                        </a>
                                    </div>
                                    <div class="media-body">
                                        + 1800 562 2487<br>
                                        + 3215 546 8975
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-8 input_form">
                    <form action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
                        <input type="text" class="form-control" id="yourname" name="yourname" placeholder="First">
                        <input type="email" class="form-control" id="youremail" name="youremail" placeholder="Email">
                        <input type="text" class="form-control" id="subject" name="subject" placeholder="Subject">
                        <textarea class="form-control" rows="6" id="message" name="message" placeholder="Message"></textarea>
                        <div class="row m-0">
                            <button type="submit" class="btn btn-default submit">Submit Now</button>
                        </div>
                    </form>
                    <div id="success"><p>Your message sent successfully.</p></div>
                    <div id="error"><p>Something is wrong. Message cant be sent!</p></div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>
<script>

</script>

<style scoped>
.landing-page-contact {
    position: relative;
     text-align: justify
}
.landing-page-contact:after {
    content: '';
    background: url(../assets/get1.png) no-repeat scroll bottom right;
    position: absolute;
    width: 100%;
    height: -webkit-calc(100% - 289px);
    height: calc(100% - 289px);
    bottom: 6%;
    right: 0;
    display: block;
    z-index: -1;
}
.sectpad {
    padding: 80px 0;
}
.container {
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
color: #242424 ;
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

.touch .touch_bg .section_header p {
    max-width: 840px;
}
.section_header p {
    font: 400 14px/26px "Open Sans", sans-serif;
    letter-spacing: 0.3px;
    color: #898989;
    padding-top: 25px;
    margin: 0;
}
.touch .touch_bg .touch_middle {
    padding-top: 80px;
}
.nav {
    margin-bottom: 0;
    padding-left: 0;
    list-style: none;
}

.touch .touch_bg .touch_top ul .item:first-child {
    padding-top: 0;
}


.touch .touch_bg .touch_top ul .item {
    padding: 15px 28px 30px 0px;
    text-align: center;
}

.nav>li {
    position: relative;
    display: block;
}

.touch .touch_bg .touch_top ul .item .media .media-left {
    padding-right: 30px;
    vertical-align: middle;
}
.touch .touch_bg .touch_top ul .item .media .media-left a {
    color: #e1ba60;
    border: 1px solid #e1ba60;
    border-radius: 100%;
    display: block;
    width: 50px;
    height: 50px;
}
.touch .touch_bg .touch_top ul .item .media .media-left a i {
    border-radius: 50%;
    font-size: 30px;
    line-height: 32px;
    padding-top: 8px;
}
.touch .touch_bg .touch_top ul .item .media .media-body {
    text-align: left;
    font: 14px/26px "Open Sans", sans-serif;
    color: #898989;
    letter-spacing: 0.3px;
}
.touch .touch_bg .touch_middle .input_form {
    position: relative;
}
.touch .touch_bg .touch_middle .input_form form .form-control {
    margin-bottom: 20px;
    border-radius: 0;
    font: 15px/31px "Open Sans", sans-serif;
    color: #959595;
    padding: 11px 20px;
    border: 1px solid #e1e1e1;
    height: auto;
    -webkit-box-shadow: none;
    box-shadow: none;
}
.form-control {
    display: block;
    width: 100%;

    background-color: #fff;
    background-image: none;

    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
}
.touch .touch_bg .touch_middle .input_form form textarea.form-control {
    margin-bottom: 32px;
    resize: none;
    padding: 15px 20px;
    height: 203px;
}
.touch .touch_bg .touch_middle .input_form form .form-control {

    border-radius: 0;
    font: 15px/31px "Open Sans", sans-serif;
    color: #959595;

    border: 1px solid #e1e1e1;

    box-shadow: none;
}

.touch .touch_bg .touch_middle .input_form form button {
    text-transform: uppercase;
    font: 600 15px/36px "Open Sans", sans-serif;
    color: #ae7a51;
    padding: 2px 29px 0;
    text-shadow: none;
    letter-spacing: 1px;
    border: 1px solid #cdcdcd;
    background: transparent;
    border-radius: 0;
}
.submit {

    margin-top: 8px;

    box-shadow: none;
    outline: none;


    position: relative;


    transition: all 300ms linear 0s;
    z-index: 2;
}

</style>
