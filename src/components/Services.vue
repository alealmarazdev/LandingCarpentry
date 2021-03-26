<template>
    <div class="Services d-flex">
        <section class="w-50">
            <img class= "w-100" src="../assets/work.jpg"/>
        </section>
        <article class="w-50 work-promo">
            <div class="content">
                <h2 class="subtitle text-left">WELCOME TO WOOD WORKSHOP</h2>
                <p class="text-white text-left">
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                    consectetur, adipisci velit, sed quia non numquam eius modi tempora
                    incidunt ut labore et dolore magnam aliquam quae rat voluptatem.
                    Ut enim ad minima.
                </p>
                <h3 class="text-white text-left">We are available for 24/7 for you requirements</h3>
                <ul>
                    <li >
                        Complete Savety Analysis
                    </li>
                    <li >
                        Certified Company Since 2005
                    </li>
                    <li >
                        Complete Savety Analysis
                    </li>
                    <li >
                        Certified Company Since 2005v
                    </li>
                </ul>
            </div>
        </article>

        <!-- <section class="">


        <article class="work-promo">
            <div class=" d-flex flex-column justify-content-start">

                <hr class="m-0"/>
            </div>
        </article> -->
    </div>
</template>
<script>

</script>

<style scoped>
    .Services{

    }
    .work-promo{
        width: calc(50% + 115px);
        float: left;
        background: url(../assets/sizing.jpg) no-repeat scroll 100% 100%;
        -webkit-background-size: cover;
        background-size: cover;
        position: relative;
        padding-left:30px
    }
    .work-promo::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #4f311b;
        opacity: 0.90;
        z-index: 0;
    }
    .work-promo::before {
        content: '';
        display: block;
        width: 100%;
        background: url(../assets/utility.png) no-repeat scroll right bottom;
        height: -webkit-calc(100% - 137px);
        height: calc(100% - 137px);
        position: absolute;
        bottom: 0;
        z-index: 1;
        right: 0;
    }
    .subtitle {
        font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        font-weight: bolder;
        font-size: x-large;
        color: #ca8e3e;
    }
    .content {
        z-index: 2;
        position: relative;
        padding: 36px 20px 0px 20px;
    }
    li{
        color: #bc945e;
        width: 50%;
        float: left;
    }
</style>
