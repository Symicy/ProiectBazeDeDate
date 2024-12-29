
import VehicleCard from "./VehicleCard.jsx";

const VehicleList=({data, user, currentPage, getAllVehicles})=>
{
    const handlePageChange = (newPage) => {
        if (newPage >= 0 && newPage < data.totalPages) {
            getAllVehicles(newPage);
        }
    };

    const showcar=(masina)=>{
        console.log(masina);
    }

    return(
        <main className={'main'}>
            {data?.content?.length===0 && <div>Nici o masina gasita</div>}

            <div className="row">
                {data?.content?.length > 0 && data.content.map(masina => (
                    <div className="col-md-4 mb-3" key={masina.idVehicul}>
                        <VehicleCard masina={masina} user={user}/>
                    </div>
                ))}
            </div>

            {data?.content?.length > 0 && data?.totalPages > 1 &&
                <div className="pagination justify-content-center">
                    <button className="btn btn-primary" onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 0}>
                        Pagina anterioara
                    </button>

                    <p className="text-center">Pagina {currentPage + 1} din {data.totalPages}</p>
                    <button className="btn btn-primary" onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === data.totalPages - 1}>
                        Pagina urmatoare
                    </button>
                </div>
            }

        </main>
    )

}

export default VehicleList;