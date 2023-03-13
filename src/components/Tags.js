import React from "react";
import { useParams } from "react-router-dom";
import Logements from "../logements.json";

const Tags = () => {
  const { id } = useParams();
  const logement = Logements.find((p) => p.id === id);

  const tag = logement.tags.map((tag, index) => ({
    id: `tag-${index}`,
    tag: tag,
  }));

  return (
    <div className="tags">
      {tag.map((tag) => (
        <p id={tag.id} key={tag.id}>
          {tag.tag}
        </p>
      ))}
    </div>
  );
};

export default Tags;
