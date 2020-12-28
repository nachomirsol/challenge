import React,{ useState } from "react";
/** Types */
import { VirtualizedListProps } from "./types";

export const VirtualizedList = ({ numItems, itemHeight, renderItem, windowHeight }: VirtualizedListProps) => {

    const [scrollTop, setScrollTop] = useState(0);
  
    const innerHeight = numItems * itemHeight;
    const startIndex = Math.floor(scrollTop / itemHeight);
    const endIndex = Math.min(
      numItems - 1, 
      Math.floor((scrollTop + windowHeight) / itemHeight)
    );
  
    const items = [];
    for (let i = startIndex; i <= endIndex; i++) {
        items.push(
            renderItem({
                index: i,
                style: {
                    position: "relative",
                    top: `${i * itemHeight}px`,
                    width: "100%"
                }
            })
        );
    }
  
    const onScroll = (e: any) => setScrollTop(e.currentTarget.scrollTop);
  
    return (
      <div className="scroll" style={{ overflowY: "scroll" }} onScroll={onScroll}>
            <div
                className="inner"
                style={{ position: "relative", height: `${innerHeight}px` }}
            >
                {items}
            </div>
      </div>
    );
};