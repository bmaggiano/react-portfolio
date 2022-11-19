// Using a new npm package for this footer componenet called mdb-react-ui-kit
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn
  } from 'mdb-react-ui-kit';
  
  export default function Footer() {
    return (
        <div className='footer'>
            <p> © 2022 Copyright: Brandon Maggiano</p>
      <MDBFooter className='text-center text-white'>
        <MDBContainer>
          <section className='mb-4'>
  
            <MDBBtn outline color="light" floating className='m-1' target='_blank' href='https://twitter.com/BrandonMaggiano' role='button'>
              <MDBIcon fab icon='twitter' />
            </MDBBtn>
  
            <MDBBtn outline color="light" floating className='m-1' target='_blank' href='https://www.instagram.com/brandonmaggiano/?hl=en' role='button'>
              <MDBIcon fab icon='instagram' />
            </MDBBtn>
  
            <MDBBtn outline color="light" floating className='m-1' target='_blank' href='https://www.linkedin.com/in/brandon-maggiano-000490119/' role='button'>
              <MDBIcon fab icon='linkedin-in' />
            </MDBBtn>
  
            <MDBBtn outline color="light" floating className='m-1' target="_blank" href='https://github.com/bmaggiano/' role='button'>
              <MDBIcon fab icon='github' />
            </MDBBtn>
          </section>
        </MDBContainer>
  
      </MDBFooter>
      </div>
    );
  }