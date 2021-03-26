<template>
    <div class="Footer">
        <section class=" m-0">
            <div class=" container">
                <div class="row">
                    <div class="about-us col-sm-6 col-lg-3">
                        <a href="index.html" class="brand_logo">
                        <img src="../assets/logo (1).png" alt="logo image">
                        </a>
                        <p>
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                        </p>
                        <div class="social-icon row m0">
                        <ul class="nav">
                            <li>
                                <a href="#">
                                    <i class="fa fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fa fa-linkedin-square"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fa fa-facebook-square"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fa fa-skype"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fa fa-pinterest-square"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    </div>
                    <div class="links col-sm-6 col-lg-3">
                        <h4 class="title">our services</h4>
                        <div class="contact-list row m-0">
                        <ul class="w-100">
                            <li class="text-left"><a href="#"><i class="fa fa-angle-right"></i>Interior Furniture</a></li>
                            <li class="text-left"><a href="#"><i class="fa fa-angle-right"></i>Hardwood Flooring</a></li>
                            <li class="text-left"><a href="#"><i class="fa fa-angle-right"></i>Renovation of Office Furniture</a></li>
                            <li class="text-left"><a href="#"><i class="fa fa-angle-right"></i>Repairing of Wood Roof</a></li>
                            <li class="text-left"><a href="#"><i class="fa fa-angle-right"></i>Outdoor Furniture</a></li>
                        </ul>
                    </div>
                    </div>
                    <div class="contact col-sm-6 col-lg-3">
                        <h4 class="title">Get in Touch</h4>
                        <div class="contact-list row m-0">
                            <ul>
                                <li>
                                    <i class="fa fa-map-marker"></i>
                                    <div class="fleft location_address">
                                        Lorance 542B, Tailstoi Town 5248 MT, Wordwide Country
                                    </div>

                                </li>
                                <li>
                                    <i class="fa fa-phone"></i>
                                    <div class="fleft contact_no">
                                        <a href="#">01865 524 8503</a>
                                    </div>
                                </li>
                                <li>
                                    <i class="fa fa-envelope-o"></i>
                                    <div class="fleft contact_mail">
                                        <a href="#">info@woodworkshop.com</a>
                                    </div>
                                </li>
                                <li>
                                    <i class="icon icon-WorldWide"></i>
                                    <div class="fleft service_time">
                                        Mon - Sat : 9am to 6pm Sunday Close
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="form col-sm-6 col-lg-3">
                        <h4 class="title">Drop a message</h4>
                        <div class="widget-contact-list row m0">
                            <form class="submet-form row m0" action="#" method="post">
                                <input type="text" class="form-control" id="name" placeholder="Name">
                                <input type="email" class="form-control" id="email" placeholder="Email Address">
                                <textarea class="form-control message" placeholder="Message"></textarea>
                                <button class="submit" type="submit">submit now</button>
                            </form>
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
    .Footer {
        background: #f5f4f4;
    }
    section {
        background-image: url('../assets/footer-bg.jpg');
        background-size: cover;
    position: relative;
    padding: 80px 0px 64px 0px;

    }
    .container::after {
        content: "";
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.9);
    width: 100%;
    height: 100%;
    display: block;
    z-index: 0;



    }
    .row{
            margin-left: -15px;
    margin-right: -15px;

    }

    .about-us{
        z-index: 1;
    }
    img {
        vertical-align: middle;
    }
    p {
        font: 400 13px/26px "Open Sans", sans-serif;
        letter-spacing: 0.8px;
        color: #7c7c7c;
        padding-top: 36px;
        margin-bottom: 24px;

    }
    .title{
        font: 500 18px/17px "Open Sans", sans-serif;
        color: #bc945e;
        margin-top: 0px;
        text-transform: uppercase;
        margin-bottom: 24px;
    }
    .links{
        z-index: 1;
        margin-top: 34px;
    }
    .links .contact-list ul {
    margin: 0;
    padding: 0;
    }
    .links .contact-list ul li {
    padding: 12px 0px;
    border-top: 1px solid #2c2c2e;
}
.links .contact-list ul li a {
    font: 400 14px/23px "Open Sans", sans-serif;
    letter-spacing: 0.3px;
    color: #7b7b7b;
}
    .contact{
        z-index: 1;
        margin-top: 34px;
    }
    .form {
        z-index: 1;
        margin-top: 34px;
    }

</style>
