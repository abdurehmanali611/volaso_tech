import Footer from "../Common/Footer"
import Navbar from "../Common/Navbar"

const Terms = () => {
  return (
    <div >
        <div>
            <Navbar />
        </div>
        <div className="bg-gray-300 w-[850px] px-10 py-10 ml-[28%] my-10 rounded-[30px] flex flex-col gap-6">
        <div className="my-10 ">
            <header className="text-[40px]">Terms & Conditions</header>
        </div>
        <div className="flex flex-col gap-5">
            <h2 className="text-[20px]">A LEGAL DISCLAIMER</h2>
            <hr />
            <p>
            The explanations and information provided on this page are only general and high-level explanations 
            <br />and information on how to write your own document of Terms & Conditions. You should not rely on 
            <br />this article as legal advice or as recommendations regarding what you should actually do, because 
            <br />we cannot know in advance what are the specific terms you wish to establish between your business 
            <br />and your customers and visitors. We recommend that you seek legal advice to help you understand 
            <br />and to assist you in the creation of your own Terms & Conditions
            </p>
        </div>
        <div className="flex flex-col gap-5">
            <h3 className="uppercase">Terms & conditions - The Basics</h3>
            <hr />
            <p>
            Having said that, Terms and Conditions (“T&C”) are a set of legally binding terms defined by you, as 
            <br />the owner of this website. The T&C set forth the legal boundaries governing the activities of the 
            <br />website visitors, or your customers, while they visit or engage with this website. The T&C are meant 
            <br />to establish the legal relationship between the site visitors and you as the website owner
            </p>
            <p>
            T&C should be defined according to the specific needs and nature of each website. For example, a 
            <br />website offering products to customers in e-commerce transactions requires T&C that are different 
            <br />from the T&C of a website only providing information (like a blog, a landing page, and so on). 
            </p>
            <p>
            T&C provide you as the website owner the ability to protect yourself from potential legal exposure, 
            <br />but this may differ from jurisdiction to jurisdiction, so make sure to receive local legal advice if you 
            <br />are trying to protect yourself from legal exposure
            </p>
        </div>
        <div className="flex flex-col gap-5">
            <h4>WHAT TO INCLUDE IN T&C DOCUMENT</h4>
            <hr />
            <p>
            Generally speaking, T&C often address these types of issues: Who is allowed to use the website; the 
            <br />possible payment methods; a declaration that the website owner may change his or her offering in 
            <br />the future; the types of warranties the website owner gives his or her customers; a reference to 
            <br />issues of intellectual property or copyrights, where relevant; the website owner&apos;s right to suspend or 
            <br />cancel a member&apos;s account; and much much more.
            </p>
        </div>
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default Terms