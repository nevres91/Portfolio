interface CardProps {
  title: string;
  description: string;
}

export default function Card({ title, description }: CardProps) {
  return (
    <div className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition neon-glow">
      <h3 className="text-xl font-semibold text-cyan-400">{title}</h3>
      <p className="text-white">{description}</p>
    </div>
  );
}
