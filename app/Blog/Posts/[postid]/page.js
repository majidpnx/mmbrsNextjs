'use client';

import Nav from '../../../Nav/Nav';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Loading3 from '../../../Images/Landing/loading3.svg';

export default function PostPage() {
  const params = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (!params.postid) return;

    // const fetchData = async () => {
    //   try {
    //     const res = await fetch(`https://membersgram.com/wp-json/wp/v2/posts/${params.postid}?_embed`);
    //     const json = await res.json();
    //     setPost(json);
    //   } catch (err) {
    //     console.error('Failed to fetch data', err);
    //   }
    // };

    // fetchData();
    const fetchData = async () => {
      const res = await fetch(`/api/post/${params.postid}`);
      const data = await res.json();
      // console.log(data)
      setPost(data);
    };

    fetchData();
  }, [params.postid]); // ✅ include dependency here

  let cleanContent = '';
  if (post?.content?.rendered) {
    cleanContent = post.content.rendered.replace(/<img[^>]*>/g, '');
  }

  return (
    <div className="w-full min-h-screen">
      <Nav />
      <div className="w-full flex flex-col justify-start items-center mt-8">
        {
          post
            ? <div className="prose lg:prose-xl max-w-3xl mx-auto px-4">
              <h1 className="text-3xl font-bold">{post.title.rendered}</h1>
              {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
                <Image
                  src={post._embedded['wp:featuredmedia'][0].source_url}
                  alt="Featured Image"
                  layout="responsive"
                  objectFit="cover"
                  className="rounded-t-xl"
                  width={800}
                  height={400}
                />
              )}
              <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: cleanContent }} />
            </div>
            :
            <div className="flex h-[90vh] flex-col items-center justify-center space-y-4">
              <Image src={Loading3} alt="Loading" className="w-24 h-24" />
            </div>
        }
      </div>
    </div>
  );
}
