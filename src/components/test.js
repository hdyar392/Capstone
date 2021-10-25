import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { Grid } from '@material-ui/core';

import list from './fishDirectory.js'


//styles

import '../styles/fishDirectory.css'



const useStyles = makeStyles({

  gridContainer: {
    paddingLeft: "20px",
    paddingRight: "20px"
  },

  gridItem: {
    padding: "20px",
    borderColor: "color",
    minWidth: "400px",
    maxWidth: "400px",
    // boxShadow: '0 3px 5px 2px rgba(0, 255, 255, .6)'
  },

  card: {
    boxShadow: '0 4px 10px 10px rgba(0, 255, 255, .9)'
  },
  
})
  

export default function RecipeReviewCard() {
  
  const classes = useStyles();

  return (
    <Grid container className={classes.gridContainer} justify="center">

    {list.map(fish => (
    <Grid item xs={12} sm={6} md={4} lg={4} xl={3} className={classes.gridItem}>
    <Card className={classes.card}
    
    >
      <CardHeader 
        title={fish.Name}
      />
      <CardMedia
        component="img"
        height="345"
        width="345"
        image={fish.Image}
        alt="loading..."
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         Difficulty: {fish.Difficulty}<br></br>
         pH Level: {fish.pHLevel}<br></br>  
         SG: {fish.SG}<br></br>  
         Temperature: {fish.Temperature}<br></br>  
         Minimum Tank Size: {fish.MinimumTankSize}<br></br>  
         Reef Safe: {fish.ReefSafe}<br></br>  
         Diet: {fish.Diet}
        </Typography>
      </CardContent>
      
      <Stack direction="column" spacing={1}>
      <Button variant="contained" startIcon={<DeleteIcon />} color="secondary" size='large'>
        remove from tank
      </Button>
      <Button variant="contained" startIcon={<SendIcon />} color="success" size='large'>
        Add to tank
      </Button>
    </Stack>
        
    </Card>
    </Grid>
  ))}
  </Grid>
  );
}