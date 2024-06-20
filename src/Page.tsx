function Page(){
    return(
        <div className="page-cont">
            <div className="text-cont">
                <h2>{title}</h2>
             <p>{text}</p>
            </div>
            <div className="words">
                <h4>My words</h4>
                {/*map out any added words*/}
            </div>
            <div className="line"></div>
            <div className="ex-cont"></div>
        </div>
    )
}

export default Page