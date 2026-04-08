import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center" style={{ background: "#030812" }}>
      <div
        className="w-full max-w-md mx-4 rounded-xl p-8"
        style={{ background: "#0C1828", border: "1px solid #1A3048" }}
      >
        <div className="flex mb-4 gap-3">
          <AlertCircle className="h-8 w-8 flex-shrink-0" style={{ color: "#F87171" }} />
          <h1 className="text-2xl font-bold" style={{ color: "#EEF4FF" }}>404 Page Not Found</h1>
        </div>
        <p className="mt-2 text-sm" style={{ color: "#7A9BB5" }}>
          Did you forget to add the page to the router?
        </p>
      </div>
    </div>
  );
}
