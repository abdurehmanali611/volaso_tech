import { useState } from "react"
import { Link } from "react-router-dom"

const Footer = () => {

  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(true)
  const [checkboxRight, setCheckBoxRight] = useState(false)

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleSubscription = () => {
    email == '' || email == null || !email.includes('@') ? 
    alert('Please fill the required email field!')
     :
    setSubscribed(prev => !prev)

    if (subscribed == false) {
      setEmail('')
    }
  }

  return (
    <div>
      <div className="mt-16 p-10">
       <div className="flex flex-col gap-10">
        <p className="text-[73px] md:text-[38px]">
          Be The First To Recieve The Latest 
          <br />News From Volaso
        </p>
        {subscribed && (
          <div>
            <h3 className="text-[25px]">Email</h3>
          <input 
          placeholder="Your Email"
          value={email}
          onChange={handleEmailChange}
          className="rounded-[20px] px-5 h-12 w-full bg-transparent bg-slate-100"
          />
          </div>
        )}
       </div>
     <div>
            <div className="flex flex-row justify-between my-10">
            <div className="md:hidden">
            <label className="flex gap-4 mt-4">
              <input 
              type="checkbox"
              value={checkboxRight}
              onChange = {() => setCheckBoxRight(!checkboxRight)}
              required
              checked = {!subscribed}
              />
              Yes Subscribe Me To Your Newsletter
            </label>
            </div>
           <div>
           <button
            className="bg-black w-[450px] h-12 rounded-[25px] text-center align-middle text-white text-[20px] hover:bg-white hover:text-red-500 sm:w-96" 
            onClick={handleSubscription}
            >
              {subscribed ? "Subscribe" : "UnSubscribe"}
            </button>
           </div>
       </div>
          </div>
       <div className="mt-5 py-16 px-3">
        <div className="flex flex-row justify-between md:flex-col">
          <div className="flex gap-2 my-12">
            <p className="text-[23px]">Volaso</p>
            <img src="logo.jpg" alt="logo"
            className="w-12 h-10 rounded-full bg-white"
            />
          </div>
         <div className="flex flex-row gap-20 md:gap-32">
         <div className="flex flex-col gap-5">
            <h4 className="text-[23px] font-semibold">COMPANY</h4>
            <p>
            <Link 
            className="text-[20px] hover:text-cyan-200"
            to='/technology'
            >
              Technology
            </Link>
            </p>
            <p>
            <Link
            className="text-[20px] hover:text-cyan-200"
            to='/about'
            >
              About
            </Link>
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <h4 className="text-[23px] font-semibold">LEGAL</h4>
            <p>
            <Link
            className="text-[20px] hover:text-cyan-200"
            to='/terms'
            >
              Terms and Conditions
            </Link>
            </p>
            <p>
            <Link
            className="text-[20px] hover:text-cyan-200"
            to='/privacy'
            >
              Privacy Policy
            </Link>
            </p>
          </div>
         </div>
          <div className="flex flex-row gap-20 md:gap-32 md:my-16">
          <div className="flex flex-col gap-5">
            <h4 className="text-[23px] font-semibold">Social</h4>
            <p>
            <Link
            className="text-[20px] hover:text-cyan-200"
            >
              Facebook
            </Link>
            </p>
            <p>
            <Link
            className="text-[20px] hover:text-cyan-200"
            >
              Instagram
            </Link>
            </p>
            <p>
            <Link
            className="text-[20px] hover:text-cyan-200"
            >
              Linkdin
            </Link>
            </p>
            <p>
            <Link
            className="text-[20px] hover:text-cyan-200"
            >
              X
            </Link>
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <h4 className="text-[23px] font-semibold">Contacts</h4>
            <p>
            <Link
            className="text-[20px] hover:text-cyan-200"
            to='mailto:/abdurehmanali611@gmail.com'
            >
              abdurehmanali611@gmail.com
            </Link>
            </p>
            <p>
            <Link
            to='tel:/+251935000642'
            className="text-[20px] hover:text-cyan-200"
            >
              Tel: +251935000642
            </Link>
            </p>
            <p>
              Addis Ababa, Ethiopia
            </p>
          </div>
          </div>
        </div>
       </div>
    </div>
    <p className="text-[24px] p-10">
        &copy; by Abdurehman Ali
       </p>
    </div>
  )
}

export default Footer
