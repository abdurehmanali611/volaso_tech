import Navbar from "../Common/Navbar"
import Footer from "../Common/Footer"

const Privacy = () => {
  return (
    <div >
        <div>
            <Navbar />
        </div>
        <div className="bg-gray-300 w-[850px] px-10 py-10 ml-[28%] my-10 rounded-[30px] flex flex-col gap-6">
        <div className="my-10 ">
            <header className="text-[40px]">Privacy Policy</header>
        </div>
        <div className="flex flex-col gap-5">
            <h2 className="text-[20px]">A LEGAL DISCLAIMER</h2>
            <hr />
            <p>
            The explanations and information provided on this page are only general and high-level explanations 
            <br />and information on how to write your own document of a Privacy Policy. You should not rely on this 
            <br />article as legal advice or as recommendations regarding what you should actually do, because we 
            <br />cannot know in advance what are the specific privacy policies you wish to establish between your 
            <br />business and your customers and visitors. We recommend that you seek legal advice to help you 
            <br />understand and to assist you in the creation of your own Privacy Policy.
            </p>
        </div>
        <div className="flex flex-col gap-5">
            <h3 className="uppercase">privacy policy - The Basics</h3>
            <hr />
            <p>
            Having said that, a privacy policy is a statement that discloses some or all of the ways a website 
            <br />collects, uses, discloses, processes, and manages the data of its visitors and customers. It usually 
            <br />also includes a statement regarding the website&apos;s commitment to protecting its visitors&apos; or customers&apos; 
            <br />privacy, and an explanation about the different mechanisms the website is implementing in order to 
            <br />protect privacy.
            </p>
            <p>
            Different jurisdictions have different legal obligations of what must be included in a Privacy Policy. 
            <br />You are responsible to make sure you are following the relevant legislation to your activities and 
            <br />location.
            </p>
        </div>
        <div className="flex flex-col gap-5">
            <h4>WHAT TO INCLUDE IN PRIVACY POLICY</h4>
            <hr />
            <p>
            Generally speaking, a Privacy Policy often addresses these types of issues: the types of information 
            <br />the website is collecting and the manner in which it collects the data; an explanation about why is the 
            <br />website collecting these types of information; what are the website&apos;s practices on sharing the 
            <br />information with third parties; ways in which your visitors an customers can exercise their rights 
            <br />according to the relevant privacy legislation; the specific practices regarding minors&apos; data collection; 
            <br />and much much more.
            </p>
        </div>
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default Privacy