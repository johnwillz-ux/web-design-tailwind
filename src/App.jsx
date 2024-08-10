import CustomerReview from "./sections/CustomerReview";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Nav from "./components/Nav";
import PorpularProduct from "./sections/PorpularProduct";
import Services from "./sections/Services";
import SpecialOffer from "./sections/SpecialOffer";
import Subscribe from "./sections/Subscribe";
import SuperQuality from "./sections/SuperQuality";


const App = () => (
 <main className="relative">

  <Nav></Nav>


  <section className="xl:padding-l wide:padding-r padding-b">
    
    <Hero/>
    
    </section>


    <section className="padding">

    <PorpularProduct/>

    </section>


    <section className="padding">


      <SuperQuality/>



</section>


<section className="padding-x py-10">

  <Services></Services>

</section>



<section className="padding">
<SpecialOffer></SpecialOffer>
</section>




<section className="padding bg-blue-100">
<CustomerReview></CustomerReview>
</section>




<section className="padding-x sm:py-32 py-16 w-full">
 <Subscribe></Subscribe>
</section>




<section className="padding-x bg-black padding-t pb-8">
<Footer></Footer>
</section>

    




  
 </main>
);

export default App;