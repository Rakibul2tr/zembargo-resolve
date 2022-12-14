import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import HomeBanner from '../../Share/HomeBanner/HomeBanner';
import ConformInform from './ConformInform/ConformInform';
import EmailField from './EmailField/EmailField';
import EstimitPrice from './EstimitPrice/EstimitPrice';
import Multistepbar from './MultisetapBar/Multistepbar';
import Quate1 from './QuateStep1/Quate1';
import Quate2 from './QuateStep2/Quate2';
import Quate3 from './QuateStep3/Quate3';
import SeccessFull from './SuccessShow/SeccessFull';





const Quate = () => {
    const [nextPage,setnextPage]=useState('step1')
    
    return (
        <div>
            <HomeBanner/>
            <Container>
                <Row>
                    {/* <MultiForm/> */}
                    
                    <div className="col-md-6 offset-6 mx-auto">
                        {
                            nextPage=='step1'&&'step2'&&'step3'&&<div className="w-75 mx-auto py-5">
                            <h3 className="text-center py-3">Get an Online Quote</h3>
                               <Multistepbar currentStep={nextPage}/>
                            </div>
                        }
                        {
                            nextPage=='step2'&&<div className="w-75 mx-auto py-5">
                            <h3 className="text-center py-3">Get an Online Quote</h3>
                               <Multistepbar currentStep={nextPage}/>
                            </div>
                        }
                        {
                            nextPage=='step3'&&<div className="w-75 mx-auto py-5">
                            <h3 className="text-center py-3">Get an Online Quote</h3>
                               <Multistepbar currentStep={nextPage}/>
                            </div>
                        }
                        
                        
                    {
                        nextPage=='step1'&&<Quate1 setnextPage={setnextPage}/>
                    }
                    {
                        nextPage=='step2'&&<Quate2 setnextPage={setnextPage}/>
                    }
                    {
                        nextPage=='step3'&&<Quate3 setnextPage={setnextPage}/>
                    }
                    {
                        nextPage=='estimit'&&<EstimitPrice setnextPage={setnextPage}/>
                    }
                    {
                        nextPage=='email'&&<EmailField setnextPage={setnextPage}/>
                    }
                    {
                        nextPage=='conform'&&<ConformInform setnextPage={setnextPage}/>
                    }
                    {
                        nextPage=='ok'&&<SeccessFull setnextPage={setnextPage}/>
                    }
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Quate;