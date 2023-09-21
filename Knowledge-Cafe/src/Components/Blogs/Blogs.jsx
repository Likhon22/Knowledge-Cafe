import { useEffect, useState } from "react";
import { Blog } from "../Blog/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [marked, setMarked] = useState([]);
  const [time, setTime] = useState(0);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const handleMark = (id) => {
    const mark = blogs.filter((mark) => mark.id === id);
    const newMark = [...marked, ...mark];

    setMarked(newMark);
  };
  const handleTime = (times, id) => {
    const newTime = time + times;
    console.log("remove", id);
    const remaining = marked.filter((remainingBlog) => remainingBlog.id !== id);
    console.log(remaining);
    setTime(newTime);
    setMarked(remaining);
  };
  return (
    <div className="flex flex-col md:flex-row-reverse justify-around  lg:justify-between my-12">
      <div>
        <div className=" rounded-lg my-4 w-[1/2] h-[80px] bg-[#6047EC26] flex items-center justify-center">
          <h3 className="font-bold text-xl text-[#6047EC] ">
            Spent time on read :{""} {time}
          </h3>
        </div>
        <div className="bg-[#1111110D] p-10 rounded-lg lg:w-[411px]">
          <h3 className="font-bold text-2xl">
            Bookmarked Blogs: {marked.length}
          </h3>
          {marked.map((mark) => (
            <div className="bg-white text-center rounded-lg my-4 h-[96px]">
              <h3 className="text-xl font-semibold text-black py-4">
                {mark.title}{" "}
              </h3>
            </div>
          ))}
        </div>
      </div>
      <div>
        {blogs.map((blog, idx) => (
          <Blog
            key={idx}
            blog={blog}
            handleMark={handleMark}
            handleTime={handleTime}
          ></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
