import * as React from "react";
import styled from 'styled-components';

interface IconGridProps {
  name: string
  keyword: string
  color: string
  angle: string
  imgRef: any
  canRef: any
}
const getImageData = (image, canvasRef) => {
  console.log('get imagedata',image);
  const canvas = canvasRef.current;
  canvas.width = image.width;
  canvas.height = image.height;
  const context = canvas.getContext("2d");
  context.drawImage(image, 0, 0);
  console.log(canvas);
  
  return {
    imageData: context.getImageData(0, 0, image.width, image.height),
    canvas,
    context,
  };
};

const loadImage = async (src, imgRef) => 
  new Promise((resolve, reject) => {
    console.log('inside promise');
    console.log(src);
    
    const img = imgRef.current;
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = (...args) => reject(args);
    img.src = src + "?new-icon";
});


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

function IconGrid({ name, keyword, color, angle, imgRef, canRef }: IconGridProps) {
  // const canvasRef = React.useRef(null);
  // const imgRef = React.useRef(null);
  const prefix = `https://3dicons.sgp1.cdn.digitaloceanspaces.com/v1/${angle}/${color}/`;
  const sufix = `-${angle}-${color}.png?new_icon`;

  const setBg = async (dropPosition = null, windowSize = null) => {
    console.log('inside setBG');
    
    const image = await loadImage(
      `${prefix}${name}${sufix}`,
      imgRef
    );
    
    
    
    const { imageData, canvas, context } = getImageData(
      image,
      canRef
    );

    console.log(imageData, canRef);
    
    const newBytes = await encodeFigma(canvas, context, imageData);

    parent.postMessage(
      {
        pluginMessage: {
          type: "set-bg",
          data: { newBytes, dropPosition, windowSize },
        },
      },
      "*"
    );
  };
  const onCreate = () => {
    const count = name;
    // parent.postMessage(
    //   { pluginMessage: { type: "create-rectangles", count } },
    //   "*"
    // );
    parent.postMessage({ pluginMessage: 'insideicon grid here' }, '*')
    console.log(count);
  };


  return (
    <Button
        key={name}
        // onClick={() => parent.postMessage({ pluginMessage: { type: name } }, '*')}
        onClick={() => {
          setBg();
          // console.log(imgRef);
          
        }}
    >
        <img  
          src={`${prefix}${name}${sufix}`} 
          width="100%" 
          alt={name}
          crossOrigin={"anonymous"}
        />
    </Button>
  )
}

export default IconGrid



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
    :hover{
        border: 1px solid var(--figma-color-border-brand);
    }
`
