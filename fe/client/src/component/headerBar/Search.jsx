import React, { useEffect, useState } from 'react'
import { InputBase, Box, styled, List, ListItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

// importing react-redux hooks 
import { useDispatch, useSelector } from 'react-redux'

// mporting reducer function to get backend APi
import { getBooks } from '../../redux/actions/bookAction'

const SearchContainer = styled(Box)(({ theme }) => ({
    padding: '0.2rem',
    height: '1.7rem',
    width: '37%',
    border: '1px solid grey',
    borderRadius: '5px',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        width: 'auto',
        height: '1.2rem',
    }

}))


const InputBaseBox = styled(InputBase)`
  width : 100%;
`


const SearchIconWrapper = styled(Box)(({ theme }) => ({
    color: 'grey',
    padding: '0.2rem',
    [theme.breakpoints.down('md')]: {
        padding: '0',
        fontSize: '0.8rem'
    }
}))

const ListWrapper = styled(List)(({ theme }) => ({
    backgroundColor: 'white',
    position: 'absolute',
    color: 'black',
    marginTop: '2rem',
    width: '36%',
    fontWeight : '800' ,
    lineHeight: '0.7rem',
    [theme.breakpoints.down('md')]: {
        width: 'auto',
    }
}))

const ListItemStyle = styled(Link)(({theme})=> ({
    textDecoration : 'none' ,
    color : 'black'
}))


const Search = () => {

    const [searchText, setSearcText] = useState();
    const dispatch = useDispatch();
    const { books } = useSelector(state => state.getBooks)

    useEffect(() => {
        dispatch(getBooks())
    }, [dispatch])

    const getSearchText = (e) => {
        setSearcText(e)
    }


    return (

        <>



            <SearchContainer>

                {
                    searchText &&
                    <ListWrapper >
                        {
                            books?.data?.filter(bookname => bookname?.title.toLowerCase().includes(searchText.toLowerCase())).map(bookname => (
                                <ListItem key={bookname._id} >

                                    <ListItemStyle to={`/detail/${bookname._id}`} onClick={() => setSearcText('')}  >
                                        {bookname?.title}
                                    </ListItemStyle>

                                </ListItem>
                            ))
                        }

                    </ListWrapper >
                }


                <InputBaseBox
                    placeholder='Search for products, Brands and more'
                    onChange={(e) => getSearchText(e.target.value)}
                   
                />



                <SearchIconWrapper >
                    <SearchIcon />
                </SearchIconWrapper>


            </SearchContainer>


        </>

    )
}

export default Search
