
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

import Image from 'next/image'
import Link from 'next/link';

const DashboardPage = async () => {
    const{getUser} = getKindeServerSession();
    const user = await getUser();
  return (
    <div style={{background: '#FFF3F3'}}>
      <div className='flex h-screen text-center justify-center items-center text-[11px]' >
        <div className='flex mt-[15%] mb-[15%]'>
          <span className='mt-[35px]'>IN PROGRESS</span>
          <Image src={'/assets/images/about-image.png'} width={125} height={75} alt='Image' className='ml-8 mr-8'/>
          <span className='mt-[35px]'>COMING SOON... </span>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage;
