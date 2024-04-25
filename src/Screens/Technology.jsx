import Footer from "../Common/Footer"
import Navbar from "../Common/Navbar"

const Technology = () => {
  return (
    <div>
      <div className="bg-gray-500 h-[600px] bg-[url('/car.webp')] bg-cover">
      <Navbar />
        <div className="p-16 pt-20">
          <p className="text-[65px] text-white flex-wrap">
            It&apos;s Time For Volaso 
            <br /> to do the driving
          </p>
        </div>
      </div>
      <div className="p-10 mt-1">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-8">
            <hr />
          <h3 className="text-[25px]">THE VOLASO ROBOT</h3>
          <h2 className="text-[78px]">Perception Enabled Technology</h2>
          </div>
          <div className="self-end md:self-start">
            <p>
              Engineered to drived autonomously, the Volaso
              <br />delivery robot uses perception enabled sensors to
              <br />make decisions with enviromental awareness,
              <br />efficiency and safety.
            </p>
          </div>
        </div>
      </div>
      <div className="p-20">
        <div className="flex flex-row gap-5 md:flex-col">
          <div className="flex flex-col gap-12 rounded-[20px] bg-gray-400 p-10">
          <h3 className="text-[20px] mb-0">On Road Safety</h3>
            <hr />
              <p>
                Lorem, ipsum dolor sit amet consectetur 
                <br />adipisicing elit. Expedita harum voluptates,
                <br /> numquam quo officia omnis qui possimus mollitia 
                <br />voluptatibus non quam distinctio exercitationem eius 
                <br />dolore voluptas alias, sequi repudiandae deleniti!
              </p>
              <img 
              src="/person_car.webp"
              alt="Person with car"
              />
          </div>
          <div className="flex flex-col gap-12 rounded-[20px] bg-gray-400 p-10">
            <h3 className="text-[20px] mb-0">Low Emission and Efficiency</h3>
            <hr />
            <p>
                Lorem, ipsum dolor sit amet consectetur 
                <br />adipisicing elit. Expedita harum voluptates,
                <br /> numquam quo officia omnis qui possimus mollitia 
                <br />voluptatibus non quam distinctio exercitationem eius 
                <br />dolore voluptas alias, sequi repudiandae deleniti!
              </p>
              <img
              src="/engine.webp"
              alt="Car Fuel Emission"
              />
          </div>
        </div>
      </div>
      <div className="p-10">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-12">
          <hr />
          <h4 className="text-[23px]">THE VOLASO DIGITAL PRODUCTS</h4>
          <h2 className="text-[85px]">Seemless User Experience</h2>
          </div>
          <div className="self-end w-[520px] md:self-start md:w-full">
          <p className="text-[20px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            <br />Sint tempora minima eos aspernatur modi asperiores sit 
            <br />debitis fuga hic? Amet, aspernatur? Iusto nesciunt maxime 
            <br />maiores dicta! Qui fugiat modi nobis.
          </p>
          </div>
        </div>
        <div className="flex flex-row gap-32 mt-16 p-10 md:flex-col">
          <div>
            <img 
            src="/data_secure.webp"
            alt="Unkown"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h3>Advanced Data Security</h3>
            <hr />
            <p>
                Lorem ipsum dolor sit, amet consectetur 
                <br />adipisicing elit. Optio odit excepturi 
                <br />delectus iusto quia veniam ea quas dolorem 
                <br />cum culpa molestiae, quaerat cumque obcaecati 
                <br />rerum nulla reprehenderit facere eaque doloremque.
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-16 mt-16 md:flex-col">
          <div className="flex flex-col gap-4">
            <h2>Real Time Information</h2>
            <hr />
           <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              <br />Et iusto culpa asperiores, dolore laboriosam molestiae 
              <br />ipsam nesciunt veritatis reiciendis? Aperiam veniam vero 
              <br />neque dignissimos asperiores dicta corrupti expedita dolorum itaque?
           </p>
          </div>
          <div>
            <img
            src="/phone.webp"
            alt="with phone"
            />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Technology