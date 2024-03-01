import "./stars.scss"
import { useState } from "react";
import "../../../public/scss/colors.scss";
import "../../../public/scss/responsive.scss";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: "#CF4B44",
    }
});

const labels: {[index: string]: string} = {
    1: "Muito Ruim",
    2: "Ruim",
    3: "Regular",
    4: "Bom",
    5: "Muito Bom",
}

export function Stars(){
    const [value, setValue] = useState<number | null>(0)
    const [hover, setHover] = useState(-1)
    
    
    return(
        <Box
            sx={{
                width:'100%',
                textAlign: 'center'
            }}
        >
           
            <StyledRating
                name="hover-feedback"
                value={value}
                precision={1}
                onChange={(event, newValue) => {
                    setValue(newValue)
                }}
                onChangeActive={(event, newHover) => {
                    setHover(newHover)
                }}
                icon={<FavoriteIcon fontSize="inherit" />}
                emptyIcon={<FavoriteBorderIcon className="star" fontSize="small" style={{ opacity: 0.9}} />}
            />
            {value != null && (
                <Box color={{color: "#CF4B44", fontSize:"0.7em"}}sx={{ ml:0}}>{labels[hover != -1 ? hover : value]}</Box>
            )}
        </Box>
    );
}