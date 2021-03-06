import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';

const useStyles = makeStyles({
    root: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
        backgroundColor: '#2d313a',
        zIndex: 100,
    }
})

const SimpleBottomNavigation = () => {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        if (value === 0) {
            navigate('/');
        } else if (value === 1) {
            navigate('/movies');
        } else if (value === 2) {
            navigate('/series');
        }
    }, [value, navigate])

    return (
        <BottomNavigation
            showLabels
            className={classes.root}
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
        >
            <BottomNavigationAction style={{ color: 'white' }} label='Trending' icon={<WhatshotIcon />} />
            <BottomNavigationAction style={{ color: 'white' }} label='Movies' icon={<MovieIcon />} />
            <BottomNavigationAction style={{ color: 'white' }} label='TV Series' icon={<TvIcon />} />
        </BottomNavigation>
    );
}

export default SimpleBottomNavigation;