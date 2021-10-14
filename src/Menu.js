import 'bootstrap/dist/css/bootstrap.css'

function Menu(props) { 
    return (
        <>
            <div className="container">
                <div className="card text-center border border-dark">
                    {/* <img className="card-img-top" src="" alt="Card image cap"/> */}
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">{props.description}</p>
                        <p className="card-text fw-bold fst-italic"> {props.price}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Menu;