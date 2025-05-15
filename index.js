// index.js
let config = {
  contextName: "Context7",
  umbralSimilitud: 0.78,
  maxResultados: 3,
  env: "dev",
  apiKey: "7be76a92-a458-4c95-8866-d4e652960a67",
};

const API_URL = "https://resolvequestion-xfl3xnyijq-uc.a.run.app";
/**
 * Configura los valores del SDK
 * @param {Object} opciones - Opciones para configurar el SDK
 */
function configurarSDK(opciones = {}) {
  config = { ...config, ...opciones };
}

/**
 * Resuelve una pregunta usando el servicio configurado
 * @param {Object} opciones - Opciones para la pregunta
 * @param {string} opciones.pregunta - La pregunta que se quiere resolver
 * @param {string} [opciones.contextName] - Nombre del contexto (opcional)
 * @param {number} [opciones.umbralSimilitud] - Umbral de similitud (opcional)
 * @param {number} [opciones.maxResultados] - Máximo de resultados (opcional)
 */
async function resolveQuestion({
  pregunta,
  contextName = config.contextName,
  umbralSimilitud = config.umbralSimilitud,
  maxResultados = config.maxResultados,
} = {}) {
  const body = {
    pregunta,
    contextName,
    umbralSimilitud,
    maxResultados,
  };

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      env: config.env,
      key: config.apiKey,
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Error ${response.status}: ${error}`);
  }

  return await response.json();
}

module.exports = {
  configurarSDK,
  resolveQuestion,
};