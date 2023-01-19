import { useEffect, useState } from "react";
import "./styles.css";

const AnotherReadMoreComponent = ({ text, cutOff }) => {
  const [showReadMore, setShowReadMore] = useState(true);
  const [displayMore, setDisplayMore] = useState(true);
  const getText = () => {
    if (text?.length <= cutOff) {
      setDisplayMore(false);
      return text;
    } else {
      return text.slice(0, cutOff);
    }
  };
  useEffect(() => {
    getText();
  }, []);
  return (
    <div>
      <p
        style={{
          textAlign: "justify"
        }}
      >
        {showReadMore ? getText() : text}

        {displayMore && (
          <span
            style={{
              display: "inline",

              cursor: "pointer"
            }}
            onClick={() => {
              setShowReadMore(!showReadMore);
            }}
          >
            {showReadMore ? "...more" : "...less"}
          </span>
        )}
      </p>
    </div>
  );
};
export default function App() {
  return (
    <div className="App">
      <AnotherReadMoreComponent
        text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
        cutOff="100"
      />

      <AnotherReadMoreComponent
        text="Sed ut perspiciatis unde omnis iste natus "
        cutOff="10"
      />
    </div>
  );
}
