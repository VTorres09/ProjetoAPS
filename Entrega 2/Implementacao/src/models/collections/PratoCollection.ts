import Prato from "../entities/Prato";
import PratoBDR from "../repositorio/PratoBDR";

class PratoCollection {
  pratoBDR: PratoBDR;
  constructor() {
    this.pratoBDR = new PratoBDR();
  }

  storePrato(
    prato: Prato
  ) {
    this.pratoBDR.inserirPrato(prato);
  }

  async listPratos() {
    return await this.pratoBDR.listarPratos();
  }
}

export default PratoCollection