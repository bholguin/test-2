import { FC } from "react"
import { Grid, Card, CardActions, CardContent, Button, Backdrop, CircularProgress } from "@mui/material";
import './css/index.css'
import Detail from "../Detail";
import { useActors } from "./hook"
import ImgStartWars from '../../assets/img/Star_Wars_Yellow_Logo.svg.png'
import { IPerson } from "../../models/person";

const Actors: FC = (): JSX.Element => {
    const { data, goToDetail, loading } = useActors()

    return (
        <div className="App-persons">
            <Backdrop open={loading} >
                <CircularProgress color="inherit" />
            </Backdrop>
            <div className="header">
                <div className="Content-title">
                    <img src={ImgStartWars} alt='' className="Style-img" />
                    <h2>
                        Actors
                    </h2>
                </div>
            </div>

            <div className="main">
                <Grid
                    container
                    spacing={2}
                    alignItems="center"
                    justifyContent="center" >
                    {
                        data && data.allPeople.people.map((item: IPerson, index: number) => {
                            return (
                                <Grid item key={index}>
                                    <Card sx={{ minWidth: 345 }}>
                                        <CardContent className="character-name">
                                            {item.name}
                                        </CardContent>
                                        <CardActions>
                                            <Button onClick={() => goToDetail(item.id)}>View more</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </div>

            <Detail />
        </div>

    )
}


export default Actors