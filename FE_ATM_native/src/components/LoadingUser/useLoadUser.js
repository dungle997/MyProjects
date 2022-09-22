import { useSelector } from "react-redux";

function useLoadUser() {
    const queces = useSelector(state => state.quece.datas)
    let quece = [{   
        name : "default",
        transaction: 1,
    }]

    if (queces.length>0 && queces.length < 6) {
        quece = queces.slice()
        // console.log("asjdfljalskdf")
    }
    else{
        quece = queces.slice(0,5)
        
    }
    console.log('quece = ', quece)
    return {
        quece
    };
}

export default useLoadUser;