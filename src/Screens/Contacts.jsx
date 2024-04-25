import { useState } from "react"
import Footer from "../Common/Footer"
import Navbar from "../Common/Navbar"

const Contacts = () => {

  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [organization, setOrganzation] = useState('')
  const [industry, setIndustry] = useState('')
  const [message, setMessage] = useState('')

  const submitted = () => {
      name.length == 0 || lastName.length == 0 || email.length == 0 || 
      email.includes('@') == false || organization.length == 0 || industry.length == 0 || 
      message.length == 0 ? alert('Please Enter the informations above') : 
      alert('Thank you!!! We will get you soon')
  }

  return (
    <div>
      <div className="bg-gray-700">
        <Navbar />
        <div className="p-10 flex flex-col gap-5">
        <h2 className="text-white text-[64px]">Get In Touch</h2>
        <p className="text-white uppercase">
          Lorem ipsum dolor sit amet consectetur, 
          <br />adipisicing elit. Atque beatae dicta vel veniam ut? 
          <br />Asperiores cupiditate perferendis repellendus. Pariatur, 
          <br />deleniti. Fugit et corporis aperiam ab quas totam natus 
          <br />dolore ut.
        </p>
        </div>
          <div className="ml-[550px] flex flex-col gap-10 py-10">
            <div className="flex flex-row gap-10">
              <div className="flex flex-col gap-5">
                <h2 className="text-[22px] text-slate-400">First Name</h2>
                <input 
                type="text"
                placeholder="Your Name"
                className="w-80 h-10 rounded-[30px] pl-5"
                value={name}
                onChange={(newname) => setName(newname)}
                />
              </div>
              <div className="flex flex-col gap-5">
                <h2 className="text-[22px] text-slate-400">Last Name</h2>
                <input 
                type="text"
                placeholder="Last Name"
                className="w-80 h-10 rounded-[30px] pl-5"
                value={lastName}
                onChange={(newlast) => setLastName(newlast)}
                />
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-5">
                <h2 className="text-[22px] text-slate-400">Email</h2>
                <input 
                type="text"
                className="w-[650px] h-10 rounded-[30px] pl-5"
                placeholder="Email"
                value={email}
                onChange={(newemail) => setEmail(newemail)}
                />
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-5">
                <h2 className="text-[22px] text-slate-400">Organization</h2>
                <input 
                type="text"
                className="w-[650px] h-10 rounded-[30px] pl-5"
                placeholder="Organization"
                value={organization}
                onChange={(neworg) => setOrganzation(neworg)}
                />
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-5">
                <h2 className="text-[22px] text-slate-400">Type Of Industry</h2>
                <input 
                type="text"
                className="w-[650px] h-10 rounded-[30px] pl-5"
                placeholder="Industry Type"
                value={industry}
                onChange={(newindustry) => setIndustry(newindustry)}
                />
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-5">
                <h2 className="text-[22px] text-slate-400">Message</h2>
                <input 
                type="text"
                className="w-[650px] h-32 rounded-[30px] pl-5"
                placeholder="Write your message here"
                aria-multiline
                value={message}
                onChange={(newmessage) => setMessage(newmessage)}
                />
              </div>
            </div>
            <div>
              <button 
              onClick={submitted}
              className="bg-black text-white w-64 h-12 rounded-[25px]">
                SEND MESSAGE
              </button>
            </div>
          </div>
          <div>
            <Footer />
          </div>
      </div>
    </div>
  )
}

export default Contacts