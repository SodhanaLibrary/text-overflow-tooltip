import React from 'react'
import {OverlayTrigger, Tooltip} from 'react-bootstrap';
import classNames from 'classnames';
import './text-overflow-tooltip.css';

class TextOverflowTooltip  extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
			showTooltip:false
		}
  }

  componentDidMount() {
    if(this.comp.offsetWidth === this.comp.scrollWidth && this.comp.offsetWidth !== 0) {
      this.comp.style.width = (this.comp.offsetWidth+2)+'px';
    } else if(this.comp.offsetWidth < this.comp.scrollWidth  && !this.state.showTooltip){
      this.setState({
        showTooltip:true
      });
    }
  }

  render() {
    const {maxWidth, className, popoverPlacement, style} = this.props;
    const computedStyle = Object.assign({}, style,  {
      maxWidth
    });
    const val = <div style={computedStyle} className={classNames("text-overflow-tooltip", className)} ref={(val) => this.comp = val}>
       {this.props.children}
    </div>;
    return this.state.showTooltip ? <OverlayTrigger placement={popoverPlacement} overlay={<Tooltip bsClass="tooltip">{this.props.children}</Tooltip>}>
      {val}
    </OverlayTrigger> : val;
  }
}

TextOverflowTooltip.propTypes = {
  maxWidth:React.PropTypes.string,
  popoverPlacement:React.PropTypes.string
}

TextOverflowTooltip.defaultProps = {
}

export default TextOverflowTooltip;
