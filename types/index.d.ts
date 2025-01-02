//拡張子を「d.ts」にすることで型定義のためのファイルになる(TypeSciriptを実行するファイルとして認識されない)
export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

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

export type MarketingConfig = {
  //NavItemを配列化する型定義(MainNav.tsxでmapさせるために配列化)
  mainNav: NavItem[];
};
