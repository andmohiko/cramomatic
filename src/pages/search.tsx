import type { NextPage } from "next";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const Search: NextPage = () => {
  return (
    <div>
      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          backgroundColor: "white",
          p: 1,
        }}
      >
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          fullWidth
        />
      </Box>
      <ImageList cols={3} rowHeight={250}>
        {new Array(30).fill(null).map((item, index) => (
          <ImageListItem key={index}>
            <img src={`https://picsum.photos/300/300`} alt="" />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default Search;
