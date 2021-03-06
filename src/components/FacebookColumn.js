import styled from 'styled-components';
import React, { PureComponent } from 'react';
import Responsive from './layout/Responsive';

class FacebookColumn extends PureComponent {
  state = {
    width: 0,
  };

  constructor(props) {
    super(props);

    this.myContainer = React.createRef();
    this.state = { width: '0' };

    this.initUpdateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.initUpdateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
    if (this.timeout) clearTimeout(this.timeout);
  }

  updateWindowDimensions() {
    this.setState({ width: this.myContainer.current.offsetWidth });

    if (this.timeout) clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      if (window.FB) {
        window.FB.XFBML.parse();
      }
    }, 200);
  }

  render() {
    const { width } = this.state;
    return (
      <ColumnContainer ref={this.myContainer}>
        <Title> Facebook </Title>
        <div>
          Følg mig på facebook, hvis du ønsker at få søde hvalpebilleder, gode artikler og
          træningsinput i din nyhedsstrøm.
        </div>
        <MarginBottom> </MarginBottom>
        <div
          style={{ height: '214px' }}
          className="fb-page"
          data-href="https://www.facebook.com/SvanesDyr/"
          data-hide-cover="false"
          data-width={width}
          data-adapt-container-width="false"
        />
      </ColumnContainer>
    );
  }
}

export default FacebookColumn;

const Title = styled.h3`
  color: #fff;
`;

const MarginBottom = styled.div`
  margin-bottom: 1rem;
`;

const ColumnContainer = styled.div`
  flex-direction: column;
  width: 32%;
  ${Responsive.media.tablet`
    width: 100%;
    align-self: end;
  `}
`;
