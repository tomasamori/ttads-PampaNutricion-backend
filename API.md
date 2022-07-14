# ttads-PampaNutricion-backend API Documentation

## Sucursal

```
GET /api/v1/sucursal    Deuelve la lista de todas las sucursales
```

```
GET /api/v1/sucursal/<id>   Devuelve una sucursal por ID.
```

```
POST /api/v1/sucursal/  Crea una nueva sucursal

{
    "nombre": String,
    "direccion": String,
    "localidad": {type: Schema.Types.ObjectId, ref: 'Localidad'}
    
        {
            "codPostal": String,
            "nombre": String
        }
}
```

```
PUT /api/v1/sucursal/<id>   Actualiza una sucursal por ID

{
    "nombre": String,
    "direccion": String,
    "localidad": {type: Schema.Types.ObjectId, ref: 'Localidad'}
    
        {
            "codPostal": String,
            "nombre": String
        }
}
```

```
DELETE /api/v1/sucursal/<id>    Elimina una sucursal por ID
```