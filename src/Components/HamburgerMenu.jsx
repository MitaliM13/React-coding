function HamburgerMenu() {
  return (
    <>
    <div className="hamburger">
        <div className="burger"></div>
        <div className="burger"></div>
        <div className="burger"></div>
    </div>

    <style>{`
        .hamburger{
            width: 2rem;
            height: 2rem;
            display: flex;
            justify-content: space-around;
            flex-flow: column nowrap;
            z-index: 10;
        }

        .burger{
            width: 2rem;
            height: 0.25rem;
            border-radius: 10px;
            background-color: black;
            transfom-origin: 1px;
            transition: all 0.3s linear;
        }

        @media (max-width: 767px){
            .hamburger{
                display:fixed;
                padding-top:10px;
                margin-left: 10px;
                z-index: 10;
            }
        }
    `}</style>
    </>
  )
}

export default HamburgerMenu