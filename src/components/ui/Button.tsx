export default function Button({
  children,
  width = "auto",
}: {
  children: React.ReactNode;
  width?: string;
}) {
  return (
    <button
      className={`${width} px-4 py-2 bg-bloody text-light font-jura-light rounded-lg hover:bg-dark hover:[box-shadow:0_0_40px_5px_rgba(239,68,68,0.3)] hover:text-light hover:border-light-red cursor-pointer transition-all duration-150 ease-in-out border border-light`}
    >
      {children}
    </button>
  );
}
