import React from "react";
import test_quire from "../../img/test_quire.png";
import { Box, Button, Grommet } from 'grommet';

export default function Home() {
  return (
    <div>
      <Box align="center" style={{width: "100%", height:"15vh"}}>
        <img src={test_quire} alt={""} style={{ height: "100px", width: "600px" }} />
      </Box>
      <div style={{width: "100%", height:"70vh"}}>
        <iframe src="//slides.com/ronakray/t/embed" width="100%" height="100%" scrolling="no" frameBorder="0"
                webkitallowfullscreen mozallowfullscreen allowFullScreen></iframe>
      </div>

      <Box align="center">
        <br/>
        <Button label="Enter"><a href="/project"></a></Button>
      </Box>
    </div>
  );
}
