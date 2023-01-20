export const TickTacToe=()=>{
    const hAxis = [1,2,3,4,5,6,7,8];
    const vAxis = ['a','b','c','d','e','f','g','h'];
    return <>
    <div className="parent">
    {hAxis.map((h,index)=>{
       return vAxis.map((v,indexv)=>{
            return <div 
            className={(index+ indexv) === 0 ? 'child black' : 'child white'}
            >{index + indexv}</div>
        })
    })}
    </div>
    </>
}