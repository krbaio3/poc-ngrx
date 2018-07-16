export class Todo {
  public id: number;
  public texto: string;
  public completado: boolean;

  constructor(texto: string) {
    this.texto = texto.charAt(0).toUpperCase() + texto.slice(1);
    this.completado = false;
    //simulamos un id de base de datos
    this.id = Math.random();
  }
}
