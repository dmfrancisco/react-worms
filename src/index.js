import React, { Component } from "react";
import * as d3 from "d3";

class Worm extends Component {
  getColor(score) {
    const index = this.scoreToIndex(score, this.props.colors.length);
    return this.props.colors[index];
  }
  getSize(score) {
    const index = this.scoreToIndex(score, this.props.sizes.length);
    return this.props.sizes[index];
  }
  scoreToIndex(score, len) {
    return Math.round((score - this.props.min) * (len - 1) / (this.props.max - this.props.min));
  }
  renderShape(xmax = 100, ymax = 100) {
    const line = d3.line().x(d => d.x).y(d => d.y).curve(d3.curveCatmullRom.alpha(0.35));
    const maxSize = Math.max(...this.props.sizes);
    const data = [{ x: 0, y: 0 }];
    let x = (xmax / this.props.scores.length) / 2;

    this.props.scores.forEach((score) => {
      const y = this.getSize(score) * 100 / maxSize;
      data.push({ x, y });
      x += xmax / this.props.scores.length;
    });
    data.push({ x: xmax, y: 0 });

    return (
      // `translate` prevents a white line from appearing in the middle in some browsers
      <svg className="Worm-shape"
        fill={this.props.bgdColor}
        preserveAspectRatio="none" viewBox={`0 ${-ymax} ${xmax} ${ymax * 2}`}>
          <path d={line(data)} transform="translate(0,2) scale(1,-1)" />
          <path d={line(data)} transform="translate(0,-2)" />
      </svg>
    );
  }
  renderScores() {
    return this.props.scores.map((score, i) => {
      const styles = Object.assign({}, this.props.styles, {
        background: this.getColor(score),
        paddingTop: `${this.getSize(score)}%`,
        width: `${this.getSize(score)}%`,
      });

      return (
        <div key={i} className="Worm-col">
          <div className="Worm-score" style={styles}
            data-score={score} data-label={this.props.labels[i]} />
        </div>
      );
    });
  }
  render() {
    return (
      <div className={`Worm ${this.props.className}`}>
        { this.renderShape() }
        <div className="Worm-row">
          { this.renderScores() }
        </div>
      </div>
    );
  }
}

Worm.propTypes = {
  bgdColor: React.PropTypes.string,
  className: React.PropTypes.string,
  colors: React.PropTypes.array,
  labels: React.PropTypes.array,
  max: React.PropTypes.number.isRequired,
  min: React.PropTypes.number.isRequired,
  scores: React.PropTypes.array.isRequired,
  sizes: React.PropTypes.array,
  styles: React.PropTypes.object,
};

Worm.defaultProps = {
  bgdColor: "#eee",
  className: "",
  colors: ["#fd938e", "#f1c83f", "#f8e71c", "#b8e986", "#7ed321"],
  labels: [],
  sizes: [40, 50, 70, 80, 90],
};

export default Worm;
