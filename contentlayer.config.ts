import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `blog/**/*.mdx`, // ここに型定義を適用していく
  // 以下にブログに必要なプロパティを型定義していく
  fields: {
    title: { type: "string", required: true },
    description: { type: "string" },
    date: { type: "date", required: true },
    published: { type: "boolean", default: true },
    images: { type: "string", required: true },
  },
  // 以下でマークダウンのファイル名をスラグとして使う
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    }, // slugを呼び出したら自動的にファイル名にアクセスして、そのままブログのid(スラグ)になる
  },
}));

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Post],
});