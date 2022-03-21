import type { NextPage } from "next";
import Image from "next/image";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TwitterIcon from "@mui/icons-material/Twitter";

const Home: NextPage = () => {
  return (
    <div>
      <Image src="/eyecatch.jpg" alt="" width={600} height={300} />
      <Typography variant="h2" component="h1">
        ポケカ買取価格比較
      </Typography>
      <Grid container direction="column" alignItems="center" sx={{ py: 5 }}>
        <Button variant="contained">
          <TwitterIcon sx={{ mr: 2 }} />
          Twitterでログイン
        </Button>
      </Grid>
    </div>
  );
};

export default Home;
