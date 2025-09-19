// 型の指定
function sum(a:number, b:number):number{
    return a + b;
}
// ジェネリクス：型を後から指定
function identity<T>(arg: T): T{
    return arg;
}
// 高度な型表現
// ユニオン型：複数の型のどれか
type NullableString = string | null;
// タプル型：配列の各要素に異なる型を指定できる型
type Response = [number, string];
const response: Response = [200, "OK"];

// OOP
// interface
interface Person{
    firstName: string;
    lastName: string;
}

class Employee implements Person{
    firstName: string;
    lastName:string;
    constructor(firstName:string,lastName:string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

// 非同期処理
async function fetchData(): Promise<void>{
    try{
        const response = await fetch("https://api.example.com/data");
        const data = await response.json();
        console.log(data);
    } catch(error){
        console.error("Error fetching data:",error);
    }
}

