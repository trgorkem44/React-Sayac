import React from "react";
function Header({number,info}) {
    console.log('header render oldu')
    return ( <>
        <h1 style={{textAlign:'center'}}>Header - {number}-{info?.name}</h1>
    </> );
}

export default React.memo(Header);