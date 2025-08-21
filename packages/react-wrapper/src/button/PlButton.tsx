import React from "react";
import { createComponent } from "@lit/react";
import { PlButton as PlButtonWebComponent } from "@liebherr2/plnext";

export const PlButton = createComponent({
  react: React,
  tagName: "pl-button",
  elementClass: PlButtonWebComponent,
  events: {
    onClick: "pl-button-click",
  },
});

// import React from "react";
// import { createComponent } from "@lit/react";
// import type { PlButton as PlButtonWebComponent } from "@liebherr2/plnext";

// export const PlButton = createComponent<PlButtonWebComponent>({
//   react: React,
//   tagName: "pl-button",
//   elementClass: undefined as unknown as typeof PlButtonWebComponent,
//   events: {
//     onClick: "pl-button-click",
//   },
// });
