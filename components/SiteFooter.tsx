import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer>
      <div className="container py-10 md:py-0 md:h-20">
        <p className="text-center text-sm md:text-left">
          Build by {""}
          <Link
            href={siteConfig.links.x}
            className="underline underline-offset-4 font-medium"
          >
            MomoCode
          </Link>
          .Hosted on {""}
          <Link href={"/"} className="underline underline-offset-4 font-medium">
            Vercel
          </Link>
        </p>
      </div>
    </footer>
  );
}