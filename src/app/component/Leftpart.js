"use client"
import {useState} from "react"
import { IoCaretUpSharp } from "react-icons/io5";
import { CiPen } from "react-icons/ci";
import { TbSpeakerphone } from "react-icons/tb";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { TbFolder } from "react-icons/tb";
import { BiQrScan } from "react-icons/bi";
import { CiSquarePlus } from "react-icons/ci";
import { IoIosAdd } from "react-icons/io";
import { IoCaretDownSharp } from "react-icons/io5";
import { BsPersonPlus } from "react-icons/bs";
import { GiHelp } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";
export default function Leftpart() {
    const [products,tpro]=useState("hidden")
  const [sales,tsal]=useState("hidden")
  const [design,tdes]=useState("hidden")
  return (
    <>
    
    <div className="hidden m-1 rounded-2xl min-h-[500px] col-span-3 border border-slate-300  lg:block">
          <div className="  ">
          {/*  Branding part  */}
          <div className="grid row-span-2 grid-cols-6  mt-2 shadow-sm ">
          <div className="logo m-2 col-span-1">
            <img src="https://images.unsplash.com/photo-1516557070061-c3d1653fa646?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8fA%3D%3D"  className="rounded-xl size-12"/>
          </div>
          <div className="p-1 col-span-4">
            <p className="text-slate-500">INC</p>
            <text className="bold font-medium text-lg">InnovateHub</text>
          </div>
          <div className="logo m-1 break:col-span-1 content-center">
            <img src="https://images.unsplash.com/photo-1516557070061-c3d1653fa646?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8fA%3D%3D"  className="rounded-full size-9 cols-end"/>
          </div>
          </div>
        
        {/*  adding part  */}
        <div>
          <div className="border border-slate-200  rounded-xl my-5 p-4 shadow-md " >
            
            <div className="grid grid-cols-12 my-1 hover:bg-slate-100">
              <div className="grid col-span-2 xl:col-span-1 ">
              <CiPen size={30} className="flex align-middle"/>
              </div>
              <text className="grid col-span-10 xl:col-span-8 font-medium text-lg mx-1">Design Team </text> 
              <div className="grid col-span-0 xl:col-span-3">
              <div className="invisible xl:visible">
                <div className=" bg-slate-200  rounded-2xl border border-black flex justify-center align-middle "><BiQrScan size={20} />+1</div>
                
                </div>
                </div>
              </div>
            <div>
            <div className="grid grid-cols-12 my-1 hover:bg-slate-100">
              <div className="grid col-span-2 xl:col-span-1">
              <TbSpeakerphone size={26} className="flex align-middle col-span-1 contrast-50"/>
              </div>
              <text className="grid col-span-10 xl:col-span-8 font-medium text-lg mx-1">Marketing Team </text> 
              
              <div className="grid col-span-0 xl:col-span-3">
              <div className="invisible xl:visible">
                <div className=" bg-slate-200  rounded-2xl border border-black flex justify-center align-middle "><BiQrScan size={20} />+1</div>
                
                </div>
                </div>
                
              </div>
              </div>
            <div>
            <div className="grid grid-cols-12 my-1 hover:bg-slate-100">
              <div className="grid col-span-1">
              <span className="grid grid-cols-2 self-center "><MdOutlineArrowBackIos size={15}/><MdArrowForwardIos size={15}/></span>
              </div>
              <text className="grid col-span-10 xl:col-span-8 font-medium text-lg mx-1">Development Team </text>
              
              <div className="grid col-span-0 xl:col-span-3">
              <div className="invisible xl:visible">
                <div className=" bg-slate-200  rounded-2xl border border-black flex justify-center align-middle "><BiQrScan size={20} />+1</div>
                
                </div>
                </div>
              </div>
              </div>
            <hr />
           
            <div className="grid grid-cols-12 my-1 hover:bg-slate-100 px-3">
              
              <span className="flex align-middle contrast-50"><CiSquarePlus size={30} /></span>
              <text className="grid col-span-10 font-medium text-slate-600 text-lg mx-1" onClick={()=>alert(`Hire me!! I'll make it  work too 🥺`)}>Create a team </text> 
              
              </div>
          
          </div>
          
          
        </div>
        {/*  Folder with dropdowns  */}
        <div className="grid grid-cols-6">
          <div className="pl-4 grid col-span-5">
            FOLDERS
          </div>
          <div className="grid col-span-1 justify-center">
            <IoIosAdd size={30}/>
          </div>
        </div>
        {/*  Folder with icon part 2  */}
        <div className=" font-medium text-base ">
          <div className={`${products!=="hidden"?"bg-slate-100":""} rounded-xl py-1 grid grid-cols-12`} onClick={()=>{products==="hidden"?tpro(""):tpro("hidden")}}>
          <div className=" grid col-span-1 justify-end align-middle"><TbFolder size={20}/></div>
          <div className=" grid col-span-9 " >
            Products
            </div>
            <div className="grid col-span-1 ml-5 ">{products==="hidden"?<IoCaretDownSharp />:<IoCaretUpSharp /> }</div>
            </div>
            <div >
            <div className={`${products} border-l-2 border-slate-300 pl-3 ml-9`}>
          <div className="my-1">Roadmap</div>
          <div className="my-1">Feedback</div>
          <div className="my-1">Performance</div>
          <div className="my-1">Team</div>
          <div className="my-1">Analytics</div>
          <div className="flex">
            <div><CiSquarePlus size={20} className="contrast-50 grid align-bottom mr-1"/></div>
            <div className="font-normal ">Add new sub</div>
          </div>
        </div>
            </div>
          <div>
          <div className={`${sales!=="hidden"?"bg-slate-100":""} rounded-xl py-1 grid grid-cols-12`} onClick={()=>{sales==="hidden"?tsal(""):tsal("hidden")}}>
          <div className=" grid col-span-1 justify-end align-middle"><TbFolder size={20}/></div>
          <div className=" grid col-span-9 " >
          Sales
            </div>
            <div className="grid col-span-1 ml-5 ">{sales==="hidden"?<IoCaretDownSharp />:<IoCaretUpSharp /> }</div>
            </div>
            <div className={`${sales} border-l-2 border-slate-300 pl-3 ml-9`}>
          <div className="my-1">Roadmap</div>
          <div className="my-1">Feedback</div>
          <div className="my-1">Performance</div>
          <div className="my-1">Team</div>
          <div className="my-1">Analytics</div>
          <div className="flex">
            <div><CiSquarePlus size={20} className="contrast-50 grid align-bottom mr-1"/></div>
            <div className="font-normal ">Add new sub</div>
          </div>
        </div>
          </div>
          <div>
          <div className={`${design!=="hidden"?"bg-slate-100":""} rounded-xl py-1 grid grid-cols-12`} onClick={()=>{design==="hidden"?tdes(""):tdes("hidden")}}>
          <div className=" grid col-span-1 justify-end align-middle"><TbFolder size={20}/></div>
          <div className=" grid col-span-9 " >
            Design
            </div>
            <div className="grid col-span-1 ml-5 ">{design==="hidden"?<IoCaretDownSharp />:<IoCaretUpSharp /> }</div>
            </div>
            <div className={`${design} border-l-2 border-slate-300 pl-3 ml-9`}>
          <div className="my-1">Roadmap</div>
          <div className="my-1">Feedback</div>
          <div className="my-1">Performance</div>
          <div className="my-1">Team</div>
          <div className="my-1">Analytics</div>
          <div className="flex">
            <div><CiSquarePlus size={20} className="contrast-50 grid align-bottom mr-1"/></div>
            <div className="font-normal ">Add new sub</div>
          </div>
        </div>
          </div>
          
          <div>
          <div className={` rounded-xl py-1 grid grid-cols-12`}>
          <div className=" grid col-span-1 justify-end align-middle"><TbFolder size={20}/></div>
          <div className=" grid col-span-9 " >
            Office
            </div>
            </div>
          </div>
          <div>
          <div className={` rounded-xl py-1 grid grid-cols-12`}>
          <div className=" grid col-span-1 justify-end align-middle"><TbFolder size={20}/></div>
          <div className=" grid col-span-9 " >
          Legal
            </div>
            </div>
          </div>
          
        </div>
        <div className="min-h-[120px]"></div>
        {/*  bottom left part 
        <div className="grid grid-cols-12 my-1 p-1 align-middle rounded-lg bg-slate-200">
            <span className="col-span-2 bg-white text-center mx-4 mb-3 rounded-md">7</span>
            <p className="col-span-6 font-medium " > days left on trails</p>
            <div className="col-span-4">
              <button className="bg-black text-white p-2 rounded-md">Add Billing</button>
            </div>
          </div>
        */}
        <div className="absolute bottom-2 left-1 w-[23%]">

          <div className="flex font-medium"> <span className="px-2"><BsPersonPlus size={20}/></span> Invite Teammates</div>


          <div className="grid grid-cols-10 font-medium"> 
          <span className="px-2 col-span-1"><GiHelp size={20}/></span>
          <p className="col-span-7">Help and first step</p> 
           <span className="col-span-2 bg-slate-200 rounded-md w-9 pl-1 text-slate-600">0/6</span></div>

           <div className="grid grid-cols-12 mt-1 p-1 align-middle rounded-lg bg-slate-200">
            <span className="col-span-2 bg-white text-center mx-4 mb-3 rounded-md">7</span>
            <p className="col-span-6 font-medium " > days left on trails</p>
            <div className="col-span-4">
              <button className="bg-black text-white p-2 rounded-md whitespace-nowrap " onClick={()=>alert("Hire me!! I'll make it  work too. ◕⩊◕")}>Add Billing</button>
            </div>
          </div>
          
          
        </div>
        
        
        </div>
        </div>
        </>
  )

}