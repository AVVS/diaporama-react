var React = require("react");
var Diaporama = require("diaporama");

var PropTypes = React.PropTypes;

var DiaporamaElement = React.createClass({
  propTypes: {
    data: PropTypes.object.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    resolution: PropTypes.number,
    paused: PropTypes.bool,
    loop: PropTypes.bool,
    autoplay: PropTypes.bool,
    currentTime: PropTypes.number,
    playbackRate: PropTypes.number
  },

  componentDidMount: function () {
    this.diaporama = Diaporama(this.getDOMNode());
  },

  componentWillUnmount: function () {
    this.diaporama.destroy();
  },

  componentWillReceiveProps: function (props) {
    for (var k in props) {
      this.diaporama[k] = props[k];
    }
  },

  componentShouldUpdate: function () {
    return false;
  },

  render: function () {
    return React.createElement("div");
  }
});

module.exports = DiaporamaElement;
