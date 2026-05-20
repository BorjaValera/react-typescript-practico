export type Usuario = {
  id: number
  name: string
  email: string
}

type InfoUsuarioProps = {
  data: Usuario | null
}

export function InfoUsuario({ data }: InfoUsuarioProps) {
  if (!data) {
    return <p>Sin datos de usuario</p>
  }

  return (
    <article>
      <h2>{data.name}</h2>
      <p>{data.email}</p>
    </article>
  )
}
