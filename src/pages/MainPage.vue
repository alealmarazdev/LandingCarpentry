<template>
  <div>
    <Navbar/>
    <Carousel/>
    <Experience/>
    <WeDo/>
    <Projects/>
    <Services/>
    <Testimonial/>
    <News/>
    <FAQS/>
    <InTouch/>
    <Clients/>
    <Contact/>
    <Footer/>
    <CopyRight/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Carousel from '../components/Carousel'
import Experience from '../components/Experience'
import WeDo from '../components/WeDo'
import Projects from '../components/Projects'
import Services from '../components/Services'
import Testimonial from '../components/Testimonial'
import News from '../components/News'
import FAQS from '../components/FAQS'
import InTouch from '../components/InTouch'
import Clients from '../components/Clients'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import CopyRight from '../components/CopyRight'

export default {
  name: 'MainPage',
  components: {
    Navbar,
    Carousel,
    Experience,
    WeDo,
    Projects,
    Services,
    Testimonial,
    News,
    FAQS,
    InTouch,
    Clients,
    Contact,
    Footer,
    CopyRight
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
