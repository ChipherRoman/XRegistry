import * as React from "react";
import Avatar from "@mui/joy/Avatar";
import List from "@mui/joy/List";
import ListDivider from "@mui/joy/ListDivider";
import ListItem from "@mui/joy/ListItem";
import ListItemContent from "@mui/joy/ListItemContent";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListItemButton from "@mui/joy/ListItemButton";
import Typography from "@mui/joy/Typography";
import Sheet, { sheetClasses } from "@mui/joy/Sheet";
import Switch, { switchClasses } from "@mui/joy/Switch";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRightRounded";
import Flight from "@mui/icons-material/Flight";
import Wifi from "@mui/icons-material/Wifi";
import Bluetooth from "@mui/icons-material/Bluetooth";
import Podcasts from "@mui/icons-material/Podcasts";
import Layout from "../components/layout";
import { useSession } from "next-auth/react";
import {
  CrisisAlertRounded,
  MonetizationOnRounded,
  PeopleAltRounded,
  Person,
  Settings,
  TimelineRounded,
} from "@mui/icons-material";
import { ButtonGroup, Tooltip } from "@mui/joy";
import Button from "@mui/joy/Button";
import IconButton from "@mui/joy/IconButton";
import Box from "@mui/joy/Box";

export default function Index() {
  const { data: session } = useSession();
  return (
    <Layout>
      <Sheet
        variant="soft"
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          p: 2,
          height: "100%",
        }}
      >
        <List
          aria-labelledby="ios-example-demo"
          sx={(theme) => ({
            "& ul": {
              "--List-gap": "0px",
              bgcolor: "background.surface",
              '& > li:first-child > [role="button"]': {
                borderTopRightRadius: "var(--List-radius)",
                borderTopLeftRadius: "var(--List-radius)",
              },
              '& > li:last-child > [role="button"]': {
                borderBottomRightRadius: "var(--List-radius)",
                borderBottomLeftRadius: "var(--List-radius)",
              },
            },
            "--List-radius": "8px",
            "--List-gap": "1rem",
            "--ListDivider-gap": "0px",
            "--ListItem-paddingY": "0.5rem",
            // override global variant tokens
            "--joy-palette-neutral-plainHoverBg": "rgba(0 0 0 / 0.08)",
            "--joy-palette-neutral-plainActiveBg": "rgba(0 0 0 / 0.12)",
            [theme.getColorSchemeSelector("light")]: {
              "--joy-palette-divider": "rgba(0 0 0 / 0.08)",
            },
            [theme.getColorSchemeSelector("dark")]: {
              "--joy-palette-neutral-plainHoverBg": "rgba(255 255 255 / 0.1)",
              "--joy-palette-neutral-plainActiveBg": "rgba(255 255 255 / 0.16)",
            },
          })}
        >
          <ListItem nested>
            <List
              aria-label="Personal info"
              sx={{ "--ListItemDecorator-size": "72px" }}
            >
              <ListItem>
                <ListItemDecorator>
                  <Avatar
                    size="lg"
                    src={session?.user?.image ?? ""}
                    sx={{ "--Avatar-size": "60px" }}
                  ></Avatar>
                </ListItemDecorator>
                <div>
                  <Typography fontSize="xl">{session?.user?.name}</Typography>
                  <Typography fontSize="xs">Administrador</Typography>
                </div>
              </ListItem>
              <ListDivider inset="startContent" />
            </List>
          </ListItem>
          <ListItem nested>
            <ListItem
              sx={{
                bgcolor: "background.surface",
                mb: 1,
                borderRadius: "var(--List-radius)",
              }}
            >
              <ListItemButton
                aria-describedby="apple-tv-description"
                sx={{ borderRadius: "var(--List-radius)" }}
              >
                <ListItemDecorator>
                  <MonetizationOnRounded />
                </ListItemDecorator>
                R$ 337.50
              </ListItemButton>
            </ListItem>
          </ListItem>
          <ListItem nested>
            <List
              aria-label="Network"
              sx={{
                [`& .${sheetClasses.root}`]: {
                  p: 0.5,
                  lineHeight: 0,
                  borderRadius: "sm",
                },
              }}
            >
              <ListItem>
                <ListItemDecorator>
                  <Sheet variant="solid" color="warning">
                    <CrisisAlertRounded />
                  </Sheet>
                </ListItemDecorator>
                <ListItemContent htmlFor="airplane-mode" component="label">
                  Notificação de pagamento automática
                </ListItemContent>
                <Switch
                  id="airplane-mode"
                  size="lg"
                  color="success"
                  sx={(theme) => ({
                    "--Switch-thumbShadow": "0 3px 7px 0 rgba(0 0 0 / 0.12)",
                    "--Switch-thumbSize": "27px",
                    "--Switch-trackWidth": "51px",
                    "--Switch-trackHeight": "31px",
                    "--Switch-trackBackground":
                      theme.vars.palette.background.level3,
                    [`& .${switchClasses.thumb}`]: {
                      transition: "width 0.2s, left 0.2s",
                    },
                    "&:hover": {
                      "--Switch-trackBackground":
                        theme.vars.palette.background.level3,
                    },
                    "&:active": {
                      "--Switch-thumbWidth": "32px",
                    },
                    [`&.${switchClasses.checked}`]: {
                      "--Switch-trackBackground": "rgb(48 209 88)",
                      "&:hover": {
                        "--Switch-trackBackground": "rgb(48 209 88)",
                      },
                    },
                  })}
                />
              </ListItem>
              <ListDivider inset="startContent" />
              <ListItem>
                <ListItemButton>
                  <ListItemDecorator>
                    <Sheet variant="solid" color="primary">
                      <PeopleAltRounded />
                    </Sheet>
                  </ListItemDecorator>
                  <ListItemContent>Clientes</ListItemContent>
                  <Typography textColor="text.tertiary">Ver</Typography>

                  <KeyboardArrowRight
                    /*@ts-ignore*/
                    fontSize="xl3"
                    sx={{ color: "text.tertiary" }}
                  />
                </ListItemButton>
              </ListItem>
              <ListDivider inset="startContent" />
              <ListItem>
                <ListItemButton>
                  <ListItemDecorator>
                    <Sheet variant="solid" color="primary">
                      <TimelineRounded />
                    </Sheet>
                  </ListItemDecorator>
                  <ListItemContent>Histórico</ListItemContent>
                  <Typography textColor="text.tertiary">
                    Ver outros meses
                  </Typography>
                  <KeyboardArrowRight
                    /*@ts-ignore*/
                    fontSize="xl3"
                    sx={{ color: "text.tertiary" }}
                  />
                </ListItemButton>
              </ListItem>
              <ListDivider inset="startContent" />
            </List>
          </ListItem>
        </List>
        <Box>
          <Button>Novo Pagamento em Lote</Button>
        </Box>
      </Sheet>
    </Layout>
  );
}
