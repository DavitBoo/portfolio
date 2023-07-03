import React, { createContext, Dispatch, SetStateAction, useState } from "react";

interface LanguageContextProps {
  language: string;
  setLanguage: Dispatch<SetStateAction<string>>;
}

export const LanguageContext = createContext<LanguageContextProps>({
  language: "",
  setLanguage: () => {},
});

export const LanguageProvider: React.FunctionComponent<React.PropsWithChildren<LanguageContextProps>> = ({
  children,
}) => {
  const userLanguage = navigator.language;
  const [language, setLanguage] = useState(userLanguage);

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
};
