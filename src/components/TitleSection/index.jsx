export function TitleSection({ title, description }) {
  return (
    <div className="titleSection">
      <div className="titleSectionMarker"></div>
      <div className="titleSectionContent">
        <h2>{title}</h2>
        <span>{description}</span>
      </div>
    </div>
  );
}
