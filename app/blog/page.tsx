import Image from "next/image";
import React from "react";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

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
      image: "/assets/blog/Rectangle 69 (4).svg",
      title: "Going all-in with millennial design",
      date: "03 Aug 2022",
    },
    {
      image: "/assets/blog/Rectangle 69 (3).svg",
      title: "Exploring new ways of decorating",
      date: "03 Aug 2022",
    },
    {
      image: "/assets/blog/Rectangle 69 (2).svg",
      title: "Handmade pieces that took time to make",
      date: "03 Aug 2022",
    },
    {
      image: "/assets/blog/Rectangle 69 (1).svg",
      title: "Modern home in Milan",
      date: "03 Aug 2022",
    },
    {
      image: "/assets/blog/Rectangle 69.svg",
      title: "Colorful office redesign",
      date: "03 Aug 2022",
    },
  ];

  return (
    <div className="max-w-[1440px] mx-auto font-Poppins">

      {/* Background Image */}
      <div className="relative mb-2 h-[330px] ">
        <Image
          src="/assets/blog/Rectangle 1.svg"
          alt="background image"
          className="object-cover"
          fill
        ></Image>
        <div className="absolute inset-0 flex flex-col gap-2 items-center justify-center">
          <Image
            src="/assets/blog/Meubel House_Logos-05.svg"
            alt=""
            width={60}
            height={60}
          />
          <h1 className="text-4xl font-bold m-0 p-0">Blog</h1>
          <div className="flex items-center gap-4">
            <span>Home</span>
            <Image
              src="/assets/blog/vector.svg"
              alt=""
              width={10}
              height={10}
            />

            <span>Blog</span>
          </div>
        </div>
      </div>

      {/* content */}
      <div className="max-w-[1200px] mx-auto flex md:flex-row flex-col gap-2">
        {/* 3 Blogs */}
        <div className=" flex flex-col">
          <Blogs
            image="/assets/blog/Rectangle 68.svg"
            title="Going all-in with millennial design"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum."
            tags={[
              { icon: "/assets/blog/vector (1).svg", label: "Admin" },
              { icon: "/assets/blog/vector (2).svg", label: "14 Oct 2022" },
              { icon: "/assets/blog/vector (3).svg", label: "Wood" },
            ]}
          />
          <Blogs
            image="/assets/blog/Rectangle 68.svg"
            title="Exploring new ways of decorating"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum."
            tags={[
              { icon: "/assets/blog/vector (1).svg", label: "Admin" },
              { icon: "/assets/blog/vector (2).svg", label: "14 Oct 2022" },
              { icon: "/assets/blog/vector (3).svg", label: "Wood" },
            ]}
          />
          <Blogs
            image="/assets/blog/Rectangle 68.svg"
            title="Handmade pieces that took time to make"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum."
            tags={[
              { icon: "/assets/blog/vector (1).svg", label: "Admin" },
              { icon: "/assets/blog/vector (2).svg", label: "14 Oct 2022" },
              { icon: "/assets/blog/vector (3).svg", label: "Wood" },
            ]}
          />
        </div>

        {/* Side Bar */}
        <div>
          <div className="p-4 flex flex-col  ">
            {/* Search Bar */}
            <div className="flex items-center justify-between mb-4 px-2 border-2 rounded-xl">
              <Input
                type="text"
                placeholder="Search"
                className="border-none bg-transparent"
              />
              <SearchIcon />
            </div>

            {/* Categories */}
            <h2 className="text-xl font-semibold mb-4">Categories</h2>
            <ul className="space-y-2">
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
          <div className="p-4 max-w-md">
            {/* Heading */}
            <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>

            {/* Posts List */}
            <ul className="space-y-4">
              {posts.map((post, index) => (
                <li key={index} className="flex gap-4 items-center">
                  {/* Post Image */}
                  <div className="w-16 h-16 flex-shrink-0 overflow-hidden rounded-md">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  {/* Post Info */}
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-800">
                      {post.title}
                    </h3>
                    <p className="text-xs text-gray-500">{post.date}</p>
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

const Blogs = ({ image, title, description, tags }: any) => {
  return (
    <div className="flex flex-col gap-2 mb-2 max-w-[800px]">
      {/* Blog Image */}
      <Image src={image} alt="Blog Image" width={800} height={400} className="rounded-md" />

      {/* Tags Section */}
      <div className="flex gap-4 mt-4">
        {tags.map((tag: any, index: number) => (
          <div key={index} className="flex items-center gap-2">
            <Image src={tag.icon} alt={tag.label} width={20} height={20} className="rounded-full" />
            <span>{tag.label}</span>
          </div>
        ))}
      </div>

      {/* Blog Title */}
      <h1 className="text-2xl font-bold mt-4">{title}</h1>

      {/* Blog Description */}
      <p className="text-gray-600 mt-2">{description}</p>
      <span className='hover:border-b border-b-[#000000] w-[90px] cursor-pointer '>Read More</span>
    </div>
  )
};