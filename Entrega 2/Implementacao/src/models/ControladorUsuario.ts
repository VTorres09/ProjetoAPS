import UsuarioCollection from './collections/UsuarioCollection';
import User from './entities/Usuario';


class ControladorUsuario {
    cadastrarUsuario(cpf: string, senha: string) {

        const usuario = new User(cpf, senha);
        const usuarioCollection = new UsuarioCollection();
        usuarioCollection.storeUser(usuario)

    }

    async autenticarUsuario(cpf: string, senha: string) {

        const usuario = new User(cpf, senha);
        const usuarioCollection = new UsuarioCollection();
        const res = await usuarioCollection.authenticateUser(usuario);
        return res === "found user" // success or not XD

    }


}

module.exports = ControladorUsuario