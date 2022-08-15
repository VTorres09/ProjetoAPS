class User {
    constructor(
      cpf: string,
      senha: string,
    ) {
        this.cpf = cpf;
        this.senha = senha;
    }
  
    cpf: string;
    senha: string;
  }
  
  export default User;