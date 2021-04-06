// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { Pagination } from '@material-ui/lab';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       marginTop: theme.spacing(2),
//       justifyContent:"center",
//       display:'flex',
//       marginBottom: '1em'
//     },
//   },
// }));

// export default function pagePagination ({ pokemonPerPage, currentPage, totalPokemon, handlePageChange }) {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Pagination 
//       count={Math.round(totalPokemon/pokemonPerPage)} 
//       page={currentPage}
//       defaultPage={1} 
//       siblingCount={3} 
//       boundaryCount={2} 
//       color="secondary"  
//       onChange={handlePageChange} 
//       />
//     </div>
//   );
// }