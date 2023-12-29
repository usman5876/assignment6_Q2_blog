import Image from 'next/image'
import { blogData } from '@/data/blogData'

export default function Home() {
  return (
    <>
  <div className="bg-black w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t">
    {/*Lead Card*/}
    {blogData.map((blog)=>{
      if(blog.id ==1){
      return( 
      <div className="flex h-screen bg-white rounded overflow-hidden shadow-lg">
      <a
        href="post.html"
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
            
            <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
              <a
                href="#"
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
        <div className="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
        <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
          <a
            href="#"
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
  </div>


  {/*Subscribe*/}
  <div className=" font-sans bg-green-100 rounded p-4 md:p-24 text-center">
    <h2 className="font-bold break-normal text-2xl md:text-4xl">
      Subscribe to Ghostwind CSS
    </h2>
    <h3 className="font-bold break-normal text-gray-600 text-base md:text-xl">
      Get the latest posts delivered right to your inbox
    </h3>
    <div className="w-full text-center pt-4">
      <form action="#">
        <div className="max-w-xl mx-auto p-1 pr-0 flex flex-wrap items-center">
          <input
            type="email"
            placeholder="youremail@example.com"
            className="flex-1 appearance-none rounded shadow p-3 text-gray-600 mr-2 focus:outline-none"
          />
          <button
            type="submit"
            className="flex-1 mt-4 md:mt-0 block md:inline-block appearance-none bg-green-500 text-white text-base font-semibold tracking-wider uppercase py-4 rounded shadow hover:bg-green-400"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  </div>
  {/* /Subscribe*/}

</>
)}
