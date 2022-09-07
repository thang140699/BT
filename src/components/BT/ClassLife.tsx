import React, { useEffect } from 'react'

type TestProps = {
     title? :string;
     show: boolean;
     onClick: () => void
     onClickWithParam: (input:boolean) => void
}

const Test: React.FC<TestProps> = props => {
     const{title,show,onClick,onClickWithParam} = props
  useEffect(() => {
    return () => {
      console.log('unmount')
    }
  }, [])

  return <h1> {title} </h1>
}

export default Test
// truyền vào một mảng và ko chuyền vào 1 mảng 
// didmount gọi API, didupdate: lãng nghe dữ liệu thực thi action  ,  

