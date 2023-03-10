import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useSelector, useDispatch } from 'react-redux';
import { pagenumberCount } from '../Redux/action';

export default function PaginationComp() {
  const data = useSelector(state => state.userdata);
  const dispatch = useDispatch()

  function handlePagination (event) {
    dispatch(pagenumberCount(event.currentTarget.textContent))
    }
  return (
    <Stack spacing={2}>
      <Pagination count={Math.floor(data[0]?.total_count/30)} shape="rounded" onChange={handlePagination} />
    </Stack>
  );
}
