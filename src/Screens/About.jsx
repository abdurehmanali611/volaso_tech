import Footer from "../Common/Footer"
import Navbar from "../Common/Navbar"

const About = () => {
  return (
    <div>
      <div className="bg-[url('/car.webp')] bg-cover h-[600px]">
        <Navbar />
        <div className="p-16">
          <p className="text-white text-[60px]">
            Improving EveryDay 
            <br /> Life with Robotics
          </p>
        </div>
      </div>
      <div className="m-10 ">
        <div className="flex flex-col gap-16">
          <hr />
          <div className="flex flex-col gap-16">
            <h3 className="text-[30px]">OUR MISSION</h3>
            <h5 className="text-[65px]">Driving A Sustainable Future</h5>
          </div>
          <div className="flex flex-row gap-48 md:flex-col md:gap-20">
            <div className="h-[100%]">
              <img 
              src="/Robot_Ocean.webp"
              alt="car drive image"
              className="h-96 w-full rounded-[20px]"
              />
            </div>
            <div className="flex flex-col gap-7 md:w-full md:gap-0">
              <p>
                Lorem ipsum dolor sit amet consectetur 
                <br />adipisicing elit. Aliquam modi 
                <br />reiciendis labore nulla quisquam? 
                <br />At ducimus esse saepe velit iusto 
                <br />beatae perferendis delectus, natus 
                <br />nostrum possimus quam aliquid 
                <br />accusantium sed!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur 
                <br />adipisicing elit. Aliquam modi 
                <br />reiciendis labore nulla quisquam? 
                <br />At ducimus esse saepe velit iusto 
                <br />beatae perferendis delectus, natus 
                <br />nostrum possimus quam aliquid 
                <br />accusantium sed!
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-12 mt-10">
          <div className="p-5">
            <h3 className="text-[60px]">OPERATIONAL EXCELLENCE</h3>
          </div>
          <div className="flex flex-row gap-48 md:flex-col md:gap-20">
          <div className="flex flex-col gap-10 md:gap-0">
            <p>
                Lorem ipsum dolor sit amet consectetur 
                <br />adipisicing elit. Aliquam modi 
                <br />reiciendis labore nulla quisquam? 
                <br />At ducimus esse saepe velit iusto 
                <br />beatae perferendis delectus, natus 
                <br />nostrum possimus quam aliquid 
                <br />accusantium sed!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur 
                <br />adipisicing elit. Aliquam modi 
                <br />reiciendis labore nulla quisquam? 
                <br />At ducimus esse saepe velit iusto 
                <br />beatae perferendis delectus, natus 
                <br />nostrum possimus quam aliquid 
                <br />accusantium sed!
              </p>
            </div>
            <div>
              <img 
              src="/Engineer.webp"
              alt="explorer"
              className="w-[650px] h-96"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="m-10">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-10">
            <hr />
            <h3 className="text-[25px]">WHO WE ARE</h3>
            <h5 className="text-[65px]">Meet The Founders</h5>
          </div>
          <div className="self-end">
            <p className="text-[20px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              <br />Fugiat minima quia, officiis eos nemo excepturi 
              <br />culpa iste sit dolores ratione distinctio! Esse, 
              <br />accusamus sed fugit blanditiis saepe nam aspernatur 
              <br />deleniti!
            </p>
          </div>
          <div className="flex flex-row self-end md:flex-col md:gap-10 md:self-start">
            <div className="w-48 flex flex-col gap-3 bg-blue-500 p-5 mx-5 rounded-[25px] md:w-full">
              <h2>SARAH SUAREZ</h2>
              <h3>CEO</h3>
              <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <img 
              src="/CEO.webp"
              alt="first_person"
              />
            </div>
            <div className="w-48 flex flex-col gap-3 bg-blue-500 p-5 mx-5 rounded-[25px] md:w-full md:items-center">
              <h2>SARAH SUAREZ</h2>
              <h3>CEO</h3>
              <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.              
              </p>
              <img 
              src="/VPE.webp"
              alt="second_person"
              />
            </div>
            <div className="w-48 flex flex-col gap-3 bg-blue-500 p-5 mx-5 rounded-[25px] md:w-full md:items-center">
              <h2>SARAH SUAREZ</h2>
              <h3>CEO</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <img 
              src="/CTO.webp"
              alt="third_person"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 p-10">
          <div className="flex flex-col gap-10">
            <hr />
            <h3 className="text-[25px]">PRESS</h3>
            <h5 className="text-[65px]">Volaso In the News</h5>
          </div>
          <div className="self-end my-10">
            <p className="text-[20px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              <br />Fugiat minima quia, officiis eos nemo excepturi 
              <br />culpa iste sit dolores ratione distinctio! Esse, 
              <br />accusamus sed fugit blanditiis saepe nam aspernatur 
              <br />deleniti!
            </p>
          </div>
          <div className="flex flex-row self-end md:self-start">
            <div className="w-52 flex flex-col gap-3 bg-blue-500 p-5 mx-5 rounded-[25px] h-40">
              <h2 className="text-[25px]">PALO ALTO</h2>
              <p>TRIBUNAL</p>
            </div>
            <div className="w-52 flex flex-col gap-3 bg-blue-500 p-5 mx-5 rounded-[25px] h-40">
              <h2 className="text-[25px]">TB REVIEW</h2>
            </div>
          </div>
          <div className="flex flex-row self-end md:self-start">
            <div className="w-52 flex flex-col gap-3 bg-blue-500 p-5 mx-5 rounded-[25px] h-40">
              <div className="flex flex-row gap-5">
              <div className="border-gray-400">
                <h2 className="text-[25px]">R</h2>
              </div>
              <div>
                <h2 className="text-[25px]">C</h2>
              </div>
              <div>
                <h2 className="text-[25px]">R</h2>
              </div>
              </div>
            </div>
            <div className="w-52 flex flex-col gap-3 bg-blue-500 p-5 mx-5 rounded-[25px] h-40">
              <h2 className="text-[25px]">FINANCE</h2>
            </div>
          </div>
          </div> 
          <div>
            <Footer />
          </div>
    </div>
  )
}

export default About