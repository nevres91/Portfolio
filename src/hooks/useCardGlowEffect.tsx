import { useEffect } from "react";

const useCardGlowEffect = () => {
  useEffect(() => {
    // Create a hidden element to get the primary color
    const primaryColorElement = document.createElement("div");
    primaryColorElement.className = "bg-red-700 hidden";
    document.body.appendChild(primaryColorElement);

    // Get the computed background color of the primary color
    const primaryColor = getComputedStyle(primaryColorElement).backgroundColor;

    // Select all elements with the class 'card'
    const cards = document.querySelectorAll<HTMLElement>(".card");

    // Loop over each card to apply the effect
    cards.forEach((card) => {
      card.style.setProperty("--clr", primaryColor);

      card.onmousemove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--x", `${x}px`);
        card.style.setProperty("--y", `${y}px`);
      };
    });

    // Cleanup function to remove the created element
    return () => {
      document.body.removeChild(primaryColorElement);
    };
  }, []);
};

export default useCardGlowEffect;
