import React, { useState, useEffect } from "react";

import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const FruitCounter = () => {
  const [countTomato, setCountTomato] = useState<number>(0);
  const [countApple, setCountApple] = useState<number>(0);

  const appleWorker: Worker = new Worker("./workers/appleCount.js");

  useEffect(() => {
    appleWorker.onmessage = ($event: MessageEvent) => {
      if ($event && $event.data) {
        setCountApple($event.data);
      }
    };
    return () => {
      appleWorker.terminate();
    };
  }, [appleWorker]);

  const incApple = () => {
    appleWorker.postMessage({ msg: "incApple", countApple: countApple });
  };

  return (
    <Container>
      <Grid container direction="row">
        <Grid item>
          <Button
            variant="contained"
            onClick={() => setCountTomato(countTomato + 1)}
            color="primary"
          >
            Tomato {countTomato}
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            onClick={() => incApple()}
            color="secondary"
          >
            Apple {countApple}
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FruitCounter;
