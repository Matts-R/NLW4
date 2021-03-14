import { ChallengesProvider } from "../context/ChallengesContext";
import "../Styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />;
    </ChallengesProvider>
  );
}

export default MyApp;
