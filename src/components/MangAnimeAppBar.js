import { useTheme } from '@mui/material'
import * as React from 'react'
import avatarProfile from '../assets/images/avatar_2.gif'
import { ReactComponent as LogoIconDark } from '../assets/images/logo_dark.svg'
import { ReactComponent as LogoIconLight } from '../assets/images/logo_light.svg'
import { LIGHT } from '../commons/constants'
import { ColorModeContext } from '../context/ColorModeContext'
import { useStorageColorTheme } from '../hooks/storageColorTheme'
import MUISwitchMode from '../MUISwitchMode'
import { getImageName } from '../utils/helper'
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuIcon,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography
} from './index'

const pages = ['News', 'Recommandations', 'Production', 'Product']
const settings = ['Profile', 'Log out', 'Log in']

const getPropsLogo = {
  mr: 1,
  my: 1,
  fontFamily: 'monospace',
  fontWeight: 700,
  letterSpacing: '.3rem',
  color: 'inherit',
  textDecoration: 'none',
}

const MangAnimeAppBar = () => {
  const theme = useTheme()
  const colorMode = React.useContext(ColorModeContext)
  const mode = theme.palette.mode
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <MUISwitchMode
            mode={mode}
            onClick={colorMode.toggleColorMode}
            checked={mode === LIGHT ? false : true}
            sx={{ mr: 4 }}
          />
          <AppBarLogo display={{ xs: 'none', md: 'flex' }} variant="body1" />
          <AppBarMenu />
          <AppBarProfile />
        </Toolbar>
      </Container>
    </AppBar>
  )
}

const AppBarLogo = ({ variant, display, flexGrow = 0.4 }) => {
  const { getColor } = useStorageColorTheme()
  const Logo = getColor() === LIGHT ? <LogoIconLight /> : <LogoIconDark />
  return (
    <Typography
      variant={variant}
      noWrap
      component="a"
      href="/"
      sx={{
        ...getPropsLogo,
        display: display,
        flexGrow: flexGrow,
        letterSpacing: '.3rem',
        fontWeight: 700,
        textDecoration: 'none',
      }}
    >
      {Logo}
    </Typography>
  )
}

const AppBarMenu = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(false)
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
      </Box>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        {pages.map((page) => (
          <MenuItem key={page} onClick={handleCloseNavMenu}>
            <Typography textAlign="center">{page}</Typography>
          </MenuItem>
        ))}
      </Menu>

      <AppBarLogo
        display={{ xs: 'flex', md: 'none' }}
        variant="h5"
        flexGrow={0.75}
      />
      <Typography
        variant={'h5'}
        noWrap
        component="a"
        href="/"
        sx={{
          ...getPropsLogo,
          display: { xs: 'flex', md: 'none' },
          flexGrow: 1.25,
          letterSpacing: '.9rem',
          fontWeight: 700,
          textDecoration: 'none',
        }}
      ></Typography>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {pages.map((page) => (
          <Button
            key={page}
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            {page}
          </Button>
        ))}
      </Box>
    </>
  )
}
const AppBarProfile = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(false)

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt={getImageName(avatarProfile)} src={avatarProfile} />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  )
}

export { MangAnimeAppBar }

