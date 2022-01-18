import * as React from 'react';
import { Card, Row, Col, Divider } from 'antd';

const { Meta } = Card;

const style = { background: '#0092ff', padding: '8px 0' };

class PartnershipContent extends React.Component {
    render() {
        return (
            <>
                <Divider orientation="left">Responsive</Divider>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={6}>
                        <div style={style}>
                            <Card
                                hoverable
                                title="Galleon Coin"
                                style={{ width: 240 }}
                                extra={<a href="#">More</a>}
                                cover={<img alt="Galleon Coin" src="https://cryptoskyplatform.org/images/Galleon.png" />}
                            >
                                <Meta title="Sky" description="www.cryptoskyplatform.com" />
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div style={style}>
                            <Card
                                hoverable
                                title="Galleon Coin"
                                style={{ width: 240 }}
                                extra={<a href="#">More</a>}
                                cover={<img alt="Galleon Coin" src="https://cryptoskyplatform.org/images/Galleon.png" />}
                            >
                                <Meta title="Sky" description="www.cryptoskyplatform.com" />
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div style={style}>
                            <Card
                                hoverable
                                title="Galleon Coin"
                                style={{ width: 240 }}
                                extra={<a href="#">More</a>}
                                cover={<img alt="Galleon Coin" src="https://cryptoskyplatform.org/images/Galleon.png" />}
                            >
                                <Meta title="Sky" description="www.cryptoskyplatform.com" />
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div style={style}>
                            <Card
                                hoverable
                                title="Galleon Coin"
                                style={{ width: 240 }}
                                extra={<a href="#">More</a>}
                                cover={<img alt="Galleon Coin" src="https://cryptoskyplatform.org/images/Galleon.png" />}
                            >
                                <Meta title="Sky" description="www.cryptoskyplatform.com" />
                            </Card>
                        </div>
                    </Col>
                </Row>
            </>
        )
    }
}

export default PartnershipContent