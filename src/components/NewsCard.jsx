import { FaStar, FaEye } from 'react-icons/fa';

const NewsCard = (props ={}) => {
    const {news} = props || {};
  return (
    <div className="card w-full bg-base-100 shadow-xl border">
      <div className="flex items-center gap-3 px-4 pt-4">
        <div className="avatar">
          <div className="w-10 rounded-full">
            <img src={news.author.img} alt="Author" />
          </div>
        </div>
        <div>
          <h2 className="font-semibold">{news.author.name}</h2>
          <p className="text-sm text-gray-500">{new Date(news.author.published_date).toDateString()}</p>
        </div>
      </div>

      <div className="card-body px-4 py-2">
        <h2 className="card-title text-lg font-bold">{news.title}</h2>
        <figure className="py-2">
          <img src={news.image_url} alt="News Thumbnail" className="rounded-lg" />
        </figure>
        <p className="text-sm text-gray-700">
          {news.details.length > 200 ? news.details.slice(0, 200) + '...' : news.details}
        </p>
        <a href="#" className="text-orange-600 font-semibold hover:underline">Read More</a>
        <div className="flex justify-between items-center pt-4 border-t">
          <div className="flex items-center gap-1 text-orange-500">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className={i < Math.round(news.rating.number) ? 'text-orange-500' : 'text-gray-300'} />
            ))}
            <span className="text-sm text-black ml-1">{news.rating.number}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <FaEye />
            <span>{news.total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
