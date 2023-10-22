import { RotatingLines } from 'react-loader-spinner';

export const Loader = ()=>{

    const style = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      };

    return(
     <RotatingLines
        style={style}
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
     />
    )
}