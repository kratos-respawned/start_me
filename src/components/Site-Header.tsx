import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";

function SiteHeader() {
  return (
    <header className="flex justify-end  p-5 px-24 border-b">
      <ThemeSwitcher />
    </header>
  );
}

export default SiteHeader;
