# ttads-PampaNutricion-backend API v1 Documentation

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
GET /api/v1/cliente/<idUsuario>   Devuelve un cliente por ID propio (getOne)
```

```
POST /api/v1/cliente  Crea un nuevo cliente (newCliente)
```

```
PUT /api/v1/cliente/<idUsuario>   Actualiza un cliente por ID propio (updateCliente)
```

```
DELETE /api/v1/cliente/<idUsuario>    Elimina un cliente por ID propio (deleteCliente)
```

## Empleado

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
    "legajo": String,
    "nombre": String,
    "apellido": String
}

Campos generados por Mongo

{
    "_id": String
    "__v": Number (debe ser incrementado en 1 con cada petición PUT)
}
```

### Peticiones

```
GET /api/v1/empleado    Devuelve la lista de todos los empleados (getAll)
```

```
GET /api/v1/empleado/<idUsuario>   Devuelve un empleado por ID propio (getOne)
```

```
POST /api/v1/empleado  Crea un nuevo empleado (newEmpleado)
```

```
PUT /api/v1/empleado/<idUsuario>   Actualiza un empleado por ID propio (updateEmpleado)
```

```
DELETE /api/v1/empleado/<idUsuario>    Elimina un empleado por ID propio (deleteEmpleado)
```

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
GET /api/v1/localidad/<idLocalidad>   Devuelve una localidad por ID propio (getOne)
```

```
POST /api/v1/localidad  Crea una nueva localidad (newLocalidad)
```

```
PUT /api/v1/localidad/<idLocalidad>   Actualiza una localidad por ID propio (updateLocalidad)
```

```
DELETE /api/v1/localidad/<idLocalidad>    Elimina una localidad por ID propio (deleteLocalidad)
```

## Producto

### Estructura
```
{
    "idProducto": String,
    "marca": String,
    "nombre": String,
    "descripcion": String,
    "peso": Number,
    "tipoMascota": {type: Schema.Types.ObjectId, ref: 'TipoMascota'}
}

Campos generados por Mongo

{
    "_id": String
    "__v": Number (debe ser incrementado en 1 con cada petición PUT)
}
```

### Peticiones

```
GET /api/v1/producto    Devuelve la lista de todos los productos (getAll)
```

```
GET /api/v1/producto/<idProducto>   Devuelve un producto por ID propio (getOne)
```

```
POST /api/v1/producto  Crea un nuevo producto (newProducto)
```

```
PUT /api/v1/producto/<idProducto>   Actualiza un producto por ID propio (updateProducto)
```

```
DELETE /api/v1/producto/<idProducto>    Elimina un producto por ID propio (deleteProducto)
```

## Proveedor

### Estructura
```
{
    "idProveedor": String,
    "cuil": String,
    "cuit": String,
    "razonSocial": String,
    "email": String,
    "telefono": String
}

Campos generados por Mongo

{
    "_id": String
    "__v": Number (debe ser incrementado en 1 con cada petición PUT)
}
```

### Peticiones

```
GET /api/v1/proveedor    Devuelve la lista de todos los proveedores (getAll)
```

```
GET /api/v1/proveedor/<idProveedor>   Devuelve un proveedor por ID propio (getOne)
```

```
POST /api/v1/proveedor  Crea un nuevo proveedor (newProveedor)
```

```
PUT /api/v1/proveedor/<idProveedor>   Actualiza un proveedor por ID propio (updateProveedor)
```

```
DELETE /api/v1/proveedor/<idProveedor>    Elimina un proveedor por ID propio (deleteProveedor)
```

## Sucursal

### Estructura
```
{
    "idSucursal": String,
    "nombre": String,
    "direccion": String,
    "localidad": {type: Schema.Types.ObjectId, ref: 'Localidad'}
}

Campos generados por Mongo

{
    "_id": String
    "__v": Number (debe ser incrementado en 1 con cada petición PUT)
}
```

### Peticiones

```
GET /api/v1/sucursal    Devuelve la lista de todas las sucursales (getAll)
```

```
GET /api/v1/sucursal/<idSucursal>   Devuelve una sucursal por ID propio (getOne)
```

```
POST /api/v1/sucursal  Crea una nueva sucursal (newSucursal)
```

```
PUT /api/v1/sucursal/<idSucursal>   Actualiza una sucursal por ID propio (updateSucursal)
```

```
DELETE /api/v1/sucursal/<idSucursal>    Elimina una sucursal por ID propio (deleteSucursal)
```

## TipoMascota

### Estructura
```
{
    "idTipoMascota": String,
    "nombre": String,
    "tamanoRaza": String,
    "edad": String
}

Campos generados por Mongo

{
    "_id": String
    "__v": Number (debe ser incrementado en 1 con cada petición PUT)
}
```

### Peticiones

```
GET /api/v1/tipomascota    Devuelve la lista de todos los tipos de mascota (getAll)
```

```
GET /api/v1/tipomascota/<idTipoMascota>   Devuelve un tipo de mascota por ID propio (getOne)
```

```
POST /api/v1/tipomascota  Crea un nuevo tipo de mascota (newTipoMascota)
```

```
PUT /api/v1/tipomascota/<idTipoMascota>   Actualiza un tipo de mascota por ID propio (updateTipoMascota)
```

```
DELETE /api/v1/tipomascota/<idTipoMascota>    Elimina un tipo de mascota por ID propio (deleteTipoMascota)
```