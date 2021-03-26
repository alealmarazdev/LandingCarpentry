<template>
    <div class="Clients">
        <section class="p-5 container">
            <div class=" d-flex flex-column justify-content-start">
                <h2 class="subtitle d-inline-flex">OUR CLIENTS</h2>
                <hr class="m-0"/>
            </div>
            <div class="row clients-logos">
            <div class="col-md-2 col-sm-3 col-xs-6 client">
                <div class="row m-0 inner-logo">
                   <a href="#"><img src="../assets/1.png" alt=""></a>
                </div>
            </div>
            <div class="col-md-2 col-sm-3 col-xs-6 client">
                <div class="row m-0 inner-logo">
                   <a href="#"><img src="../assets/2.png" alt=""></a>
                </div>
            </div>
            <div class="col-md-2 col-sm-3 col-xs-6 client">
                <div class="row m-0 inner-logo">
                   <a href="#"><img src="../assets/3.png" alt=""></a>
                </div>
            </div>
            <div class="col-md-2 col-sm-3 col-xs-6 client">
                <div class="row m-0 inner-logo">
                   <a href="#"><img src="../assets/4.png" alt=""></a>
                </div>
            </div>
            <div class="col-md-2 col-sm-3 col-xs-6 client">
                <div class="row m-0 inner-logo">
                   <a href="blog-details.html"><img src="../assets/5.png" alt=""></a>
                </div>
            </div>
            <div class="col-md-2 col-sm-3 col-xs-6 client">
                <div class="row m-0 inner-logo">
                   <a href="blog-details.html"><img src="../assets/6.png" alt=""></a>
                </div>
            </div>
        </div>
        </section>
    </div>
</template>
<script>

</script>

<style scoped>
    .Clients {

    }
    .container {
    width: 1200px;
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
 .clients-logos {
    padding-top: 15px;
}
.clients-logos .client {
    padding: 15px;
}
.clients-logos .inner-logo {
    border: 5px solid #f5f5f5;
    text-align: center;
    line-height: 113px;
}
.clients-logos .inner-logo a {
    display: block;
    height: 113px;
}
img {
    max-width: 100%;
    max-height: 100%;
}

</style>
