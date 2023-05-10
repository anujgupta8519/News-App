import React,{useState,useEffect} from 'react'
import { Input } from 'antd';
import NewsTemp from './NewsTemp';

function NewsApp() {
    const { Search } = Input;
    const apiKey = "88";
    const [input,setInput] = useState("Top");
    const [newsList, setNewsList] = useState([]);
    const apiUrl = `https://newsapi.org/v2/everything?q=${input}&from=2023-04-10&sortBy=publishedAt&apiKey=${apiKey}`;
    useEffect(()=>{
        fetchNews()
    });
    async function fetchNews(){
        if (input==='') {
            return;
        }
        try {
            const data = await fetch(apiUrl);
            const jsonData = await data.json();
            
            setNewsList(jsonData.articles);
            console.log(jsonData);
        } catch (error) {
            console.log(error)
        }
        
            }
           function onChange(eve){
              setInput(eve.target.value);
           }
  return (
    <div style={{width:"80%", margin:"100px"}}>
        <h2>News App</h2>
      <Search styles={{width:"100%"}} placeholder="input search text" onChange={onChange} enterButton />
      <div style={{display:"grid", gridTemplateColumns:"repeat(3,30%)", gap:"20px", marginTop:"50Px", alignItems:"center",justifyContent:"center"}}>{newsList.map((news)=>{
          return <NewsTemp key={news.url} news = {news}/> })}</div>
          </div>
          )
}

export default NewsApp