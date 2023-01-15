
import HomeIcon from '@mui/icons-material/Home';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';


import WhatshotIcon from '@mui/icons-material/Whatshot';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MovieIcon from '@mui/icons-material/Movie';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SchoolIcon from '@mui/icons-material/School';
import DiamondIcon from '@mui/icons-material/Diamond';
import AddCircleIcon from '@mui/icons-material/AddCircle';



import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';


import SettingsIcon from '@mui/icons-material/Settings';
import FlagCircleIcon from '@mui/icons-material/FlagCircle';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import FeedbackIcon from '@mui/icons-material/Feedback';

import {createSlice} from "@reduxjs/toolkit";



const initialState = [
    {id:1,
     heading:"",   
     title:[{id:0, value:"Home"},{id:1,value:"Shorts"},
            {id:2,value:"Subscriptions"},{id:3,value:"Library"},
            {id:4,value:"History"},],
     icon:[{id:0,value:<HomeIcon/>},{id:1,value:<SlowMotionVideoIcon/>},
            {id:2,value:<SubscriptionsIcon/>},{id:3,value:<VideoLibraryIcon/>},
            {id:4,value:<HistoryIcon/>}],
     outerClassN:"flex gap-5 mx-6", 
     hrClassN:"",
       

    },
    {id:2,
     heading:"Explore",   
     title:[{id:0,value:"Trending"},{id:1,value:"Music"},
            {id:2,value:"Films"},{id:3,value:"Live"},
             {id:4,value:"Gaming"},{id:5,value:"News"},
             {id:6, value:"Sport"},{id:7, value:"Learning"},
             {id:8,value:"Fashion & beauty"},{id:9, value:"Browse channels"},],

     icon:[{id:0,value:<WhatshotIcon/>},{id:1,value:<MusicNoteIcon/>},
            {id:2,value:<MovieIcon/>},{id:3,value:<LiveTvIcon/>},
            {id:4,value:<SportsEsportsIcon/>},  
            {id:5,value:<NewspaperIcon/>},{id:6,value:<SportsSoccerIcon/>},
            {id:7,value:<SchoolIcon/>},{id:8,value:<DiamondIcon className=""/>},
            {id:9,value:<AddCircleIcon className=""/>}],
     outerClassN:"flex gap-5 mx-6",  
     hrClassN:"",      
    },
    {
        id:3,
        heading:"More from DoTube",
        title:[{id:0,value:"DoTube Premium"},{id:1,value:"DoTube Music"},
               {id:2,value:"DoTube Kids"},{id:3,value:"DoTubeTV"}],
        icon:[{id:0,value:<PlayArrowIcon/>},{id:1,value:<PlayCircleOutlineIcon/>},
              {id:2,value:<PlayCircleFilledIcon/>},{id:3,value:<SmartDisplayIcon/>}],  
        outerClassN:"flex gap-5 mx-6", 
        hrClassN:""          
    },
    {
        id:4,
        heading:"",
        title:[{id:0,value:"Settings"},{id:1,value:"Report history"},
                {id:2,value:"Help"},{id:3,value:"Send feedback"}],
        icon:[{id:0,value:<SettingsIcon/>},{id:1,value:<FlagCircleIcon/>},
              ,{id:2,value:<HelpOutlineIcon/>},{id:3,value:<FeedbackIcon/>}],
        outerClassN:"flex gap-5 mx-6",  
        hrClassN:""            
    }        
    

]




const LeftBarSlice = createSlice({

       name:"leftBar",
       initialState,
       reducers:{}

});

export const selectLeftBar = state => state.leftBar;

export default LeftBarSlice.reducer;
