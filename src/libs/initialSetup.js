import Rol from '../models/Rol'

export const createRoles = async() => {

    try
    {
        const count = await Rol.estimatedDocumentCount();

        if(count > 0) return;

        const values = await Promise.all([
            new Rol({name: 'cliente'}).save(),
            new Rol({name: 'empleado'}).save(),
            new Rol({name: 'admin'}).save()
        ]);

        console.log(values);

    }
    catch (error)
    {
        console.error(error);
    }

}