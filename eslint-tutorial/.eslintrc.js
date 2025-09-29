module.exports = {
    // root:このeslintrcがESLintに見つかると、それより上のディレクトリを探さなくなる
    root: true,
    // env:チェック対象のJS/TSがどの実行環境で使われるかをESLintに伝えるオプション
    env: {
        // browser:true :window,alertなどのグローバル変数が認識される
        browser: true,
        // ES2021までに導入されたグローバル変数が認識される(グローバル変数：定義せずに利用できる変数)
        es2021: true,
    },
    // どの構文を使っているか
    parserOptions: {
        // ecmaVersion:どのバージョンのECMAScriptを使うか
        // デフォルトではECMAScript 5(これはかなり古い)
        ecmaVersion: "latest",
        // JS/TSにはスクリプトモードとモジュールモードがある
        // デフォルトではスクリプトモード、モジュールモードで書く方が普通
        sourceType: "module",
    },
    extends: ["airbnb-base"],
    rules: {
        "import/prefer-default-export": "off",
        quotes: ["error","double"],
    },
    // rules: {
    //     "no-console": "error",
    //     // 例外など細かい設定ができる
    //     camelcase: ["error", { properties: "never"}],
    //     // 文末セミコロンを必須にする設定
    //     semi: ["error", "always"],
    // },
};