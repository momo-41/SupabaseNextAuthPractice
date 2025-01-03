import { allPosts } from "@/.contentlayer/generated";
import { format } from "date-fns";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Mdx from "@/components/MdxComponent";

//slugという名前で作ったのでslug
async function getPostFromSlug(slug: string) {
  const post = allPosts.find((post) => post.slugAsParams === slug); // allPostsにあるslugとパラメーターから取得したslugが一致したら返す

  return post;
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const post = await getPostFromSlug(slug);

  if (!post) {
    notFound;
  }

  return (
    <article className="container max-w-3xl py-6 lg:py-10">
      <div>
        {post?.date && (
          <time>Published on {format(post.date, "yyyy/MM/dd")}</time>
        )}
        <h1 className="mt-2 font-extrabold text-4xl lg:text-5xl leading-tight">
          {post?.title}
        </h1>
      </div>
      {post?.image && (
        <Image
          src={post.image}
          alt={post.title}
          width={720}
          height={405}
          className="my-8 border rounded-sm bg-muted"
        />
      )}
      <Mdx code={post?.body.code || ""} />
      <hr className="mt-12" />
      <div className="py-6 text-center lg:py-10">
        <Link
          href={"/blog"}
          className={cn(buttonVariants({ variant: "secondary" }))}
        >
          全ての記事をみる
        </Link>
      </div>
    </article>
  );
}
