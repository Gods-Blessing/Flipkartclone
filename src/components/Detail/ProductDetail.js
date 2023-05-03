
import {Box, TableCell, TableRow, Typography, styled, Table, TableBody} from "@mui/material"
import LocalOfferIcon from '@mui/icons-material/LocalOffer';


const SmallText = styled(Box)`
    font-size: 14px;
    & > p{
        font-size: 14px;
        margin-top: 10px;
    }
`;

const StyledBadge = styled(LocalOfferIcon)`
    margin-right: 10px;
    color: #00CC00;
    font-size: 15px;
    vertical-align: middle;
`;

const ColumnText = styled(TableRow)`
    font-size: 14px;
    vertical-align: baseline;

    & > td{
        font-size: 14px;
        margin-top: 10px;
        border: none;
    }
`;

function ProductDetail({product}){
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const date = new Date(new Date().getTime() + (5*24*60*60*1000 ));

    return(
        <>
            <Typography>{product.title.longTitle}</Typography>
                        <Typography style={{marginTop:5, color:'#878787', fontSize:14}}>
                            82 ratings and 7 reviews
                            <Box component='span'>
                                <img src={fassured} style={{width:77, marginLeft:20}} alt="product"/>    
                            </Box>    
                        </Typography>
                        <Typography>
                            <Box component="span" style={{fontSize:28}}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                            <Box component="span" style={{color:'#878787'}}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                            <Box component="span" style={{color:'#388E3C'}}>{product.price.discount}</Box>
                        </Typography>

            <Typography>Available Offers</Typography>
            <SmallText>
                <Typography><StyledBadge/>Get extra 20% off upto Rs.50 on 1 Item(s) T&C</Typography>
                <Typography><StyledBadge/>Get extra 20% off upto Rs.50 on 1 Item(s) T&C</Typography>
                <Typography><StyledBadge/>Get extra 20% off upto Rs.50 on 1 Item(s) T&C</Typography>
            </SmallText>
            <Table>
                <TableBody>
                    <ColumnText>
                        <TableCell style={{color:'#878787'}}>Delivery</TableCell>
                        <TableCell style={{fontWeight:600}}>Delivery By:{date.toDateString()} | Rs.40</TableCell>        
                    </ColumnText> 
                    <ColumnText>
                        <TableCell style={{color:'#878787'}}>Warranty</TableCell>
                        <TableCell>No Warranty</TableCell>        
                    </ColumnText> 
                    <ColumnText>
                        <TableCell style={{color:'#878787'}}>Seller</TableCell>
                        <TableCell>
                            <Box component='span'  style={{color:'#2874f0'}}>
                                SuperCommNet
                            </Box>    
                            <Typography>GST invoice available</Typography>
                            <Typography>14 days return Guarantee</Typography>
                        </TableCell>        
                    </ColumnText> 
                    <ColumnText>
                        <TableCell colSpan={2}>
                            <img src={adURL} style={{width:390}} alt="add"/>    
                        </TableCell>       
                    </ColumnText> 
                    <ColumnText>
                        <TableCell style={{color:'#878787'}}>Description</TableCell>
                        <TableCell>{product.description}</TableCell>        
                    </ColumnText>
                </TableBody>
            </Table>
        </>
    )
}

export default ProductDetail;