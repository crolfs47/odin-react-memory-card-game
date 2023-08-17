import "../styles/Card.css";
import { useState, useEffect } from "react";

const Card = () => {
  const [cat, setCat] = useState({});

  useEffect(() => {
    const fetchCatAPIData = async () => {
      try {
        const response = await fetch(
          `https://api.thecatapi.com/v1/images/search`, {mode: 'cors'}
        );
        const catData = await response.json();
        console.log(catData);
        setCat({
          id: catData[0].id,
          url: catData[0].url,
        })
      } catch (error) {
        console.log(error)
        return error;
      }
    };
    fetchCatAPIData();
    // potentially need to add clean up function to fix issue of it doing things twice
  }, []);

  return (
    <>
      <div className="card-container">
        <div>
          <img src={cat.url} />
        </div>
      </div>
    </>
  );
};

export default Card;
