import Image from "next/image";
import React from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

function RecentPost({ post }: { post: any }) {
  return (
    <div className='flex flex-row items-center gap-3 pt-3'>
      <Image
        className='rounded-full bg-sky-400 w-12 h-12'
        src={post.imageUrl}
        width={100}
        height={100}
        alt='post'
      />
      <div className='flex flex-col justify-between'>
        <h4 className='font-semibold'>{post.title}</h4>
        <div className=''>{formatDistanceToNow(new Date(post.date), {addSuffix: true})}</div>
      </div>
    </div>
  );
}

export default RecentPost;
