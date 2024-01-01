
import { blogData } from '@/data/blogData';
import { url } from 'inspector';
import Subscribe from '../components/subscribe/subscribe';

const BlogPost = ({ params }: { params: { id: string } }) => {


  // Find the specific blog post using the ID from the route
  const post = blogData.find((post) => post.id === Number(params.id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <div className="text-center pt-16 md:pt-32">
        <p className="text-sm md:text-base text-green-500 font-bold">
          {post.date} <span className="text-gray-900">/</span> {post.category}
        </p>
        <h1 className="font-bold break-normal text-3xl md:text-5xl">
          {post.title}
        </h1>
      </div>
      {/*image*/}
      <div
        className="container w-full max-w-6xl mx-auto bg-white bg-cover mt-8 rounded"
        style={{
          backgroundImage: `url(${post.image})`,
          height: "75vh"
        }}
      />
      {/*Container*/}
      <div className="container max-w-5xl mx-auto -mt-32">
        <div className="mx-0 sm:mx-6">
          <div
            className="bg-white w-full p-8 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal"
            style={{ fontFamily: "Georgia,serif" }}
          >
            {/*Post Content*/}
            {/*Lead Para*/}
            <p className="text-2xl md:text-3xl mb-5">
              👋 Welcome fellow{" "} {post.content}
              
            </p>
            <blockquote className="border-l-4 border-green-500 italic my-8 pl-8 md:pl-12">
             {post.content}
            </blockquote>
            
            {/*/ Post Content*/}
          </div>
        </div>
      </div>
      {/*Subscribe*/}
      <Subscribe/>
      {/*Scrool to top*/}
      <button
  className="btn-toggle-round scroll-top js-scroll-top"
  type="button"
  title="Scroll to top"
>
  <svg
    className="progress-circle"
    width="100%"
    height="100%"
    viewBox="-1 -1 102 102"
  >
    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-arrow-up"
    width={8}
    height={8}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="cuurentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <line x1={12} y1={5} x2={12} y2={19} />
    <line x1={18} y1={11} x2={12} y2={5} />
    <line x1={6} y1={11} x2={12} y2={5} />
  </svg>
</button>

</>

  );
};

export default BlogPost;
