import express from 'express'
// router
import * as router from './api/router'
// test
import * as test from './test/test'

const app: express.Express = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// CROS を許可する。本番では制限する。
app.use((req: express.Request, res: express.Response, next:
    express.NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "*")
    res.header("Access-Control-Allow-Headers", "*")
    next();
})
app.listen(3000, () => {
    console.log("Start on port 3000.")
})

// ルーティング
router.run(app)
// テスト実行
test.run()
