import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./Navbar.css"
import { Box } from "@mui/material";
import useLocalStorage from "react-use-localstorage"; //Para guardar dados não sensíveis do usuário.
import { useNavigate } from "react-router-dom";

function Navbar() {
    const [token, setToken] = useLocalStorage('token');
    let navigate = useNavigate();

    function goLogout() {
        setToken('')
        alert('Usuário deslogado')
        navigate('/login')
    }

    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense" >
                    <Box className='cursor' >
                        <Typography variant="h5" color="inherit">
                            Eric Lima
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Link to="/home" className="text-decoration-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    home
                                </Typography>
                            </Box>
                        </Link>

                        <Link to="/posts" className="text-decoration-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    postagens
                                </Typography>
                            </Box>
                        </Link>

                        <Link to="/temas" className="text-decoration-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    temas
                                </Typography>
                            </Box>
                        </Link>

                        <Link to="/formularioTema" className="text-decoration-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    cadastrar tema
                                </Typography>
                            </Box>
                        </Link>

                        <Box mx={1} style={{ cursor: 'pointer', color: "white" }} className='cursor' onClick= {goLogout}>
                            <Typography variant="h6" color="inherit">
                                logout
                            </Typography>
                        </Box>
                    </Box>

                </Toolbar>

            </AppBar>
        </>
    )
}
export default Navbar;