import { useState } from "react";
import { useTheme } from "hooks/useTheme"
import Switch from "react-switch";

export const ThemeSwitcher = () => {
  
  const { toggleChangeTheme } = useTheme();
  const [isDarkTheme, setIsDarkTheme] = useState(localStorage.getItem('app-theme') === 'dark' ? true : false);

  const handleChangeTheme = nextChecked => {
    setIsDarkTheme(nextChecked);
    toggleChangeTheme(nextChecked);
  };

  return (
    <div className="themeSwitcher">
      <Switch
        onChange={handleChangeTheme}
        checked={isDarkTheme}
        handleDiameter={18.8}
        height={20}
        width={46}
        uncheckedIcon={<div
          style={{
            position: "absolute",
            left: "-18.4px",
          width: "46px",
            height: "100%",
          borderRadius: "10px",
          boxShadow: "7px 5px 15px 0px rgba(160, 158, 160, 0.60)"
        }}
      ></div>}
        checkedIcon={false}
        activeBoxShadow="4px 4px 15px 0px rgba(243, 243, 243, 0.25)"
        offColor="#CECDCD"
        onColor="#9BB537"
        offHandleColor="#F8F8F8"
        onHandleColor="#F3F3F3"
        
        
      />
    </div>
  )
}