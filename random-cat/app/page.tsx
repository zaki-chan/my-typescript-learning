import {connection} from "next/server";
import { CatImage } from "./cat-image";
import {fetchImage} from "./fetch-image";

export default async function Home() {
  await connection();
  // Next.jsはビルド時にページを生成する静的サイト生成(SSG)がある
  // await connection()がない状態でビルドすると、
  // ビルド時にfetchImageが実行されて画像が固定化される
  const image = await fetchImage();
  // console.log("Home: 画像情報を取得しました",image);
  return <CatImage url={image.url} />;
}
