const n = `@use '../styles/fonts.css' as *;

:host {
  display: inline-block;
  font-family: LiebherrText-Bold, Arial, sans-serif;
  font-size: 14px;
  font-weight: normal;
  letter-spacing: 0.78px;
  line-height: 24px;
}

:host([disabled]) button {
  background-color: #cccccc;
  color: #666666;
  cursor: not-allowed;
}

button {
  font-family: inherit;
  font-size: inherit;
  font-weight: normal; /* important to reset the agent styles */
  letter-spacing: inherit;
  line-height: inherit;

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
