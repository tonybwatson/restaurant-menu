import 'bootstrap/dist/css/bootstrap.css'

function MenuItem() {
        return (
            <>
                
                <div className="card card-muted text-center">
                    {/* <img className="card-img-top" src="" alt="Card image cap"/> */}
                    <div className="card-body">
                        <h5 className="card-title">Menu Item name</h5>
                        <p className="card-text">Item description</p>
                        <p className="cart-text"> Price
                        {/* {randomNumber} */}
                        </p>
                    </div>
                </div>
            </>
        );
    }

// let randomNumber = () => {
//     return (Math.floor(Math.random * 5))
// }

export default MenuItem;