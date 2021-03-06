import React from 'react';
import ReactDOM from 'react-dom';

function InsertingSpace(){
    return <div>Line1<br/>'&nbsp;'<br/>Line2</div>
}
function SpacesWithNewLines(){
    return <div>&nbsp;Non-breaking&nbsp;Spaces&nbsp;</div>
}

function EmpthyNewLines(){
    return <div>Empty<br/><br/>Newlines<br/><br/>Here</div>
}
function NewLineTest(){
    return <div>NewLine <br/>Test</div>
}

function Isbn(){
    return <li className='isbn'>12-345678-910</li>
}

function Rating(){
    return <li className='rating'>5 starts</li>
}

function Stats(){
    return <ul className='stats'><Rating/><Isbn/></ul>
}

function Author(){
    return <div className='author'>The autor</div>
}

function Title(){
    // return <div className='title'>The Title</div>
    return React.createElement("div",{className:'title'},"The Title")
}

function MyThing(){
    return (
        /* 
        <div className='book'>
            <Title/><Author/><Stats/><NewLineTest/><EmpthyNewLines/><SpacesWithNewLines/>
            <InsertingSpace/>
        </div>
        */
        react.createElement("div",{className='book'},<Title/><Author/><Stats/><NewLineTest/><EmpthyNewLines/><SpacesWithNewLines/>
        <InsertingSpace/>)
    );
}

ReactDOM.render(
    <MyThing/>,
    document.getElementById('root')
)
