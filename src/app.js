import React, {useEffect, useState} from "react";
const App = () => {
    const [users, setUsers] = useState()

useEffect(()=>{
    console.log('APP LOG')

},[])

return (
    <div className="App">
        <h1>
            Hello, Bitrix
        </h1>
        <h2>Start editing to see some magic happen!</h2>
    </div>
)
}


export default App;
