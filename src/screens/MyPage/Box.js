import React from "react";
import { Grid } from "@mui/material";
import "./style.css";
import { MyPageBoxContainer } from "./style";
import { PieChart } from "react-minimal-pie-chart";

function Box() {
  const lists = [
    {
      title: "승률",
      //   sub: "home",
      //   ratio: "1200/2000 Usd",
      value: 66,
      color: "CornflowerBlue",
    },
    {
      title: "랭킹",
      //   sub: "cost",
      //   ratio: "400/1600 Usd",
      value: 76,
      color: "DarkOrange",
    },
    {
      title: "포인트",
      //   sub: "cost",
      //   ratio: "60/1800 Usd",
      value: 15,
      color: "DarkSlateBlue",
    },
    {
      title: "투표한 나라",
      //   sub: "cost",
      //   ratio: "60/1800 Usd",
      value: 50,
      color: "DarkSeaGreen",
    },
    // {
    // 	title: 'Food',
    // 	sub: 'cost',
    // 	ratio: '60/1800 Usd',
    // 	value: 20,
    // 	color: 'yellow',
    // },
    // {
    // 	title: 'Food',
    // 	sub: 'cost',
    // 	ratio: '60/1800 Usd',
    // 	value: 30,
    // 	color: 'DarkOliveGreen',
    // },
  ];
  return (
    <Grid container className="grid">
      {lists.map((list, i) => (
        <Grid item xs={12} sm={12} lg={5.8} className="grid-item">
          <PieChart
            className="chart"
            data={[list]}
            reveal={list.value}
            lineWidth={18}
            background="rgb(223, 222, 222)"
            lengthAngle={360}
            rounded
            animate
            label={({ dataEntry }) => dataEntry.value + "%"}
            labelStyle={{
              fontSize: "26px",
              fill: "#33333",
            }}
            labelPosition={0}
          />
          <div className="info">
            <h2>{list.title}</h2>
            <p>{list.sub}</p>
            <span>{list.ratio}</span>
          </div>
        </Grid>
      ))}
    </Grid>
  );
}

export default Box;
