import { Link } from "react-router-dom";

import Styled from "./style";

export default function Navbar() {
  return (
    <Styled>
      <Link className="link" to="/">
        <li>Acceuil</li>
      </Link>
      <Link className="link" to="/experience">
        <li>Parcour</li>
      </Link>
      <Link className="link" to="/project">
        <li>Projet</li>
      </Link>
      <Link className="link" to="/contact">
        <li>Contact</li>
      </Link>
    </Styled>
  );
}
