//?Esto iria en el main tsx
function App() {
  return <Card body={"Hola Mundo"} />;
}

interface CardProps {
  body: String;
}
function Card(props: CardProps) {
  const { body } = props;
  return (
    <>
      {" "}
      <div className="card-body">{body}</div>
    </>
  );
}

//?Esta es una forma de Pasar Props
//?Para definir el tipo de valor de las props si usamos TS se usa una interfaz

//!----Multiples Props----

interface CardBodyProps {
  title: String;
  text?: String; //Propiedad Opcional
}

export function CardBody(props: CardBodyProps) {
  const { title, text } = props;
  return (
    <>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
      <a href="#" className="btn btn-primary">
        Go somewhere
      </a>
    </>
  );
}
//?Para declarar una propiedad opcional se usa ?: