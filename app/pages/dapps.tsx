import { useState } from "react";
import { Babyboom } from "./section/babyboom";
import { Sellon } from "./section/sellon";

export function Dapps() {
  const [active, setActive] = useState<"babyboom" | "sellon">("babyboom");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSwitch = (section: "babyboom" | "sellon") => {
    if (section === active) return;
    setIsTransitioning(true);

    setTimeout(() => {
      setActive(section);
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center relative overflow-hidden">
      <div className="flex space-x-8 mt-8">
        <button
          onClick={() => handleSwitch("babyboom")}
          className={`pb-1 border-b-2 transition-colors ${
            active === "babyboom"
              ? "border-cyan-400 text-cyan-400"
              : "border-transparent hover:text-cyan-300"
          }`}
        >
          BabyBoom
        </button>
        <button
          onClick={() => handleSwitch("sellon")}
          className={`pb-1 border-b-2 transition-colors ${
            active === "sellon"
              ? "border-cyan-400 text-cyan-400"
              : "border-transparent hover:text-cyan-300"
          }`}
        >
          SellOn
        </button>
      </div>

      <div
        className={`absolute inset-0 bg-black transition-opacity duration-500 pointer-events-none ${
          isTransitioning ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      {/* Content */}
      <div className="mt-16 px-4">
        {active === "babyboom" ? (
          <Babyboom />
        ) : (
          <Sellon />
        )}
      </div>
    </div>
  );
}