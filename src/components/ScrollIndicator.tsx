
import { ChevronDown } from 'lucide-react';

const ScrollIndicator = () => {
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={handleScrollDown}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:animate-none transition-all duration-300 group"
      aria-label="Scroll down"
    >
      <div className="flex flex-col items-center space-y-2">
        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
          Scroll
        </span>
        <ChevronDown className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
      </div>
    </button>
  );
};

export default ScrollIndicator;
