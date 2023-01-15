import Person4Icon from '@mui/icons-material/Person4';
import MoreIcon from '@mui/icons-material/More';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import MicNoneIcon from '@mui/icons-material/MicNone';
import SearchIcon from '@mui/icons-material/Search';

import {createSlice} from "@reduxjs/toolkit";


const initialState = [
    {id:1,icon:<MoreIcon/>},
    {id:2,icon:<PlayArrowIcon/>},
    {id:3,icon:<SearchIcon className="ml-3"/>},
    {id:4,icon:<MicNoneIcon/>},
    {id:5,icon:<MoreVertIcon/>},
    {id:6,icon:<Person4Icon/>},   
]




const NavSlice = createSlice({

    name:"navbar",
    initialState,
    reducers:{}
});


export const selectNavIcons = state=>state.navbar;

export default NavSlice.reducer;