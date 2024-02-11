import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Grid } from '@mui/material';
import { TableData } from './TableData';

const TableItem = ({ data }) => {
    return (
        <TableRow key={data.id}>
            <TableCell style={{ borderBottom: 0 }} component="th" scope="row">
                <p className='text-xs text-[#f5f6f7]'>{data.date}</p>
            </TableCell>
            <TableCell style={{ borderBottom: 0 }} align="justify">
                <p className='text-xs text-[#f5f6f7]'>₹{data.amount}</p>
            </TableCell>
            <TableCell style={{ borderBottom: 0 }} align="justify">
                <p className='bg-[#403539] text-[#b87702] capitalize text-xs px-2 py-1 w-fit rounded-xl'>{data.status}</p>
            </TableCell>
            <TableCell style={{ borderBottom: 0 }} align="justify">
                <p className='text-xs text-[#f5f6f7] capitalize'>{data.contact}</p>
            </TableCell>
            <TableCell style={{ borderBottom: 0 }} align="justify">
                <p className='text-xs text-[#7f8396] capitalize'>{data.createdBy}</p>
            </TableCell>
            <TableCell style={{ borderBottom: 0 }} align="right">
                <p className='text-xs text-[#7f8396] capitalize'>--</p>
            </TableCell>
        </TableRow>
    );
};

const TableList = () => {
    return (
        <div className='px-8 pt-4 bg-[#080d29]'>
            <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table" style={{ background: 'none' }}>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ borderBottom: 0 }}>
                                <p className='text-xs text-[#f5f6f7] uppercase'>Created At</p>
                            </TableCell>
                            <TableCell style={{ borderBottom: 0 }} align="justify">
                                <p className='text-xs text-[#f5f6f7] uppercase'>Amount</p>
                            </TableCell>
                            <TableCell style={{ borderBottom: 0 }} align="justify">
                                <p className='text-xs text-[#f5f6f7] uppercase'>Status</p>
                            </TableCell>
                            <TableCell style={{ borderBottom: 0 }} align="justify">
                                <p className='text-xs text-[#f5f6f7] uppercase'>Contact</p>
                            </TableCell>
                            <TableCell style={{ borderBottom: 0 }} align="justify">
                                <p className='text-xs text-[#f5f6f7] uppercase'>Created by</p>
                            </TableCell>
                            <TableCell style={{ borderBottom: 0 }} align="right">
                                <p className='text-xs text-[#f5f6f7] uppercase'>UTR</p>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {TableData.map((data) => (
                            <TableItem key={data.id} data={data} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default TableList;
