import React, { useState, useCallback, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

// https://openlibrary.org/api/books?format=json&jscmd=data

interface IHero {
  name: string;
  short_name: string;
  icon_url: {
    "92x93": string;
  };
}

interface IResponse {
  error?: string;
  result?: IHero[];
}

const fetchHeroes = async () => {
  const heroDataRes = await fetch(`https://hotsapi.net/api/v1/heroes`);
  const getHeroData = await heroDataRes.json();
  console.log("getHeroData: ", getHeroData);
  return { result: getHeroData, error: undefined };
};

const useStyles = makeStyles((theme: Theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const Heroes = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState();
  const [heroes, setHeroes] = useState<IHero[]>([]);
  const classes = useStyles();

  const fetchData = useCallback(async () => {
    setLoading(true);
    const fetchedHeroes = await fetchHeroes();
    if (fetchedHeroes.result) {
      setHeroes(fetchedHeroes.result);
    } else {
      setErrors(fetchedHeroes.error);
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) {
    return <div>Loading Heroes...</div>;
  }

  const fixName = (name: string): string => {
    if (name === "chogall") {
      return "cho";
    }
    if (name === "lostvikings") {
      return "thelostvikings";
    }
    return name;
  };

  return (
    <Container>
      <h2>Heroes</h2>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="flex-start"
        spacing={5}
      >
        {heroes.map((hero: IHero) => {
          return (
            <Grid item key={hero.name}>
              <Tooltip title={hero.name}>
                <Avatar
                  alt={hero.name}
                  src={`https://www.heroesprofile.com/includes/images/heroes/${fixName(
                    hero.short_name,
                  )}.png`}
                  className={classes.large}
                />
              </Tooltip>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Heroes;
