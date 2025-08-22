import React from "react";
import { createComponent } from "@lit/react";
import { PlButton as PlButtonWC } from "@liebherr2/plnext";

export const PlButton = createComponent({
  react: React,
  tagName: "pl-button",
  elementClass: PlButtonWC,
  events: {
    onClick: "pl-button-click",
  },
});

// import React from "react";
// import { createComponent } from "@lit/react";
// import type { PlButton as PlButtonWC } from "@liebherr2/plnext";

// export const PlButton = createComponent<PlButtonWC>({
//   react: React,
//   tagName: "pl-button",
//   elementClass: undefined as unknown as typeof PlButtonWC,
//   events: {
//     onClick: "pl-button-click",
//   },
// });
