import React from "react";
import { shallow, mount } from "enzyme";
import Main from "./components/Main";
import Card from "./components/Card";

const dataCards = [
  {
    title: "Peer Pressure and Advertising",
    duration: "130",
    description:
      "Advertising is something that we are all surrounded by - online, watching TV or driving past a billboard. It can influence us and those around us more than we might realise. In this video, Joe and Jade consider some of the issues around advertising but also peer-pressure before they go shopping. They realise how important it to start assessing what you want to take control of their money.  ",
    url: "https://www.blackbullion.com/pathways/key-stage-4",
    image: "https://prodcontent.blackbullion.com/images/featured/lesson2.png",
  },
  {
    title: "Needs, Wants and Budgeting",
    duration: "269",
    description:
      "There are many things that we often consider as ‘needs’ but it might be worth taking a moment to think about whether this is what they actually are. You might find after a little thinking that it’s just a ‘want’. Jade and Joe discuss the financial implications of this in their finance vlog and the importance of budgeting. ",
    url: "https://www.blackbullion.com/pathways/key-stage-4",
    image: "https://prodcontent.blackbullion.com/images/featured/lesson3.png",
  },
];

describe("rendering components", () => {
  it("renders Main component without crashing", () => {
    shallow(<Main />);
  });
  it("renders Card component without crashing", () => {
    shallow(<Card />);
  });
});

describe("passing props", () => {
  const cardsWrappper = mount(<Card data={dataCards} />);
  it("accepts user account props", () => {
    expect(cardsWrappper.props().data).toEqual(dataCards);
  });
});
