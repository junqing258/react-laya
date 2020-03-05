import React, { Component, createRef, useState, useEffect } from "react";

const { Image, Sprite, Text } = Laya;

export default class Integral extends Component {
  state: { count: number };
  private score: React.RefObject<any>;

  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };

    this.score = createRef();

    Laya.timer.loop(1000, this, () => {
      this.setState({ count: ++this.state.count });
    });
  }

  componentDidMount() {
    console.log(`[componentDidMount]: Integral`);
  }

  private handleClick(e) {
    this.score.current.y += 4;
  }

  render() {
    return (
      <sprite
        width={Laya.stage.width}
        height={Laya.stage.height}
        onClick={this.handleClick.bind(this)}
      >
        <text
          ref={this.score}
          color="#ffffff"
          fontSize="72"
          y={54}
          x={280}
          text={this.state.count}
        />
        <text
          color="#fff000"
          fontSize="72"
          font="Consolas"
          y={154}
          x={280}
          text={this.state.count}
        />
        {[1, 2, 3].map(v => (
          <Item count={v} key={String(v)} />
        ))}
      </sprite>
    );
  }
}

function Item(props) {
  const [val, setVal] = useState(1);
  
  useEffect(() => {
    setTimeout(() => setVal(val+1), 1000);
  }, []);

  return (
    <sprite y={154 + props.count * 100} x={380}>
      <text color="#ffffff" fontSize="42" text={props.count} />
      <text color="#ffffff" fontSize="42" x={120}>{val}</text>
    </sprite>
  );
}
