import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './PostData.css'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
const PostData = (props) => {
    const posts=props.post
    const id=posts.id
    return (
        <div className="post-box">
            <Card className="card">
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {posts.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          <p>ID:- {posts.id}</p>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      
          <Link to={`/${id}`}><Button size="small" color="primary">Read Dateil</Button></Link>

        <Button size="small" color="primary">
          Commests
        </Button>
      </CardActions>
    </Card>


        </div>
    );
};

export default PostData;