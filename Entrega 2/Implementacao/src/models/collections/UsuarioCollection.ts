const FabricaRepositorioBDRClass = require('../repositorio/FabricaRepositorioBDR')

import User from "../entities/Usuario";

class UsuarioCollection {
    fabricaBDR : typeof FabricaRepositorioBDRClass;
    userBDR: typeof UsuarioBDR;

  constructor() {
    this.fabricaBDR = new FabricaRepositorioBDRClass()
    this.userBDR = this.fabricaBDR.criarRepositorioUsuario()
  }

  storeUser( user:User ) {
    this.userBDR.storeUser(user);
  }

  async authenticateUser(user: User) {
    return await this.userBDR.authenticateUser(user)
  }

}

export default UsuarioCollection