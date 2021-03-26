<template>
    <section class="FAQS row frequently-area" id="faqs">
        <div class="container">
            <div class="row m-0 section_header">
            <h2>Frenquently ask questions</h2>
            </div>
            <div class=" m-0 frequent-content">
                <h4>Can I change plans at anytime?</h4>
                <p>Curabitur ac odio aliquam, pellentesque sem feugiat, mattis lectus. Pellentesque a dui ullamcorper, interdum odio vel, placerat nisi.</p>
                <h4>Can I get a refund?</h4>
                <p>Morbi commodo hendrerit elementum. Aliquam non sapien dignissim, pharetra sapien eu, semper urna. Integer semper laoreet massa, id elementum neque pharetra sit amet. Phasellus nec massa in mi ultrices tristique sed eu libero.</p>
                <h4>How do I sign up?</h4>
                <p>Nam libero orci, rhoncus id est vitae, vehicula venenatis nunc.</p>
                <h4>What is meant by unlimited?</h4>
                <p>Donec posuere dolor nunc, a tristique velit hendrerit at. Fusce feugiat rutrum turpis in dictum. Sed a pulvinar augue.</p>
                <h4>Can I change plans at anytime?</h4>
                <p>Curabitur ac odio aliquam, pellentesque sem feugiat, mattis lectus. Pellentesque a dui ullamcorper, interdum odio vel, placerat nisi.</p>
            </div>
        </div>
    </section>
</template>
<script>

</script>

<style scoped>
    .frequently-area {
    padding: 80px 0px 65px 0px;
    background: url(../assets/frenquently-bg.jpg) no-repeat scroll center 0;
    -webkit-background-size: cover;
    background-size: cover;
    position: relative;
    z-index: 1;
    }
    .frequently-area:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #3b1e09;
        top: 0;
        left: 0;
        display: block;
        opacity: 0.80;
        z-index: -1;
    }
    .container {
        width: 1200px;
    }
    .section_header {
        position: relative;
    }
    .frequently-area h2 {
        color: #fff;
    }
    .section_header h2 {
        font: bold 26px/1.2 "Alegreya", serif;
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
    .frequent-content {
        padding-top: 10px;
        text-align: justify
    }
    .frequent-content h4 {
        font: 600 18px/26px "Open Sans", sans-serif;
        letter-spacing: 0.3px;
        color: #fff;
        margin: 0;
        padding-top: 15px;
        text-transform: uppercase;
    }
    .frequent-content P {
        font: 400 15px/26px "Open Sans", sans-serif;
        letter-spacing: 0.3px;
        color: #fff;
    }
    p {
        margin: 0 0 10px;
    }
</style>
