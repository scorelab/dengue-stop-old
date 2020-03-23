export default theme=>({
    dbWrapper:{
        display: 'flex',
        flexDirection: 'column',
        height: '83vh'
    },
    leftPortion:{
        display: 'flex',
        flexDirection: 'column',
        height: '85vh',
        [theme.breakpoints.up('lg')]:{
            maxWidth:'20%'
        }
    },
    middlePortion:{
        display: 'flex',
        flexDirection: 'column',
        height: '85vh',
    }
})