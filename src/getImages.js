const imagesContext = require.context("./img/", false, /\.(jpeg)$/);

export const images = imagesContext.keys().map(imagesContext);
