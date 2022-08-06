import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    movie: {
        padding: '10px',
    },
    links: {
        alignItems: 'center',
        fontWeight: 'bolder',
        textDecoration: 'none',
        [theme.breakpoints.up('xs')]: {
            display: 'flex',
            flexDirection: 'column',
        },
        '&:hover': {
            cursor: 'pointer',
        },
    },
    image: {
        borderRadius: '20px',
        height: '300px',
        marginBottom: '10px',
        transition: '0.3s',
        '&:hover': {
            transform: 'scale(1.05)',
        },
    },
    title: {
        color: theme.palette.text.primary,
        textOverflow: 'ellipsis',
        width: '200px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        marginTop: '10px',
        marginBottom: 0,
        textAlign: 'center',
    },
}));