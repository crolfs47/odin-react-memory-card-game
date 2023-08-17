import "../styles/Card.css";
import { useState, useEffect } from "react";

const Card = () => {
  // const [cat, setCat] = useState({});
  const [catImages, setCatImages] = useState([]);

  useEffect(() => {
    const abortController = new AbortController(); // Added this as part of cleanup function to get rid of Strictmode issue in dev

    const fetchCatAPIData = async () => {
      try {
        const response = await fetch(
          `https://api.thecatapi.com/v1/images/search?limit=12`,
          {
            headers: {
              "x-api-key":
                "live_YDushvk3CG1SOyCUOSkFfNaJiywR7pe4g52yztF29zgH6LwygNuBi9LKISe9OtyR",
            },
            signal: abortController.signal,
            mode: "cors",
          }
        );
        const catData = await response.json();
        const newArray = catData.map((cat) => ({
          id: cat.id,
          url: cat.url,
        }));
        setCatImages(newArray);
        
        // setCat({
        //   id: catData[0].id,
        //   url: catData[0].url,
        // });
      } catch (error) {
        console.log(error);
        return error;
      }
    };
    fetchCatAPIData();
    return () => abortController.abort();
  }, []);

  return (
    <>
      <div className="card-container">
        {catImages.map((cat) => {
          return <img src={cat.url} alt={cat.id} key={cat.id} width="200" />;
        })}
      </div>
    </>
  );
};

export default Card;
