import Profile from "./Profile";
import "./Gallery.css";
export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        scientistName="Maria Skłodowska-Curie"
        imageID="szV5sdG"
        imageSize={80}
        profession="Physicist and Chemist"
        awardsCount={4}
        awardsInfo="(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal,
    Matteucci Medal)"
        discovered="polonium (chemical element)"
      />

<Profile
        scientistName="Katsuko Saruhashi"
        imageID="YfeOqp2"
        imageSize={80}
        profession="Geochemist"
        awardsCount={2}
        awardsInfo="(Miyake Prize for geochemistry, Tanaka Prize)"
        discovered="a method for measuring carbon dioxide in seawater"
      />
    </div>
  );
}
