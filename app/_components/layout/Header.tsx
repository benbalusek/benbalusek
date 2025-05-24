import Navigation from "@/app/_components/layout/Navigation";
import Logo from "@/app/_components/ui/Logo";

function Header() {
  return (
    <header className="flex justify-between mb-6 items-center">
      <Logo />
      <Navigation />
    </header>
  );
}

export default Header;
