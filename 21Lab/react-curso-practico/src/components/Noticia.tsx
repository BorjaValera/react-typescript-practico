export type NoticiaData = {
  id: string;
  titulo: string;
  contenido: string;
  fecha: string;
};

type NoticiaProps = {
  noticia: NoticiaData;
};

export function NoticiaFull({noticia} : NoticiaProps) {
    return (
    <article
      style={{ border: "1px solid #ccc", margin: "1rem 0", padding: "1rem" }}
    >
      <h2>{noticia.titulo}</h2>
      <p>{noticia.fecha}</p>
      <p>{noticia.contenido}</p>
    </article>
  );
    
}

export function Noticia({ noticia: { titulo, contenido } }: NoticiaProps) {
  return (
    <article
      style={{ border: "1px solid #ccc", margin: "1rem 0", padding: "1rem" }}
    >
      <h2>{titulo}</h2>
      <p>{contenido}</p>
    </article>
  );
}

export function NoticiaReducida({ noticia: { titulo } }: NoticiaProps) {
  return (
    <article
      style={{ border: "1px solid #ccc", margin: "1rem 0", padding: "1rem" }}
    >
      <h2>{titulo}</h2>
    </article>
  );
}
