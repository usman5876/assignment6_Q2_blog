"use client"
import { blogData } from '@/data/blogData'
import Subscribe from './components/subscribe/subscribe'

export default function Home() {
  return (
    <>
  <div className=" w-screen px-28 text-xl md:text-2xl ">
    {/*Lead Card*/}
    {blogData.map((blog)=>{
      if(blog.id ==1){
      return( 
      <div key={blog.id} className="flex -mt-20  h-screen bg-white rounded z-10 shadow-lg">
      <a
        href={`/${blog.id}`}
        className="flex flex-wrap no-underline hover:no-underline"
      >
        <div className="w-full md:w-2/3 rounded-t">
          <img
            src={blog.image}
            className="h-full w-full shadow"
          />
        </div>
        <div className="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
          <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
            <p className="w-full text-gray-600 text-xs md:text-sm pt-6 px-6">
              {blog.category}
            </p>
            <div className="w-full font-bold text-xl text-gray-900 px-6">
              👋 {blog.title}
            </div>
            <p className="text-gray-800 font-serif text-base px-6 mb-5">
              {blog.content}
            </p>
          </div>
          <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
            <div className="flex items-center justify-between">
              <img
                className="w-8 h-8 rounded-full mr-4 avatar"
                data-tippy-content="Author Name"
                src={blog.authorimage}
                alt="Avatar of Author"
              />
              <p className="text-gray-600 text-xs md:text-sm">{blog.author}</p>
            </div>
          </div>
        </div>
      </a>
    </div>)}
    })}

    {/*Posts Container*/}
    <div className="flex flex-wrap justify-between pt-12 -mx-6">
      {blogData.map((blog2)=>{
        if(blog2.id !==1 && blog2.id !==8){
          return(
            
            <div key={blog2.id} className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
              <a
                href={`/${blog2.id}`}
                className="flex flex-wrap no-underline hover:no-underline"
              >
                <img
                  src={blog2.image}
                  className="h-64 w-full rounded-t pb-6"
                />
                <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                  {blog2.category}
                </p>
                <div className="w-full font-bold text-xl text-gray-900 px-6">
                  {blog2.title}
                </div>
                <p className="text-gray-800 font-serif text-base px-6 mb-5">
                  {blog2.content}
                </p>
              </a>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
              <div className="flex items-center justify-between">
                <img
                  className="w-8 h-8 rounded-full mr-4 avatar"
                  data-tippy-content="Author Name"
                  src={blog2.authorimage}
                  alt="Avatar of Author"
                />
                <p className="text-gray-600 text-xs md:text-sm">{blog2.author}</p>
              </div>
            </div>
            </div>
            
          )
        }
      })}

     {/*1/2 col */}
      {blogData.map((blog3)=>{
        if(blog3.id ==3 || blog3.id ==8){
        return(
        <div key={blog3.id} className="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
        <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
          <a
            href={`/${blog3.id}`}
            className="flex flex-wrap no-underline hover:no-underline"
          >
            <img
              src={blog3.image}
              className="h-full w-full rounded-t pb-6"
            />
            <p className="w-full text-gray-600 text-xs md:text-sm px-6">
              {blog3.category}
            </p>
            <div className="w-full font-bold text-xl text-gray-900 px-6">
              {blog3.title}
            </div>
            <p className="text-gray-800 font-serif text-base px-6 mb-5">
              {blog3.content}
            </p>
          </a>
        </div>
        <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
          <div className="flex items-center justify-between">
            <img
              className="w-8 h-8 rounded-full mr-4 avatar"
              data-tippy-content="Author Name"
              src={blog3.authorimage}
              alt="Avatar of Author"
            />
            <p className="text-gray-600 text-xs md:text-sm">{blog3.author}</p>
          </div>
        </div>
      </div> )
      }
      })}
    
    </div>
    <div className='grid grid-cols-3 text-white  gap-2  w-full min-h-screen'>
      
        <p className='flex items-end p-2 rounded-2xl text-teal-100 col-span-2  bg-cover bg-center  bg-[url("https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=600")]'>Virtuality</p>
        <p className='flex items-end p-2 rounded-2xl row-span-2  bg-[url("https://images.pexels.com/photos/1172064/pexels-photo-1172064.jpeg?auto=compress&cs=tinysrgb&w=600")]'>Resume</p>
     
        <p className='flex items-end p-2 rounded-2xl  row-span-2 bg-cover bg-center opacity-80 bg-[url("https://images.pexels.com/photos/1658967/pexels-photo-1658967.jpeg?auto=compress&cs=tinysrgb&w=600")]'>Virtuality</p>
        <p className='flex items-end p-2 rounded-2xl  bg-[url("https://images.pexels.com/photos/460775/pexels-photo-460775.jpeg?auto=compress&cs=tinysrgb&w=600")]'>Resume</p>
      
        <p className='flex items-end p-2 rounded-2xl col-span-2 bg-cover bg-center opacity-80 bg-[url("https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=600")]'>Virtuality</p>
        
      
      
    </div>
  </div>


  {/*Subscribe*/}
  <Subscribe/>
 

</>
)}
