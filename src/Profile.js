import { getImageUrl } from "./utils";

export default function Profile({
  scientistName,
  imageID,
  imageSize,
  profession,
  awardsCount,
  awardsInfo,
  discovered,
}) {
  return (
    <section className="profile">
      <h2>{scientistName}</h2>
      <img
        className="avatar"
        src={getImageUrl(imageID)}
        alt={scientistName}
        width={imageSize}
        height={imageSize}
      />
      <ul>
        <li>
          <b>Profession:</b> {profession}
        </li>
        <li>
          <b>Awards : {awardsCount}</b>
          {awardsInfo}
        </li>
        <li>
          <b>Discovered: </b> {discovered}
        </li>
      </ul>
    </section>
  );
}
