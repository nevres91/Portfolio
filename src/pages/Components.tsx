import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

export default function Components() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold text-cyan-400 mb-8">UI Components</h1>
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl mb-4">Button</h2>
          <Button>Click Me</Button>
        </div>
        <div>
          <h2 className="text-2xl mb-4">Card</h2>
          <Card title="Sample Card" description="A reusable card component" />
        </div>
      </div>
    </div>
  );
}
