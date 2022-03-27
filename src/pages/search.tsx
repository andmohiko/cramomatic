import type { NextPage } from "next";
import Link from "next/link";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { useMediaQuery } from "~/hooks/useMediaQuery";

const Search: NextPage = () => {
  const { isNarrow } = useMediaQuery();

  return (
    <div>
      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          backgroundColor: "white",
          py: 1,
        }}
      >
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          fullWidth
        />
      </Box>
      <ImageList cols={isNarrow ? 2 : 3}>
        {new Array(30).fill(null).map((item, index) => (
          // TODO: カードのidに置き換え
          <Link href={`/cards/${index}`} key={index} passHref>
            <ImageListItem style={{ cursor: "pointer" }}>
              <img src="/card.jpg" alt="" />
              <ImageListItemBar
                position="below"
                title="カード名"
                subtitle="最高値"
              />
            </ImageListItem>
          </Link>
        ))}
      </ImageList>
    </div>
  );
};

export default Search;
