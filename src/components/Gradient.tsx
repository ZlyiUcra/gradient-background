import React from "react";

interface GradientProps {
  partial?: number;
}

export class Gradient extends React.Component<GradientProps, {}> {


  render() {
    const height: number = 30;
    const width: number = 200;
    const percentage: number = 92;
    return (
      <div style={{
        margin: "auto",
        width: `${2 * width}px`,
        height: `${4 * height}px`,
        border: "1px solid black",
        borderRadius: "15px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <div style={{
          height: `${height}px`,
          width: `${width}px`,
          backgroundImage: "linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet)",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "row",
          position: "relative"
        }}>
          <div
            style={{
              width: `${percentage}%`,
              borderRadius: "8px",
              height: `${height}px`,
              backgroundColor: "transparent",
              boxShadow: "8px 0px #e3e3e3"
            }} onMouseDown={(e) => {
            console.log(e.pageX, e.pageY, "\\n", e.screenX, e.screenY, "\\n", e.clientX, e.clientY, "\\n")
          }}></div>
          <div style={{
            width: `calc(100% - ${percentage}%)`,
            borderRadius: "0 8px 8px 0",
            height: `${height}px`,
            backgroundColor: "#e3e3e3",
            boxShadow: "8px 0px #e3e3e3",
          }}></div>
        </div>
      </div>

    )
  }
}