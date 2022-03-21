import type { NextPage } from "next";
import TextField from "@mui/material/TextField";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const Search: NextPage = () => {
  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        fullWidth
      />
      <ImageList cols={3}>
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