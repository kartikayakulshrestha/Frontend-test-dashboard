import { FiSearch } from "react-icons/fi";
import Leftpart from "./component/Leftpart";
import { PiChatsLight } from "react-icons/pi";
import { IoSettingsSharp } from "react-icons/io5";
import { PiSquaresFourBold } from "react-icons/pi";
import { IoCaretDownSharp } from "react-icons/io5";
import { FaSortNumericUp } from "react-icons/fa";
import { RiSoundModuleFill } from "react-icons/ri";
import { BiMessageSquareAdd } from "react-icons/bi";
import { BiImport } from "react-icons/bi";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineArchive } from "react-icons/md";
import { IoTrashBinOutline } from "react-icons/io5";
import { ImCross } from "react-icons/im";
export default function Home() {
  
  return (
    <main className="m-5">
      <div className=" bg-white-400 relative rounded-2xl gap-2 min-h-[700px] grid grid-cols-12 border border-slate-300 ">
        {/*  Left part  */}
        
        <Leftpart />


        {/*  Right part  */}


        <div className=" relative m-1 rounded-2xl min-h-[500px] col-span-12 lg:col-span-9 border shadow-md border-slate-200">
          {/*  Right part  Product */}
          <div className="grid grid-cols-12 shadow-md">

            <p className="col-span-2  p-3 font-medium text-xl">Products</p>

            <div className="col-span-6 "></div>

            <div className="col-span-4">
              <div className="grid grid-cols-8">
                <div className="col-span-3 md:col-span-4 lg:col-span-6 rounded-md my-4 min-h-7 border hover:border-slate-600 flex shadow-md">

                 <FiSearch size={20}/> 
                 <input type="text" placeholder="Search for..." className="hidden lg:block rounded-md w-30 xl:w-60"></input>
                </div>
                <div className="col-span-2 md:col-span-2 lg:col-span-1 ">
                  <figure className="mx-1  my-3 p-1 shadow-lg rounded-md hover:bg-slate-300">
                  <PiChatsLight size={25} />
                  </figure>
                </div>
                <div className="col-span-2 md:col-span-2 lg:col-span-1 ">
                  <figure className="mx-1 my-3 p-1 shadow-lg rounded-md hover:bg-slate-300">
                  <IoSettingsSharp size={25} />
                  </figure>
                </div>
              </div>

            </div>
          </div>


          {/*  bars add brand  */}
          <div className=" my-3 px-4 min-h-10  block md:hidden">
                <span className="my-3 shadow-xl"><TfiMenuAlt size={30} /></span>
          </div>
          <div className=" my-3 px-4 min-h-10 hidden md:block">
            <div className=" grid grid-cols-12 py-2">
              
              <div className=" col-span-8 xl:col-span-6  flex ">
              <div className="shadow-md  rounded-md border border-slate-300 mr-2">
                <button className="flex p-1">
                  <figure className="my-1"><PiSquaresFourBold /></figure>
                  <p className="whitespace-nowrap ">All brands</p>
                  <figure className="my-1">< IoCaretDownSharp/></figure>
                </button>
              </div>
              <div className=" ">
              <div className="shadow-md  rounded-md border border-slate-300 mr-2">
                <button className="flex p-1 px-2">
                  
                  <p className="whitespace-nowrap">Desk</p>
                  <figure className="my-1 mx-1 ">< IoCaretDownSharp/></figure>
                </button>
              </div>
              </div>
              <div className="">
              <div className="shadow-md  rounded-md border border-slate-300 mr-2">
                <button className="flex p-1 px-2">
                  
                  <p className="whitespace-nowrap">Tags</p>
                  <figure className="my-1 mx-1 ">< IoCaretDownSharp/></figure>
                </button>
              </div>
              </div>
              <div className="">
              <div className="shadow-md  rounded-md border border-slate-300 mr-2 ">
                <button className="flex p-1 px-2 bg-slate-200 text-slate-600">
                <figure className="my-1 mx-1 ">< FaSortNumericUp/></figure>
                  <p className="whitespace-nowrap">Sort</p>
                  
                </button>
              </div>
              </div>
              <div className="">
              <div className="shadow-md  rounded-md border border-slate-300">
                <button className="flex p-1 px-2 bg-slate-200 text-slate-600">
                <figure className="my-1 mx-1 ">< RiSoundModuleFill /></figure>
                  <p className="whitespace-nowrap">Filter</p>
                  
                </button>
              </div>
              </div>
              </div>
              <div className=" xl:col-span-3"></div>

              <div className="col-span-3 xl:col-span-3 flex justify-end">
              <div className="">
              <div className="shadow-md  rounded-md border border-slate-300 mx-2" >
                <button className="flex p-1 px-2">
                <figure className="my-1 mx-1 ">< BiMessageSquareAdd /></figure>
                  <p className="whitespace-nowrap">Meeting</p>
                  
                </button>
              </div>
              </div>
              <div className="">
              <div className="shadow-md  rounded-md border border-slate-300">
                <button className="flex p-1 px-2 ">
                <figure className="my-1 mx-1 ">< BiImport /></figure>
                  <p className="whitespace-nowrap">Import / Export</p>
                  
                </button>
              </div>
              </div>
              </div>
            </div>
          </div>
          {/*  Table part  */}
          <div className="overflow-x-auto">
            <table className=" border rounded-lg border-slate-300"  >
              <thead>
                <tr>
                <th className="flex min-w-[200px] border border-b-1 relative">
                  <div className="px-1">
                  <input type="checkbox" ></input>
                  </div>
                  <p className="px-2 text-slate-400">Brand</p>
                  <span className="absolute top-1 right-0 "><FaPlus /></span>
                  </th>
                
                <th className="min-w-[170px] text-slate-400 text-start pl-2 border border-slate-400">Description</th>
                <th className="min-w-[170px] text-slate-400 text-start pl-2 border border-slate-400">Members</th>
                <th className="min-w-[170px] text-slate-400 text-start pl-2 border border-slate-400">Categories</th>
                <th className="min-w-[170px] text-slate-400 text-start pl-2 border border-slate-400">Tags</th>
                <th className="min-w-[170px] text-slate-400 text-start pl-2 border border-slate-400">Next Meeting</th>
                <th className="min-w-[30px] text-slate-400 text-start pl-2 border border-slate-400">+</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                <td className="flex whitespace-nowrap min-w-[200px] border border-b-1 relative">
                  <div className="px-1">
                  <input type="checkbox" ></input>
                  </div>
                  
                  <p className="px-2 flex "> <img src="https://cdn-icons-png.flaticon.com/512/5968/5968770.png" className="h-4 w-4 mr-1 mt-1"/>Wix</p>
                  
                  </td>
                
                <td className="min-w-[170px]  text-start pl-2 border border-slate-400 whitespace-nowrap">Develop a personalize...</td>
                <td className="min-w-[170px]  text-start pl-2 border border-slate-400 whitespace-nowrap">
                  <div class="mt-3 flex -space-x-1 overflow-hidden">
                    <img class="inline-block h-5 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                    <img class="inline-block h-5 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                    <img class="inline-block h-5 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt=""/>
                    <img class="inline-block h-5 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                    <img class="inline-block h-5 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                </div>
                </td>
                <td className="min-w-[170px]  text-start pl-2 border border-slate-400 whitespace-nowrap">
                  <span className="bg-purple-300 text-purple-900 p-1 rounded-lg text-sm font-bold ">Automation</span>
                </td>
                <td className="min-w-[170px]  text-start pl-2 border border-slate-400 whitespace-nowrap">
                <span className="bg-slate-300 text-slate-900 p-1 rounded-lg text-sm font-bold ">#DigitalTransformation</span>

                </td>
                <td className="min-w-[170px]  text-start pl-2 border border-slate-400 whitespace-nowrap">
                <span className="bg-purple-300 text-purple-900 p-1 rounded-lg text-sm font-bold ">in 30minutes</span>

                </td>
                <td className="min-w-[30px]  text-start pl-2 border border-slate-400"></td>
                </tr>

                <tr>
                <td className="flex whitespace-nowrap min-w-[200px] border border-b-1 relative">
                  <div className="px-1">
                  <input type="checkbox" ></input>
                  </div>
                  <p className="px-2 flex "> <img src="https://cdn3.iconfinder.com/data/icons/social-media-2068/64/_shopping-512.png" className="h-4 w-4 mr-1 mt-1"/>Shopify</p>
                  
                  </td>
                
                <td className="min-w-[170px]  text-start pl-2 border border-slate-400 whitespace-nowrap">Develop a personalize...</td>
                <td className="min-w-[170px]  text-start pl-2 border border-slate-400 whitespace-nowrap">
                  <div class="mt-3 flex -space-x-1 overflow-hidden">
                    <img class="inline-block h-5 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                    <img class="inline-block h-5 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                    <img class="inline-block h-5 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt=""/>
                    <img class="inline-block h-5 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                    <img class="inline-block h-5 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                </div>
                </td>
                <td className="min-w-[170px]  text-start pl-2 border border-slate-400 whitespace-nowrap">
                  <span className="bg-yellow-300 text-yellow-900 p-1 rounded-lg text-sm font-bold ">Ecommerce</span>
                  <span className="bg-orange-300 text-orange-900 p-1 rounded-lg text-sm font-bold ">B2B</span>
                </td>
                <td className="min-w-[170px]  text-start pl-2 border border-slate-400 whitespace-nowrap">
                <span className="bg-slate-300 text-slate-900 p-1 rounded-lg text-sm font-bold ">#DigitalTransformation</span>

                </td>
                <td className="min-w-[170px]  text-start pl-2 border border-slate-400 whitespace-nowrap">
                <span className="bg-purple-300 text-purple-900 p-1 rounded-lg text-sm font-bold ">in 30minutes</span>

                </td>
                <td className="min-w-[30px]  text-start pl-2 border border-slate-400"></td>
                </tr>

                <tr>
                <td className="flex whitespace-nowrap min-w-[200px] border border-b-1 relative">
                  <div className="px-1">
                  <input type="checkbox" ></input>
                  </div>
                  <p className="px-2 flex "> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk2fvl-Fj4WCTbj6rkKreW7CxWsnMgyJ4wFfrDq5IMtA&s" className="h-4 w-4 mr-1 mt-1"/>Mailchimp</p>
                  
                  </td>
                
                <td className="min-w-[170px]  text-start pl-2 border border-slate-400 whitespace-nowrap">Develop a personalize...</td>
                <td className="min-w-[170px]  text-start pl-2 border border-slate-400 whitespace-nowrap">
                  <div class="mt-3 flex -space-x-1 overflow-hidden">
                    <img class="inline-block h-5 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                    <img class="inline-block h-5 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                    <img class="inline-block h-5 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt=""/>
                    <img class="inline-block h-5 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                    <img class="inline-block h-5 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                </div>
                </td>
                <td className="min-w-[170px]  text-start pl-2 border border-slate-400 whitespace-nowrap">
                  <span className="bg-green-300 text-green-900 p-1 rounded-lg text-sm font-bold ">SAAS</span>
                  <span className="bg-yellow-300 text-yellow-900 p-1 rounded-lg text-sm font-bold ">Mobile</span>
                </td>
                <td className="min-w-[170px]  text-start pl-2 border border-slate-400 whitespace-nowrap">
                <span className="bg-slate-300 text-slate-900 p-1 rounded-lg text-sm font-bold ">#DigitalTransformation</span>

                </td>
                <td className="min-w-[170px]  text-start pl-2 border border-slate-400 whitespace-nowrap">
                <span className="bg-purple-300 text-purple-900 p-1 rounded-lg text-sm font-bold ">in 30minutes</span>

                </td>
                <td className="min-w-[30px]  text-start pl-2 border border-slate-400"></td>
                </tr>

                <tr>
                <td className="flex whitespace-nowrap min-w-[200px] border border-b-1 relative">
                  <div className="px-1">
                  <input type="checkbox" ></input>
                  </div>
                  <p className="px-2 flex "> <img src="https://w7.pngwing.com/pngs/720/939/png-transparent-paypal-computer-icons-logo-paypal-blue-angle-service-thumbnail.png" className="h-4 w-4 mr-1 mt-1"/>Paypal</p>
                  
                  
                  </td>
                
                <td className="min-w-[170px]  text-start pl-2 border border-slate-400 whitespace-nowrap">Develop a personalize...</td>
                <td className="min-w-[170px]  text-start pl-2 border border-slate-400 whitespace-nowrap">
                  <div class="mt-3 flex -space-x-1 overflow-hidden">
                    <img class="inline-block h-5 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                    <img class="inline-block h-5 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                    <img class="inline-block h-5 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt=""/>
                    <img class="inline-block h-5 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                    <img class="inline-block h-5 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                </div>
                </td>
                <td className="min-w-[170px]  text-start pl-2 border border-slate-400 whitespace-nowrap">
                  <span className="bg-green-300 text-green-900 p-1 rounded-lg text-sm font-bold ">Marketplace</span>
                </td>
                <td className="min-w-[170px]  text-start pl-2 border border-slate-400 whitespace-nowrap">
                <span className="bg-slate-300 text-slate-900 p-1 rounded-lg text-sm font-bold ">#DigitalTransformation</span>

                </td>
                <td className="min-w-[170px]  text-start pl-2 border border-slate-400 whitespace-nowrap">
                <span className="bg-purple-300 text-purple-900 p-1 rounded-lg text-sm font-bold ">in 30minutes</span>

                </td>
                <td className="min-w-[30px]  text-start pl-2 border border-slate-400"></td>
                </tr>

                <tr>
                <td className="flex whitespace-nowrap min-w-[200px] border border-b-1 relative">
                  <div className="px-1">
                  <input type="checkbox" ></input>
                  </div>
                  <p className="px-2 flex "> <img src="https://static.vecteezy.com/system/resources/previews/022/636/382/original/disney-logo-disney-icon-transparent-free-png.png" className="h-4 w-4 mr-1 mt-1"/>Disney</p>
                  
                  </td>
                
                <td className="min-w-[170px]  text-start pl-2 border border-slate-400 whitespace-nowrap">Develop a personalize...</td>
                <td className="min-w-[170px]  text-start pl-2 border border-slate-400 whitespace-nowrap">
                  <div class="mt-3 flex -space-x-1 overflow-hidden">
                    <img class="inline-block h-5 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                    <img class="inline-block h-5 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                    <img class="inline-block h-5 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt=""/>
                    <img class="inline-block h-5 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                    <img class="inline-block h-5 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                </div>
                </td>
                <td className="min-w-[170px]  text-start pl-2 border border-slate-400 whitespace-nowrap">
                <span className="bg-orange-300 text-orange-900 p-1 rounded-lg text-sm font-bold ">B2B</span>
                <span className="bg-yellow-300 text-orange-900 p-1 rounded-lg text-sm font-bold ">B2C</span>
                </td>
                <td className="min-w-[170px]  text-start pl-2 border border-slate-400 whitespace-nowrap">
                <span className="bg-slate-300 text-slate-900 p-1 rounded-lg text-sm font-bold ">#DigitalTransformation</span>

                </td>
                <td className="min-w-[170px]  text-start pl-2 border border-slate-400 whitespace-nowrap">
                <span className="bg-purple-300 text-purple-900 p-1 rounded-lg text-sm font-bold ">in 30minutes</span>

                </td>
                <td className="min-w-[30px]  text-start pl-2 border border-slate-400"></td>
                </tr>

                <tr>
                <td className="flex whitespace-nowrap min-w-[200px] border border-b-1 relative">
                  <div className="px-1">
                  <input type="checkbox" ></input>
                  </div>
                  <p className="px-2 flex "> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0sGCjpXyTweOU63faBXUgt_VNbvX9Ky1hGMwiyK0maQ&s" className="h-4 w-4 mr-1 mt-1"/>Intercom</p>
                  
                  </td>
                
                <td className="min-w-[170px]  text-start pl-2 border border-slate-400 whitespace-nowrap">Develop a personalize...</td>
                <td className="min-w-[170px]  text-start pl-2 border border-slate-400 whitespace-nowrap">
                  <div class="mt-3 flex -space-x-1 overflow-hidden">
                    <img class="inline-block h-5 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                    <img class="inline-block h-5 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                    <img class="inline-block h-5 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt=""/>
                    <img class="inline-block h-5 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                    <img class="inline-block h-5 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                </div>
                </td>
                <td className="min-w-[170px]  text-start pl-2 border border-slate-400 whitespace-nowrap">
                  <span className="bg-blue-300 text-blue-900 p-1 rounded-lg text-sm font-bold ">Technology</span>
                  <span className="bg-green-300 text-green-900 p-1 rounded-lg text-sm font-bold ">SAAS</span>
                </td>
                <td className="min-w-[170px]  text-start pl-2 border border-slate-400 whitespace-nowrap">
                <span className="bg-slate-300 text-slate-900 p-1 rounded-lg text-sm font-bold ">#DigitalTransformation</span>

                </td>
                <td className="min-w-[170px]  text-start pl-2 border border-slate-400 whitespace-nowrap">
                <span className="bg-purple-300 text-purple-900 p-1 rounded-lg text-sm font-bold ">in 30minutes</span>

                </td>
                <td className="min-w-[30px]  text-start pl-2 border border-slate-400"></td>
                </tr>

                <tr>
                <td className="flex whitespace-nowrap min-w-[200px] border border-b-1 relative">
                  <div className="px-1">
                  <input type="checkbox" ></input>
                  </div>
                  <p className="px-2 flex "> <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" className="h-4 w-4 mr-1 mt-1"/>Google</p>
                  
                  </td>
                
                <td className="min-w-[170px]  text-start pl-2 border border-slate-400 whitespace-nowrap">Develop a personalize...</td>
                <td className="min-w-[170px]  text-start pl-2 border border-slate-400 whitespace-nowrap">
                  <div class="mt-3 flex -space-x-1 overflow-hidden">
                    <img class="inline-block h-5 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                    <img class="inline-block h-5 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                    <img class="inline-block h-5 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt=""/>
                    <img class="inline-block h-5 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                    <img class="inline-block h-5 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                </div>
                </td>
                <td className="min-w-[170px]  text-start pl-2 border border-slate-400 whitespace-nowrap">
                <span className="bg-orange-300 text-orange-900 p-1 rounded-lg text-sm font-bold ">Finance</span>
                  <span className="bg-purple-300 text-purple-900 p-1 rounded-lg text-sm font-bold ">Automation</span>
                </td>
                <td className="min-w-[170px]  text-start pl-2 border border-slate-400 whitespace-nowrap">
                <span className="bg-slate-300 text-slate-900 p-1 rounded-lg text-sm font-bold ">#DigitalTransformation</span>

                </td>
                <td className="min-w-[170px]  text-start pl-2 border border-slate-400 whitespace-nowrap">
                <span className="bg-purple-300 text-purple-900 p-1 rounded-lg text-sm font-bold ">in 30minutes</span>

                </td>
                <td className="min-w-[30px]  text-start pl-2 border border-slate-400"></td>
                </tr>

                <tr>
                <td className="flex whitespace-nowrap min-w-[200px] border border-b-1 relative">
                  <div className="px-1">
                  <input type="checkbox" ></input>
                  </div>
                  <p className="px-2 flex "> <img src="https://cdn-icons-png.flaticon.com/512/187/187193.png" className="h-4 w-4 mr-1 mt-1"/>Evernote</p>
                  
                  
                  </td>
                
                <td className="min-w-[170px]  text-start pl-2 border border-slate-400 whitespace-nowrap">Develop a personalize...</td>
                <td className="min-w-[170px]  text-start pl-2 border border-slate-400 whitespace-nowrap">
                  <div class="mt-3 flex -space-x-1 overflow-hidden">
                    <img class="inline-block h-5 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                    <img class="inline-block h-5 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                    <img class="inline-block h-5 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt=""/>
                    <img class="inline-block h-5 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                    <img class="inline-block h-5 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                </div>
                </td>
                <td className="min-w-[170px]  text-start pl-2 border border-slate-400 whitespace-nowrap">
                  <span className="bg-cyan-300 text-cyan-900 p-1 rounded-lg text-sm font-bold ">Transportation</span>
                </td>
                <td className="min-w-[170px]  text-start pl-2 border border-slate-400 whitespace-nowrap">
                <span className="bg-slate-300 text-slate-900 p-1 rounded-lg text-sm font-bold ">#DigitalTransformation</span>

                </td>
                <td className="min-w-[170px]  text-start pl-2 border border-slate-400 whitespace-nowrap">
                <span className="bg-purple-300 text-purple-900 p-1 rounded-lg text-sm font-bold ">in 30minutes</span>

                </td>
                <td className="min-w-[30px] text-start pl-2 border border-slate-400"></td>
                </tr>

                <tr>
                <td className="flex whitespace-nowrap min-w-[200px] border border-b-1 relative">
                  <div className="px-1">
                  <input type="checkbox" ></input>
                  </div>
                  <p className="px-2 flex "> <img src="https://www.freepnglogos.com/uploads/microsoft-window-logo-emblem-0.png" className="h-4 w-4 mr-1 mt-1"/>Microsoft</p>
                  
                  </td>
                
                <td className="min-w-[170px]  text-start pl-2 border border-slate-400 whitespace-nowrap">Develop a personalize...</td>
                <td className="min-w-[170px]  text-start pl-2 border border-slate-400 whitespace-nowrap">
                  <div class="mt-3 flex -space-x-1 overflow-hidden">
                    <img class="inline-block h-5 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                    <img class="inline-block h-5 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                    <img class="inline-block h-5 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt=""/>
                    <img class="inline-block h-5 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                    <img class="inline-block h-5 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                </div>
                </td>
                <td className="min-w-[170px]  text-start pl-2 border border-slate-400 whitespace-nowrap">
                <span className="bg-red-300 text-red-900 p-1 rounded-lg text-sm font-bold ">Publishing</span>
                <span className="bg-yellow-300 text-orange-900 p-1 rounded-lg text-sm font-bold ">B2C</span>
                </td>
                <td className="min-w-[170px]  text-start pl-2 border border-slate-400 whitespace-nowrap">
                <span className="bg-slate-300 text-slate-900 p-1 rounded-lg text-sm font-bold ">#DigitalTransformation</span>

                </td>
                <td className="min-w-[170px]  text-start pl-2 border border-slate-400 whitespace-nowrap">
                <span className="bg-purple-300 text-purple-900 p-1 rounded-lg text-sm font-bold ">in 30minutes</span>

                </td>
                <td className="min-w-[30px]  text-start pl-2 border border-slate-400"></td>
                </tr>

                <tr>
                <td className="flex whitespace-nowrap min-w-[200px] border border-b-1 relative">
                  <div className="px-1">
                  <input type="checkbox" ></input>
                  </div>
                  <p className="px-2 flex "> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqA42aV-pNuTQf1xWqqE8sVZcoPQjm0eE28OiR20A2tQ&s" className="h-4 w-4 mr-1 mt-1"/>Invision</p>
                  
                  </td>
                
                <td className="min-w-[170px]  text-start pl-2 border border-slate-400 whitespace-nowrap">Develop a personalize...</td>
                <td className="min-w-[170px]  text-start pl-2 border border-slate-400 whitespace-nowrap">
                  <div class="mt-3 flex -space-x-1 overflow-hidden">
                    <img class="inline-block h-5 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                    <img class="inline-block h-5 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                    <img class="inline-block h-5 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt=""/>
                    <img class="inline-block h-5 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                    <img class="inline-block h-5 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                </div>
                </td>
                <td className="min-w-[170px]  text-start pl-2 border border-slate-400 whitespace-nowrap">
                  <span className="bg-green-100 text-green-700 p-1 rounded-lg text-sm font-bold ">Webservice</span>
                </td>
                <td className="min-w-[170px]  text-start pl-2 border border-slate-400 whitespace-nowrap">
                <span className="bg-slate-300 text-slate-900 p-1 rounded-lg text-sm font-bold ">#DigitalTransformation</span>

                </td>
                <td className="min-w-[170px]  text-start pl-2 border border-slate-400 whitespace-nowrap">
                <span className="bg-purple-300 text-purple-900 p-1 rounded-lg text-sm font-bold ">in 30minutes</span>

                </td>
                <td className="min-w-[30px]  text-start pl-2 border border-slate-400"></td>
                </tr>

                <tr>
                <td className="whitespace-nowrap text-end min-w-[200px] border border-b-1 ">
                  
                  <p className="px-2  "> <span className="font-semibold "> 10 </span> count </p>
                  </td>
                
                <td className="min-w-[170px] text-end  pl-2 border border-slate-400 whitespace-nowrap">
                <div><span className="text-2xl ">+</span> Add Calculation</div>
                </td>
                <td className="min-w-[170px] text-end grid  pl-2 border border-slate-400 whitespace-nowrap">
                <div><span className="text-2xl ">+</span> Add Calculation</div>
                </td>
                <td className="min-w-[170px]  text-end pl-2 border border-slate-400 whitespace-nowrap">
                <div><span className="text-2xl ">+</span> Add Calculation</div>
                </td>
                <td className="min-w-[170px]  text-end pl-2 border border-slate-400 whitespace-nowrap ">
                <div><span className="text-2xl ">+</span> Add Calculation</div>
                </td>
                <td className="min-w-[170px]  text-start pl-2 border border-slate-400 whitespace-nowrap">
                

                </td>
                <td className="min-w-[30px]  text-start pl-2 border border-slate-400"></td>
                </tr>

              </tbody>
            </table>
          </div>

          {/*  right ka below part  */}
          <div className="min-h-[50px] md:min-w-[400px] border border-slate-400 shadow-xl rounded-lg absolute bottom-3 left-[20%] md:left-[35%]  ">
              <div className="grid grid-cols-6 md:grid-cols-12 py-3 gap-2">
                <div className="col-span-3 rounded-md shadow--md ">
                  <p className="font-medium"><span className="bg-black text-white rounded-lg px-1 ml-1">3</span> Selected</p>
                </div>
                <div className=" col-span-3 border border-slate-300 rounded-lg shadow-lg">
                  <div className="flex justify-center ">
                    <span className="mt-1"><MdOutlineArchive size={20} /></span>
                    <p>Archive</p>
                  </div>
                </div>
                <div className="border border-slate-300 rounded-lg shadow-lg col-span-3">
                <div className="flex justify-center ">
                    <span className="mt-1 mr-1"><IoTrashBinOutline size={20} color="darkred"/></span>
                    <p>Delete</p>
                  </div>
                </div>
                <div className="border border-slate-300 rounded-lg shadow-lg col-span-2">
                <div className="flex justify-center ">
                <p>More</p>
                    <span className="mt-1 ml-1"><IoCaretDownSharp size={20} /></span>
                    
                  </div>
                </div>
                <div className=" col-span-1 py-1">
                <ImCross />
                </div>
              </div>
          </div>




        </div>
        
      </div>
    </main>
  );
}
