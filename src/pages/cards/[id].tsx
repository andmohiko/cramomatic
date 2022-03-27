import type { GetServerSideProps, NextPage } from "next";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

type CardsDetailProps = {
  id: string;
};

const CardsDetail: NextPage<CardsDetailProps> = ({ id }) => {
  return (
    <div>
      <Typography variant="h4" component="h1" align="center" sx={{ mb: 3 }}>
        id: {id} うっう
      </Typography>
      <img
        src="/card.jpg"
        alt=""
        width="100%"
        style={{ margin: "0 auto", display: "block", maxWidth: 300 }}
      />
      {new Array(10).fill(null).map((item, index) => (
        <List
          key={index}
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="" src="/avatar.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary={`No.${index + 1} はれつー`}
              secondary={
                <>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    2,500円
                  </Typography>
                </>
              }
            />
          </ListItem>
        </List>
      ))}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<CardsDetailProps> = async ({
  query,
}) => {
  const { id } = query;

  if (typeof id !== "string") {
    return { notFound: true };
  }

  return { props: { id } };
};

export default CardsDetail;
