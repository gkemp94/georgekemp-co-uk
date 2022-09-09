interface CardProps {
  title: string;
  description: string;
}

interface CardsProps {
  cards: CardProps[];
}

export function Cards ({ cards }: CardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {cards.map(card => (
        <div className="p-8 border-2 flex flex-col gap-3 border-gray-900">
          <h4 className="text-3xl font-bold">
            { card.title }
          </h4>
          <p className="text-lg">
            { card.description }
          </p>
        </div>
      ))}
    </div>
  );
}