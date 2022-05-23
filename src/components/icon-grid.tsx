import * as React from "react";
import styled from 'styled-components';

interface IconGridProps {
  name: string
  keyword: string
  color: string
  angle: string
}

function IconGrid({ name, keyword, color, angle }: IconGridProps) {

//   const icon = "phone"
//   console.log(name);

  return (
    <Button
        key={name}
        onClick={() => parent.postMessage({ pluginMessage: { type: name } }, '*')}
    >
        <img  src={`https://3dicons.sgp1.cdn.digitaloceanspaces.com/v1/${angle}/${color}/${name}-${angle}-${color}.png`} width="100%" alt={keyword}/>
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
