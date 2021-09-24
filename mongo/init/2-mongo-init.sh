# mongoimport --db casinoplus --collection grids --drop --file /docker-entrypoint-initdb.d/sample.json --jsonArray

# --drop : 先に存在していた場合は上書き
# --jsonArray : Array形式になっている複数のオブジェクト(docment)でも読み込める

# db.grids.insert( { a: 1 } )