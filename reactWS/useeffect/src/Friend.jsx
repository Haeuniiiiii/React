
function Friend({name, alias, children}) {    // {name:"", alias:""}
    console.log("체킁")
    return (
        <div>
            <div>Friend</div>
            <div>{name}</div>
            <div>{alias}</div>
            <div>{children}</div>
        </div>
    )
}

export default Friend