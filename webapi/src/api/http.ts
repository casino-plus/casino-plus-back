// リクエストボディの必須パラメーター
export interface RequestBody {
    // 特になし
}
// レスポンスボディの必須パラメーター
export interface ResponseBody {
    // 特になし
}
// 抽象API
export interface API {
    run(req: RequestBody): ResponseBody
}
