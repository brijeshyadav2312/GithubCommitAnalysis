import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Profile from './Profile';
import { useSelector,useDispatch } from 'react-redux';
import ChartData from './ChartData';
import { addData } from '../Redux/action';

export default function DetailCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);

  };

  const data = useSelector(state => state.userdata);
  const pnum = useSelector(state => state.pageNum);

  const dispatch = useDispatch();

  async function getData(){
    const res = await fetch(`https://api.github.com/search/repositories?q=created:>2022-10-22&sort=stars&order=desc&page=${pnum}`);
    const data = await res.json();
    dispatch(addData(data))
  }

  React.useEffect(() =>{
    getData();
  },[pnum])

  return (
    <>
      {(data[0]?.items)?(
        (data[0]?.items)?.map((elem,idx) =>{
          return(
          <Accordion key={idx} expanded={expanded === idx} onChange={handleChange(idx)}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              sx={{backgroundColor:'#F8F8F8'}}
            >
            <Profile item = {elem}/>
            </AccordionSummary>
            <AccordionDetails>
                {expanded === idx?<ChartData item = {elem}/>:<></>}
            </AccordionDetails>
          </Accordion>
          )
        })):("loading")
      }
      </>
  );
}