import React, { useState, useEffect } from "react";
import {InputBase, Box, List, ListItem} from "@mui/material"
import styled from "@emotion/styled";
import SearchIcon from '@mui/icons-material/Search';

import {useSelector, useDispatch} from 'react-redux';
import { fetchProducts } from "../../redux/reducers/reducer";
import { Link } from "react-router-dom";


const SearchContainer = styled(Box)`
    background-color: #fff;
    width: 38%;
    border-radius:2px;
    margin-left: 10px;
    display: flex;
`;

const InputSearchBase = styled(InputBase)`
    width: 100%;
    margin-left: 10px;
    font-size: unset;
`;

const SearchIconWrapper = styled(Box)`
    color: blue;
    padding-right: 5px;
    display: flex;
    align-items: center;
`;

const Listwrapper = styled(List)`
    position:absolute;
    background-color:#FFFFFF;
    color:black;
    margin-top: 34px;
`;


function Search(){
    const dispatch = useDispatch();
    const product = useSelector(state => state.product)


    const [text, setText] = useState('');

    const getText = (text)=>{
        setText(text);
    }

    useEffect(()=>{
        dispatch(fetchProducts());
    }, [dispatch])

    return(
        <SearchContainer>
            <InputSearchBase placeholder="Search for Products, brands adn more"
                onChange={(e)=>getText(e.target.value)}
                value={text}
            />
            <SearchIconWrapper>
                <SearchIcon/>
            </SearchIconWrapper>
            {
                text &&
                <Listwrapper>
                    {
                        product.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map((product)=>(
                            <ListItem>
                                <Link to={`/detail/${product.id}`} onClick={()=>setText('')} style={{textDecoration:'none'}}>
                                    {product.title.longTitle}                                
                                </Link>
                            </ListItem>
                        ))
                    }
                </Listwrapper>
            }
        </SearchContainer>
    )
}

export default Search;