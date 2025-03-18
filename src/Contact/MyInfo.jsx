import { ArrowLeft, Github, Linkedin, Mail, User, BadgeIcon as IdCard, Copy } from "lucide-react"
import { useState } from "react"
import myPic from '/profile/MyImagePicsArt.jpg';

export default function MyInfo() {

  const [isExpanded, setIsExpanded] = useState(false)

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    alert(`Copied: ${text}`)
  }

  return (
    <div className="min-h-screen relative overflow-hidden">

      <div
        className="absolute w-full h-[60vh] bottom-0 bg-black"
        style={{
          borderTopLeftRadius: "50% 20%",
          borderTopRightRadius: "50% 20%",
        }}
      ></div>

      <div className="relative z-10 max-w-md mx-auto mt-20 mb-10">
        <div className="bg-black bg-opacity-90 rounded-xl p-6 text-white border border-[#00bfa5] shadow-lg shadow-[#00bfa5]/20">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-[#00bfa5] to-[#ff6b6b] flex items-center justify-center">
                <img src={myPic} alt="" className="rounded-full scale-[0.95]" />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-[#00bfa5] p-1 rounded-full">
                <User className="w-4 h-4 text-black" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div
              className="cursor-pointer flex items-center justify-between"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <h2 className="text-xl font-bold text-center w-full">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00bfa5] to-[#ff6b6b]">
                  Personal Details
                </span>
              </h2>
            </div>

            <div className={`space-y-4 transition-all duration-300 ${isExpanded ? "opacity-100" : "opacity-100"}`}>
              <div className="flex items-center justify-between gap-3 p-3 bg-black bg-opacity-50 rounded-lg border border-[#00bfa5]/30">
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-[#00bfa5]" />
                  <div>
                    <div className="text-xs w-max text-[#00bfa5]">Full Name</div>
                    <div className="font-medium">Arulkumar M</div>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard("John Doe")}
                  className="p-1 hover:text-[#00bfa5] transition-colors"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-between gap-3 p-3 bg-black bg-opacity-50 rounded-lg border border-[#00bfa5]/30">
                <div className="flex items-center gap-3">
                  <IdCard className="w-5 h-5 text-[#00bfa5]" />
                  <div>
                    <div className="text-xs w-max text-[#00bfa5]">ZohoCorp ID</div>
                    <div className="font-medium">ZSTTK404/24</div>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard("EMP12345")}
                  className="p-1 hover:text-[#00bfa5] transition-colors"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-between gap-3 p-3 bg-black bg-opacity-50 rounded-lg border border-[#00bfa5]/30">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#00bfa5]" />
                  <div>
                    <div className="text-xs w-max text-[#00bfa5]">Email Address</div>
                    <div className="font-medium">arulkumar.m@zohocorp.com</div>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard("john.doe@company.com")}
                  className="p-1 hover:text-[#00bfa5] transition-colors"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </div>


          </div>
        </div>
      </div>

      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="relative">
          <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-[#00bfa5]"></div>
          <div className="space-y-8 relative">
            <a
              href="#"
              className="block w-10 h-10 bg-white rounded-full flex items-center justify-center relative z-10 border-2 border-[#00bfa5] hover:scale-110 transition-transform"
            >
              <Github onClick={() => window.open("https://github.com/arul9976/", "_blank")} className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="block w-10 h-10 bg-white rounded-full flex items-center justify-center relative z-10 border-2 border-[#00bfa5] hover:scale-110 transition-transform"
            >
              <Linkedin onClick={() => window.open("https://www.linkedin.com/in/arul-kumar-m-494791254/", "_blank")} className="w-5 h-5 text-[#0077b5]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}