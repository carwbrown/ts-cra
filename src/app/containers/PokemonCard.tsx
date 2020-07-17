import React, { useState, useEffect } from "react";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: 275,
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }),
);

interface IMon {
  sprites?: {
    front_default?: string;
  };
  name: string;
}

const PokemonCard = ({ name }: any) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState<any>(null);
  const [mon, setMon] = useState<IMon>();

  useEffect(() => {
    setLoading(true);
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((data) => data.json())
      .then((result) => {
        setMon(result);
        setLoading(false);
        setErrors(null);
      })
      .catch((err) => {
        console.warn(err);
        setLoading(false);
        setErrors(`error fetching ${name}'s information!`);
        setMon(undefined);
      });
  }, [name]);

  if (loading) {
    return <div>Loading mon...</div>;
  }
  console.log("mon: ", mon);

  //mon.sprites.front_default
  console.log("mon: ", mon);
  if (errors) {
    return (
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <CardHeader title={name} />
          <Typography variant="body2" component="p">
            {errors}
          </Typography>
        </CardContent>
      </Card>
    );
  }
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <CardHeader
          avatar={
            <Avatar
              alt={name}
              src={mon?.sprites?.front_default ?? undefined}
              className={classes.large}
            />
          }
          title={name}
        />
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default PokemonCard;
