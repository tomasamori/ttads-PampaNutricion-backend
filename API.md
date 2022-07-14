# ttads-PampaNutricion-backend API Documentation

## Cliente

### Estructura
```
{
    "idUsuario": String (autogenerado, no debe ser enviado por el usuario)
    "usuario": String,
    "password": String,
    "cuil": String,
    "cuit": String,
    "email": String,
    "fechaNacimiento": Date,
    "direccion": String,
    "telefono": String,
    "razonSocial": String
}

Campos generados por Mongo

{
    "_id": String
    "__v": Number (debe ser incrementado en 1 con cada petición PUT)
}
```

### Peticiones

```
GET /api/v1/cliente    Devuelve la lista de todos los clientes (getAll)
```

```
GET /api/v1/cliente/<_id>   Devuelve un cliente por ID (generado por Mongo - getOne)
```

```
POST /api/v1/cliente  Crea un nuevo cliente (newCliente)
```

```
PUT /api/v1/cliente/<_id>   Actualiza un cliente por ID (generado por Mongo - updateCliente)
```

```
DELETE /api/v1/cliente/<_id>    Elimina un cliente por ID (generado por Mongo - deleteCliente)
```

## Empleado

## Localidad

### Estructura
```
{
    "idLocalidad": String (autogenerado, no debe ser enviado por el usuario)
    "codPostal": String,
    "nombre": String
}

Campos generados por Mongo

{
    "_id": String
    "__v": Number (debe ser incrementado en 1 con cada petición PUT)
}
```

### Peticiones

```
GET /api/v1/localidad    Devuelve la lista de todas las localidades (getAll)
```

```
GET /api/v1/localidad/<_id>   Devuelve una localidad por ID (generado por Mongo - getOne)
```

```
POST /api/v1/localidad  Crea una nueva localidad (newLocalidad)
```

```
PUT /api/v1/localidad/<_id>   Actualiza una localidad por ID (generado por Mongo - updateLocalidad)
```

```
DELETE /api/v1/localidad/<_id>    Elimina una localidad por ID (generado por Mongo - deleteLocalidad)
```

## Producto

## Proveedor

## Sucursal

## TipoMascota