import React from 'react';
import { css } from 'react-emotion';
import { ClimbingBoxLoader } from 'react-spinners';


const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class LoadingWheel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  render() {
    return (
      <div className='sweet-loading'>
        <ClimbingBoxLoader
          className={override}
          sizeUnit={"px"}
          size={25}
          color={'#3f51b5'}
          loading={this.state.loading}
        />
      </div>
    )
  }
}

export default LoadingWheel;
