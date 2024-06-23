
import '@styles/main-page.css'
import Counter from '@components/Counter'
import TerrainCarousel from '@components/vest/urban-terrain/TerrainCarousel'
import TerrainMobileCarousel from './TerrainMobileCarousel'
import Link from 'next/link'

function TerrainComp() {
  return (
    <div id='vest-terrain-section'>     
      <div className='hidden lg:flex ml-3'> 
        <div className='p-0.5'>
          <Link href={'/urbanTerrain'}>
            <img src='/assets/images/VR_URBAN_TERRAIN/VR_URBAN_TERRAIN_1_01.jpeg' alt='VEST-1' className='w-[400px]' />
          </Link>
        </div>       
        <div className='p-0.5'>
          <Link href={'/urbanTerrain'}>
            <img src='/assets/images/VR_URBAN_TERRAIN/VR_URBAN_TERRAIN_1_02.jpeg' alt='VEST-2' className='w-[400px]' />
          </Link>
        </div>
        <div className='p-0.5 w-[404px]'>
          <TerrainCarousel />                
        </div>
        <div className='box-content h-auto w-1/4 ml-[5%]'>
          <div style={{fontSize: '12px'}}>
            <p className='font-bold'>VR TERRAIN: 1S</p> <br />
              VR Terrain 1S, a visionary concept design that blurs the lines between textiles  and cutting-edge technology. Inspired by the terrain of the city streets and the intricate circuits of a PCB board, this concept redefines the boundaries of textile design and wearable innovation, challenging the way technology should integrate with textiles being that both have their own constraints. This concept exemplifies the resolution of technology and how it can be conceived, like should the wires be visible and how can its visibility inform the textile?  
          <br />
          <br />
          <Counter />
          </div>          
        </div>
      </div>  
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className='hidden lg:flex justify-between'>
      </div>
      <TerrainMobileCarousel />
    </div>
  )
}

export default TerrainComp
