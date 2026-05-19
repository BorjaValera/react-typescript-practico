export function emailValido(email: string): boolean {
  const texto = email.trim();

  if (texto.length < 6) {
    return false;
  }

  const arroba = texto.indexOf("@");
  const arrobaWellPlaced = arroba > 0;
  let checkNameLength = false;
  if (arrobaWellPlaced) {
    checkNameLength = texto.split("@")[0].length > 2;
  }

  const punto = texto.lastIndexOf(".");

  return (
    arrobaWellPlaced &&
    checkNameLength &&
    punto > arroba + 1 &&
    punto < texto.length - 1
  );
}
