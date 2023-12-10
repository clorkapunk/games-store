import React from 'react';
import {Accordion, Button, Col, Container, Image, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import gif from '../assets/distribution-gif.webp'

const Distribution = () => {
    let cards = [
        {
            img: 'https://cdn2.unrealengine.com/direct-game-distribution-06596600236d.svg',
            main: 'Reach a Global Audience',
            second: 'Direct distribution to over 230 million Sus users across 187 countries with 16 languages supported.'
        },
        {
            img: 'https://cdn2.unrealengine.com/video-game-revenue-c74196d72f94.svg',
            main: '88%/12% Revenue Split',
            second: 'Keep 88% of the revenue and monitor product performance with integrated analytics dashboards.'
        },
        {
            img: 'https://cdn2.unrealengine.com/player-engagement-69f0a2ba31cd.svg',
            main: 'Drive Player Engagement',
            second: 'Tap into store features like wishlists, achievements, store-wide promotions and more!'
        },
        {
            img: 'https://cdn2.unrealengine.com/epic-games-payment-methods-18cc6135990f.svg',
            main: 'Worldwide E-Commerce',
            second: 'Sus\'s payment service supports 76 payment methods with 47 regional currencies and more on the way.'
        },
        {
            img: 'https://cdn2.unrealengine.com/epic-games-wallet-2af74bb47a7a.svg',
            main: 'Sus Wallet',
            second: 'Users can load up their Wallet with funds to spend on products and services in the store, now available in more than 140 countries.'
        },
        {
            img: 'https://cdn2.unrealengine.com/game-ratings-localization-and-affliate-network-benefits-a931a6cb27b8.svg',
            main: 'Additional Benefits',
            second: 'Easy IARC ratings in Sus Developer Portal, request no-cost localization for store pages and activate our Support-A-Creator affiliate network.'
        }
    ]

    let questions = [
        {id: 0, q: 'Why should I distribute my game on the Sus Games Store?', a: 'The Sus Games Store has a global audience of over 230M+ users, a 88%/12% revenue split and additional no-cost services to help bring your game to market. For games built on Unreal Engine, engine royalty fees are waived for in-store purchases using Sus\'s payment processor. In-app purchases and products using their own payment processor are not exempt from engine royalties.'},
        {id: 1, q: 'My game is built with Unity or another engine, can I bring it to the Sus Games store?', a: 'Yes, the Sus Games store is engine-agnostic. Sus is aiming to bring great games to players, regardless of your engine choice.'},
        {id: 2, q: 'What are the Sus Games Store self-service publishing tools?', a: 'They are a suite of tools within the Sus Developer Portal used by developers to set up their game pages, pricing, offers, builds, and updates on the Sus Games Store.'},
        {id: 3, q: 'What is the Sus Developer Portal?', a: 'The Developer Portal is the central hub to distribute games on the Sus Games Store and enhance games with Sus Online Services. The Developer Portal is used to update product information, configure back-end services, support players, and view game financial data, usage reports, and other statistical data.'},
        {id: 4, q: 'What other developer tools does Sus offer?', a: '\"Sus offers an ecosystem of tools, services, and communities to help anyone create, power, and distribute software. With a single Sus Games account, anyone can create with Unreal Engine, enhance with Sus Online Services and Kids Web Services, and distribute PC games on the Sus Games Store. Even more tools like Twinmotion, MetaHuman, Quixel, and Capturing Reality bring your project to the next level. And the Sus Developer Community is here to connect creators alike to share and learn.\"'},
        {id: 5, q: 'How do I distribute games on the Sus Games Store?', a: 'Getting started is easy, just log in or create an account at dev.susgames.com/portal. From there the sign up wizard will help guide registration of your company and the build of your first game. Be sure to have business information (contact info and tax/payout information) on hand. Important to note there is a recoupable $100 USD submission fee per game which will need to paid before releasing on the store. Read our announcement blog for an overview of the self-publishing process.'},
        {id: 6, q: 'Are there any requirements for a game to launch on the Store?', a: 'All products published on the Sus Games Store adhere to our content guidelines. In addition, they must launch, run, and be consistent with the product description presented to users via their Product Details Page (PDP).\n' +
                'Multiplayer games must support crossplay across all PC stores. This is to make sure players who purchase a multiplayer game on any store can easily connect with other players, regardless of where the game was purchased. To achieve this, you can implement crossplay yourself, use a third-party SDK, or use Sus Online Services for free.\n' +
                'Achievements - All games onboarded to the Sus Games Store publishing tools after March 9, 2023 are required to enable Sus Games Store achievements if the game has achievements on other PC stores. This helps standardize the player experience regardless of where the game was purchased.'},
        {id: 7, q: 'Any prohibited content that the Store may decline?', a: 'Products that contain prohibited content (hateful or discriminatory content, pornography, and illegal content) are not eligible for distribution on the Sus Games Store. Content that infringes on intellectual property you do not own or have rights to use scams, frauds, or deceptive practices, such as fake games or malware are also prohibited. Published products receiving complaints about content that does not meet the criteria may be subject to re-review and removal from the Sus Games Store.'},
        {id: 8, q: 'Does the Sus Games store have regional pricing?', a: 'Yes, we do support regional pricing. We also have a set of suggested regional discounts based on local norms.'},
        {id: 9, q: 'How do refunds work on the Sus Games store?', a: 'Games and products purchased through the Sus Games Store are generally eligible for a refund. These products are marked “refundable”. If a game or product is marked as "non-refundable", then it is not eligible for a refund. Products that include virtual currency or other consumables are marked “non-refundable” and are not eligible for refund. Also, most in-app purchases are non-refundable. Sus cannot provide refunds for purchases made outside of the Sus Games Store.'}
    ]


    return (
        <Container style={{minHeight: "100vh", padding: 0}} fluid={false}>
            <div style={{position: 'sticky', top: 0, zIndex: 999}}>
                <TypeBar/>
            </div>

            <div
                className="distribution-card"
                style={{
                    padding: 0,
                    width: "100%",
                    aspectRatio: '16/8',
                    background: 'linear-gradient(135deg, rgba(3,4,24,1) 0%, rgba(4,5,86,1) 50%, rgba(32,14,67,1) 100%)',
                    display: 'flex',
                    borderRadius: 5
                }}>
                <Image className="distribution-image" src={gif} style={{
                    width: "50%",
                    height: 'auto',
                    display: "flex",
                    justifyContent: "center",
                    alignItems: 'center'
                }}/>
                <div style={{
                    margin: "20px 20px",
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: 'center'
                }}>
                    <img style={{width: 100}} src="https://media.tenor.com/xzjlrhYq_lQAAAAj/cat-nyan-cat.gif"/>
                    <h3 style={{marginTop: 20}} className="distribution-title">Now open to all developers and
                        publishers</h3>
                    <Button style={{marginTop: 30}} variant='light'>SING UP TODAY</Button>
                    <p style={{marginTop: 30}}>Start distributing PC games on the Sus Games Store with our new
                        self-service publishing tools.</p>
                </div>
            </div>
            <div style={{display: "flex", justifyContent: "center"}}>
                <Row className="justify-content-between distribution-card-total" xs={1} md={1} lg={1} xl={1} xxl={3}
                     style={{width: "100%"}}>
                    {cards.map(item =>
                        <Col className='mt-3 distribution-card-col'
                             style={{padding: 0,
                                 display: "flex",
                                 justifyContent: "center",
                                 alignItems: "center"
                        }}>
                            <div className="distribution-card-small"
                                 style={{
                                     height: "400px",
                                     width: '430px',
                                     border: '1px solid #2A2A2A',
                                     borderRadius: 15,
                                     display: "flex",
                                     flexDirection: "column",
                                     alignItems: 'center',
                                     justifyContent: 'center',
                                     textAlign: 'center',
                                     color: "white",
                                     padding: '40px 50px'
                                 }}>
                                <img style={{width: 150}}
                                     src={item.img}/>
                                <h2>{item.main}</h2>
                                <h5 style={{opacity: 0.7}}>{item.second}</h5>
                            </div>
                        </Col>
                    )}

                </Row>
            </div>
            <div style={{display: "flex", justifyContent: "center"}}>
                <Row style={{width: '100%'}}>
                    <Col md={12} className="mt-4" style={{
                        border: '1px solid #2A2A2A',
                        borderRadius: 15,
                        display: "flex",
                        flexDirection: 'row',
                        flexGrow: 1,
                        flexBasis: "100%",
                        padding: 40,
                        background: 'linear-gradient(90deg, rgba(22,39,49,1) 0%, rgba(18,20,21,1) 100%)'
                    }}>
                        <div
                            style={{display: 'flex', flexBasis: '50%', justifyContent: "center", alignItems: "center"}}>
                            <img style={{}} src="https://media.tenor.com/xzjlrhYq_lQAAAAj/cat-nyan-cat.gif"/>
                        </div>
                        <div style={{
                            flexBasis: '50%',
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            flexDirection: 'column',
                            color: 'white',


                        }}>
                            <h4>Join the discussion or create topics for community support around distribution</h4>
                            <a style={{cursor: "pointer", textDecoration: 'underline', marginTop: 10}}>Go to the
                                community</a>
                        </div>
                    </Col>
                </Row>
            </div>
            <Row className='mt-4 mb-5'>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center", color: "white"}}>
                    <h1 style={{margin: 0}}>Frequently Asked Questions</h1>
                </div>
                <Accordion  className='mt-3 distribution-questions' defaultActiveKey="0" style={{borderRadius: 0}}>
                    {questions.map(item =>
                        <Accordion.Item eventKey={item.id} style={{background: 'transparent', borderRadius: 0, borderBottom: '1px solid #2B2B2B', borderTop: 0, borderInline: 0}}>
                            <Accordion.Header style={{color: 'white'}}>{item.q}</Accordion.Header>
                            <Accordion.Body style={{color: "white", opacity: 0.5, fontSize: '1em', paddingBottom: 32, paddingInline: 0}}>{item.a}</Accordion.Body>
                        </Accordion.Item>
                    )}
                </Accordion>

            </Row>

        </Container>
    );
};

export default Distribution;