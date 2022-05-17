import * as React from "react";
import theme from '../theme'
import styled from 'styled-components';
import {SearchIcon} from "../components/search-icon"

declare function require(path: string): any;

const Home = (props) => {
    const { name } = props;
    // const prefix = `https://handz.netlify.app/${color}/${type}/${color}-in-${type}`;
    return (
      <>
        <SearchBox>
            <SearchIcon 
                height="32px"
                width="32px"
                color={'var(--figma-color-text-secondary)'}
                className="searchicon"
            />
            <input type="search" placeholder="Search 1400+ icons" key={name} ></input>
            <FilterBox>
                <Select>
                    <li>W</li>
                    <li>C</li>
                    <li>G</li>
                    <li>P</li>
                </Select>
                <Select>
                    <li>D</li>
                    <li>I</li>
                    <li>F</li>
                </Select>
            </FilterBox>
        </SearchBox>
        
        <IconGrid>
            {['1', '2', '2', '4', '5','1', '2', '2', '1', '2', '2', '4', '5','1', '2', '2','4', '5', '1', '2', '2', '4', '5', '1', '2', '2', '4', '5', '1', '2', '2', '4', '5' , '1', '2', '2', '4', '5'].map(name => (
                <IconButton>
                    <img  src="https://3dicons.sgp1.cdn.digitaloceanspaces.com/v1/dynamic/color/figma-dynamic-color.png" width="100%" alt={name}/>
                </IconButton>
            ))}
        </IconGrid>
        <FooterCredit>
            <div className="left-icon">
                <a href="https://3dicons.co" target="_blank"><img  src="https://3dicons.co/3dicons.png" height="12px" alt={name}/></a>
            </div>
            <div className="right-link">
                <p>by <a href="https://3dicons.co" target="_blank">@realvjy</a></p>
            </div>
        </FooterCredit>
      </>
    );
  };
  
export default Home;


const SearchBox = styled.div`
  position: sticky;
  top: 0;
  border-bottom: 1px solid var(--figma-color-border);
  input{
    width: 100%;
    height: 40px;
    padding: 0 ${theme.space[4]} 0 36px;
    font-family: inherit;
    background-color: var(--figma-color-bg);
    color: var(--figma-color-text);
    border: 0;
    outline: 0;
    :focus{
        box-shadow: none;
    }
  }
`;

const IconGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 6px;
    padding: 8px;
`;

const FilterBox = styled.div`
    background-color: var(--figma-color-bg);
    color: var(--figma-color-text);
    border-top: 1px solid var(--figma-color-border);
    display: flex;
    padding: 12px 8px;
    justify-content: space-between;
`

const IconButton = styled.button`
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
        border: 1px solid var(--figma-color-border-danger);
    }
`

const FooterCredit = styled.div`
    display: flex;
    padding: 12px 8px;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    bottom: 0;
    background: var(--figma-color-bg-hover);
    border-top: 1px solid var(--figma-color-border);
    p{
        margin: 0;
        font-size: 14px;
        color: var(--figma-color-icon-secondary);
    }
    a{  
        font-weight: 800;
        color: var(--figma-color-icon-brand);
        text-decoration: none;
        opacity: .8;
    }
    .right-link{
        a{
            :hover{
                opacity: 1;
            }
        }
    }
`

const Select = styled.ul`
    display: flex;
    margin: 0;
    padding: 0;
    li{
        list-style: none;
        margin: 0;
        padding: 4px;
    }
`