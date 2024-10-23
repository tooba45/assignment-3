import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero' ;
import Image from 'next/image';


const Home = () => {
  return (
    <div  className="flex h-screen flex-col">
      <Header></Header>
      
      <Hero></Hero>

<div className="bg-pink-300 py-11 flex justify-center items-center h-screen w-{100%}">

<Image src="/images.png" width={"400"} height={"400"} alt="page.tsx" />
      
      </div>

      {/*About Section*/}
      <section id="about" className="bg-pink-300 py-11 flex justify-center items-center h-screen w-{100%}">
    <div className="bg-purple-400 rounded-lg shadow-lg p-8 max-w-3xl text-center">
      <h1 className= "text-2xl font-bold text-black">About me </h1>
        <p className="mt-3 text-black">&quot;My name is Tuba, I am a frontend developer&quot;</p>
    </div>
    </section>


    {/* Service Section*/}
    <section id="service" className="bg-pink-300 py-11 flex justify-center items-center h-screen w-{100%}">
    <div className="bg-purple-400 rounded-lg shadow-lg p-8 max-w-3xl text-center">
      <h1 className= "text-2xl font-bold text-black">Web Development</h1>
        <p className="mt-3 text-black">I create responsive,user-frinedly websites using modern
        technologies like HTML, CSS, JavaScript and TypeScript.</p>
    </div>
   </section>



{/*Contact Section*/}
      <section id="contact" className="bg-pink-300 py-11 flex justify-center items-center h-screen w-{100%}">
      <div className="bg-purple-400 rounded-lg shadow-lg p-8 max-w-3xl text-center">
         <h1 className="font-bold text-2xl text-black">Phone </h1> 
         <p className="m1-3 text-black"> 03675894234</p>
         
         <h2 className="font-bold text-2xl text-black">Email</h2>
         <p className="mt-1 text-black"> tooba456@gmail.com</p>
     
         <h1 className="font-bold text-2xl text-black">Address</h1>
         <p className="mt-1 text-black">Garden West Karachi</p>
         </div>
         </section>
    
      <Footer></Footer>
    </div>
  )
}

export default Home
