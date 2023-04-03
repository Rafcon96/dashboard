import {
  Alert,
  Button,
  CircularProgress,
  FormControlLabel,
  Grid,
  Switch,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import IncDecCounter from "../IncDecCounter";
import PaperContainer from "../PaperContainer";
import PropTypes from "prop-types";
import { tradeData } from "../../data";

const resourse = {
  header: "Strategy",
  symbolTitle: "Symbol",
  symbolValue: "AUD/USD",
  sizeTitle: "Size",
  sizeValue: "4.00",
  winTitle: "Win",
  winValue: "56%",
  lossTitle: "Loss",
  lossValue: "44%",
  tradeLost: "Trades",
  tradeTitle: "Trades ",
  infoMsg: `It does not constitute and cannot replace investment advice.
     We therefore recommend that you contact your personal financial advisor.`,
  inputLabel: "Select Lot Size",
  actionBtnTitle: "Market Execution",
  actionBtnValue: "BUY",
  cancelBtn: "cancel",
  switchLabel: "The trade will be opened on my account",
  error: "Plase select a lot val bigger then 0!",
};
export default function DirectCopyAction({
  selectedTradeByID,
  setBoughtTradeByID,
  boughtTradeByID,
  setTradeBeenBought,
  handleCancel,
}) {
  const [lotSize, setLotSize] = React.useState(0);
  const [checked, setChecked] = React.useState(true);
  const [buying, setBuying] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [tradeDataItem, setTradeItemData] = React.useState({});
  const [error, setError] = React.useState(null);

  const handleBuy = () => {
    if (lotSize > 0) {
      setError(null);
      setBuying(true);
      setLoading(true);
      sendData(3000);
    } else {
      setError(resourse.error);
    }
  };
  const handleCancelBtn = () => {
    handleCancel();
  };
  const handleBuyAgain = () => {
    const newArr = [...boughtTradeByID];
    const index = newArr.indexOf(selectedTradeByID);
    newArr.splice(index, 1);
    setBoughtTradeByID(newArr);
  };
  const findPercent = (a, b) => Math.round((a / (a + b)) * 100);

  useEffect(() => {
    if (setTradeBeenBought) {
      setTradeBeenBought(boughtTradeByID.includes(selectedTradeByID));
    }
  }, [selectedTradeByID, boughtTradeByID, setTradeBeenBought]);

  useEffect(() => {
    if (selectedTradeByID) {
      setTradeItemData(
        tradeData.find((item) => item?.id === selectedTradeByID)
      );
    }
  }, [selectedTradeByID]);

  const sendData = (timeMs) => {
    setBoughtTradeByID((prev) => [...prev, selectedTradeByID]);
    setBuying(false);
    setTimeout(() => {
      setLoading(false);
    }, timeMs);
  };
  const successMsg = () => (
    <Grid container>
      <Grid item container justifyContent={"center"}>
        <Typography variant="SH1">Trade generated</Typography>
      </Grid>
      <Grid item container justifyContent={"center"}>
        <Typography variant="OP3">
          {`TicketID: #${tradeDataItem?.Ticket}`}
        </Typography>
      </Grid>
      <Grid item container justifyContent={"center"}>
        <Typography variant="OP3">{`Buy: ${lotSize} AUD/USD`}</Typography>
      </Grid>
      <Grid item container justifyContent={"center"}>
        <Typography variant="OP3">P/L $72.35</Typography>
      </Grid>
    </Grid>
  );

  return (
    <Grid container spacing={1}>
      <Grid
        container
        item
        sx={{ backgroundColor: "#F8F9FA", borderRadius: "5px", marginLeft: 1 }}
        spacing={1}
      >
        <Grid container item justifyContent={"center"}>
          <Typography variant="SH1">{`${tradeDataItem?.Strategy} ${resourse?.header}`}</Typography>
        </Grid>
        <Grid
          container
          item
          justifyContent={"space-between"}
          sx={{ borderBottom: "1px solid #E9ECEF" }}
        >
          <Grid item>
            <Typography variant="P3" sx={{ color: "#333333" }}>
              {resourse.symbolTitle}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="P3" sx={{ color: "#5C5C5C" }}>
              {tradeDataItem.Symbol}
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          item
          justifyContent={"space-between"}
          sx={{ borderBottom: "1px solid #E9ECEF" }}
        >
          <Grid item>
            <Typography variant="P3" sx={{ color: "#333333" }}>
              {resourse.sizeTitle}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="P3" sx={{ color: "#5C5C5C" }}>
              {tradeDataItem.size}
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          item
          justifyContent={"space-between"}
          sx={{ gap: "1px" }}
        >
          <Grid
            item
            sx={{
              width: (findPercent(
                tradeDataItem?.winTrade,
                tradeDataItem?.lostTrade 
              ) - 1 +"%"),
              backgroundColor: "#31A060",
              height: "5px",
            }}
          />
          <Grid
            item
            sx={{
              width:
                (100 -
                findPercent(tradeDataItem?.winTrade, tradeDataItem?.lostTrade) + "%"),
              backgroundColor: "#F53F3F",
              height: "5px",
            }}
          />
        </Grid>
        <Grid
          container
          item
          justifyContent={"space-between"}
          sx={{ gap: "1px" }}
        >
          <Grid item sx={{ color: "#31A060" }}>
            <Typography variant="SH3">
              {resourse.winTitle +
                " " +
                findPercent(tradeDataItem?.winTrade, tradeDataItem?.lostTrade) +
                "%"}
            </Typography>
          </Grid>
          <Grid item sx={{ color: "#F53F3F" }}>
            <Typography variant="SH3">
              {resourse.lossTitle +
                " " +
                (100 -
                  findPercent(
                    tradeDataItem?.winTrade,
                    tradeDataItem?.lostTrade
                  )) +
                "%"}
            </Typography>
          </Grid>
        </Grid>
        <Grid container item justifyContent={"space-between"}>
          <Grid item>
            <Typography variant="OP3">
              {resourse.tradeTitle + tradeDataItem?.winTrade}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="OP3">
              {resourse.tradeTitle + tradeDataItem?.lostTrade}
            </Typography>
          </Grid>
        </Grid>
        <Grid item container>
          <Alert
            severity="info"
            sx={{ width: "100%", margin: 2, fontSize: "14px" }}
          >
            {resourse.infoMsg}
          </Alert>
        </Grid>
      </Grid>
      {boughtTradeByID.includes(selectedTradeByID) ? null : (
        <>
          <Grid container item justifyContent={"center"}>
            <Typography variant="SH3">{resourse.inputLabel}</Typography>
          </Grid>
          <Grid container item>
            <IncDecCounter num={lotSize} setNum={setLotSize} />
          </Grid>
          <Grid container item>
            <FormControlLabel
              value="start"
              control={
                <Switch
                  checked={checked}
                  onChange={(e) => setChecked(!checked)}
                />
              }
              label={
                <Typography variant="P3">{resourse.switchLabel}</Typography>
              }
              labelPlacement="start"
            />
          </Grid>
        </>
      )}
      {!!error && !lotSize && (
        <Grid item container>
          <Alert sx={{ width: "100%", fontSize: "12px" }} severity="error">
            {resourse.error}
          </Alert>
        </Grid>
      )}

      {!buying && !boughtTradeByID.includes(selectedTradeByID) ? (
        <Grid container item justifyContent={"center"}>
          <Button fullWidth onClick={handleBuy}>
            <Grid container item sx={{ backgroundColor: "#E9ECEF" }}>
              <Grid item container justifyContent={"center"}>
                <Typography variant="P3" sx={{ color: "#858585" }}>
                  {resourse.actionBtnTitle}
                </Typography>
              </Grid>
              <Grid justifyContent={"center"} item container>
                <Typography variant="subtitle1">{`${resourse.actionBtnValue} ${lotSize}`}</Typography>
              </Grid>
            </Grid>
          </Button>
        </Grid>
      ) : loading ? (
        <Grid container>
          <PaperContainer
            styleProp={{
              backgroundColor: "#FFF6E6",
              padding: 4,
              marginLeft: 1,
              width: "100%",
            }}
          >
            <CircularProgress
              size={22}
              color="success"
              sx={{ marginRight: 2 }}
            />
            <span style={{ fontSize: "18px", marginLeft: 3 }}>
              Sent to the broker
            </span>
          </PaperContainer>
        </Grid>
      ) : (
        <Grid item container>
          <Alert sx={{ width: "100%" }} severity="success">
            {successMsg()}
          </Alert>
        </Grid>
      )}
      {!boughtTradeByID.includes(selectedTradeByID) ? (
        <Grid container item justifyContent={"center"}>
          <Button fullWidth sx={{ color: "#5C5C5C" }} onClick={handleCancelBtn}>
            {resourse.cancelBtn}
          </Button>
        </Grid>
      ) : loading ? null : (
        <Grid item container>
          <Button fullWidth onClick={handleBuyAgain} sx={{ padding: 1 }}>
            <Grid container item sx={{ backgroundColor: "#E9ECEF" }}>
              <Grid item container justifyContent={"center"}>
                {"Buy Again"}
              </Grid>
            </Grid>
          </Button>
        </Grid>
      )}
    </Grid>
  );
}
DirectCopyAction.propTypes = {
  selectedTradeByID: PropTypes.number.isRequired,
  setBoughtTradeByID: PropTypes.func.isRequired,
  boughtTradeByID: PropTypes.arrayOf(PropTypes.number).isRequired,
  setTradeBeenBought: PropTypes.func,
  handleCancel: PropTypes.func,
};
