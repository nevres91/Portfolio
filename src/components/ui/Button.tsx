export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="px-4 py-2 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400 transition neon-glow">
      {children}
    </button>
  );
}
