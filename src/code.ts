// This plugin will add 3dicons from 3dicons.co to your artboard

// Show the plugin UI
figma.showUI(__html__, {
  width: 300,
  height: 600,
  themeColors: true,
});

function clone(val) {
  return JSON.parse(JSON.stringify(val));
}

console.log("3dicons running...");

//  Message received
figma.ui.onmessage = (msg) => {
  if (msg.type === "notify") {
    figma.notify(msg.data.message);
    return;
  }

  if (msg.type === "set-bg") {
    const newBytes: Uint8Array = msg.data.newBytes;

    let node = figma.currentPage.selection[0];
    if (!node) {
      node = figma.createRectangle();
      node.resize(800, 800);
      node.x = Math.round(figma.viewport.center.x - node.width / 2);
      node.y = Math.round(figma.viewport.center.y - node.height / 2);
    }

    const newFills = [
      {
        type: "IMAGE",
        opacity: 1,
        scaleMode: "FILL",
        blendMode: "NORMAL",
        imageTransform: [
          [1, 0, 0],
          [0, 1, 0],
        ],
        imageHash: figma.createImage(newBytes).hash,
      },
    ];

    //@ts-ignore
    node.fills = newFills;
    node.name = "3dicons-" + msg.icoName;

    figma.currentPage.selection = [node];

    figma.notify("3dicons/" + msg.icoName + " added");

    return;
  }
};
