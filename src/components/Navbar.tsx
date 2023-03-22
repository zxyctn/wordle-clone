import NavbarWord from "./NavbarWord";
import ThemeToggler from "./ThemeToggler";

const Navbar = () => {
  return (
    <div className="w-min h-min">

      <div className="xl:py-5 py-2 justify-center w-min mx-auto ">
        <div className="relative mb-5 xl:mb-2  text-neutral dark:text-white text-center text-4xl xl:text-5xl">
          <span className="logo">Wordle</span>
          <NavbarWord
            value="CLONE"
            type="bg-success border-success dark:text-black"
          />
        </div>
      </div>

      
    </div>
  );
};

export default Navbar;
