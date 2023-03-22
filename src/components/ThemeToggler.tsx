import { useEffect, useState } from "react";
import { MoonFill, SunFill } from "react-bootstrap-icons";

const ThemeToggler = () => {
  const [dark, setDark] = useState(() => {
    let theme = window.localStorage.getItem("theme");
    if (!theme) {
      theme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      window.localStorage.setItem("theme", theme);
    }
    return theme === 'dark';
  });

  useEffect(() => {
    const theme = dark ? "dark" : "light";
    window.localStorage.setItem("theme", theme);

    const html = document.getElementsByTagName("html")[0] as HTMLElement;

    html.classList.add(theme);
    html.classList.remove(!dark ? "dark" : "light");

    html.setAttribute("data-theme", theme);
  }, [dark]);

  const handleChange = () => {
    setDark((current) => {
      return !current;
    });
  };

  return (
    <div className="flex justify-end items-start my-auto place-self-end">
      <label className="swap swap-rotate w-14 h-14 grid border-2 border-neutral border-opacity-25 dark:border-opacity-100">
        <input type="checkbox" checked={dark} onChange={handleChange} />
        <MoonFill className="swap-on fill-white w-6 h-6" />
        <SunFill className="swap-off w-6 h-6" />
      </label>
    </div>
  );
};

export default ThemeToggler;
