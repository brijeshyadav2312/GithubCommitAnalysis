import React from 'react'
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { FaRegStar } from 'react-icons/fa';
import { VscIssues } from 'react-icons/vsc';
import moment from 'moment';
import millify from "millify";

const Profile = ({item}) => {
  return (
    <Box sx={{ display: 'flex'}}>
        <CardMedia
                component="img"
                sx={{ width: 151, height:151 }}
                image={item.owner.avatar_url}
                alt="Live from space album cover"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column'}}>
                <CardContent sx={{ flex: '1 0 auto', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                    <Typography sx={{textAlign:'start'}} component="div" variant="h5">
                        {item.name}
                    </Typography>
                    <Typography sx={{textAlign:'start'}}  color="text.secondary" component="div">
                        {item.description}
                    </Typography>
                    <Box sx={{ display: 'flex', gap:'1rem', border:'none', alignItems:'center' }}>
                        <Box sx={{ p: 1, border: '1px solid grey', borderRadius:'5px', display:'flex',alignItems:'center',gap:'0.3rem' }}><FaRegStar/> {millify(item.stargazers_count)}<Typography>Stars</Typography></Box>
                        <Box sx={{ p: 1, border: '1px solid grey', borderRadius:'5px', display:'flex',alignItems:'center',gap:'0.3rem'}}><VscIssues/>{millify(item.open_issues_count)} <Typography>Issue</Typography></Box>
                        <Typography sx={{ display: 'flex', alignItems:'center'}}   color="text.secondary" component="div">Last Pushed &nbsp;<Typography variant="h6">{moment(item.updated_at).fromNow(true)} ago</Typography>&nbsp; by &nbsp;<Typography variant="h6">{item.owner.login}</Typography></Typography>
                    </Box>
                </CardContent>
            </Box>
    </Box>
  )
}

export default Profile
