const ThemeToggle = () => {
  const handleThemeChange = (e) => {
    const theme = e.target.value;
    document.querySelector("html").setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  };

  return (
    <select className="select select-bordered w-full max-w-xs" onChange={handleThemeChange} defaultValue="light">
      <option disabled>Pick Theme</option>
      <option>light</option>
      <option>dark</option>
      <option>cupcake</option>
      <option>bumblebee</option>
      <option>corporate</option>
      <option>synthwave</option>
      <option>retro</option>
      <option>cyberpunk</option>
      <option>valentine</option>
    </select>
  );
};

export default ThemeToggle;
