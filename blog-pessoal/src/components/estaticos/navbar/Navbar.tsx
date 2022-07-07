import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./Navbar.css"
import { Box } from "@mui/material";

function Navbar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense" className='container'>
                    <Box className='cursor' >
                        <Typography variant="h5" color="inherit">
                            Blog Pessoal
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Início
                            </Typography>
                        </Box>

                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Postagens
                            </Typography>
                        </Box>

                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Temas
                            </Typography>
                        </Box>

                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Cadastrar Tema
                            </Typography>
                        </Box>

                        <Link to='/login' className='text-decoration-none'>
                            <Box mx={1} style={{cursor: 'pointer', color: "white"}} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Sair
                                </Typography>
                            </Box>
                        </Link>

                    </Box>

                </Toolbar>

            </AppBar>
        </>
    )
}
export default Navbar;