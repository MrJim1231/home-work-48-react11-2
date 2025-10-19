import React, { useState } from "react";
import Form from "../components/Form";
import Card from "../components/Card";

interface CardItem {
  id: number;
  title: string;
  content: string;
}

const Home: React.FC = () => {
  const [cards, setCards] = useState<CardItem[]>([]);

  const handleAddCard = (text: string) => {
    const newCard: CardItem = {
      id: Date.now(),
      title: "New Card",
      content: text,
    };
    setCards((prev) => [...prev, newCard]);
  };

  return (
    <div className="my-8 px-2 w-full">
      <h1 className="text-3xl font-bold text-center mb-6">Create Your Cards</h1>

      <div className="max-w-xl mx-auto mb-8">
        <Form onSubmit={handleAddCard} />
      </div>

      {cards.length === 0 ? (
        <p className="text-center text-gray-500">
          No cards yet. Add one using the form above 👆
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {cards.map((card) => (
            <Card key={card.id} title={card.title} content={card.content} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
