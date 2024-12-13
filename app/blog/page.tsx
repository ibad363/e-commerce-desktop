import Image from "next/image";
import React from "react";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import BgImage from "../components/BgImage";

const BlogPage = () => {
  const categories = [
    { name: "Crafts", count: 2 },
    { name: "Design", count: 8 },
    { name: "Handmade", count: 7 },
    { name: "Interior", count: 1 },
    { name: "Wood", count: 6 },
  ];
  const posts = [
    {
      image: "/assets/blog/b1.svg",
      title: "Going all-in with millennial design",
      date: "03 Aug 2022",
    },
    {
      image: "/assets/blog/b2.svg",
      title: "Exploring new ways of decorating",
      date: "03 Aug 2022",
    },
    {
      image: "/assets/blog/b3.svg",
      title: "Handmade pieces that took time to make",
      date: "03 Aug 2022",
    },
    {
      image: "/assets/blog/b4.svg",
      title: "Modern home in Milan",
      date: "03 Aug 2022",
    },
    {
      image: "/assets/blog/b5.svg",
      title: "Colorful office redesign",
      date: "03 Aug 2022",
    },
  ];

  return (
    <div className="max-w-[1440px] mx-auto font-Poppins ">

      {/* Background Image */}
      <BgImage pageName="Blog"/>
      

      {/* content */}
      <div className="max-w-[1200px] mx-auto flex md:flex-row flex-col gap-2 mt-[106px]">
        {/* 3 Blogs */}
        <div className="flex flex-col">
          <Blogs
            image="/assets/blog/1.webp"
            title="Going all-in with millennial design"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum."
            tags= {{ role:"Admin", date: "14 Oct 2022", tag: "Wood"}}
          />
          <Blogs
            image="/assets/blog/1.webp"
            title="Exploring new ways of decorating"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum."
            tags= {{ role:"Admin", date: "14 Oct 2022", tag: "Handmade"}}
          />
          <Blogs
            image="/assets/blog/1.webp"
            title="Handmade pieces that took time to make"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum."
            tags= {{role:"Admin", date: "14 Oct 2022", tag: "Handmade"}}
          />
        </div>

        {/* Side Bar */}
        <div className="max-w-[393px] mx-auto">

          {/* Search Bar & Categories */}
          <div className="flex flex-col px-10">
            {/* Search Bar */}
            <div className="flex items-center justify-between px-2 border-2 rounded-xl max-w-[311px] h-[58px]">
              <Input
                type="text"
                placeholder="Search"
                className="border-none bg-transparent"
              />
              <SearchIcon />
            </div>

            {/* Categories */}
            <h2 className="text-2xl font-semibold mt-10">Categories</h2>
            <ul className="space-y-8 mt-8">
              {categories.map((category, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center text-gray-700"
                >
                  <span>{category.name}</span>
                  <span className="text-gray-400">{category.count}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="p-4 max-w-md px-10">
            {/* Heading */}
            <h2 className="text-2xl font-semibold mt-10">Recent Posts</h2>

            {/* Posts List */}
            <ul className="space-y-8 mt-6 max-w-[393px]">
              {posts.map((post, index) => (
                <li key={index} className="flex items-center gap-3">
                  {/* Post Image */}
                  <div className="max-w-20 w-full rounded-md">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={100}
                      height={100}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  {/* Post Info */}
                  <div>
                    <h3 className="text-sm font-medium">
                      {post.title}
                    </h3>
                    <p className="text-xs text-[#9F9F9F]">{post.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default BlogPage;

const Blogs = ({ image, title, description, tags }: {image: string, title:string, description: string , tags: {role : string, date: string, tag: string}}) => {
  return (
    <div className="flex flex-col gap-2 mb-[54px] max-w-[817px]">
      {/* Blog Image */}
      <Image src={image} alt="Blog Image" width={800} height={500} className="rounded-[10 px]" />

      {/* Tags Section */}
      <div className="flex flex-wrap gap-8 mt-4">
        <div className="flex items-center gap-2">
          <Image src={"/assets/blog/user.svg"} alt="User Icon" width={25} height={25}></Image>
          <span>{tags.role}</span>
        </div>

        <div className="flex items-center gap-2">
          <Image src={"/assets/blog/calendar.svg"} alt="Calendar Icon" width={25} height={25}></Image>
          <span>{tags.date}</span>
        </div>

        <div className="flex items-center gap-2">
          <Image src={"/assets/blog/tag.svg"} alt="Tag Icon" width={25} height={25}></Image>
          <span>{tags.tag}</span>
        </div>
      </div>

      {/* Blog Title */}
      <h1 className="text-[30px] font-semibold mt-4">{title}</h1>

      {/* Blog Description */}
      <p className="text-gray-600 mt-3">{description}</p>
      <span className='hover:border-b border-b-[#000000] w-[86px] cursor-pointer mt-[30px]'>Read More</span>
    </div>
  )
};