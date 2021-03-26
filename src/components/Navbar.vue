<template>
    <div class=" container-navbar d-flex justify-content-between">
        <div class="m-auto">
            <img class="logo" src="../assets/logo (1).png"/>
        </div>
        <div class="main-menu ">
            <nav class="navbar">
                <div class="wrapper">
                    <div class="main-nav">
                    <ul class="navbar-nav">
                        <li class="dropdown">
                            <a href="" class="dropdown-toggle">
                                Home
                            </a>
                        </li>
                        <li class="dropdown">
                            <a href="" class="dropdown-toggle">
                                About Us
                            </a>
                        </li>
                        <li class="dropdown">
                            <a href="" class="dropdown-toggle">
                                Services
                            </a>
                        </li>
                        <li class="dropdown">
                            <a href="" class="dropdown-toggle">
                                Projects
                            </a>
                        </li>
                        <li class="dropdown">
                            <a href="" class="dropdown-toggle">
                                Pages
                            </a>
                        </li>
                        <li class="dropdown">
                            <a href="" class="dropdown-toggle">
                                Blog
                            </a>
                        </li>
                        <li class="dropdown">
                            <a href="" class="dropdown-toggle">
                                Shop
                            </a>
                        </li>
                        <li class="dropdown">
                            <a href="" class="dropdown-toggle">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>

        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
    div.container-navbar{
        background: #000000
    }
    div.container-navbar .logo{
        width: 80%;
    }
    div.main-menu{
        width: calc(50% + 230px);
       /*  margin-left: 14%; */
    }
    div.main-menu nav.navbar{
        border: 0px;
        background: none rgba(29, 22, 17, 0.8);
        width: 96%;
       /*  box-shadow: none;
        margin-right: -17%;;
        margin-left: 9px;
        margin-bottom: 0;
        padding: 5px 0px;
        padding-left: 8px; */
        transform: skewX(-38deg);
        display: flex;
        box-sizing: border-box;
    }
    div.main-menu nav.navbar div.wrapper{
        /*transform: skew(-38deg);*/
        width: 100%;
        padding-left: 18px;
        /*border-color: #e7e7e7;*/
        border: 2px solid #352e28;
        border-right: 0px;
    }
    div.main-menu nav.navbar div.wrapper .main-nav{
        transform: skew(38deg);
    }
    div.main-menu nav.navbar div.wrapper ul.navbar-nav{
        display: flex;
        flex-direction: row;
        list-style-type: none;
    }
    div.main-menu nav.navbar div.wrapper ul.navbar-nav li.dropdown{
        float: left;
        position: relative;
        margin-left: 1.5%;
    }
    div.main-menu nav.navbar div.wrapper ul.navbar-nav li.dropdown a.dropdown-toggle{
        background: none;
        box-shadow: none;
        color: #c89551;
        font: 600 14px/48px "Raleway", sans-serif;
        letter-spacing: 0.3px;
        text-transform: uppercase;
        text-shadow: none;
        padding: 0 1px;
        transition: all 300ms linear 0s;
    }
</style>
