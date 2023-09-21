import PropTypes from "prop-types";
export const Blog = ({ blog, handleMark, handleTime }) => {
  const {
    title,
    cover,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className=" md:w-[600px] mb-12">
      <img src={cover} alt="" />
      <div className="flex justify-between mx-2 my-8">
        <div className="flex  gap-4">
          <img className=" w-[60px] h-[60px]" src={author_img} alt="" />
          <div>
            <h3 className="text-2xl font-bold">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex gap-2 items-center ">
          <p className=" font-semibold text-xl text-[#11111199]">
            {reading_time} min read
          </p>
          <img
            className=" w-[24px] h-[24px] cursor-pointer"
            onClick={() => handleMark(blog.id)}
            src="https://i.ibb.co/myPJ1LN/bookmark-102279.png"
            alt=""
          />
        </div>
      </div>
      <h2 className=" text-4xl font-bold">{title}</h2>
      <p className=" text-[#11111199] my-4">
        #{hashtags[0]},#{hashtags[1]},{hashtags[2] ? `#${hashtags[2]}` : ""}
      </p>
      <a
        href="#home"
        onClick={() => handleTime(blog.reading_time, blog.id)}
        className="underline text-violet-600 "
      >
        Mark as read
      </a>
    </div>
  );
};
Blog.PropTypes = {
  blog: PropTypes.object.isRequired,
};
