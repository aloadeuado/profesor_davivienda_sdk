# profesor_davivienda_sdk# Davivienda Teacher SDK

Este SDK permite integrar fácilmente la funcionalidad de consulta inteligente sobre contenidos previamente configurados mediante Spira. Es ideal para resolver preguntas específicas con base en un contexto preestablecido.

## 🚀 Instalación

Usa **npm** para instalar el SDK:

```bash
npm install davivienda-teacher-sdk
```

## ⚙️ Configuración

Antes de usar el SDK, debes configurarlo utilizando la función `configurarSDK`.

### Ejemplo:

```javascript
const { configurarSDK, resolveQuestion } = require('davivienda-teacher-sdk');

configurarSDK({
  contextName: "Context7",          // Nombre del contexto. Este valor debe mantenerse constante.
  umbralSimilitud: 0.78,            // Valor entre 0 y 1 que define el umbral mínimo de similitud entre la pregunta y los contenidos.
  maxResultados: 1,                 // Número máximo de resultados que deben superar el umbral de similitud.
  env: "dev",                       // Entorno de ejecución: 'dev', 'qa' o 'prd'.
  apiKey: "7be76a92-a458-4c95-8866-d4e652960a67", // Clave única proporcionada por Spira.
});
```

### Parámetros de configuración:

| Parámetro        | Tipo     | Descripción                                                                 |
|------------------|----------|-----------------------------------------------------------------------------|
| `contextName`     | `string` | Nombre del contexto. Siempre debe ser `"Context7"`.                         |
| `umbralSimilitud` | `number` | Umbral de similitud (entre 0 y 1). Controla cuán parecidos deben ser los contenidos para ser considerados relevantes. |
| `maxResultados`   | `number` | Cantidad máxima de contenidos relevantes que se deben retornar.            |
| `env`             | `string` | Entorno: `"dev"`, `"qa"` o `"prd"`. Apunta al ambiente correspondiente.     |
| `apiKey`          | `string` | Clave de acceso única proporcionada por Spira.                              |

## ❓ Uso

Una vez configurado, puedes usar `resolveQuestion` para enviar preguntas al modelo y obtener respuestas relevantes:

```javascript
async function run() {
  try {
    const respuesta = await resolveQuestion({
      pregunta: "¿Qué tipo de tela debo usar para bolsos resistentes?",
    });

    console.log("Respuesta:", JSON.stringify(respuesta, null, 2));
  } catch (err) {
    console.error("Error:", err.message);
  }
}

run();
```

## 🧪 Entornos soportados

- `dev`: Desarrollo
- `qa`: Calidad (testing)
- `prd`: Producción

## 🔐 Seguridad

La `apiKey` es confidencial. No la compartas ni la incluyas en repositorios públicos.

## 📞 Soporte

Para soporte técnico o solicitud de nuevas funcionalidades, por favor contacta al equipo de Spira.
