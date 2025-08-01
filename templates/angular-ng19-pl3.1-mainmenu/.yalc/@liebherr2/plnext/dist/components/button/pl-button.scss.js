const n = `// @use '../styles/fonts.css' as *;

:host {
  display: inline-block;
}

:host([disabled]) button {
  background-color: #cccccc;
  color: #666666;
  cursor: not-allowed;
}

button {
  font-family: LiebherrText-Bold, Arial, sans-serif;
  font-size: 14px;
  font-weight: bold;
  line-height: 24px;
  text-transform: uppercase;

  height: 48px;
  padding-left: 36px;
  padding-right: 36px;
  border: 1px solid transparent;
  border-radius: 0;
  background-color: #ffd000;
  // background-color: blue;
  color: black;
  cursor: pointer;
}

button:hover {
  background-color: #eb6f24;
}
`;
export {
  n as default
};
