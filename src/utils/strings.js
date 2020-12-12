// This is a helper for naming keyframes.
// JSS only generate className and not keyframe names.
//
// e.g: generateKeyFrameName('fadeIn'); => fadeIn-987391827391
export const generateKeyFrameName = name =>
  `${name}-${String(Math.random()).substring(2)}`;

// This is a helper for generating srcSet attribute.
export const generateImgSrcSetName = imgSetArr => {
  let generatedName = '';

  for(let imgSet of imgSetArr) {
    generatedName += `${imgSet.src} ${imgSet.size},`;

  }

  return generatedName.substring(0, generatedName.length - 1);
}