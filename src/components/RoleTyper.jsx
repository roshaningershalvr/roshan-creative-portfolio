import { useEffect, useState } from "react";
import { roles } from "../data/content.js";

export default function RoleTyper({ calm }) {
  const [text, setText] = useState(roles[0]);

  useEffect(() => {
    if (calm) { setText(roles[0]); return; }
    let ri = 0, ci = roles[0].length, dir = -1, wait = 0;
    const id = setInterval(() => {
      if (wait > 0) { wait--; return; }
      const word = roles[ri];
      ci += dir;
      setText(word.slice(0, ci));
      if (dir === 1 && ci >= word.length) { dir = -1; wait = 26; }
      else if (dir === -1 && ci <= 0) { dir = 1; ri = (ri + 1) % roles.length; }
    }, 55);
    return () => clearInterval(id);
  }, [calm]);

  return (
    <div className="role-line">
      <span className="p">root@Hacker:~$</span> <span>{text}</span>
      <span className="caret" />
    </div>
  );
}
