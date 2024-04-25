import { Link } from "react-router-dom"
import Navbar from "../Common/Navbar"
import Footer from "../Common/Footer"

const Home = () => {
  return (
    <div>
       <div className="pb-10 bg-[url('/car.webp')] bg-cover h-[800px]">
           <Navbar />
         <div className="mx-10 my-20">
            <h1 className="text-[65px] my-8 text-white">The Future of 
             <br/>Delivery is here
            </h1>
            <p className="text-[22px] text-red-400">Discover a Greener, faster self-Driving 
                <br/> Delivery solution with Volaso
            </p>
         </div>
       </div>
       <div className="bg-black pt-28">
        <hr/>
            <div className="flex flex-col gap-48 md:gap-28">
            <div className="px-24 mt-16">
                <h2 className="text-white my-7">VISION</h2>
                <p className="text-white text-[70px] md:text-[45px]">We&apos;re Here to Revolutionize the 
                 <br/>World of Local Shipping
                </p>
            </div>
            <div className="flex flex-row gap-20 pb-24 md:flex-col">
                <p className="text-white px-24 text-[23px] sm:text-[22px]">
                    This is the space to introduce visitors to the 
                    <br/>business or brand. Briefly Explain who is behind
                    <br/> it, what it does and what it makes it unique.
                    <br/> Share its core values and what this site has top
                    <br/> offer.
                </p>
                <img src="/first_car.webp" alt="car" 
                className="w-[470px] h-[450px] rounded-[30px]"
                />
            </div>
            </div>
       </div>
       <div className="pt-28 px-10">
        <hr/>
        <div>
            <div>
                <h4 className="my-12">OUR PRODUCT</h4>
                <p className="text-[70px] md:text-[45px]">
                    Fully Autonomous, 
                    <br/> Uncompromisingly Sustainable
                </p>
            </div>
            <div className="mt-10 rounded-[30px] bg-gray-100 p-10 flex flex-row gap-32">
               <div>
                <h3 className="my-10 italic">OPTIMIZED BATTERY EFFICIENCY</h3>
                 <p className="my-3"><span className="text-[25px]">223 Mi</span> <span className="text-[20px] ml-5">Electric Range</span></p>
                  <hr />
                 <p className="my-3"><span className="text-[25px]">30 Min</span> <span className="text-[20px] ml-5">to Fully Charge</span></p>
                 <p className="my-7 text-[18px]">
                    This is a space more about the business: who&apos;
                    <br /> behind it. What it does and What this site has to offer. It&apos;s an 
                    <br /> opportunity to tell the story behind the business or 
                    <br /> describe a social service or product it offers. You can use
                    <br /> this section to share the company history or Highlight a 
                    <br />particular feature that sets it apart from competitors
                 </p>
                 <Link className="flex flex-row underline">
                 <p>Read More</p>  
                 <img src="/arrow.png" alt="arrow"
                 className="w-8 h-8 rounded-full"
                 />  
                 </Link>
               </div>
               <div className=" pt-40 md:hidden">
                <img src="box.webp" alt="Box"
                className=" w-[470px] h-[350px] rounded-[30px]"
                />
               </div>
            </div>
        </div>
       </div>
       <div className="rounded-[30px] my-10 bg-gray-200 p-10 mx-8">
          <div className="flex flex-row gap-40">
            <div className="pt-20 md:hidden">
                <img src="/eye_car.webp" alt="car"
                className="w-[455px] h-96 rounded-[30px]"
                />
            </div>
            <div>
                <header className="my-10 italic">COMPACT</header>
                <p className="my-3"><span className="text-[25px]">50 Kg</span> <span className="text-[20px] ml-5">Payload Capacity</span></p>
                  <hr/>
                <p className="my-3"><span className="text-[25px]">60 Liter</span> <span className="text-[20px] ml-5">Storage Compartment</span></p>
                <p className="my-7 text-[18px]">
                           This is a space more about the business: who&apos;
                    <br /> behind it. What it does and What this site has to offer. It&apos;s an 
                    <br /> opportunity to tell the story behind the business or 
                    <br /> describe a social service or product it offers. You can use
                    <br /> this section to share the company history or Highlight a 
                    <br />particular feature that sets it apart from competitors
                 </p>
                 <Link className="flex flex-row gap-4">
                 <p>Read More</p>  
                 <img src="/arrow.png" alt="arrow"
                 className="w-8 h-8 rounded-full"
                 />  
                 </Link>
            </div>
          </div>
       </div>
       <div className="mt-10 rounded-[30px] bg-gray-100 p-10 flex flex-row gap-40 mx-7">
               <div>
                <h3 className="my-10 italic">ADVANCED SENSOR TECHNOLOGY</h3>
                 <p className="my-3"><span className="text-[25px]">360</span> <span className="text-[20px] ml-5">Sensors Coverage</span></p>
                  <hr />
                 <p className="my-3"><span className="text-[25px]">85 %</span> <span className="text-[20px] ml-5">Improved Reaction Time</span></p>
                 <p className="my-7 text-[18px]">
                    This is a space more about the business: who&apos;
                    <br /> behind it. What it does and What this site has to offer. It&apos;s an 
                    <br /> opportunity to tell the story behind the business or 
                    <br /> describe a social service or product it offers. You can use
                    <br /> this section to share the company history or Highlight a 
                    <br />particular feature that sets it apart from competitors
                 </p>
                 <Link className="flex flex-row gap-4">
                 <p>Read More</p>  
                 <img src="/arrow.png" alt="arrow"
                 className="w-8 h-8 rounded-full"
                 />  
                 </Link>
               </div>
               <div className=" pt-28 md:hidden">
                <img src="/Sensor.webp" alt="circle"
                className="w-96 rounded-[30px]"
                />
               </div>
            </div>
          <div className="mt-10 rounded-[30px] bg-black p-20 mx-7">
            <div className="flex flex-col gap-20">
            <div>
              <hr/>
              <header className="text-white my-12">WHY VOLASO</header>
              <p className="text-white text-[63px] md:text-[40px] sm:text-[10px]">
                A Different Approach, Using a New 
                <br />Method of Manufacturing
              </p>
            </div>
            <div className="flex flex-col gap-8 self-start mb-5">
              <p className="text-white text-start text-[20px]">
                Use this space to promote the business, its products 
                <br />or its services. Help people become familiar with the 
                <br />business and its offerings, creating a sense of 
                <br />connection and trust. Focus on what makes the 
                <br />business unique and how users can benefit from 
                <br />choosing it
              </p>
              <Link className="flex flex-row gap-4">
                 <p className="text-white">Read More</p>  
                 <img src="/arrow.png" alt="arrow"
                 className="w-8 h-8 rounded-full"
                 />  
                 </Link>
            </div>
            </div>
            <div>
              <img src="company.webp" alt="company"/>
            </div>
            </div>  
            <div className="bg-black mt-12 rounded-[30px] mx-10 p-10">
              <div>
                <hr />
                <header className="text-white my-12">COMPANY</header>
                <h3 className="text-white text-[60px] my-12">Volaso in Numbers</h3>
                <div className="flex flex-row justify-between mx-10 sm:flex-col sm:gap-10">
                 <div className="flex flex-row gap-36 md:flex-col md:gap-16">
                 <div className="flex flex-col gap-6">
                    <p className="text-white text-[24px]">247</p>
                    <hr />
                    <p className="text-white text-[24px]">Employees</p>
                  </div>
                  <div className="flex flex-col gap-6">
                    <p className="text-white text-[24px]">5</p>
                    <hr />
                    <p className="text-white text-[24px]">Core Teams</p>
                  </div>
                 </div>
                    <div className="flex flex-row gap-36 md:flex-col md:gap-16">
                    <div className="flex flex-col gap-6">
                    <p className="text-white text-[24px]">326</p>
                    <hr />
                    <p className="text-white text-[24px]">Partners WorldWide</p>
                  </div>
                  <div className="flex flex-col gap-6">
                    <p className="text-white text-[24px]">$200M</p>
                    <hr />
                    <p className="text-white text-[24px]">Capital</p>
                  </div> 
                    </div>
                </div>
              </div>
              <video autoPlay loop muted className="h-96 w-[100%] mt-20 pb-10">
                <source src="drive.mp4" type="video/mp4"/>
              </video>
            </div>
            <div className="mt-10 p-12 flex flex-col gap-20">
              <div className="flex flex-col gap-10">
                <hr />
                <h4 className="text-[24px]">COLLABORATION</h4>
                <h4 className="text-[60px]">Our Industry Partners</h4>
              </div>
              <div className="flex flex-col gap-20 self-end md:self-center">
                <div className="flex flex-row gap-16 sm:flex-col">
                  <div className="flex flex-col bg-gray-200 w-96 h-48 gap-5 rounded-[20px] justify-center items-center">
                    <img src="company1.jpg" alt="1"
                    className="w-24 h-16 rounded-full"
                    />
                    <p className="mt-3">IDL Software</p>
                  </div>
                  <div className="flex flex-col bg-gray-200 w-96 h-48 gap-5 rounded-[20px] justify-center items-center">
                    <img src="company2.jfif" alt="2"
                    className="w-24 h-16 rounded-full"
                    />
                    <p className="mt-4">General Transport</p>
                  </div>
                </div>
                <div className="flex flex-row gap-16 sm:flex-col">
                <div className="flex flex-col bg-gray-200 w-96 h-48 justify-center gap-5 rounded-[20px] items-center">
                    <img src="company3.png" alt="3"
                    className="w-24 h-16 rounded-full"
                    />
                    <p className="mt-3">TRI-NEX</p>
                  </div>
                  <div className="flex flex-col bg-gray-200 w-96 h-48 justify-center gap-5 rounded-[20px] items-center">
                    <img src="company4.jfif" alt="4"
                    className="w-24 h-16 rounded-full"
                    />
                    <p className="mt-4">IMOGEN CARS</p>
                  </div>
                </div>
              </div>
              <Footer />
            </div>
    </div>
  )
}

export default Home
