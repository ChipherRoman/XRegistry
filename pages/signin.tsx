import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import IconButton, { IconButtonProps } from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import { FingerprintRounded, LoginOutlined } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import Layout from '../components/layout';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

interface FormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  password: HTMLInputElement;
  persistent: HTMLInputElement;
}
interface SignInFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

function ColorSchemeToggle({ onClick, ...props }: IconButtonProps) {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <IconButton size="sm" variant="plain" color="neutral" disabled />;
  }
  return (
    <IconButton
      id="toggle-mode"
      size="sm"
      variant="plain"
      color="neutral"
      aria-label="toggle light/dark mode"
      {...props}
      onClick={(event) => {
        if (mode === 'light') {
          setMode('dark');
        } else {
          setMode('light');
        }
        onClick?.(event);
      }}
    > {mode === 'light' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
    </IconButton>
  );
}

export default function IndexPage() {

  const { data: session } = useSession()
  const router = useRouter()

  return (
    <Layout>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100dvh',
          minWidth: '100%',
          px: 2,
        }}
      >
        <Box
          component="main"
          sx={{
            my: 'auto',
            py: 2,
            pb: 5,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            width: 350,
            maxWidth: '100%',
            mx: 'auto',
            borderRadius: 'sm'
          }}
        >
          <Box sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
            width: "100%"
          }}>
            <FingerprintRounded sx={{
              fontSize: 80,
            }} />
          </Box>
          <div>
            <Typography component="h1" fontSize="xl2" fontWeight="lg">
              Olá
            </Typography>
            <Typography level="body2" sx={{ my: 1, mb: 3 }}>
              Bem-vindo(a) de volta.
              Para entrar no sistema, faça o login com Google clicando abaixo.
            </Typography>
          </div>
          <ColorSchemeToggle />
          {session?.user ? (
            <Button
              variant="outlined"
              color="neutral"
              fullWidth
              startDecorator={<LoginOutlined />}
              onClick={(e) => {
                router.push("/")
              }}
            >
              Continuar com {session.user.name}
            </Button>
          ) : (
            <Button
              variant="outlined"
              color="neutral"
              fullWidth
              startDecorator={<LoginOutlined />}
              onClick={(e) => {
                e.preventDefault()
                signIn("google")
              }}
            >
              Entrar com Google
            </Button>
          )}
        </Box>
        <Box component="footer" sx={{ py: 3 }}>
          <Typography level="body3" textAlign="center">
            © Rynalde {new Date().getFullYear()}
          </Typography>
        </Box>
      </Box>
    </Layout>
  );
}