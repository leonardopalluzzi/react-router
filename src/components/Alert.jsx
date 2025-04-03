import { useAlertContext } from "../contexts/AlertContext"

export default function Alert() {

    const { alert, setAlert } = useAlertContext()

    if (alert.message == '') {
        return (
            null
        )
    }

    const emptyAlert = {
        type: '',
        title: '',
        status: '',
        message: ''
    }

    return (

        <div className="container alert text-center position-absolute">
            <div className="card bg-danger d-flex flex-row align-items-center p-3">
                <div className="alert_content col-9">
                    <h5>{alert.title}</h5>
                    <span>{alert.status}</span>
                    <p>{alert.message}</p>
                </div>
                <div className="close col-3">
                    <button onClick={() => setAlert(emptyAlert)} className="btn btn-transparent fs-3 text-dark">X</button>
                </div>
            </div>
        </div>
    )
}