import { useTranslation } from "react-i18next";

import { useAppDispatch } from "../hooks/useRedux";
import { toggleTheme } from "../redux/app/slice";

function Poc() {
  const { i18n } = useTranslation();

  const dispatch = useAppDispatch();

  return (
    <div>
      {" "}
      <button
        type="button"
        onClick={() => {
          dispatch(toggleTheme());
        }}
      >
        dispatch
      </button>
      <button
        type="button"
        onClick={async () => {
          await i18n.changeLanguage("ko");
          localStorage.setItem("language", "ko");
        }}
      >
        한국어
      </button>
      <button
        type="button"
        onClick={async () => {
          await i18n.changeLanguage("en");
          localStorage.setItem("language", "en");
        }}
      >
        English
      </button>
      <button
        type="button"
        onClick={async () => {
          await i18n.changeLanguage("jp");
          localStorage.setItem("language", "jp");
        }}
      >
        日本語222
      </button>
      <button
        type="button"
        onClick={() => {
          const len = localStorage.getItem("language");
          console.log(len);
        }}
      >
        getget!
      </button>
    </div>
  );
}

export default Poc;
