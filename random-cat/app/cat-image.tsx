// コンポーネントの引数を定義する
type CatImageProps = {
    url:string;
};

export function CatImage({ url }:CatImageProps){
    return(
        <div>
            <img src={url} />
        </div>
    );
}