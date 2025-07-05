// express 모듈을 설치했기 때문에 가져다 사용가능
import express from "express"
import serveIndex from "serve-index";

const app = express();  // 서버로 요청은 간단히!
const myport = 7070;
// public 폴더를 홈디렉토리로 쓰겠다
// serveIndex 모듈은 디렉토리 리스트 기능을 제공해줌
app.use(express.static("public"),serveIndex('public', {'icons':true}))

/*
app.get("/" , (req,res) => {
    res.end("hello");
})
*/

app.listen(myport,() => {
    console.log(`서버가 ${myport}에서 돌고 있어용`);
})