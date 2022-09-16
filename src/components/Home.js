import React from 'react'
import styled from 'styled-components/macro';
import Section from './Section';
import carInfo from '../carInfo.json';




const Home = () => {
  return (
    
    <Container>
        {
            carInfo.map(car=>(
                <Section
                    key={car.id}
                    // title={car.title}
                    // description={car.description}
                    // image= {car.image}
                    // range = {car.range}
                    // time = {car.time}
                    // topSpeed =  {car.topSpeed}
                    // peakPower = {car.peakPower}
                {...car}
                />

            ))
        }

        

        
    </Container>
  )
}


const Container = styled.div`
    height: 100vh;

`

export default Home