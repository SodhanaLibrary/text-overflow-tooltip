import React from 'react';
import TextOverflowTooltip from './text-overflow-tooltip/text-overflow-tooltip';
import '../node_modules/bootstrap/dist/css/bootstrap.css'

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{
        width:'500px',
        margin:'auto'
      }}>
        <h1>It Works </h1>
        <p>Mouser hover on below text</p>
        <TextOverflowTooltip maxWidth="100px">give some overflow text here</TextOverflowTooltip>
      </div>
    )
  }
}
