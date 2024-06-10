const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 5000;


app.use(bodyParser.json()); //bodyparser를 json타입으로 가져온다. json타입 변경
app.use(express.urlencoded({ extended: false})); //url확장자 설정

app.get("/", (req, res) => {
    res.send("서버실행 완료");
})
app.post("/api", (req, res) => {
    //const {email, pwd, isChecked} = req.body; 이것과 똑같다!
    const email = req.body.email;
    const pwd = req.body.pwd;
    const isChecked = req.body.isChecked;
    let remember;
    if(isChecked){
        remember = "기억하기";
    }
    else{
        remember = "기억하지 않기";
    }
    console.log(email, pwd, remember);
    res.json({  //json 타입으로 response로 내보내준다.
        email,
        pwd,
        remember
    });
})
app.listen(PORT, ()=>{
    console.log(`${PORT}에서 서버가 대기중...`);
});