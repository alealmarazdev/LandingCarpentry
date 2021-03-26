<template>
    <div class="Contact">
        <section class="">
            <div class=" ">
                <div class="left-side">
                    <div class="content">
                        <h3>If you have any wood work  need...</h3>
                        <h3>Simply call our 24 hour emergecny number.</h3>
                        <a href="tel:+018655248503" class="phone"><img src="../assets/phone.png" alt="">01865 524 8503</a>
                        <a href="tel:+018655248503" class="email"><img src="../assets/email.png" alt="">info@woodworshop.com</a>
                    </div>
                </div>
                <div class="right-side">
                    <img src="../assets/right-img.jpg" alt="">
                </div>
            </div>
        </section>
    </div>
</template>
<script>

</script>

<style scoped>
    .Contact {
        background: #000;
        overflow: hidden;
    }
   .left-side {
       width: calc(50% + 45px);
    float: left;
    position: relative;
    background: #57371f;
    height: 213px;

   }
   .left-side::before{
           content: "";
    position: absolute;
    border-top: 213px solid transparent;
    border-left: 174px solid #030504;
    line-height: 0px;
    top: 0;
    left: 100%;
}
.left-side .content {
    max-width: 630px;
    margin-left: auto;
    margin-right: 0;
    position: relative;
    z-index: 2;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
}
.left-side .content h3 {
    font: 300 22px/32px "Open Sans", sans-serif;
    margin: 0px;
    color: #ffffff;
}
.left-side .content h3 + h3 {
    font-weight: 400;
    color: #bc945e;
    margin-bottom: 33px;
}
.left-side .content .phone {
    font: 300 28px/35px "PT Serif", serif;
    letter-spacing: 0.3px;
    color: #bc945e;
    font-style: italic;
    margin-right: 54px;
    display: block;
    float: left;
}
.left-side .content img {
    margin-right: 15px;
}
img {
    vertical-align: middle;
}
.left-side .content .email {
    font: 400 20px/35px "Open Sans", sans-serif;
    letter-spacing: 0.3px;
    color: #bc945e;
    margin: 0;
    display: inline-block;
}
.left-side:after {
    content: "";
    border-top: 213px solid transparent;
    border-left: 160px solid #57371f;
    position: absolute;
    left: 100%;
    top: 0;
    display: block;
}
.right-side {

    width: calc(50% - 45px);
    display: inline-block;
}
</style>
