import * as React from "react";
import theme from '../theme'
import styled from 'styled-components';
import {SearchIcon} from "../components/search-icon";
import IconGrid from "../components/icon-grid";
// import useSearch from "../components/use-search";
const { icons } = require("../data");
import Fuse from 'fuse.js'

// interface iconObj {
//     name: string;
//     keywords: string[];
// }

import {
    ClayIcon, 
    ColorIcon, 
    IsoIcon, 
    DynamicIcon,
    FrontIcon,
    GradientIcon,
    PremiumIcon
} from "../components/filter-icons";
// const { names } = require("../data");

declare function require(path: string): any;

const Home = (props) => {
    // const iconData = props;
    const [results, setResults] = React.useState(icons)
    const { name } = props;
    const [query, setQuery] = React.useState('')
    const fuse = new Fuse(icons, {
        threshold: 0.2,
        keys: ['name', 'keywords']
    })
    React.useEffect(() => {
        console.log(query.trim());
        
        if (query.trim()) {
            const searchData = fuse.search(query.trim());
            setResults(searchData.map(result => result.item));
        } else {
            setResults(Object.values(icons))
        }
    }, [query])
    
    // console.log(fuse.search(query.trim()));
    
    // results.map(( item ) => {
    //     console.log(item.name);
    // })
    return (
      <>
        <SearchBox>
            <SearchIcon 
                height="32px"
                width="32px"
                color={'var(--figma-color-text-secondary)'}
                className="searchicon"
            />
            <input 
                value={query}
                type="text"
                autoFocus={true}
                className="inputSearch"
                onChange={event => setQuery(event.target.value)}
                placeholder="Search from 1400+ icons" key={name} 
            />
            <FilterBox>
                <Select className="colorbtns">
                    <li>
                        <FilterButton className="active">
                            <ColorIcon
                                height="18px"
                                width="18px"
                                className="filtericon"
                            />
                        </FilterButton>
                    </li>
                    <li>
                        <FilterButton>
                            <GradientIcon 
                                height="18px"
                                width="18px"
                                className="filtericon"
                            />
                        </FilterButton>
                    </li>
                    <li>
                        <FilterButton >
                            <ClayIcon 
                                height="18px"
                                width="18px"
                                className="filtericon"
                            />
                        </FilterButton>
                    </li>
                    <li>
                        <FilterButton>
                            <PremiumIcon 
                                height="18px"
                                width="18px"
                                className="filtericon"
                            />
                        </FilterButton>
                    </li>
                </Select>
                <Select className="anglebtns">
                    <li>
                        <FilterButton className="active">
                            <DynamicIcon 
                                height="18px"
                                width="18px"
                                color={'var(--figma-color-text-secondary)'}
                                className="filtericon"
                            />
                        </FilterButton>
                    </li>
                    <li>
                        <FilterButton>
                            <FrontIcon 
                                height="18px"
                                width="18px"
                                color={'var(--figma-color-text-secondary)'}
                                className="filtericon"
                            />
                        </FilterButton>
                    </li>
                    <li>
                        <FilterButton>
                            <IsoIcon 
                                height="18px"
                                width="18px"
                                color={'var(--figma-color-text-secondary)'}
                                className="filtericon"
                            />
                        </FilterButton>
                    </li>
                </Select>
            </FilterBox>
        </SearchBox>
        
        <Grid>
            {results.map((icon) => (
                <IconGrid name={icon.name} keyword={icon} key={icon.name}/>
            ))}
        </Grid>
        <FooterWrapper>
            <FooterCredit>
                <div className="left-icon">
                    <a href="https://3dicons.co" target="_blank"><img  src="https://3dicons.co/3dicons.png" height="12px" alt={name}/></a>
                    <span>v1.0</span>
                </div>
                <div className="right-link">
                    by <a href="https://twitter.com/realvjy" target="_blank">@realvjy</a>
                </div>
            </FooterCredit>
        </FooterWrapper>
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

const Grid = styled.div`
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
    padding: 8px;
    justify-content: space-between;
`
const Select = styled.ul`
    display: grid;
    grid-gap: 2px;
    margin: 0;
    padding: 0;
    li{
        list-style: none;
        margin: 0;
        padding: 0;
    }
    &.colorbtns{
        grid-template-columns: repeat(4,1fr);
    }
    &.anglebtns{
        grid-template-columns: repeat(3,1fr);
    }
`
const FilterButton = styled.button`
    margin: 0;
    padding: 6px;
    border: 1px solid transparent;
    box-shadow: none;
    border-radius: 2px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: 0;
    background: var(--figma-color-bg);
    :hover{
        border: 1px solid var(--figma-color-border);
    }
    &.active{
        background: var(--figma-color-bg-secondary);
    }
`

const FooterWrapper = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
`

const FooterCredit = styled.div`
    display: flex;
    padding: 6px 8px;
    justify-content: space-between;
    align-items: center;
    bottom: 0;
    background: var(--figma-color-bg-hover);
    border-top: .5px solid var(--figma-color-border);
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
    .left-icon{
        span{
            color: var(--figma-color-icon-disabled);
            margin-left: 8px;
            font-size: var(--font-size-xsmall);
            font-weight: 600;
        }
    }
    .right-link{
        font-size: 12px;
        padding: 4px;
        border: 1px solid transparent;
        border-radius: var(--border-radius-med);
        display: inline-flex;
        align-items: center;
        color: var(--figma-color-icon-disabled);
        a{
            margin-left: 2px;
            font-weight: 600;;
            color: var(--figma-color-icon-disabled);
            :hover{
                opacity: 1;
            }
        }
        :hover{
            border: 1px solid var(--figma-color-border);
            color: var(--figma-color-icon-disabled);
            text-decoration: none;
        }
    }

`

