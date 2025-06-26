import React from "react";
import { useState } from "react";

export default function CRUD() {
  const [cards, setCards] = useState(() => {
    const savedCards = localStorage.getItem("cards");
    return savedCards
      ? JSON.parse(savedCards)
      : [
          {
            id: 1,
            title: "Big 4 Auditor Financial Analyst",
            description:
              "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
            price: "Rp.300k",
          },
        ];
  });

  // Fungsi untuk menambah card baru
  const addCard = () => {
    const newCard = {
      id: Date.now(),
      title: "Big 4 Auditor Financial Analyst",
      description:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
      price: "Rp.300k",
    };
    const updatedCards = [...cards, newCard];
    setCards(updatedCards);
    localStorage.setItem("cards", JSON.stringify(updatedCards));
  };

  // Fungsi untuk menghapus card berdasarkan id
  const deleteCard = (id) => {
    const updatedCards = cards.filter((card) => card.id !== id);
    setCards(updatedCards);
    localStorage.setItem("cards", JSON.stringify(updatedCards));
  };

  // Fungsi untuk mengupdate card dengan input baru
  const updateCard = (id, field, value) => {
    const updatedCards = cards.map((card) =>
      card.id === id ? { ...card, [field]: value } : card
    );
    setCards(updatedCards);
    localStorage.setItem("cards", JSON.stringify(updatedCards));
  };
  return (
    <>
      <section className="mt-5 py-10 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center p-5 ">
          <div className="flex flex-row items-center p-5">
            <h1 className="text-3xl font-semibold mb-4">CRUD Data Card | </h1>
            <button
              className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-blue-700 mb-5 ml-5"
              onClick={addCard}
            >
              Tambah Card
            </button>
          </div>

          <div className="flex flex-wrap gap-5 justify-center rounded-md">
            {cards.map((card) => (
              <div
                key={card.id}
                className="bg-white shadow-lg rounded-lg p-6 w-64 hover:transform hover:scale-105 transition-transform"
              >
                <div className="mb-4">
                  <input
                    type="text"
                    value={card.title}
                    onChange={(e) =>
                      updateCard(card.id, "title", e.target.value)
                    }
                    className="w-full p-2 border border-gray-300 rounded-lg mb-2"
                    placeholder="Card Title"
                  />
                  <input
                    type="text"
                    value={card.description}
                    onChange={(e) =>
                      updateCard(card.id, "description", e.target.value)
                    }
                    className="w-full p-2 border border-gray-300 rounded-lg mb-2"
                    placeholder="Description"
                  />
                  <input
                    type="text"
                    value={card.price}
                    onChange={(e) =>
                      updateCard(card.id, "price", e.target.value)
                    }
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Price"
                  />
                </div>
                <div className="card-display mb-4">
                  <h3 className="text-xl font-semibold">{card.title}</h3>
                  <p className="text-gray-600">{card.description}</p>
                  <p className="text-lg text-green-500">{card.price}</p>
                </div>
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700"
                  onClick={() => deleteCard(card.id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
