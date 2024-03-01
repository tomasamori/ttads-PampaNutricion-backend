import Rol from '../models/Rol'
import Usuario from '../models/Usuario'

export const createRoles = async() => {

    try
    {
        const countRoles = await Rol.estimatedDocumentCount();

        if(countRoles <= 0) {
            const valuesRoles = await Promise.all([
                new Rol({name: 'cliente'}).save(),
                new Rol({name: 'empleado'}).save(),
                new Rol({name: 'admin'}).save()
            ]);

            console.log(valuesRoles);
        }

        const countUsuarios = await Usuario.estimatedDocumentCount();

        if(countUsuarios > 0) return;

        const foundedRol = await Rol.findOne({name: 'admin'});
        const rolAdmin = foundedRol._id;

        const valuesUsuarios = await new Usuario({usuario: 'admin', password: await Usuario.encryptPassword('admin'), email: 'admin@gmail.com', rol: rolAdmin}).save();

        console.log(valuesUsuarios);

    }
    catch (error)
    {
        console.error(error);
    }

}