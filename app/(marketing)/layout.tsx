//(marketing)に共通のhtmlやcssはここで記述する

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* headerコンポーネントとして作成してもいい */}
      <header className="container z-40 bg-background">
        <div className="h-20 py-6">
          <nav>
            <Link
              href={"/login"}
              className={cn(
                buttonVariants({ variant: "secondary", size: "sm" }), //button.tsxのファイルにあるbuttonVariants関数でcssを指定している
                "px-4" //追加のcss
              )}
            >
              ログイン
            </Link>
          </nav>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
