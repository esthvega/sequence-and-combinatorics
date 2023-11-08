# sequence-and-combinatorics

Servicio protegido con JWT token para obtener subsecuencias a partir de una secuencia.

**USO**

`docker-compose build`

`docker-compose up`

**ENDPOINTS AND RESPONSES**

| Method | URL         | Protected |
| ------ | ----------- | --------- |
| Get   | /health | false |


**Response:**

- `ok` - **`boolean`** - Indica si todo ha ido bien.


| Method | URL         | Protected |
| ------ | ----------- | --------- |
| Get   | /get-token | false |

**Response**

- `ok` - **`boolean`** - Indica si todo ha ido bien
- `token` - **`string`** - JWT token
- `error` - **`string`** - Error si algo falló


| Method | URL         | Protected |
| ------ | ----------- | --------- |
| Get   | /check-token | true |

**Response**

- `ok` - **`boolean`** - Indica si el token es válido
- `error` - **`string`** - Error si algo falló


| Method | URL         | Protected |
| ------ | ----------- | --------- |
| Get   | /list-sequences | true |

**Response**

- `ok` - **`boolean`** - Indica si el proceso fue bien
- `data` - **`{ sequence: number[]; subsequence: number[][]; }[]`** - Array con la información de las subsecuencias y la secuencia original
- `error` - **`string`** - Error si algo falló



| Method | URL         | Protected |
| ------ | ----------- | --------- |
| Post   | /create-subsequences | true |

| Type | Params    | Values   | Required |
| ---- | --------- | -------- | -------- |
| JSON | `sequence`   | `Array of numbers` | True     |

**Response**

- `ok` - **`boolean`** - Indica si el proceso fue bien
- `subsequence` - **`number[][]`** - Subsecuencia generada
- `error` - **`string | ZodError`** - Error si algo falló

typeof [ZodError](https://www.npmjs.com/package/zod#error-handling)


| Method | URL         | Protected |
| ------ | ----------- | --------- |
| Post   | /get-sequence | true |

| Type | Params    | Values   | Required |
| ---- | --------- | -------- | -------- |
| JSON | `subsequence`   | `Array of Array of numbers` | True     |

**Response**

- `ok` - **`boolean`** - Indica si el proceso fue bien
- `sequence` - **`number[]`** - Secuencia original a partir de una subsecuencia
- `error` - **`string|ZodError`** - Error si algo falló

typeof [ZodError](https://www.npmjs.com/package/zod#error-handling)