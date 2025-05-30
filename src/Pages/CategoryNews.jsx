import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
    const {data: news} = useLoaderData();
    console.log(news)
    return (
        <div className="space-y-3">
            <h2 className="font-semibold mb-3">Dragon News Home</h2>
            <p className="text-gray-500 text-sm">{news.length} News found on this category</p>
            <div className="space-y-3">
               {
                news.map((singleNews)=> 
                    <NewsCard key={singleNews._id} news={singleNews}></NewsCard>
                   
                )
               }
            </div>
        </div>
    );
};

export default CategoryNews;