// icon-grid.tsx
// Create view and setup canvas/image reference to add on figma canvas
// 22-May-2022
import * as React from "react";
import styled from "styled-components";

interface IconGridProps {
  name: string;
  keyword: string;
  color: string;
  angle: string;
  imgRef: any;
  canRef: any;
}

// Get image and return image data to add on figma
const getImageData = (image, canvasRef) => {
  const canvas = canvasRef.current;
  canvas.width = image.width;
  canvas.height = image.height;
  const context = canvas.getContext("2d");
  context.drawImage(image, 0, 0);
  return {
    imageData: context.getImageData(0, 0, image.width, image.height),
    canvas,
    context,
  };
};

// Load image from the view
const loadImage = async (src, imgRef) =>
  new Promise((resolve, reject) => {
    const img = imgRef.current;
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = (...args) => reject(args);
    img.src = src + "?new-icon";
  });

// Encode image to object to upload on figma
async function encodeFigma(canvas, ctx, imageData) {
  ctx.putImageData(imageData, 0, 0);

  return await new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      const reader = new FileReader();
      //@ts-ignore
      reader.onload = () => resolve(new Uint8Array(reader.result));
      reader.onerror = () => reject(new Error("Could not read from blob"));
      reader.readAsArrayBuffer(blob);
    });
  });
}

function IconGrid({
  name,
  keyword,
  color,
  angle,
  imgRef,
  canRef,
}: IconGridProps) {
  // const canvasRef = React.useRef(null);
  // const imgRef = React.useRef(null);
  const prefix = `https://3dicons.sgp1.cdn.digitaloceanspaces.com/v1/${angle}/${color}/`; // For added on figma 800px
  const imageKitPrefix = `https://ik.imagekit.io/3dicons/tr:w-100,h-100/v1/${angle}/${color}/`; // For view optimized 100px
  const sufix = `-${angle}-${color}.png?new_icon`;
  const figName = `${name}-${angle}-${color}`;
  const setBg = async () => {
    const image = await loadImage(`${prefix}${name}${sufix}`, imgRef);

    const { imageData, canvas, context } = getImageData(image, canRef);

    const newBytes = await encodeFigma(canvas, context, imageData);

    parent.postMessage(
      {
        pluginMessage: {
          type: "set-bg",
          icoName: figName,
          data: { newBytes },
        },
      },
      "*"
    );
  };

  return (
    <Button
      key={name}
      onClick={() => {
        setBg();
      }}
    >
      <img src={`${prefix}${name}${sufix}`} width="100%" alt={name} />
    </Button>
  );
}

export default IconGrid;

// Styling button as image
const Button = styled.button`
  margin: 0;
  padding: 8px;
  background: var(--figma-color-bg-secondary);
  border: 0;
  box-shadow: none;
  border-radius: 8px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: 0;
  :hover {
    border: 1px solid var(--figma-color-border-brand);
  }
`;
