import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function UmlItem (props) {
    const width = props.width;
    const height = props.height;
    const image = props.image;
    const title = props.title;
    const description = props.description;

    return (
        <Card sx={{ maxWidth: width, height: height }}>
          <CardMedia component="img"
                     alt="green iguana"
                     height={image.height}
                     width={image.width}
                     image={image.src}/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            {description.map((l,i)=> {
                return (
                    <Typography key={i}
                                variant="body2"
                                color="text.secondary">
                      {l}
                    </Typography>
                );
            })}
          </CardContent>
          {/* <CardActions> */}
          {/*   <Button size="small">Share</Button> */}
          {/*   <Button size="small">Learn More</Button> */}
          {/* </CardActions> */}
        </Card>
    );
}
