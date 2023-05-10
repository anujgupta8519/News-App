import React,{useState} from 'react'
import { Card } from 'antd';
import { Button } from 'antd';
const { Meta } = Card;

function NewsTemp({news}) {
    const [loadings, setLoadings] = useState([]);
    const enterLoading = (index) => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = true;
        return newLoadings;
      });
      setTimeout(() => {
        setLoadings((prevLoadings) => {
          const newLoadings = [...prevLoadings];
          newLoadings[index] = false;
          return newLoadings;
        });
      }, 6000);
    };
  return (
    <div>
        <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt={news.title} src={news.urlToImage} />}
  >
    <Meta title={news.title} description={news.description} />
    <Button
          type="primary" block
        
          loading={loadings[1]}
          onClick={() => {enterLoading(1); window.open(news.url)}}
        >
          Read More
        </Button>
  </Card>
    </div>
  )
}

export default NewsTemp