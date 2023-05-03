import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";

function SiteHeader() {
  return (
    <header className="flex justify-end  p-5 px-24 border-b">
      <ThemeSwitcher />
      <div>
        <p>commit check</p>
      </div>

    </header>

  );
}

export default SiteHeader;
