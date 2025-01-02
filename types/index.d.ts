//拡張子を「d.ts」にすることで型定義のためのファイルになる(TypeSciriptを実行するファイルとして認識されない)
export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    x: string;
    github: string;
  };
};
