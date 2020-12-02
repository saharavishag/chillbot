import React, { useEffect } from "react";
import Header from "./Header";
import { Container } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import CardForm from "./CardForm/CardForm";
import useStyles from "./style";
import clsx from "clsx";
import "./SendSongPage.scss";

const SendSongPage = () => {
  const query = new URLSearchParams(useLocation().search)
  const classes = useStyles();

  useEffect(() => {
    document.body.id = "sendSongBody";

    return () => {
      document.body.id = "";
    };
  }, []);

  return (
    <div className="sendSongFrame">
      <Container
        className={clsx(classes.container, "sendSongHugContainer")}
        maxWidth="xl"
      >
        <Header />
        <div className={classes.contentContainer}>
          <CardForm email={query.get("email")} />
        </div>
      </Container>
    </div>
  );
};

export default SendSongPage;