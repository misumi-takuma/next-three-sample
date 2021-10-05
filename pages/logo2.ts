import { Vector, Vector3 } from "three";

type Boxe = {
  position: Vector3;
  color: string;
};

const blue = "#45c0d9";
const darkPink = "#c84dd1";
const pink = "#e47ff5";

export const boxesArray: Boxe[] = [
  // 1列目一段
  {
    position: new Vector3(-2.4, -2.4, 2.4),
    color: blue,
  },
  {
    position: new Vector3(-1.2, -2.4, 2.4),
    color: blue,
  },
  {
    position: new Vector3(0, -2.4, 2.4),
    color: blue,
  },
  {
    position: new Vector3(1.2, -2.4, 2.4),
    color: blue,
  },
  {
    position: new Vector3(2.4, -2.4, 2.4),
    color: blue,
  },
  // 1列目二段
  {
    position: new Vector3(-2.4, -1.2, 2.4),
    color: blue,
  },
  {
    position: new Vector3(-1.2, -1.2, 2.4),
    color: blue,
  },
  {
    position: new Vector3(0, -1.2, 2.4),
    color: blue,
  },
  {
    position: new Vector3(1.2, -1.2, 2.4),
    color: blue,
  },
  {
    position: new Vector3(2.4, -1.2, 2.4),
    color: blue,
  },
  // 1列目三段
  {
    position: new Vector3(-2.4, 0, 2.4),
    color: blue,
  },
  {
    position: new Vector3(-1.2, 0, 2.4),
    color: blue,
  },
  {
    position: new Vector3(0, 0, 2.4),
    color: blue,
  },
  {
    position: new Vector3(1.2, 0, 2.4),
    color: blue,
  },
  {
    position: new Vector3(2.4, 0, 2.4),
    color: blue,
  },
  // 1列目四段
  {
    position: new Vector3(-2.4, 1.2, 2.4),
    color: blue,
  },
  {
    position: new Vector3(-1.2, 1.2, 2.4),
    color: blue,
  },
  {
    position: new Vector3(0, 1.2, 2.4),
    color: blue,
  },
  {
    position: new Vector3(1.2, 1.2, 2.4),
    color: blue,
  },
  {
    position: new Vector3(2.4, 1.2, 2.4),
    color: blue,
  },
  // 1列目五段
  {
    position: new Vector3(-2.4, 2.4, 2.4),
    color: blue,
  },
  {
    position: new Vector3(-1.2, 2.4, 2.4),
    color: blue,
  },
  {
    position: new Vector3(0, 2.4, 2.4),
    color: blue,
  },
  {
    position: new Vector3(1.2, 2.4, 2.4),
    color: blue,
  },
  {
    position: new Vector3(2.4, 2.4, 2.4),
    color: blue,
  },
  // 2列目
  {
    position: new Vector3(2.4, -2.4, 1.2),
    color: blue,
  },
  {
    position: new Vector3(2.4, -1.2, 1.2),
    color: blue,
  },
  {
    position: new Vector3(2.4, 0, 1.2),
    color: blue,
  },
  {
    position: new Vector3(2.4, 1.2, 1.2),
    color: blue,
  },
  {
    position: new Vector3(2.4, 2.4, 1.2),
    color: blue,
  },
  // 3列目一段
  {
    position: new Vector3(-2.4, -2.4, 0),
    color: pink,
  },
  {
    position: new Vector3(-1.2, -2.4, 0),
    color: pink,
  },
  {
    position: new Vector3(0, -2.4, 0),
    color: pink,
  },
  {
    position: new Vector3(2.4, -2.4, 0),
    color: darkPink,
  },
  // 3列目二段
  {
    position: new Vector3(-2.4, -1.2, 0),
    color: pink,
  },
  {
    position: new Vector3(-1.2, -1.2, 0),
    color: pink,
  },
  {
    position: new Vector3(0, -1.2, 0),
    color: pink,
  },
  {
    position: new Vector3(2.4, -1.2, 0),
    color: darkPink,
  },
  // 3列目三段
  {
    position: new Vector3(-2.4, 0, 0),
    color: pink,
  },
  {
    position: new Vector3(-1.2, 0, 0),
    color: pink,
  },
  {
    position: new Vector3(0, 0, 0),
    color: pink,
  },
  {
    position: new Vector3(2.4, 0, 0),
    color: darkPink,
  },
  // 3列目四段
  {
    position: new Vector3(-2.4, 1.2, 0),
    color: pink,
  },
  {
    position: new Vector3(-1.2, 1.2, 0),
    color: pink,
  },
  {
    position: new Vector3(0, 1.2, 0),
    color: pink,
  },
  {
    position: new Vector3(2.4, 1.2, 0),
    color: darkPink,
  },
  // 3列目五段
  {
    position: new Vector3(-2.4, 2.4, 0),
    color: pink,
  },
  {
    position: new Vector3(-1.2, 2.4, 0),
    color: pink,
  },
  {
    position: new Vector3(0, 2.4, 0),
    color: pink,
  },
  {
    position: new Vector3(2.4, 2.4, 0),
    color: darkPink,
  },
  // 4列目一段
  {
    position: new Vector3(-2.4, -2.4, -1.2),
    color: pink,
  },
  {
    position: new Vector3(0, -2.4, -1.2),
    color: pink,
  },
  {
    position: new Vector3(2.4, -2.4, -1.2),
    color: pink,
  },
  // 4列目二段
  {
    position: new Vector3(-2.4, -1.2, -1.2),
    color: pink,
  },
  {
    position: new Vector3(0, -1.2, -1.2),
    color: pink,
  },
  {
    position: new Vector3(2.4, -1.2, -1.2),
    color: pink,
  },
  // 4列目三段
  {
    position: new Vector3(-2.4, 0, -1.2),
    color: pink,
  },
  {
    position: new Vector3(0, 0, -1.2),
    color: pink,
  },
  {
    position: new Vector3(2.4, 0, -1.2),
    color: pink,
  },
  // 4列目四段
  {
    position: new Vector3(-2.4, 1.2, -1.2),
    color: pink,
  },
  {
    position: new Vector3(0, 1.2, -1.2),
    color: pink,
  },
  {
    position: new Vector3(2.4, 1.2, -1.2),
    color: pink,
  },
  // 4列目五段
  {
    position: new Vector3(-2.4, 2.4, -1.2),
    color: pink,
  },
  {
    position: new Vector3(0, 2.4, -1.2),
    color: pink,
  },
  {
    position: new Vector3(2.4, 2.4, -1.2),
    color: pink,
  },
  // 5列目一段
  {
    position: new Vector3(-2.4, -2.4, -2.4),
    color: pink,
  },
  {
    position: new Vector3(0, -2.4, -2.4),
    color: pink,
  },
  {
    position: new Vector3(1.2, -2.4, -2.4),
    color: pink,
  },
  {
    position: new Vector3(2.4, -2.4, -2.4),
    color: pink,
  },
  // 5列目二段
  {
    position: new Vector3(-2.4, -1.2, -2.4),
    color: pink,
  },
  {
    position: new Vector3(0, -1.2, -2.4),
    color: pink,
  },
  {
    position: new Vector3(1.2, -1.2, -2.4),
    color: pink,
  },
  {
    position: new Vector3(2.4, -1.2, -2.4),
    color: pink,
  },
  // 5列目三段
  {
    position: new Vector3(-2.4, 0, -2.4),
    color: pink,
  },
  {
    position: new Vector3(0, 0, -2.4),
    color: pink,
  },
  {
    position: new Vector3(1.2, 0, -2.4),
    color: pink,
  },
  {
    position: new Vector3(2.4, 0, -2.4),
    color: pink,
  },
  // 5列目四段
  {
    position: new Vector3(-2.4, 1.2, -2.4),
    color: pink,
  },
  {
    position: new Vector3(0, 1.2, -2.4),
    color: pink,
  },
  {
    position: new Vector3(1.2, 1.2, -2.4),
    color: pink,
  },
  {
    position: new Vector3(2.4, 1.2, -2.4),
    color: pink,
  },
  // 5列目五段
  {
    position: new Vector3(-2.4, 2.4, -2.4),
    color: pink,
  },
  {
    position: new Vector3(0, 2.4, -2.4),
    color: pink,
  },
  {
    position: new Vector3(1.2, 2.4, -2.4),
    color: pink,
  },
  {
    position: new Vector3(2.4, 2.4, -2.4),
    color: pink,
  },
];
