"use client"
import React, {useState, useEffect} from 'react';
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {lightTheme, darkTheme} from '@/core/utils/theme';
import Link from "next/link";
import SvgLogo from "@/core/components/svgs/SvgLogo";
import {AppBar, Button, Stack} from "@mui/material";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import {LightMode} from "@mui/icons-material";
import ThemeToggler from "@/layouts/Header/CreateAccount";
import CreateAccount from "@/layouts/Header/CreateAccount";
import Searchbar from "@/layouts/Header/Searchbar";

const HeaderLayout = ({children}: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        setTheme(storedTheme || 'light');
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <Stack sx={{position : "fixed", width : "100%", padding : 2}} direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                <CssBaseline/>
                <Link href={'/'}>
                    <SvgLogo width={60} height={60}/>
                </Link>
                <Stack direction={'row'} spacing={1}>
                    <Button onClick={toggleTheme}>
                        {theme === "dark" ? <LightMode/> : <DarkModeIcon/>}
                    </Button>
                    <CreateAccount/>
                    <Searchbar/>
                </Stack>
            </Stack>
            {children}
        </ThemeProvider>
    );
};

export default HeaderLayout;
