import React from 'react'
import { Button } from '../../../../components/ui/button/button'

export const OrganicCard = () => {
  return (
    <div className='w-[1005] h-[100vh] flex items-center justify-center bg-green-50 '>
        <div className=' w-[1920px] h-[583px] flex items-center justify-between'>
            <div className=' w-[480px] h-[480px] flex items-center justify-center bg-[url("src/page/home/components/organic-card/card-imge/card-img1.png")] bg-no-repeat bg-cover    '>
                <Button className="w-[200px] h-[70px] rounded-xl bg-white" >Organic Juice</Button>
            </div>
            <div className=' w-[480px] h-[480px] flex items-center justify-center bg-[url("src/page/home/components/organic-card/card-imge/card-img2.png")] bg-no-repeat bg-cover    '>
            <Button className="w-[200px] h-[70px] rounded-xl bg-white" >Organic Food</Button>
            </div>
            <div className=' w-[480px] h-[480px] flex items-center justify-center bg-[url("src/page/home/components/organic-card/card-imge/card-img3.png")] bg-no-repeat bg-cover    '>
            <Button className="w-[200px] h-[70px] rounded-xl bg-white" >Nuts Cookis</Button>
            </div>

        </div>
    </div>
  )
}
