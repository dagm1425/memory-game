import { useEffect, useState } from "react";
import styled from "styled-components";
import uniqid from "uniqid";
import GridItem from "./GridItem";

export default function Main() {
  const [dogs, setDogs] = useState([]);
  const [score, setScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    const loadCards = async () => {
      setDogs(shuffleArray(await fetchDogs()));
    };

    loadCards();
  }, []);

  const fetchDogs = async () => {
    const breeds = [
      "german shepherd",
      "golden retriever",
      "siberian husky",
      "afghan hound",
      "bulldog",
      "boxer",
      "poodle",
      "chow chow",
      "dachshund",
      "rottweiler",
    ];
    const dogsArr = [];

    for (let i = 0; i < breeds.length; i++) {
      try {
        const response = await fetch(
          "https://api.api-ninjas.com/v1/dogs?name=" + breeds[i],
          {
            method: "GET",
            headers: {
              "X-Api-Key": "DPdJD3eyeFrTHMqyuQy6hQ==zAPfIsr9HtvSU4ID",
            },
          }
        );
        const dogData = await response.json();
        const id = uniqid();
        const name = dogData[0].name;
        const url = dogData[0].image_link;

        dogsArr.push({ id, name, url });
      } catch (err) {
        console.error(err);
      }
    }

    return dogsArr;
  };

  const shuffleArray = (arr) => {
    return arr.sort(() => 0.5 - Math.random());
  };

  const resetScore = () => {
    setScore(0);
    setClickedCards([]);
  };

  const updateBestScore = () => {
    if (score > bestScore) {
      setBestScore(score);
      return;
    }
  };

  const playRound = (id) => {
    if (!clickedCards.includes(id)) {
      setClickedCards([...clickedCards, id]);
      setScore(score + 1);
      return;
    }
    updateBestScore();
    resetScore();
  };

  const handleCardClick = (id) => {
    setDogs(shuffleArray(dogs));
    playRound(id);
  };

  return (
    <div>
      <Grid>
        {dogs.map((dog) => {
          return (
            <GridItem
              key={dog.id}
              id={dog.id}
              name={dog.name}
              url={dog.url}
              handleCardClick={handleCardClick}
            />
          );
        })}
      </Grid>
      <div style={{ margin: "2rem" }}>
        <h2>Score: {score}</h2>
        <h2>Best Score: {bestScore}</h2>
      </div>
    </div>
  );
}

const Grid = styled.div`
  display: grid;
  width: 70%;
  margin: 3rem auto;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;
