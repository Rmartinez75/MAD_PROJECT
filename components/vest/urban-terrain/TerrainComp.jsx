
import '@styles/main-page.css'
import Counter from '@components/Counter'
import TerrainCarousel from '@components/vest/urban-terrain/TerrainCarousel'
import TerrainMobileCarousel from './TerrainMobileCarousel'

function TerrainComp() {
  return (
    <div id='vest-terrain-section'>     
      <div className='hidden lg:flex ml-3'> 
        <div className='p-0.5'>
            <img src='/assets/images/VR_URBAN_TERRAIN/VR_URBAN_TERRAIN_1_01.jpeg' alt='VEST-1' className='w-[400px]' />
          </div>       
          <div className='p-0.5'>
            <img src='/assets/images/VR_URBAN_TERRAIN/VR_URBAN_TERRAIN_1_02.jpeg' alt='VEST-2' className='w-[400px]' />
          </div>
          <div className='p-0.5'>
            <TerrainCarousel />                
          </div>
          <div className='box-content h-auto w-1/4 ml-[5%]'>
            <div style={{fontSize: '12px'}}>
              <p className='font-bold'>VR TERRAIN: 1S</p> <br />
              A concept design. Inspired by the terrain of the city and the circuits on a PCB board. The VR Terrain (concept) explorers textile layering and how this technique can be used to transform a 2D textile into a 3D wearable technology that conforms to the body. 
            <br />
            <br />
            <Counter />
            </div>          
        </div>
      </div>  
      <br />
      <div className='hidden lg:flex justify-between'>
      </div>
      <TerrainMobileCarousel />
    </div>
  )
}

export default TerrainComp
