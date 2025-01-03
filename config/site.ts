//サイトの情報を入れていく(名前/Discription/URL/リンク情報)
//情報をこのファイルで一元管理していると保守が効率化できる

import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Post Writer",
  description: "ブログ投稿ができるWebアプリケーションです。",
  url: "http://localhost:3000",
  ogImage: "",
  links: {
    x: "https://x.com/momo41___",
    github: "https://github.com/momo-41",
  },
};
