import React from 'react'
import { Accordion, Tab, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const accordionBlog = [
  { name: 'Car Specifications', name2: 'Engine Specifications' },
  { name: 'Engine Specifications', name2: 'Car Dimension' },
  { name: 'Car Dimension', name2: 'Car Specifications' },

]

const accordion2 = [
  { names: 'Color', categery: 'Silver' },
  { names: 'Gear Box', categery: '7 Speed' },
  { names: 'Drive Type', categery: 'AWD' },
  { names: 'Seating Capacity', categery: '5' },
  { names: 'Over Drive', categery: '4 Motion' },
  { names: 'Steering Type', categery: 'Electric' },
  { names: 'Turning Radius', categery: '5.75meters' },
  { names: 'Front Brake Type', categery: 'Disc' },
  { names: 'Rear Brake Type', categery: 'Disc' },
  { names: 'Tyre Type', categery: 'Tubeless Radial Tyres' },
  { names: 'Alloy Wheel Size', categery: '18 Inch' },
  { names: 'No Of Doors', categery: '5' },
  { names: 'Cargo Volume', categery: '615mm' },
]
const AccordianUsecar = () => {


  return (
    <>
      <Tab.Container defaultActiveKey={'specifications'}>
        <div className="dlab-tabs  product-description">
          <Nav as="ul" className="nav nav-tabs m-b20">
            <Nav.Item as="li" ><Nav.Link eventKey={'specifications'} className="tabs tab-one">Specifications</Nav.Link></Nav.Item>
            <Nav.Item as="li"> <Nav.Link eventKey={'features'} className="tabs tab-two">Features</Nav.Link></Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey={'specifications'}>
              <Accordion>
                {accordionBlog.map((data, index1) => (
                  <Accordion.Item eventKey={`${index1}`} key={index1}>
                    <Accordion.Header className='accordian_header'>
                      <h5 className="acod-title">
                        <Link to={'#'} className={`collapsed accordionLink`}>{data.name}</Link>
                      </h5>
                    </Accordion.Header>
                    <Accordion.Body eventKey={`${index1}`} className="">
                      <div className="acod-content" style={{ background: 'rgb(255, 255, 255)' }}>
                        <ul className="table-dl clearfix">
                          {accordion2.map((items2, index) => (
                            <li key={index}>
                              <div className="leftview">{items2.names}</div>
                              <div className="rightview">{items2.categery}</div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Tab.Pane>
            <Tab.Pane eventKey={'features'}>
              <Accordion>
                {accordionBlog.map((data, index2) => (
                  <Accordion.Item eventKey={`${index2}`} key={index2} className='color-danger'>
                    <Accordion.Header className='accordian_header'>
                      <h5 className="acod-title">
                        <Link to={'#'} className={`collapsed`}>{data.name2}</Link>
                      </h5>
                    </Accordion.Header>
                    <Accordion.Body eventKey={`${index2}`} className="">
                      <div className="acod-content" style={{ background: 'rgb(255, 255, 255)' }}>
                        <ul className="table-dl clearfix">
                          {accordion2.map((items2, indmapKey) => (
                            <li key={indmapKey}>
                              <div className="leftview">{items2.names}</div>
                              <div className="rightview">{items2.categery}</div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Tab.Pane>
          </Tab.Content>
        </div>
      </Tab.Container>


    </>
  )
}

export default AccordianUsecar