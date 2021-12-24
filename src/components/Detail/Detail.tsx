import { FC, forwardRef } from "react"
import {
    Dialog,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Slide,
    Divider,
    Card,
    CardContent,
    CardHeader,
    Grid,
    Chip,
    ListItem,
    ListItemAvatar,
    Avatar,
    List,
    ListItemText,
    Backdrop,
    CircularProgress
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import CloseIcon from '@mui/icons-material/Close';
import PublicSharpIcon from '@mui/icons-material/PublicSharp';
import CameraRollSharpIcon from '@mui/icons-material/CameraRollSharp';
import CakeIcon from '@mui/icons-material/Cake';
import TransgenderIcon from '@mui/icons-material/Transgender';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import FaceIcon from '@mui/icons-material/Face';
import StarsIcon from '@mui/icons-material/Stars';
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { useDetail } from "./hook";
import { IFilm } from "../../models/film";
import { IPlanet } from "../../models/planet";
import './css/index.css'

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});


const Detail: FC = (): JSX.Element => {
    dayjs.extend(localizedFormat)
    const { goBack, person, id, loading } = useDetail()

    return (
        <>

            <Dialog
                fullWidth
                maxWidth='md'
                open={!!id}
                onClose={goBack}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative', backgroundColor: '#282c34' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={goBack}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            {person?.name}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Backdrop open={loading} >
                    <CircularProgress color="inherit" />
                </Backdrop>
                <div className="Content-data">
                    <Grid container >
                        <Grid item xl={6} md={6} sm={12} xs={12}>
                            <List>
                                <ListItem>
                                    <ListItemAvatar >
                                        <Avatar className="Avatar-Color">
                                            <CakeIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Birth" secondary={person?.birthYear} />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar className="Avatar-Color">
                                            <TransgenderIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Gender" secondary={person?.gender} />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar className="Avatar-Color">
                                            <VisibilityIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Eye Color" secondary={person?.eyeColor} />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar className="Avatar-Color">
                                            <FaceRetouchingNaturalIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Hair Color" secondary={person?.hairColor} />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                            </List>
                        </Grid>
                        <Grid item xl={6} md={6} sm={12} xs={12}>
                            <List>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar className="Avatar-Color">
                                            <FaceIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Skin Color" secondary={person?.skinColor} />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar className="Avatar-Color">
                                            <PublicSharpIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Home World" secondary={person?.homeworld?.name} />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar className="Avatar-Color">
                                            <StarsIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Specie" secondary={person?.species?.name} />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                            </List>
                        </Grid>
                    </Grid>
                </div>


                <Divider>
                    <Typography variant="h5" className="Film-title">
                        {`Films`}
                    </Typography>
                </Divider>
                <Grid
                    container
                    spacing={2}
                    alignItems="center"
                    justifyContent="center"
                    className="Content-film-section"
                >
                    {
                        person?.filmConnection?.films.map((item: IFilm, index: number) => {
                            return (
                                <Grid item key={index} >
                                    <Card sx={{ maxWidth: 400 }}>
                                        <CardHeader avatar={<CameraRollSharpIcon />} title={item.title} subheader={dayjs(item.releaseDate.toString()).format('LL')} />
                                        <CardContent>
                                            <div className="Content-director-name">
                                                <Typography className="Director-name">Director:</Typography>
                                                <Typography >{item.director}</Typography>
                                            </div>
                                            <div>
                                                <Typography>Planets of film</Typography>
                                                {
                                                    item.planetConnection.planets.map((planet: IPlanet, index: number) => {
                                                        return (<Chip key={index} avatar={<PublicSharpIcon />} label={planet.name} className="Chip-style" />)
                                                    })
                                                }
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Dialog>
        </>
    )
}


export default Detail