import { ExperienceBar } from "../Components/ExperienceBar";
import Profile from "../Components/Profile";

export default function Home() {
  return (
    <div className="container">
      <ExperienceBar />

      <section>
        <div>
          <Profile></Profile>
        </div>
        <div></div>
      </section>
    </div>
  );
}
