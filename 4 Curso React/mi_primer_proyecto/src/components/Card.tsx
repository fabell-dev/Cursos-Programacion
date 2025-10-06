import { Fragment } from "react/jsx-runtime";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

function Card(props: CardProps) {
  const { children } = props;
  return (
    <div
      className="card"
      style={{
        width: "350px",
      }}
    >
      <div className="card-body">{children}</div>
    </div>
  );
}

interface CardBodyProps {
  title: String;
  text?: String;
}

export function CardBody(props: CardBodyProps) {
  const { title, text } = props;
  return (
    <Fragment>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
      <a href="#" className="btn btn-primary">
        Go somewhere
      </a>
    </Fragment>
  );
}

export default Card;
