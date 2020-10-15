import styled from "styled-components"
// 注意单词必须首字母大写
export let HomeStyle=styled.div`
.box{
    width:100%;
    height:100%;
}
header{
    width:100%;
    height:55px;
    border-bottom:5px solid #222d32;
    background-color:#222d32;
    position: relative;
}
.logo{
    position: absolute;
    left: 40px;
    font-size: 16px;
    color: #fff;
    line-height: 60px;
    margin-left: 10px;
}
i{ color: #fff;}
.topUl{
    position: absolute;
    right: 0;
    top: -7px;
    padding: 0;
    background: none;
    display:flex;
    padding-bottom:1px;
    margin-right:80px;
}
.topUl li{
    list-style:none;
    float:left;
    align-self:center;
}
.time{
    margin-right: 50px;
    font-size: 16px;
    color: #2fb9d4;
}
.mess{
    margin-left:10px ;
    margin-right:20px;
    font-size:14px;
    color:#fff;
}
.img2{
    border-radius: 100%;
    border: 2px solid #A9B7B7;
    width:36px;
    height:36px;
    vertical-align: middle;
    overflow:hidden;
}
.img2 img{
    width:100%;
    height:100%;
}
.content{
    width:100%;
    height:calc(100% - 60px);
    display:flex;

}
.left{
    width:220px;
    height:100%;
    background-color:#222d32;
}









`