# ttads-PampaNutricion-backend API Documentation

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
GET /api/v1/localidad    Devuelve la lista de todas las localidades
```

```
GET /api/v1/localidad/<_id>   Devuelve una localidad por ID (generada por Mongo)
```

```
POST /api/v1/localidad/  Crea una nueva localidad
```

```
PUT /api/v1/localidad/<_id>   Actualiza una localidad por ID (generada por Mongo)
```

```
DELETE /api/v1/localidad/<_id>    Elimina una localidad por ID (generada por Mongo)
```