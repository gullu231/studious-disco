import React from "react";

const defaultAccent = "#cacad8"; // rgb(202,202,216)

const AccentColorPicker: React.FC = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    document.documentElement.style.setProperty("--accent", e.target.value);
    localStorage.setItem("accentColor", e.target.value);
  };

  React.useEffect(() => {
    const saved = localStorage.getItem("accentColor");
    if (saved) {
      document.documentElement.style.setProperty("--accent", saved);
    } else {
      document.documentElement.style.setProperty("--accent", defaultAccent);
    }
  }, []);

  const handleReset = () => {
    document.documentElement.style.setProperty("--accent", defaultAccent);
    localStorage.removeItem("accentColor");
    // Force update the color input value
    const input = document.getElementById("accent-picker") as HTMLInputElement;
    if (input) input.value = defaultAccent;
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-white/80 dark:bg-black/80 rounded-full px-3 py-2 shadow-lg">
      <label htmlFor="accent-picker" className="text-xs font-semibold text-gray-700 dark:text-gray-200">Accent</label>
      <input
        id="accent-picker"
        type="color"
        defaultValue={localStorage.getItem("accentColor") || defaultAccent}
        onChange={handleChange}
        className="w-6 h-6 rounded-full border-none cursor-pointer"
        aria-label="Pick accent color"
      />
      <button
        onClick={handleReset}
        className="ml-2 px-2 py-1 text-xs rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        type="button"
      >
        Reset
      </button>
    </div>
  );
};

export default AccentColorPicker;
