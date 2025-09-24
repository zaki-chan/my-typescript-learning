// useStateはクライアントサイドの機能なので、コンポーネントの先頭に"use client"をつける
"use client";

import { useState } from "react";
import { fetchImage } from "./fetch-image";
import styles from "./page.module.css";

// コンポーネントの引数を定義する
type CatImageProps = {
    url:string;
};

export function CatImage({ url }:CatImageProps){
    const [imageUrl, setImageUrl] = useState(url);
    // 画像を取得する関数を定義
    const refreshImage = async () => {
        // 再取得のリクエストをした時に、ユーザーがボタンを押したことを
        // 確認しやすくするために、一度初期化する
        // 特にレスポンスが遅い場合にはこのステップが重要になる
        setImageUrl(""); // 初期化
        const image = await fetchImage();
        setImageUrl(image.url);
    };

    return(
        <div className={styles.page}>
            {/* ボタンの表示 */}
            <button onClick={refreshImage} className={styles.button}>他のにゃんこも見る</button>
            {/* 画像の表示 */}
            {/* &&は論理積、左から順に評価し、1つでもfalseがあれば全体としてfalseで評価は打ち切り */}
            {/* imageUrlが空の場合はfalse、空でない場合はimgが表示 */}
            <div className={styles.frame}>
                {imageUrl && <img src={imageUrl} className={styles.image} />}
            </div>
        </div>
    );
}